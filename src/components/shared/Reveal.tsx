import React, { createContext, useContext } from 'react';
import { motion, useReducedMotion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const staticVariants: Variants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1 },
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
        variants={prefersReducedMotion ? staticVariants : containerVariants}
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

  return (
    <motion.div
      variants={prefersReducedMotion ? staticVariants : itemVariants}
      animate={inView ? 'visible' : 'hidden'}
      className={className}
    >
      {children}
    </motion.div>
  );
};
