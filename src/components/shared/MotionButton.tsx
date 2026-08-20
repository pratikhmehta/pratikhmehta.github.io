import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { buttonHover } from '../../lib/motion';

interface MotionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

/** Shared micro-interaction (scale on hover/tap) for buttons, GPU-only. */
export const MotionButton: React.FC<MotionButtonProps> = ({ children, className, ...rest }) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.button
      className={className}
      initial="rest"
      whileHover={prefersReducedMotion ? undefined : 'hover'}
      whileTap={prefersReducedMotion ? undefined : 'tap'}
      variants={buttonHover}
      {...rest}
    >
      {children}
    </motion.button>
  );
};

interface MotionAnchorProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

export const MotionAnchor: React.FC<MotionAnchorProps> = ({ children, className, ...rest }) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.a
      className={className}
      initial="rest"
      whileHover={prefersReducedMotion ? undefined : 'hover'}
      whileTap={prefersReducedMotion ? undefined : 'tap'}
      variants={buttonHover}
      {...rest}
    >
      {children}
    </motion.a>
  );
};
