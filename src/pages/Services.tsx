/**
 * File: Services.tsx
 * Purpose: Page component for Services. Handles the UI and routing for this specific route.
 * 
 * This file is part of the SCAIL project. 
 * Developed with secure and modern React practices.
 */

import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import SEO from '../components/seo/SEO';
import { SERVICES_DATA } from '../data/servicesData';

/**
 * Component: Services
 * 
 * Defines the Services component. Responsible for rendering the UI elements
 * and handling any internal state or side-effects for this section.
 * 
 * @returns {JSX.Element} The rendered component.
 */
export default function Services() {
  const { hash } = useLocation();
  const [activeCategory, setActiveCategory] = useState(SERVICES_DATA[0].id);

  // Handle smooth scrolling to hash on load or hash change
  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          // If it's a sub-service, find its parent category
          const parentCategory = SERVICES_DATA.find(cat => cat.services.some(s => s.id === id) || cat.id === id);
          if (parentCategory) {
            setActiveCategory(parentCategory.id);
          }
        }, 100);
      }
    }
  }, [hash]);

  // Handle scroll spy for the sidebar
  useEffect(() => {
    const handleScroll = () => {
      const sections = SERVICES_DATA.map(cat => document.getElementById(`category-${cat.id}`));
      let currentActive = activeCategory;
      
      for (const section of sections) {
        if (section) {
          const rect = section.getBoundingClientRect();
          // Adjust offset based on sticky header
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentActive = section.id.replace('category-', '');
            break;
          }
        }
      }
      
      if (currentActive !== activeCategory) {
        setActiveCategory(currentActive);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeCategory]);

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen">
      <SEO 
        title="Solutions & Services | Superwave Communication"
        description="Comprehensive solutions including Toll Management Systems, Advanced Traffic Management, Custom Software, AI Solutions, and IT Services."
      />
      
      {/* Page Hero */}
      <div className="bg-brand-600 dark:bg-slate-900 text-white py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/4 w-full h-full bg-gradient-to-b from-white/10 to-transparent rounded-full blur-3xl transform rotate-12" />
        </div>
        <div className="container-custom relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6"
          >
            Our Solutions & Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-brand-100 max-w-3xl mx-auto"
          >
            Delivering outstanding business value through innovative technology, robust infrastructure, and expert engineering across multiple domains.
          </motion.p>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 relative">
          
          {/* Sidebar Navigation */}
          <aside className="lg:w-1/4 shrink-0">
            <div className="sticky top-28 glass-card p-4 shadow-sm border-transparent hidden lg:block">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 px-4">Categories</h3>
              <nav className="space-y-1">
                {SERVICES_DATA.map(category => (
                  <button
                    key={category.id}
                    onClick={() => {
                      document.getElementById(`category-${category.id}`)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 text-sm font-medium ${
                      activeCategory === category.id 
                        ? 'bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 font-bold' 
                        : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                    }`}
                  >
                    {category.title}
                  </button>
                ))}
              </nav>
            </div>
            
            {/* Mobile Horizontal Navigation */}
            <div className="lg:hidden sticky top-20 z-40 bg-slate-50/90 dark:bg-slate-950/90 backdrop-blur-md py-4 -mx-4 px-4 border-b border-slate-200 dark:border-slate-800 flex overflow-x-auto custom-scrollbar gap-2">
              {SERVICES_DATA.map(category => (
                <button
                  key={category.id}
                  onClick={() => {
                    document.getElementById(`category-${category.id}`)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`shrink-0 px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium whitespace-nowrap ${
                    activeCategory === category.id 
                      ? 'bg-brand-600 text-white' 
                      : 'glass-card text-slate-600 dark:text-slate-400 border-transparent'
                  }`}
                >
                  {category.title}
                </button>
              ))}
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="lg:w-3/4 space-y-24 pb-24">
            {SERVICES_DATA.map((category) => (
              <section id={`category-${category.id}`} key={category.id} className="scroll-mt-32">
                
                {/* Category Header */}
                <div className="mb-10">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 text-xs font-bold uppercase tracking-widest mb-4">
                    {category.title}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-4">
                    {category.bannerTitle}
                  </h2>
                  <p className="text-xl text-slate-600 dark:text-slate-300 font-medium mb-6">
                    {category.bannerSubtitle}
                  </p>
                  <div className="space-y-4 text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                    {category.intro.map((para, idx) => (
                      <p key={idx}>{para}</p>
                    ))}
                  </div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  {category.services.map((service) => (
                    <div 
                      id={service.id} 
                      key={service.id} 
                      className="glass-card p-6 md:p-8 border-transparent shadow-sm hover:shadow-xl transition-all duration-300 group scroll-mt-32 relative overflow-hidden"
                    >
                      <div className="absolute -right-10 -top-10 w-40 h-40 bg-brand-50 dark:bg-brand-900/20 rounded-full blur-3xl group-hover:bg-brand-100 dark:group-hover:bg-brand-900/40 transition-colors" />
                      
                      <div className="relative z-10">
                        <div className="w-14 h-14 bg-brand-50 dark:bg-slate-800 text-brand-600 dark:text-brand-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                          {service.icon}
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                          {service.title}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm leading-relaxed">
                          {service.shortDesc}
                        </p>
                        
                        <div className="space-y-4 mb-8">
                          <div>
                            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Key Features</h4>
                            <ul className="space-y-1.5">
                              {service.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start text-sm text-slate-700 dark:text-slate-300">
                                  <CheckCircle2 className="w-4 h-4 text-brand-500 mr-2 shrink-0 mt-0.5" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          {service.technologies && (
                             <div>
                                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Technologies</h4>
                                <div className="flex flex-wrap gap-2">
                                  {service.technologies.map((tech, idx) => (
                                    <span key={idx} className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs rounded-md font-medium">
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                             </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Related Projects Placeholder */}
                <div className="mb-12">
                  <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-6">Related Case Studies</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3].map((item) => (
                      <div key={item} className="group cursor-pointer rounded-2xl overflow-hidden border-transparent glass-card hover:shadow-lg transition-all duration-300">
                        <div className="h-48 bg-slate-100 dark:bg-slate-800 relative overflow-hidden">
                          <div className="absolute inset-0 bg-brand-500/10 group-hover:bg-brand-500/20 transition-colors" />
                          <div className="absolute inset-0 flex items-center justify-center text-slate-400 dark:text-slate-500 text-sm font-medium">
                            Project Visual Placeholder
                          </div>
                        </div>
                        <div className="p-5">
                          <div className="text-xs font-bold text-brand-600 dark:text-brand-400 uppercase tracking-wider mb-2">Success Story</div>
                          <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                            {category.title} Implementation
                          </h4>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            Discover how our {category.title.toLowerCase()} helped a major client achieve their operational goals efficiently.
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Why Choose Us & CTA */}
                <div className="glass-panel p-8 md:p-12 text-white relative overflow-hidden border border-transparent dark:border-slate-800">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-600/20 to-transparent z-0" />
                  <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center justify-between">
                    <div className="md:w-2/3 space-y-6">
                      <h3 className="text-2xl md:text-3xl font-display font-bold">Why Choose SCAIL for {category.title}?</h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {category.whyChooseUs.map((reason, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle2 className="w-5 h-5 text-brand-400 mr-3 shrink-0 mt-0.5" />
                            <span className="text-slate-300 text-sm">{reason}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="md:w-1/3 flex justify-center md:justify-end w-full">
                      <Link 
                        to="/contact" 
                        className="w-full sm:w-auto text-center inline-flex items-center justify-center bg-brand-500 hover:bg-brand-400 text-white px-6 py-4 rounded-xl font-bold transition-all hover:shadow-lg hover:shadow-brand-500/30 group"
                      >
                        Request a Demo
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Separator if not last */}
                {category.id !== SERVICES_DATA[SERVICES_DATA.length - 1].id && (
                  <hr className="my-24 border-slate-200 dark:border-slate-800" />
                )}
              </section>
            ))}
          </main>
        </div>
      </div>
    </div>
  );
}
