const skills = [
  {
    title: 'CARLA',
    competency: 4,
    category: ['Simulation', 'Tools'],
  },
  {
    title: 'Simulink',
    competency: 3,
    category: ['Simulation', 'Tools'],
  },
  {
    title: 'RTMaps',
    competency: 3,
    category: ['Simulation', 'Tools'],
  },
  {
    title: 'Unreal Engine',
    competency: 5,
    category: ['Game Development', 'Simulation', 'Tools'],
  },
  {
    title: 'Python',
    competency: 5,
    category: ['Languages', 'ML Engineering', 'Web Development', 'Simulation'],
  },
  {
    title: 'C++',
    competency: 5,
    category: ['Languages', 'Game Development', 'Simulation'],
  },
  {
    title: 'C#',
    competency: 4,
    category: ['Languages', 'Game Development'],
  },
  {
    title: 'OpenGL',
    competency: 4,
    category: ['Game Development'],
  },
  {
    title: 'GLSL',
    competency: 3,
    category: ['Game Development'],
  },
  {
    title: 'PyTorch',
    competency: 4,
    category: ['ML Engineering', 'Python'],
  },
  {
    title: 'OpenAI Gym',
    competency: 4,
    category: ['ML Engineering', 'Python'],
  },
  {
    title: 'Three.js',
    competency: 3,
    category: ['Web Development', 'Game Development'],
  },
  {
    title: 'Javascript',
    competency: 3,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'HTML + SASS/SCSS/CSS',
    competency: 3,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Typescript',
    competency: 3,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Docker',
    competency: 3,
    category: ['Tools', 'Web Development'],
  },
  {
    title: 'AWS',
    competency: 3,
    category: ['Tools', 'Web Development'],
  },
  {
    title: 'FastAPI',
    competency: 3,
    category: ['Web Development', 'Python'],
  },
  {
    title: 'Flask',
    competency: 3,
    category: ['Web Development', 'Python'],
  },
  {
    title: 'Tensorflow + Keras',
    competency: 3,
    category: ['ML Engineering', 'Python'],
  },
  {
    title: 'Pandas',
    competency: 5,
    category: ['ML Engineering', 'Python'],
  },
  {
    title: 'Unity',
    competency: 4,
    category: ['Game Development', 'Tools'],
  },
  {
    title: 'Numpy',
    competency: 3,
    category: ['ML Engineering', 'Python'],
  },
  {
    title: 'Matplotlib',
    competency: 3,
    category: ['ML Engineering', 'Python'],
  },
  {
    title: 'Jupyter',
    competency: 3,
    category: ['Tools', 'ML Engineering', 'Python'],
  },
  {
    title: 'Bash',
    competency: 3,
    category: ['Tools', 'Languages'],
  },
  {
    title: 'SQL',
    competency: 3,
    category: ['Tools', 'Languages'],
  },
  {
    title: 'React',
    competency: 2,
    category: ['Web Development'],
  },
  {
    title: 'Django',
    competency: 3,
    category: ['Web Development', 'Python'],
  },
  {
    title: 'Node.js',
    competency: 2,
    category: ['Web Development'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [...new Set(skills.flatMap(({ category }) => category))]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
