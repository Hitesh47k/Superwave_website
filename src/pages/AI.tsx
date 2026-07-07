/**
 * File: AI.tsx
 * Purpose: Page component for AI. Handles the UI and routing for this specific route.
 * 
 * This file is part of the SCAIL project. 
 * Developed with secure and modern React practices.
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Bot, Zap, Calculator, LineChart, LayoutDashboard, BrainCircuit, 
  Search, Shield, Users, Car, TrafficCone, AlertTriangle, 
  CheckCircle2, Globe, ChevronRight, MessageSquare
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AI_SOLUTIONS = [
  { title: "AI Assistant", desc: "Intelligent conversational agent for real-time support.", icon: <Bot className="w-8 h-8" />, link: "/ai/assistant" },
  { title: "AI Solution Finder", desc: "Discover tailored AI tools for your specific industry needs.", icon: <Search className="w-8 h-8" />, link: "/ai/solutions" },
  { title: "AI Project Cost Estimation", desc: "Smart algorithms to predict and optimize project budgets.", icon: <Calculator className="w-8 h-8" />, link: "/ai/project-cost-finder" },
  { title: "AI Proposal Generator", desc: "Automate technical proposals with intelligent templates.", icon: <Zap className="w-8 h-8" />, link: "#" },
  { title: "AI Knowledge Search", desc: "Semantic search engine for instant enterprise data access.", icon: <BrainCircuit className="w-8 h-8" />, link: "#" },
  { title: "AI Career Assistant", desc: "Smart matching and career path optimization.", icon: <Users className="w-8 h-8" />, link: "/careers" },
  { title: "AI Voice Assistant", desc: "Voice-activated controls for hands-free operations.", icon: <MessageSquare className="w-8 h-8" />, link: "#" },
  { title: "AI Traffic Prediction", desc: "Forecast congestion using historical and real-time data.", icon: <LineChart className="w-8 h-8" />, link: "/ai/prediction" },
  { title: "AI Vehicle Classification", desc: "Automatically categorize vehicles at toll plazas.", icon: <Car className="w-8 h-8" />, link: "#" },
  { title: "AI Number Plate Recognition", desc: "High-accuracy ANPR for seamless toll collection.", icon: <Shield className="w-8 h-8" />, link: "#" },
  { title: "AI Incident Detection", desc: "Real-time alerts for accidents and traffic anomalies.", icon: <AlertTriangle className="w-8 h-8" />, link: "#" },
  { title: "AI Toll Analytics Dashboard", desc: "Comprehensive insights into revenue and operations.", icon: <LayoutDashboard className="w-8 h-8" />, link: "/ai/analytics" },
  { title: "AI Congestion Heatmaps", desc: "Visual representation of traffic flow and bottlenecks.", icon: <TrafficCone className="w-8 h-8" />, link: "#" },
];

const ENTERPRISE_APPS = [
  { feature: "Vehicle Detection", desc: "AI identifies vehicle types automatically." },
  { feature: "ANPR", desc: "Automatic Number Plate Recognition." },
  { feature: "Traffic Analytics", desc: "Predict congestion using AI." },
  { feature: "Fraud Detection", desc: "Detect abnormal toll transactions." },
  { feature: "Predictive Maintenance", desc: "Anticipate equipment failures." },
  { feature: "Intelligent Support", desc: "AI-powered customer assistance." }
];

const TIMELINE = [
  "Data Collection",
  "AI Processing",
  "Pattern Recognition",
  "Prediction",
  "Automation",
  "Business Impact"
];

const STATS = [
  { label: "Vehicles Monitored", value: "2.5M+" },
  { label: "Toll Transactions", value: "1.8M+" },
  { label: "AI Predictions", value: "500K+" },
  { label: "Cameras Connected", value: "1,200+" },
  { label: "Detection Accuracy", value: "99.8%" },
  { label: "AI Requests Processed", value: "10M+" },
  { label: "Active AI Models", value: "45+" },
  { label: "Incidents Detected", value: "8,500+" }
];

/**
 * Component: AI
 * 
 * Defines the AI component. Responsible for rendering the UI elements
 * and handling any internal state or side-effects for this section.
 * 
 * @returns {JSX.Element} The rendered component.
 */
