import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src="/images/me.jpg" alt="" />
      </Link>
      <header>
        <h2>Minnakan Seral</h2>
        <p>
          <a href="mailto:minnakan@gmail.com">minnakan@gmail.com</a>
        </p>
      </header>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy;Minnakan Seral
      </p>
    </section>
  </section>
);

export default SideBar;
