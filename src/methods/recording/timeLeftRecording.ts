import type { ShowAlert } from '../../types/types';

export interface TimeLeftRecordingOptions {
  timeLeft: number;
  showAlert?: ShowAlert;
}

export type TimeLeftRecordingType = (options: TimeLeftRecordingOptions) => void;

/**
 * Shows a short warning that the current recording session is about to end.
 *
 * @param options Function options including the remaining recording time in seconds.
 */
export const timeLeftRecording = ({ timeLeft, showAlert }: TimeLeftRecordingOptions): void => {
  try {
    showAlert?.({
      message: `The recording will stop in less than ${timeLeft} seconds.`,
      duration: 3000,
      type: 'danger',
    });
  } catch (error) {
    console.log('Error in timeLeftRecording: ', error);
  }
};