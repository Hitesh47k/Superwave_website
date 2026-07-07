/**
 * File: AnimatedCounter.tsx
 * Purpose: UI component: AnimatedCounter. Reusable interface element.
 * 
 * This file is part of the SCAIL project. 
 * Developed with secure and modern React practices.
 */

import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'motion/react';

/**
 * Component: AnimatedCounter
 * 
 * Defines the AnimatedCounter component. Responsible for rendering the UI elements
 * and handling any internal state or side-effects for this section.
 * 
 * @returns {JSX.Element} The rendered component.
 */
export default function AnimatedCounter({ value, suffix = "", isFloat = false }: { value: number, suffix?: string, isFloat?: boolean }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let startTimestamp: number;
      const duration = 2000;
      
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        
        // easeOutQuart
        const easeProgress = 1 - Math.pow(1 - progress, 4);
        const currentCount = easeProgress * value;
        
        setCount(currentCount);
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          setCount(value);
        }
      };
      
      window.requestAnimationFrame(step);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {isFloat ? count.toFixed(1) : Math.floor(count)}
      {suffix}
    </span>
  );
}
