// Stub export for prepopulateUserMedia
// This is a React component in the original and not needed for the shared package

import { createFrameworkConsumerContractError } from './frameworkConsumerContract';

export interface PrepopulateUserMediaParameters {
  [key: string]: any;
}

export interface PrepopulateUserMediaOptions {
  name: string;
  parameters: PrepopulateUserMediaParameters;
}

export type PrepopulateUserMediaType = (options: PrepopulateUserMediaOptions) => Promise<void>;

export const prepopulateUserMedia: PrepopulateUserMediaType = async () => {
  throw createFrameworkConsumerContractError('prepopulateUserMedia');
};
