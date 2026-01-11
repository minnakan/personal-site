const config = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx)$': ['babel-jest', { presets: ['@babel/preset-env', '@babel/preset-react'] }],
  },
  moduleNameMapper: {
    '^.+\\.css$': 'identity-obj-proxy',
    '^.+\\.md$': '<rootDir>/node_modules/markdown-to-jsx',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};

module.exports = config;
