import type { Config } from '@jest/types';

const configuration: Config.InitialOptions = {
  collectCoverage: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
};

export default configuration;
