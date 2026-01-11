import React, { useEffect } from 'react';
import './index.css';
import { initGA, trackPageView } from './utils/analytics';
import Home from './pages/Home';

// Initialize GA4
initGA('G-6TS1GTF36E');

const App = () => {
  useEffect(() => {
    trackPageView('/');
  }, []);

  return <Home />;
};

export default App;
