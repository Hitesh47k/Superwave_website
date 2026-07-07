/**
 * File: ScrollProgress.tsx
 * Purpose: UI component: ScrollProgress. Reusable interface element.
 * 
 * This file is part of the SCAIL project. 
 * Developed with secure and modern React practices.
 */

import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

/**
 * Component: ScrollProgress
 * 
 * Defines the ScrollProgress component. Responsible for rendering the UI elements
 * and handling any internal state or side-effects for this section.
 * 
 * @returns {JSX.Element} The rendered component.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-brand-600 origin-left z-[10000]"
      style={{ scaleX }}
    />
  );
}
