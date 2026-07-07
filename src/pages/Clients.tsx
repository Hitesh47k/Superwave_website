/**
 * File: Clients.tsx
 * Purpose: Page component for Clients. Handles the UI and routing for this specific route.
 * 
 * This file is part of the SCAIL project. 
 * Developed with secure and modern React practices.
 */

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, Search, ExternalLink, ShieldCheck, Activity, CheckCircle2, ChevronRight, Building2, Landmark, MoreHorizontal } from 'lucide-react';

type ClientCategory = "All" | "Government & National Authorities" | "EPC & Infrastructure Companies" | "Additional Clients";

interface ClientData {
  id: string;
  name: string;
  category: ClientCategory;
  industry: string;
  description: string;
  services: string[];
  projectType?: string;
  status: "Completed" | "Ongoing" | "Strategic Partner";
  website?: string;
  logoText: string;
}

const CLIENTS_DATA: ClientData[] = [
  // Government & National Authorities
  { id: "nhai", name: "NHAI", category: "Government & National Authorities", industry: "Government / Transport", description: "National Highways Authority of India, responsible for the development, maintenance, and management of national highways.", services: ["ATMS", "Toll Management System", "MLFF"], projectType: "National Highway Deployment", status: "Strategic Partner", website: "https://nhai.gov.in", logoText: "NHAI" },
  { id: "ihmcl", name: "IHMCL", category: "Government & National Authorities", industry: "Government / Transport", description: "Indian Highways Management Company Limited, mandated to implement Electronic Toll Collection (ETC) systems.", services: ["FASTag Integration", "Electronic Toll Collection", "Audit Systems"], projectType: "National ETC Program", status: "Strategic Partner", website: "https://ihmcl.co.in", logoText: "IHMCL" },
  { id: "nhit", name: "NHIT", category: "Government & National Authorities", industry: "Government / Infrastructure", description: "National Highways Infra Trust, an InvIT established to monetize road assets.", services: ["Infrastructure Monitoring", "Revenue Analytics"], projectType: "Asset Management IT", status: "Ongoing", website: "https://nhit.co.in", logoText: "NHIT" },
  { id: "upeida", name: "UPEIDA", category: "Government & National Authorities", industry: "Government / Transport", description: "Uttar Pradesh Expressways Industrial Development Authority.", services: ["Expressway ATMS", "Control Center Setup", "Highway Lighting"], projectType: "State Expressways", status: "Completed", website: "https://upeida.up.gov.in", logoText: "UPEIDA" },
  { id: "morth", name: "Ministry of Road Transport & Highways", category: "Government & National Authorities", industry: "Government", description: "The apex body for formulation and administration of rules, regulations, and laws relating to road transport in India.", services: ["Policy IT Consulting", "National Data Repositories"], projectType: "Digital Transformation", status: "Strategic Partner", website: "https://morth.nic.in", logoText: "MoRTH" },
  { id: "gov-agencies", name: "Various Government Agencies", category: "Government & National Authorities", industry: "Government", description: "Partnering with state and central government bodies for smart infrastructure.", services: ["IT Services", "Security Systems"], projectType: "Public Infrastructure", status: "Ongoing", logoText: "GOV" },
  { id: "pse", name: "Public Sector Enterprises", category: "Government & National Authorities", industry: "Public Sector", description: "Empowering state-owned enterprises with modern IT and operational tech.", services: ["Enterprise IT", "Cloud Services"], projectType: "Modernization", status: "Ongoing", logoText: "PSE" },
  { id: "smart-city", name: "Smart City Authorities", category: "Government & National Authorities", industry: "Urban Development", description: "Deploying intelligent traffic and city management platforms.", services: ["Smart Lighting", "Traffic Management", "Command Center"], projectType: "Smart City Mission", status: "Ongoing", logoText: "SMART CITY" },
  
  // EPC & Infrastructure Companies
  { id: "montecarlo", name: "Montecarlo", category: "EPC & Infrastructure Companies", industry: "Infrastructure Construction", description: "A leading infrastructure construction and development company operating globally.", services: ["Project IT Infrastructure", "TMS Deployment"], projectType: "Highway Construction", status: "Strategic Partner", website: "https://mclindia.com", logoText: "MONTECARLO" },
  { id: "kcc", name: "KCC Buildcon Pvt. Ltd.", category: "EPC & Infrastructure Companies", industry: "Infrastructure Construction", description: "Renowned for delivering high-quality highway and civil engineering projects.", services: ["Toll Plaza IT Setup", "Weigh-in-Motion Systems"], projectType: "Civil Infrastructure", status: "Completed", website: "https://kccbuildcon.co.in", logoText: "KCC" },
  { id: "dra", name: "DRA", category: "EPC & Infrastructure Companies", industry: "Infrastructure Construction", description: "Specialists in executing complex road and highway infrastructure.", services: ["ATMS", "Highway Lighting"], projectType: "Expressway Deployment", status: "Ongoing", logoText: "DRA" },
  { id: "krishna", name: "Krishna Construction", category: "EPC & Infrastructure Companies", industry: "Civil Construction", description: "Experts in large-scale structural and road construction.", services: ["Data Center Setup", "Network Infrastructure"], projectType: "Corporate IT", status: "Completed", logoText: "KRISHNA" },
  { id: "gawar", name: "Gawar Construction", category: "EPC & Infrastructure Companies", industry: "Infrastructure Construction", description: "A major player in the Indian highway and road development sector.", services: ["Toll Management System", "Lane Equipment"], projectType: "Highway Toll Plaza", status: "Completed", website: "https://gawar.in", logoText: "GAWAR" },
  { id: "abci", name: "ABCI Infrastructure", category: "EPC & Infrastructure Companies", industry: "Infrastructure Development", description: "Dedicated to building nation's robust infrastructure networks.", services: ["Tunnel Management System", "Safety IT"], projectType: "Tunnel Infrastructure", status: "Ongoing", website: "https://abciinfra.com", logoText: "ABCI" },
  { id: "dilip", name: "Dilip Buildcon Limited", category: "EPC & Infrastructure Companies", industry: "Infrastructure Construction", description: "One of the largest road-focused EPC contractors in India.", services: ["Smart Highway Tech", "Control Centers"], projectType: "National Highways", status: "Strategic Partner", website: "https://dilipbuildcon.com", logoText: "DILIP" },
  { id: "centro", name: "CentroDorstroy Pvt. Ltd.", category: "EPC & Infrastructure Companies", industry: "Infrastructure Construction", description: "International infrastructure experts delivering quality road projects.", services: ["IT Consulting", "System Integration"], projectType: "Highway Integration", status: "Completed", logoText: "CENTRO" },
];

