/**
 * File: Industries.tsx
 * Purpose: Page component for Industries. Handles the UI and routing for this specific route.
 * 
 * This file is part of the SCAIL project. 
 * Developed with secure and modern React practices.
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Building2, 
  Truck, 
  Landmark, 
  Wallet, 
  Stethoscope, 
  Factory, 
  GraduationCap, 
  ShoppingCart, 
  Server, 
  Wifi, 
  Lightbulb,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const INDUSTRIES = [
  {
    name: 'Telecom',
    description: 'Next-generation network infrastructure, 5G deployment solutions, and robust network management tools.',
    solutions: ['Fiber Optic Networks', '5G Towers', 'Network Monitoring'],
    icon: <Wifi className="w-8 h-8" />,
    color: 'from-blue-600 to-cyan-500',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'Toll Plaza & Highway',
    description: 'Advanced Traffic Management Systems (ATMS) and Multi-Lane Free Flow (MLFF) solutions for modern highways.',
    solutions: ['MLFF Tolling', 'ATMS Software', 'Weigh-in-Motion'],
    icon: <Truck className="w-8 h-8" />,
    color: 'from-brand-600 to-orange-500',
    image: 'https://images.unsplash.com/photo-1545620986-7a550993c126?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'Government & Public Sector',
    description: 'Secure, compliant digital transformation and e-governance solutions for public administration.',
    solutions: ['Citizen Portals', 'Data Centers', 'Smart Security'],
    icon: <Landmark className="w-8 h-8" />,
    color: 'from-slate-600 to-slate-400',
    image: 'https://images.unsplash.com/photo-1523292562811-8fa7962a78c8?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'Banking & Financial',
    description: 'High-security transaction infrastructure, FinTech solutions, and compliant data storage.',
    solutions: ['Secure Gateways', 'Blockchain Ledgers', 'Fraud Detection AI'],
    icon: <Wallet className="w-8 h-8" />,
    color: 'from-emerald-600 to-teal-500',
    image: 'https://images.unsplash.com/photo-1501167733353-8b776c53e020?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'Healthcare',
    description: 'Interconnected health information systems, telemedicine infrastructure, and secure patient data management.',
    solutions: ['Telemedicine Platforms', 'Hospital IT', 'IoMT Devices'],
    icon: <Stethoscope className="w-8 h-8" />,
    color: 'from-rose-500 to-pink-500',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'Manufacturing',
    description: 'Industry 4.0 solutions, IoT sensor networks, and automated supply chain tracking systems.',
    solutions: ['Industrial IoT', 'Predictive Maintenance', 'Robotics Software'],
    icon: <Factory className="w-8 h-8" />,
    color: 'from-amber-600 to-yellow-500',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'Education',
    description: 'Digital campus infrastructure, e-learning platforms, and secure academic data systems.',
    solutions: ['Smart Classrooms', 'Campus Wi-Fi', 'LMS Integration'],
    icon: <GraduationCap className="w-8 h-8" />,
    color: 'from-violet-600 to-purple-500',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'Retail & E-commerce',
    description: 'Scalable cloud infrastructure for high-traffic retail events and smart warehouse logistics.',
    solutions: ['POS Systems', 'Cloud Hosting', 'Inventory AI'],
    icon: <ShoppingCart className="w-8 h-8" />,
    color: 'from-fuchsia-600 to-pink-500',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'IT & Data Centers',
    description: 'Turnkey data center construction, hyper-converged infrastructure, and disaster recovery sites.',
    solutions: ['Server Racks', 'Cooling Systems', 'Colocation Services'],
    icon: <Server className="w-8 h-8" />,
    color: 'from-indigo-600 to-blue-500',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'Smart Cities',
    description: 'Integrated urban management platforms covering utilities, surveillance, and citizen services.',
    solutions: ['Smart Lighting', 'City Command Center', 'CCTV Networks'],
    icon: <Building2 className="w-8 h-8" />,
    color: 'from-cyan-600 to-blue-500',
    image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'Energy & Utilities',
    description: 'Smart grid communications, SCADA system security, and renewable energy monitoring.',
    solutions: ['Smart Meters', 'SCADA Protection', 'Grid Analytics'],
    icon: <Lightbulb className="w-8 h-8" />,
    color: 'from-yellow-500 to-orange-400',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800&auto=format&fit=crop'
  }
];

/**
 * Component: Industries
 * 
 * Defines the Industries component. Responsible for rendering the UI elements
 * and handling any internal state or side-effects for this section.
 * 
 * @returns {JSX.Element} The rendered component.
 */
export default function Industries() {
  return (
    <div className="flex flex-col w-full bg-slate-50 dark:bg-slate-950 min-h-screen">
      {/* HEADER SECTION */}
      <section className="pt-32 pb-20 glass-card border-b border-slate-200 dark:border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-100 to-transparent dark:from-slate-900 dark:to-transparent z-10"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=3540&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
        </div>
        <div className="container-custom relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold text-slate-900 dark:text-white mb-6"
          >
            Industries We <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-cyan-500 dark:from-brand-400 dark:to-cyan-300">Serve</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
          >
            Delivering domain-specific technological expertise and innovative solutions across diverse enterprise sectors.
          </motion.p>
        </div>
      </section>

      {/* INDUSTRIES GRID */}
      <section className="py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {INDUSTRIES.map((industry, idx) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
                className="group relative glass-card overflow-hidden border-transparent shadow-md hover:shadow-xl dark:hover:shadow-brand-500/10 transition-all duration-300 flex flex-col h-full card-hover"
              >
                {/* Image Header */}
                <div className="relative aspect-video">
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-colors z-10"></div>
                    <img 
                      src={industry.image} 
                      alt={industry.name} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  {/* Floating Icon */}
                  <div className={`absolute -bottom-8 left-8 w-16 h-16 rounded-2xl bg-gradient-to-br ${industry.color} text-white flex items-center justify-center shadow-xl z-20 border-4 border-white dark:border-slate-900`}>
                    {industry.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 pt-12 flex flex-col flex-1">
                  <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-3 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                    {industry.name}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                    {industry.description}
                  </p>
                  
                  <div className="mt-auto">
                    <h4 className="text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-3">
                      Key Solutions
                    </h4>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {industry.solutions.map((sol, i) => (
                        <span key={i} className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs px-2.5 py-1 rounded-md border-transparent">
                          {sol}
                        </span>
                      ))}
                    </div>
                    
                    <Link to="/contact" className="inline-flex items-center text-sm font-medium text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 transition-colors group/link">
                      Discuss your requirements <ArrowRight className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-500 to-transparent"></div>
        <div className="container-custom md:px-6 text-center relative z-10">
          <h2 className="text-3xl font-display font-bold text-white mb-6">Don't see your industry listed?</h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            Our technology frameworks are highly adaptable. We have delivered custom solutions for specialized sectors including defense, aerospace, and remote research facilities.
          </p>
          <Link to="/contact" className="inline-flex items-center bg-brand-600 hover:bg-brand-500 text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-lg shadow-brand-500/25 btn-premium">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}
