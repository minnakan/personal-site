// TODO Add a couple lines about each project
const data = [
  {
    title: 'Web Scraping and URL Classification API',
    subtitle: 'API for web scraping and content classification using FastAPI',
    link: 'https://github.com/minnakan/FastAPI-URL_Classification',
    image: '/images/projects/WebScrapingAPI.png',
    date: '2024-12-31',
    desc:
      'A Web Scraping and URL Classification API that extracts content from URLs and applies a machine learning model to classify them based on their text content. '
      + 'Supports batch processing of URLs, provides confidence scores, and returns the top three predicted categories for each URL.',
  },
  {
    title: 'Game of Life - QT',
    subtitle: 'Interactive Conway\'s Game of Life implementation using Qt',
    link: 'https://github.com/minnakan/GameOfLife_UI',
    image: '/Images/GOL_1.gif',
    date: '2024-12-31',
    desc:
      'An interactive implementation of Conway\'s Game of Life built with Qt. '
      + 'Features an adjustable grid size, interactive controls for starting, stopping, and resetting the simulation, '
      + 'and intuitive cell state toggling with wrapping edges for continuous simulation.',
  },
  {
    title: 'Reinforcement Learning with Unity ML-Agents',
    subtitle: 'Exploring RL algorithms across simulated environments',
    link: 'https://github.com/minnakan/UnityMLAgents_CustomAlgorithms',
    image: '/images/projects/UnityMLAgents_RL.png',
    date: '2024-12-31',
    desc:
      'A project exploring reinforcement learning using Unity ML-Agents in five environments: Basic, 3D Balance Ball, Grid World, Push Block, and Worm. '
      + 'Utilized RL algorithms such as DQN, DDPG, and SAC to train agents for tasks like navigation, balance, and object manipulation. '
      + 'Highlighted the effectiveness of Unity ML-Agents in creating complex training scenarios for diverse tasks.',
  },
  {
    title: 'Lunar Lander Using DDPG and SAC',
    subtitle: 'Reinforcement learning for OpenAI Gym Lunar Lander environment',
    link: 'https://github.com/minnakan/LunarLander_RL',
    image: './Extras/LunarLander.gif',
    date: '2024-12-31',
    desc:
      'An implementation of DDPG and SAC for the OpenAI Gym Lunar Lander environment. '
      + 'Utilizes PyTorch, OpenAI Gym, and Tensorboard to train and visualize reinforcement learning agents. '
      + 'Demonstrates the performance of the agents through episodic returns during training.',
  },
  {
    title: 'CartPole Balancing Using DQN',
    subtitle: 'Deep Q-Learning for OpenAI Gym CartPole-v1 environment',
    link: 'https://github.com/minnakan/PoleBalancing_DQN',
    image: './Extras/PoleBalancing_gif.gif',
    date: '2024-12-31',
    desc:
      'An implementation of a Deep Q-Learning (DQL) network for the OpenAI Gym CartPole-v1 environment. '
      + 'Utilizes PyTorch, OpenAI Gym, and Tensorboard to train and visualize the agent\'s performance. '
      + 'Shows training progress through episodic returns with different smoothing levels.',
  },
  {
    title: 'CARLA: V2V LiDAR Fusion',
    subtitle: 'Improving autonomous driving through collaborative V2V perception and trajectory planning',
    link: 'https://github.com/REGATTE/Collaborative-Vehicle-2-Vehicle-System',
    image: '/images/projects/CollaborativePerception.png',
    date: '2024-12-31',
    desc:
      'A collaborative vehicle-to-vehicle (V2V) communication framework leveraging LiDAR data sharing among smart vehicles to enhance autonomous navigation. '
      + 'Integrates LiDAR data into the ego vehicle\'s perception pipeline to detect occluded and long-range actors, improving safety and trajectory planning. '
      + 'Demonstrates the effectiveness of V2V communication for real-time collaborative perception in complex urban environments.',
  },
  {
    title: 'Deep Learning Network Intrusion Detection',
    subtitle: 'Lightweight and compact feature vector-based network security solution',
    link: 'https://colab.research.google.com/drive/1ITDXMMETekNNAXHCTKUeHcT2EHpz4bC1?usp=sharing',
    image: '/images/projects/NetworkIntrusionDetection.png',
    date: '2024-12-31',
    desc:
      'A deep learning-based Intrusion Detection System (IDS) utilizing a lightweight and compact feature vector set. '
      + 'Implements a Feed-Forward Neural Network (FFNN) to enhance detection accuracy for network threats while reducing computational overhead. '
      + 'Achieved superior accuracy on UNSW-NB15 and NSL-KDD datasets compared to traditional approaches.',
  },
];

export default data;
