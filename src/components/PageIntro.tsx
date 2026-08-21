import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { easeStandard } from '../lib/motion';

const INTRO_SEEN_KEY = 'introSeen';
const RING_RADIUS = 46;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;

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
    }, 400);

    return () => clearTimeout(timer);
  }, [visible, prefersReducedMotion]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          aria-hidden="true"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-paper-50 dark:bg-ink-950"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.25, ease: easeStandard } }}
        >
          <motion.div
            className="relative flex items-center justify-center w-24 h-24"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2, ease: easeStandard }}
          >
            <svg
              viewBox="0 0 100 100"
              className="absolute inset-0 w-full h-full -rotate-90 text-accent-500 dark:text-accent-400"
            >
              <circle
                cx="50"
                cy="50"
                r={RING_RADIUS}
                fill="none"
                stroke="currentColor"
                strokeOpacity={0.15}
                strokeWidth={2}
              />
              <motion.circle
                cx="50"
                cy="50"
                r={RING_RADIUS}
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeDasharray={RING_CIRCUMFERENCE}
                initial={{ strokeDashoffset: RING_CIRCUMFERENCE }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 0.35, ease: easeStandard, delay: 0.05 }}
              />
            </svg>

            <motion.span
              className="font-display text-2xl font-semibold text-slate-900 dark:text-white"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, ease: easeStandard, delay: 0.1 }}
            >
              PM
            </motion.span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageIntro;
