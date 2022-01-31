module.exports = {
  transform: {
    '\\.jsx?$': 'babel-jest',
  },
  testMatch: ['**/test*.js'],
  testPathIgnorePatterns: ['/node_modules/', '/__mocks__/'],
  cacheDirectory: '.cache/jest',
};
