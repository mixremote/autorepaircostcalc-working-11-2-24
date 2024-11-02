import React from 'react';
import { Helmet } from 'react-helmet-async';

interface Props {
  title: string;
  description: string;
  canonicalUrl?: string;
}

export default function SEOHead({ title, description, canonicalUrl }: Props) {
  const baseUrl = 'https://autorepairscalc.com';
  const fullUrl = canonicalUrl ? `${baseUrl}${canonicalUrl}` : baseUrl;

  return (
    <Helmet>
      <title>{title} | Auto Repair Cost Calculator</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content="website" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}