// Combined projects from gameProjects and otherProjects
const projects = [
  // Graphics/Game Projects
  {
    id: 1,
    title: 'Position Based Fluids - OpenGL GPU Simulation',
    subtitle: 'Real-time fluid simulation using Position-Based Dynamics and OpenGL compute shaders',
    description: 'GPU-accelerated fluid simulation based on Macklin & Müller\'s Position-Based Fluids paper. Implements SPH-based density estimation, vorticity confinement, and viscosity via OpenGL compute shaders. Features a fully parallel simulation pipeline, spatial hashing for neighbor search, and real-time rendering of thousands of particles with interactive camera controls.',
    image: '/images/projects/PBF_Image.png',
    link: 'https://github.com/minnakan/PositionBasedFluids',
    tags: ['C++', 'OpenGL', 'Compute Shaders', 'Graphics'],
    category: 'graphics',
    date: '2025-06-17',
  },
  {
    id: 2,
    title: 'Boids Simulation Unity - DOTS, ECS',
    subtitle: 'Optimized flocking algorithm using Unity DOTS and Burst compilation',
    description: 'Efficient implementation of Craig Reynold\'s Boids algorithm using Unity\'s Entity Component System (ECS) and Burst compiler for simulating thousands of agents. Features spatial partitioning, vectorized math, and persistent memory management to achieve high performance across multiple CPU cores.',
    image: '/images/projects/BoidsCover.png',
    link: 'https://github.com/minnakan/Boids',
    tags: ['Unity', 'ECS', 'Burst Compiler', 'C#'],
    category: 'graphics',
    date: '2025-05-06',
  },
  {
    id: 4,
    title: 'Reinforcement Learning with Unity ML-Agents',
    subtitle: 'Exploring RL algorithms across simulated environments',
    description: 'A project exploring reinforcement learning using Unity ML-Agents in five environments: Basic, 3D Balance Ball, Grid World, Push Block, and Worm. Utilized RL algorithms such as DQN, DDPG, and SAC to train agents for tasks like navigation, balance, and object manipulation. Highlighted the effectiveness of Unity ML-Agents in creating complex training scenarios for diverse tasks.',
    image: '/images/projects/UnityMLAgents_RL.png',
    link: 'https://github.com/minnakan/UnityMLAgents_CustomAlgorithms',
    tags: ['Unity', 'Python', 'Reinforcement Learning', 'ML'],
    category: 'ml',
    date: '2024-12-31',
  },
  {
    id: 5,
    title: 'CARLA: V2V LiDAR Fusion',
    subtitle: 'Improving autonomous driving through collaborative V2V perception and trajectory planning',
    description: 'A collaborative vehicle-to-vehicle (V2V) communication framework leveraging LiDAR data sharing among smart vehicles to enhance autonomous navigation. Integrates LiDAR data into the ego vehicle\'s perception pipeline to detect occluded and long-range actors, improving safety and trajectory planning. Demonstrates the effectiveness of V2V communication for real-time collaborative perception in complex urban environments.',
    image: '/images/projects/CollaborativePerception.png',
    link: 'https://github.com/REGATTE/Collaborative-Vehicle-2-Vehicle-System',
    tags: ['Python', 'CARLA', 'LiDAR', 'Autonomous Driving'],
    category: 'ml',
    date: '2024-12-31',
  },
];

export default projects;
