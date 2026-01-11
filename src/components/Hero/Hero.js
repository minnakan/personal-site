import React, { useState, useEffect } from 'react';
import SocialLinks from './SocialLinks';
import work from '../../data/resume/work';

const skills = ['Unreal Engine', 'Unity', 'C++', 'Machine Learning', 'Computer Graphics', 'Qt Framework', 'GIS'];

const useTypewriter = (words, typingSpeed = 100, deletingSpeed = 50, pauseDuration = 2000) => {
  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentWord.length) {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentWord.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

  return displayText;
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const month = date.toLocaleDateString('en-US', { month: 'short' });
  const year = date.getFullYear();
  return `${month} ${year}`;
};

const calculateDuration = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();

  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  const parts = [];
  if (years > 0) parts.push(`${years} yr${years > 1 ? 's' : ''}`);
  if (months > 0) parts.push(`${months} mo${months > 1 ? 's' : ''}`);

  return parts.length > 0 ? parts.join(' ') : '< 1 mo';
};

const Hero = () => {
  const sortedWork = [...work].sort((a, b) => new Date(b.startDate) - new Date(a.startDate));
  const typedSkill = useTypewriter(skills);

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
              Software Engineer · <span className="text-indigo-400">{typedSkill}</span><span className="animate-pulse">|</span>
            </p>
          </div>
          <SocialLinks />
        </div>

        {/* Right Column: Work Experience Timeline */}
        <div className="glass-card p-6 md:p-8 md:w-1/2">
          <h2 className="text-xs font-semibold tracking-widest uppercase text-[#A3A3A3] mb-6">
            Work Experience
          </h2>
          <div className="space-y-0">
            {sortedWork.map((job, index) => (
              <div key={index} className="relative pl-8 group">
                {/* Timeline dot */}
                <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full z-10 border-2 border-white/20 bg-[#0A0A0A]" />

                {/* Connector line to next item */}
                {index < sortedWork.length - 1 && (
                  <div className="absolute left-[7px] top-4 -bottom-1.5 w-[2px] bg-white/10" />
                )}

                <div className="pb-6">
                  <h3 className="font-semibold text-white">
                    {job.position}
                  </h3>
                  <a
                    href={job.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#A3A3A3] hover:text-white transition-colors"
                  >
                    {job.name}
                  </a>
                  <p className="text-xs text-[#8B8B8B] mt-1">
                    {formatDate(job.startDate)} - {job.endDate ? formatDate(job.endDate) : 'Present'}
                    <span className="ml-2 text-[#6B6B6B]">·</span>
                    <span className="ml-2 text-indigo-400">{calculateDuration(job.startDate, job.endDate)}</span>
                  </p>
                  {job.summary && (
                    <p className="text-xs text-[#A3A3A3] mt-2 leading-relaxed">
                      {job.summary}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
