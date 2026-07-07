/**
 * File: TypewriterHeading.tsx
 * Purpose: UI component: TypewriterHeading. Reusable interface element.
 * 
 * This file is part of the SCAIL project. 
 * Developed with secure and modern React practices.
 */
import React, { useState, useEffect } from 'react';

export type TextPart = {
  text: string;
  className?: string;
};

interface TypewriterHeadingProps {
  parts: TextPart[];
  className?: string;
  speed?: number;
  pause?: number;
  loop?: boolean;
  onComplete?: () => void;
  start?: boolean;
  cursorType?: 'pen' | 'small-pen' | 'cursor';
  hideCursorOnComplete?: boolean;
  as?: React.ElementType;
}

const RealisticPen = ({ className, style, isSmall }: { className?: string; style?: React.CSSProperties; isSmall?: boolean }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox={isSmall ? "0 75 25 25" : "0 0 100 100"} 
    className={className}
    style={{ filter: 'drop-shadow(-4px 4px 5px rgba(0,0,0,0.3))', ...style }}
  >
    <defs>
      <linearGradient id="penBody" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0f172a" />
        <stop offset="50%" stopColor="#334155" />
        <stop offset="100%" stopColor="#020617" />
      </linearGradient>
      <linearGradient id="penNib" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fbbf24" />
        <stop offset="100%" stopColor="#b45309" />
      </linearGradient>
      <linearGradient id="penGrip" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#334155" />
        <stop offset="100%" stopColor="#0f172a" />
      </linearGradient>
      <linearGradient id="penTrim" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fbbf24" />
        <stop offset="100%" stopColor="#b45309" />
      </linearGradient>
    </defs>
    
    {/* Body */}
    <path d="M 38 48 L 83 3 A 10 10 0 0 1 97 17 L 52 62 Z" fill="url(#penBody)" stroke="#1e293b" strokeWidth="0.5"/>
    
    {/* Trim Ring */}
    <path d="M 36 50 L 38 48 L 52 62 L 50 64 Z" fill="url(#penTrim)" />
    
    {/* Grip */}
    <path d="M 18 68 L 36 50 L 50 64 L 32 82 Z" fill="url(#penGrip)" stroke="#1e293b" strokeWidth="0.5" />
    
    {/* Trim Ring 2 */}
    <path d="M 16 70 L 18 68 L 32 82 L 30 84 Z" fill="url(#penTrim)" />
    
    {/* Nib */}
    <path d="M 0 100 L 16 70 C 20 70 25 75 30 84 Z" fill="url(#penNib)" stroke="#78350f" strokeWidth="0.5"/>
    
    {/* Line on Nib */}
    <path d="M 0 100 L 15 85" stroke="#78350f" strokeWidth="1" strokeLinecap="round"/>
    
    {/* Hole in Nib */}
    <circle cx="16" cy="84" r="2.5" fill="#000" />
    <circle cx="16" cy="84" r="2.5" fill="none" stroke="#78350f" strokeWidth="0.5"/>
  </svg>
);

/**
 * Component: TypewriterHeading
 * 
 * Defines the TypewriterHeading component. Responsible for rendering the UI elements
 * and handling any internal state or side-effects for this section.
 * 
 * @returns {JSX.Element} The rendered component.
 */
