'use client';

import React from 'react';
import Script from 'next/script';

/**
 * Google Analytics 4 (GA4) Integration Component
 *
 * Automatically mounts Google Analytics when NEXT_PUBLIC_GA_MEASUREMENT_ID is provided.
 * If not set, renders cleanly with zero console warnings or overhead.
 */
export const GoogleAnalytics: React.FC = () => {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  if (!gaId) {
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      <Script
        id="google-analytics-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}', {
              page_path: window.location.pathname,
              send_page_view: true,
              anonymize_ip: true
            });
          `,
        }}
      />
    </>
  );
};
