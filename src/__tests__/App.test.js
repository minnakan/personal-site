/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import App from '../App';

describe('renders the app', () => {
  // mocks the fetch API used on the stats page and the about page.
  const jsonMock = jest.fn(() => Promise.resolve({}));
  const textMock = jest.fn(() => Promise.resolve(''));
  global.fetch = jest.fn(() => Promise.resolve({
    json: jsonMock,
    text: textMock,
  }));
  // mocks the scrollTo API used when navigating to a new page.
  window.scrollTo = jest.fn();

  let container;

  beforeEach(async () => {
    container = document.createElement('div');
    document.body.appendChild(container);
    await act(async () => {
      await ReactDOM.createRoot(container).render(<App />);
    });
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
    jest.clearAllMocks();
  });

  const waitForRouteChange = () => {
    setTimeout(() => {}, 0);
    return new Promise((resolve) => { setTimeout(resolve, 0); });
  };

  it('should render the app', async () => {
    expect(document.body).toBeInTheDocument();
  });

  it('should render the title', async () => {
    expect(document.title).toBe('Minnakan Seral'); // Changed to single quotes
  });

  it('can navigate to /resume', async () => {
    expect.assertions(3); // Adjusted the number of assertions
    const aboutLink = document.querySelector(
      '#header > nav > ul > li:nth-child(1) > a',
    );
    expect(aboutLink).toBeInTheDocument();
    await act(async () => {
      await aboutLink.click();
      await waitForRouteChange();
    });
    expect(document.title).toContain('Resume');
    expect(window.location.pathname).toBe('/resume');
  });

  it('can navigate to /playground', async () => {
    expect.assertions(3);
    const resumeLink = document.querySelector(
      '#header > nav > ul > li:nth-child(2) > a',
    );
    expect(resumeLink).toBeInTheDocument();
    await act(async () => {
      await resumeLink.click();
      await waitForRouteChange();
    });
    expect(document.title).toContain('Playground |');
    expect(window.location.pathname).toBe('/playground');
  });

  it('can navigate to /projects', async () => {
    expect.assertions(3);
    const contactLink = document.querySelector(
      '#header > nav > ul > li:nth-child(3) > a',
    );
    expect(contactLink).toBeInTheDocument();
    await act(async () => {
      await contactLink.click();
      await waitForRouteChange();
    });
    expect(document.title).toContain('Projects |');
    expect(window.location.pathname).toBe('/projects');
  });

  it('can navigate to /contact', async () => {
    expect.assertions(3); // Adjusted the number of assertions
    const contactLink = document.querySelector(
      '#header > nav > ul > li:nth-child(4) > a',
    );
    expect(contactLink).toBeInTheDocument();
    await act(async () => {
      await contactLink.click();
      await waitForRouteChange();
    });
    expect(document.title).toContain('Contact |');
    expect(window.location.pathname).toBe('/contact');
  });
});
