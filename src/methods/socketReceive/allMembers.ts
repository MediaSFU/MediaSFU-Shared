import type { Socket } from 'socket.io-client';
import type {
  ConnectIpsParameters,
  ConnectLocalIpsParameters,
  OnScreenChangesParameters,
  ReorderStreamsParameters,
} from '../../types/types';

export interface AllMembersParticipantLike {
  id?: string | number;
  isBanned?: boolean;
  isSuspended?: boolean;
  name?: string | null;
  audioID?: string | null;
  videoID?: string | null;
}

export interface AllMembersRequestLike {
  id?: string | number;
}

export interface AllMembersOnScreenChangesOptions<TParameters = unknown> {
  parameters: TParameters;
}

export type AllMembersOnScreenChangesType<TParameters = unknown> = (
  options: AllMembersOnScreenChangesOptions<TParameters>,
) => Promise<unknown>;

export interface AllMembersConnectIpsOptions<
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

export type AllMembersConnectIpsType<
  TParameters = unknown,
  TConsumeSocket = unknown,
> = (
  options: AllMembersConnectIpsOptions<TParameters, TConsumeSocket>,
) => Promise<[TConsumeSocket[], string[]]>;

export interface AllMembersConnectLocalIpsOptions<
  TParameters = unknown,
  TSocket = Socket,
> {
  socket: TSocket;
  parameters: TParameters;
}

export type AllMembersConnectLocalIpsType<
  TParameters = unknown,
  TSocket = Socket,
> = (
  options: AllMembersConnectLocalIpsOptions<TParameters, TSocket>,
) => Promise<unknown>;

export interface AllMembersSleepOptions {
  ms: number;
}

export type AllMembersSleepType = (
  options: AllMembersSleepOptions,
) => Promise<unknown>;

export interface AllMembersReorderStreamsOptions<TParameters = unknown> {
  add: boolean;
  screenChanged?: boolean;
  parameters: TParameters;
}

export type AllMembersReorderStreamsType<TParameters = unknown> = (
  options: AllMembersReorderStreamsOptions<TParameters>,
) => Promise<unknown>;

export interface AllMembersParameters<
  TParticipantSummary extends AllMembersParticipantLike = AllMembersParticipantLike,
  TParticipant extends AllMembersParticipantLike = AllMembersParticipantLike,
  TRequest extends AllMembersRequestLike = AllMembersRequestLike,
  TCoHostResponsibility = unknown,
  TWaitingRoomParticipant = unknown,
  TConsumeSocket = unknown,
  TSocket = Socket,
  TOnScreenChangesParameters = OnScreenChangesParameters,
  TConnectIpsParameters = ConnectIpsParameters,
  TConnectLocalIpsParameters = ConnectLocalIpsParameters,
  TReorderStreamsParameters = ReorderStreamsParameters,
  TAllParameters extends TOnScreenChangesParameters &
    TConnectIpsParameters &
    TConnectLocalIpsParameters &
    TReorderStreamsParameters = TOnScreenChangesParameters &
    TConnectIpsParameters &
    TConnectLocalIpsParameters &
    TReorderStreamsParameters,
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
  hostFirstSwitch: boolean;
  waitingRoomList: TWaitingRoomParticipant[];
  islevel: string;
  socket: TSocket;
  updateParticipantsAll: (participantsAll: TParticipantSummary[]) => void;
  updateParticipants: (participants: TParticipant[]) => void;
  updateRequestList: (requestList: TRequest[]) => void;
  updateCoHost: (coHost: string) => void;
  updateCoHostResponsibility: (coHostRes: TCoHostResponsibility[]) => void;
  updateFirstAll: (firstAll: boolean) => void;
  updateMembersReceived: (membersReceived: boolean) => void;
  updateDeferScreenReceived: (deferScreenReceived: boolean) => void;
  updateShareScreenStarted: (shareScreenStarted: boolean) => void;
  updateHostFirstSwitch: (hostFirstSwitch: boolean) => void;
  updateConsume_sockets: (sockets: TConsumeSocket[]) => void;
  updateRoomRecvIPs: (ips: string[]) => void;
  updateIsLoadingModalVisible: (visible: boolean) => void;
  updateTotalReqWait: (total: number) => void;
  onScreenChanges: AllMembersOnScreenChangesType<TOnScreenChangesParameters>;
  connectIps: AllMembersConnectIpsType<TConnectIpsParameters, TConsumeSocket>;
  connectLocalIps?: AllMembersConnectLocalIpsType<TConnectLocalIpsParameters, TSocket>;
  sleep: AllMembersSleepType;
  reorderStreams: AllMembersReorderStreamsType<TReorderStreamsParameters>;
  getUpdatedAllParams: () =>
    AllMembersParameters<
      TParticipantSummary,
      TParticipant,
      TRequest,
      TCoHostResponsibility,
      TWaitingRoomParticipant,
      TConsumeSocket,
      TSocket,
      TOnScreenChangesParameters,
      TConnectIpsParameters,
      TConnectLocalIpsParameters,
      TReorderStreamsParameters,
      TAllParameters
    > & TAllParameters;
  [key: string]: any;
}

