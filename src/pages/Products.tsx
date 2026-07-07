/**
 * File: Products.tsx
 * Purpose: Page component for Products. Handles the UI and routing for this specific route.
 * 
 * This file is part of the SCAIL project. 
 * Developed with secure and modern React practices.
 */

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, Box, Cpu, Server, Shield, Smartphone, Zap, 
  Camera, Scan, Eye, MapPin, Videotape, Sun, Search, Filter 
} from 'lucide-react';
import { Link } from 'react-router-dom';

type Category = 'All' | 'Systems & Gateways' | 'Cameras' | 'Readers';

interface Product {
  id: string;
  title: string;
  category: Category;
  description: string;
  icon: React.ReactNode;
  features: string[];
  specs: Record<string, string>;
  applications?: string[];
  color: string;
  image?: string;
}

const PRODUCTS: Product[] = [
  // --- Original Systems & Gateways ---
  {
    id: 'scail-atms',
    title: 'SCAIL ATMS Platform',
    category: 'Systems & Gateways',
    description: 'Advanced Traffic Management System (ATMS) offering real-time monitoring, incident detection, and multi-lane free flow integration.',
    icon: <Box className="w-8 h-8" />,
    features: ['Real-time traffic flow analysis', 'Automated incident alerts', 'Predictive maintenance'],
    specs: { scale: 'Enterprise', cloud: 'AWS / Azure', compliance: 'ISO 27001' },
    applications: ['Smart Highways', 'Toll Plazas', 'City Traffic Control'],
    color: 'from-blue-600 to-cyan-500'
  },
  {
    id: 'scail-mlff',
    title: 'MLFF Vision Node',
    category: 'Systems & Gateways',
    description: 'Edge-computing node for Multi-Lane Free Flow (MLFF) tolling. Uses LiDAR and high-speed ANPR cameras.',
    icon: <Cpu className="w-8 h-8" />,
    features: ['High-speed ANPR (up to 160km/h)', 'LiDAR vehicle profiling', 'Edge AI processing'],
    specs: { accuracy: '99.9%', latency: '< 50ms', power: 'POE++ / Solar' },
    applications: ['Toll Systems', 'Smart Highways'],
    color: 'from-indigo-600 to-purple-500'
  },
  {
    id: 'scail-auth',
    title: 'SCAIL Identity Gateway',
    category: 'Systems & Gateways',
    description: 'Unified identity and access management solution for enterprise IT infrastructure, featuring zero-trust architecture.',
    icon: <Shield className="w-8 h-8" />,
    features: ['MFA authentication', 'Zero-trust architecture', 'SSO integration'],
    specs: { standard: 'SAML 2.0 / OIDC', audit: 'Real-time', throughput: '10k auth/sec' },
    applications: ['Enterprise Security', 'Gov IT'],
    color: 'from-emerald-600 to-teal-500'
  },
  {
    id: 'scail-edge',
    title: 'SCAIL Edge Server',
    category: 'Systems & Gateways',
    description: 'Ruggedized edge computing servers designed for harsh environments, toll plazas, and remote IT deployments.',
    icon: <Server className="w-8 h-8" />,
    features: ['Industrial grade operating temp', 'Redundant storage', 'Remote management module'],
    specs: { temp: '-20°C to +70°C', ip: 'IP65', mtbf: '100,000 hrs' },
    applications: ['Toll Booths', 'Remote Sensors'],
    color: 'from-orange-600 to-amber-500'
  },

  // --- CAMERAS ---
  {
    id: 'cam-anpr',
    title: 'ANPR Cameras',
    category: 'Cameras',
    description: 'High-speed Automatic Number Plate Recognition cameras with integrated IR illumination for day and night capture.',
    icon: <Camera className="w-8 h-8" />,
    features: ['Up to 250km/h capture', 'Built-in OCR engine', 'Motorized varifocal lens'],
    specs: { resolution: '4MP / 8MP', ipRating: 'IP67', connectivity: 'Gigabit Ethernet' },
    applications: ['Toll Plaza', 'Speed Enforcement', 'Smart City'],
    image: '../images/team/image_ten.jpeg',
    color: 'from-cyan-500 to-blue-600'
  },
  // --- READERS ---
  {
    id: 'read-rfid',
    title: 'RFID Readers',
    category: 'Readers',
    description: 'Robust RFID readers for reliable asset tracking, inventory management, and vehicle identification.',
    icon: <Scan className="w-8 h-8" />,
    features: ['Multi-protocol support', 'High read rate', 'Anti-collision algorithm'],
    specs: { frequency: '13.56 MHz', range: 'Up to 10cm', interface: 'Wiegand/RS485' },
    applications: ['Access Control', 'Logistics', 'Libraries'],
    image: 'https://images.unsplash.com/photo-1558089687-f282ffcbc126?q=80&w=1000&auto=format&fit=crop',
    color: 'from-blue-600 to-indigo-600'
  },

];
/**
 * Component: Products
 * 
 * Defines the Products component. Responsible for rendering the UI elements
 * and handling any internal state or side-effects for this section.
 * 
 * @returns {JSX.Element} The rendered component.
 */
