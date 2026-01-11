import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import SocialLinks from './SocialLinks';
import work from '../../data/resume/work';

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const month = date.toLocaleDateString('en-US', { month: 'short' });
  const year = date.getFullYear();
  return `${month} ${year}`;
};

const Hero = () => {
  const sortedWork = [...work].sort((a, b) => new Date(b.startDate) - new Date(a.startDate));

  return (
    <section className="min-h-[60vh] flex items-center justify-center px-4 py-20">
      <div className="flex flex-col md:flex-row gap-12 items-center justify-center max-w-7xl w-full">

        {/* Left Column: Identity & Socials */}
        <div className="flex flex-col items-center gap-6">
          <img
            src="/images/me.jpg"
            alt="Minnakan Seral"
            className="h-40 w-40 rounded-full border-2 border-neutral-800 object-cover"
          />
          <div className="flex flex-col gap-2 text-center max-w-md">
            <h1 className="text-5xl font-bold tracking-tighter text-neutral-50">
              Minnakan Seral
            </h1>
            <p className="text-lg text-neutral-400">
              MS Computer Engineering | Unreal Engine | Qt
            </p>
          </div>
          <SocialLinks />
        </div>

        {/* Right Column: Work Experience Panel */}
        <Card className="bg-neutral-900/20 border border-neutral-800 backdrop-blur-sm">
          <CardHeader>
            <h2 className="text-sm font-semibold tracking-widest uppercase text-neutral-400">
              Work Experience
            </h2>
          </CardHeader>
          <CardContent className="space-y-4">
            {sortedWork.map((job, index) => (
              <div key={index} className="border-l-2 border-neutral-700 pl-4">
                <h3 className="font-semibold text-white">{job.position}</h3>
                <a
                  href={job.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-neutral-500 hover:text-neutral-300 transition-colors"
                >
                  {job.name}
                </a>
                <p className="text-xs text-neutral-500">
                  {formatDate(job.startDate)} - {job.endDate ? formatDate(job.endDate) : 'Present'}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Hero;
