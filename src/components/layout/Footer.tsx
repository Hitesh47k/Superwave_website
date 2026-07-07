/**
 * File: Footer.tsx
 * Purpose: Layout component: Footer. Provides structural UI elements shared across multiple pages.
 * 
 * This file is part of the SCAIL project. 
 * Developed with secure and modern React practices.
 */

import { Link } from 'react-router-dom';
import { CONTACT_CONFIG } from '../../config/constants';
import { Facebook, Twitter, Linkedin, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

/**
 * Component: Footer
 * 
 * Defines the Footer component. Responsible for rendering the UI elements
 * and handling any internal state or side-effects for this section.
 * 
 * @returns {JSX.Element} The rendered component.
 */
export default function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Overview */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-[10px]">
              <img 
                src="/images/Scail-logo.jpeg" 
                alt="SCAIL Logo" 
                className="w-8 h-8 object-contain shrink-0" 
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.dataset.failed) {
                    target.dataset.failed = "true";
                    e.currentTarget.src = 'https://placehold.co/100x100/2563eb/ffffff?text=SCAIL&font=Montserrat';
                  }
                }}
              />
              <div>
                <h2 className="font-display font-bold text-xl leading-tight text-slate-900 dark:text-white">SCAIL</h2>
              </div>
            </Link>
            <p className="text-sm leading-relaxed mt-4">
              Transforming Mobility Through Engineering Excellence. Delivering end-to-end IT services, custom software development, AI-driven solutions, and advanced toll plaza management systems.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center hover:bg-brand-600 hover:text-white transition-all duration-300 hover:scale-110 text-slate-700 dark:text-slate-400">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center hover:bg-brand-600 hover:text-white transition-all duration-300 hover:scale-110 text-slate-700 dark:text-slate-400">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center hover:bg-brand-600 hover:text-white transition-all duration-300 hover:scale-110 text-slate-700 dark:text-slate-400">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-slate-900 dark:text-white font-display font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'About Us', path: '/about' },
                { name: 'Projects', path: '/projects' },
                { name: 'Clients', path: '/clients' },
                { name: 'Careers', path: '/careers' },
                { name: 'Gallery', path: '/gallery' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors flex items-center group text-sm text-slate-600 dark:text-slate-400">
                    <ArrowRight className="w-3 h-3 mr-2 text-slate-400 dark:text-slate-600 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services & Solutions */}
          <div>
            <h3 className="text-slate-900 dark:text-white font-display font-semibold mb-6">Solutions</h3>
            <ul className="space-y-3">
              {['AI Consulting', 'Software Engineering', 'Hardware Manufacturing', 'Smart Toll Solutions', 'Highway Infrastructure'].map((link) => (
                <li key={link}>
                  <Link to="/services" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors flex items-center group text-sm text-slate-600 dark:text-slate-400">
                    <ArrowRight className="w-3 h-3 mr-2 text-slate-400 dark:text-slate-600 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-slate-900 dark:text-white font-display font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-brand-600 dark:text-brand-500 shrink-0 mt-0.5" />
                <span>L-9, Plot no. 75, Surender Singh Complex,<br/>Mahipalpur Extension, New Delhi-110037</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-brand-600 dark:text-brand-500 shrink-0" />
                <a href={CONTACT_CONFIG.PHONE_LINK} className="hover:text-brand-500 transition-colors">{CONTACT_CONFIG.PHONE_DISPLAY}</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-brand-600 dark:text-brand-500 shrink-0" />
                <span>Anshuman@superwaveinfra.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 mt-4 flex flex-col items-center justify-center text-xs md:text-sm text-slate-500 dark:text-slate-400">
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4 text-center">
            <span className="font-medium text-slate-600 dark:text-slate-300">
              &copy; {new Date().getFullYear()} Superwave Communication & InfraSolution Limited. All Rights Reserved.
            </span>
            <span className="hidden md:inline text-slate-300 dark:text-slate-700">•</span>
            <div className="flex items-center gap-[8px] flex-wrap justify-center">
              <img 
                src="/images/Scail-logo.jpeg" 
                alt="SCAIL Logo" 
                className="w-[18px] h-[18px] object-contain shrink-0" 
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.dataset.failed) {
                    target.dataset.failed = "true";
                    e.currentTarget.src = 'https://placehold.co/50x50/2563eb/ffffff?text=SCAIL&font=Montserrat';
                  }
                }}
              />
              <span className="font-medium text-slate-600 dark:text-slate-300">
                Engineered by Hitesh Sharma <span className="text-slate-400 dark:text-slate-500 font-normal">(Junior AI Engineer)</span>
              </span>
              <a 
                href="https://hitesh-sharma-portfolio.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                title="View Hitesh Sharma's Portfolio"
                className="text-[#003366] dark:text-[#60A5FA] font-semibold hover:underline cursor-pointer transition-colors duration-300"
              >
                Click Here
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
