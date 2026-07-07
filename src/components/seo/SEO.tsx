/**
 * File: SEO.tsx
 * Purpose: Component: SEO.tsx
 * 
 * This file is part of the SCAIL project. 
 * Developed with secure and modern React practices.
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  schema?: Record<string, any>;
}

const DOMAIN = "https://scail.com"; // Replace with actual domain

/**
 * Component: SEO
 * 
 * Defines the SEO component. Responsible for rendering the UI elements
 * and handling any internal state or side-effects for this section.
 * 
 * @returns {JSX.Element} The rendered component.
 */
export default function SEO({ 
  title, 
  description, 
  keywords = "SCAIL, Infrastructure, AI, Toll Systems, Highway Construction, Smart Cities", 
  image = `${DOMAIN}/og-image.jpg`,
  schema 
}: SEOProps) {
  const location = useLocation();
  const currentUrl = `${DOMAIN}${location.pathname}`;

  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SCAIL",
    "url": DOMAIN,
    "logo": `${DOMAIN}/logo.png`,
    "description": description
  };

  const finalSchema = schema || defaultSchema;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title} | SCAIL</title>
      <meta name="title" content={`${title} | SCAIL`} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={currentUrl} />
      <meta name="robots" content="index, follow" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={`${title} | SCAIL`} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={currentUrl} />
      <meta property="twitter:title" content={`${title} | SCAIL`} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalSchema)}
      </script>
    </Helmet>
  );
}
