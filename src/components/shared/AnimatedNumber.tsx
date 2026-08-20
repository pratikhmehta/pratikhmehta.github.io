import React, { useContext, useEffect, useRef } from 'react';
import { animate, useReducedMotion } from 'framer-motion';
import { RevealContext } from './Reveal';

interface AnimatedNumberProps {
  value: string;
  className?: string;
}

const parseValue = (value: string) => {
  const match = value.match(/^([^\d]*)([\d,]*\.?\d+)(.*)$/);
  if (!match) return null;
  const [, prefix, numericText, suffix] = match;
  const numeric = parseFloat(numericText.replace(/,/g, ''));
  if (Number.isNaN(numeric)) return null;
  const hasComma = numericText.includes(',');
  const decimals = numericText.includes('.') ? numericText.split('.')[1].length : 0;
  return { prefix, numeric, suffix, hasComma, decimals };
};

const formatNumber = (n: number, hasComma: boolean, decimals: number) => {
  const fixed = n.toFixed(decimals);
  if (!hasComma) return fixed;
  const [intPart, decPart] = fixed.split('.');
  const withCommas = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return decPart ? `${withCommas}.${decPart}` : withCommas;
};

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ value, className }) => {
  const parsed = parseValue(value);
  const spanRef = useRef<HTMLSpanElement>(null);
  const inView = useContext(RevealContext);
  const prefersReducedMotion = useReducedMotion();
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!parsed || !spanRef.current) return;
    if (!inView || hasAnimated.current) return;
    hasAnimated.current = true;

    if (prefersReducedMotion) {
      spanRef.current.textContent = `${parsed.prefix}${formatNumber(parsed.numeric, parsed.hasComma, parsed.decimals)}${parsed.suffix}`;
      return;
    }

    const controls = animate(0, parsed.numeric, {
      duration: 1.2,
      ease: 'easeOut',
      onUpdate(latest) {
        if (spanRef.current) {
          spanRef.current.textContent = `${parsed.prefix}${formatNumber(latest, parsed.hasComma, parsed.decimals)}${parsed.suffix}`;
        }
      },
    });

    return () => controls.stop();
  }, [inView, parsed, prefersReducedMotion]);

  if (!parsed) {
    return <span className={className}>{value}</span>;
  }

  return (
    <span ref={spanRef} className={className}>
      {parsed.prefix}0{parsed.suffix}
    </span>
  );
};

export default AnimatedNumber;
