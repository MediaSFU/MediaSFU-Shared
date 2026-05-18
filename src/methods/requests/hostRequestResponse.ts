import type { Request, RequestResponse, ShowAlert } from '../../types/types';

export interface HostRequestResponseOptions {
  requestResponse: RequestResponse;
  showAlert?: ShowAlert;
  requestList: Request[];
  updateRequestList: (requestList: Request[]) => void;
  updateMicAction: (action: boolean) => void;
  updateVideoAction: (action: boolean) => void;
  updateScreenAction: (action: boolean) => void;
  updateChatAction: (action: boolean) => void;
  updateAudioRequestState: (state: string | null) => void;
  updateVideoRequestState: (state: string | null) => void;
  updateScreenRequestState: (state: string | null) => void;
  updateChatRequestState: (state: string | null) => void;
  updateAudioRequestTime: (time: number) => void;
  updateVideoRequestTime: (time: number) => void;
  updateScreenRequestTime: (time: number) => void;
  updateChatRequestTime: (time: number) => void;
  updateRequestIntervalSeconds: number;
}

export type HostRequestResponseType = (options: HostRequestResponseOptions) => Promise<void>;

/**
 * Applies a host's response to a pending participant request.
 *
 * This helper removes the resolved request from the pending list, updates the
 * caller's relevant request state, and triggers acceptance or rejection alerts
 * with the correct retry cooldown timestamps.
 *
 * @param options Function options for processing the host response.
 * @returns A promise that resolves after request state has been updated.
 */
export const hostRequestResponse = async ({
  requestResponse,
  showAlert,
  requestList,
  updateRequestList,
  updateMicAction,
  updateVideoAction,
  updateScreenAction,
  updateChatAction,
  updateAudioRequestState,
  updateVideoRequestState,
  updateScreenRequestState,
  updateChatRequestState,
  updateAudioRequestTime,
  updateVideoRequestTime,
  updateScreenRequestTime,
  updateChatRequestTime,
  updateRequestIntervalSeconds,
}: HostRequestResponseOptions): Promise<void> => {
  const requestType = requestResponse.type ?? requestResponse.icon;

  // Remove only the specific request that received a host response.
  const filteredRequests = requestList.filter(
    (request) => {
      const matchesId = request.id === requestResponse.id;
      const matchesType = requestType == null || request.icon === requestType;
      const matchesName = requestResponse.name == null || request.name === requestResponse.name;
      const matchesUsername =
        requestResponse.username == null || request.username === requestResponse.username;

      return !(matchesId && matchesType && matchesName && matchesUsername);
    }
  );
  updateRequestList(filteredRequests);

  if (requestResponse.action === 'accepted') {
    switch (requestType) {
      case 'fa-microphone':
        showAlert?.({
          message: 'Unmute request was accepted; click the mic button again to begin.',
          type: 'success',
          duration: 10000,
        });
        updateMicAction(true);
        updateAudioRequestState('accepted');
        break;
      case 'fa-video':
        showAlert?.({
          message: 'Video request was accepted; click the video button again to begin.',
          type: 'success',
          duration: 10000,
        });
        updateVideoAction(true);
        updateVideoRequestState('accepted');
        break;
      case 'fa-desktop':
        showAlert?.({
          message: 'Screenshare request was accepted; click the screen button again to begin.',
          type: 'success',
          duration: 10000,
        });
        updateScreenAction(true);
        updateScreenRequestState('accepted');
        break;
      case 'fa-comments':
        showAlert?.({
          message: 'Chat request was accepted; click the chat button again to begin.',
          type: 'success',
          duration: 10000,
        });
        updateChatAction(true);
        updateChatRequestState('accepted');
        break;
    }
  } else {
    let timerDate: Date;
    switch (requestType) {
      case 'fa-microphone':
        showAlert?.({
          message: 'Unmute request was not accepted',
          type: 'danger',
          duration: 10000,
        });
        updateAudioRequestState('rejected');
        timerDate = new Date();
        timerDate.setSeconds(timerDate.getSeconds() + updateRequestIntervalSeconds);
        updateAudioRequestTime(timerDate.getTime());
        break;
      case 'fa-video':
        showAlert?.({
          message: 'Video request was not accepted',
          type: 'danger',
          duration: 10000,
        });
        updateVideoRequestState('rejected');
        timerDate = new Date();
        timerDate.setSeconds(timerDate.getSeconds() + updateRequestIntervalSeconds);
        updateVideoRequestTime(timerDate.getTime());
        break;
      case 'fa-desktop':
        showAlert?.({
          message: 'Screenshare request was not accepted',
          type: 'danger',
          duration: 10000,
        });
        updateScreenRequestState('rejected');
        timerDate = new Date();
        timerDate.setSeconds(timerDate.getSeconds() + updateRequestIntervalSeconds);
        updateScreenRequestTime(timerDate.getTime());
        break;
      case 'fa-comments':
        showAlert?.({
          message: 'Chat request was not accepted',
          type: 'danger',
          duration: 10000,
        });
        updateChatRequestState('rejected');
        timerDate = new Date();
        timerDate.setSeconds(timerDate.getSeconds() + updateRequestIntervalSeconds);
        updateChatRequestTime(timerDate.getTime());
        break;
    }
  }
};