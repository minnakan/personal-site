import ReactGA from 'react-ga4';

// Initialize GA4
export const initGA = (measurementId) => {
  ReactGA.initialize(measurementId);
};

// Track page views
export const trackPageView = (path) => {
  ReactGA.send({ hitType: 'pageview', page: path });
};

// Track custom events
export const trackEvent = (category, action, label) => {
  ReactGA.event({
    category,
    action,
    label,
  });
};

// Track link clicks
export const trackLinkClick = (linkName, linkUrl) => {
  ReactGA.event({
    category: 'Link',
    action: 'Click',
    label: linkName,
    transport: 'beacon',
    // Optional: include the URL as a custom dimension
    custom_map: {
      dimension1: 'link_url',
    },
    link_url: linkUrl,
  });
};
