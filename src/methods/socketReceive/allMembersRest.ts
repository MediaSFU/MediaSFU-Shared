import type { Socket } from 'socket.io-client';
import type {
  ConnectIpsParameters,
  ConnectLocalIpsParameters,
  OnScreenChangesParameters,
  ReorderStreamsParameters,
  Settings,
} from '../../types/types';

export interface AllMembersRestParticipantLike {
  id?: string | number;
  isBanned?: boolean;
  isSuspended?: boolean;
  name?: string | null;
  audioID?: string | null;
  videoID?: string | null;
  ScreenID?: string | null;
  ScreenOn?: boolean;
}

export interface AllMembersRestRequestLike {
  id?: string | number;
}

export interface AllMembersRestOnScreenChangesOptions<TParameters = unknown> {
  parameters: TParameters;
}

export type AllMembersRestOnScreenChangesType<TParameters = unknown> = (
  options: AllMembersRestOnScreenChangesOptions<TParameters>,
) => Promise<unknown>;

export interface AllMembersRestConnectIpsOptions<
  TParameters = unknown,
  TConsumeSocket = unknown,
> {
  consume_sockets: TConsumeSocket[];
  remIP: string[];
  parameters: TParameters;
  apiUserName: string;
  apiKey: string;
  apiToken: string;
}

export type AllMembersRestConnectIpsType<
  TParameters = unknown,
  TConsumeSocket = unknown,
> = (
  options: AllMembersRestConnectIpsOptions<TParameters, TConsumeSocket>,
) => Promise<[TConsumeSocket[], string[]]>;

export interface AllMembersRestConnectLocalIpsOptions<
  TParameters = unknown,
  TSocket = Socket,
> {
  socket: TSocket;
  parameters: TParameters;
}

export type AllMembersRestConnectLocalIpsType<
  TParameters = unknown,
  TSocket = Socket,
> = (
  options: AllMembersRestConnectLocalIpsOptions<TParameters, TSocket>,
) => Promise<unknown>;

export interface AllMembersRestSleepOptions {
  ms: number;
}

export type AllMembersRestSleepType = (
  options: AllMembersRestSleepOptions,
) => Promise<unknown>;

export interface AllMembersRestReorderStreamsOptions<TParameters = unknown> {
  add: boolean;
  screenChanged?: boolean;
  parameters: TParameters;
}

export type AllMembersRestReorderStreamsType<TParameters = unknown> = (
  options: AllMembersRestReorderStreamsOptions<TParameters>,
) => Promise<unknown>;

export interface AllMembersRestParameters<
  TParticipantSummary extends AllMembersRestParticipantLike = AllMembersRestParticipantLike,
  TParticipant extends AllMembersRestParticipantLike = AllMembersRestParticipantLike,
  TRequest extends AllMembersRestRequestLike = AllMembersRestRequestLike,
  TCoHostResponsibility = unknown,
  TConsumeSocket = unknown,
  TSocket = Socket,
  TOnScreenChangesParameters = OnScreenChangesParameters,
  TConnectIpsParameters = ConnectIpsParameters,
  TReorderStreamsParameters = ReorderStreamsParameters,
  TConnectLocalIpsParameters = ConnectLocalIpsParameters,
  TAllParameters extends TOnScreenChangesParameters &
    TConnectIpsParameters &
    TReorderStreamsParameters &
    TConnectLocalIpsParameters = TOnScreenChangesParameters &
    TConnectIpsParameters &
    TReorderStreamsParameters &
    TConnectLocalIpsParameters,
