import React from 'react';
import { MoveUpRight } from 'lucide-react';

const ProjectCard = ({ project }) => (
  <a
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    className="block h-full group"
  >
    <div className="glass-card h-full flex flex-col">
      {/* Image Area */}
      <div className="relative aspect-video overflow-hidden rounded-t-[calc(1rem-1px)] bg-black/30">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-fill block transition-transform duration-500 group-hover:scale-105"
        />
        <MoveUpRight className="absolute top-4 right-4 w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-all duration-300" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-5">
        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-indigo-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-[#A3A3A3] leading-relaxed line-clamp-2 mb-4">
          {project.subtitle || project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex gap-2 flex-wrap mt-auto">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-[10px] font-medium text-[#A3A3A3] border border-white/10 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  </a>
);

export default ProjectCard;
