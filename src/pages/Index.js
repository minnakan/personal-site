import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={
      "Minnakan's personal website. Computer Enginnering graduate from UC Riverside, "
      + 'Software Engineer with specialization in game development, 3D graphics, machine learning.'
    }
  >
    <article className="post" id="index">
  <header>
    <div className="title">
      <h2>
        <Link to="/">Where Code Meets Imagination</Link>
      </h2>
    </div>
  </header>
  <p>
    I'm Minnakan, a Computer Engineering graduate from <a href="https://www.ucr.edu/">UC Riverside</a> with two years of experience as an Unreal Engine Developer. I specialize in creating real-time applications that merge technical depth with creative design.
  </p>
  <p>
    My work spans high-fidelity 3D rendering tools, VR multiplayer experiences, and performance optimization using C++, Blueprints, and Unreal Engine. I focus on building interactive solutions that balance visual quality with runtime efficiency.
  </p>
  <p>
    I'm also passionate about the intersection of machine learning and graphics, continually exploring how new technologies can elevate real-time experiences in games and simulations.
  </p>
</article>
  </Main>
);

export default Index;
