import React from 'react';
import Hero from '../components/Hero/Hero';
import ProjectsSection from '../components/Projects/ProjectsSection';
import ContactSection from '../components/Contact/ContactSection';

const Home = () => (
  <div className="min-h-screen bg-background">
    <Hero />
    <ProjectsSection />
    <ContactSection />
  </div>
);

export default Home;
