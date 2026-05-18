import type {
  CoHostResponsibility,
  EventType,
  ShowAlert,
} from '../../types/types';

export interface UpdatedCoHostOptions {
  coHost: string;
  coHostResponsibility: CoHostResponsibility[];
  showAlert?: ShowAlert;
  eventType: EventType;
  islevel: string;
  member: string;
  youAreCoHost: boolean;
  updateCoHost: (coHost: string) => void;
  updateCoHostResponsibility: (responsibility: CoHostResponsibility[]) => void;
  updateYouAreCoHost: (youAreCoHost: boolean) => void;
}

export type UpdatedCoHostType = (options: UpdatedCoHostOptions) => Promise<void>;

/**
 * Synchronizes co-host assignment state and optionally alerts the newly assigned co-host.
 *
 * @param {UpdatedCoHostOptions} options - Co-host payload and state setters.
 * @returns {Promise<void>} Resolves after co-host state is synchronized.
 *
 * @example
 * ```typescript
 * await updatedCoHost({
 *   coHost: 'user123',
 *   coHostResponsibility: responsibilities,
 *   eventType: 'conference',
 *   islevel: '1',
 *   member: 'user123',
 *   youAreCoHost: false,
 *   updateCoHost: setCoHost,
 *   updateCoHostResponsibility: setCoHostResponsibility,
 *   updateYouAreCoHost: setYouAreCoHost,
 *   showAlert,
 * });
 * ```
 */
export const updatedCoHost = async ({
  coHost,
  coHostResponsibility,
  showAlert,
  eventType,
  islevel,
  member,
  youAreCoHost,
  updateCoHost,
  updateCoHostResponsibility,
  updateYouAreCoHost,
}: UpdatedCoHostOptions): Promise<void> => {
  if (eventType !== 'broadcast' && eventType !== 'chat') {
    updateCoHost(coHost);
    updateCoHostResponsibility(coHostResponsibility);

    if (member === coHost) {
      if (!youAreCoHost) {
        updateYouAreCoHost(true);
        showAlert?.({
          message: 'You are now a co-host.',
          type: 'success',
          duration: 3000,
        });
      }
    } else {
      updateYouAreCoHost(false);
    }
  } else if (islevel !== '2') {
    updateYouAreCoHost(true);
  }
};
