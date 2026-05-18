import type { ShowAlert } from '../../types/types';

export interface UserWaitingOptions {
  name: string;
  showAlert?: ShowAlert;
  totalReqWait: number;
  updateTotalReqWait: (total: number) => void;
}

export type UserWaitingType = (options: UserWaitingOptions) => Promise<void>;

/**
 * Handles a participant joining the waiting room by notifying the UI and bumping the pending total.
 *
 * @param {UserWaitingOptions} options - Waiting-room notification settings.
 * @param {string} options.name - Participant name shown in the alert.
 * @param {ShowAlert} [options.showAlert] - Optional alert presenter.
 * @param {number} options.totalReqWait - Current combined waiting/request count.
 * @param {(total: number) => void} options.updateTotalReqWait - Updates the combined waiting/request count.
 * @returns {Promise<void>} Resolves after state updates complete.
 *
 * @example
 * ```typescript
 * await userWaiting({
 *   name: 'Ada',
 *   totalReqWait: 2,
 *   updateTotalReqWait: setTotalReqWait,
 *   showAlert: ({ message }) => console.log(message),
 * });
 * ```
 */
export const userWaiting = async ({
  name,
  showAlert,
  totalReqWait,
  updateTotalReqWait,
}: UserWaitingOptions): Promise<void> => {
  showAlert?.({
    message: `${name} joined the waiting room.`,
    type: 'success',
    duration: 3000,
  });

  updateTotalReqWait(totalReqWait + 1);
};
