/**
 * File: Certificates.tsx
 * Purpose: Layout component: Certificates. Provides structural UI elements shared across multiple pages.
 * 
 * This file is part of the SCAIL project. 
 * Developed with secure and modern React practices.
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, X, Maximize2 } from 'lucide-react';

const CERTIFICATES = [
  {
    id: 1,
    title: "ISO 9001:2015",
    desc: "Quality Management System Certification",
    image: "../images/certificate/one.png", // Placeholder image
  },
  {
    id: 2,
    title: "ISO 27001:2013",
    desc: "Information Security Management",
    image: "../images/certificate/two.png", // Placeholder image
  },
  {
    id: 3,
    title: "CMMI Level 3",
    desc: "Process Improvement Appraisal",
    image: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?q=80&w=800&auto=format&fit=crop", // Placeholder image
  },
  {
    id: 4,
    title: "ITIL Certification",
    desc: "IT Service Management Standards",
    image: "../images/certificate/three.png", // Placeholder image
  }
];

/**
 * Component: Certificates
 * 
 * Defines the Certificates component. Responsible for rendering the UI elements
 * and handling any internal state or side-effects for this section.
 * 
 * @returns {JSX.Element} The rendered component.
 */
export default function Certificates() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Close modal on escape key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Lock body scroll when modal is open
  React.useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  return (
    <section className="py-24 glass-section border-t border-slate-100 dark:border-white/5">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-brand-600 dark:text-brand-400 font-semibold tracking-wide uppercase text-sm mb-3 flex items-center">
              <Award className="w-4 h-4 mr-2" /> Credentials
            </h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-4">Certificates & Compliance</h3>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              Our commitment to quality, security, and process excellence is validated by global industry standards and certifications.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {CERTIFICATES.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(cert.image)}
            >
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden glass-card border-transparent mb-4 shadow-sm group-hover:shadow-lg transition-all duration-300">
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  loading="lazy"
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-brand-900/0 group-hover:bg-brand-900/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 glass rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300 shadow-xl">
                    <Maximize2 className="w-5 h-5 text-brand-600 dark:text-brand-400" />
                  </div>
                </div>
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                {cert.title}
              </h4>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                {cert.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-12">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm"
              onClick={() => setSelectedImage(null)}
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl max-h-[90vh] glass-section rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            >
              <div className="absolute top-4 right-4 z-10">
                <button 
                  onClick={() => setSelectedImage(null)}
                  className="w-10 h-10 bg-black/50 hover:bg-black/80 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="flex-1 overflow-auto glass-card p-4 flex items-center justify-center">
                <img 
                  src={selectedImage} 
                  alt="Certificate Preview" 
                  className="max-w-full max-h-[70vh] object-contain shadow-md rounded-lg"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
