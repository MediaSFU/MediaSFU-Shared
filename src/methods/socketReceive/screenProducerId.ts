import type { Participant } from '../../types/types';

export interface ScreenProducerIdOptions {
  producerId: string;
  screenId: string;
  membersReceived: boolean;
  shareScreenStarted: boolean;
  deferScreenReceived: boolean;
  participants: Participant[];
  updateScreenId: (id: string) => void;
  updateShareScreenStarted: (started: boolean) => void;
  updateDeferScreenReceived: (received: boolean) => void;
}

export type ScreenProducerIdType = (options: ScreenProducerIdOptions) => void;

/**
 * Reconciles a screen-share producer id with current participant state.
 *
 * @param {ScreenProducerIdOptions} options - Screen-share identifiers and setters.
 * @returns {void} Updates screen state synchronously.
 *
 * @example
 * ```typescript
 * screenProducerId({
 *   producerId: 'screen-producer',
 *   screenId: 'host-screen',
 *   membersReceived: true,
 *   shareScreenStarted: false,
 *   deferScreenReceived: false,
 *   participants,
 *   updateScreenId: setScreenId,
 *   updateShareScreenStarted: setShareScreenStarted,
 *   updateDeferScreenReceived: setDeferScreenReceived,
 * });
 * ```
 */
export const screenProducerId = ({
  producerId,
  screenId,
  membersReceived,
  participants,
  updateScreenId,
  updateShareScreenStarted,
  updateDeferScreenReceived,
}: ScreenProducerIdOptions): void => {
  const host = participants.find(
    (participant) =>
      participant.ScreenID === screenId && participant.ScreenOn === true,
  );

  if (host && membersReceived) {
    updateScreenId(producerId);
    updateShareScreenStarted(true);
    updateDeferScreenReceived(false);
    return;
  }

  updateScreenId(producerId);
  updateDeferScreenReceived(true);
};
