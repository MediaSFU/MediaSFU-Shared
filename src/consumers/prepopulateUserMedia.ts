// Stub export for prepopulateUserMedia
// This is a React component in the original and not needed for the shared package

export interface PrepopulateUserMediaParameters {
  [key: string]: any;
}

export interface PrepopulateUserMediaOptions {
  name: string;
  parameters: PrepopulateUserMediaParameters;
}

export type PrepopulateUserMediaType = (options: PrepopulateUserMediaOptions) => Promise<void>;

export const prepopulateUserMedia: PrepopulateUserMediaType = async () => {
  // Stub implementation - actual logic handled in framework-specific packages
  console.warn('prepopulateUserMedia called on shared package - should be implemented in framework package');
};
