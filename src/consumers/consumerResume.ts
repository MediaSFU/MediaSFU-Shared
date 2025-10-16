// Stub export for consumerResume
// This is a React component in the original and not needed for the shared package

import { Socket } from 'socket.io-client';

export interface ConsumerResumeParameters {
  [key: string]: any;
}

export interface ConsumerResumeOptions {
  track: MediaStreamTrack;
  kind: string;
  remoteProducerId: string;
  params: any;
  parameters: ConsumerResumeParameters;
  nsock: Socket;
  consumer?: any; // mediasoup Consumer
}

export type ConsumerResumeType = (options: ConsumerResumeOptions) => Promise<void>;

export const consumerResume: ConsumerResumeType = async () => {
  // Stub implementation - actual logic handled in framework-specific packages
  console.warn('consumerResume called on shared package - should be implemented in framework package');
};