export default function AI() {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white min-h-screen">
      
      {/* 1. AI Overview Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden border-b border-slate-200 dark:border-white/5">
        <div className="absolute top-1/4 -left-64 w-96 h-96 bg-brand-600/20 dark:bg-brand-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-cyan-600/20 dark:bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 glass border border-slate-400 dark:border-slate-600 rounded-full px-5 py-1.5 mb-8 backdrop-blur-sm">
              <span className="w-2.5 h-2.5 bg-brand-400 rounded-full"></span>
              <span className="text-slate-900 dark:text-slate-100 text-sm font-semibold tracking-wide uppercase">Next-Generation Intelligence</span>
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-[80px] font-display font-bold mb-6 tracking-tight">
              Artificial Intelligence <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-cyan-500 dark:from-brand-400 dark:to-cyan-300">Solutions</span>
            </h1>
            <p className="text-2xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-4xl mx-auto">
              Empowering transportation, infrastructure, enterprise operations, and smart mobility with intelligent AI-powered solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. AI Solutions */}
      <section className="py-24 relative z-10 border-b border-slate-200 dark:border-white/5 glass-section">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">Comprehensive AI Capabilities</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Explore our diverse suite of artificial intelligence tools designed to optimize and automate your operations.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {AI_SOLUTIONS.map((solution, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (idx % 4) * 0.1 }}
                className="group glass-section backdrop-blur-sm border-transparent hover:border-brand-300 dark:hover:border-brand-500/30 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-brand-500/5 dark:hover:shadow-brand-500/10 flex flex-col h-full"
              >
                <div className="w-14 h-14 glass-card/80 group-hover:bg-brand-50 dark:group-hover:bg-brand-900/50 rounded-xl flex items-center justify-center text-brand-600 dark:text-brand-400 mb-6 transition-colors border border-slate-100 dark:border-white/5">
                  {solution.icon}
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-brand-600 dark:group-hover:text-brand-300 transition-colors">
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

      {/* 3. Enterprise AI Applications */}
      <section className="py-24 relative z-10 border-b border-slate-200 dark:border-white/5">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/3">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">Enterprise AI Applications</h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
                Deploying robust, scalable AI models directly into enterprise workflows for immediate operational impact.
              </p>
              <div className="hidden md:block w-32 h-1 bg-brand-500/50 rounded-full"></div>
            </div>
            <div className="md:w-2/3 w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {ENTERPRISE_APPS.map((app, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="p-5 rounded-xl border-transparent glass hover:bg-white/50 dark:hover:bg-white/10 transition-colors"
                  >
                    <h4 className="font-bold text-brand-600 dark:text-brand-400 mb-1">{app.feature}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{app.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. AI Network Visualization & 5. Timeline */}
      <section className="py-24 relative z-10 border-b border-slate-200 dark:border-white/5 bg-slate-900 text-white overflow-hidden">
        {/* Animated Particles/Nodes Background */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-2 h-2 bg-cyan-400 rounded-full blur-[1px]"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: Math.random() * 0.5 + 0.3
              }}
              animate={{
                y: [null, Math.random() * -100 - 50],
                opacity: [null, 0]
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>

        <div className="container-custom relative z-20">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            {/* Visualizer Side */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-96 flex items-center justify-center"
            >
              <div className="absolute w-64 h-64 border border-brand-500/30 rounded-full animate-[spin_20s_linear_infinite]"></div>
              <div className="absolute w-80 h-80 border border-cyan-500/20 rounded-full animate-[spin_30s_linear_infinite_reverse]"></div>
              <Globe className="w-32 h-32 text-brand-400 drop-shadow-[0_0_30px_rgba(56,189,248,0.5)] animate-pulse" strokeWidth={1} />
              
              {/* Pulsing Nodes */}
              {[...Array(5)].map((_, i) => (
                <div 
                  key={`node-${i}`} 
                  className="absolute w-4 h-4 bg-cyan-400 rounded-full blur-[2px]"
                  style={{
                    top: `${40 + Math.sin(i * 1.2) * 40}%`,
                    left: `${40 + Math.cos(i * 1.2) * 40}%`,
                  }}
                >
                  <div className="w-full h-full bg-white rounded-full animate-ping"></div>
                </div>
              ))}
            </motion.div>

            {/* Content Side */}
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-cyan-300">
                Connecting Intelligence Across Industries
              </h2>
              <p className="text-lg text-slate-300 mb-12">
                Building AI-powered systems that transform transportation, infrastructure, and enterprise operations seamlessly.
              </p>

              {/* Timeline */}
              <div className="space-y-4 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
                {TIMELINE.map((step, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.15 }}
                    className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-slate-900 group-hover:border-brand-500 group-hover:bg-brand-900/50 text-slate-400 group-hover:text-brand-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-colors z-10">
                      <div className="w-2 h-2 rounded-full bg-current"></div>
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded border border-slate-800 bg-slate-900/50 shadow">
                      <h4 className="font-bold text-slate-200">{step}</h4>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. MLFF Toll AI & 7. Traffic Monitoring */}
      <section className="py-24 relative z-10 border-b border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-slate-950">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div>
              <div className="inline-flex items-center space-x-2 bg-amber-100 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-500/30 text-amber-700 dark:text-amber-400 rounded-full px-4 py-1.5 mb-6 text-sm font-medium tracking-wide uppercase">
                Smart Mobility
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                AI-Powered MLFF Toll Solutions
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                MLFF (Multi-Lane Free Flow) technology reduces congestion by allowing vehicles to pass toll plazas without stopping. AI enhances this system through real-time vehicle classification, ANPR, traffic monitoring, incident detection, congestion prediction, and analytics.
              </p>
              
              <div className="glass-card p-6 sm:p-8 mt-8">
                <h3 className="text-2xl font-bold mb-6">AI Traffic Monitoring Features</h3>
                <ul className="space-y-4">
                  {["Vehicle Classification", "Number Plate Recognition", "Congestion Prediction", "Real-time Analytics", "Incident Detection"].map((feature, i) => (
                    <motion.li 
                      key={i} 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      className="flex items-center text-slate-700 dark:text-slate-300 font-medium"
                    >
                      <CheckCircle2 className="w-6 h-6 text-brand-600 dark:text-brand-500 mr-3 flex-shrink-0" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modern Animated Toll Plaza Illustration Placeholder */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden border-transparent glass-card aspect-square shadow-2xl flex items-center justify-center group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900"></div>
              
              {/* Highway lines */}
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-40 flex justify-center gap-10 opacity-20">
                <div className="w-2 h-full bg-white dark:bg-white/50"></div>
                <div className="w-2 h-full bg-white dark:bg-white/50"></div>
                <div className="w-2 h-full bg-white dark:bg-white/50"></div>
              </div>
              
              {/* Overhead Gantry */}
              <div className="absolute top-1/4 inset-x-10 h-8 bg-slate-300 dark:bg-slate-700 rounded-md shadow-lg border-b-4 border-slate-400 dark:border-slate-800 z-10 flex justify-evenly items-end pb-1">
                <div className="w-4 h-6 bg-slate-800 rounded-sm"></div>
                <div className="w-4 h-6 bg-slate-800 rounded-sm flex items-center justify-center">
                  <div className="w-1 h-1 bg-red-500 rounded-full animate-pulse"></div>
                </div>
                <div className="w-4 h-6 bg-slate-800 rounded-sm"></div>
              </div>
              
              {/* Animated Vehicle */}
              <motion.div 
                className="absolute w-12 h-20 bg-brand-500 rounded-lg shadow-lg z-20 flex flex-col items-center justify-between py-2"
                animate={{ y: ["200%", "-200%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                style={{ left: '40%' }}
              >
                 <div className="w-8 h-4 bg-brand-700 rounded"></div>
                 <div className="w-8 h-4 bg-brand-700 rounded"></div>
              </motion.div>
              
              {/* Scan effect */}
              <div className="absolute top-[28%] inset-x-0 h-32 bg-gradient-to-b from-brand-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30 pointer-events-none"></div>
              
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 dark:bg-slate-950/90 backdrop-blur-sm p-4 rounded-xl border-transparent z-40">
                <div className="flex justify-between items-center text-sm font-bold">
                  <span className="text-slate-500">Live Feed</span>
                  <span className="text-brand-600 dark:text-brand-400 flex items-center"><span className="w-2 h-2 bg-brand-500 rounded-full mr-2 animate-pulse"></span> Analyzing</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 8. AI Dashboard Stats */}
      <section className="py-24 relative z-10 border-b border-slate-200 dark:border-white/5 glass-section">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">Real-Time Intelligence</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Live statistics powering our infrastructure networks.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {STATS.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-slate-50 dark:bg-slate-800/50 border-transparent rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-brand-600 dark:text-brand-400 mb-2 tracking-tighter">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm font-medium text-slate-600 dark:text-slate-400 uppercase tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. AI Assistant Preview */}
      <section className="py-24 relative z-10 border-b border-slate-200 dark:border-white/5 overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                Meet Your AI Enterprise Assistant
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                Interact with your data naturally. Our advanced AI Assistant provides instant insights, generates reports, and answers complex operational queries in real-time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/ai/assistant" className="px-6 py-3 bg-brand-600 hover:bg-brand-700 text-white rounded-xl font-bold text-center transition-colors shadow-lg shadow-brand-500/25 flex items-center justify-center gap-2">
                  <MessageSquare className="w-5 h-5" /> Talk to AI
                </Link>
                <Link to="/ai/assistant" className="px-6 py-3 glass-card hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-900 dark:text-white rounded-xl font-bold text-center transition-colors flex items-center justify-center">
                  Start Conversation
                </Link>
              </div>
            </div>

            {/* Chatbot UI Mockup */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-panel shadow-2xl overflow-hidden flex flex-col h-[400px]"
            >
              <div className="bg-slate-50 dark:bg-slate-950 p-4 border-b border-slate-200 dark:border-slate-800 flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-100 dark:bg-brand-900/30 rounded-full flex items-center justify-center text-brand-600 dark:text-brand-400">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">SCAIL Enterprise AI</h4>
                  <p className="text-xs text-brand-600 dark:text-brand-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> Online
                  </p>
                </div>
              </div>
              <div className="flex-1 p-4 overflow-y-auto space-y-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-brand-100 dark:bg-brand-900/30 rounded-full flex items-center justify-center text-brand-600 dark:text-brand-400 shrink-0 mt-1">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-2xl rounded-tl-none text-sm text-slate-700 dark:text-slate-200">
                    Hello! I'm the SCAIL AI Assistant. How can I help you analyze toll operations today?
                  </div>
                </div>
                <div className="flex gap-3 flex-row-reverse">
                  <div className="w-8 h-8 bg-slate-200 dark:bg-slate-700 rounded-full flex items-center justify-center text-slate-600 dark:text-slate-300 shrink-0 mt-1">
                    <Users className="w-4 h-4" />
                  </div>
                  <div className="bg-brand-600 text-white p-3 rounded-2xl rounded-tr-none text-sm">
                    Show me the congestion prediction for Plaza A this evening.
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-brand-100 dark:bg-brand-900/30 rounded-full flex items-center justify-center text-brand-600 dark:text-brand-400 shrink-0 mt-1">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-2xl rounded-tl-none text-sm text-slate-700 dark:text-slate-200 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                  </div>
                </div>
              </div>
              <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
                <div className="flex gap-2">
                  <span className="px-3 py-1.5 glass-card rounded-full text-xs text-slate-600 dark:text-slate-400 truncate cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700">Predict traffic</span>
                  <span className="px-3 py-1.5 glass-card rounded-full text-xs text-slate-600 dark:text-slate-400 truncate cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700">ANPR Accuracy</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 10. Call to Action */}
      <section className="py-24 relative z-10 text-center px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Ready to Build Intelligent Solutions?
          </h2>
          <p className="text-2xl text-slate-600 dark:text-slate-400 mb-10">
            Let's discuss how our enterprise AI capabilities can transform your operations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="px-6 py-4 bg-brand-600 hover:bg-brand-700 text-white rounded-xl font-bold text-lg transition-colors shadow-lg shadow-brand-500/25 flex items-center justify-center btn-premium">
              Request AI Consultation
            </Link>
            <Link to="/contact" className="px-6 py-4 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-900 dark:text-white rounded-xl font-bold text-lg transition-colors flex items-center justify-center btn-premium">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
