import React from 'react';
import Hero from '../components/Hero/Hero';
import ProjectsSection from '../components/Projects/ProjectsSection';
import ContactSection from '../components/Contact/ContactSection';
import GradientMesh from '../components/Background/GradientMesh';

const Home = () => (
  <div className="min-h-screen relative">
    <GradientMesh />
    <Hero />
    <ProjectsSection />
    <ContactSection />
  </div>
);

export default Home;
