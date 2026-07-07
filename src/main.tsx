/**
 * File: main.tsx
 * Purpose: Application Entry Point. Renders the root React component into the DOM and sets up global context (e.g., StrictMode).
 * 
 * This file is part of the SCAIL project. 
 * Developed with secure and modern React practices.
 */

import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import ErrorBoundary from './components/ErrorBoundary.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
);
