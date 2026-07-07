/**
 * File: Home.tsx
 * Purpose: Page component for Home. Handles the UI and routing for this specific route.
 * 
 * This file is part of the SCAIL project. 
 * Developed with secure and modern React practices.
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'motion/react';
import { ArrowRight, Cpu, Code, Cloud, Zap, Shield, Database, LayoutDashboard, Truck, Star, Quote, ShieldCheck, Lightbulb, Map, ChevronLeft, ChevronRight, Briefcase, Building2, BrainCircuit, Activity, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedCounter from '../components/ui/AnimatedCounter';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import WhyChooseScail from '../components/home/WhyChooseScail';
import VisionMission from '../components/home/VisionMission';
import CompanyTimeline from '../components/home/CompanyTimeline';
import LatestNews from '../components/home/LatestNews';
import AIFeatures from '../components/home/AIFeatures';
import MDGallery from '../components/home/MDGallery';
import SEO from '../components/seo/SEO';
import TypewriterHeading from '../components/ui/TypewriterHeading';

const METRICS = [
  { label: "Projects Delivered", value: 200, suffix: "+", icon: <Briefcase className="w-6 h-6" /> },
  { label: "Enterprise Clients", value: 40, suffix: "+", icon: <Building2 className="w-6 h-6" /> },
  { label: "AI Solutions", value: 14, suffix: "+", icon: <BrainCircuit className="w-6 h-6" /> },
  { label: "Uptime", value: 99.99, suffix: "%", isFloat: true, icon: <Activity className="w-6 h-6" /> },
  { label: "Years Experience", value: 15, suffix: "+", icon: <Clock className="w-6 h-6" /> }
];



const SERVICES = [
  {
    title: "AI & Automation",
    description: "Intelligent solutions that automate business workflows and drive innovation.",
    icon: <Cpu className="w-8 h-8" />,
    color: "from-blue-500 to-cyan-400"
  },
  {
    title: "Software Engineering",
    description: "Scalable web, mobile, and enterprise applications built for the future.",
    icon: <Code className="w-8 h-8" />,
    color: "from-indigo-500 to-purple-400"
  },
  {
    title: "IT & Cloud Services",
    description: "Secure infrastructure, DevOps, and digital transformation.",
    icon: <Cloud className="w-8 h-8" />,
    color: "from-emerald-500 to-teal-400"
  },
  {
    title: "Smart Toll Solutions",
    description: "Advanced toll operations, MLFF, and traffic management systems.",
    icon: <Truck className="w-8 h-8" />,
    color: "from-orange-500 to-amber-400"
  }
];

const TESTIMONIALS = [
  {
    name: "Sarah Jenkins",
    role: "CTO, Global Logistics Corp",
    content: "SCAIL transformed our toll plaza operations. Their MLFF integration reduced wait times by 85% and significantly improved our revenue collection accuracy.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=256&auto=format&fit=crop"
  },
  {
    name: "Michael Chang",
    role: "Director of IT, State Infrastructure Dept",
    content: "The edge-computing vision nodes deployed by SCAIL are incredibly resilient. Even in extreme weather, we see 99.99% uptime for ANPR processing.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=256&auto=format&fit=crop"
  },
  {
    name: "Priya Sharma",
    role: "VP Operations, Urban Mobility",
    content: "Their team's deep understanding of enterprise architecture and intelligent transportation systems made our smart city project a massive success.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=256&auto=format&fit=crop"
  },
  {
    name: "James Wilson",
    role: "Head of AI, Tech Innovators",
    content: "SCAIL's implementation of computer vision AI for our security checkpoints was flawless. Their commitment to quality is unmatched.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&auto=format&fit=crop"
  },
  {
    name: "Elena Rodriguez",
    role: "Project Manager, National Highways",
    content: "Working with SCAIL on the ATMS deployment was a great experience. They delivered on time and exceeded our performance benchmarks.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=256&auto=format&fit=crop"
  }
];

const DETAILED_SERVICES_LIST = [
  {
    title: "Toll Management System (TMS)",
    desc: "Comprehensive solution designed to automate toll collection, revenue and traffic data management. Ready for CCH Transaction processing & electronic wallet.",
    features: ["Automated Toll Collection", "Real-time Traffic Monitoring", "Contactless Toll Collection", "500+ ETC lanes"],
    icon: <Database className="w-8 h-8 text-brand-500" />
  },
  {
    title: "Advance Traffic Management (ATMS)",
    desc: "Integrated solution that manages and optimizes traffic flow on roadways and highways to minimize road accidents.",
    features: ["Effective Traffic Monitoring", "Incident detection & Management", "Speed Detection & Control", "Data Analytics & Reporting"],
    icon: <Map className="w-8 h-8 text-brand-500" />
  },
  {
    title: "Highway Lighting System",
    desc: "Advanced energy-efficient LED and solar-powered lighting systems designed to enhance visibility and reduce accidents.",
    features: ["Intelligent Lighting Control", "Smart Monitoring", "Solar-Powered Efficiency", "Sustainability-focused"],
    icon: <Lightbulb className="w-8 h-8 text-brand-500" />
  },
  {
    title: "Tunnel Management System",
    desc: "Integrated Tunnel Management System designed to monitor, control, and optimize tunnel operations for enhanced safety.",
    features: ["Ventilation Control", "Video Surveillance", "Fire Alarm Systems", "SCADA Systems"],
    icon: <ShieldCheck className="w-8 h-8 text-brand-500" />
  }
];

/**
 * Component: Home
 * 
 * Defines the Home component. Responsible for rendering the UI elements
 * and handling any internal state or side-effects for this section.
 * 
 * @returns {JSX.Element} The rendered component.
 */
