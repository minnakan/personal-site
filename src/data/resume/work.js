/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Renderpub',
    position: 'Unreal Engine Developer',
    url: 'https://renderpub.com/',
    startDate: '2021-01-15',
    endDate: '2023-07-31',
    summary: 'AI powered real-time 3D renderer to create interactive virtual tours for Real Estate Marketers.',
    highlights: [
      'Developed and shipped Renderpub Studio,incorporating features like user authentication, 3D models import/export, and render pipelines.',
      'Implemented runtime JavaScript and python scripting functionalities to the application through interfaces and tackled key challenges with programming languages interoperability using JSON for data exchange.',
      'Developed various VR applications/prototypes for external stakeholders which included hand tracking and index pinch based functionality for third party clients using Meta’s interaction SDK for Unreal Engine.',
      'Used GPU and CPU profilers to assess timing characteristics of various application features subsequently improving performance of the 3D model importer, reducing memory usage and execution time by 2x.',
      'Responded to technical issues during live services and organized code reviews and scrum meetings, fixing bugs and improving user experience contributing to a successful product launch.',
    ],
  },
  {
    name: 'Unity Programming Intern',
    position: 'Brain Game Center (UCR)',
    url: 'https://braingamecenter.ucr.edu/',
    startDate: '2024-03-05',
    endDate: '2024-010-01',
    highlights: [
      'Contributed as a part-time developer to create engaging mobile gaming experiences with a focus on cognitive-based gameplay.',
      'Collaborated closely with researchers and engineers to create dynamic UX features, ensuring performance, scalability, and security optimizations.',
      'Conducted detailed testing and peer code reviews to maintain high-quality deliverables.',
    ],
  },
  {
    name: 'ECOCAR (UCR)',
    position: 'Associate Engineer - Simulation',
    url: 'https://ecocar.engr.ucr.edu/',
    startDate: '2024-06-01',
    highlights: [
      'Architected and supported foundational simulation software for Software in the Loop (SIL) and Hardware in the Loop (HIL) testing.',
      'Integrated vehicle dynamics and control workflows within Roadrunner/MATLAB and DSpace RT-Maps, ensuring seamless communication between systems through UDP and CAN protocols.',
      'Optimized the performance of simulation environments, improving execution speed and system responsiveness.',
    ],
  },
];

export default work;
