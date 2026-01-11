import React from 'react';
import ProjectCard from './ProjectCard';
import projects from '../../data/projects';

const ProjectsSection = () => (
  <section className="relative z-10 py-24 px-6 md:px-12">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 tracking-tight">
        Project Showcase
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
