import React, { useEffect } from 'react';
import Router from 'next/router';
import * as Fathom from 'fathom-client';

// Record a pageview when route changes
Router.events.on('routeChangeComplete', () => {
  Fathom.trackPageview();
});

function FathomHandler({}) {
  // Initialize Fathom when the app loads
  useEffect(() => {
    Fathom.load( process.env.FATHOM_SITE_ID, {
      includedDomains: [process.env.FATHOM_CUSTOM_URL]
    });
  }, []);

  return null
}

export default FathomHandler;




