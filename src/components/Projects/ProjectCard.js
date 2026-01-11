import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MoveUpRight } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full"
    >
      <Card className="group h-full flex flex-col justify-between bg-neutral-900/20 border-neutral-800 hover:border-neutral-600 transition-colors duration-300">

        {/* Image Area */}
        <div className="relative aspect-video overflow-hidden rounded-t-xl bg-neutral-900">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <CardHeader>
          <div className="flex justify-between items-start gap-2">
            <h3 className="text-xl font-bold text-neutral-100 group-hover:text-white transition-colors">
              {project.title}
            </h3>
            <MoveUpRight className="w-4 h-4 text-neutral-500 group-hover:text-white transition-colors flex-shrink-0" />
          </div>
          <p className="text-sm text-neutral-400 leading-relaxed mt-2">
            {project.subtitle || project.description}
          </p>
        </CardHeader>

        {/* Tech Stack */}
        <CardFooter className="flex gap-2 flex-wrap mt-auto">
          {project.tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="border-neutral-700 text-neutral-400 text-[10px]"
            >
              {tag}
            </Badge>
          ))}
        </CardFooter>
      </Card>
    </a>
  );
};

export default ProjectCard;
