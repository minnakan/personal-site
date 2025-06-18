// TODO Add a couple lines about each project
const data = [
  {
    title: 'Position Based Fluids - OpenGL GPU Simulation',
    subtitle: 'Real-time fluid simulation using Position-Based Dynamics and OpenGL compute shaders',
    link: 'https://github.com/minnakan/PositionBasedFluids',
    image: '/images/projects/PBF_Image.png', 
    date: '2025-06-17',
    desc: 'GPU-accelerated fluid simulation based on Macklin & Müller’s Position-Based Fluids paper. Implements SPH-based density estimation, vorticity confinement, and viscosity via OpenGL compute shaders.'
      + 'Features a fully parallel simulation pipeline, spatial hashing for neighbor search, and real-time rendering of thousands of particles with interactive camera controls.',
  },
  {
    title: 'Boids Simulation Unity - DOTS, ECS',
    subtitle: 'Optimized flocking algorithm using Unity DOTS and Burst compilation',
    link: 'https://github.com/minnakan/Boids',
    image: '/images/projects/BoidsCover.png',
    date: '2025-05-06',
    desc: 'Efficient implementation of Craig Reynold\'s Boids algorithm using Unity\'s Entity Component System (ECS) and Burst compiler for simulating thousands of agents.'
      + 'Features spatial partitioning, vectorized math, and persistent memory management to achieve high performance across multiple CPU cores.',
  },
  {
    title: 'Crypto Runner: Endless Game',
    subtitle: 'An endless runner game with a unique crypto-themed aesthetic',
    link: 'https://github.com/minnakan/CryptoRunner_UE5',
    image: '/images/projects/CryptoRunnerFinal.png',
    date: '2024-12-31',
    desc:
      'Endless runner game in Unreal Engine 5 featuring material effects, custom character retargeting, and a random obstacle spawning system.'
      + 'Includes a high-score tracker and power-ups.',
  },
  {
    title: 'Unreal Engine 5 Third-Person Game Demo',
    subtitle: 'A third-person game featuring advanced animations, AI, and visual effects',
    link: 'https://github.com/minnakan/BD2056_UE5',
    image: '/images/projects/TPS_Final.png',
    date: '2024-09-20',
    desc:
      'Third-person game demo in Unreal Engine 5, featuring smooth character animations using motion matching and IK re-targeting.'
+ 'Implemented dynamic enemy AI behavior with Behavior Trees and state-driven animations. Enhanced gameplay with realistic bullet impact visuals.',
  },
  {
    title: 'Air Combat - Unity',
    subtitle: 'Air combat game featuring intuitive flight controls, AI jets, and procedural terrain',
    link: 'https://github.com/minnakan/FlyAndShoot',
    image: '/images/projects/DF_Final.png',
    date: '2024-11-25',
    desc:
      'Air combat game in Unity with smooth and intuitive mouse flight controls for precise maneuvers.'
      + 'AI-controlled jets with strategic behavior, such as outmaneuvering and combat positioning.'
      + 'Procedural terrain generation system with Level of Detail (LOD) optimization for efficient rendering.',
  },
  {
    title: 'Ray Tracer with Compute Shaders',
    subtitle: 'GPU-accelerated ray tracing system with physically-based materials',
    link: 'https://github.com/minnakan/Raytracing_OpenGL',
    image: '/images/projects/RT_Final.png',
    date: '2024-12-31',
    desc:
      'GPU-accelerated ray tracer using C++, OpenGL, and GLSL. Supports physically-based materials, anti-aliasing, temporal accumulation, and ray-object intersection techniques. '
    + 'Enhanced visual fidelity with noise reduction for efficient high-sample rendering.',
  },
  {
    title: 'Procedural Terrain Generation',
    subtitle: 'Terrain generation and lighting techniques in C++ and OpenGL',
    link: 'https://github.com/minnakan/PTG_OpenGL',
    image: '/images/projects/PTG_Final.png',
    date: '2024-11-14',
    desc:
      'Diverse terrain generation techniques, including Fault Formation, Midpoint Displacement, and Perlin Noise, to create realistic and continuous landscapes.'
      + 'Includes texturing and lighting systems, featuring region-based procedural textures, slope lighting, and height-based lighting.',
  },
];

export default data;
