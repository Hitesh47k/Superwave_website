/**
 * File: NotFound.tsx
 * Purpose: Page component for NotFound. Handles the UI and routing for this specific route.
 * 
 * This file is part of the SCAIL project. 
 * Developed with secure and modern React practices.
 */

/**
 * Component: NotFound
 * 
 * Defines the NotFound component. Responsible for rendering the UI elements
 * and handling any internal state or side-effects for this section.
 * 
 * @returns {JSX.Element} The rendered component.
 */
export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-9xl font-display font-bold text-brand-500 mb-4">404</h1>
      <h2 className="text-3xl font-display font-semibold mb-6">Page Not Found</h2>
      <p className="text-slate-500 dark:text-slate-400 max-w-md mb-8">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <a href="/" className="bg-brand-600 hover:bg-brand-500 text-white px-6 py-3 rounded-md font-semibold transition-colors">
        Return to Home
      </a>
    </div>
  );
}
