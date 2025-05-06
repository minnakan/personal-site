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
        I&apos;m a C++ developer specializing in simulation tools, 3D graphics, and interactive
        software. I&apos;ve worked with Unreal Engine and Unity to develop interactive applications
        and optimize rendering pipelines for high-performance visual experiences. I&apos;m also
        passionate about machine learning and enjoy exploring how it can enhance interactivity,
        automation, and real-time decision-making in graphics and simulation.
      </p>
      <p>
        Whether it&apos;s building tools, crafting gameplay systems, or solving complex visual
        challenges, I&apos;m always looking to push what&apos;s possible in interactive development.
      </p>
    </article>
  </Main>
);

export default Index;
