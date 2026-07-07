/**
 * File: Header.tsx
 * Purpose: Layout component: Header. Provides structural UI elements shared across multiple pages.
 * 
 * This file is part of the SCAIL project. 
 * Developed with secure and modern React practices.
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Moon, Sun, FileText, BrainCircuit } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';


/**
 * Component: Header
 * 
 * Defines the Header component. Responsible for rendering the UI elements
 * and handling any internal state or side-effects for this section.
 * 
 * @returns {JSX.Element} The rendered component.
 */
export default function Header() {
  const location = useLocation();

  // Handler function for SCAILAIClick events

  const handleSCAILAIClick = (e: React.MouseEvent) => {
    if (location.pathname === '/ai') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Local state to manage isDark
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('scail-theme');
    if (savedTheme === 'light') {
      return false;
    }
    // If no preference exists, or if it's 'dark', default to Dark Mode
    return true; 
  });



  // Side effect executed on mount or dependency change
  useEffect(() => {
    // Only apply the class, do NOT save to localStorage here to avoid overriding user intent
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  // Handler for theme toggle
  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem('scail-theme', newTheme ? 'dark' : 'light');
  };


  return (
    <div className="glass-section px-4 md:px-6 py-1 md:py-2 border-b border-slate-200 dark:!bg-none dark:!bg-[#111827] dark:!border-[rgba(255,255,255,0.08)] relative z-40 transition-colors duration-300">
        <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
          
          <Link to="/" className="flex items-center gap-4 md:gap-6 group w-full md:w-auto">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="w-14 h-14 sm:w-[68px] sm:h-[68px] md:w-28 md:h-28 flex items-center justify-center shrink-0"
            >
              <img 
                src="/images/Scail-logo.jpeg" 
                alt="Superwave Communication & InfraSolution Limited Logo" 
                className="w-full h-full object-contain drop-shadow-md dark:drop-shadow-[0_0_12px_rgba(255,255,255,0.15)] group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.dataset.failed) {
                    target.dataset.failed = "true";
                    e.currentTarget.src = 'https://placehold.co/200x200/2563eb/ffffff?text=SCAIL&font=Montserrat';
                  }
                }}
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className="flex flex-col justify-center py-1"
            >


<h1 className="font-['Noto_Serif'] text-base sm:text-2xl md:text-3xl lg:text-4xl font-medium leading-[1.15] tracking-[-0.02em]">

 <span className="font-semibold text-[#243B82] dark:text-[#D5DDF2]">
  Superwave 
</span>{" "}

  <span className="font-semibold text-[#3FA9D6]">
  Communication
</span>

 <span className="mx-1 font-semibold text-[#2F7E8A]">
  &
</span>
  <br className="hidden sm:block" />

  {/* InfraSolution - Cyan */}
 <span className="font-semibold text-[#3FA9D6]">
  InfraSolution
</span>{" "}
  {/* Limited - Navy */}
  <span className="font-semibold text-[#243B82] dark:text-[#D5DDF2]">
    Limited
  </span>

  <span className="inline-flex items-center ml-2 sm:ml-3 rounded-full bg-[#243B82] border border-[#58C6E8]/30 px-3 py-0.5 text-[10px] sm:text-sm font-bold uppercase tracking-[0.2em] text-[#58C6E8] shadow-lg transform -translate-y-1">
  SCAIL
</span>

</h1>


              {/* <h1 className="text-base sm:text-2xl md:text-3xl lg:text-4xl font-black tracking-tight text-slate-800 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors leading-tight">
                Superwave Communication <span className="text-brand-600 dark:text-brand-500">&</span><br className="hidden sm:block" /> InfraSolution Limited
                <span className="inline-block ml-2 sm:ml-3 align-middle bg-brand-100 dark:bg-brand-900/30 text-brand-700 dark:text-brand-400 text-[10px] sm:text-base md:text-base font-bold px-2 py-0.5 rounded tracking-widest border border-brand-200 dark:border-brand-800 shadow-sm group-hover:shadow-md transition-all">
                  SCAIL
                </span>
              </h1> */}
              <div className="flex items-center gap-2 sm:gap-3 mt-1 md:mt-2">
                <p className="text-[8px] sm:text-[9px] md:text-xs text-slate-500 uppercase tracking-[0.1em] md:tracking-[0.2em] font-semibold hidden sm:block">
                  Engineering Excellence • Digital Transformation
                </p>
              </div>
            </motion.div>
          </Link>

          {/* Right Side Buttons */}
          <div className="flex items-center justify-between md:justify-end w-full md:w-auto gap-3 md:gap-4 shrink-0">
            {/* Brochure Link */}

            {/* Brochure Link */}