> {
  participantsAll: TParticipantSummary[];
  participants: TParticipant[];
  dispActiveNames: string[];
  requestList: TRequest[];
  coHost: string;
  coHostResponsibility: TCoHostResponsibility[];
  lock_screen: boolean;
  firstAll: boolean;
  membersReceived: boolean;
  roomRecvIPs: string[];
  deferScreenReceived: boolean;
  screenId?: string;
  shareScreenStarted: boolean;
  meetingDisplayType: string;
  audioSetting: string;
  videoSetting: string;
  screenshareSetting: string;
  chatSetting: string;
  socket: TSocket;
  updateParticipantsAll: (participantsAll: TParticipantSummary[]) => void;
  updateParticipants: (participants: TParticipant[]) => void;
  updateRequestList: (requestList: TRequest[]) => void;
  updateCoHost: (coHost: string) => void;
  updateCoHostResponsibility: (
    coHostResponsibility: TCoHostResponsibility[],
  ) => void;
  updateFirstAll: (firstAll: boolean) => void;
  updateMembersReceived: (membersReceived: boolean) => void;
  updateDeferScreenReceived: (deferScreenReceived: boolean) => void;
  updateShareScreenStarted: (shareScreenStarted: boolean) => void;
  updateAudioSetting: (audioSetting: string) => void;
  updateVideoSetting: (videoSetting: string) => void;
  updateScreenshareSetting: (screenshareSetting: string) => void;
  updateChatSetting: (chatSetting: string) => void;
  updateConsume_sockets: (consume_sockets: TConsumeSocket[]) => void;
  updateRoomRecvIPs: (ips: string[]) => void;
  updateIsLoadingModalVisible: (visible: boolean) => void;
  onScreenChanges: AllMembersRestOnScreenChangesType<TOnScreenChangesParameters>;
  connectIps: AllMembersRestConnectIpsType<TConnectIpsParameters, TConsumeSocket>;
  connectLocalIps?: AllMembersRestConnectLocalIpsType<TConnectLocalIpsParameters, TSocket>;
  sleep: AllMembersRestSleepType;
  reorderStreams: AllMembersRestReorderStreamsType<TReorderStreamsParameters>;
  getUpdatedAllParams: () =>
    AllMembersRestParameters<
      TParticipantSummary,
      TParticipant,
      TRequest,
      TCoHostResponsibility,
      TConsumeSocket,
      TSocket,
      TOnScreenChangesParameters,
      TConnectIpsParameters,
      TReorderStreamsParameters,
      TConnectLocalIpsParameters,
      TAllParameters
    > & TAllParameters;
  [key: string]: any;
}

export interface AllMembersRestOptions<
  TParticipantSummary extends AllMembersRestParticipantLike = AllMembersRestParticipantLike,
  TParticipant extends AllMembersRestParticipantLike = AllMembersRestParticipantLike,
  TRequest extends AllMembersRestRequestLike = AllMembersRestRequestLike,
  TCoHostResponsibility = unknown,
  TConsumeSocket = unknown,
  TSocket = Socket,
  TOnScreenChangesParameters = OnScreenChangesParameters,
  TConnectIpsParameters = ConnectIpsParameters,
  TReorderStreamsParameters = ReorderStreamsParameters,
  TConnectLocalIpsParameters = ConnectLocalIpsParameters,
  TAllParameters extends TOnScreenChangesParameters &
    TConnectIpsParameters &
    TReorderStreamsParameters &
    TConnectLocalIpsParameters = TOnScreenChangesParameters &
    TConnectIpsParameters &
    TReorderStreamsParameters &
    TConnectLocalIpsParameters,
> {
  members: TParticipant[];
  settings: Settings;
  coHoste?: string;
  coHostRes?: TCoHostResponsibility[];
  parameters:
    AllMembersRestParameters<
      TParticipantSummary,
      TParticipant,
      TRequest,
      TCoHostResponsibility,
      TConsumeSocket,
      TSocket,
      TOnScreenChangesParameters,
      TConnectIpsParameters,
      TReorderStreamsParameters,
      TConnectLocalIpsParameters,
      TAllParameters
    > & TAllParameters;
  consume_sockets: TConsumeSocket[];
  apiUserName: string;
  apiKey: string;
  apiToken: string;
}

