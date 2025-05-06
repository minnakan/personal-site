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
    position: 'Software Engineer - Unreal',
    url: 'https://renderpub.com/',
    startDate: '2021-01-15',
    endDate: '2023-07-31',
    summary: 'High-fidelity real-time 3D visualization platform for architectural tours.',
    highlights: [
      'Shipped a real-time archviz application using Unreal Engine 4 with custom shaders, UMG UI, and optimized render/export pipelines using an OpenCV plugin.',
      'Built multiplayer and VR prototypes with Meta SDKs and AWS Gamelift, driving a 24% increase in client revenue through performance-focused solutions.',
      'Resolved 50+ live-service bugs via RenderDoc and Unreal Insights; led code reviews and authored internal tooling documentation, reducing post-launch crashes by 30%.'
    ],
  },
  {
    name: 'Brain Game Center (UCR)',
    position: 'Unity Programming Intern',
    url: 'https://braingamecenter.ucr.edu/',
    startDate: '2024-03-05',
    endDate: '2024-06-30',
    summary: 'Research-based cognitive gaming lab focused on mobile games that improve mental acuity.',
    highlights: [
      'Built and iterated on mobile cognitive games in Unity using C#, refining game mechanics and optimizing performance across devices.',
      'Implemented UI components and prefabs in ECS-driven pipelines to improve runtime stability and frame rate.',
    ],
  },
  {
    name: 'ECOCAR (UCR)',
    position: 'Associate Engineer – Simulation',
    url: 'https://ecocar.engr.ucr.edu/',
    startDate: '2024-06-01',
    endDate: '2025-01-31',
    summary: 'DOE-sponsored advanced vehicle technology competition focused on sustainable automotive innovation.',
    highlights: [
      'Developed and maintained simulation infrastructure for HIL/SIL testing using MATLAB, Simulink, and DSpace RT-Maps.',
      'Integrated vehicle models and validation scenarios over UDP/CAN protocols; awarded minigrant for simulation workflow contributions.',
    ],
  },
  {
    name: 'Geopogo',
    position: 'Software Engineer Intern',
    url: 'https://www.geopogo.com/',
    startDate: '2025-01-01',
    summary: '3D urban design platform integrating Cesium and AI-assisted rendering for architects and planners.',
    highlights: [
      'Integrated Cesium Ion APIs and AI-assisted rendering into Geopogo Cities, boosting user engagement by 42%.',
      'Wrote feature specs and dev documentation for internal plugins, improving cross-team efficiency.',
    ],
  },
];

export default work;
