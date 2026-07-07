/**
 * File: FAQ.tsx
 * Purpose: Layout component: FAQ. Provides structural UI elements shared across multiple pages.
 * 
 * This file is part of the SCAIL project. 
 * Developed with secure and modern React practices.
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const FAQS = [
  {
    question: "What industries does SCAIL serve?",
    answer: "We primarily serve the transportation, telecommunications, and government sectors, offering specialized infrastructure solutions like Toll Management Systems, Highway Lighting, and IT services."
  },
  {
    question: "Do you offer customized software solutions?",
    answer: "Yes, we specialize in bespoke software development tailored to unique business requirements, including enterprise resource planning (ERP), advanced traffic management, and custom IT infrastructure."
  },
  {
    question: "What is your approach to digital transformation?",
    answer: "Our approach integrates modern technologies like AI, cloud computing, and IoT into existing business processes to enhance efficiency, reduce costs, and create new value for our clients."
  },
  {
    question: "How do you ensure data security in your IT solutions?",
    answer: "We employ industry-leading security protocols, continuous monitoring, and rigorous compliance standards to safeguard client data and ensure highly secure IT infrastructures."
  },
  {
    question: "Are your Toll Management Systems ready for electronic wallets?",
    answer: "Absolutely. Our Advance Toll Management Systems (ATMS) are fully equipped to handle CCH transaction processing and seamlessly integrate with various electronic wallet systems and RFID tech."
  },
  {
    question: "Can SCAIL handle large-scale infrastructure projects?",
    answer: "Yes, we have a proven track record of successfully executing large-scale, turnkey infrastructure projects across the nation, leveraging our experienced engineering teams and robust supply chain."
  }
];

/**
 * Component: FAQ
 * 
 * Defines the FAQ component. Responsible for rendering the UI elements
 * and handling any internal state or side-effects for this section.
 * 
 * @returns {JSX.Element} The rendered component.
 */
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 glass-section">
      <div className="container-custom md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-brand-600 dark:text-brand-400 font-semibold tracking-wide uppercase text-sm mb-3">Support & Info</h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6">Frequently Asked Questions</h3>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Find answers to common questions about our services, solutions, and project implementation.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`glass-card border ${isOpen ? 'border-brand-500' : 'border-slate-200 dark:border-white/10'} rounded-xl overflow-hidden transition-colors duration-300 shadow-sm`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                >
                  <span className={`font-semibold text-lg pr-8 ${isOpen ? 'text-brand-600 dark:text-brand-400' : 'text-slate-900 dark:text-white'}`}>
                    {faq.question}
                  </span>
                  <ChevronDown 
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-brand-500' : ''}`} 
                  />
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
