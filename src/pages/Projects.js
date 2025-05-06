import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import data from '../data/otherProjects';

const Projects = () => (
  <Main title="Projects" description="Learn about Minnakan's projects.">
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2>
            <Link to="/projects">Projects</Link>
          </h2>
          <p>A list of my machine learning and other projects that might interest
            you

          </p>
        </div>
      </header>
      <ul className="projects-container">
        {data.map((project) => (
          <li className="project" key={project.title}>
            <h3>
              <a href={project.link}>{project.title}</a>
            </h3>
            <p>
              {project.desc} <a href={project.link}>Learn more</a>
            </p>
          </li>
        ))}
      </ul>
    </article>
  </Main>
);

export default Projects;
