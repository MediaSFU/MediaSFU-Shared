import type { ShowAlert } from '../../types/types';

export interface DisconnectOptions {
  showAlert?: ShowAlert;
  redirectURL?: string;
  onWeb: boolean;
  updateValidated?: (isValidated: boolean) => void;
}

export type DisconnectType = (options: DisconnectOptions) => Promise<void>;

/**
 * Handles a forced session disconnect by redirecting web users or showing a local alert fallback.
 *
 * @param {DisconnectOptions} options - Redirect and alert handlers for the disconnect flow.
 * @returns {Promise<void>} Resolves after the redirect or alert side effect is applied.
 *
 * @example
 * ```typescript
 * await disconnect({
 *   onWeb: true,
 *   redirectURL: 'https://example.com/exit',
 * });
 * ```
 */
export const disconnect = async ({
  showAlert,
  redirectURL,
  onWeb,
}: DisconnectOptions): Promise<void> => {
  if (onWeb && redirectURL && typeof window !== 'undefined') {
    window.location.href = redirectURL;
  } else {
    showAlert?.({
      message: 'You have been disconnected from the session.',
      type: 'danger',
      duration: 2000,
    });
  }
};
