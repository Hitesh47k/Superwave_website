/**
 * File: CustomCursor.tsx
 * Purpose: UI component: CustomCursor. Reusable interface element.
 * 
 * This file is part of the SCAIL project. 
 * Developed with secure and modern React practices.
 */

import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'motion/react';

/**
 * Component: CustomCursor
 * 
 * Defines the CustomCursor component. Responsible for rendering the UI elements
 * and handling any internal state or side-effects for this section.
 * 
 * @returns {JSX.Element} The rendered component.
 */
export default function CustomCursor() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const [hoverText, setHoverText] = useState("");
  const [magneticPos, setMagneticPos] = useState({ x: 0, y: 0, active: false, width: 0, height: 0 });

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const dotX = useTransform(cursorX, v => v - 4);
  const dotY = useTransform(cursorY, v => v - 4);
  const circleX = useTransform(cursorXSpring, v => v - (isHovering ? (hoverText ? 64 : 48) : 32) / 2);
  const circleY = useTransform(cursorYSpring, v => v - (isHovering ? (hoverText ? 64 : 48) : 32) / 2);

  useEffect(() => {
    // Check if it's a touch device
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
      return;
    }

    // Respect reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      // We could disable or simplify, but hiding is easiest to avoid overriding system cursor
      setIsTouchDevice(true); 
      return;
    }

    const updateCursor = (e: MouseEvent) => {
      setIsHidden(false);

      const target = e.target as HTMLElement;
      
      // Magnetic effect
      const magneticTarget = target.closest('.btn-premium') as HTMLElement;
      if (magneticTarget) {
        const rect = magneticTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        // Pull cursor slightly towards center
        const pullX = (e.clientX - centerX) * 0.2;
        const pullY = (e.clientY - centerY) * 0.2;
        
        cursorX.set(centerX + pullX);
        cursorY.set(centerY + pullY);
        setMagneticPos({ x: centerX, y: centerY, active: true, width: rect.width, height: rect.height });
      } else {
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);
        setMagneticPos({ x: 0, y: 0, active: false, width: 0, height: 0 });
      }

      // Hover states
      const isLink = target.closest('a');
      const isButton = target.closest('button, [role="button"], .btn-premium');
      const isInput = target.closest('input, select, textarea');
      const isCard = target.closest('.card-hover, .glass-card, [class*="card"]');
      const isImage = target.closest('img');
      const isGallery = target.closest('.gallery-item'); // Assuming we add this class or it targets specific wrappers

      if (isLink || isButton || isInput || isCard || isImage || isGallery) {
        setIsHovering(true);
        if ((isImage || isGallery) && !isButton) {
          setHoverText("View");
        } else if (isCard && !isButton && !isLink) {
          setHoverText("Open");
        } else {
          setHoverText("");
        }
      } else {
        setIsHovering(false);
        setHoverText("");
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    
    const handleMouseLeave = () => setIsHidden(true);
    const handleMouseEnter = () => setIsHidden(false);

    window.addEventListener('mousemove', updateCursor, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [cursorX, cursorY]);

  if (isTouchDevice) return null;

  const size = isHovering ? (hoverText ? 64 : 48) : 32;
  const opacity = isHidden ? 0 : 1;

  return (
    <>
      <style>{`
        * {
          cursor: none !important;
        }
      `}</style>

      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-brand-600 dark:bg-brand-400 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: dotX,
          y: dotY,
          opacity: (isHovering && !hoverText) ? 0 : opacity,
          scale: isClicking ? 0.5 : 1
        }}
      />

      {/* Outer Circle */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] flex items-center justify-center overflow-hidden"
        style={{
          x: circleX,
          y: circleY,
          width: size,
          height: size,
          opacity: opacity,
          scale: isClicking ? 0.8 : 1,
          backgroundColor: isHovering ? 'rgba(37, 99, 235, 0.1)' : 'transparent',
          border: isHovering ? '1px solid rgba(37, 99, 235, 0.3)' : '1px solid rgba(148, 163, 184, 0.4)',
          boxShadow: isHovering ? '0 0 15px rgba(37, 99, 235, 0.2)' : 'none',
          backdropFilter: hoverText ? 'blur(2px)' : 'none'
        }}
        animate={{
          backgroundColor: isHovering 
            ? 'rgba(37, 99, 235, 0.1)' 
            : document.documentElement.classList.contains('dark') ? 'rgba(255, 255, 255, 0)' : 'rgba(0, 0, 0, 0)',
          borderColor: isHovering 
            ? 'rgba(37, 99, 235, 0.4)' 
            : document.documentElement.classList.contains('dark') ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.2)',
        }}
        transition={{ duration: 0.2 }}
      >
        <AnimatePresence>
          {hoverText && (
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="text-[10px] font-bold tracking-wider text-brand-700 dark:text-brand-300 uppercase"
            >
              {hoverText}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
