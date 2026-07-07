/**
 * File: WhyChooseScail.tsx
 * Purpose: Home section component: WhyChooseScail. Specific section used on the landing page.
 * 
 * This file is part of the SCAIL project. 
 * Developed with secure and modern React practices.
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, Cpu, Lightbulb, TrendingUp, Headset, MapPin, 
  Users, CheckCircle2, Server, DollarSign, HeartHandshake, 
  Award, Rocket, Zap, Clock
} from 'lucide-react';

const REASONS = [
  { icon: <MapPin />, title: "PAN India Presence", desc: "Nationwide execution capability with localized support." },
  { icon: <ShieldCheck />, title: "Quality & Compliance", desc: "Adherence to highest global standards and security protocols." },
  { icon: <Cpu />, title: "Enterprise IT Services", desc: "Comprehensive IT infrastructure and digital transformation." },
  { icon: <Rocket />, title: "Innovation-Driven", desc: "Leveraging bleeding-edge technology for superior results." },
  { icon: <Headset />, title: "24×7 Technical Support", desc: "Round-the-clock monitoring and dedicated issue resolution." },
  { icon: <Users />, title: "Certified Professionals", desc: "Expert engineers and project managers at your service." },
  { icon: <Server />, title: "Scalable & Secure", desc: "Architecture designed to grow securely with your business." },
  { icon: <DollarSign />, title: "Cost-Effective", desc: "Optimized resource allocation for maximum ROI." },
  { icon: <HeartHandshake />, title: "Customer-Centric", desc: "Tailored solutions aligned perfectly with your goals." },
  { icon: <Award />, title: "Proven Delivery", desc: "Track record of successful mega-project completions." },
  { icon: <Zap />, title: "AI-Powered Solutions", desc: "Intelligent automation and predictive analytics." },
  { icon: <Clock />, title: "End-to-End Execution", desc: "From conceptualization to operations and maintenance." },
];

/**
 * Component: WhyChooseScail
 * 
 * Defines the WhyChooseScail component. Responsible for rendering the UI elements
 * and handling any internal state or side-effects for this section.
 * 
 * @returns {JSX.Element} The rendered component.
 */
export default function WhyChooseScail() {
  return (
    <section className="py-24 glass-section relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-brand-500/5 blur-3xl pointer-events-none"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-brand-600 dark:text-brand-400 font-semibold tracking-wide uppercase text-sm mb-3">
              The SCAIL Advantage
            </h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6">
              Why Choose Scail
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Clients trust us as their long-term technology and infrastructure partner because we consistently deliver intelligent, scalable, and secure solutions tailored to their exact needs.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {REASONS.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group glass-section border-transparent rounded-2xl p-6 hover:shadow-xl hover:shadow-brand-500/10 dark:hover:bg-slate-900 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-500/10 to-transparent rounded-full blur-xl"></div>
              </div>
              <div className="w-12 h-12 glass-card rounded-xl flex items-center justify-center text-brand-600 dark:text-brand-400 mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300 border border-slate-100 dark:border-white/5">
                {reason.icon}
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                {reason.title}
              </h4>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
