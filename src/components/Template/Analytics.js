import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';

const { MODE, VITE_GA_TRACKING_ID } = import.meta.env;

if (MODE === 'production') {
  ReactGA.initialize(VITE_GA_TRACKING_ID);
}

const Analytics = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (MODE === 'production') {
      ReactGA.set({
        page: pathname,
      });
      ReactGA.pageview(pathname);
    }
  }, [pathname]);

  return null;
};

export default Analytics;
