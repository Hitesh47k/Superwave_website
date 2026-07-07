/**
 * File: ScrollToTop.tsx
 * Purpose: Utility component: ScrollToTop. Provides functional or aesthetic utilities like animations or scrolling.
 * 
 * This file is part of the SCAIL project. 
 * Developed with secure and modern React practices.
 */

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Component: ScrollToTop
 * 
 * Defines the ScrollToTop component. Responsible for rendering the UI elements
 * and handling any internal state or side-effects for this section.
 * 
 * @returns {JSX.Element} The rendered component.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
