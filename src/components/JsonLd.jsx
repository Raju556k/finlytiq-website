import React, { useEffect, useRef } from 'react';

/**
 * Injects a single JSON-LD script into document head. Used for LocalBusiness, Service, etc.
 */
export default function JsonLd({ data }) {
  const scriptRef = useRef(null);

  const json = data ? JSON.stringify(data) : null;
  useEffect(() => {
    if (!json) return;
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = json;
    scriptRef.current = script;
    document.head.appendChild(script);
    return () => {
      if (scriptRef.current && scriptRef.current.parentNode) {
        scriptRef.current.parentNode.removeChild(scriptRef.current);
      }
    };
  }, [json]);

  return null;
}
