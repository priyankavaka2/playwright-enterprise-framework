
export interface EnvironmentConfig {
  baseUrl: string;
  apiUrl: string;
}

declare const process: {
  env: Record<string, string | undefined>;
};

const environment = process.env.TEST_ENV || 'qa';

const environments: Record<string, EnvironmentConfig> = {
  qa: {
    baseUrl: 'https://opensource-demo.orangehrmlive.com',
    apiUrl: 'https://opensource-demo.orangehrmlive.com/api',
  },
};

if (!environments[environment]) {
  throw new Error(
    `Invalid TEST_ENV: ${environment}. Available environments: ${Object.keys(environments).join(', ')}`
  );
}

export const envConfig = environments[environment];