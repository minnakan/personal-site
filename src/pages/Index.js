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
            <Link to="/">Rendering Ideas into Action</Link>
          </h2>
        </div>
      </header>
      <p>
        I&apos;m Minnakan, a Computer Engineering graduate from
        <a href="https://www.ucr.edu/"> UC Riverside</a> with a focus on real-time systems,
        interactive 3D applications, and simulation tools. I specialize in building immersive
        experiences that combine technical depth with creative design.
      </p>
      <p>
        My work spans high-fidelity rendering tools, VR multiplayer experiences, and performance
        optimization using C++, Blueprints, and Unreal Engine. I focus on crafting interactive
        solutions that deliver both visual impact and runtime efficiency.
      </p>
      <p>
        I&apos;m also passionate about the intersection of machine learning and graphics,
        continually exploring how emerging technologies can enhance real-time experiences in
        games and simulations.
      </p>
    </article>
  </Main>
);

export default Index;
