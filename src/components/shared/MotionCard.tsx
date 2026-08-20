import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { cardHover } from '../../lib/motion';

interface MotionCardProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Shared hover/tap physics for interactive cards (projects, certifications,
 * education, POCs). Keeps lift + shadow consistent everywhere it's used.
 */
const MotionCard: React.FC<MotionCardProps> = ({ children, className }) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial="rest"
      whileHover={prefersReducedMotion ? undefined : 'hover'}
      whileTap={prefersReducedMotion ? undefined : 'tap'}
      whileFocus={prefersReducedMotion ? undefined : 'hover'}
      variants={cardHover}
      style={{ willChange: 'transform' }}
    >
      {children}
    </motion.div>
  );
};

export default MotionCard;