export type AllMembersRestType<
  TParticipantSummary extends AllMembersRestParticipantLike = AllMembersRestParticipantLike,
  TParticipant extends AllMembersRestParticipantLike = AllMembersRestParticipantLike,
  TRequest extends AllMembersRestRequestLike = AllMembersRestRequestLike,
  TCoHostResponsibility = unknown,
  TConsumeSocket = unknown,
  TSocket = Socket,
  TOnScreenChangesParameters = OnScreenChangesParameters,
  TConnectIpsParameters = ConnectIpsParameters,
  TReorderStreamsParameters = ReorderStreamsParameters,
  TConnectLocalIpsParameters = ConnectLocalIpsParameters,
  TAllParameters extends TOnScreenChangesParameters &
    TConnectIpsParameters &
    TReorderStreamsParameters &
    TConnectLocalIpsParameters = TOnScreenChangesParameters &
    TConnectIpsParameters &
    TReorderStreamsParameters &
    TConnectLocalIpsParameters,
> = (
  options: AllMembersRestOptions<
    TParticipantSummary,
    TParticipant,
    TRequest,
    TCoHostResponsibility,
    TConsumeSocket,
    TSocket,
    TOnScreenChangesParameters,
    TConnectIpsParameters,
    TReorderStreamsParameters,
    TConnectLocalIpsParameters,
    TAllParameters
  >,
) => Promise<void>;

/**
 * Reconciles incremental member updates, consume-domain setup, and room media settings.
 *
 * @param {AllMembersRestOptions} options - Member payload, room settings, and receiver connection helpers.
 * @returns {Promise<void>} Resolves once participant state, co-host state, and settings are synchronized.
 *
 * @example
 * ```typescript
 * await allMembersRest({
 *   members,
 *   settings,
 *   coHoste,
 *   coHostRes,
 *   parameters,
 *   consume_sockets,
 *   apiUserName: 'api-user',
 *   apiKey: 'api-key',
 *   apiToken: 'api-token',
 * });
 * ```
 */
export const allMembersRest = async <
  TParticipantSummary extends AllMembersRestParticipantLike = AllMembersRestParticipantLike,
  TParticipant extends AllMembersRestParticipantLike = AllMembersRestParticipantLike,
  TRequest extends AllMembersRestRequestLike = AllMembersRestRequestLike,
  TCoHostResponsibility = unknown,
  TConsumeSocket = unknown,
  TSocket = Socket,
  TOnScreenChangesParameters = OnScreenChangesParameters,
  TConnectIpsParameters = ConnectIpsParameters,
  TReorderStreamsParameters = ReorderStreamsParameters,
  TConnectLocalIpsParameters = ConnectLocalIpsParameters,
  TAllParameters extends TOnScreenChangesParameters &
    TConnectIpsParameters &
    TReorderStreamsParameters &
    TConnectLocalIpsParameters = TOnScreenChangesParameters &
    TConnectIpsParameters &
    TReorderStreamsParameters &
    TConnectLocalIpsParameters,
