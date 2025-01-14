import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Minnakan Seral</h2>
        <p>
          <a href="mailto:minnakan@gmail.com">minnakan@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Minnakan, a Computer Engineering graduate from
        <a href="https://www.ucr.edu/"> UC Riverside</a> with 2 years of experience
        as an Unreal Engine Developer. I specialize in game development, 3D graphics,
        machine learning, and delivering optimized solutions for immersive experiences.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
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
