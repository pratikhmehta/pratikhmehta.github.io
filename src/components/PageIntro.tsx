import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { easeStandard } from '../lib/motion';

const INTRO_SEEN_KEY = 'introSeen';

/**
 * Brief monogram intro on first load only (session-scoped). Content behind
 * it mounts immediately — this is a fast overlay, never a render-blocker.
 */
const PageIntro: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const [visible, setVisible] = useState(
    () => typeof window !== 'undefined' && !sessionStorage.getItem(INTRO_SEEN_KEY)
  );

  useEffect(() => {
    if (!visible) return;
    if (prefersReducedMotion) {
      sessionStorage.setItem(INTRO_SEEN_KEY, 'true');
      setVisible(false);
      return;
    }

    const timer = setTimeout(() => {
      sessionStorage.setItem(INTRO_SEEN_KEY, 'true');
      setVisible(false);
    }, 900);

    return () => clearTimeout(timer);
  }, [visible, prefersReducedMotion]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          aria-hidden="true"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-paper-50 dark:bg-ink-950"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: easeStandard, delay: 0.1 } }}
        >
          <motion.span
            className="font-display text-2xl font-semibold text-slate-900 dark:text-white"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: easeStandard }}
          >
            PM
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageIntro;
