import React from 'react';
import PropTypes from 'prop-types';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import Navigation from '../components/Template/Navigation';
import SideBar from '../components/Template/SideBar';
import ScrollToTop from '../components/Template/ScrollToTop';

const Main = ({
  children = null,
  fullPage = false,
  title = null,
  description = "Minnakan's personal website.",
}) => (
  <HelmetProvider>
    <ScrollToTop />
    <Helmet
      titleTemplate="%s | Minnakan Seral"
      defaultTitle="Minnakan Seral"
      defer={false}
    >
      {title && <title>{title}</title>}
      <meta name="description" content={description} />
    </Helmet>
    <div id="wrapper">
      <Navigation />
      <div id="main">{children}</div>
      {fullPage ? null : <SideBar />}
    </div>
  </HelmetProvider>
);

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  fullPage: PropTypes.bool.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
};

Main.defaultProps = {
  title: null,
  description: "Minnakan's personal website.",
};

export default Main;