>({
  members,
  settings,
  coHoste,
  coHostRes,
  parameters,
  consume_sockets,
  apiUserName,
  apiKey,
  apiToken,
}: AllMembersRestOptions<
  TParticipantSummary,
  TParticipant,
  TRequest,
  TCoHostResponsibility,
  TConsumeSocket,
  TSocket,
  TOnScreenChangesParameters,
  TConnectIpsParameters,
  TReorderStreamsParameters,
  TConnectLocalIpsParameters,
  TAllParameters
>): Promise<void> => {
  let {
    participantsAll,
    participants,
    dispActiveNames,
    requestList,
    coHost,
    coHostResponsibility,
    lock_screen,
    firstAll,
    membersReceived,
    roomRecvIPs,
    deferScreenReceived,
    screenId,
    shareScreenStarted,
    meetingDisplayType,
    audioSetting,
    videoSetting,
    screenshareSetting,
    chatSetting,
    socket,
    updateParticipantsAll,
    updateParticipants,
    updateRequestList,
    updateCoHost,
    updateCoHostResponsibility,
    updateFirstAll,
    updateMembersReceived,
    updateDeferScreenReceived,
    updateShareScreenStarted,
    updateAudioSetting,
    updateVideoSetting,
    updateScreenshareSetting,
    updateChatSetting,
    updateConsume_sockets,
    updateRoomRecvIPs,
    updateIsLoadingModalVisible,
    onScreenChanges,
    connectIps,
    connectLocalIps,
    sleep,
    reorderStreams,
  } = parameters;

  participantsAll = members.map((participant) => ({
    isBanned: participant.isBanned,
    isSuspended: participant.isSuspended,
    name: participant.name,
    audioID: participant.audioID,
    videoID: participant.videoID,
  })) as TParticipantSummary[];
  updateParticipantsAll(participantsAll);

  participants = members.filter(
    (participant) => !participant.isBanned && !participant.isSuspended,
  );
  updateParticipants(participants);

  if (dispActiveNames.length > 0) {
    const missingDisplayedParticipants = dispActiveNames.filter(
      (name) => !participants.some((participant) => participant.name === name),
    );
    if (missingDisplayedParticipants.length > 0 && membersReceived) {
      await reorderStreams({ add: false, screenChanged: true, parameters });
    }
  }

  const onLocal = roomRecvIPs.length === 1 && roomRecvIPs[0] === 'none';

  if (!onLocal) {
    if (!membersReceived) {
      if (roomRecvIPs.length < 1) {
        const checkIPs = setInterval(async () => {
          if (roomRecvIPs.length > 0) {
            clearInterval(checkIPs);

            if (deferScreenReceived && screenId) {
              shareScreenStarted = true;
              updateShareScreenStarted(shareScreenStarted);
            }

            const [sockets_, ips_] = await connectIps({
              consume_sockets,
              remIP: roomRecvIPs,
              parameters,
              apiUserName,
              apiKey,
              apiToken,
            });

            if (sockets_ && ips_) {
              updateConsume_sockets(sockets_);
              updateRoomRecvIPs(ips_);
            }

            membersReceived = true;
            updateMembersReceived(membersReceived);
            await sleep({ ms: 250 });
            updateIsLoadingModalVisible(false);
            deferScreenReceived = false;
            updateDeferScreenReceived(deferScreenReceived);
          }
        }, 10);
      } else {
        const [sockets_, ips_] = await connectIps({
          consume_sockets,
          remIP: roomRecvIPs,
          parameters,
          apiUserName,
          apiKey,
          apiToken,
        });

        if (sockets_ && ips_) {
          updateConsume_sockets(sockets_);
          updateRoomRecvIPs(ips_);
        }
        membersReceived = true;
        updateMembersReceived(membersReceived);

        if (deferScreenReceived && screenId) {
          shareScreenStarted = true;
          updateShareScreenStarted(shareScreenStarted);
        }

        await sleep({ ms: 250 });
        updateIsLoadingModalVisible(false);
        deferScreenReceived = false;
        updateDeferScreenReceived(deferScreenReceived);
      }
    } else if (screenId) {
      const host = participants.find(
        (participant) =>
          participant.ScreenID === screenId && participant.ScreenOn === true,
      );
      if (deferScreenReceived && host) {
        shareScreenStarted = true;
        updateShareScreenStarted(shareScreenStarted);
      }
    }
  }

  if (onLocal && !membersReceived) {
    if (connectLocalIps) {
      await connectLocalIps({ socket, parameters });
    }
    await sleep({ ms: 50 });
    updateIsLoadingModalVisible(false);
  }

  requestList = requestList.filter((request) =>
    participants.some((participant) => participant.id === request.id),
  );
  updateRequestList(requestList);

  coHost = coHoste!;
  updateCoHost(coHost);
  coHostResponsibility = coHostRes!;
  updateCoHostResponsibility(coHostResponsibility);

  if (!lock_screen && !firstAll) {
    await onScreenChanges({ parameters });
    if (meetingDisplayType !== 'all') {
      firstAll = true;
      updateFirstAll(firstAll);
    }
  }

  try {
    if (membersReceived) {
      [audioSetting, videoSetting, screenshareSetting, chatSetting] = settings;
      updateAudioSetting(audioSetting);
      updateVideoSetting(videoSetting);
      updateScreenshareSetting(screenshareSetting);
      updateChatSetting(chatSetting);
    }
  } catch {
    // no-op
  }
};
