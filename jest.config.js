/** @jest-config-loader ts-node */
import nextJest from 'next/jest.js';
import { pathsToModuleNameMapper } from 'ts-jest';
import ts from 'typescript';

const { config: tsconfig } = ts.readConfigFile('./tsconfig.json', ts.sys.readFile);
const createConfig = nextJest({ dir: './' });

const common = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',                             // 🔒 manuelle Regel
    ...pathsToModuleNameMapper(tsconfig.compilerOptions.paths ?? {}, {
      prefix: '<rootDir>/',
    }),
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
};

const jestConfig = {
  projects: [
    {
      displayName: 'api',
      ...createConfig({
        ...common,
        testEnvironment: 'node',
        testMatch: ['**/*.unit.test.{ts,js}', '**/*.api.test.{ts,js}'],
      }),
    },
    {
      displayName: 'frontend',
      ...createConfig({
        ...common,
        testEnvironment: 'jest-environment-jsdom',
        testMatch: ['**/*frontend.test.{ts,tsx,js,jsx}'],
      }),
    },
  ],
};

export default jestConfig;