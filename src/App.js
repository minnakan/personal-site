import React, {
  Suspense,
  lazy,
  useEffect,
} from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import Main from './layouts/Main'; // fallback for lazy pages
import './static/css/main.scss'; // All of our styles
import { initGA, trackPageView } from './utils/analytics';

const { PUBLIC_URL } = process.env;

// Initialize GA4 with your measurement ID
initGA('G-6TS1GTF36E'); // Replace with your actual GA4 measurement ID

// Component to track page views
const PageTracker = () => {
  const location = useLocation();
  useEffect(() => {
    trackPageView(location.pathname);
  }, [location]);
  return null;
};

// Every route - we lazy load so that each page can be chunked
// NOTE that some of these chunks are very small. We should optimize
// which pages are lazy loaded in the future.
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Index = lazy(() => import('./pages/Index'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Playground = lazy(() => import('./pages/Playground'));
const Projects = lazy(() => import('./pages/Projects'));
const Resume = lazy(() => import('./pages/Resume'));

const App = () => (
  <BrowserRouter basename={PUBLIC_URL}>
    <PageTracker />
    <Suspense fallback={<Main />}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/playground" element={<Playground />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default App;
