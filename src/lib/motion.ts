import { Transition, Variants } from 'framer-motion';

/**
 * Shared motion tokens. Every animated component pulls timing/easing from
 * here so the whole site moves with one consistent, Apple-like rhythm.
 */

// Apple-esque "ease out expo"-adjacent curve: quick start, long soft settle.
export const easeStandard = [0.16, 1, 0.3, 1] as const;

export const duration = {
  fast: 0.25,
  base: 0.45,
  slow: 0.7,
};

export const springSnappy: Transition = {
  type: 'spring',
  stiffness: 380,
  damping: 30,
  mass: 0.9,
};

export const revealDistance = {
  mobile: 12,
  desktop: 20,
};

const isMobileViewport = () =>
  typeof window !== 'undefined' && window.matchMedia('(max-width: 640px)').matches;

export const getRevealDistance = () =>
  isMobileViewport() ? revealDistance.mobile : revealDistance.desktop;

export const fadeUp = (distance = revealDistance.desktop): Variants => ({
  hidden: { opacity: 0, y: distance },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.base, ease: easeStandard },
  },
});

export const fadeScale: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: duration.base, ease: easeStandard },
  },
};

export const staticVariants: Variants = {
  hidden: { opacity: 1, y: 0, scale: 1 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

export const staggerContainer = (stagger = 0.08, delayChildren = 0): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: stagger, delayChildren },
  },
});

// GPU-friendly card hover: lift + soft shadow via transform/opacity only.
export const cardHover = {
  rest: { y: 0, scale: 1 },
  hover: {
    y: -6,
    scale: 1.01,
    transition: { duration: duration.fast, ease: easeStandard },
  },
  tap: { scale: 0.99 },
};

// Micro-interaction for buttons/icon-buttons.
export const buttonHover = {
  rest: { scale: 1 },
  hover: { scale: 1.03, transition: { duration: duration.fast, ease: easeStandard } },
  tap: { scale: 0.97, transition: { duration: 0.15, ease: easeStandard } },
};
