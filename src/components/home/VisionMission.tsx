/**
 * File: VisionMission.tsx
 * Purpose: Home section component: VisionMission. Specific section used on the landing page.
 * 
 * This file is part of the SCAIL project. 
 * Developed with secure and modern React practices.
 */

import React from 'react';
import { motion } from 'motion/react';
import { Target, Compass, CheckCircle2 } from 'lucide-react';

const MISSION_POINTS = [
  "Deliver innovative and reliable technology solutions.",
  "Drive digital transformation through AI and automation.",
  "Build intelligent transportation ecosystems.",
  "Empower businesses with enterprise IT services.",
  "Ensure customer satisfaction through quality and excellence.",
  "Foster sustainable growth through innovation and integrity."
];

/**
 * Component: VisionMission
 * 
 * Defines the VisionMission component. Responsible for rendering the UI elements
 * and handling any internal state or side-effects for this section.
 * 
 * @returns {JSX.Element} The rendered component.
 */
export default function VisionMission() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -left-6 -top-6 w-24 h-24 bg-brand-200 dark:bg-brand-900/30 rounded-full blur-2xl opacity-60"></div>
            <div className="relative glass-card rounded-3xl p-8 md:p-12 shadow-xl shadow-brand-500/5">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-brand-100 dark:bg-brand-900/40 rounded-2xl flex items-center justify-center text-brand-600 dark:text-brand-400 border border-brand-200 dark:border-brand-800 shrink-0">
                  <Compass className="w-7 h-7" />
                </div>
                <h3 className="text-3xl font-display font-bold text-slate-900 dark:text-white">Our Vision</h3>
              </div>
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                "To become India's most trusted technology and infrastructure company by delivering intelligent transportation systems, enterprise IT services, AI-driven innovation, and smart infrastructure solutions that create a safer, smarter, and more connected future. We envision empowering governments, enterprises, and communities through cutting-edge digital transformation, sustainable innovation, and future-ready technologies. "
              </p>
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-900/40 rounded-2xl flex items-center justify-center text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-3xl font-display font-bold text-slate-900 dark:text-white">Our Mission</h3>
            </div>
            
            <div className="space-y-6">
              {MISSION_POINTS.map((point, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center border border-brand-200 dark:border-brand-800">
                    <CheckCircle2 className="w-4 h-4 text-brand-600 dark:text-brand-400" />
                  </div>
                  <p className="text-lg text-slate-700 dark:text-slate-300">
                    {point}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
