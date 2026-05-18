import type { EventType, ShowAlert } from '../../types/types';

export interface MeetingEndedOptions {
  showAlert?: ShowAlert;
  redirectURL?: string;
  onWeb: boolean;
  eventType: EventType;
  updateValidated?: (isValid: boolean) => void;
}

export type MeetingEndedType = (options: MeetingEndedOptions) => Promise<void>;

/**
 * Announces that the current event has ended and optionally redirects on web.
 *
 * @param {MeetingEndedOptions} options - Event-end behavior settings.
 * @returns {Promise<void>} Resolves after alerts and redirect scheduling are configured.
 *
 * @example
 * ```typescript
 * await meetingEnded({
 *   onWeb: true,
 *   eventType: 'conference',
 *   redirectURL: 'https://example.com',
 *   showAlert,
 * });
 * ```
 */
export const meetingEnded = async ({
  showAlert,
  redirectURL,
  onWeb,
  eventType,
}: MeetingEndedOptions): Promise<void> => {
  if (eventType !== 'chat') {
    showAlert?.({
      message:
        'The event has ended. You will be redirected to the home page in 2 seconds.',
      type: 'danger',
      duration: 2000,
    });
  }

  if (onWeb && redirectURL) {
    setTimeout(() => {
      window.location.href = redirectURL;
    }, 2000);
  }
};
