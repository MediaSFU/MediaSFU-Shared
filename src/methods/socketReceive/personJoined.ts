import type { ShowAlert } from '../../types/types';

export interface PersonJoinedOptions {
  showAlert?: ShowAlert;
  name: string;
}

export type PersonJoinedType = (options: PersonJoinedOptions) => Promise<void>;

/**
 * Announces that a participant has joined the event.
 *
 * @param {PersonJoinedOptions} options - Join alert settings.
 * @param {string} options.name - Participant name to display.
 * @param {ShowAlert} [options.showAlert] - Optional alert presenter.
 * @returns {Promise<void>} Resolves after the alert is dispatched.
 *
 * @example
 * ```typescript
 * await personJoined({
 *   name: 'Alice',
 *   showAlert: ({ message }) => console.log(message),
 * });
 * ```
 */
export const personJoined = async ({
  name,
  showAlert,
}: PersonJoinedOptions): Promise<void> => {
  showAlert?.({
    message: `${name} joined the event.`,
    type: 'success',
    duration: 3000,
  });
};
