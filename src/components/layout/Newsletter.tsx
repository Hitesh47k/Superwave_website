/**
 * File: Newsletter.tsx
 * Purpose: Layout component: Newsletter. Provides structural UI elements shared across multiple pages.
 * 
 * This file is part of the SCAIL project. 
 * Developed with secure and modern React practices.
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, ArrowRight, CheckCircle2 } from 'lucide-react';

/**
 * Component: Newsletter
 * 
 * Defines the Newsletter component. Responsible for rendering the UI elements
 * and handling any internal state or side-effects for this section.
 * 
 * @returns {JSX.Element} The rendered component.
 */
export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setMessage('Thank you for subscribing to our newsletter!');
      setEmail('');
    }, 1500);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with glassmorphism */}
      <div className="absolute inset-0 bg-brand-900 z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=3544&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-900/90 to-brand-800/80 backdrop-blur-[2px]"></div>
      </div>

      <div className="container-custom md:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-8 border border-white/20">
            <Mail className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            Stay Ahead with SCAIL
          </h2>
          <p className="text-lg text-brand-100 mb-10 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest updates on infrastructure innovations, digital transformation trends, and company news.
          </p>

          <form onSubmit={handleSubmit} className="relative max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  type="email"
                  required
                  maxLength={150}
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === 'error') setStatus('idle');
                  }}
                  disabled={status === 'loading' || status === 'success'}
                  placeholder="Enter your email address"
                  className="block w-full pl-11 pr-4 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-brand-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all"
                />
              </div>
              <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className="inline-flex items-center justify-center px-6 py-4 border border-transparent rounded-xl shadow-sm text-base font-medium text-brand-900 bg-white hover:bg-brand-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 transition-colors disabled:opacity-70 disabled:cursor-not-allowed shrink-0"
              >
                {status === 'loading' ? (
                  <span className="flex items-center">
                    <div className="w-5 h-5 border-2 border-brand-900 border-t-transparent rounded-full animate-spin mr-2"></div>
                    Subscribing...
                  </span>
                ) : status === 'success' ? (
                  <span className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 mr-2 text-green-600" />
                    Subscribed
                  </span>
                ) : (
                  <span className="flex items-center">
                    Subscribe <ArrowRight className="w-5 h-5 ml-2" />
                  </span>
                )}
              </button>
            </div>
            
            {/* Status Messages */}
            {status === 'error' && (
              <p className="absolute -bottom-8 left-0 w-full text-red-300 text-sm mt-2">{message}</p>
            )}
            {status === 'success' && (
              <p className="absolute -bottom-8 left-0 w-full text-green-300 text-sm mt-2">{message}</p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
