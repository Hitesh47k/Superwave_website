/**
 * File: App.tsx
 * Purpose: Main Application Component. Configures routing, global providers, and top-level structure.
 * 
 * This file is part of the SCAIL project. 
 * Developed with secure and modern React practices.
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Products from './pages/Products';
import Industries from './pages/Industries';
import Clients from './pages/Clients';
import Projects from './pages/Projects';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import NotFound from './pages/NotFound';
import ScrollToTop from './components/utils/ScrollToTop';
import AI from './pages/AI';

// AI Pages
import AIAssistant from './pages/ai/AIAssistant';
import AISolutions from './pages/ai/AISolutions';
import AICostFinder from './pages/ai/AICostFinder';
import AIPrediction from './pages/ai/AIPrediction';
import AIAnalytics from './pages/ai/AIAnalytics';

/**
 * Component: App
 * 
 * Defines the App component. Responsible for rendering the UI elements
 * and handling any internal state or side-effects for this section.
 * 
 * @returns {JSX.Element} The rendered component.
 */
export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="solutions" element={<Services />} />
            <Route path="products" element={<Products />} />
            <Route path="industries" element={<Industries />} />
            <Route path="clients" element={<Clients />} />
            <Route path="projects" element={<Projects />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="careers" element={<Careers />} />
            <Route path="contact" element={<Contact />} />
            <Route path="ai" element={<AI />} />
            
            {/* AI Routes */}
            <Route path="ai/assistant" element={<AIAssistant />} />
            <Route path="ai/solutions" element={<AISolutions />} />
            <Route path="ai/project-cost-finder" element={<AICostFinder />} />
            <Route path="ai/prediction" element={<AIPrediction />} />
            <Route path="ai/analytics" element={<AIAnalytics />} />

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
