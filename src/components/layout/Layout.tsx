/**
 * File: Layout.tsx
 * Purpose: Layout component: Layout. Provides structural UI elements shared across multiple pages.
 * 
 * This file is part of the SCAIL project. 
 * Developed with secure and modern React practices.
 */

import { Outlet, useLocation, useOutlet } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import AIChatbot from '../ui/AIChatbot';
import WhatsAppButton from '../ui/WhatsAppButton';
import Newsletter from './Newsletter';
import FAQ from './FAQ';
import Certificates from './Certificates';
import ScrollProgress from '../ui/ScrollProgress';
import BackToTop from '../ui/BackToTop';
import CustomCursor from '../ui/CustomCursor';
import { PageTransition } from '../utils/Animations';

/**
 * Component: Layout
 * 
 * Defines the Layout component. Responsible for rendering the UI elements
 * and handling any internal state or side-effects for this section.
 * 
 * @returns {JSX.Element} The rendered component.
 */
export default function Layout() {
  const location = useLocation();
  const currentOutlet = useOutlet();
  
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollProgress />
      <Header />
      <Navbar />
      <main className="flex-grow overflow-hidden">
        <AnimatePresence mode="wait">
          <PageTransition key={location.pathname}>
            {currentOutlet}
          </PageTransition>
        </AnimatePresence>
      </main>
      <Certificates />
      <FAQ />
      <Newsletter />
      <Footer />
      <WhatsAppButton />
      <AIChatbot />
      <CustomCursor />
      <BackToTop />
    </div>
  );
}