export default function Home() {
  // Local state to manage isHeadingComplete
  // Local state to manage startSubheading
  // Local state to manage showCinematicReveal
  const [showCinematicReveal, setShowCinematicReveal] = useState(false);

  // Side effect executed on mount or dependency change

  useEffect(() => {
    // Reveal the company name at the 12-second mark to simulate the final 5-7 seconds of a 15-20s video
    const timer = setTimeout(() => {
      setShowCinematicReveal(true);
    }, 12000);
    return () => clearTimeout(timer);
  }, []);

  // Handler function for HeadingComplete events


  return (
    <div className="flex flex-col w-full">
      <SEO 
        title="Home"
        description="SCAIL delivers intelligent automation, software engineering, cloud services, and smart toll solutions for enterprise infrastructure."
      />
      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] flex flex-col justify-start overflow-hidden bg-[#0A1628] dark:bg-[#050B14] pt-12 md:pt-16 pb-24 md:pb-32 lg:pb-[100px]">
        {/* Cinematic Video Background */}
        <div className="absolute inset-0 z-0">
          {/* 
            Placeholder for the requested 4K cinematic video.
            Since an AI text agent cannot generate a 15-20 second .mp4 file, 
            we have set up the optimal HTML5 video structure here.
            Simply replace "/assets/superwave-cinematic-hero-4k.mp4" with your generated video file.
          */}
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            poster="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=3840&auto=format&fit=crop"
            className="absolute inset-0 w-full h-full object-cover z-0 opacity-40 md:opacity-50"
          >
            <source src="/assets/superwave-cinematic-hero-4k.mp4" type="video/mp4" />
          </video>

          {/* Color & Gradient Overlays to enforce the Blue/Cyan/Silver brand palette */}
          <div className="absolute inset-0 bg-[#0A1628]/60 dark:bg-transparent z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a2e]/95 via-[#1a1a2e]/80 to-[#16213e]/40 dark:from-[#0A1628]/95 dark:via-[#0A1628]/80 dark:to-transparent z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e]/90 via-transparent to-transparent dark:from-[#0A1628]/90 dark:via-transparent dark:to-transparent z-10"></div>
          
          {/* Abstract Digital Glows */}
          <motion.div 
            animate={{ 
              opacity: [0.2, 0.4, 0.2],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-cyan-500/20 blur-[150px] rounded-full z-10 pointer-events-none"
          ></motion.div>
          <motion.div 
            animate={{ 
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-600/20 blur-[150px] rounded-full z-10 pointer-events-none"
          ></motion.div>
        </div>

        <div className="container-custom relative z-20 w-full pt-4 md:pt-8 lg:pt-10">
          <div className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex flex-wrap items-center gap-3 md:gap-4 lg:gap-6 mb-6">
                {/* Existing Badge */}
                <div className="inline-flex items-center space-x-2 bg-white/10 dark:bg-[#1E293B]/40 border border-white/20 dark:border-white/10 rounded-full px-4 py-1.5 backdrop-blur-sm hover:bg-white/20 dark:hover:bg-[#1E293B]/60 hover:border-white/30 dark:hover:border-white/20 transition-all duration-300 hover:shadow-[0_0_15px_rgba(34,211,238,0.15)] dark:hover:shadow-[0_0_15px_rgba(96,165,250,0.15)] group cursor-default">
                  <span className="w-2 h-2 bg-cyan-400 dark:bg-[#60A5FA] rounded-full animate-pulse"></span>
                  <span className="text-white/90 dark:text-[#94A3B8] text-base font-medium tracking-wide uppercase">Your Intelligent Transportation System Partner</span>
                </div>

                {/* Legacy Badge */}
                <div className="inline-flex items-center space-x-2 bg-white/10 dark:bg-[#1E293B]/40 border border-white/20 dark:border-white/10 rounded-full px-4 py-1.5 backdrop-blur-sm hover:bg-white/20 dark:hover:bg-[#1E293B]/60 hover:border-white/30 dark:hover:border-white/20 transition-all duration-300 hover:shadow-[0_0_15px_rgba(34,211,238,0.15)] dark:hover:shadow-[0_0_15px_rgba(96,165,250,0.15)] group cursor-default">
                  <Star className="w-3.5 h-3.5 text-cyan-400 dark:text-[#60A5FA] group-hover:scale-110 transition-transform duration-300 fill-cyan-400/20 dark:fill-[#60A5FA]/20" />
                  <span className="text-white/90 dark:text-[#94A3B8] text-base font-medium tracking-wide uppercase">A Legacy of Excellence</span>
                </div>

                {/* ISO Certification Badge */}
                <div className="inline-flex items-center space-x-2 bg-white/10 dark:bg-[#1E293B]/40 border border-white/20 dark:border-white/10 rounded-full px-4 py-1.5 backdrop-blur-sm hover:bg-white/20 dark:hover:bg-[#1E293B]/60 hover:border-white/30 dark:hover:border-white/20 transition-all duration-300 hover:shadow-[0_0_15px_rgba(34,211,238,0.15)] dark:hover:shadow-[0_0_15px_rgba(96,165,250,0.15)] group cursor-default">
                  <ShieldCheck className="w-4 h-4 text-cyan-400 dark:text-[#60A5FA] group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-white/90 dark:text-[#94A3B8] text-base font-medium tracking-wide uppercase">ISO 9001:2015 Certified</span>
                </div>
              </div>
              
              <TypewriterHeading 
                className="font-display font-bold text-[32px] md:text-[40px] lg:text-[48px] xl:text-[56px] 2xl:text-[64px] leading-[1.3] lg:leading-[1.2] tracking-[-0.5px] md:tracking-[0px] lg:tracking-[0.5px] 2xl:tracking-[1px] text-white dark:text-[#F1F5F9] mb-4 lg:mb-8 w-[90%] md:w-[80%] lg:w-[70%] break-words"
                parts={[
                  { text: 'Your ' },
                  { text: 'Trusted Partner', className: 'text-cyan-400 dark:text-[#60A5FA]' },
                  { text: ' for Intelligent Transportation Systems, Enterprise IT Services, AI Solutions & Smart Infrastructure' }
                ]}
                speed={25}
                loop={false}
                hideCursorOnComplete={false}
              />
              
              <TypewriterHeading 
                as="p"
                className="text-xl md:text-2xl text-slate-200 dark:text-[#E2E8F0] mb-10 max-w-2xl leading-relaxed font-normal"
                parts={[
                  { text: 'Delivering end-to-end IT services, custom software development, AI-driven solutions, and advanced toll plaza management systems for enterprises and public infrastructure.' }
                ]}
                speed={20}
                loop={false}
                start={true}
                cursorType="small-pen"
                hideCursorOnComplete={false}
              />
              
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="bg-brand-600 hover:bg-brand-700 dark:hover:bg-brand-500 text-white px-6 py-4 rounded-lg font-semibold transition-all shadow-lg shadow-brand-500/30 flex items-center group btn-premium">
                  Contact Us
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/services" className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 px-6 py-4 rounded-lg font-semibold transition-all btn-premium">
                  Explore Services
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Cinematic Company Reveal Overlay */}
          <AnimatePresence>
            {showCinematicReveal && (
              <motion.div
                initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="absolute bottom-40 right-10 z-50 hidden lg:block"
              >
                <div className="relative">
                  {/* Subtle glowing background */}
                  <div className="absolute inset-0 bg-brand-500/20 blur-[40px] rounded-full pointer-events-none"></div>
                  
                  <h2 className="relative font-display text-2xl lg:text-3xl font-light tracking-[4px] text-white/90 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] flex flex-col items-end text-right">
                    <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-cyan-200">
                      Superwave Communication
                    </span>
                    <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-cyan-200">
                      and Infrasolution Limited
                    </span>
                  </h2>

                  {/* Animated glowing dots representing data streams */}
                  <div className="absolute -right-6 top-1/2 -translate-y-1/2 flex flex-col gap-2">
                    <motion.div animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 2, repeat: Infinity }} className="w-1.5 h-1.5 rounded-full bg-cyan-600 dark:bg-cyan-400"></motion.div>
                    <motion.div animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 2, repeat: Infinity, delay: 0.3 }} className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400"></motion.div>
                    <motion.div animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 2, repeat: Infinity, delay: 0.6 }} className="w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-cyan-200"></motion.div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Hero Feature Cards */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-20"
          >
            {[
              { title: "MLFF System", sub: "Multi Lane Free Flow" },
              { title: "ATMS", sub: "Advanced Toll Management" },
              { title: "TMS", sub: "Toll Management System" },
              { title: "Smart Highways", sub: "Lighting Solutions" }
            ].map((card, idx) => (
              <div key={idx} className="glass glass border-transparent p-6 rounded-xl hover:-translate-y-2 transition-transform duration-300 group shadow-lg">
                <h3 className="text-slate-900 dark:text-white font-display font-semibold text-xl mb-1">{card.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-base">{card.sub}</p>
                <div className="w-8 h-1 bg-brand-500 mt-4 group-hover:w-full transition-all duration-500"></div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* TRUST DASHBOARD */}
      <section className="py-20 glass-section border-b border-slate-200 dark:border-slate-800">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
            {METRICS.map((metric, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="space-y-4 flex flex-col items-center p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 hover:shadow-lg dark:hover:shadow-brand-500/5 transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 flex items-center justify-center mb-2">
                  {metric.icon}
                </div>
                <h4 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white">
                  <AnimatedCounter value={metric.value} suffix={metric.suffix} isFloat={metric.isFloat} />
                </h4>
                <p className="text-lg text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider">
                  {metric.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseScail />

      <VisionMission />
      <CompanyTimeline />

      {/* CORE SERVICES */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-brand-600 dark:text-brand-400 font-semibold tracking-wide uppercase text-base mb-3">Our Expertise</h2>
            <h3 className="text-4xl lg:text-6xl font-display font-bold text-slate-900 dark:text-white mb-6">End-to-End Technology Solutions</h3>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              We deliver cutting-edge IT services and intelligent infrastructure solutions designed to scale with your enterprise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card p-8 hover:shadow-xl dark:hover:shadow-brand-500/10 transition-all duration-300 group"
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br ${service.color} text-white mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {service.icon}
                </div>
                <h4 className="text-xl font-display font-semibold text-slate-900 dark:text-white mb-3 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                  {service.title}
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link to="/services" className="inline-flex items-center text-base font-medium text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300">
                  Learn more <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
             <Link to="/services" className="inline-flex items-center justify-center space-x-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-3 rounded-lg font-medium hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors">
               <span>View All Services</span>
               <ArrowRight className="w-4 h-4" />
             </Link>
          </div>
        </div>
      </section>

      {/* MLFF TOLL SOLUTIONS PREVIEW (Premium Section) */}
      <section className="py-24 glass-card relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500 blur-[100px] rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500 blur-[100px] rounded-full"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 space-y-8">
              <div>
                <h2 className="text-brand-600 dark:text-brand-400 font-semibold tracking-wide uppercase text-base mb-3">Flagship Solution</h2>
                <h3 className="text-4xl lg:text-6xl font-display font-bold text-slate-900 dark:text-white mb-6">Next-Gen MLFF Toll Systems</h3>
                <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
                  Experience seamless mobility with our Multi-Lane Free Flow (MLFF) solutions. We integrate advanced RFID, ANPR, and LiDAR sensors to process vehicles at highway speeds without barriers.
                </p>
              </div>
              
              <ul className="space-y-4">
                {[
                  "Barrier-free high-speed tolling",
                  "AI-powered vehicle classification",
                  "Real-time analytics and revenue dashboard",
                  "Automated incident detection"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-3 text-slate-800 dark:text-slate-200">
                    <div className="w-6 h-6 rounded-full bg-brand-500/10 dark:bg-brand-500/20 flex items-center justify-center shrink-0">
                      <Zap className="w-3 h-3 text-brand-600 dark:text-brand-400" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <Link to="/solutions" className="inline-flex items-center space-x-2 bg-brand-600 hover:bg-brand-700 dark:hover:bg-brand-500 text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-lg shadow-brand-500/25">
                <span>Explore Architecture</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="lg:w-1/2 w-full">
              {/* Conceptual 3D Dashboard/Interface visualization */}
              <div className="glass-card bg-white/80 dark:bg-white/5 border-slate-200 dark:border-white/10 rounded-2xl p-2 shadow-2xl shadow-brand-900/10 dark:shadow-brand-900/50 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="glass-card rounded-xl overflow-hidden border-transparent/50">
                  <div className="h-10 bg-slate-200/50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 flex items-center px-4 space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <div className="ml-4 text-xs font-mono text-slate-500 dark:text-slate-400">scail-atms-dashboard</div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                      <h4 className="text-slate-900 dark:text-white font-medium">Live Traffic Flow</h4>
                      <span className="flex items-center text-xs text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded">
                        <span className="w-1.5 h-1.5 bg-emerald-500 dark:bg-emerald-400 rounded-full mr-1.5 animate-pulse"></span>
                        LIVE
                      </span>
                    </div>
                    
                    {/* Mock Charts & Data */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="glass-card p-4 rounded-lg border-transparent shadow-sm">
                        <p className="text-slate-500 dark:text-slate-400 text-xs mb-1">Vehicles/hr</p>
                        <p className="text-2xl font-mono text-slate-900 dark:text-white">4,289</p>
                        <div className="w-full h-1 bg-slate-200 dark:bg-slate-700 mt-3 rounded-full overflow-hidden">
                          <div className="w-[75%] h-full bg-brand-500"></div>
                        </div>
                      </div>
                      <div className="glass-card p-4 rounded-lg border-transparent shadow-sm">
                        <p className="text-slate-500 dark:text-slate-400 text-xs mb-1">Detection Rate</p>
                        <p className="text-2xl font-mono text-slate-900 dark:text-white">99.8%</p>
                        <div className="w-full h-1 bg-slate-200 dark:bg-slate-700 mt-3 rounded-full overflow-hidden">
                          <div className="w-[99%] h-full bg-emerald-500"></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="h-32 glass-card rounded-lg border-transparent flex items-end p-2 space-x-1 shadow-sm">
                      {/* Mock Bar Chart */}
                      {[40, 60, 45, 80, 50, 90, 75, 100, 60, 85].map((height, i) => (
                        <motion.div 
                          key={i}
                          initial={{ height: 0 }}
                          whileInView={{ height: `${height}%` }}
                          transition={{ duration: 0.5, delay: i * 0.1 }}
                          className="flex-1 bg-brand-500/80 rounded-t-sm hover:bg-brand-600 dark:hover:bg-brand-400 transition-colors cursor-pointer"
                        ></motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AIFeatures />

      {/* DETAILED SERVICES SECTION */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=3540&auto=format&fit=crop')] bg-cover bg-center opacity-5 mix-blend-luminosity"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-slate-50/90 to-slate-50 dark:from-slate-950 dark:via-slate-950/90 dark:to-slate-950"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-brand-600 dark:text-brand-400 font-semibold tracking-wide uppercase text-base mb-3">Enterprise Solutions</h2>
            <h3 className="text-4xl lg:text-6xl font-display font-bold text-slate-900 dark:text-white mb-6">Our Services & Solutions</h3>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              We deliver outstanding business value for our clients on service, security, reliability, and accuracy parameters across IT and Infrastructure domains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {DETAILED_SERVICES_LIST.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-8 hover:shadow-xl dark:hover:shadow-brand-500/10 transition-all duration-300 group flex flex-col"
              >
                <div className="w-16 h-16 rounded-xl bg-brand-50 dark:bg-brand-900/20 flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h4 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-4 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                  {service.title}
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-8 flex-1">
                  {service.desc}
                </p>
                
                <div className="mb-8">
                  <h5 className="text-base font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-4 flex items-center">
                    <Zap className="w-4 h-4 mr-2 text-brand-500" /> Key Highlights
                  </h5>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-base text-slate-600 dark:text-slate-400">
                        <span className="w-1.5 h-1.5 bg-brand-500 rounded-full mt-1.5 mr-2 shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link to="/services" className="inline-flex items-center text-base font-medium text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 mt-auto group/link">
                  Explore Service <ArrowRight className="w-4 h-4 ml-1 transform group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
             <Link to="/services" className="inline-flex items-center justify-center space-x-2 bg-brand-600 hover:bg-brand-700 text-white px-6 py-4 rounded-lg font-semibold transition-colors shadow-lg shadow-brand-500/25">
               <span>View Complete Service Catalog</span>
               <ArrowRight className="w-5 h-5" />
             </Link>
          </div>
        </div>
      </section>

      {/* MANAGING DIRECTOR MESSAGE */}
      <section className="py-24 glass-section">
        <div className="container-custom">
          {/* MD Message Heading */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-4xl lg:text-6xl font-display font-bold text-slate-900 dark:text-white mb-6">
              Message from Our Managing Director
            </h2>
            <div className="w-24 h-1 bg-brand-500 mx-auto rounded-full mb-6"></div>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 italic font-medium leading-relaxed">
              "A vision of innovation, leadership, and sustainable growth driving Superwave Communication & InfraSolution Limited toward a smarter future."
            </p>
          </motion.div>

          <div className="glass-card rounded-3xl overflow-hidden bg-slate-50 dark:bg-slate-950 border-transparent">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/5 relative min-h-[400px]">
                {/* Managing Director Image */}
                <div className="absolute inset-0">
                  <img 
                    src="/images/MD/MD_one.jfif" 
                    alt="Managing Director, SCAIL" 
                    className="w-full h-full object-cover"
                  />
                  {/* Note to user: Replace the src above with your provided image path (e.g. '/md-image.jpg') once uploaded to the public directory */}
                </div>
              </div>
              
              <div className="md:w-3/5 p-10 md:p-16 flex flex-col justify-center">
                <div className="text-6xl text-brand-200 dark:text-brand-900/50 font-display font-bold leading-none mb-4">"</div>
                <h3 className="text-2xl md:text-3xl font-display font-semibold text-slate-900 dark:text-white mb-6 leading-snug">
                  The journey of SCAIL is never ending. But with the support of my team and clients, I am confident that the company will continue to scale milestones of excellence for years to come.
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                  Progress for me has never been a dream. It has always been a distant reality and once one milestone is achieved, there is always another one waiting to be crossed. It is with this belief that I laid the foundation stone of Superwave Communication & InfraSolution Limited (SCAIL) in 2015...
                </p>
                <Link to="/about" className="inline-flex items-center text-brand-600 dark:text-brand-400 font-medium hover:underline">
                  Read full message <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MDGallery />

      {/* TESTIMONIALS */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-white/5 relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute inset-0 z-0 opacity-30 dark:opacity-20 pointer-events-none">
          <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-brand-400 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-lighten"></div>
          <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] bg-cyan-400 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-lighten"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-brand-600 dark:text-brand-400 font-semibold tracking-wide uppercase text-base mb-3">Client Success Stories</h2>
            <h3 className="text-4xl lg:text-6xl font-display font-bold text-slate-900 dark:text-white mb-6">Trusted by Industry Leaders</h3>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              Hear what our partners have to say about deploying SCAIL infrastructure solutions.
            </p>
          </div>

          <div className="relative group">
            <div className="overflow-hidden px-4 py-8 -mx-4 -my-8">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={32}
                slidesPerView={1}
                loop={false}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                speed={800}
                navigation={{
                  prevEl: '.testi-prev',
                  nextEl: '.testi-next',
                }}
                breakpoints={{
                  768: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                }}
                className="!pb-4"
              >
                {TESTIMONIALS.map((testimonial, idx) => (
                  <SwiperSlide key={idx} className="h-auto">
                    <div className="h-full glass-card p-8 border-transparent shadow-xl hover:shadow-2xl dark:hover:shadow-brand-500/10 transition-all hover:-translate-y-2 relative flex flex-col">
                      <Quote className="absolute top-8 right-8 w-12 h-12 text-slate-100 dark:text-slate-800 transform rotate-180" />
                      
                      <div className="flex text-amber-500 mb-6">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-current" />
                        ))}
                      </div>
                      
                      <p className="text-slate-700 dark:text-slate-300 mb-8 relative z-10 leading-relaxed italic flex-grow">
                        "{testimonial.content}"
                      </p>
                      
                      <div className="flex items-center gap-4 mt-auto">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-14 h-14 rounded-full object-cover border-2 border-brand-100 dark:border-brand-900/50"
                        />
                        <div>
                          <h4 className="font-display font-bold text-slate-900 dark:text-white">{testimonial.name}</h4>
                          <p className="text-lg text-slate-500 dark:text-slate-400 font-medium">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            
            {/* Navigation Buttons */}
            <button 
              className="testi-prev absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 w-12 h-12 glass-card shadow-xl rounded-full flex items-center justify-center text-slate-700 dark:text-slate-300 border-transparent transition-all hover:scale-110 hover:text-brand-600 dark:hover:text-brand-400 z-10 opacity-0 group-hover:opacity-100 focus:opacity-100 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button 
              className="testi-next absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 w-12 h-12 glass-card shadow-xl rounded-full flex items-center justify-center text-slate-700 dark:text-slate-300 border-transparent transition-all hover:scale-110 hover:text-brand-600 dark:hover:text-brand-400 z-10 opacity-0 group-hover:opacity-100 focus:opacity-100 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      <LatestNews />

    </div>
  );
}
