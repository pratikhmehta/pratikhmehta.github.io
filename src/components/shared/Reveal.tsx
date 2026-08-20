import React, { createContext, useContext, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { duration, easeStandard, revealDistance, staggerContainer, staticVariants } from '../../lib/motion';

const itemVariants = {
  hidden: { opacity: 0, y: revealDistance.desktop },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.base, ease: easeStandard },
  },
};

const itemVariantsMobile = {
  hidden: { opacity: 0, y: revealDistance.mobile },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.base, ease: easeStandard },
  },
};

export const RevealContext = createContext(false);

interface RevealProps {
  children: React.ReactNode;
  className?: string;
}

export const Reveal: React.FC<RevealProps> = ({ children, className }) => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const prefersReducedMotion = useReducedMotion();

  return (
    <RevealContext.Provider value={inView}>
      <motion.div
        ref={ref}
        variants={prefersReducedMotion ? staticVariants : staggerContainer(0.08)}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className={className}
      >
        {children}
      </motion.div>
    </RevealContext.Provider>
  );
};

interface RevealItemProps {
  children: React.ReactNode;
  className?: string;
}

export const RevealItem: React.FC<RevealItemProps> = ({ children, className }) => {
  const inView = useContext(RevealContext);
  const prefersReducedMotion = useReducedMotion();
  const [isMobile] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(max-width: 640px)').matches
  );

  return (
    <motion.div
      variants={
        prefersReducedMotion ? staticVariants : isMobile ? itemVariantsMobile : itemVariants
      }
      animate={inView ? 'visible' : 'hidden'}
      className={className}
    >
      {children}
    </motion.div>
  );
};