export interface AllMembersOptions<
  TParticipantSummary extends AllMembersParticipantLike = AllMembersParticipantLike,
  TParticipant extends AllMembersParticipantLike = AllMembersParticipantLike,
  TRequest extends AllMembersRequestLike = AllMembersRequestLike,
  TCoHostResponsibility = unknown,
  TWaitingRoomParticipant = unknown,
  TConsumeSocket = unknown,
  TSocket = Socket,
  TOnScreenChangesParameters = OnScreenChangesParameters,
  TConnectIpsParameters = ConnectIpsParameters,
  TConnectLocalIpsParameters = ConnectLocalIpsParameters,
  TReorderStreamsParameters = ReorderStreamsParameters,
  TAllParameters extends TOnScreenChangesParameters &
    TConnectIpsParameters &
    TConnectLocalIpsParameters &
    TReorderStreamsParameters = TOnScreenChangesParameters &
    TConnectIpsParameters &
    TConnectLocalIpsParameters &
    TReorderStreamsParameters,
> {
  members: TParticipant[];
  requestss: TRequest[];
  coHoste: string;
  coHostRes: TCoHostResponsibility[];
  parameters:
    AllMembersParameters<
      TParticipantSummary,
      TParticipant,
      TRequest,
      TCoHostResponsibility,
      TWaitingRoomParticipant,
      TConsumeSocket,
      TSocket,
      TOnScreenChangesParameters,
      TConnectIpsParameters,
      TConnectLocalIpsParameters,
      TReorderStreamsParameters,
      TAllParameters
    > & TAllParameters;
  consume_sockets: TConsumeSocket[];
  apiUserName: string;
  apiKey: string;
  apiToken: string;
}

export type AllMembersType<
  TParticipantSummary extends AllMembersParticipantLike = AllMembersParticipantLike,
  TParticipant extends AllMembersParticipantLike = AllMembersParticipantLike,
  TRequest extends AllMembersRequestLike = AllMembersRequestLike,
  TCoHostResponsibility = unknown,
  TWaitingRoomParticipant = unknown,
  TConsumeSocket = unknown,
  TSocket = Socket,
  TOnScreenChangesParameters = OnScreenChangesParameters,
  TConnectIpsParameters = ConnectIpsParameters,
  TConnectLocalIpsParameters = ConnectLocalIpsParameters,
  TReorderStreamsParameters = ReorderStreamsParameters,
  TAllParameters extends TOnScreenChangesParameters &
    TConnectIpsParameters &
    TConnectLocalIpsParameters &
    TReorderStreamsParameters = TOnScreenChangesParameters &
    TConnectIpsParameters &
    TConnectLocalIpsParameters &
    TReorderStreamsParameters,
> = (
  options: AllMembersOptions<
    TParticipantSummary,
    TParticipant,
    TRequest,
    TCoHostResponsibility,
    TWaitingRoomParticipant,
    TConsumeSocket,
    TSocket,
    TOnScreenChangesParameters,
    TConnectIpsParameters,
    TConnectLocalIpsParameters,
    TReorderStreamsParameters,
    TAllParameters
  >,
) => Promise<void>;

