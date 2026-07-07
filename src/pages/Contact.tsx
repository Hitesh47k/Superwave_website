/**
 * File: Contact.tsx
 * Purpose: Page component for Contact. Handles the UI and routing for this specific route.
 * 
 * This file is part of the SCAIL project. 
 * Developed with secure and modern React practices.
 */

import { motion, AnimatePresence } from 'motion/react';
import { UploadCloud, MapPin, Mail, Phone, Clock, Send, Loader2, CheckCircle2 } from 'lucide-react';
import React, { useState } from 'react';
import { CONTACT_CONFIG } from '../config/constants';
import SEO from '../components/seo/SEO';

/**
 * Component: Contact
 * 
 * Defines the Contact component. Responsible for rendering the UI elements
 * and handling any internal state or side-effects for this section.
 * 
 * @returns {JSX.Element} The rendered component.
 */
export default function Contact() {
  // Local state to manage formData
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', company: '', message: ''
  });
  
  // Local state to manage isSubmitting
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  // Local state to manage isSuccess
  const [isSuccess, setIsSuccess] = useState(false);

  // Handler function for Submit events

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen">
      <SEO 
        title="Contact Us"
        description="Get in touch with SCAIL for enterprise infrastructure, smart toll solutions, and AI automation consultations."
      />
      {/* Page Header */}
      <div className="bg-slate-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Get in Touch</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Ready to transform your infrastructure? Contact our team of experts for a free consultation and project estimation.
          </p>
        </div>
      </div>

      <div className="container-custom py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-2/3 glass-card glass-panel p-8 md:p-12 shadow-xl"
          >
            <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-6">Send us a Message</h2>
            <form onSubmit={(e) => { e.preventDefault(); handleSubmit(e); }} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Full Name *</label>
                  <input type="text" required maxLength={100} pattern="^[a-zA-Z\s\-]+$" title="Only letters, spaces, and hyphens are allowed." className="w-full bg-slate-50 dark:bg-slate-800 border-transparent rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all duration-300 text-slate-900 dark:text-white" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email Address *</label>
                  <input type="email" required maxLength={150} className="w-full bg-slate-50 dark:bg-slate-800 border-transparent rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all duration-300 text-slate-900 dark:text-white" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Mobile Number *</label>
                  <input type="tel" required maxLength={20} pattern="^\+?[0-9\-\s()]+$" title="Only numbers and phone formatting characters allowed." className="w-full bg-slate-50 dark:bg-slate-800 border-transparent rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all duration-300 text-slate-900 dark:text-white" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Company / Organization</label>
                  <input type="text" maxLength={150} className="w-full bg-slate-50 dark:bg-slate-800 border-transparent rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all duration-300 text-slate-900 dark:text-white" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">How can we help you?</label>
                <textarea rows={5} maxLength={1000} required className="w-full bg-slate-50 dark:bg-slate-800 border-transparent rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all duration-300 text-slate-900 dark:text-white"></textarea>
              </div>

              {/* File Upload Area */}
              <div className="border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-xl p-8 text-center hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer group">
                <UploadCloud className="w-10 h-10 mx-auto text-slate-400 group-hover:text-brand-500 transition-colors mb-3" />
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Click to upload or drag & drop</p>
                <p className="text-xs text-slate-500 mt-1">Upload RFPs, requirement documents, or design files (Max 10MB)</p>
                <input type="file" className="hidden" />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting || isSuccess}
                className="w-full bg-brand-600 hover:bg-brand-500 text-white font-semibold py-4 rounded-lg flex items-center justify-center space-x-2 transition-colors btn-premium disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Inquiry</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

              <AnimatePresence>
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-start space-x-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-500 mt-0.5 shrink-0" />
                    <div>
                      <h4 className="text-sm font-medium text-green-800 dark:text-green-400">Message Sent Successfully</h4>
                      <p className="text-sm text-green-700 dark:text-green-500 mt-1">Thank you for reaching out. We will get back to you shortly.</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:w-1/3 space-y-8"
          >
            {/* Info Cards */}
            <div className="glass-card p-8 shadow-md">
              <h3 className="text-xl font-display font-semibold text-slate-900 dark:text-white mb-6">Corporate Office</h3>
              <ul className="space-y-6">
                <li className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-brand-50 dark:bg-slate-800 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-brand-600 dark:text-brand-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900 dark:text-white mb-1">Address</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">L-9, Plot no. 75, Surender Singh Complex,<br/>Mahipalpur Extension, New Delhi-110037</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-brand-50 dark:bg-slate-800 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-brand-600 dark:text-brand-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900 dark:text-white mb-1">Phone</p>
                    <a href={CONTACT_CONFIG.PHONE_LINK} className="text-sm text-slate-600 dark:text-slate-400 hover:text-brand-500 transition-colors block">{CONTACT_CONFIG.PHONE_DISPLAY}</a>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-brand-50 dark:bg-slate-800 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-brand-600 dark:text-brand-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900 dark:text-white mb-1">Email</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Anshuman@superwaveinfra.com</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-brand-50 dark:bg-slate-800 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-brand-600 dark:text-brand-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900 dark:text-white mb-1">Business Hours</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Support: 24/7 Available<br/>Office: Mon-Fri, 9:00 AM - 6:00 PM</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Map Placeholder */}
            <div className="bg-slate-200 dark:bg-slate-800 rounded-2xl h-64 overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center text-slate-500 font-medium text-sm flex-col space-y-2">
                <MapPin className="w-8 h-8" />
                <span>Google Maps Integration</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