export default function Products() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(product => {
      const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch = 
        product.title.toLowerCase().includes(searchLower) ||
        product.description.toLowerCase().includes(searchLower) ||
        product.features.some(f => f.toLowerCase().includes(searchLower)) ||
        (product.applications && product.applications.some(a => a.toLowerCase().includes(searchLower)));
        
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="flex flex-col w-full bg-slate-50 dark:bg-slate-950 min-h-screen">
      {/* HEADER SECTION */}
      <section className="pt-32 pb-16 glass-card border-b border-slate-200 dark:border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px] z-0 opacity-50"></div>
        <div className="container-custom relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold text-slate-900 dark:text-white mb-6"
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-cyan-500 dark:from-brand-400 dark:to-cyan-300">Products</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10"
          >
            Enterprise-grade hardware and software solutions engineered for performance, reliability, and scale.
          </motion.p>

          {/* Search and Filter */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4"
          >
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search products, features, applications..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-100 dark:bg-slate-800/50 border-transparent rounded-full py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-brand-500 text-slate-900 dark:text-white transition-all"
              />
            </div>

            <div className="flex items-center space-x-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide shrink-0">
              <Filter className="w-5 h-5 text-slate-400 mr-2 shrink-0 hidden md:block" />
              {(['All', 'Systems & Gateways', 'Cameras', 'Readers'] as Category[]).map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                    activeCategory === category
                      ? "bg-brand-600 text-white shadow-md shadow-brand-500/20"
                      : "glass-card text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border-transparent"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* PRODUCTS GRID */}
      <section className="py-20 flex-grow">
        <div className="container-custom">
          
          <AnimatePresence mode="popLayout">
            {filteredProducts.length === 0 ? (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }}
                className="text-center py-24 text-slate-500 dark:text-slate-400"
              >
                <Search className="w-16 h-16 mx-auto mb-4 text-slate-300 dark:text-slate-700" />
                <p className="text-xl font-medium text-slate-900 dark:text-white mb-2">No products found</p>
                <p>Try adjusting your search or category filter to find what you're looking for.</p>
                <button 
                  onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
                  className="mt-6 text-brand-600 dark:text-brand-400 hover:underline font-medium"
                >
                  Clear all filters
                </button>
              </motion.div>
            ) : (
              <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="glass-card overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col card-hover"
                  >
                    {/* Optional Image */}
                    {product.image && (
                      <div className="h-48 relative overflow-hidden bg-slate-100 dark:bg-slate-800">
                        <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10" />
                        <img 
                          src={product.image} 
                          alt={product.title} 
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute top-4 left-4 z-20">
                          <span className="glass backdrop-blur-sm text-slate-900 dark:text-white px-3 py-1 rounded-full text-xs font-semibold shadow-sm">
                            {product.category}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Product Header (if no image) */}
                    {!product.image && (
                      <div className="p-6 pb-0 flex items-start justify-between relative">
                        <div className="absolute top-4 right-4">
                          <span className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-3 py-1 rounded-full text-xs font-medium shadow-sm border-transparent">
                            {product.category}
                          </span>
                        </div>
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${product.color} text-white flex items-center justify-center shadow-lg mb-4 transform group-hover:scale-110 transition-transform duration-300 shrink-0`}>
                          {product.icon}
                        </div>
                      </div>
                    )}

                    {/* Product Content */}
                    <div className="p-6 pt-4 flex-1 flex flex-col">
                      <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-2 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                        {product.title}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed line-clamp-3">
                        {product.description}
                      </p>
                      
                      <div className="space-y-4 mb-6 flex-1">
                        {/* Specs */}
                        <div className="text-xs space-y-2">
                          <h4 className="font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-2">Specs</h4>
                          {Object.entries(product.specs).slice(0, 3).map(([key, value], i) => (
                            <div key={i} className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800 pb-1">
                              <span className="text-slate-500 capitalize">{key}</span>
                              <span className="text-slate-700 dark:text-slate-300 font-medium truncate ml-2">{value}</span>
                            </div>
                          ))}
                        </div>

                        {/* Applications */}
                        {product.applications && (
                          <div className="pt-2">
                             <div className="flex flex-wrap gap-1">
                                {product.applications.slice(0, 3).map((app, i) => (
                                  <span key={i} className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                                    {app}
                                  </span>
                                ))}
                             </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Card Footer */}
                    <div className="p-6 pt-0 mt-auto">
                      <div className="flex flex-col gap-3 border-t border-slate-100 dark:border-white/5 pt-4">
                        <Link to="/contact" className="w-full bg-slate-100 dark:bg-slate-800 hover:bg-brand-50 dark:hover:bg-slate-700 text-brand-700 dark:text-white text-center py-2.5 rounded-lg text-sm font-medium transition-colors">
                          View Details
                        </Link>
                        <Link to="/contact" className="w-full bg-brand-600 hover:bg-brand-500 text-white text-center py-2.5 rounded-lg text-sm font-semibold transition-colors shadow-sm shadow-brand-500/20 btn-premium">
                          Request Quote
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-brand-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=3544&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
        <div className="container-custom md:px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">Need a custom hardware solution?</h2>
          <p className="text-brand-100 text-lg mb-10 max-w-2xl mx-auto">
            Our engineering team can design, prototype, and manufacture custom edge computing, cameras, and IoT devices tailored to your specific requirements.
          </p>
          <Link to="/contact" className="inline-flex items-center bg-white text-brand-900 hover:bg-brand-50 px-6 py-4 rounded-lg font-semibold transition-colors btn-premium">
            Consult our Engineers <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
