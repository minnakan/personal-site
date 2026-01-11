/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import App from '../App';

// Mock Google Analytics
jest.mock('../utils/analytics', () => ({
  initGA: jest.fn(),
  trackPageView: jest.fn(),
}));

describe('Portfolio App', () => {
  beforeEach(() => {
    render(<App />);
  });

  describe('Hero Section', () => {
    it('renders the name', () => {
      expect(screen.getByText('Minnakan Seral')).toBeInTheDocument();
    });

    it('renders the tagline', () => {
      expect(screen.getByText(/MS Computer Engineering/)).toBeInTheDocument();
    });

    it('renders work experience section', () => {
      expect(screen.getByText('Work Experience')).toBeInTheDocument();
    });

    it('renders current job', () => {
      expect(screen.getByText('ESRI')).toBeInTheDocument();
      expect(screen.getByText('Product Engineer')).toBeInTheDocument();
    });

    it('renders social links', () => {
      const linkedinLinks = screen.getAllByRole('link', { name: /linkedin/i });
      const emailLinks = screen.getAllByRole('link', { name: /email/i });
      const githubLinks = screen.getAllByRole('link', { name: /github/i });

      expect(linkedinLinks.length).toBeGreaterThan(0);
      expect(emailLinks.length).toBeGreaterThan(0);
      expect(githubLinks.length).toBeGreaterThan(0);
    });
  });

  describe('Projects Section', () => {
    it('renders the section title', () => {
      expect(screen.getByText('Project Showcase')).toBeInTheDocument();
    });

    it('renders project cards', () => {
      // Check for at least one project
      expect(screen.getByText(/Position Based Fluids/)).toBeInTheDocument();
    });

    it('renders project tags', () => {
      expect(screen.getAllByText('C++').length).toBeGreaterThan(0);
    });
  });

  describe('Contact Section', () => {
    it('renders the section title', () => {
      expect(screen.getByText('Get In Touch')).toBeInTheDocument();
    });

    it('renders contact methods', () => {
      // Contact section has LinkedIn, Email, Github labels
      const contactLabels = screen.getAllByRole('heading', { level: 3 });
      const labelTexts = contactLabels.map(h => h.textContent);

      expect(labelTexts).toContain('LinkedIn');
      expect(labelTexts).toContain('Email');
      expect(labelTexts).toContain('Github');
    });
  });
});
