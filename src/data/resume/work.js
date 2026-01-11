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
    position: 'Software Engineer - Unreal Engine',
    url: 'https://renderpub.com/',
    startDate: '2021-01-15',
    endDate: '2023-07-31',
    summary: 'High-fidelity real-time 3D visualization platform for architectural tours.',
  },
  {
    name: 'Geopogo',
    position: 'Software Engineer - Unreal Engine & Backend ',
    url: 'https://www.geopogo.com/',
    startDate: '2025-01-01',
    endDate: '2025-07-10',
    summary: '3D urban design platform integrating Cesium and AI-assisted rendering for architects and planners.',
  },
    {
    name: 'ESRI',
    position: 'Product Engineer',
    url: 'https://developers.arcgis.com/qt/',
    startDate: '2025-07-11',
    summary: 'ArcGIS Maps SDK for Qt.',
  },
];

export default work;
