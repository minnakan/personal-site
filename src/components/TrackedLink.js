import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { trackLinkClick } from '../utils/analytics';

const TrackedLink = ({ to, children, ...props }) => {
  const handleClick = () => {
    // Get the link text or use the path if no text is available
    const linkName = typeof children === 'string' ? children : to;
    trackLinkClick(linkName, to);
  };

  return (
    <Link to={to} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
};

TrackedLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default TrackedLink;
