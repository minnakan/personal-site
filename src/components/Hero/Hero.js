import React from 'react';
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
    <section className="min-h-[70vh] flex items-center px-6 md:px-12 py-20">
      <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-start max-w-6xl w-full mx-auto">

        {/* Left Column: Identity & Socials */}
        <div className="flex flex-col items-start gap-6 md:w-1/2">
          <img
            src="/images/me.jpg"
            alt="Minnakan Seral"
            className="h-32 w-32 md:h-40 md:w-40 rounded-full object-cover ring-2 ring-white/20"
          />
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Minnakan Seral
            </h1>
            <p className="text-lg md:text-xl text-[#A3A3A3]">
              MS Computer Engineering | Unreal Engine | Qt
            </p>
          </div>
          <SocialLinks />
        </div>

        {/* Right Column: Work Experience Card */}
        <div className="glass-card p-6 md:p-8 md:w-1/2">
          <h2 className="text-xs font-semibold tracking-widest uppercase text-[#737373] mb-6">
            Work Experience
          </h2>
          <div className="space-y-5">
            {sortedWork.map((job, index) => (
              <div key={index} className="border-l-2 border-white/20 pl-4 hover:border-indigo-500/50 transition-colors">
                <h3 className="font-semibold text-white">{job.position}</h3>
                <a
                  href={job.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#A3A3A3] hover:text-white transition-colors"
                >
                  {job.name}
                </a>
                <p className="text-xs text-[#737373] mt-1">
                  {formatDate(job.startDate)} - {job.endDate ? formatDate(job.endDate) : 'Present'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
