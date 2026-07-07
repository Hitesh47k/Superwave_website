/**
 * File: About.tsx
 * Purpose: Page component for About. Handles the UI and routing for this specific route.
 * 
 * This file is part of the SCAIL project. 
 * Developed with secure and modern React practices.
 */

import { motion } from 'motion/react';
import { Target, Eye, Users, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/seo/SEO';

/**
 * Component: About
 * 
 * Defines the About component. Responsible for rendering the UI elements
 * and handling any internal state or side-effects for this section.
 * 
 * @returns {JSX.Element} The rendered component.
 */
export default function About() {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen">
      <SEO 
        title="About Us"
        description="Learn about SCAIL, an emerging leader in turnkey Highway Infrastructure Solutions and intelligent systems."
      />
      {/* Hero Section */}
      <section className="bg-brand-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-950/50"></div>
        <div className="container-custom relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
              Pioneers in Highway System & Lighting Solutions
            </h1>
            <p className="text-xl text-slate-300">
              We are an emerging leader in turnkey Highway Infrastructure Solutions, offering one-stop solutions for ITS systems and Highway Infrastructure with an unwavering commitment to excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Strengths */}
      <section className="py-20 -mt-16 relative z-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "State of the art Infra solutions with PAN India services", color: "bg-teal-500" },
              { title: "Bespoke ITS solutions", color: "bg-cyan-500" },
              { title: "In depth organized with experienced professionals", color: "bg-blue-600" },
              { title: "Expertise in ITS, Electrical & Tunnel Management", color: "bg-indigo-600" }
            ].map((strength, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`${strength.color} rounded-2xl p-8 text-white shadow-xl flex items-center min-h-[160px]`}
              >
                <h3 className="text-lg font-semibold">{strength.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-panel p-10 md:p-12 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-brand-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center shrink-0">
                  <Target className="w-8 h-8 text-brand-600 dark:text-brand-400" />
                </div>
                <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white">Our Mission</h2>
              </div>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                To provide high standard of services to meet customers need and expectations ethically. We strive to offer our customers end-to-end intelligent transportation solutions, customized system integration and lifecycle services program for smooth traffic flow and safer roads.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-panel p-10 md:p-12 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-brand-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center shrink-0">
                  <Eye className="w-8 h-8 text-brand-600 dark:text-brand-400" />
                </div>
                <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white">Our Vision</h2>
              </div>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                "To become India's most trusted technology and infrastructure company by delivering intelligent transportation systems, enterprise IT services, AI-driven innovation, and smart infrastructure solutions that create a safer, smarter, and more connected future. We envision empowering governments, enterprises, and communities through cutting-edge digital transformation, sustainable innovation, and future-ready technologies. Our goal is to build scalable, secure, and intelligent solutions that improve operational efficiency, enhance user experiences, and contribute to long-term national development."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership & Culture */}
      <section className="py-20 glass-section">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6">Empowering Young Minds</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              At SCAIL, we believe that technology alone does not transform industries—people do. Behind every successful project is a team of passionate professionals who challenge conventions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Building Leaders, Not Just Teams",
                desc: "Leadership is not defined by position—it is defined by purpose, responsibility, and the courage to make a difference."
              },
              {
                title: "Our People Are Our Greatest Strength",
                desc: "Our employees are more than professionals—they are innovators, problem solvers, and partners in our journey of growth."
              },
              {
                title: "Nurturing Future Leaders",
                desc: "We remain committed to creating an environment where talent is recognized, ideas are valued, and continuous learning becomes a way of life."
              }
            ].map((item, i) => (
              <div key={i} className="glass-card rounded-2xl p-8">
                <div className="w-12 h-12 rounded-full bg-brand-100 dark:bg-slate-800 flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-brand-600 dark:text-brand-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
             <Link to="/careers" className="inline-flex items-center text-brand-600 dark:text-brand-400 font-medium hover:underline">
               Join our team <ChevronRight className="w-4 h-4 ml-1" />
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