const STATUS_CONFIG = {
  "Completed": { icon: <CheckCircle2 className="w-3.5 h-3.5" />, color: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800" },
  "Ongoing": { icon: <Activity className="w-3.5 h-3.5" />, color: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-800" },
  "Strategic Partner": { icon: <ShieldCheck className="w-3.5 h-3.5" />, color: "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 border-purple-200 dark:border-purple-800" },
};

/**
 * Component: Clients
 * 
 * Defines the Clients component. Responsible for rendering the UI elements
 * and handling any internal state or side-effects for this section.
 * 
 * @returns {JSX.Element} The rendered component.
 */
export default function Clients() {
  const [activeCategory, setActiveCategory] = useState<ClientCategory>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredClients = useMemo(() => {
    return CLIENTS_DATA.filter((client) => {
      const matchesCategory = activeCategory === "All" || client.category === activeCategory;
      const matchesSearch = client.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            client.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            client.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen pt-32 pb-24">
      {/* Hero Section */}
      <div className="container-custom mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 bg-brand-100/50 dark:bg-brand-900/40 border border-brand-200 dark:border-brand-500/30 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 bg-brand-600 dark:bg-brand-400 rounded-full animate-pulse"></span>
              <span className="text-brand-700 dark:text-brand-300 text-sm font-medium tracking-wide uppercase">Partners in Progress</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
              Our Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-cyan-500 dark:from-brand-400 dark:to-cyan-300">Client Portfolio</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Trusted by leading government authorities, top-tier EPC companies, and public sector enterprises to deliver intelligent, mission-critical infrastructure.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Search & Filters */}
      <div className="container-custom mb-12">
        <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search clients, industries..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 glass-card rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 dark:text-white transition-all shadow-sm"
            />
          </div>
          
          <div className="flex overflow-x-auto pb-2 w-full md:w-auto hide-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
            <div className="flex gap-2 min-w-max">
              {(["All", "Government & National Authorities", "EPC & Infrastructure Companies", "Additional Clients"] as ClientCategory[]).map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`relative px-5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    activeCategory === category
                      ? "text-white shadow-md shadow-brand-500/25"
                      : "glass-card text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border-transparent"
                  }`}
                >
                  {activeCategory === category && (
                    <motion.div 
                      layoutId="activeCategoryTab"
                      className="absolute inset-0 bg-brand-600 rounded-xl -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <div className="flex items-center gap-2">
                    {category === "Government & National Authorities" && <Landmark className="w-4 h-4" />}
                    {category === "EPC & Infrastructure Companies" && <Building2 className="w-4 h-4" />}
                    {category === "Additional Clients" && <MoreHorizontal className="w-4 h-4" />}
                    {category}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Client Grid */}
      <div className="container-custom min-h-[500px]">
        {filteredClients.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-24 text-center"
          >
            <div className="w-20 h-20 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-6">
              <Search className="w-8 h-8 text-slate-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">No clients found</h3>
            <p className="text-slate-500 dark:text-slate-400">Try adjusting your search criteria or changing categories.</p>
          </motion.div>
        ) : (
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredClients.map((client) => {
                const statusTheme = STATUS_CONFIG[client.status];
                
                return (
                  <motion.div
                    key={client.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="group relative glass-card overflow-hidden shadow-sm hover:shadow-xl dark:hover:shadow-brand-500/10 transition-all duration-300 flex flex-col h-full card-hover"
                  >
                    {/* Top Branding Area */}
                    <div className="h-32 bg-slate-50 dark:bg-slate-800/50 flex items-center justify-center p-6 border-b border-slate-100 dark:border-slate-800 group-hover:bg-brand-50 dark:group-hover:bg-brand-900/20 transition-colors">
                      <div className="text-2xl font-black text-slate-300 dark:text-slate-600 tracking-tighter uppercase text-center group-hover:text-brand-300 dark:group-hover:text-brand-700 transition-colors">
                        {client.logoText}
                      </div>
                    </div>
                    
                    {/* Content Area */}
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="mb-4">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-brand-500 mb-2 block">
                          {client.industry}
                        </span>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 line-clamp-1">{client.name}</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                          {client.description}
                        </p>
                      </div>

                      {/* Services Pills */}
                      <div className="mb-6 flex flex-wrap gap-1.5">
                        {client.services.slice(0, 3).map((service, idx) => (
                          <span key={idx} className="text-[10px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2 py-1 rounded">
                            {service}
                          </span>
                        ))}
                        {client.services.length > 3 && (
                          <span className="text-[10px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2 py-1 rounded">
                            +{client.services.length - 3} more
                          </span>
                        )}
                      </div>

                      <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                        <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-medium ${statusTheme.color}`}>
                          {statusTheme.icon}
                          {client.status}
                        </div>
                        
                        {client.website && (
                          <a 
                            href={client.website} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-brand-100 hover:text-brand-600 dark:hover:bg-brand-900 dark:hover:text-brand-400 transition-colors"
                            aria-label={`Visit ${client.name} website`}
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        )}
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </div>
  );
}

