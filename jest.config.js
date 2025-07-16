import nextJest from 'next/jest.js';
const createJestConfig = nextJest({ dir: './' });

const customConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/lib/actions/(.*)$': '<rootDir>/lib/actions/$1',
    '^@/components/(.*)$': '<rootDir>/components/$1',
  },
};

export default createJestConfig(customConfig);