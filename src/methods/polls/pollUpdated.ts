import type { Poll, PollUpdatedData, ShowAlert } from '../../types/types';

export interface PollUpdatedOptions {
  data: PollUpdatedData;
  polls: Poll[];
  poll: Poll;
  member: string;
  islevel: string;
  showAlert?: ShowAlert;
  updatePolls: (polls: Poll[]) => void;
  updatePoll: (poll: Poll) => void;
  updateIsPollModalVisible: (isVisible: boolean) => void;
}

export type PollUpdatedType = (options: PollUpdatedOptions) => Promise<void>;

/**
 * Reconciles poll update payloads with current poll state.
 *
 * This helper updates the poll collection, manages active poll visibility, and
 * emits user-facing alerts when a new poll starts or an active poll ends.
 *
 * @param options Poll update handling options.
 * @returns A promise that resolves after local poll state has been synchronized.
 *
 * @example
 * ```typescript
 * await pollUpdated({
 *   data,
 *   polls,
 *   poll,
 *   member: 'Ada',
 *   islevel: '1',
 *   updatePolls: setPolls,
 *   updatePoll: setCurrentPoll,
 *   updateIsPollModalVisible: setPollModalVisible,
 * });
 * ```
 */
export const pollUpdated = async ({
  data,
  polls,
  poll,
  member,
  islevel,
  showAlert,
  updatePolls,
  updatePoll,
  updateIsPollModalVisible,
}: PollUpdatedOptions): Promise<void> => {
  try {
    if (data.polls) {
      polls = data.polls;
      updatePolls(data.polls);
    } else {
      polls = [data.poll];
      updatePolls(polls);
    }

    let tempPoll: Poll | { id: string } = { id: '' };

    if (poll) {
      tempPoll = { ...poll };
    }

    if (data.status !== 'ended') {
      poll = data.poll;
      updatePoll(data.poll);
    }

    if (data.status === 'started' && islevel !== '2') {
      if (!poll.voters || (poll.voters && !poll.voters[member])) {
        showAlert?.({
          message: 'New poll started',
          type: 'success',
          duration: 3000,
        });
        updateIsPollModalVisible(true);
      }
    } else if (data.status === 'ended') {
      if (tempPoll.id === data.poll.id) {
        showAlert?.({ message: 'Poll ended', type: 'danger', duration: 3000 });
        updatePoll(data.poll);
      }
    }
  } catch {
  }
};