<a
  href="/Pdf/brochure.pdf"
  download="SCAIPL_Business_Profile.pdf"
  aria-label="Download Business Profile Brochure"
  className="hidden sm:flex items-center gap-2 px-3 py-2 md:px-4 md:py-2.5 rounded-lg border-transparent text-slate-600 dark:text-slate-300 hover:border-brand-500 dark:hover:border-brand-500 hover:text-brand-600 dark:hover:text-brand-400 transition-colors text-xs md:text-base font-semibold group glass backdrop-blur-sm"
>
  <FileText className="w-4 h-4 md:w-5 md:h-5 text-slate-400 group-hover:text-brand-500 transition-colors" />
  <span className="whitespace-nowrap">Brochure</span>
</a>
            {/* <a 
              href="/Pdf/brochure.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                // Trigger download programmatically while the default action opens it in a new tab
                const link = document.createElement('a');
                link.href = '/Pdf/brochure.pdf';
                link.download = '/Pdf/brochure.pdf'; // Forces download
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              aria-label="View and Download Business Profile Brochure"
              className="hidden sm:flex items-center gap-2 px-3 py-2 md:px-4 md:py-2.5 rounded-lg border-transparent text-slate-600 dark:text-slate-300 hover:border-brand-500 dark:hover:border-brand-500 hover:text-brand-600 dark:hover:text-brand-400 transition-colors text-xs md:text-base font-semibold group glass backdrop-blur-sm"
            >
              <FileText className="w-4 h-4 md:w-5 md:h-5 text-slate-400 group-hover:text-brand-500 transition-colors" />
              <span className="whitespace-nowrap">Brochure</span>
            </a> */}

            {/* SCAIL AI Button */}
            <Link 
              to="/ai" 
              onClick={handleSCAILAIClick}
              className={`relative group overflow-hidden rounded-xl p-[1px] shadow-lg hover:shadow-brand-500/25 transition-all duration-300 flex-1 md:flex-none text-center sm:text-left ${(location.pathname === '/ai' || location.pathname.startsWith('/ai/')) ? 'ring-2 ring-brand-500 ring-offset-2 dark:ring-offset-slate-950 scale-[1.02]' : ''}`}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-brand-600 via-cyan-500 to-brand-500 group-hover:opacity-80 transition-opacity duration-300"></span>
              <div className="relative flex items-center justify-center gap-2 px-3 py-2 md:px-5 md:py-2.5 glass-card rounded-[11px] group-hover:bg-transparent transition-colors duration-300">
                <BrainCircuit className="w-5 h-5 md:w-6 md:h-6 text-brand-600 dark:text-cyan-400 group-hover:text-white group-hover:animate-pulse transition-colors" />
                <span className="font-display font-black text-xs md:text-base tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-brand-600 to-cyan-600 dark:from-brand-400 dark:to-cyan-400 group-hover:text-white transition-colors duration-300">
                  SCAIL AI
                </span>
              </div>
            </Link>

            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme}
              className="relative p-2 md:p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-brand-600 dark:hover:text-brand-400 transition-all duration-500 overflow-hidden shadow-inner group shrink-0"
              aria-label="Toggle Theme"
            >
              <div className="relative z-10">
                {isDark ? (
                  <Sun className="w-7 h-7 md:w-8 md:h-8 transition-transform duration-500 group-hover:rotate-90" />
                ) : (
                  <Moon className="w-7 h-7 md:w-8 md:h-8 transition-transform duration-500 group-hover:-rotate-12" />
                )}
              </div>
              {/* Animated glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full blur-md"></div>
            </button>
          </div>
        </div>
      </div>
  );
}