/**
 * Reconciles the authoritative member list with local UI state and receiver-domain setup.
 *
 * @param {AllMembersOptions} options - Member payload, host metadata, and receiver connection helpers.
 * @returns {Promise<void>} Resolves once participant state, requests, and receiver sockets are synchronized.
 *
 * @example
 * ```typescript
 * await allMembers({
 *   members,
 *   requestss,
 *   coHoste: 'host-2',
 *   coHostRes,
 *   parameters,
 *   consume_sockets,
 *   apiUserName: 'api-user',
 *   apiKey: 'api-key',
 *   apiToken: 'api-token',
 * });
 * ```
 */
export const allMembers = async <
  TParticipantSummary extends AllMembersParticipantLike = AllMembersParticipantLike,
  TParticipant extends AllMembersParticipantLike = AllMembersParticipantLike,
  TRequest extends AllMembersRequestLike = AllMembersRequestLike,
  TCoHostResponsibility = unknown,
  TWaitingRoomParticipant = unknown,
  TConsumeSocket = unknown,
  TSocket = Socket,
  TOnScreenChangesParameters = OnScreenChangesParameters,
  TConnectIpsParameters = ConnectIpsParameters,
  TConnectLocalIpsParameters = ConnectLocalIpsParameters,
  TReorderStreamsParameters = ReorderStreamsParameters,
  TAllParameters extends TOnScreenChangesParameters &
    TConnectIpsParameters &
    TConnectLocalIpsParameters &
    TReorderStreamsParameters = TOnScreenChangesParameters &
    TConnectIpsParameters &
    TConnectLocalIpsParameters &
    TReorderStreamsParameters,
>({
  members,
  requestss,
  coHoste,
  coHostRes,
  parameters,
  consume_sockets,
  apiUserName,
  apiKey,
  apiToken,
}: AllMembersOptions<
  TParticipantSummary,
  TParticipant,
  TRequest,
  TCoHostResponsibility,
  TWaitingRoomParticipant,
  TConsumeSocket,
  TSocket,
  TOnScreenChangesParameters,
  TConnectIpsParameters,
  TConnectLocalIpsParameters,
  TReorderStreamsParameters,
  TAllParameters
>): Promise<void> => {
  let {
    participantsAll,
    participants,
    dispActiveNames,
    requestList,
    lock_screen,
    firstAll,
    membersReceived,
    roomRecvIPs,
    deferScreenReceived,
    screenId,
    shareScreenStarted,
    meetingDisplayType,
    hostFirstSwitch,
    waitingRoomList,
    islevel,
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
    updateHostFirstSwitch,
    updateConsume_sockets,
    updateRoomRecvIPs,
    updateIsLoadingModalVisible,
    updateTotalReqWait,
    onScreenChanges,
    connectIps,
    connectLocalIps,
    sleep,
    reorderStreams,
  } = parameters;

  participantsAll = members.map(({ isBanned, isSuspended, name, audioID, videoID }) => ({
    isBanned,
    isSuspended,
    name,
    audioID,
    videoID,
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

    if (missingDisplayedParticipants.length > 0) {
      await reorderStreams({ add: false, screenChanged: true, parameters });
    }
  }

  const onLocal = roomRecvIPs.length === 1 && roomRecvIPs[0] === 'none';

  if (!membersReceived && !onLocal) {
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

          updateConsume_sockets(sockets_);
          updateRoomRecvIPs(ips_);
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

      updateConsume_sockets(sockets_);
      updateRoomRecvIPs(ips_);
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
  }

  if (onLocal && !membersReceived) {
    if (connectLocalIps) {
      await connectLocalIps({ socket, parameters });
    }
    await sleep({ ms: 50 });
    updateIsLoadingModalVisible(false);
  }

  requestList = requestss.filter((request) =>
    participants.some((participant) => participant.id === request.id),
  );
  updateRequestList(requestList);
  updateTotalReqWait(requestList.length + waitingRoomList.length);

  updateCoHost(coHoste);
  updateCoHostResponsibility(coHostRes);

  if (!lock_screen && !firstAll) {
    await onScreenChanges({ parameters });
    if (meetingDisplayType !== 'all') {
      updateFirstAll(true);
    }
  } else if (islevel === '2' && !hostFirstSwitch) {
    await onScreenChanges({ parameters });
    updateHostFirstSwitch(true);
  }
};