export default function TypewriterHeading({
  parts,
  className = '',
  speed = 60,
  pause = 2500,
  loop = false,
  onComplete,
  start = true,
  cursorType = 'pen',
  hideCursorOnComplete = false,
  as: Component = 'h1',
}: TypewriterHeadingProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [hasCompleted, setHasCompleted] = useState(false);
  
  const prefersReducedMotion = typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    : false;

  const flattenedChars = React.useMemo(() => {
    return parts.flatMap((part) =>
      part.text.split('').map((char) => ({ char, className: part.className }))
    );
  }, [parts]);

  useEffect(() => {
    if (prefersReducedMotion) {
      setCurrentIndex(flattenedChars.length);
      setIsPaused(true);
      if (!hasCompleted) {
        setHasCompleted(true);
        if (onComplete) onComplete();
      }
      return;
    }

    if (!start) return;

    if (isPaused) {
      if (loop) {
        const timeout = setTimeout(() => {
          setCurrentIndex(0);
          setIsPaused(false);
          setHasCompleted(false);
        }, pause);
        return () => clearTimeout(timeout);
      }
      return;
    }

    if (currentIndex < flattenedChars.length) {
      const timeout = setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      setIsPaused(true);
      if (!hasCompleted) {
        setHasCompleted(true);
        if (onComplete) onComplete();
      }
    }
  }, [currentIndex, isPaused, flattenedChars.length, speed, pause, loop, prefersReducedMotion, start, hasCompleted, onComplete]);

  return (
    <Component className={className}>
      <span className="sr-only">
        {parts.map(p => p.text).join('')}
      </span>
      <span aria-hidden="true">
        {flattenedChars.map((item, idx) => {
          const isVisible = idx < currentIndex;
          const isCursorPos = idx === currentIndex;
          const isLastCharAndDone = idx === flattenedChars.length - 1 && currentIndex === flattenedChars.length;
          
          return (
            <span key={idx} className="relative">
              <span className={item.className} style={{ visibility: isVisible ? 'visible' : 'hidden' }}>
                {item.char}
              </span>
              {isCursorPos && (
                cursorType === 'pen' || cursorType === 'small-pen' ? (
                  <span 
                    className="absolute left-0 bottom-0 z-10 animate-writing-pen pointer-events-none"
                    style={{ transformOrigin: 'bottom left' }}
                  >
                    <RealisticPen 
                      isSmall={cursorType === 'small-pen'}
                      className={cursorType === 'small-pen' 
                        ? "w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" 
                        : "w-16 h-16 md:w-20 md:h-20 lg:w-28 lg:h-28"} 
                    />
                  </span>
                ) : (
                  <span 
                    className="absolute left-0 top-0 opacity-100 text-cyan-400 dark:text-brand-400 font-normal"
                    style={{ animation: 'blink 1s step-end infinite' }}
                  >
                    |
                  </span>
                )
              )}
              {isLastCharAndDone && !hideCursorOnComplete && (
                cursorType === 'pen' || cursorType === 'small-pen' ? (
                  <span 
                    className="absolute left-full bottom-0 z-10 pointer-events-none animate-pen-fade-out"
                    style={{ transformOrigin: 'bottom left' }}
                  >
                    <RealisticPen 
                      isSmall={cursorType === 'small-pen'}
                      className={cursorType === 'small-pen' 
                        ? "w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" 
                        : "w-16 h-16 md:w-20 md:h-20 lg:w-28 lg:h-28"} 
                    />
                  </span>
                ) : (
                  <span 
                    className="absolute left-full top-0 opacity-100 text-cyan-400 dark:text-brand-400 font-normal"
                    style={{ animation: 'blink 1s step-end infinite' }}
                  >
                    |
                  </span>
                )
              )}
            </span>
          );
        })}
      </span>
      <style>{`
        @keyframes writing-pen {
          0% { transform: rotate(-15deg) translateY(0px) translateX(0px); }
          25% { transform: rotate(-20deg) translateY(-4px) translateX(2px); }
          50% { transform: rotate(-13deg) translateY(2px) translateX(-2px); }
          75% { transform: rotate(-18deg) translateY(-2px) translateX(2px); }
          100% { transform: rotate(-15deg) translateY(0px) translateX(0px); }
        }
        .animate-writing-pen {
          animation: writing-pen 0.2s ease-in-out infinite;
        }
        @keyframes pen-fade-out {
          0%, 60% { opacity: 1; transform: rotate(-15deg); }
          100% { opacity: 0; transform: rotate(-15deg); }
        }
        .animate-pen-fade-out {
          animation: pen-fade-out 2.5s ease-in-out forwards;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </Component>
  );
}
