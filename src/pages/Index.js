import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={
      "Minnakan's personal website. Computer Enginnering graduate from UC Riverside, "
      + 'Unreal Engine Developer with specialization in game development, 3D graphics, machine learning.'
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
        Hi, I&apos;m Minnakan, a Computer Engineering graduate from
        <a href="https://www.ucr.edu/"> UC Riverside</a> with 2 years of professional experience as an
        Unreal Engine Developer. My journey combines a strong technical background and a passion for
        creating innovative and immersive experiences in game development, 3D graphics,
        and machine learning.
      </p>
      <p>
        Over the years, I have contributed to a variety of impactful projects, including developing
        interactive 3D applications, procedural terrain generation systems, and AI-driven gameplay
        mechanics.
        My expertise spans C++, Python, OpenGL, and TensorFlow, allowing me to build efficient,
        high-performance
        solutions tailored to complex challenges in both gaming and simulation domains.
      </p>
      <p>
        As an Unreal Engine Developer, I developed and launched a 3D rendering application using
        UE4 blueprint
        scripting and C++, implementing features like user authentication, 3D model
        import, and optimized
        pipelines for rendering. I also developed various VR multiplayer applications
        and prototypes for external
        stakeholders, including hand tracking and racing wheel functionality for third-party
        clients using Meta’s Interaction SDK for Unreal Engine.
        I take pride in crafting experiences that push the boundaries of
        interactivity and visual
        fidelity.
      </p>
      <p>
        When I&apos;m not coding or debugging, I&apos;m deeply invested in exploring advancements
        in machine learning
        and how they intersect with real-time rendering and gaming technologies. My
        goal is to leverage my
        skills to create transformative technologies that redefine user engagement and immersion.
      </p>
    </article>
  </Main>
);

export default Index;
