import type { EventType, ShowAlert } from '../../types/types';

export interface MeetingTimeRemainingOptions {
  timeRemaining: number;
  showAlert?: ShowAlert;
  eventType: EventType;
}

export type MeetingTimeRemainingType = (options: MeetingTimeRemainingOptions) => Promise<void>;

/**
 * Shows a meeting countdown alert for non-chat event types.
 *
 * @param options Function options including the remaining time in milliseconds.
 * @returns A promise that resolves after the alert has been evaluated and dispatched.
 */
export const meetingTimeRemaining = async ({
  timeRemaining,
  showAlert,
  eventType,
}: MeetingTimeRemainingOptions): Promise<void> => {
  const minutes = Math.floor(timeRemaining / 60000);
  const seconds = Math.floor((timeRemaining % 60000) / 1000);
  const timeRemainingString = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

  if (eventType !== 'chat') {
    showAlert?.({
      message: `The event will end in ${timeRemainingString} minutes.`,
      type: 'success',
      duration: 3000,
    });
  }
};