import React from 'react';

interface StructuredDataProps {
  data: Record<string, unknown> | Array<Record<string, unknown>>;
  id?: string;
}

/**
 * Renders a valid JSON-LD schema script tag into the page <head> / document.
 * Safely sanitizes JSON to prevent XSS.
 */
export const StructuredData: React.FC<StructuredDataProps> = ({ data, id }) => {
  const jsonString = JSON.stringify(data).replace(/</g, '\\u003c');

  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonString }}
    />
  );
};
