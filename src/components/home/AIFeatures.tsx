/**
 * File: AIFeatures.tsx
 * Purpose: Home section component: AIFeatures. Specific section used on the landing page.
 * 
 * This file is part of the SCAIL project. 
 * Developed with secure and modern React practices.
 */

import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Bot, Zap, Calculator, LineChart, LayoutDashboard, Brain, 
  ScanSearch, Wrench, ShieldCheck, TrafficCone, FileText,
  Activity, CheckCircle2, ChevronRight, MessageSquareCode
} from 'lucide-react';

const AI_SOLUTIONS = [
  { icon: <Bot />, title: "AI Assistant", desc: "Intelligent conversational agents for support and helpdesks.", link: "/ai/assistant" },
  { icon: <MessageSquareCode />, title: "AI Chatbots", desc: "Automate customer interactions with natural language processing.", link: "#" },
  { icon: <Zap />, title: "AI Powered Solutions", desc: "Deep learning integrated into enterprise operations.", link: "/ai/solutions" },
  { icon: <Calculator />, title: "AI Project Cost Finder", desc: "Smart estimation for infrastructure deployment costs.", link: "/ai/project-cost-finder" },
  { icon: <LineChart />, title: "AI Prediction", desc: "Forecast traffic, loads, and maintenance schedules.", link: "/ai/prediction" },
  { icon: <LayoutDashboard />, title: "AI Analytical Dashboard", desc: "Real-time intelligent insights and data visualization.", link: "/ai/analytics" },
  { icon: <ScanSearch />, title: "Computer Vision", desc: "Advanced image analysis for tolling and security.", link: "#" },
  { icon: <FileText />, title: "Intelligent Document Processing", desc: "OCR and NLP for automated data extraction.", link: "#" },
  { icon: <Wrench />, title: "Predictive Maintenance", desc: "Identify equipment failures before they occur.", link: "#" },
  { icon: <TrafficCone />, title: "Smart Traffic Analytics", desc: "Optimize vehicle flow and reduce congestion.", link: "#" },
  { icon: <Brain />, title: "Business Intelligence", desc: "Actionable insights from complex operational data.", link: "#" },
  { icon: <Activity />, title: "AI Workflow Automation", desc: "Streamline repetitive tasks across departments.", link: "#" }
];

const USE_CASES = [
  {
    category: "Intelligent Transportation",
    items: ["Traffic Prediction", "Toll Revenue Forecasting", "Incident Detection", "Smart Lane Monitoring"]
  },
  {
    category: "Enterprise IT",
    items: ["Helpdesk Automation", "AI Ticket Management", "Infrastructure Monitoring", "Cybersecurity Intelligence"]
  },
  {
    category: "Infrastructure",
    items: ["Predictive Maintenance", "Asset Monitoring", "Equipment Failure Prediction", "Site Progress Analytics"]
  },
  {
    category: "Business Operations",
    items: ["Project Cost Estimation", "Resource Planning", "Business Forecasting", "Automated Reporting"]
  }
];

/**
 * Component: AIFeatures
 * 
 * Defines the AIFeatures component. Responsible for rendering the UI elements
 * and handling any internal state or side-effects for this section.
 * 
 * @returns {JSX.Element} The rendered component.
 */
export default function AIFeatures() {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-brand-600/20 dark:bg-brand-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-cyan-600/20 dark:bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      {/* 1. AI Solutions Section */}
      <section className="py-24 relative z-10 border-b border-slate-200 dark:border-white/5">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center space-x-2 bg-brand-100 dark:bg-brand-900/40 border border-brand-200 dark:border-brand-500/30 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm">
                <span className="w-2 h-2 bg-brand-600 dark:bg-brand-400 rounded-full animate-pulse"></span>
                <span className="text-brand-700 dark:text-brand-300 text-sm font-medium tracking-wide uppercase">AI-Powered Ecosystem</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 tracking-tight text-slate-900 dark:text-white">
                AI-Powered Innovation for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-cyan-500 dark:from-brand-400 dark:to-cyan-300">Future of Infrastructure</span>
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl mx-auto">
                Leverage Artificial Intelligence to transform transportation, infrastructure, enterprise IT, and business operations through intelligent, scalable, and secure digital solutions.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {AI_SOLUTIONS.map((solution, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group glass-card/50 backdrop-blur-sm border-transparent hover:border-brand-300 dark:hover:border-brand-500/30 rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-500/10 dark:hover:shadow-brand-500/10 flex flex-col h-full card-hover"
              >
                <div className="w-12 h-12 bg-slate-50 dark:bg-slate-800/80 group-hover:bg-brand-50 dark:group-hover:bg-brand-900/50 rounded-xl flex items-center justify-center text-brand-600 dark:text-brand-400 mb-6 transition-colors border border-slate-100 dark:border-white/5">
                  {solution.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-brand-600 dark:group-hover:text-brand-300 transition-colors">
                  {solution.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 flex-1">
                  {solution.desc}
                </p>
                <Link to={solution.link} className="inline-flex items-center text-sm font-semibold text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 transition-colors group/link mt-auto">
                  Learn More <ChevronRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. AI Use Cases */}
      <section className="py-24 relative z-10 border-b border-slate-200 dark:border-white/5 glass-section">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-4">Cross-Industry Applications</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Discover how our AI models are driving value across diverse operational domains.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {USE_CASES.map((useCase, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card p-8"
              >
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 pb-4 border-b border-slate-100 dark:border-white/10 text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-cyan-600 dark:from-brand-400 dark:to-cyan-400">
                  {useCase.category}
                </h3>
                <ul className="space-y-4">
                  {useCase.items.map((item, i) => (
                    <li key={i} className="flex items-start text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-5 h-5 text-brand-600 dark:text-brand-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-sm font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. AI CTA */}
      <section className="py-24 relative z-10 text-center">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6">
              Transform Your Business with <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-cyan-500 dark:from-brand-400 dark:to-cyan-300">AI-Powered Innovation</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto">
              Partner with Scail to accelerate digital transformation through Intelligent Transportation Systems, Enterprise IT Services, Artificial Intelligence, Smart Infrastructure, and next-generation automation solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/ai/solutions" className="px-6 py-4 bg-brand-600 hover:bg-brand-500 text-white rounded-xl font-bold text-lg transition-colors shadow-lg shadow-brand-500/25 flex items-center justify-center btn-premium">
                Explore AI Solutions <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
              <Link to="/contact" className="px-6 py-4 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white rounded-xl font-bold text-lg transition-colors flex items-center justify-center border-transparent hover:border-slate-300 dark:hover:border-white/20 btn-premium">
                Talk to Our AI Experts
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
