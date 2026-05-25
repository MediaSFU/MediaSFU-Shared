import { Consumer } from 'mediasoup-client/lib/types';
import { Device } from 'mediasoup-client/lib/types';
import { DtlsParameters } from 'mediasoup-client/lib/types';
import { IceCandidate } from 'mediasoup-client/lib/types';
import { IceParameters } from 'mediasoup-client/lib/types';
import { Producer } from 'mediasoup-client/lib/types';
import { ProducerCodecOptions } from 'mediasoup-client/lib/types';
import { ProducerOptions } from 'mediasoup-client/lib/types';
import { RtpCapabilities } from 'mediasoup-client/lib/types';
import { RtpEncodingParameters } from 'mediasoup-client/lib/types';
import { Socket } from 'socket.io-client';
import { Transport as Transport_2 } from 'mediasoup-client/lib/types';

export declare const addedAsPanelist: AddedAsPanelistType;

export declare interface AddedAsPanelistData {
    message: string;
}

export declare interface AddedAsPanelistOptions {
    data: AddedAsPanelistData;
    showAlert?: ShowAlert;
}

export declare type AddedAsPanelistType = (options: AddedAsPanelistOptions) => Promise<void>;

export declare const addPanelist: ({ socket, participant, currentPanelists, maxPanelists, roomName, member: _member, islevel, showAlert, }: AddPanelistOptions) => Promise<boolean>;

export declare interface AddPanelistOptions {
    socket: Socket;
    participant: Participant;
    currentPanelists: Participant[];
    maxPanelists: number;
    roomName: string;
    member: string;
    islevel: string;
    showAlert?: ShowAlert;
}

export declare type AddPanelistType = (options: AddPanelistOptions) => Promise<boolean>;

export declare const addVideosGrid: AddVideosGridType;

export declare interface AddVideosGridOptions {
    parameters: AddVideosGridParameters;
    [key: string]: any;
}

export declare interface AddVideosGridParameters {
    [key: string]: any;
}

export declare interface AddVideosGridPlan<T> {
    mainEntries: GridPlanEntry<T>[];
    altEntries: GridPlanEntry<T>[];
}

export declare type AddVideosGridType = (options: AddVideosGridOptions) => Promise<void>;

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
export declare const allMembers: <TParticipantSummary extends AllMembersParticipantLike = AllMembersParticipantLike, TParticipant extends AllMembersParticipantLike = AllMembersParticipantLike, TRequest extends AllMembersRequestLike = AllMembersRequestLike, TCoHostResponsibility = unknown, TWaitingRoomParticipant = unknown, TConsumeSocket = unknown, TSocket = Socket, TOnScreenChangesParameters = OnScreenChangesParameters, TConnectIpsParameters = ConnectIpsParameters, TConnectLocalIpsParameters = ConnectLocalIpsParameters, TReorderStreamsParameters = ReorderStreamsParameters, TAllParameters extends TOnScreenChangesParameters & TConnectIpsParameters & TConnectLocalIpsParameters & TReorderStreamsParameters = TOnScreenChangesParameters & TConnectIpsParameters & TConnectLocalIpsParameters & TReorderStreamsParameters>({ members, requestss, coHoste, coHostRes, parameters, consume_sockets, apiUserName, apiKey, apiToken, }: AllMembersOptions<TParticipantSummary, TParticipant, TRequest, TCoHostResponsibility, TWaitingRoomParticipant, TConsumeSocket, TSocket, TOnScreenChangesParameters, TConnectIpsParameters, TConnectLocalIpsParameters, TReorderStreamsParameters, TAllParameters>) => Promise<void>;

export declare interface AllMembersConnectIpsOptions<TParameters = unknown, TConsumeSocket = unknown> {
    consume_sockets: TConsumeSocket[];
    remIP: string[];
    parameters: TParameters;
    apiUserName: string;
    apiKey: string;
    apiToken: string;
}

export declare type AllMembersConnectIpsType<TParameters = unknown, TConsumeSocket = unknown> = (options: AllMembersConnectIpsOptions<TParameters, TConsumeSocket>) => Promise<[TConsumeSocket[], string[]]>;

export declare interface AllMembersConnectLocalIpsOptions<TParameters = unknown, TSocket = Socket> {
    socket: TSocket;
    parameters: TParameters;
}

export declare type AllMembersConnectLocalIpsType<TParameters = unknown, TSocket = Socket> = (options: AllMembersConnectLocalIpsOptions<TParameters, TSocket>) => Promise<unknown>;

export declare interface AllMembersData {
    members: Participant[];
    requests: Request_2[];
    coHost?: string;
    coHostResponsibilities: CoHostResponsibility[];
}

export declare interface AllMembersOnScreenChangesOptions<TParameters = unknown> {
    parameters: TParameters;
}

export declare type AllMembersOnScreenChangesType<TParameters = unknown> = (options: AllMembersOnScreenChangesOptions<TParameters>) => Promise<unknown>;

export declare interface AllMembersOptions<TParticipantSummary extends AllMembersParticipantLike = AllMembersParticipantLike, TParticipant extends AllMembersParticipantLike = AllMembersParticipantLike, TRequest extends AllMembersRequestLike = AllMembersRequestLike, TCoHostResponsibility = unknown, TWaitingRoomParticipant = unknown, TConsumeSocket = unknown, TSocket = Socket, TOnScreenChangesParameters = OnScreenChangesParameters, TConnectIpsParameters = ConnectIpsParameters, TConnectLocalIpsParameters = ConnectLocalIpsParameters, TReorderStreamsParameters = ReorderStreamsParameters, TAllParameters extends TOnScreenChangesParameters & TConnectIpsParameters & TConnectLocalIpsParameters & TReorderStreamsParameters = TOnScreenChangesParameters & TConnectIpsParameters & TConnectLocalIpsParameters & TReorderStreamsParameters> {
    members: TParticipant[];
    requestss: TRequest[];
    coHoste: string;
    coHostRes: TCoHostResponsibility[];
    parameters: AllMembersParameters<TParticipantSummary, TParticipant, TRequest, TCoHostResponsibility, TWaitingRoomParticipant, TConsumeSocket, TSocket, TOnScreenChangesParameters, TConnectIpsParameters, TConnectLocalIpsParameters, TReorderStreamsParameters, TAllParameters> & TAllParameters;
    consume_sockets: TConsumeSocket[];
    apiUserName: string;
    apiKey: string;
    apiToken: string;
}

export declare interface AllMembersParameters<TParticipantSummary extends AllMembersParticipantLike = AllMembersParticipantLike, TParticipant extends AllMembersParticipantLike = AllMembersParticipantLike, TRequest extends AllMembersRequestLike = AllMembersRequestLike, TCoHostResponsibility = unknown, TWaitingRoomParticipant = unknown, TConsumeSocket = unknown, TSocket = Socket, TOnScreenChangesParameters = OnScreenChangesParameters, TConnectIpsParameters = ConnectIpsParameters, TConnectLocalIpsParameters = ConnectLocalIpsParameters, TReorderStreamsParameters = ReorderStreamsParameters, TAllParameters extends TOnScreenChangesParameters & TConnectIpsParameters & TConnectLocalIpsParameters & TReorderStreamsParameters = TOnScreenChangesParameters & TConnectIpsParameters & TConnectLocalIpsParameters & TReorderStreamsParameters> {
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
    getUpdatedAllParams: () => AllMembersParameters<TParticipantSummary, TParticipant, TRequest, TCoHostResponsibility, TWaitingRoomParticipant, TConsumeSocket, TSocket, TOnScreenChangesParameters, TConnectIpsParameters, TConnectLocalIpsParameters, TReorderStreamsParameters, TAllParameters> & TAllParameters;
    [key: string]: any;
}

export declare interface AllMembersParticipantLike {
    id?: string | number;
    isBanned?: boolean;
    isSuspended?: boolean;
    name?: string | null;
    audioID?: string | null;
    videoID?: string | null;
}

export declare interface AllMembersReorderStreamsOptions<TParameters = unknown> {
    add: boolean;
    screenChanged?: boolean;
    parameters: TParameters;
}

export declare type AllMembersReorderStreamsType<TParameters = unknown> = (options: AllMembersReorderStreamsOptions<TParameters>) => Promise<unknown>;

export declare interface AllMembersRequestLike {
    id?: string | number;
}

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
export declare const allMembersRest: <TParticipantSummary extends AllMembersRestParticipantLike = AllMembersRestParticipantLike, TParticipant extends AllMembersRestParticipantLike = AllMembersRestParticipantLike, TRequest extends AllMembersRestRequestLike = AllMembersRestRequestLike, TCoHostResponsibility = unknown, TConsumeSocket = unknown, TSocket = Socket, TOnScreenChangesParameters = OnScreenChangesParameters, TConnectIpsParameters = ConnectIpsParameters, TReorderStreamsParameters = ReorderStreamsParameters, TConnectLocalIpsParameters = ConnectLocalIpsParameters, TAllParameters extends TOnScreenChangesParameters & TConnectIpsParameters & TReorderStreamsParameters & TConnectLocalIpsParameters = TOnScreenChangesParameters & TConnectIpsParameters & TReorderStreamsParameters & TConnectLocalIpsParameters>({ members, settings, coHoste, coHostRes, parameters, consume_sockets, apiUserName, apiKey, apiToken, }: AllMembersRestOptions<TParticipantSummary, TParticipant, TRequest, TCoHostResponsibility, TConsumeSocket, TSocket, TOnScreenChangesParameters, TConnectIpsParameters, TReorderStreamsParameters, TConnectLocalIpsParameters, TAllParameters>) => Promise<void>;

export declare interface AllMembersRestConnectIpsOptions<TParameters = unknown, TConsumeSocket = unknown> {
    consume_sockets: TConsumeSocket[];
    remIP: string[];
    parameters: TParameters;
    apiUserName: string;
    apiKey: string;
    apiToken: string;
}

export declare type AllMembersRestConnectIpsType<TParameters = unknown, TConsumeSocket = unknown> = (options: AllMembersRestConnectIpsOptions<TParameters, TConsumeSocket>) => Promise<[TConsumeSocket[], string[]]>;

export declare interface AllMembersRestConnectLocalIpsOptions<TParameters = unknown, TSocket = Socket> {
    socket: TSocket;
    parameters: TParameters;
}

export declare type AllMembersRestConnectLocalIpsType<TParameters = unknown, TSocket = Socket> = (options: AllMembersRestConnectLocalIpsOptions<TParameters, TSocket>) => Promise<unknown>;

export declare interface AllMembersRestData {
    members: Participant[];
    settings: Settings;
    coHost?: string;
    coHostResponsibilities: CoHostResponsibility[];
}

export declare interface AllMembersRestOnScreenChangesOptions<TParameters = unknown> {
    parameters: TParameters;
}

export declare type AllMembersRestOnScreenChangesType<TParameters = unknown> = (options: AllMembersRestOnScreenChangesOptions<TParameters>) => Promise<unknown>;

export declare interface AllMembersRestOptions<TParticipantSummary extends AllMembersRestParticipantLike = AllMembersRestParticipantLike, TParticipant extends AllMembersRestParticipantLike = AllMembersRestParticipantLike, TRequest extends AllMembersRestRequestLike = AllMembersRestRequestLike, TCoHostResponsibility = unknown, TConsumeSocket = unknown, TSocket = Socket, TOnScreenChangesParameters = OnScreenChangesParameters, TConnectIpsParameters = ConnectIpsParameters, TReorderStreamsParameters = ReorderStreamsParameters, TConnectLocalIpsParameters = ConnectLocalIpsParameters, TAllParameters extends TOnScreenChangesParameters & TConnectIpsParameters & TReorderStreamsParameters & TConnectLocalIpsParameters = TOnScreenChangesParameters & TConnectIpsParameters & TReorderStreamsParameters & TConnectLocalIpsParameters> {
    members: TParticipant[];
    settings: Settings;
    coHoste?: string;
    coHostRes?: TCoHostResponsibility[];
    parameters: AllMembersRestParameters<TParticipantSummary, TParticipant, TRequest, TCoHostResponsibility, TConsumeSocket, TSocket, TOnScreenChangesParameters, TConnectIpsParameters, TReorderStreamsParameters, TConnectLocalIpsParameters, TAllParameters> & TAllParameters;
    consume_sockets: TConsumeSocket[];
    apiUserName: string;
    apiKey: string;
    apiToken: string;
}

export declare interface AllMembersRestParameters<TParticipantSummary extends AllMembersRestParticipantLike = AllMembersRestParticipantLike, TParticipant extends AllMembersRestParticipantLike = AllMembersRestParticipantLike, TRequest extends AllMembersRestRequestLike = AllMembersRestRequestLike, TCoHostResponsibility = unknown, TConsumeSocket = unknown, TSocket = Socket, TOnScreenChangesParameters = OnScreenChangesParameters, TConnectIpsParameters = ConnectIpsParameters, TReorderStreamsParameters = ReorderStreamsParameters, TConnectLocalIpsParameters = ConnectLocalIpsParameters, TAllParameters extends TOnScreenChangesParameters & TConnectIpsParameters & TReorderStreamsParameters & TConnectLocalIpsParameters = TOnScreenChangesParameters & TConnectIpsParameters & TReorderStreamsParameters & TConnectLocalIpsParameters> {
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
    updateCoHostResponsibility: (coHostResponsibility: TCoHostResponsibility[]) => void;
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
    getUpdatedAllParams: () => AllMembersRestParameters<TParticipantSummary, TParticipant, TRequest, TCoHostResponsibility, TConsumeSocket, TSocket, TOnScreenChangesParameters, TConnectIpsParameters, TReorderStreamsParameters, TConnectLocalIpsParameters, TAllParameters> & TAllParameters;
    [key: string]: any;
}

export declare interface AllMembersRestParticipantLike {
    id?: string | number;
    isBanned?: boolean;
    isSuspended?: boolean;
    name?: string | null;
    audioID?: string | null;
    videoID?: string | null;
    ScreenID?: string | null;
    ScreenOn?: boolean;
}

export declare interface AllMembersRestReorderStreamsOptions<TParameters = unknown> {
    add: boolean;
    screenChanged?: boolean;
    parameters: TParameters;
}

export declare type AllMembersRestReorderStreamsType<TParameters = unknown> = (options: AllMembersRestReorderStreamsOptions<TParameters>) => Promise<unknown>;

export declare interface AllMembersRestRequestLike {
    id?: string | number;
}

export declare interface AllMembersRestSleepOptions {
    ms: number;
}

export declare type AllMembersRestSleepType = (options: AllMembersRestSleepOptions) => Promise<unknown>;

export declare type AllMembersRestType<TParticipantSummary extends AllMembersRestParticipantLike = AllMembersRestParticipantLike, TParticipant extends AllMembersRestParticipantLike = AllMembersRestParticipantLike, TRequest extends AllMembersRestRequestLike = AllMembersRestRequestLike, TCoHostResponsibility = unknown, TConsumeSocket = unknown, TSocket = Socket, TOnScreenChangesParameters = OnScreenChangesParameters, TConnectIpsParameters = ConnectIpsParameters, TReorderStreamsParameters = ReorderStreamsParameters, TConnectLocalIpsParameters = ConnectLocalIpsParameters, TAllParameters extends TOnScreenChangesParameters & TConnectIpsParameters & TReorderStreamsParameters & TConnectLocalIpsParameters = TOnScreenChangesParameters & TConnectIpsParameters & TReorderStreamsParameters & TConnectLocalIpsParameters> = (options: AllMembersRestOptions<TParticipantSummary, TParticipant, TRequest, TCoHostResponsibility, TConsumeSocket, TSocket, TOnScreenChangesParameters, TConnectIpsParameters, TReorderStreamsParameters, TConnectLocalIpsParameters, TAllParameters>) => Promise<void>;

export declare interface AllMembersSleepOptions {
    ms: number;
}

export declare type AllMembersSleepType = (options: AllMembersSleepOptions) => Promise<unknown>;

export declare type AllMembersType<TParticipantSummary extends AllMembersParticipantLike = AllMembersParticipantLike, TParticipant extends AllMembersParticipantLike = AllMembersParticipantLike, TRequest extends AllMembersRequestLike = AllMembersRequestLike, TCoHostResponsibility = unknown, TWaitingRoomParticipant = unknown, TConsumeSocket = unknown, TSocket = Socket, TOnScreenChangesParameters = OnScreenChangesParameters, TConnectIpsParameters = ConnectIpsParameters, TConnectLocalIpsParameters = ConnectLocalIpsParameters, TReorderStreamsParameters = ReorderStreamsParameters, TAllParameters extends TOnScreenChangesParameters & TConnectIpsParameters & TConnectLocalIpsParameters & TReorderStreamsParameters = TOnScreenChangesParameters & TConnectIpsParameters & TConnectLocalIpsParameters & TReorderStreamsParameters> = (options: AllMembersOptions<TParticipantSummary, TParticipant, TRequest, TCoHostResponsibility, TWaitingRoomParticipant, TConsumeSocket, TSocket, TOnScreenChangesParameters, TConnectIpsParameters, TConnectLocalIpsParameters, TReorderStreamsParameters, TAllParameters>) => Promise<void>;

/**
 * Replaces the waiting-room list and recalculates the combined waiting count.
 *
 * @param {AllWaitingRoomMembersOptions} options - Waiting-room state setters.
 * @returns {Promise<void>} Resolves after the state updates run.
 *
 * @example
 * ```typescript
 * await allWaitingRoomMembers({
 *   waitingParticipants,
 *   updateWaitingRoomList: setWaitingRoomList,
 *   updateTotalReqWait: setTotalReqWait,
 * });
 * ```
 */
export declare const allWaitingRoomMembers: ({ waitingParticipants, updateWaitingRoomList, updateTotalReqWait, }: AllWaitingRoomMembersOptions) => Promise<void>;

export declare interface AllWaitingRoomMembersData {
    waitingParticipants?: WaitingRoomParticipant[];
    waitingParticipantss?: WaitingRoomParticipant[];
}

export declare interface AllWaitingRoomMembersOptions {
    waitingParticipants: WaitingRoomParticipant[];
    updateWaitingRoomList: (participants: WaitingRoomParticipant[]) => void;
    updateTotalReqWait: (totalReqs: number) => void;
}

export declare type AllWaitingRoomMembersType = (options: AllWaitingRoomMembersOptions) => Promise<void>;

export declare type AltDomains = {
    [key: string]: string;
};

export declare const aParams: AParamsType;

export declare type AParamsType = {
    encodings: RtpEncodingParameters[];
    codecOptions?: ProducerCodecOptions;
};

declare interface AudioData_2 {
    audioBuffer: AudioBuffer;
}
export { AudioData_2 as AudioData }

declare interface AudioDecibelLike {
    name: string;
    averageLoudness?: number | null;
}

export declare interface AudioDecibels {
    name: string;
    averageLoudness: number;
}

declare interface AudioTransportLike {
    producerId?: string | null;
    consumer?: {
        paused?: boolean;
        kind?: string;
        pause: () => unknown;
        resume: () => unknown;
    };
    socket_: {
        emit: (event: string, payload: {
            serverConsumerId: string;
        }, callback?: ((payload?: {
            resumed: boolean;
        }) => void | Promise<unknown>)) => void;
    };
    serverConsumerTransportId: string;
}

/**
 * Adjusts values based on the provided options and the number of participants.
 *
 * @function
 * @async
 * @param {AutoAdjustOptions} options - The options for auto adjustment.
 * @param {number} options.n - The number of participants.
 * @param {string} options.eventType - The type of event (e.g., 'broadcast', 'chat', 'conference').
 * @param {boolean} options.shareScreenStarted - Indicates if screen sharing has started.
 * @param {boolean} options.shared - Indicates if something is shared.
 *
 * @returns {Promise<number[]>} A promise that resolves to an array containing the adjusted values.
 *
 * @example
 * import { autoAdjust } from 'mediasfu-reactjs';
 *
 * const options = {
 *   n: 10,
 *   eventType: 'conference',
 *   shareScreenStarted: false,
 *   shared: false,
 * };
 *
 * autoAdjust(options)
 *   .then(values => {
 *     console.log('Adjusted values:', values);
 *   })
 *   .catch(error => {
 *     console.error('Error adjusting values:', error);
 *   });
 */
export declare function autoAdjust({ n, eventType, shareScreenStarted, shared }: AutoAdjustOptions): Promise<number[]>;

export declare interface AutoAdjustOptions {
    n: number;
    eventType: EventType;
    shareScreenStarted: boolean;
    shared: boolean;
}

export declare type AutoAdjustType = (options: AutoAdjustOptions) => Promise<number[]>;

export declare interface BanData {
    name: string;
}

/**
 * Removes a banned participant from the rendered participant list and reorders streams if needed.
 *
 * @param {BanParticipantOptions} options - Participant name and stream reordering helpers.
 * @returns {Promise<void>} Resolves when participant state is updated.
 *
 * @example
 * ```typescript
 * await banParticipant({
 *   name: 'John Doe',
 *   parameters,
 * });
 * ```
 */
export declare const banParticipant: <TParameters = unknown, TParticipant extends {
    name?: string | null;
} = Participant>({ name, parameters, }: BanParticipantOptions<TParameters, TParticipant>) => Promise<void>;

export declare interface BanParticipantOptions<TParameters = unknown, TParticipant extends {
    name?: string | null;
} = Participant> {
    name: string;
    parameters: BanParticipantParameters<TParameters, TParticipant> & TParameters;
}

export declare interface BanParticipantParameters<TParameters = unknown, TParticipant extends {
    name?: string | null;
} = Participant> {
    activeNames: string[];
    dispActiveNames: string[];
    participants: TParticipant[];
    updateParticipants: (participants: TParticipant[]) => void;
    reorderStreams: BanParticipantReorderType<TParameters>;
    [key: string]: any;
}

export declare interface BanParticipantReorderOptions<TParameters = unknown> {
    add?: boolean;
    screenChanged?: boolean;
    parameters: TParameters;
}

export declare type BanParticipantReorderType<TParameters = unknown> = (options: BanParticipantReorderOptions<TParameters>) => Promise<void>;

export declare type BanParticipantType<TParameters = unknown, TParticipant extends {
    name?: string | null;
} = Participant> = (options: BanParticipantOptions<TParameters, TParticipant>) => Promise<void>;

declare type BooleanUpdater = (value: boolean) => void;

declare type BooleanUpdater_2 = (value: boolean) => void;

export declare interface BreakoutParticipant {
    name: string;
    breakRoom?: number | null;
}

declare interface BreakoutParticipantLike {
    name: string;
    breakRoom?: number | null;
}

declare interface BreakoutParticipantLike_2 {
    name: string;
    breakRoom?: number | null;
}

/**
 * Updates the state of breakout rooms based on the provided data and parameters.
 *
 * @param {BreakoutRoomUpdatedOptions} options - The options object.
 * @param {BreakoutRoomUpdatedData} options.data - The data object containing information about the breakout rooms.
 * @param {BreakoutRoomUpdatedParameters} options.parameters - The parameters object containing various state update functions and other parameters.
 *
 * @example
 * ```typescript
 * const breakoutOptions: BreakoutRoomUpdatedOptions = {
 *   data: breakoutData,
 *   parameters: {
 *     breakOutRoomStarted: false,
 *     breakOutRoomEnded: false,
 *     breakoutRooms: [[]],
 *     hostNewRoom: 1,
 *     islevel: '2',
 *     participantsAll: allParticipants,
 *     participants: activeParticipants,
 *     meetingDisplayType: 'all',
 *     prevMeetingDisplayType: 'video',
 *     updateBreakoutRooms: setBreakoutRooms,
 *     updateBreakOutRoomStarted: setBreakOutRoomStarted,
 *     updateBreakOutRoomEnded: setBreakOutRoomEnded,
 *     updateHostNewRoom: setHostNewRoom,
 *     updateMeetingDisplayType: setMeetingDisplayType,
 *     updateParticipantsAll: setAllParticipants,
 *     updateParticipants: setActiveParticipants,
 *     onScreenChanges: handleScreenChanges,
 *     rePort: reportFunction,
 *     getUpdatedAllParams: () => breakoutOptions.parameters,
 *   },
 * }
 *
 * await breakoutRoomUpdated(breakoutOptions)
 * ```
 */
export declare const breakoutRoomUpdated: BreakoutRoomUpdatedType;

export declare interface BreakoutRoomUpdatedData {
    forHost?: boolean;
    newRoom?: number;
    members?: Participant[];
    breakoutRooms?: BreakoutParticipant[][];
    status?: string;
}

export declare interface BreakoutRoomUpdatedOptions {
    data: BreakoutRoomUpdatedData;
    parameters: BreakoutRoomUpdatedParameters;
}

export declare interface BreakoutRoomUpdatedParameters extends OnScreenChangesParameters, RePortParameters {
    breakOutRoomStarted: boolean;
    breakOutRoomEnded: boolean;
    breakoutRooms: BreakoutParticipant[][];
    hostNewRoom: number;
    islevel: string;
    participantsAll: Participant[];
    participants: Participant[];
    meetingDisplayType: string;
    prevMeetingDisplayType: string;
    updateBreakoutRooms: (rooms: BreakoutParticipant[][]) => void;
    updateBreakOutRoomStarted: (started: boolean) => void;
    updateBreakOutRoomEnded: (ended: boolean) => void;
    updateHostNewRoom: (room: number) => void;
    updateMeetingDisplayType: (type: string) => void;
    updateParticipantsAll: (participants: Participant[]) => void;
    updateParticipants: (participants: Participant[]) => void;
    onScreenChanges: OnScreenChangesType;
    rePort: RePortType;
    getUpdatedAllParams: () => BreakoutRoomUpdatedParameters;
    [key: string]: any;
}

export declare type BreakoutRoomUpdatedType = (options: BreakoutRoomUpdatedOptions) => Promise<void>;

/**
 * Pure planning engine for addVideosGrid.
 * Produces deterministic main/alt stream iteration plans without rendering concerns.
 */
export declare function buildAddVideosGridPlan<T>({ mainGridStreams, altGridStreams, numToAdd, }: BuildAddVideosGridPlanOptions<T>): AddVideosGridPlan<T>;

export declare interface BuildAddVideosGridPlanOptions<T> {
    mainGridStreams: T[];
    altGridStreams: T[];
    numToAdd?: number;
}

/**
 * Pure helper for resolving the non-screen-share host card to render on the main screen.
 */
export declare function buildMainHostCardPlan<TStreamLike extends PrepopulateStreamLike = PrepopulateStreamLike>({ islevel, localUIMode, videoAlreadyOn, audioAlreadyOn, hostVideoOn, hostMuted, hostIsAdmin, hostName, hostVideoID, fallbackName, member, keepBackground, virtualStream, localStreamVideo, oldAllStreams, }: BuildMainHostCardPlanOptions<TStreamLike>): MainHostCardPlan;

export declare interface BuildMainHostCardPlanOptions<TStreamLike = PrepopulateStreamLike> {
    islevel: string;
    localUIMode: boolean;
    videoAlreadyOn: boolean;
    audioAlreadyOn: boolean;
    hostVideoOn: boolean;
    hostMuted?: boolean;
    hostIsAdmin: boolean;
    hostName: string;
    hostVideoID?: string;
    fallbackName: string;
    member: string;
    keepBackground: boolean;
    virtualStream: any;
    localStreamVideo: any;
    oldAllStreams: TStreamLike[];
}

/**
 * Pure helper for normalizing main-screen state updates.
 */
export declare function buildMainScreenState({ filled, adminOnMainScreen, mainScreenPerson, }: BuildMainScreenStateOptions): MainScreenState;

export declare interface BuildMainScreenStateOptions {
    filled: boolean;
    adminOnMainScreen: boolean;
    mainScreenPerson: string;
}

/**
 * Pure planning engine for prepopulateUserMedia host/screen-flow resolution.
 * Returns deterministic state decisions without rendering concerns.
 */
export declare function buildPrepopulateUserMediaPlan<P extends PrepopulateParticipantLike, S extends PrepopulateStreamLike>({ participants, allVideoStreams, member, shared, shareScreenStarted, eventType, screenId, whiteboardStarted, whiteboardEnded, remoteScreenStream, localStreamScreen, checkOrientation, isWideScreen, forceFullDisplay, includeWhiteboardAsScreenFlow, }: BuildPrepopulateUserMediaPlanOptions<P, S>): PrepopulateUserMediaPlan<P>;

export declare interface BuildPrepopulateUserMediaPlanOptions<P extends PrepopulateParticipantLike, S extends PrepopulateStreamLike> {
    participants: P[];
    allVideoStreams: S[];
    member: string;
    islevel: string;
    shared: boolean;
    shareScreenStarted: boolean;
    eventType: string;
    screenId?: string;
    whiteboardStarted: boolean;
    whiteboardEnded: boolean;
    remoteScreenStream: S[];
    localStreamScreen: any;
    checkOrientation: () => string;
    isWideScreen: boolean;
    forceFullDisplay: boolean;
    includeWhiteboardAsScreenFlow?: boolean;
}

/**
 * Pure helper for resolving the screen-share host card to render on the main screen.
 */
export declare function buildScreenShareHostCardPlan({ hostName, hostScreenID, hostIsAdmin, shared, hostStream, screenForceFullDisplay, annotateScreenStream, }: BuildScreenShareHostCardPlanOptions): ScreenShareHostCardPlan;

export declare interface BuildScreenShareHostCardPlanOptions {
    hostName: string;
    hostScreenID?: string;
    hostIsAdmin: boolean;
    shared: boolean;
    hostStream: any;
    screenForceFullDisplay: boolean;
    annotateScreenStream: boolean;
}

export declare const bulkUpdateParticipantPermissions: ({ socket, participants, newLevel, member: _member, islevel, roomName, showAlert, maxBatchSize, }: BulkUpdateParticipantPermissionsOptions) => Promise<void>;

export declare interface BulkUpdateParticipantPermissionsOptions {
    socket: Socket;
    participants: Participant[];
    newLevel: PermissionLevel;
    member: string;
    islevel: string;
    roomName: string;
    showAlert?: ShowAlert;
    maxBatchSize?: number;
}

export declare interface ButtonTouch<TIcon = unknown, TElement = unknown> {
    name?: string;
    icon?: TIcon;
    alternateIcon?: TIcon;
    onPress?: () => void;
    backgroundColor?: {
        default?: string;
    };
    active?: boolean;
    alternateIconComponent?: TElement;
    iconComponent?: TElement;
    customComponent?: TElement;
    color?: string;
    activeColor?: string;
    inActiveColor?: string;
    show?: boolean;
    disabled?: boolean;
}

/**
 * Calculates the number of rows and columns needed to display a given number of items in a grid.
 *
 * @function
 * @param {CalculateRowsAndColumnsOptions} options - The options for calculating rows and columns.
 * @param {number} options.n - The number of items to display.
 * @returns {[number, number]} A tuple containing the number of rows and columns.
 *
 * @example
 * import { calculateRowsAndColumns } from 'mediasfu-reactjs';
 *
 * const options = {
 *   n: 10,
 * };
 *
 * const [rows, cols] = calculateRowsAndColumns(options);
 * console.log(`Rows: ${rows}, Columns: ${cols}`); // Outputs: Rows: 4, Columns: 3
 */
export declare function calculateRowsAndColumns({ n }: CalculateRowsAndColumnsOptions): [number, number];

export declare interface CalculateRowsAndColumnsOptions {
    n: number;
}

export declare type CalculateRowsAndColumnsType = (options: CalculateRowsAndColumnsOptions) => [number, number];

/**
 * Captures or tears down a whiteboard canvas stream used for screen-style sharing.
 *
 * When starting, this helper captures the canvas at 30 FPS and ensures the
 * correct screen transport is created or reconnected. When stopping, it ends all
 * canvas tracks and disconnects the corresponding transport.
 *
 * @param options Function options for starting or stopping the captured canvas stream.
 * @returns A promise that resolves after the whiteboard stream lifecycle step completes.
 */
export declare const captureCanvasStream: ({ parameters, start, }: CaptureCanvasStreamOptions) => Promise<void>;

export declare interface CaptureCanvasStreamOptions {
    parameters: CaptureCanvasStreamParameters;
    start?: boolean;
}

export declare interface CaptureCanvasStreamParameters extends CreateSendTransportParameters, DisconnectSendTransportScreenParameters, ConnectSendTransportScreenParameters {
    canvasWhiteboard: HTMLCanvasElement | null;
    canvasStream: MediaStream | null;
    updateCanvasStream: (stream: MediaStream | null) => void;
    screenProducer: Producer | null;
    localScreenProducer?: Producer | null;
    transportCreated: boolean;
    localTransportCreated?: boolean;
    localSocket?: Socket;
    updateScreenProducer: (producer: Producer | null) => void;
    updateLocalScreenProducer?: (localProducer: Producer | null) => void;
    sleep: SleepType;
    createSendTransport: CreateSendTransportType;
    connectSendTransportScreen: ConnectSendTransportScreenType;
    disconnectSendTransportScreen: DisconnectSendTransportScreenType;
    getUpdatedAllParams: () => CaptureCanvasStreamParameters;
    [key: string]: any;
}

export declare type CaptureCanvasStreamType = (options: CaptureCanvasStreamOptions) => Promise<void>;

/**
 * Asynchronously changes the video streams based on the provided options.
 *
 * @function
 * @param {ChangeVidsOptions} options - The options for changing video streams.
 * @param {boolean} [options.screenChanged=false] - Indicates if the screen has changed.
 * @param {ChangeVidsParameters} options.parameters - The parameters for changing video streams.
 * @returns {Promise<void>} A promise that resolves when the video streams have been changed.
 *
 * @typedef {Object} ChangeVidsOptions
 * @property {Function} getUpdatedAllParams - Function to get updated parameters.
 * @property {Array} allVideoStreams - Array of all video streams.
 * @property {Array} p_activeNames - Array of active participant names.
 * @property {Array} activeNames - Array of active names.
 * @property {Array} dispActiveNames - Array of displayed active names.
 * @property {boolean} shareScreenStarted - Indicates if screen sharing has started.
 * @property {boolean} shared - Indicates if the screen is shared.
 * @property {Array} newLimitedStreams - Array of new limited streams.
 * @property {Array} non_alVideoStreams - Array of non-al video streams.
 * @property {Array} ref_participants - Array of reference participants.
 * @property {Array} participants - Array of participants.
 * @property {string} eventType - Type of the event.
 * @property {string} islevel - Level of the participant.
 * @property {string} member - Name of the member.
 * @property {boolean} sortAudioLoudness - Indicates if audio loudness should be sorted.
 * @property {Array} audioDecibels - Array of audio decibels.
 * @property {Array} mixed_alVideoStreams - Array of mixed al video streams.
 * @property {Array} non_alVideoStreams_muted - Array of muted non-al video streams.
 * @property {string} remoteProducerId - ID of the remote producer.
 * @property {Object} localStreamVideo - Local stream video object.
 * @property {Array} oldAllStreams - Array of old all streams.
 * @property {number} screenPageLimit - Limit of streams per screen page.
 * @property {string} meetingDisplayType - Type of meeting display.
 * @property {boolean} meetingVideoOptimized - Indicates if meeting video is optimized.
 * @property {boolean} recordingVideoOptimized - Indicates if recording video is optimized.
 * @property {string} recordingDisplayType - Type of recording display.
 * @property {Array} paginatedStreams - Array of paginated streams.
 * @property {number} itemPageLimit - Limit of items per page.
 * @property {boolean} doPaginate - Indicates if pagination should be done.
 * @property {boolean} prevDoPaginate - Indicates if pagination was previously done.
 * @property {number} currentUserPage - Current user page number.
 * @property {Array} breakoutRooms - Array of breakout rooms.
 * @property {number} hostNewRoom - Index of the new room for the host.
 * @property {boolean} breakOutRoomStarted - Indicates if breakout room has started.
 * @property {boolean} breakOutRoomEnded - Indicates if breakout room has ended.
 * @property {Object} virtualStream - Virtual stream object.
 * @property {number} mainRoomsLength - Length of main rooms.
 * @property {number} memberRoom - Room of the member.
 * @property {Function} updateP_activeNames - Function to update active participant names.
 * @property {Function} updateActiveNames - Function to update active names.
 * @property {Function} updateDispActiveNames - Function to update displayed active names.
 * @property {Function} updateNewLimitedStreams - Function to update new limited streams.
 * @property {Function} updateNon_alVideoStreams - Function to update non-al video streams.
 * @property {Function} updateRef_participants - Function to update reference participants.
 * @property {Function} updateSortAudioLoudness - Function to update audio loudness sorting.
 * @property {Function} updateMixed_alVideoStreams - Function to update mixed al video streams.
 * @property {Function} updateNon_alVideoStreams_muted - Function to update muted non-al video streams.
 * @property {Function} updatePaginatedStreams - Function to update paginated streams.
 * @property {Function} updateDoPaginate - Function to update pagination status.
 * @property {Function} updatePrevDoPaginate - Function to update previous pagination status.
 * @property {Function} updateCurrentUserPage - Function to update current user page.
 * @property {Function} updateNumberPages - Function to update number of pages.
 * @property {Function} updateMainRoomsLength - Function to update main rooms length.
 * @property {Function} updateMemberRoom - Function to update member room.
 * @property {Function} mixStreams - Function to mix streams.
 * @property {Function} dispStreams - Function to display streams.
 *
 * @example
 * const options = {
 *   screenChanged: false,
 *   parameters: {
 *     getUpdatedAllParams: () => updatedParameters,
 *     allVideoStreams: allStreams,
 *     p_activeNames: activeNames,
 *     activeNames: activeNames,
 *     dispActiveNames: displayedActiveNames,
 *     shareScreenStarted: false,
 *     shared: false,
 *     newLimitedStreams: limitedStreams,
 *     non_alVideoStreams: nonAlStreams,
 *     ref_participants: referenceParticipants,
 *     participants: participants,
 *     eventType: "conference",
 *     islevel: "2",
 *     member: "John Doe",
 *     sortAudioLoudness: true,
 *     audioDecibels: audioLevels,
 *     mixed_alVideoStreams: mixedStreams,
 *     non_alVideoStreams_muted: mutedNonAlStreams,
 *     remoteProducerId: "12345",
 *     localStreamVideo: localStream,
 *     oldAllStreams: oldStreams,
 *     screenPageLimit: 10,
 *     meetingDisplayType: "video",
 *     meetingVideoOptimized: true,
 *     recordingVideoOptimized: false,
 *     recordingDisplayType: "video",
 *     paginatedStreams: paginatedStreams,
 *     itemPageLimit: 10,
 *     doPaginate: true,
 *     prevDoPaginate: false,
 *     currentUserPage: 1,
 *     breakoutRooms: breakoutRooms,
 *     hostNewRoom: 0,
 *     breakOutRoomStarted: false,
 *     breakOutRoomEnded: false,
 *     virtualStream: virtualStream,
 *     mainRoomsLength: 2,
 *     memberRoom: 0,
 *     updateP_activeNames: (names) => updateActiveNames(names),
 *     updateActiveNames: (names) => updateActiveNames(names),
 *     updateDispActiveNames: (names) => updateDispActiveNames(names),
 *     updateNewLimitedStreams: (streams) => updateNewLimitedStreams(streams),
 *     updateNon_alVideoStreams: (participants) => updateNon_alVideoStreams(participants),
 *     updateRef_participants: (participants) => updateRef_participants(participants),
 *     updateSortAudioLoudness: (sort) => updateSortAudioLoudness(sort),
 *     updateMixed_alVideoStreams: (streams) => updateMixed_alVideoStreams(streams),
 *     updateNon_alVideoStreams_muted: (participants) => updateNon_alVideoStreams_muted(participants),
 *     updatePaginatedStreams: (streams) => updatePaginatedStreams(streams),
 *     updateDoPaginate: (paginate) => updateDoPaginate(paginate),
 *     updatePrevDoPaginate: (paginate) => updatePrevDoPaginate(paginate),
 *     updateCurrentUserPage: (page) => updateCurrentUserPage(page),
 *     updateNumberPages: (pages) => updateNumberPages(pages),
 *     updateMainRoomsLength: (length) => updateMainRoomsLength(length),
 *     updateMemberRoom: (room) => updateMemberRoom(room),
 *     mixStreams: mixStreams,
 *     dispStreams: dispStreams,
 *   },
 * };
 *
 * changeVids(options)
 *   .then(() => {
 *     console.log('Video streams changed successfully');
 *   });
 */
export declare const changeVids: <TParameters extends ChangeVidsParameters<any, any, any, any, any> = ChangeVidsParameters>({ screenChanged, parameters }: ChangeVidsOptions<TParameters>) => Promise<void>;

declare type ChangeVidsInvoker = (options: {
    screenChanged?: boolean;
    parameters: any;
}) => Promise<void>;

declare type ChangeVidsInvoker_2 = (options: {
    screenChanged?: boolean;
    parameters: any;
}) => Promise<void>;

export declare interface ChangeVidsOptions<TParameters extends ChangeVidsParameters<any, any, any, any, any> = ChangeVidsParameters> {
    screenChanged?: boolean;
    parameters: TParameters;
}

export declare interface ChangeVidsParameters<TStream extends ChangeVidsStreamLike = Stream, TParticipant extends ChangeVidsParticipantLike = Participant, TBreakoutParticipant extends BreakoutParticipantLike = BreakoutParticipantLike, TAudioDecibel extends AudioDecibelLike = AudioDecibels, TMediaHandle = unknown> {
    allVideoStreams: (TStream | TParticipant)[];
    p_activeNames: string[];
    activeNames: string[];
    dispActiveNames: string[];
    shareScreenStarted: boolean;
    shared: boolean;
    newLimitedStreams: (TStream | TParticipant)[];
    non_alVideoStreams: TParticipant[];
    ref_participants: TParticipant[];
    participants: TParticipant[];
    eventType: EventType;
    islevel: string;
    member: string;
    sortAudioLoudness: boolean;
    audioDecibels: TAudioDecibel[];
    mixed_alVideoStreams: (TStream | TParticipant)[];
    non_alVideoStreams_muted: TParticipant[];
    remoteProducerId?: string;
    localStreamVideo: TMediaHandle | null;
    oldAllStreams: (TStream | TParticipant)[];
    screenPageLimit: number;
    meetingDisplayType: string;
    meetingVideoOptimized: boolean;
    recordingVideoOptimized: boolean;
    recordingDisplayType: "video" | "media" | "all";
    paginatedStreams: (TStream | TParticipant)[][];
    itemPageLimit: number;
    doPaginate: boolean;
    prevDoPaginate: boolean;
    currentUserPage: number;
    breakoutRooms: TBreakoutParticipant[][];
    hostNewRoom: number;
    breakOutRoomStarted: boolean;
    breakOutRoomEnded: boolean;
    virtualStream: TMediaHandle | null;
    mainRoomsLength: number;
    memberRoom: number;
    updateP_activeNames: StringListUpdater_2;
    updateActiveNames: StringListUpdater_2;
    updateDispActiveNames: StringListUpdater_2;
    updateNewLimitedStreams: EntryArrayUpdater<TStream | TParticipant>;
    updateNon_alVideoStreams: EntryArrayUpdater<TParticipant>;
    updateRef_participants: EntryArrayUpdater<TParticipant>;
    updateSortAudioLoudness: BooleanUpdater_2;
    updateMixed_alVideoStreams: EntryArrayUpdater<TStream | TParticipant>;
    updateNon_alVideoStreams_muted: EntryArrayUpdater<TParticipant>;
    updatePaginatedStreams: EntryMatrixUpdater<TStream | TParticipant>;
    updateDoPaginate: BooleanUpdater_2;
    updatePrevDoPaginate: BooleanUpdater_2;
    updateCurrentUserPage: NumberUpdater_2;
    updateNumberPages: NumberUpdater_2;
    updateMainRoomsLength: NumberUpdater_2;
    updateMemberRoom: NumberUpdater_2;
    mixStreams: MixStreamsInvoker<TStream | TParticipant, TParticipant>;
    dispStreams: DispStreamsInvoker;
    getUpdatedAllParams: () => ChangeVidsParameters<TStream, TParticipant, TBreakoutParticipant, TAudioDecibel, TMediaHandle>;
    [key: string]: any;
}

declare interface ChangeVidsParticipantLike {
    name: string;
    islevel?: string | null;
    videoID?: string | null;
    audioID?: string | null;
    muted?: boolean | null;
    breakRoom?: number | null;
    stream?: unknown;
}

declare interface ChangeVidsStreamLike {
    producerId?: string | null;
    audioID?: string | null;
    name?: string;
    muted?: boolean | null;
    stream?: unknown;
}

export declare type ChangeVidsType = <TParameters extends ChangeVidsParameters<any, any, any, any, any> = ChangeVidsParameters>(options: ChangeVidsOptions<TParameters>) => Promise<void>;

/**
 * Checks the grid configuration and calculates various parameters based on the number of rows, columns, and active elements.
 *
 * @param {CheckGridOptions} options - The options for checking the grid.
 * @param {number} options.rows - The number of rows in the grid.
 * @param {number} options.cols - The number of columns in the grid.
 * @param {number} options.actives - The number of active elements in the grid.
 * @returns {Promise<[boolean, number, number, number, number, number, number] | void>} A promise that resolves to a tuple containing:
 * - `removeAltGrid` (boolean): Indicates whether to remove the alternate grid.
 * - `numtoadd` (number): The number of elements to add.
 * - `numRows` (number): The number of rows.
 * - `numCols` (number): The number of columns.
 * - `remainingVideos` (number): The number of remaining videos.
 * - `actualRows` (number): The actual number of rows.
 * - `lastrowcols` (number): The number of columns in the last row.
 *
 * If an error occurs, it logs the error to the console.
 *
 * @example
 * const options = {
 *   rows: 3,
 *   cols: 4,
 *   actives: 10,
 * };
 *
 * checkGrid(options)
 *   .then(result => {
 *     console.log('Grid check result:', result);
 *     // Example output: [true, 2, 3, 4, 2, 3, 4]
 *   })
 *   .catch(error => {
 *     console.error('Error checking grid:', error);
 *   });
 */
export declare function checkGrid({ rows, cols, actives }: CheckGridOptions): Promise<[boolean, number, number, number, number, number, number] | void>;

export declare interface CheckGridOptions {
    rows: number;
    cols: number;
    actives: number;
}

export declare type CheckGridType = (options: CheckGridOptions) => Promise<[boolean, number, number, number, number, number, number] | void>;

export declare const checkLimitsAndMakeRequest: ({ apiUserName, apiToken, link, apiKey, userName, parameters, validate, }: {
    apiUserName: string;
    apiToken: string;
    link: string;
    apiKey?: string;
    userName: string;
    parameters: PreJoinPageParameters;
    validate?: boolean;
}) => Promise<void>;

/**
 * Mobile/storage-adapter variant used by RN/Expo wrappers to share one canonical implementation.
 */
export declare const checkLimitsAndMakeRequestWithStorage: CheckLimitsAndMakeRequestWithStorageType;

export declare interface CheckLimitsAndMakeRequestWithStorageOptions {
    apiUserName: string;
    apiToken: string;
    link: string;
    apiKey?: string;
    userName: string;
    parameters: PreJoinPageParameters;
    validate?: boolean;
    storageAdapter: CheckLimitsStorageAdapter;
}

export declare type CheckLimitsAndMakeRequestWithStorageType = (options: CheckLimitsAndMakeRequestWithStorageOptions) => Promise<void>;

export declare interface CheckLimitsStorageAdapter {
    getItem: (key: string) => Promise<string | null | undefined> | string | null | undefined;
    setItem: (key: string, value: string) => Promise<void> | void;
}

export declare function checkMediasfuURL({ data, member, roomName, islevel, socket, parameters, joinMediaSFURoom, localLink, }: CheckMediasfuURLOptions): Promise<void>;

export declare interface CheckMediasfuURLOptions {
    data: ResponseJoinLocalRoom;
    member: string;
    roomName: string;
    islevel: string;
    socket: Socket;
    parameters: PreJoinPageParameters;
    joinMediaSFURoom?: JoinRoomOnMediaSFUType;
    localLink?: string;
}

export declare type CheckMediasfuURLType = (options: CheckMediasfuURLOptions) => Promise<void>;

/**
 * Checks if the recording can be paused based on the current pause count and the allowed pause limits.
 *
 * @param {Object} options - The options for checking the pause state.
 * @param {string} options.recordingMediaOptions - The type of media being recorded ("video" or "audio").
 * @param {number} options.recordingVideoPausesLimit - The maximum number of pauses allowed for video recordings.
 * @param {number} options.recordingAudioPausesLimit - The maximum number of pauses allowed for audio recordings.
 * @param {number} options.pauseRecordCount - The current count of pauses that have been made.
 * @param {Function} options.showAlert - Function to show an alert message if the pause limit is reached.
 *
 * @returns {Promise<boolean>} - Resolves to `true` if the recording can be paused, otherwise `false`.
 *
 * @example
 * ```typescript
 * const canPause = await checkPauseState({
 *   recordingMediaOptions: 'audio',
 *   recordingVideoPausesLimit: 3,
 *   recordingAudioPausesLimit: 5,
 *   pauseRecordCount: 4,
 *   showAlert: ({ message }) => console.log(message),
 * })
 * ```
 */
export declare const checkPauseState: CheckPauseStateType;

export declare interface CheckPauseStateOptions {
    recordingMediaOptions: string;
    recordingVideoPausesLimit: number;
    recordingAudioPausesLimit: number;
    pauseRecordCount: number;
    showAlert?: ShowAlert;
}

export declare type CheckPauseStateType = (options: CheckPauseStateOptions) => Promise<boolean>;

/**
 * Checks the permission based on the provided settings.
 *
 * @param {CheckPermissionOptions} options - The options for checking permissions.
 * @param {string} options.permissionType - The type of permission to check. Can be "audioSetting", "videoSetting", "screenshareSetting", or "chatSetting".
 * @param {string} options.audioSetting - The setting for audio permission. Can be "allow", "approval", or other.
 * @param {string} options.videoSetting - The setting for video permission. Can be "allow", "approval", or other.
 * @param {string} options.screenshareSetting - The setting for screenshare permission. Can be "allow", "approval", or other.
 * @param {string} options.chatSetting - The setting for chat permission. Can be "allow", "approval", or other.
 * @returns {Promise<number>} - Returns 0 if the setting is "allow", 1 if the setting is "approval", and 2 for other settings or invalid permission types.
 * @throws Will throw an error if an unexpected error occurs during the permission check.
 *
 * @example
 * const options = {
 *   permissionType: 'audioSetting',
 *   audioSetting: 'allow',
 *   videoSetting: 'approval',
 *   screenshareSetting: 'approval',
 *   chatSetting: 'allow',
 * };
 *
 * checkPermission(options)
 *   .then(result => {
 *     console.log('Permission result:', result);
 *   })
 *   .catch(error => {
 *     console.error('Error checking permission:', error);
 *   });
 */
export declare function checkPermission({ permissionType, audioSetting, videoSetting, screenshareSetting, chatSetting, permissionConfig, participantLevel, }: CheckPermissionOptions): Promise<1 | 0 | 2>;

export declare interface CheckPermissionOptions {
    audioSetting: string;
    videoSetting: string;
    screenshareSetting: string;
    chatSetting: string;
    permissionType: 'audioSetting' | 'videoSetting' | 'screenshareSetting' | 'chatSetting';
    permissionConfig?: PermissionConfig | null;
    participantLevel?: string;
}

export declare type CheckPermissionType = (options: CheckPermissionOptions) => Promise<number>;

/**
 * Checks if the recording can be resumed based on the media type and pause limits.
 *
 * @param {Object} options - The options for checking resume state.
 * @param {string} options.recordingMediaOptions - The type of media being recorded ("video" or "audio").
 * @param {number} options.recordingVideoPausesLimit - The maximum number of pauses allowed for video recording.
 * @param {number} options.recordingAudioPausesLimit - The maximum number of pauses allowed for audio recording.
 * @param {number} options.pauseRecordCount - The current number of pauses that have occurred.
 *
 * @returns {Promise<boolean>} - Resolves to `true` if the recording can be resumed, otherwise `false`.
 *
 * @example
 * ```typescript
 * const canResume = await checkResumeState({
 *   recordingMediaOptions: 'video',
 *   recordingVideoPausesLimit: 3,
 *   recordingAudioPausesLimit: 5,
 *   pauseRecordCount: 2,
 * })
 * ```
 */
export declare const checkResumeState: CheckResumeStateType;

export declare interface CheckResumeStateOptions {
    recordingMediaOptions: string;
    recordingVideoPausesLimit: number;
    recordingAudioPausesLimit: number;
    pauseRecordCount: number;
}

export declare type CheckResumeStateType = (options: CheckResumeStateOptions) => Promise<boolean>;

/**
 * Checks the current screen sharing status and either stops or requests screen sharing based on the provided parameters.
 *
 * @param {CheckScreenShareOptions} options - The options for checking screen share.
 * @param {Object} options.parameters - The parameters for screen sharing.
 * @param {boolean} options.parameters.shared - Indicates if the screen is currently being shared.
 * @param {Function} [options.parameters.showAlert] - Function to show alerts.
 * @param {boolean} options.parameters.whiteboardStarted - Indicates if the whiteboard session has started.
 * @param {boolean} options.parameters.whiteboardEnded - Indicates if the whiteboard session has ended.
 * @param {boolean} options.parameters.breakOutRoomStarted - Indicates if the breakout room session has started.
 * @param {boolean} options.parameters.breakOutRoomEnded - Indicates if the breakout room session has ended.
 * @param {Function} options.parameters.stopShareScreen - Function to stop screen sharing.
 * @param {Function} options.parameters.requestScreenShare - Function to request screen sharing.
 *
 * @returns {Promise<void>} A promise that resolves when the screen sharing status has been checked and the appropriate action has been taken.
 *
 * @throws Will log an error message if an error occurs during the process.
 *
 * @example
 * const options = {
 *   parameters: {
 *     shared: false,
 *     showAlert: showAlertFunction,
 *     whiteboardStarted: false,
 *     whiteboardEnded: false,
 *     breakOutRoomStarted: false,
 *     breakOutRoomEnded: false,
 *     stopShareScreen: stopShareScreenFunction,
 *     requestScreenShare: requestScreenShareFunction,
 *   },
 * };
 *
 * checkScreenShare(options)
 *   .then(() => {
 *     console.log('Screen share checked successfully');
 *   })
 *   .catch((error) => {
 *     console.error('Error checking screen share:', error);
 *   });
 */
export declare function checkScreenShare({ parameters }: CheckScreenShareOptions): Promise<void>;

export declare interface CheckScreenShareOptions {
    parameters: CheckScreenShareParameters;
}

export declare interface CheckScreenShareParameters extends StopShareScreenParameters, RequestScreenShareParameters {
    shared: boolean;
    whiteboardStarted: boolean;
    whiteboardEnded: boolean;
    breakOutRoomStarted: boolean;
    breakOutRoomEnded: boolean;
    showAlert?: ShowAlert;
    stopShareScreen: StopShareScreenType;
    requestScreenShare: RequestScreenShareType;
    getUpdatedAllParams: () => CheckScreenShareParameters;
    [key: string]: any;
}

export declare type CheckScreenShareType = (options: CheckScreenShareOptions) => Promise<void>;

/**
 * Handles microphone toggle flow for a participant.
 *
 * This helper enforces host permission rules, request cooldowns, recording
 * constraints, and transport resume/disconnect behavior before updating the
 * caller's local media state.
 *
 * @param options Function options containing the full runtime parameter bag.
 * @returns A promise that resolves after the microphone action has been processed.
 */
export declare const clickAudio: ({ parameters }: ClickAudioOptions) => Promise<void>;

export declare interface ClickAudioOptions {
    parameters: ClickAudioParameters;
}

export declare interface ClickAudioParameters extends DisconnectSendTransportAudioParameters, ResumeSendTransportAudioParameters, StreamSuccessAudioParameters {
    checkMediaPermission: boolean;
    hasAudioPermission: boolean;
    audioPaused: boolean;
    audioAlreadyOn: boolean;
    audioOnlyRoom: boolean;
    recordStarted: boolean;
    recordResumed: boolean;
    recordPaused: boolean;
    recordStopped: boolean;
    recordingMediaOptions: string;
    islevel: string;
    youAreCoHost: boolean;
    adminRestrictSetting: boolean;
    audioRequestState: string | null;
    audioRequestTime: number;
    member: string;
    socket: Socket;
    localSocket?: Socket;
    roomName: string;
    userDefaultAudioInputDevice: string;
    micAction: boolean;
    localStream: MediaStream | null;
    audioSetting: string;
    videoSetting: string;
    screenshareSetting: string;
    chatSetting: string;
    permissionConfig?: PermissionConfig | null;
    updateRequestIntervalSeconds: number;
    participants: Participant[];
    mediaDevices: MediaDevices;
    transportCreated: boolean;
    transportCreatedAudio: boolean;
    supportFlexRoom?: boolean;
    supportMaxRoom?: boolean;
    updateAudioAlreadyOn: (status: boolean) => void;
    updateAudioRequestState: (state: string | null) => void;
    updateAudioPaused: (status: boolean) => void;
    updateLocalStream: (stream: MediaStream | null) => void;
    updateParticipants: (participants: Participant[]) => void;
    updateTransportCreated: (status: boolean) => void;
    updateTransportCreatedAudio: (status: boolean) => void;
    updateMicAction: (action: boolean) => void;
    showAlert?: ShowAlert;
    checkPermission: CheckPermissionType;
    streamSuccessAudio: StreamSuccessAudioType;
    disconnectSendTransportAudio: DisconnectSendTransportAudioType;
    requestPermissionAudio: RequestPermissionAudioType;
    resumeSendTransportAudio: ResumeSendTransportAudioType;
    getUpdatedAllParams: () => ClickAudioParameters;
    [key: string]: any;
}

export declare type ClickAudioType = (options: ClickAudioOptions) => Promise<void>;

export declare const clickChat: ({ isMessagesModalVisible, updateIsMessagesModalVisible, chatSetting, islevel, showAlert, }: ClickChatOptions) => Promise<void>;

export declare interface ClickChatOptions {
    isMessagesModalVisible: boolean;
    updateIsMessagesModalVisible: (isVisible: boolean) => void;
    chatSetting: string;
    islevel: string;
    showAlert?: ShowAlert;
}

export declare type ClickChatType = (options: ClickChatOptions) => Promise<void>;

/**
 * Handles screen-share toggle flow for a participant.
 *
 * This helper checks room restrictions, host permission policies, request
 * cooldowns, and then delegates to the supplied start/stop share helpers.
 *
 * @param options Function options containing the full runtime parameter bag.
 * @returns A promise that resolves after the screen-share action has been processed.
 */
export declare const clickScreenShare: ({ parameters }: ClickScreenShareOptions) => Promise<void>;

export declare interface ClickScreenShareOptions {
    parameters: ClickScreenShareParameters;
}

export declare interface ClickScreenShareParameters extends CheckScreenShareParameters, StopShareScreenParameters {
    showAlert?: ShowAlert;
    roomName: string;
    member: string;
    socket: Socket;
    islevel: string;
    youAreCoHost: boolean;
    adminRestrictSetting: boolean;
    audioSetting: string;
    videoSetting: string;
    screenshareSetting: string;
    chatSetting: string;
    permissionConfig?: PermissionConfig | null;
    screenAction: boolean;
    screenAlreadyOn: boolean;
    screenRequestState: string | null;
    screenRequestTime: number;
    audioOnlyRoom: boolean;
    updateRequestIntervalSeconds: number;
    updateScreenRequestState: (state: string | null) => void;
    updateScreenAlreadyOn: (status: boolean) => void;
    checkPermission: CheckPermissionType;
    checkScreenShare: CheckScreenShareType;
    stopShareScreen: StopShareScreenType;
    getUpdatedAllParams: () => ClickScreenShareParameters;
    [key: string]: any;
}

export declare type ClickScreenShareType = (options: ClickScreenShareOptions) => Promise<void>;

/**
 * Handles the click event to toggle the participant's video on/off and manages video permission requests.
 *
 * @param {ClickVideoOptions} options - The function parameters.
 * @returns {Promise<void>}
 *
 * @example
 * ```typescript
 * clickVideo({
 *   parameters: {
 *     checkMediaPermission: true,
 *     hasCameraPermission: false,
 *     videoAlreadyOn: false,
 *     audioOnlyRoom: false,
 *     recordStarted: true,
 *     recordResumed: false,
 *     recordPaused: true,
 *     recordStopped: false,
 *     recordingMediaOptions: "video",
 *     islevel: "1",
 *     youAreCoHost: false,
 *     adminRestrictSetting: false,
 *     videoRequestState: null,
 *     videoRequestTime: Date.now(),
 *     member: "John Doe",
 *     socket: socketInstance,
 *     roomName: "room123",
 *     userDefaultVideoInputDevice: "default",
 *     currentFacingMode: "user",
 *     vidCons: { width: 1280, height: 720 },
 *     frameRate: 30,
 *     videoAction: false,
 *     localStream: null,
 *     audioSetting: "allow",
 *     videoSetting: "allow",
 *     screenshareSetting: "allow",
 *     chatSetting: "allow",
 *     updateRequestIntervalSeconds: 60,
 *     showAlert: showAlertFunction,
 *     updateVideoAlreadyOn: setVideoAlreadyOn,
 *     updateVideoRequestState: setVideoRequestState,
 *     updateLocalStream: setLocalStream,
 *     mediaDevices: navigator.mediaDevices,
 *     streamSuccessVideo: streamSuccessVideoFunction,
 *     disconnectSendTransportVideo: disconnectVideoTransportFunction,
 *     requestPermissionCamera: requestCameraPermissionFunction,
 *     checkPermission: checkPermissionFunction,
 *     getUpdatedAllParams: getUpdatedParamsFunction
 *   }
 * });
 * ```
 */
export declare const clickVideo: ({ parameters }: ClickVideoOptions) => Promise<void>;

export declare interface ClickVideoOptions {
    parameters: ClickVideoParameters;
}

export declare interface ClickVideoParameters extends DisconnectSendTransportVideoParameters, StreamSuccessVideoParameters {
    checkMediaPermission: boolean;
    hasCameraPermission: boolean;
    videoAlreadyOn: boolean;
    audioOnlyRoom: boolean;
    recordStarted: boolean;
    recordResumed: boolean;
    recordPaused: boolean;
    recordStopped: boolean;
    recordingMediaOptions: string;
    islevel: string;
    youAreCoHost: boolean;
    adminRestrictSetting: boolean;
    videoRequestState: string | null;
    videoRequestTime: number;
    member: string;
    socket: Socket;
    roomName: string;
    userDefaultVideoInputDevice: string;
    currentFacingMode: string;
    vidCons: VidCons;
    frameRate: number;
    videoAction: boolean;
    localStream: MediaStream | null;
    audioSetting: string;
    videoSetting: string;
    screenshareSetting: string;
    chatSetting: string;
    updateRequestIntervalSeconds: number;
    showAlert?: ShowAlert;
    updateVideoAlreadyOn: (value: boolean) => void;
    updateVideoRequestState: (state: string) => void;
    updateLocalStream: (stream: MediaStream | null) => void;
    mediaDevices: MediaDevices;
    streamSuccessVideo: StreamSuccessVideoType;
    disconnectSendTransportVideo: DisconnectSendTransportVideoType;
    requestPermissionCamera: RequestPermissionCameraType;
    checkPermission: CheckPermissionType;
    getUpdatedAllParams: () => ClickVideoParameters;
    [key: string]: any;
}

export declare type ClickVideoType = (options: ClickVideoOptions) => Promise<void>;

/**
 * Closes and resizes the video and audio elements based on the provided options.
 *
 * @param {CloseAndResizeOptions} options - The options for closing and resizing.
 * @param {string} options.producerId - The ID of the producer.
 * @param {string} options.kind - The kind of media (audio, video, screenshare, or screen).
 * @param {object} options.parameters - The parameters for the operation.
 * @param {function} options.parameters.getUpdatedAllParams - Function to get updated parameters.
 * @param {Array} options.parameters.allAudioStreams - Array of all audio streams.
 * @param {Array} options.parameters.allVideoStreams - Array of all video streams.
 * @param {Array} options.parameters.activeNames - Array of active participant names.
 * @param {Array} options.parameters.participants - Array of participants.
 * @param {Array} options.parameters.streamNames - Array of stream names.
 * @param {string} options.parameters.recordingDisplayType - Type of recording display.
 * @param {boolean} options.parameters.recordingVideoOptimized - Whether recording is video optimized.
 * @param {string} options.parameters.adminIDStream - ID of the admin stream.
 * @param {Array} options.parameters.newLimitedStreams - Array of new limited streams.
 * @param {Array} options.parameters.newLimitedStreamsIDs - Array of new limited stream IDs.
 * @param {Array} options.parameters.oldAllStreams - Array of old all streams.
 * @param {boolean} options.parameters.shareScreenStarted - Whether screen sharing has started.
 * @param {boolean} options.parameters.shared - Whether sharing is active.
 * @param {string} options.parameters.meetingDisplayType - Type of meeting display.
 * @param {boolean} options.parameters.defer_receive - Whether to defer receiving.
 * @param {boolean} options.parameters.lock_screen - Whether the screen is locked.
 * @param {boolean} options.parameters.firstAll - Whether it is the first all.
 * @param {boolean} options.parameters.first_round - Whether it is the first round.
 * @param {boolean} options.parameters.gotAllVids - Whether all videos are received.
 * @param {string} options.parameters.eventType - Type of event.
 * @param {string} options.parameters.hostLabel - Label of the host.
 * @param {boolean} options.parameters.shareEnded - Whether sharing has ended.
 * @param {boolean} options.parameters.updateMainWindow - Whether to update the main window.
 * @param {function} options.parameters.updateActiveNames - Function to update active names.
 * @param {function} options.parameters.updateAllAudioStreams - Function to update all audio streams.
 * @param {function} options.parameters.updateAllVideoStreams - Function to update all video streams.
 * @param {function} options.parameters.updateShareScreenStarted - Function to update share screen started status.
 * @param {function} options.parameters.updateUpdateMainWindow - Function to update main window status.
 * @param {function} options.parameters.updateNewLimitedStreams - Function to update new limited streams.
 * @param {function} options.parameters.updateOldAllStreams - Function to update old all streams.
 * @param {function} options.parameters.updateDefer_receive - Function to update defer receive status.
 * @param {function} options.parameters.updateMainHeightWidth - Function to update main height and width.
 * @param {function} options.parameters.updateShareEnded - Function to update share ended status.
 * @param {function} options.parameters.updateLock_screen - Function to update lock screen status.
 * @param {function} options.parameters.updateFirstAll - Function to update first all status.
 * @param {function} options.parameters.updateFirst_round - Function to update first round status.
 * @param {function} options.parameters.reorderStreams - Function to reorder streams.
 * @param {function} options.parameters.prepopulateUserMedia - Function to prepopulate user media.
 * @param {function} options.parameters.getVideos - Function to get videos.
 * @param {function} options.parameters.rePort - Function to report.
 *
 * @returns {Promise<void>} A promise that resolves when the operation is complete.
 *
 * @example
 * const options = {
 *   producerId: 'producerId',
 *   kind: 'video',
 *   parameters: {
 *     getUpdatedAllParams: getUpdatedAllParamsFunction,
 *     allAudioStreams: [],
 *     allVideoStreams: [],
 *     activeNames: [],
 *     participants: [],
 *     streamNames: [],
 *     recordingDisplayType: 'video',
 *     recordingVideoOptimized: true,
 *     adminIDStream: 'adminId',
 *     newLimitedStreams: [],
 *     newLimitedStreamsIDs: [],
 *     oldAllStreams: [],
 *     shareScreenStarted: false,
 *     shared: false,
 *     meetingDisplayType: 'video',
 *     defer_receive: false,
 *     lock_screen: false,
 *     firstAll: false,
 *     first_round: false,
 *     gotAllVids: false,
 *     eventType: 'conference',
 *     hostLabel: 'host',
 *     shareEnded: false,
 *     updateMainWindow: true,
 *     updateActiveNames: updateActiveNamesFunction,
 *     updateAllAudioStreams: updateAllAudioStreamsFunction,
 *     updateAllVideoStreams: updateAllVideoStreamsFunction,
 *     updateShareScreenStarted: updateShareScreenStartedFunction,
 *     updateUpdateMainWindow: updateUpdateMainWindowFunction,
 *     updateNewLimitedStreams: updateNewLimitedStreamsFunction,
 *     updateOldAllStreams: updateOldAllStreamsFunction,
 *     updateDefer_receive: updateDefer_receiveFunction,
 *     updateMainHeightWidth: updateMainHeightWidthFunction,
 *     updateShareEnded: updateShareEndedFunction,
 *     updateLock_screen: updateLock_screenFunction,
 *     updateFirstAll: updateFirstAllFunction,
 *     updateFirst_round: updateFirst_roundFunction,
 *     reorderStreams: reorderStreamsFunction,
 *     prepopulateUserMedia: prepopulateUserMediaFunction,
 *     getVideos: getVideosFunction,
 *     rePort: rePortFunction,
 *   },
 * };
 *
 * closeAndResize(options)
 *   .then(() => {
 *     console.log('Closed and resized successfully');
 *   });
 */
export declare const closeAndResize: ({ producerId, kind, parameters }: CloseAndResizeOptions) => Promise<void>;

export declare interface CloseAndResizeOptions {
    producerId: string;
    kind: string;
    parameters: CloseAndResizeParameters;
}

export declare interface CloseAndResizeParameters extends ReorderStreamsParameters, PrepopulateUserMediaParameters, RePortParameters {
    allAudioStreams: (Stream | Participant)[];
    allVideoStreams: (Stream | Participant)[];
    activeNames: string[];
    participants: Participant[];
    streamNames: Stream[];
    recordingDisplayType: "video" | "media" | "all";
    recordingVideoOptimized: boolean;
    adminIDStream?: string;
    newLimitedStreams: (Stream | Participant)[];
    newLimitedStreamsIDs: string[];
    oldAllStreams: (Stream | Participant)[];
    shareScreenStarted: boolean;
    shared: boolean;
    meetingDisplayType: string;
    defer_receive: boolean;
    lock_screen: boolean;
    firstAll: boolean;
    first_round: boolean;
    gotAllVids: boolean;
    eventType: EventType;
    hostLabel: string;
    shareEnded: boolean;
    updateMainWindow: boolean;
    updateActiveNames: (activeNames: string[]) => void;
    updateAllAudioStreams: (allAudioStreams: (Stream | Participant)[]) => void;
    updateShareScreenStarted: (shareScreenStarted: boolean) => void;
    updateUpdateMainWindow: (updateMainWindow: boolean) => void;
    updateNewLimitedStreams: (newLimitedStreams: (Stream | Participant)[]) => void;
    updateOldAllStreams: (oldAllStreams: (Stream | Participant)[]) => void;
    updateDefer_receive: (defer_receive: boolean) => void;
    updateMainHeightWidth: (heightWidth: number) => void;
    updateShareEnded: (shareEnded: boolean) => void;
    updateLock_screen: (lock_screen: boolean) => void;
    updateFirstAll: (firstAll: boolean) => void;
    updateFirst_round: (first_round: boolean) => void;
    reorderStreams: ReorderStreamsType;
    prepopulateUserMedia: PrepopulateUserMediaType;
    getVideos: GetVideosType;
    rePort: RePortType;
    getUpdatedAllParams: () => CloseAndResizeParameters;
    [key: string]: any;
}

export declare type CloseAndResizeType = (options: CloseAndResizeOptions) => Promise<void>;

export declare interface CoHostResponsibility {
    name: string;
    value: boolean;
    dedicated: boolean;
}

/**
 * Curated list of the most widely-supported language codes for real-time translation.
 * This set covers the languages supported by major STT/TTS/translation providers
 * (Google, Azure, Deepgram, OpenAI, DeepL, etc.) and is the default shown in UI pickers.
 * Use getSupportedLanguages() if you need the full extended list.
 */
export declare const COMMON_LANGUAGE_CODES: string[];

/**
 * Compares the current active names with the previous active names and triggers an action if there are changes.
 *
 * @param {CompareActiveNamesOptions} options - The options for comparing active names.
 * @param {boolean} [options.restart=false] - Whether to restart the comparison.
 * @param {CompareActiveNamesParameters} options.parameters - The parameters for the comparison.
 * @param {Function} options.parameters.getUpdatedAllParams - Function to get updated parameters.
 * @param {string[]} options.parameters.activeNames - The current active names.
 * @param {string[]} options.parameters.prevActiveNames - The previous active names.
 * @param {Function} options.parameters.updatePrevActiveNames - Function to update the previous active names.
 * @param {Function} options.parameters.trigger - Function to trigger an action when names change.
 *
 * @returns {Promise<void>} A promise that resolves when the comparison is complete.
 *
 * @throws Will log an error message if an error occurs during the comparison.
 *
 * @example
 * const options = {
 *   restart: false,
 *   parameters: {
 *     getUpdatedAllParams: getUpdatedAllParamsFunction,
 *     activeNames: ['name1', 'name2'],
 *     prevActiveNames: ['name1'],
 *     updatePrevActiveNames: updatePrevActiveNamesFunction,
 *     trigger: triggerFunction,
 *   },
 * };
 *
 * compareActiveNames(options)
 *   .then(() => {
 *     console.log('Active names compared successfully');
 *   });
 */
export declare function compareActiveNames({ restart, parameters, }: CompareActiveNamesOptions): Promise<void>;

export declare interface CompareActiveNamesOptions {
    restart?: boolean;
    parameters: CompareActiveNamesParameters;
}

export declare interface CompareActiveNamesParameters extends TriggerParameters {
    activeNames: string[];
    prevActiveNames: string[];
    updateActiveNames: (activeNames: string[]) => void;
    updatePrevActiveNames: (prevActiveNames: string[]) => void;
    trigger: TriggerType;
    getUpdatedAllParams: () => CompareActiveNamesParameters;
    [key: string]: any;
}

export declare type CompareActiveNamesType = (options: CompareActiveNamesOptions) => Promise<void>;

/**
 * Compares the current screen states with the previous screen states and triggers actions based on changes.
 *
 * @param {CompareScreenStatesOptions} options - The options for comparing screen states.
 * @param {boolean} [options.restart=false] - Whether to restart the comparison process.
 * @param {CompareScreenStatesParameters} options.parameters - The parameters for the comparison.
 * @param {Function} options.parameters.getUpdatedAllParams - Function to get updated parameters.
 * @param {string} options.parameters.recordingDisplayType - The type of display being recorded.
 * @param {boolean} options.parameters.recordingVideoOptimized - Whether the recording is optimized for video.
 * @param {Array<ScreenState>} options.parameters.screenStates - The current screen states.
 * @param {Array<ScreenState>} options.parameters.prevScreenStates - The previous screen states.
 * @param {Array<string>} options.parameters.activeNames - The active names in the current context.
 * @param {Function} options.parameters.trigger - Function to trigger actions based on changes.
 *
 * @returns {Promise<void>} A promise that resolves when the comparison and any triggered actions are complete.
 *
 * @throws Will log an error message if an error occurs during the comparison process.
 *
 * @example
 * const options = {
 *   restart: false,
 *   parameters: {
 *     getUpdatedAllParams: getUpdatedAllParamsFunction,
 *     recordingDisplayType: 'video',
 *     recordingVideoOptimized: true,
 *     screenStates: [{ key1: 'value1' }, { key2: 'value2' }],
 *     prevScreenStates: [{ key1: 'value1' }, { key2: 'value2' }],
 *     activeNames: ['name1', 'name2'],
 *     trigger: triggerFunction,
 *   },
 * };
 *
 * compareScreenStates(options)
 *   .then(() => {
 *     console.log('Screen states compared successfully');
 *   });
 */
export declare function compareScreenStates({ restart, parameters, }: CompareScreenStatesOptions): Promise<void>;

export declare interface CompareScreenStatesOptions {
    restart?: boolean;
    parameters: CompareScreenStatesParameters;
}

export declare interface CompareScreenStatesParameters extends TriggerParameters {
    recordingDisplayType: 'video' | 'media' | 'all';
    recordingVideoOptimized: boolean;
    screenStates: ScreenState[];
    prevScreenStates: ScreenState[];
    activeNames: string[];
    trigger: TriggerType;
    getUpdatedAllParams: () => CompareScreenStatesParameters;
    [key: string]: any;
}

export declare type CompareScreenStatesType = (options: CompareScreenStatesOptions) => Promise<void>;

export declare interface ComponentSizes {
    mainWidth: number;
    mainHeight: number;
    otherWidth: number;
    otherHeight: number;
}

/**
 * Confirms the exit of a member from a room and optionally bans them.
 *
 * @param {ConfirmExitOptions} options - The options for confirming the exit.
 * @param {Socket} options.socket - The socket instance to emit the event.
 * @param {Socket} [options.localSocket] - The local socket instance to emit the event.
 * @param {string} options.member - The member who is exiting.
 * @param {string} options.roomName - The name of the room the member is exiting from.
 * @param {boolean} [options.ban=false] - Whether to ban the member from the room.
 * @returns {Promise<void>} A promise that resolves when the exit is confirmed.
 *
 * @example
 * ```typescript
 * const options = {
 *   socket: socketInstance,
 *   localSocket: localSocketInstance,
 *   member: "JohnDoe",
 *   roomName: "Room123",
 *   ban: true,
 * };
 * await confirmExit(options);
 * ```
 */
export declare const confirmExit: ({ socket, localSocket, member, roomName, ban }: ConfirmExitOptions) => Promise<void>;

export declare interface ConfirmExitOptions {
    socket: Socket;
    localSocket?: Socket;
    member: string;
    roomName: string;
    ban?: boolean;
}

export declare type ConfirmExitType = (options: ConfirmExitOptions) => Promise<void>;

/**
 * Confirms the recording settings based on the provided parameters and updates the recording state.
 */
export declare const confirmRecording: ConfirmRecordingType;

export declare interface ConfirmRecordingOptions {
    parameters: ConfirmRecordingParameters;
}

export declare interface ConfirmRecordingParameters {
    showAlert?: ShowAlert;
    recordingMediaOptions: string;
    recordingAudioOptions: string;
    recordingVideoOptions: string;
    recordingVideoType: string;
    recordingDisplayType: 'video' | 'media' | 'all';
    recordingNameTags: boolean;
    recordingBackgroundColor: string;
    recordingNameTagsColor: string;
    recordingOrientationVideo: string;
    recordingAddHLS: boolean;
    recordingAddText: boolean;
    recordingCustomText: string;
    recordingCustomTextPosition: string;
    recordingCustomTextColor: string;
    meetingDisplayType: string;
    recordingVideoParticipantsFullRoomSupport: boolean;
    recordingAllParticipantsSupport: boolean;
    recordingVideoParticipantsSupport: boolean;
    recordingSupportForOtherOrientation: boolean;
    recordingPreferredOrientation: string;
    recordingMultiFormatsSupport: boolean;
    recordingVideoOptimized: boolean;
    recordingAllParticipantsFullRoomSupport: boolean;
    meetingVideoOptimized: boolean;
    eventType: EventType;
    breakOutRoomStarted: boolean;
    breakOutRoomEnded: boolean;
    updateRecordingDisplayType: (value: 'video' | 'media' | 'all') => void;
    updateRecordingVideoOptimized: (value: boolean) => void;
    updateUserRecordingParams: (params: UserRecordingParams) => void;
    updateConfirmedToRecord: (value: boolean) => void;
    getUpdatedAllParams: () => ConfirmRecordingParameters;
    [key: string]: any;
}

export declare type ConfirmRecordingType = (options: ConfirmRecordingOptions) => Promise<void>;

/**
 * Connects to remote IPs and manages socket connections.
 *
 * @param {ConnectIpsOptions} options - The options for connecting IPs.
 * @param {Record<string, any>[]} options.consume_sockets - The array of current socket connections.
 * @param {string[]} options.remIP - The list of remote IPs to connect to.
 * @param {string} options.apiUserName - The API username for authentication.
 * @param {string} [options.apiKey] - The API key for authentication.
 * @param {string} [options.apiToken] - The API token for authentication.
 * @param {Function} [options.newProducerMethod=newPipeProducer] - The method to handle new pipe producer events.
 * @param {Function} [options.closedProducerMethod=producerClosed] - The method to handle producer closed events.
 * @param {Function} [options.joinConsumeRoomMethod=joinConsumeRoom] - The method to handle joining a consuming room.
 * @param {ConnectIpsParameters} options.parameters - Additional parameters.
 * @param {string[]} options.parameters.roomRecvIPs - The list of IPs that have been received in the room.
 * @param {Function} options.parameters.updateRoomRecvIPs - The function to update the room received IPs.
 * @param {Function} options.parameters.updateConsume_sockets - The function to update the consume sockets.
 *
 * @returns {Promise<[Record<string, any>[], string[]]>} A promise that resolves to an array containing the updated consume sockets and room received IPs.
 *
 * @throws Will throw an error if required parameters are missing or if there is an issue connecting to a remote IP.
 *
 * @example
 * const options = {
 *   consume_sockets: [],
 *   remIP: ['ip1', 'ip2'],
 *   apiUserName: 'username',
 *   apiKey: 'apikey',
 *   apiToken: 'token',
 *   parameters: {
 *     roomRecvIPs: [],
 *     updateRoomRecvIPs: updateRoomRecvIPsFunction,
 *     updateConsume_sockets: updateConsumeSocketsFunction,
 *   },
 * };
 *
 * connectIps(options)
 *   .then(([consume_sockets, roomRecvIPs]) => {
 *     console.log('Connected IPs:', consume_sockets);
 *     console.log('Room received IPs:', roomRecvIPs);
 *   });
 */
export declare const connectIps: ({ consume_sockets, remIP, apiUserName, apiKey, apiToken, newProducerMethod, closedProducerMethod, joinConsumeRoomMethod, parameters, }: ConnectIpsOptions) => Promise<[Record<string, any>[], string[]]>;

export declare interface ConnectIpsLikeOptions<TParameters = unknown, TConsumeSocket = ConsumeSocket> {
    consume_sockets: TConsumeSocket[];
    remIP: string[];
    apiUserName: string;
    apiKey?: string;
    apiToken: string;
    parameters: TParameters;
}

export declare type ConnectIpsLikeType<TParameters = unknown, TConsumeSocket = ConsumeSocket> = (options: ConnectIpsLikeOptions<TParameters, TConsumeSocket>) => Promise<[unknown[], string[]]>;

export declare interface ConnectIpsOptions {
    consume_sockets: ConsumeSocket[];
    remIP: string[];
    apiUserName: string;
    apiKey?: string;
    apiToken: string;
    newProducerMethod?: NewPipeProducerType;
    closedProducerMethod?: ProducerClosedType;
    joinConsumeRoomMethod?: JoinConsumeRoomType;
    parameters: ConnectIpsParameters;
}

export declare interface ConnectIpsParameters extends ReorderStreamsParameters, JoinConsumeRoomParameters, ProducerClosedParameters, NewPipeProducerParameters {
    device: Device | null;
    roomRecvIPs: string[];
    updateRoomRecvIPs: (roomRecvIPs: string[]) => void;
    updateConsume_sockets: (consume_sockets: ConsumeSocket[]) => void;
    reorderStreams: ReorderStreamsType;
    getUpdatedAllParams: () => ConnectIpsParameters;
    [key: string]: any;
}

export declare type ConnectIpsType = (options: ConnectIpsOptions) => Promise<[Record<string, any>[], string[]]>;

/**
 * Connects to remote IPs and manages socket connections.
 *
 * @param {ConnectLocalIpsOptions} options - The options for connecting IPs.
 * @param {Socket} options.socket - The socket to connect to.
 * @param {Function} [options.newProducerMethod=newPipeProducer] - The method to handle new pipe producer events.
 * @param {Function} [options.closedProducerMethod=producerClosed] - The method to handle producer closed events.
 * @param {ConnectLocalIpsParameters} options.parameters - Additional parameters.
 * @param {Function} options.parameters.reorderStreams - The function to reorder streams.
 * @param {Function} options.parameters.getUpdatedAllParams - The function to get updated parameters.
 * @param {Socket} options.parameters.socket - The socket to connect to.
 *
 * @returns {Promise<void>} A promise that resolves when the connection is established.
 *
 * @throws Will throw an error if required parameters are missing or if there is an issue connecting to a remote IP.
 *
 * @example
 * ```typescript
 * const options = {
 *  socket,
 * newProducerMethod: newPipeProducer,
 * closedProducerMethod: producerClosed,
 * parameters: connectLocalIpsParameters,
 * };
 *
 * connectLocalIps(options)
 *  .then(() => {
 *   console.log('Connected to local IPs');
 * })
 * .catch(error => {
 *  console.error('Error connecting to local IPs:', error);
 * });
 * ```
 */
export declare const connectLocalIps: ({ socket, newProducerMethod, closedProducerMethod, parameters, }: ConnectLocalIpsOptions) => Promise<void>;

export declare interface ConnectLocalIpsOptions {
    socket: Socket;
    newProducerMethod?: NewPipeProducerType;
    closedProducerMethod?: ProducerClosedType;
    parameters: ConnectLocalIpsParameters;
}

export declare interface ConnectLocalIpsParameters extends ReorderStreamsParameters, ProducerClosedParameters, NewPipeProducerParameters, ReceiveAllPipedTransportsParameters {
    socket: Socket;
    reorderStreams: ReorderStreamsType;
    receiveAllPipedTransports: ReceiveAllPipedTransportsType;
    getUpdatedAllParams: () => ConnectLocalIpsParameters;
    [key: string]: any;
}

export declare type ConnectLocalIpsType = (options: ConnectLocalIpsOptions) => Promise<void>;

/**
 * Connects to a local media socket using the provided connection options.
 *
 * @param {ConnectLocalSocketOptions} options - The connection options.
 * @param {string} options.link - The socket link.
 *
 * @returns {Promise<ResponseLocalConnection>} A promise that resolves to the connected socket and data.
 *
 * @example
 * ```typescript
 * const options = {
 *   link: 'http://localhost:3000',
 * };
 *
 * try {
 *   const { socket, data } = await connectLocalSocket(options);
 *   console.log('Connected to socket:', socket, data);
 * } catch (error) {
 *   console.error('Failed to connect to socket:', error);
 * }
 * ```
 */
export declare function connectLocalSocket({ link }: ConnectLocalSocketOptions): Promise<ResponseLocalConnection>;

export declare interface ConnectLocalSocketOptions {
    link: string;
}

export declare type ConnectLocalSocketType = (options: ConnectLocalSocketOptions) => Promise<ResponseLocalConnection>;

/**
 * Connects the receiving transport to consume media from a remote producer.
 *
 * @param {ConnectRecvTransportOptions} options - The options for connecting the receiving transport.
 * @param {Transport} options.consumerTransport - The transport used for consuming media.
 * @param {string} options.remoteProducerId - The ID of the remote producer.
 * @param {string} options.serverConsumerTransportId - The ID of the server consumer transport.
 * @param {Socket} options.nsock - The socket used for communication.
 * @param {ConnectRecvTransportParameters} options.parameters - The parameters for the connection.
 *
 * @returns {Promise<void>} A promise that resolves when the connection is established.
 *
 * @throws Will throw an error if the connection or consumption fails.
 *
 * @example
 * ```typescript
 * const options = {
 *   consumerTransport,
 *   remoteProducerId: 'producer-id',
 *   serverConsumerTransportId: 'transport-id',
 *   nsock: socket,
 *   parameters: connectRecvTransportOptions,
 * };
 *
 * connectRecvTransport(options)
 *   .then(() => {
 *     console.log('Transport connected and consuming media');
 *   })
 *   .catch((error) => {
 *     console.error('Error connecting transport:', error);
 *   });
 * ```
 */
export declare const connectRecvTransport: ({ consumerTransport, remoteProducerId, serverConsumerTransportId, nsock, parameters, }: ConnectRecvTransportOptions) => Promise<void>;

export declare interface ConnectRecvTransportOptions {
    consumerTransport: Transport_2;
    remoteProducerId: string;
    serverConsumerTransportId: string;
    nsock: Socket;
    parameters: ConnectRecvTransportParameters;
}

export declare interface ConnectRecvTransportParameters extends ConsumerResumeParameters {
    device: Device | null;
    consumerTransports: Transport[];
    updateConsumerTransports: (transports: Transport[]) => void;
    speakerTranslationStates?: Map<string, SpeakerTranslationState>;
    consumerResume: ConsumerResumeType;
    getUpdatedAllParams: () => ConnectRecvTransportParameters;
    [key: string]: any;
}

export declare type ConnectRecvTransportType = (options: ConnectRecvTransportOptions) => Promise<void>;

/**
 * Connects the send transport based on the specified option.
 *
 * @param {ConnectSendTransportOptions} options - The options for connecting the send transport.
 * @param {string} options.option - The type of transport to connect ("audio", "video", "screen", or "all").
 * @param {boolean} options.targetOption - The target option to connect ("local", "remote", or "all").
 * @param {ConnectSendTransportParameters} options.parameters - The parameters required for connecting the transport.
 * @param {ProducerOptions} options.parameters.audioParams - The audio parameters.
 * @param {ProducerOptions} options.parameters.videoParams - The video parameters.
 * @param {MediaStream} options.parameters.localStreamScreen - The local screen stream.
 * @param {MediaStream} options.parameters.canvasStream - The canvas stream.
 * @param {boolean} options.parameters.whiteboardStarted - Indicates if the whiteboard has started.
 * @param {boolean} options.parameters.whiteboardEnded - Indicates if the whiteboard has ended.
 * @param {boolean} options.parameters.shared - Indicates if the screen is shared.
 * @param {string} options.parameters.islevel - The level of the screen sharing.
 * @param {Function} options.parameters.connectSendTransportAudio - Function to connect the audio send transport.
 * @param {Function} options.parameters.connectSendTransportVideo - Function to connect the video send transport.
 * @param {Function} options.parameters.connectSendTransportScreen - Function to connect the screen send transport.
 *
 * @returns {Promise<void>} A promise that resolves when the transport is connected.
 *
 * @throws Will throw an error if the connection fails.
 *
 * @example
 * const options = {
 *   option: 'audio',
 *   targetOption: 'local',
 *   parameters: {
 *     audioParams: audioProducerOptions,
 *     videoParams: videoProducerOptions,
 *     localStreamScreen: localStream,
 *     canvasStream: canvasStream,
 *     whiteboardStarted: false,
 *     whiteboardEnded: false,
 *     shared: false,
 *     islevel: '1',
 *     connectSendTransportAudio: connectAudioFunction,
 *     connectSendTransportVideo: connectVideoFunction,
 *     connectSendTransportScreen: connectScreenFunction,
 *   },
 * };
 *
 * connectSendTransport(options)
 *   .then(() => {
 *     console.log('Transport connected successfully');
 *   })
 *   .catch((error) => {
 *     console.error('Error connecting transport:', error);
 *   });
 */
export declare const connectSendTransport: ({ option, targetOption, parameters }: ConnectSendTransportOptions) => Promise<void>;

/**
 * Connects the send transport for audio by producing audio data and updating the audio producer and producer transport objects.
 *
 * If the primary connection fails, it attempts to connect using the local transport via a separate function.
 *
 * @param {ConnectSendTransportAudioOptions} options - The options for connecting the send transport.
 * @param {ProducerOptions} options.audioParams - The audio parameters.
 * @param {ConnectSendTransportAudioParameters} options.parameters - The parameters required for connecting the transport.
 * @param {Producer | null} options.parameters.audioProducer - The audio producer object.
 * @param {Transport | null} options.parameters.producerTransport - The producer transport object.
 * @param {Producer | null} [options.parameters.localAudioProducer] - The local audio producer object.
 * @param {Transport | null} [options.parameters.localProducerTransport] - The local producer transport object.
 * @param {(producer: Producer | null) => void} options.parameters.updateAudioProducer - The function to update the audio producer object.
 * @param {(transport: Transport | null) => void} options.parameters.updateProducerTransport - The function to update the producer transport object.
 * @param {(localProducer: Producer | null) => void} [options.parameters.updateLocalAudioProducer] - The function to update the local audio producer object.
 * @param {(localTransport: Transport | null) => void} [options.parameters.updateLocalProducerTransport] - The function to update the local producer transport object.
 * @param {(level: number) => void} [options.parameters.updateAudioLevel] - The function to update the audio level.
 * @returns {Promise<void>} A promise that resolves when the connection is established.
 *
 * @example
 * const options = {
 *   audioParams: { codec: "opus", maxBitrate: 128000 },
 *   parameters: {
 *     audioProducer: null,
 *     producerTransport: transport,
 *     localAudioProducer: null,
 *     localProducerTransport: localTransport,
 *     updateAudioProducer: (producer) => console.log("Updated producer:", producer),
 *     updateProducerTransport: (transport) => console.log("Updated transport:", transport),
 *     updateLocalAudioProducer: (localProducer) => console.log("Updated local producer:", localProducer),
 *     updateLocalProducerTransport: (localTransport) => console.log("Updated local transport:", localTransport),
 *     updateAudioLevel: (level) => console.log("Updated audio level:", level),
 *   },
 * };
 *
 * connectSendTransportAudio(options)
 *   .then(() => console.log("Audio transport connected successfully"))
 *   .catch((error) => console.error("Error connecting audio transport:", error));
 */
export declare const connectSendTransportAudio: ConnectSendTransportAudioType;

export declare interface ConnectSendTransportAudioOptions {
    audioParams: ProducerOptions;
    parameters: ConnectSendTransportAudioParameters;
    targetOption?: 'all' | 'local' | 'remote';
}

export declare interface ConnectSendTransportAudioParameters {
    audioProducer: Producer | null;
    producerTransport: Transport_2 | null;
    localAudioProducer?: Producer | null;
    localProducerTransport?: Transport_2 | null;
    updateAudioProducer: (producer: Producer | null) => void;
    updateProducerTransport: (transport: Transport_2 | null) => void;
    updateLocalAudioProducer?: (localProducer: Producer | null) => void;
    updateLocalProducerTransport?: (localTransport: Transport_2 | null) => void;
    updateAudioLevel: (level: number) => void;
    getUpdatedAllParams: () => ConnectSendTransportAudioParameters;
    [key: string]: any;
}

export declare type ConnectSendTransportAudioType = (options: ConnectSendTransportAudioOptions) => Promise<void>;

export declare interface ConnectSendTransportOptions {
    option: 'audio' | 'video' | 'screen' | 'all';
    targetOption?: 'local' | 'remote' | 'all';
    parameters: ConnectSendTransportParameters;
}

export declare interface ConnectSendTransportParameters extends ConnectSendTransportAudioParameters, ConnectSendTransportVideoParameters, ConnectSendTransportScreenParameters {
    audioParams: ProducerOptions;
    videoParams: ProducerOptions;
    localStreamScreen: MediaStream | null;
    canvasStream: MediaStream | null;
    whiteboardStarted: boolean;
    whiteboardEnded: boolean;
    shared: boolean;
    islevel: string;
    connectSendTransportAudio: ConnectSendTransportAudioType;
    connectSendTransportVideo: ConnectSendTransportVideoType;
    connectSendTransportScreen: ConnectSendTransportScreenType;
    getUpdatedAllParams: () => ConnectSendTransportParameters;
    [key: string]: any;
}

/**
 * Sets up and connects a screen sharing transport for sending video streams.
 *
 * This function supports both a primary and a local screen producer, delegating local handling to a separate function.
 *
 * @param {ConnectSendTransportScreenOptions} options - The configuration options for setting up the screen transport.
 * @param {"all" | "local" | "remote"} [options.targetOption] - The target option for connecting the transport.
 * @param {MediaStream} options.stream - The screen stream to be shared.
 * @param {ConnectSendTransportScreenParameters} options.parameters - The parameters required for setting up the screen transport.
 * @param {Producer | null} options.parameters.screenProducer - The screen producer object to be updated.
 * @param {Device | null} options.parameters.device - The device object for media capabilities.
 * @param {ProducerOptions} options.parameters.screenParams - The parameters for the screen producer.
 * @param {Transport | null} options.parameters.producerTransport - The producer transport object.
 * @param {ProducerOptions} options.parameters.params - The parameters for the producer.
 * @param {Function} options.parameters.updateScreenProducer - The function to update the screen producer object.
 * @param {Function} options.parameters.updateProducerTransport - The function to update the producer transport object.
 * @param {Function} [options.parameters.updateLocalScreenProducer] - The function to update the local screen producer object.
 * @param {Function} [options.parameters.updateLocalProducerTransport] - The function to update the local producer transport object.
 * @param {Function} options.parameters.getUpdatedAllParams - The function to get updated parameters.
 * @param {Object} [options.parameters.*] - Additional parameters for future use.
 *
 * @returns {Promise<void>} - A promise that resolves once the screen transport is successfully connected and set up.
 *
 * @throws Will throw an error if there is an issue with the connection or setup process.
 *
 * @example
 * ```typescript
 * await connectSendTransportScreen({
 *   stream: screenStream,
 *   targetOption: "all",
 *   parameters: {
 *     screenProducer: null,
 *     localScreenProducer: null,
 *     device: mediaDevice,
 *     screenParams: { encodings: [{ maxBitrate: 1500000 }] },
 *     producerTransport: sendTransport,
 *     localProducerTransport: localSendTransport,
 *     params: { track: screenStream.getVideoTracks()[0] },
 *     updateScreenProducer: setScreenProducer,
 *     updateLocalScreenProducer: setLocalScreenProducer,
 *     updateProducerTransport: setProducerTransport,
 *     updateLocalProducerTransport: setLocalProducerTransport,
 *     getUpdatedAllParams: getParams,
 *   },
 * });
 * ```
 */
export declare const connectSendTransportScreen: ConnectSendTransportScreenType;

export declare interface ConnectSendTransportScreenOptions {
    stream: MediaStream;
    parameters: ConnectSendTransportScreenParameters;
    targetOption?: "all" | "local" | "remote";
}

export declare interface ConnectSendTransportScreenParameters {
    screenProducer: Producer | null;
    localScreenProducer?: Producer | null;
    device: Device | null;
    screenParams: ProducerOptions;
    producerTransport: Transport_2 | null;
    localProducerTransport?: Transport_2 | null;
    params: ProducerOptions;
    updateScreenProducer: (producer: Producer | null) => void;
    updateLocalScreenProducer?: (localProducer: Producer | null) => void;
    updateProducerTransport: (transport: Transport_2 | null) => void;
    updateLocalProducerTransport?: (localTransport: Transport_2 | null) => void;
    getUpdatedAllParams: () => ConnectSendTransportScreenParameters;
    [key: string]: any;
}

export declare type ConnectSendTransportScreenType = (options: ConnectSendTransportScreenOptions) => Promise<void>;

export declare type ConnectSendTransportType = (options: ConnectSendTransportOptions) => Promise<void>;

/**
 * Connects the send transport for video by producing video data and updates the relevant states.
 *
 * This function supports both a primary and a local video producer, delegating local handling to a separate function.
 *
 * @param {ConnectSendTransportVideoOptions} options - The options for connecting the send transport for video.
 * @param {ProducerOptions} options.videoParams - The parameters for the video producer.
 * @param {"all" | "local" | "remote"} [options.targetOption] - The target option for the video transport connection.
 * @param {ConnectSendTransportVideoParameters} options.parameters - The parameters for the video transport connection.
 * @param {Producer | null} options.parameters.videoProducer - The primary video producer.
 * @param {Producer | null} [options.parameters.localVideoProducer] - The local video producer.
 * @param {Device | null} options.parameters.device - The device information.
 * @param {Transport | null} options.parameters.producerTransport - The primary producer transport.
 * @param {Transport | null} [options.parameters.localProducerTransport] - The local producer transport.
 * @param {string} options.parameters.islevel - The connection level for the video transport.
 * @param {boolean} options.parameters.updateMainWindow - The flag to update the main window state.
 * @param {(producer: Producer | null) => void} options.parameters.updateVideoProducer - The function to update the video producer state.
 * @param {(localProducer: Producer | null) => void} [options.parameters.updateLocalVideoProducer] - The function to update the local video producer state.
 * @param {(transport: Transport | null) => void} options.parameters.updateProducerTransport - The function to update the producer transport state.
 * @param {(localTransport: Transport | null) => void} [options.parameters.updateLocalProducerTransport] - The function to update the local producer transport state.
 * @param {(state: boolean) => void} options.parameters.updateUpdateMainWindow - The function to update the main window state.
 * @param {any} [options.parameters] - Additional parameters for future use.
 * @returns {Promise<void>} A promise that resolves when the send transport for video is connected.
 *
 * @throws Will throw an error if the connection fails.
 *
 * @example
 * const options = {
 *   videoParams: {
 *     // video producer options (e.g., codec, bitrate)
 *   },
 *   targetOption: "all",
 *   parameters: {
 *     videoProducer: null,
 *     localVideoProducer: null,
 *     producerTransport: transport,
 *     localProducerTransport: localTransport,
 *     islevel: '2',
 *     updateMainWindow: false,
 *     updateVideoProducer: (producer) => console.log("Updated producer"),
 *     updateLocalVideoProducer: (localProducer) => console.log("Updated local producer"),
 *     updateProducerTransport: (transport) => console.log("Updated transport"),
 *     updateLocalProducerTransport: (localTransport) => console.log("Updated local transport"),
 *     updateUpdateMainWindow: (state) => console.log("Updated main window:", state),
 *   },
 * };
 *
 * connectSendTransportVideo(options)
 *   .then(() => console.log("Video transport connected successfully"))
 *   .catch((error) => console.error("Error connecting video transport:", error));
 */
export declare const connectSendTransportVideo: ConnectSendTransportVideoType;

export declare interface ConnectSendTransportVideoOptions {
    videoParams: ProducerOptions;
    parameters: ConnectSendTransportVideoParameters;
    targetOption?: "all" | "local" | "remote";
}

export declare interface ConnectSendTransportVideoParameters {
    videoProducer: Producer | null;
    localVideoProducer?: Producer | null;
    device: Device | null;
    producerTransport: Transport_2 | null;
    localProducerTransport?: Transport_2 | null;
    islevel: string;
    updateMainWindow: boolean;
    updateVideoProducer: (producer: Producer | null) => void;
    updateLocalVideoProducer?: (localProducer: Producer | null) => void;
    updateProducerTransport: (transport: Transport_2 | null) => void;
    updateLocalProducerTransport?: (localTransport: Transport_2 | null) => void;
    updateUpdateMainWindow: (state: boolean) => void;
    [key: string]: any;
}

export declare type ConnectSendTransportVideoType = (options: ConnectSendTransportVideoOptions) => Promise<void>;

/**
 * Connects to a media socket using the provided connection options.
 *
 * @param {ConnectSocketOptions} options - The connection options.
 * @param {string} options.apiUserName - The API username.
 * @param {string} [options.apiKey] - The API key (optional if apiToken is provided).
 * @param {string} [options.apiToken] - The API token (optional if apiKey is provided).
 * @param {string} options.link - The socket link.
 *
 * @returns {Promise<Socket>} A promise that resolves to the connected socket.
 *
 * @example
 * ```typescript
 * const options = {
 *   apiUserName: 'user123',
 *   apiKey: 'yourApiKeyHere',
 *   link: 'https://socketlink.com',
 * };
 *
 * try {
 *   const socket = await connectSocket(options);
 *   console.log('Connected to socket:', socket);
 * } catch (error) {
 *   console.error('Failed to connect to socket:', error);
 * }
 * ```
 */
export declare function connectSocket({ apiUserName, apiKey, apiToken, link }: ConnectSocketOptions): Promise<Socket>;

export declare interface ConnectSocketOptions {
    apiUserName: string;
    apiKey?: string;
    apiToken?: string;
    link: string;
}

export declare type ConnectSocketType = (options: ConnectSocketOptions) => Promise<Socket>;

declare interface ConsumerLike {
    paused?: boolean;
    kind?: string;
    pause: () => unknown;
    resume: () => unknown;
}

declare interface ConsumerLike_2 {
    paused?: boolean;
    kind?: string;
    pause: () => unknown;
    resume: () => unknown;
}

declare interface ConsumerLike_3 {
    kind?: string;
    resume: () => unknown;
}

export declare const consumerResume: ConsumerResumeType;

export declare interface ConsumerResumeOptions {
    track: MediaStreamTrack;
    kind: string;
    remoteProducerId: string;
    params: any;
    parameters: ConsumerResumeParameters;
    nsock: Socket;
    consumer?: any;
}

export declare interface ConsumerResumeParameters {
    [key: string]: any;
}

export declare type ConsumerResumeType = (options: ConsumerResumeOptions) => Promise<void>;

export declare interface ConsumeSocket {
    [ip: string]: Socket;
}

/**
 * Controls the media of a participant in a media session if certain conditions are met.
 *
 * @param {ControlMediaOptions} options - The options for controlling media.
 * @param {string} options.participantId - The ID of the participant to control.
 * @param {string} options.participantName - The name of the participant to control.
 * @param {'audio' | 'video' | 'screenshare' | 'all'} options.type - The type of media to control.
 * @param {Socket} options.socket - The socket instance for communication.
 * @param {Array<CoHostResponsibility>} options.coHostResponsibility - List of co-host responsibilities.
 * @param {Array<Participant>} options.participants - List of participants in the session.
 * @param {string} options.member - The current member attempting to control media.
 * @param {string} options.islevel - The level of the current member.
 * @param {Function} [options.showAlert] - Optional function to show alerts.
 * @param {string} options.coHost - The co-host information.
 * @param {string} options.roomName - The name of the room.
 *
 * @returns {Promise<void>} A promise that resolves when the media control operation is complete.
 *
 * @throws Will log an error message if there are issues controlling the media or if participant is not found.
 *
 * @example
 * const options = {
 *   participantId: '1234',
 *   participantName: 'John Doe',
 *   type: 'audio',
 *   socket: socketInstance,
 *   coHostResponsibility: [{ name: 'media', value: true }],
 *   participants: participantList,
 *   member: 'Admin',
 *   islevel: '1',
 *   showAlert: (alert) => console.log(alert.message),
 *   coHost: 'CoHostName',
 *   roomName: 'Room 1',
 * };
 *
 * controlMedia(options)
 *   .then(() => {
 *     console.log('Media control operation completed successfully.');
 *   })
 *   .catch((error) => {
 *     console.error('Error controlling media:', error);
 *   });
 */
export declare function controlMedia({ participantId, participantName, type, socket, coHostResponsibility, participants, member, islevel, showAlert, coHost, roomName, }: ControlMediaOptions_2): Promise<void>;

export declare interface ControlMediaData {
    type: 'audio' | 'video';
    action: 'mute' | 'unmute';
    reason?: string;
}

/**
 * Applies host-enforced media restrictions across local audio, video, screenshare, and chat state.
 *
 * @param {ControlMediaHostOptions} options - Restriction type and shared transport/screen callbacks.
 * @returns {Promise<void>} Resolves once the requested host restriction is applied.
 *
 * @example
 * ```typescript
 * await controlMediaHost({
 *   type: 'video',
 *   parameters,
 * });
 * ```
 */
export declare const controlMediaHost: <TOnScreenChangesParameters = unknown, TStopShareScreenParameters = unknown, TDisconnectSendTransportVideoParameters = unknown, TDisconnectSendTransportAudioParameters = unknown, TDisconnectSendTransportScreenParameters = unknown, TAllParameters extends TOnScreenChangesParameters & TStopShareScreenParameters & TDisconnectSendTransportVideoParameters & TDisconnectSendTransportAudioParameters & TDisconnectSendTransportScreenParameters = TOnScreenChangesParameters & TStopShareScreenParameters & TDisconnectSendTransportVideoParameters & TDisconnectSendTransportAudioParameters & TDisconnectSendTransportScreenParameters, TMediaStream extends ControlMediaHostMediaStreamLike = MediaStream>({ type, parameters, }: ControlMediaHostOptions<TOnScreenChangesParameters, TStopShareScreenParameters, TDisconnectSendTransportVideoParameters, TDisconnectSendTransportAudioParameters, TDisconnectSendTransportScreenParameters, TAllParameters, TMediaStream>) => Promise<void>;

export declare interface ControlMediaHostData {
    type: 'all' | 'audio' | 'video' | 'screenshare';
}

export declare type ControlMediaHostDisconnectSendTransportAudioType<TParameters = unknown> = (options: ControlMediaHostNestedOptions<TParameters>) => Promise<void>;

export declare type ControlMediaHostDisconnectSendTransportScreenType<TParameters = unknown> = (options: ControlMediaHostNestedOptions<TParameters>) => Promise<void>;

export declare type ControlMediaHostDisconnectSendTransportVideoType<TParameters = unknown> = (options: ControlMediaHostNestedOptions<TParameters>) => Promise<void>;

export declare interface ControlMediaHostMediaStreamLike {
    getAudioTracks?: () => ControlMediaHostTrackLike[];
    getVideoTracks?: () => ControlMediaHostTrackLike[];
    tracks?: ControlMediaHostTrackLike[];
    [key: string]: any;
}

export declare interface ControlMediaHostNestedOptions<TParameters = unknown> {
    parameters: TParameters;
}

export declare interface ControlMediaHostOnScreenChangesOptions<TParameters = unknown> extends ControlMediaHostNestedOptions<TParameters> {
    changed?: boolean;
}

export declare type ControlMediaHostOnScreenChangesType<TParameters = unknown> = (options: ControlMediaHostOnScreenChangesOptions<TParameters>) => Promise<void>;

export declare interface ControlMediaHostOptions<TOnScreenChangesParameters = unknown, TStopShareScreenParameters = unknown, TDisconnectSendTransportVideoParameters = unknown, TDisconnectSendTransportAudioParameters = unknown, TDisconnectSendTransportScreenParameters = unknown, TAllParameters extends TOnScreenChangesParameters & TStopShareScreenParameters & TDisconnectSendTransportVideoParameters & TDisconnectSendTransportAudioParameters & TDisconnectSendTransportScreenParameters = TOnScreenChangesParameters & TStopShareScreenParameters & TDisconnectSendTransportVideoParameters & TDisconnectSendTransportAudioParameters & TDisconnectSendTransportScreenParameters, TMediaStream extends ControlMediaHostMediaStreamLike = MediaStream> {
    type: 'audio' | 'video' | 'screenshare' | 'chat' | 'all';
    parameters: ControlMediaHostParameters<TOnScreenChangesParameters, TStopShareScreenParameters, TDisconnectSendTransportVideoParameters, TDisconnectSendTransportAudioParameters, TDisconnectSendTransportScreenParameters, TAllParameters, TMediaStream> & TAllParameters;
}

export declare interface ControlMediaHostParameters<TOnScreenChangesParameters = unknown, TStopShareScreenParameters = unknown, TDisconnectSendTransportVideoParameters = unknown, TDisconnectSendTransportAudioParameters = unknown, TDisconnectSendTransportScreenParameters = unknown, TAllParameters extends TOnScreenChangesParameters & TStopShareScreenParameters & TDisconnectSendTransportVideoParameters & TDisconnectSendTransportAudioParameters & TDisconnectSendTransportScreenParameters = TOnScreenChangesParameters & TStopShareScreenParameters & TDisconnectSendTransportVideoParameters & TDisconnectSendTransportAudioParameters & TDisconnectSendTransportScreenParameters, TMediaStream extends ControlMediaHostMediaStreamLike = MediaStream> {
    updateAdminRestrictSetting: (value: boolean) => void;
    localStream: TMediaStream | null;
    updateLocalStream: (stream: TMediaStream | null) => void;
    updateAudioAlreadyOn: (value: boolean) => void;
    localStreamScreen: TMediaStream | null;
    updateLocalStreamScreen: (stream: TMediaStream | null) => void;
    localStreamVideo: TMediaStream | null;
    updateLocalStreamVideo: (stream: TMediaStream | null) => void;
    updateScreenAlreadyOn: (value: boolean) => void;
    updateVideoAlreadyOn: (value: boolean) => void;
    updateChatAlreadyOn: (value: boolean) => void;
    onScreenChanges: ControlMediaHostOnScreenChangesType<TOnScreenChangesParameters>;
    stopShareScreen: ControlMediaHostStopShareScreenType<TStopShareScreenParameters>;
    disconnectSendTransportVideo: ControlMediaHostDisconnectSendTransportVideoType<TDisconnectSendTransportVideoParameters>;
    disconnectSendTransportAudio: ControlMediaHostDisconnectSendTransportAudioType<TDisconnectSendTransportAudioParameters>;
    disconnectSendTransportScreen: ControlMediaHostDisconnectSendTransportScreenType<TDisconnectSendTransportScreenParameters>;
    getUpdatedAllParams: () => ControlMediaHostParameters<TOnScreenChangesParameters, TStopShareScreenParameters, TDisconnectSendTransportVideoParameters, TDisconnectSendTransportAudioParameters, TDisconnectSendTransportScreenParameters, TAllParameters, TMediaStream> & TAllParameters;
    [key: string]: any;
}

export declare type ControlMediaHostStopShareScreenType<TParameters = unknown> = (options: ControlMediaHostNestedOptions<TParameters>) => Promise<void>;

export declare interface ControlMediaHostTrackLike {
    enabled: boolean;
    kind?: string;
}

export declare type ControlMediaHostType<TOnScreenChangesParameters = unknown, TStopShareScreenParameters = unknown, TDisconnectSendTransportVideoParameters = unknown, TDisconnectSendTransportAudioParameters = unknown, TDisconnectSendTransportScreenParameters = unknown, TAllParameters extends TOnScreenChangesParameters & TStopShareScreenParameters & TDisconnectSendTransportVideoParameters & TDisconnectSendTransportAudioParameters & TDisconnectSendTransportScreenParameters = TOnScreenChangesParameters & TStopShareScreenParameters & TDisconnectSendTransportVideoParameters & TDisconnectSendTransportAudioParameters & TDisconnectSendTransportScreenParameters, TMediaStream extends ControlMediaHostMediaStreamLike = MediaStream> = (options: ControlMediaHostOptions<TOnScreenChangesParameters, TStopShareScreenParameters, TDisconnectSendTransportVideoParameters, TDisconnectSendTransportAudioParameters, TDisconnectSendTransportScreenParameters, TAllParameters, TMediaStream>) => Promise<void>;

declare interface ControlMediaOptions {
    data: ControlMediaData;
    showAlert?: ShowAlert;
    clickAudio?: () => void;
    clickVideo?: () => void;
    audioAlreadyOn?: boolean;
    videoAlreadyOn?: boolean;
}
export { ControlMediaOptions }
export { ControlMediaOptions as PanelistControlMediaOptions }

declare interface ControlMediaOptions_2 {
    participantId: string;
    participantName: string;
    type: 'audio' | 'video' | 'screenshare' | 'all';
    socket: Socket;
    coHostResponsibility: CoHostResponsibility[];
    participants: Participant[];
    member: string;
    islevel: string;
    showAlert?: ShowAlert;
    coHost: string;
    roomName: string;
}

declare type ControlMediaType = (options: ControlMediaOptions) => Promise<void>;
export { ControlMediaType }
export { ControlMediaType as PanelistControlMediaType }

export declare type ControlsPosition = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';

/**
 * Creates a mediasoup client device with the provided RTP capabilities.
 *
 * @param {CreateDeviceClientOptions} options - The options for creating the device client.
 * @param {RTPCapabilities} options.rtpCapabilities - The RTP capabilities required for the device.
 * @returns {Promise<Device | null>} A promise that resolves to the created Device or null if creation fails.
 * @throws {Error} Throws an error if the required parameters are not provided or if device creation is not supported.
 *
 * @example
 * const device = await createDeviceClient({ rtpCapabilities });
 * if (device) {
 *   console.log("Device created successfully");
 * } else {
 *   console.log("Failed to create device");
 * }
 */
export declare const createDeviceClient: ({ rtpCapabilities }: CreateDeviceClientOptions) => Promise<Device | null>;

export declare interface CreateDeviceClientOptions {
    rtpCapabilities: RtpCapabilities | null;
}

export declare type CreateDeviceClientType = (options: CreateDeviceClientOptions) => Promise<Device | null>;

/**
 * Response from creating/joining a local room
 */
export declare interface CreateJoinLocalRoomResponse {
    success: boolean;
    secret: string;
    reason?: string;
    url?: string;
}

export declare interface CreateJoinRoomError {
    error: string;
    success?: boolean;
}

declare interface CreateJoinRoomError_2 {
    error: string;
    success?: boolean;
}

export declare interface CreateJoinRoomResponse {
    message: string;
    roomName: string;
    secureCode?: string;
    publicURL: string;
    link: string;
    secret: string;
    success: boolean;
}

declare interface CreateJoinRoomResponse_2 {
    message: string;
    roomName: string;
    secureCode?: string;
    publicURL: string;
    link: string;
    secret: string;
    success: boolean;
}

export declare interface CreateJoinRoomResult {
    data: CreateJoinRoomResponse_2 | CreateJoinRoomError_2 | null;
    success: boolean;
}

export declare type CreateJoinRoomType = (options: {
    payload: CreateMediaSFURoomOptions | JoinMediaSFURoomOptions;
    apiUserName: string;
    apiKey: string;
    localLink?: string;
}) => Promise<{
    data: CreateJoinRoomResponse | CreateJoinRoomError | null;
    success: boolean;
}>;

export declare const createLiveSubtitle: (params: {
    text: string;
    language: string;
    speakerId: string;
    speakerName?: string;
    timestamp?: number;
}) => LiveSubtitle;

/**
 * Options for creating a local room
 */
export declare interface CreateLocalRoomOptions {
    createData: CreateLocalRoomParameters;
    link?: string;
}

/**
 * Parameters for creating a local room
 */
export declare interface CreateLocalRoomParameters {
    eventID: string;
    duration: number;
    capacity: number;
    userName: string;
    scheduledDate: Date;
    secureCode: string;
    waitRoom?: boolean;
    recordingParams?: RecordingParams;
    eventRoomParams?: MeetingRoomParams;
    videoPreference?: string | null;
    audioPreference?: string | null;
    audioOutputPreference?: string | null;
    mediasfuURL?: string;
}

export declare interface CreateMediaSFURoomOptions {
    action: 'create';
    duration: number;
    capacity: number;
    userName: string;
    scheduledDate?: number;
    secureCode?: string;
    eventType?: 'conference' | 'webinar' | 'chat' | 'broadcast';
    meetingRoomParams?: MeetingRoomParams;
    recordingParams?: RecordingParams;
    recordOnly?: boolean;
    safeRoom?: boolean;
    autoStartSafeRoom?: boolean;
    safeRoomAction?: 'warn' | 'kick' | 'ban';
    dataBuffer?: boolean;
    bufferType?: 'images' | 'audio' | 'all';
    supportSIP?: boolean;
    directionSIP?: 'inbound' | 'outbound' | 'both';
    preferPCMA?: boolean;
}

/**
 * Converts a local-room join response into the broader MediaSFU join response shape.
 *
 * This helper is useful when local/demo or self-hosted room flows need to be
 * normalized to the same response contract consumed by the main runtime.
 *
 * @param options Response conversion options.
 * @returns A normalized `ResponseJoinRoom` object.
 *
 * @example
 * ```typescript
 * const normalized = await createResponseJoinRoom({ localRoom });
 * if (normalized.success) {
 *   console.log(normalized.meetingRoomParams);
 * }
 * ```
 */
export declare const createResponseJoinRoom: CreateResponseJoinRoomType;

export declare interface CreateResponseJoinRoomOptions {
    localRoom: ResponseJoinLocalRoom;
}

export declare type CreateResponseJoinRoomType = (options: CreateResponseJoinRoomOptions) => Promise<ResponseJoinRoom>;

/**
 * Calls the MediaSFU create-room API and guards against duplicate in-flight room requests.
 *
 * A short-lived `localStorage` marker is used to prevent accidental duplicate
 * submissions while a room create request is still pending.
 *
 * @param options API request options including credentials and create payload.
 * @returns A result object containing either parsed response data or an error payload.
 *
 * @example
 * ```typescript
 * const created = await createRoomOnMediaSFU({
 *   payload: {
 *     action: 'create',
 *     userName: 'Ada',
 *     duration: 60,
 *     capacity: 10,
 *   } as CreateMediaSFURoomOptions,
 *   apiUserName: 'sampleuser',
 *   apiKey: '0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef',
 * });
 *
 * console.log(created.success);
 * ```
 */
export declare const createRoomOnMediaSFU: CreateRoomOnMediaSFUType;

export declare interface CreateRoomOnMediaSFUOptions {
    payload: CreateMediaSFURoomOptions;
    apiUserName: string;
    apiKey: string;
    localLink?: string;
    pendingRequestStorage?: PendingRequestStorage;
}

export declare type CreateRoomOnMediaSFUType = (options: CreateRoomOnMediaSFUOptions) => Promise<CreateJoinRoomResult>;

export declare interface CreateRoomOptions {
    action: 'create' | 'join';
    meetingID: string;
    duration: number;
    capacity: number;
    userName: string;
    scheduledDate: number;
    secureCode: string;
    eventType: 'conference' | 'webinar' | 'chat' | 'broadcast';
    recordOnly: boolean;
    eventStatus: 'active' | 'inactive';
    startIndex: number;
    pageSize: number;
    safeRoom: boolean;
    autoStartSafeRoom: boolean;
    safeRoomAction: 'warn' | 'kick' | 'ban';
    dataBuffer: boolean;
    bufferType: 'images' | 'audio' | 'all';
    supportSIP: boolean;
    directionSIP: 'inbound' | 'outbound' | 'both';
    preferPCMA: boolean;
}

/**
 * Creates a WebRTC send transport and sets up event handlers for the transport.
 *
 * Supports both primary and local transports with modular handling.
 *
 * @param {CreateSendTransportOptions} options - The options for creating the send transport.
 * @param {string} options.option - The type of transport to create.
 * @param {CreateSendTransportParameters} options.parameters - The parameters required for creating the transport.
 * @param {string} options.parameters.islevel - The level of the transport.
 * @param {string} options.parameters.member - The member name for the transport.
 * @param {Socket} options.parameters.socket - The primary socket instance.
 * @param {Device} options.parameters.device - The device instance.
 * @param {Transport | null} options.parameters.producerTransport - The primary producer transport object.
 * @param {boolean} options.parameters.transportCreated - The state of the primary transport creation.
 * @param {(transport: Transport | null) => void} options.parameters.updateProducerTransport - The function to update the primary transport object.
 * @param {(state: boolean) => void} options.parameters.updateTransportCreated - The function to update the primary transport creation state.
 * @param {Function} options.parameters.connectSendTransport - The function to connect the send transport.
 * @param {Function} options.parameters.getUpdatedAllParams - The function to get updated parameters.
 * @param {Socket} [options.parameters.localSocket] - The local socket instance.
 * @param {Transport | null} [options.parameters.localProducerTransport] - The local producer transport object.
 * @param {boolean} [options.parameters.localTransportCreated] - The state of the local transport creation.
 * @param {(localTransport: Transport | null) => void} [options.parameters.updateLocalProducerTransport] - The function to update the local transport object.
 * @param {(state: boolean) => void} [options.parameters.updateLocalTransportCreated] - The function to update the local transport creation state.
 * @returns {Promise<void>} A promise that resolves when the send transport is created and configured.
 *
 * @throws Will throw an error if there is an issue creating the send transport.
 *
 * @example
 * const options = {
 *   option: 'video',
 *   parameters: {
 *     islevel: '1',
 *     member: 'John Doe',
 *     socket: socketInstance,
 *     localSocket: localSocketInstance,
 *     device: deviceInstance,
 *     producerTransport: null,
 *     localProducerTransport: null,
 *     transportCreated: false,
 *     localTransportCreated: false,
 *     updateProducerTransport: (transport) => console.log('Primary transport updated:', transport),
 *     updateLocalProducerTransport: (transport) => console.log('Local transport updated:', transport),
 *     updateTransportCreated: (state) => console.log('Primary transport created:', state),
 *     updateLocalTransportCreated: (state) => console.log('Local transport created:', state),
 *   },
 * };
 *
 * createSendTransport(options)
 *   .then(() => console.log('Send transport created successfully'))
 *   .catch((error) => console.error('Error creating send transport:', error));
 */
export declare const createSendTransport: CreateSendTransportType;

export declare interface CreateSendTransportOptions {
    option: "audio" | "video" | "screen" | "all";
    parameters: CreateSendTransportParameters;
}

export declare interface CreateSendTransportParameters extends ConnectSendTransportParameters {
    islevel: string;
    member: string;
    socket: Socket;
    localSocket?: Socket;
    device: Device | null;
    producerTransport: Transport_2 | null;
    localProducerTransport?: Transport_2 | null;
    transportCreated: boolean;
    localTransportCreated?: boolean;
    updateProducerTransport: (producerTransport: Transport_2 | null) => void;
    updateLocalProducerTransport?: (localTransport: Transport_2 | null) => void;
    updateTransportCreated: (transportCreated: boolean) => void;
    updateLocalTransportCreated?: (localTransportCreated: boolean) => void;
    connectSendTransport: ConnectSendTransportType;
    getUpdatedAllParams: () => CreateSendTransportParameters;
    [key: string]: any;
}

export declare type CreateSendTransportType = (options: CreateSendTransportOptions) => Promise<void>;

export declare type CreateWebRTCTransportResponse = {
    id: string;
    dtlsParameters: DtlsParameters;
    iceCandidates: IceCandidate[];
    iceParameters: IceParameters;
    error?: string;
};

export declare interface Credentials {
    apiUserName: string;
    apiKey: string;
}

export declare interface CustomAudioCardOptions {
    name: string;
    barColor: boolean;
    textColor: string;
    imageSource: string;
    roundedImage: boolean;
    imageStyle?: StyleDictionary;
    parameters?: any;
}

export declare interface CustomButton<TIcon = unknown, TElement = unknown> {
    action: () => void;
    show: boolean;
    backgroundColor?: string;
    disabled?: boolean;
    icon?: TIcon;
    iconStyle?: Record<string, any>;
    text?: string;
    textStyle?: Record<string, any>;
    customComponent?: TElement;
}

export declare interface CustomButtonsOptions<TIcon = unknown, TElement = unknown> {
    buttons: CustomButton<TIcon, TElement>[];
}

export declare interface CustomMiniCardOptions {
    initials: string;
    fontSize: string;
    customStyle?: boolean;
    name: string;
    showVideoIcon: boolean;
    showAudioIcon: boolean;
    imageSource: string;
    roundedImage: boolean;
    imageStyle?: StyleDictionary;
    parameters?: any;
}

export declare interface CustomPreJoinPageOptions {
    localLink?: string;
    connectMediaSFU?: boolean;
    parameters: any;
    credentials?: {
        apiUserName: string;
        apiKey: string;
    };
    returnUI?: boolean;
    noUIPreJoinOptions?: CreateMediaSFURoomOptions | JoinMediaSFURoomOptions;
    createMediaSFURoom?: any;
    joinMediaSFURoom?: any;
}

export declare type CustomRenderer<Result, Options> = (options: Options) => Result;

export declare interface CustomVideoCardOptions {
    participant: Participant;
    stream: MediaStream | null;
    width: number;
    height: number;
    imageSize?: number;
    doMirror?: string;
    showControls?: boolean;
    showInfo?: boolean;
    name?: string;
    backgroundColor?: string;
    onVideoPress?: () => void;
    parameters?: any;
}

export declare interface DataBufferNotice {
    state: string;
}

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
export declare const disconnect: ({ showAlert, redirectURL, onWeb, }: DisconnectOptions) => Promise<void>;

export declare interface DisconnectOptions {
    showAlert?: ShowAlert;
    redirectURL?: string;
    onWeb: boolean;
    updateValidated?: (isValidated: boolean) => void;
}

/**
 * Disconnects the send transport for audio by pausing the audio producer and updating the UI accordingly.
 *
 * This function supports both a primary and a local audio producer, delegating local handling to a separate function.
 *
 * @param {DisconnectSendTransportAudioOptions} options - The options for disconnecting the send transport for audio.
 * @param {DisconnectSendTransportAudioParameters} options.parameters - The parameters for disconnecting the send transport for audio.
 * @param {Producer} options.parameters.audioProducer - The primary audio producer to disconnect.
 * @param {Producer} [options.parameters.localAudioProducer] - The local audio producer to disconnect.
 * @param {Socket} options.parameters.socket - The socket instance to use for communication.
 * @param {Socket} [options.parameters.localSocket] - The local socket instance to use for communication.
 * @param {boolean} options.parameters.videoAlreadyOn - Flag indicating if video is already on.
 * @param {string} options.parameters.islevel - The level of the user.
 * @param {boolean} options.parameters.lock_screen - Flag indicating if the screen is locked.
 * @param {boolean} options.parameters.shared - Flag indicating if the screen is shared.
 * @param {boolean} options.parameters.updateMainWindow - Flag to update the main window.
 * @param {string} options.parameters.hostLabel - The label for the host user.
 * @param {string} options.parameters.roomName - The name of the room.
 * @param {function} options.parameters.updateAudioProducer - Function to update the audio producer.
 * @param {function} [options.parameters.updateLocalAudioProducer] - Function to update the local audio producer (optional).
 * @param {function} options.parameters.updateUpdateMainWindow - Function to update the main window state.
 * @param {function} options.parameters.prepopulateUserMedia - Function to prepopulate user media.
 * @param {object} options.parameters - The parameters required for disconnecting the send transport for audio.
 * @returns {Promise<void>} A promise that resolves when the send transport for audio is disconnected.
 *
 * @throws Will throw an error if the operation fails.
 *
 * @example
 * const options = {
 *   parameters: {
 *     audioProducer: audioProducerInstance,
 *     localAudioProducer: localAudioProducerInstance,
 *     socket: socketInstance,
 *     localSocket: localSocketInstance,
 *     videoAlreadyOn: false,
 *     islevel: '1',
 *     lock_screen: false,
 *     shared: false,
 *     updateMainWindow: true,
 *     hostLabel: 'Host',
 *     roomName: 'Room 1',
 *     updateAudioProducer: (producer) => console.log('Updated audio producer:', producer),
 *     updateLocalAudioProducer: (producer) => console.log('Updated local audio producer:', producer),
 *     updateUpdateMainWindow: (state) => console.log('Main window state updated:', state),
 *     prepopulateUserMedia: async ({ name, parameters }) => console.log('Prepopulating user media for', name),
 *   },
 * };
 *
 * disconnectSendTransportAudio(options)
 *   .then(() => console.log("Audio send transport disconnected successfully"))
 *   .catch((error) => console.log("Error disconnecting audio send transport:", error));
 */
export declare const disconnectSendTransportAudio: DisconnectSendTransportAudioType;

export declare interface DisconnectSendTransportAudioOptions {
    parameters: DisconnectSendTransportAudioParameters;
}

export declare interface DisconnectSendTransportAudioParameters extends PrepopulateUserMediaParameters {
    audioProducer: Producer | null;
    localAudioProducer?: Producer | null;
    socket: Socket;
    localSocket?: Socket;
    videoAlreadyOn: boolean;
    islevel: string;
    lock_screen: boolean;
    shared: boolean;
    updateMainWindow: boolean;
    hostLabel: string;
    roomName: string;
    updateAudioProducer: (audioProducer: Producer | null) => void;
    updateLocalAudioProducer?: (localAudioProducer: Producer | null) => void;
    updateUpdateMainWindow: (updateMainWindow: boolean) => void;
    prepopulateUserMedia: PrepopulateUserMediaType;
    [key: string]: any;
}

export declare type DisconnectSendTransportAudioType = (options: DisconnectSendTransportAudioOptions) => Promise<void>;

/**
 * Disconnects the send transport for screen sharing.
 *
 * This function closes the screen producer, updates the state, and notifies the server
 * about the closure and pausing of screen sharing.
 *
 * @param {DisconnectSendTransportScreenOptions} options - The options for disconnecting the send transport.
 * @param {Object} options.parameters - The parameters required for disconnection.
 * @param {Function} options.parameters.getUpdatedAllParams - Function to get updated parameters.
 * @param {Producer | null} options.parameters.screenProducer - The screen producer to be closed.
 * @param {Socket} options.parameters.socket - The socket connection to notify the server.
 * @param {Socket} [options.parameters.localSocket] - The local socket connection for communication.
 * @param {string} options.parameters.roomName - The name of the room.
 * @param {Function} options.parameters.updateScreenProducer - Function to update the screen producer state.
 * @param {Function} [options.parameters.updateLocalScreenProducer] - Function to update the local screen producer state.
 * @returns {Promise<void>} A promise that resolves when the disconnection process is complete.
 * @throws {Error} If an error occurs during the disconnection process.
 *
 * @example
 * const options = {
 *   parameters: {
 *     screenProducer: screenProducerInstance,
 *     socket: socketInstance,
 *     localSocket: localSocketInstance,
 *     roomName: 'Room 1',
 *     updateScreenProducer: (producer) => console.log('Updated screen producer:', producer),
 *     updateLocalScreenProducer: (localProducer) => console.log('Updated local screen producer:', localProducer),
 *     getUpdatedAllParams: () => ({
 *       screenProducer: screenProducerInstance,
 *       socket: socketInstance,
 *       roomName: 'Room 1',
 *     }),
 *   },
 * };
 *
 * disconnectSendTransportScreen(options)
 *   .then(() => {
 *     console.log('Screen send transport disconnected successfully');
 *   })
 *   .catch((error) => {
 *     console.error('Error disconnecting screen send transport:', error);
 *   });
 */
export declare const disconnectSendTransportScreen: ({ parameters }: DisconnectSendTransportScreenOptions) => Promise<void>;

export declare interface DisconnectSendTransportScreenOptions {
    parameters: DisconnectSendTransportScreenParameters;
}

export declare interface DisconnectSendTransportScreenParameters {
    screenProducer: Producer | null;
    socket: Socket;
    localSocket?: Socket;
    roomName: string;
    updateScreenProducer: (screenProducer: Producer | null) => void;
    updateLocalScreenProducer?: (localScreenProducer: Producer | null) => void;
    getUpdatedAllParams: () => DisconnectSendTransportScreenParameters;
    [key: string]: any;
}

export declare type DisconnectSendTransportScreenType = (options: DisconnectSendTransportScreenOptions) => Promise<void>;

/**
 * Disconnects the send transport for video, closes the video producer, and updates the state.
 *
 * This function supports both a primary and a local video producer, delegating local handling to a separate function.
 *
 * @param {DisconnectSendTransportVideoOptions} options - The options for disconnecting the send transport.
 * @param {DisconnectSendTransportVideoParameters} options.parameters - The parameters required for disconnecting the send transport.
 * @param {Producer | null} options.parameters.videoProducer - The primary video producer object.
 * @param {Producer | null} [options.parameters.localVideoProducer] - The local video producer object (optional).
 * @param {Socket} options.parameters.socket - The primary socket object.
 * @param {Socket} [options.parameters.localSocket] - The local socket object (optional).
 * @param {string} options.parameters.islevel - The participant's level.
 * @param {string} options.parameters.roomName - The name of the room.
 * @param {boolean} options.parameters.updateMainWindow - The flag to update the main window.
 * @param {boolean} options.parameters.lock_screen - The flag to lock the screen.
 * @param {Function} options.parameters.updateUpdateMainWindow - The function to update the main window state.
 * @param {Function} options.parameters.updateVideoProducer - The function to update the video producer state.
 * @param {Function} [options.parameters.updateLocalVideoProducer] - The function to update the local video producer state (optional).
 * @param {ReorderStreamsType} options.parameters.reorderStreams - The function to reorder streams.
 * @param {Function} [options.parameters.updateLocalProducerTransport] - The function to update the local producer transport state (optional).
 * @param {Function} [options.parameters.updateProducerTransport] - The function to update the producer transport state (optional).
 *
 * @returns {Promise<void>} A promise that resolves when the disconnection process is complete.
 *
 * @throws {Error} Throws an error if the disconnection process fails.
 *
 * @example
 * const options = {
 *   parameters: {
 *     videoProducer: videoProducerInstance,
 *     localVideoProducer: localVideoProducerInstance,
 *     socket: socketInstance,
 *     localSocket: localSocketInstance,
 *     islevel: '2',
 *     roomName: 'Room A',
 *     updateMainWindow: false,
 *     lock_screen: false,
 *     updateUpdateMainWindow: (state) => console.log('Main window updated:', state),
 *     updateVideoProducer: (producer) => console.log('Video producer updated:', producer),
 *     updateLocalVideoProducer: (producer) => console.log('Local video producer updated:', producer),
 *     reorderStreams: reorderStreamsFunction,
 *   },
 * };
 *
 * disconnectSendTransportVideo(options)
 *   .then(() => console.log('Video send transport disconnected successfully'))
 *   .catch((error) => console.error('Error disconnecting video send transport:', error));
 */
export declare const disconnectSendTransportVideo: DisconnectSendTransportVideoType;

export declare interface DisconnectSendTransportVideoOptions {
    parameters: DisconnectSendTransportVideoParameters;
}

export declare interface DisconnectSendTransportVideoParameters extends ReorderStreamsParameters {
    videoProducer: Producer | null;
    localVideoProducer?: Producer | null;
    socket: Socket;
    localSocket?: Socket;
    islevel: string;
    roomName: string;
    lock_screen: boolean;
    updateMainWindow: boolean;
    updateUpdateMainWindow: (state: boolean) => void;
    updateVideoProducer: (producer: Producer | null) => void;
    updateLocalVideoProducer?: (producer: Producer | null) => void;
    reorderStreams: ReorderStreamsType;
    [key: string]: any;
}

export declare type DisconnectSendTransportVideoType = (options: DisconnectSendTransportVideoOptions) => Promise<void>;

/**
 * Disconnects from the socket.
 *
 * @param {Socket} socket - The socket instance to disconnect.
 * @returns {Promise<boolean>} - A promise that resolves once the socket is disconnected.
 *
 * @example
 * ```typescript
 * const options = { socket: socketInstance };
 *
 * try {
 *   const isDisconnected = await disconnectSocket(options);
 *   console.log('Disconnected:', isDisconnected);
 * } catch (error) {
 *   console.error('Failed to disconnect:', error);
 * }
 * ```
 */
export declare function disconnectSocket({ socket }: DisconnectSocketOptions): Promise<boolean>;

export declare interface DisconnectSocketOptions {
    socket: Socket;
}

export declare type DisconnectSocketType = (options: DisconnectSocketOptions) => Promise<boolean>;

export declare type DisconnectType = (options: DisconnectOptions) => Promise<void>;

/**
 * Emits a self-disconnect request, including the optional mirrored local socket.
 *
 * @param {DisconnectUserSelfOptions} options - Socket targets and participant identity.
 * @returns {Promise<void>} Resolves after the disconnect events are emitted.
 *
 * @example
 * ```typescript
 * await disconnectUserSelf({
 *   member: 'user123',
 *   roomName: 'main-room',
 *   socket,
 *   localSocket,
 * });
 * ```
 */
export declare function disconnectUserSelf({ member, roomName, socket, localSocket, }: DisconnectUserSelfOptions): Promise<void>;

export declare interface DisconnectUserSelfOptions {
    member: string;
    roomName: string;
    socket: DisconnectUserSelfSocketLike;
    localSocket?: DisconnectUserSelfSocketLike;
}

export declare interface DisconnectUserSelfSocketLike {
    id?: string;
    emit: (event: string, ...args: any[]) => void;
}

export declare type DisconnectUserSelfType = (options: DisconnectUserSelfOptions) => Promise<void>;

declare interface DispParticipantLike<TMediaStream = MediaStream> extends DispStreamEntryLike<TMediaStream> {
    name: string;
    islevel?: string | null;
    videoID?: string | null;
}

export declare type DispSpecs = {
    nameTags: boolean;
    backgroundColor: string;
    nameTagsColor: string;
    orientationVideo: string;
};

declare interface DispStreamEntryLike<TMediaStream = MediaStream> {
    producerId?: string | null;
    audioID?: string | null;
    id?: string | null;
    name?: string | null;
    muted?: boolean | null;
    stream?: TMediaStream | null;
}

/**
 * Function to display streams based on various parameters and conditions.
 *
 * @param {DispStreamsOptions} options - The options object.
 * @param {Array} options.lStreams - List of streams to display.
 * @param {number} options.ind - Index of the current stream.
 * @param {boolean} [options.auto=false] - Flag to indicate if the function should run automatically.
 * @param {boolean} [options.ChatSkip=false] - Flag to indicate if chat should be skipped.
 * @param {string|null} [options.forChatID=null] - ID for chat reference.
 * @param {DispStreamsParameters} options.parameters - Parameters object containing various settings and functions.
 * @param {number} [options.breakRoom=-1] - Break room number.
 * @param {boolean} [options.inBreakRoom=false] - Flag to indicate if in break room.
 *
 * @returns {Promise<void>} A promise that resolves when the function completes.
 *
 * @throws Will log an error if an issue occurs during the display of streams.
 *
 * @example
 * const options = {
 *   lStreams: [stream1, stream2],
 *   ind: 0,
 *   auto: true,
 *   ChatSkip: false,
 *   forChatID: 'chat123',
 *   parameters: {
 *     consumerTransports: [],
 *     streamNames: [],
 *     audStreamNames: [],
 *     participants: [],
 *     ref_participants: [],
 *     recordingDisplayType: 'video',
 *     recordingVideoOptimized: false,
 *     meetingDisplayType: 'video',
 *     meetingVideoOptimized: false,
 *     currentUserPage: 1,
 *     hostLabel: 'Host',
 *     mainHeightWidth: 800,
 *     prevMainHeightWidth: 600,
 *     prevDoPaginate: false,
 *     doPaginate: true,
 *     firstAll: true,
 *     shared: false,
 *     shareScreenStarted: false,
 *     shareEnded: false,
 *     oldAllStreams: [],
 *     updateMainWindow: true,
 *     remoteProducerId: null,
 *     activeNames: [],
 *     dispActiveNames: [],
 *     p_dispActiveNames: [],
 *     nForReadjustRecord: 0,
 *     first_round: false,
 *     lock_screen: false,
 *     chatRefStreams: [],
 *     eventType: 'meeting',
 *     islevel: '1',
 *     localStreamVideo: null,
 *     breakOutRoomStarted: false,
 *     breakOutRoomEnded: false,
 *     keepBackground: false,
 *     virtualStream: null,
 *     updateActiveNames: (names) => console.log('Updated active names:', names),
 *     updateDispActiveNames: (names) => console.log('Updated displayed active names:', names),
 *     updateLStreams: (streams) => console.log('Updated limited streams:', streams),
 *     updateChatRefStreams: (streams) => console.log('Updated chat reference streams:', streams),
 *     updateNForReadjustRecord: (n) => console.log('Updated n for readjustment:', n),
 *     updateUpdateMainWindow: (state) => console.log('Main window updated:', state),
 *     updateShowMiniView: (value) => console.log('Mini view updated:', value),
 *     prepopulateUserMedia: async () => { console.log('your logic')},
 *     rePort: async () => { console.log('your logic')},
 *     processConsumerTransports: async () => { console.log('your logic')},
 *     resumePauseStreams: async () => { console.log('your logic')},
 *     readjust: async () => { console.log('your logic')},
 *     addVideosGrid: async () => { console.log('your logic')},
 *     getEstimate: async () => { console.log('your logic')},
 *     checkGrid: async () => { console.log('your logic')},
 *     resumePauseAudioStreams: async () => { console.log('your logic')},
 *     getUpdatedAllParams: () => { console.log('your logic')},
 *   },
 *   breakRoom: 1,
 *   inBreakRoom: false,
 * };
 *
 * dispStreams(options)
 *   .then(() => {
 *     console.log('Streams displayed successfully');
 *   })
 *   .catch((error) => {
 *     console.error('Error displaying streams:', error);
 *   });
 */
export declare function dispStreams<TParameters extends DispStreamsParameters<any, any, any, any> = DispStreamsParameters>({ lStreams, ind, auto, ChatSkip, forChatID, parameters, breakRoom, inBreakRoom, }: DispStreamsOptions<TParameters>): Promise<void>;

declare type DispStreamsInvoker = (options: {
    lStreams: any[];
    ind: number;
    auto?: boolean;
    parameters: any;
    breakRoom?: number;
    inBreakRoom?: boolean;
    ChatSkip?: boolean;
    forChatCard?: any;
    forChatID?: any;
}) => Promise<void>;

export declare interface DispStreamsOptions<TParameters extends DispStreamsParameters<any, any, any, any> = DispStreamsParameters> {
    lStreams: TParameters extends DispStreamsParameters<infer TStream, infer TParticipant, any, any> ? (TStream | TParticipant)[] : (Stream | Participant)[];
    ind: number;
    auto?: boolean;
    ChatSkip?: boolean;
    forChatCard?: any;
    forChatID?: any;
    parameters: TParameters;
    breakRoom?: number;
    inBreakRoom?: boolean;
}

export declare interface DispStreamsParameters<TStream extends DispStreamEntryLike<any> = Stream, TParticipant extends DispParticipantLike<any> = Participant, TTransport = Transport, TMediaStream = MediaStream> {
    consumerTransports: TTransport[];
    streamNames: TStream[];
    audStreamNames: TStream[];
    participants: TParticipant[];
    ref_participants: TParticipant[];
    recordingDisplayType: 'video' | 'media' | 'all';
    recordingVideoOptimized: boolean;
    meetingDisplayType: string;
    meetingVideoOptimized: boolean;
    currentUserPage: number;
    hostLabel: string;
    mainHeightWidth: number;
    prevMainHeightWidth: number;
    prevDoPaginate: boolean;
    doPaginate: boolean;
    firstAll: boolean;
    shared: boolean;
    shareScreenStarted: boolean;
    shareEnded: boolean;
    oldAllStreams: (TStream | TParticipant)[];
    updateMainWindow: boolean;
    remoteProducerId?: string;
    activeNames: string[];
    dispActiveNames: string[];
    p_dispActiveNames: string[];
    nForReadjustRecord: number;
    first_round: boolean;
    lock_screen: boolean;
    chatRefStreams: (TStream | TParticipant)[];
    eventType: EventType;
    islevel: string;
    localStreamVideo: TMediaStream | null;
    breakOutRoomStarted: boolean;
    breakOutRoomEnded: boolean;
    keepBackground: boolean;
    virtualStream: TMediaStream | null;
    updateActiveNames: (names: string[]) => void;
    updateDispActiveNames: (names: string[]) => void;
    updateLStreams: StreamCollectionUpdater_2<TStream | TParticipant>;
    updateChatRefStreams: StreamCollectionUpdater_2<TStream | TParticipant>;
    updateNForReadjustRecord: (n: number) => void;
    updateUpdateMainWindow: (value: boolean) => void;
    updateShowMiniView: (value: boolean) => void;
    prepopulateUserMedia: OpaqueAsyncInvoker;
    rePort: OpaqueAsyncInvoker;
    processConsumerTransports: OpaqueAsyncInvoker;
    resumePauseStreams: OpaqueAsyncInvoker;
    readjust: OpaqueAsyncInvoker;
    addVideosGrid: OpaqueAsyncInvoker;
    getEstimate: OpaqueEstimateInvoker;
    checkGrid: OpaqueCheckGridInvoker;
    resumePauseAudioStreams: OpaqueAsyncInvoker;
    getUpdatedAllParams: () => DispStreamsParameters<TStream, TParticipant, TTransport, TMediaStream>;
    [key: string]: any;
}

export declare type DispStreamsType = <TParameters extends DispStreamsParameters<any, any, any, any> = DispStreamsParameters>(options: DispStreamsOptions<TParameters>) => Promise<void>;

declare type EntryArrayUpdater<TEntry> = {
    bivarianceHack: (entries: TEntry[]) => void;
}["bivarianceHack"];

declare type EntryMatrixUpdater<TEntry> = {
    bivarianceHack: (entries: TEntry[][]) => void;
}["bivarianceHack"];

declare type EstimateResult = [unknown, number, number, ...unknown[]];

export declare type EventType = 'conference' | 'webinar' | 'chat' | 'broadcast' | 'none';

export declare const fetchLanguagesViaSocket: (socket: {
    emit: (event: string, data: unknown, callback?: (response: {
        languages?: LanguageOption[];
    }) => void) => void;
}, displayLocale?: string) => Promise<LanguageOption[]>;

export declare const fetchVoicesViaSocket: (socket: {
    emit: (event: string, data: unknown, callback?: (response: SocketVoiceResponse) => void) => void;
}, provider?: TTSProvider | string, language?: string) => Promise<SocketVoiceResponse>;

export declare const fhdCons: {
    width: {
        ideal: number;
    };
    height: {
        ideal: number;
    };
};

export declare const fhdConsNeu: {
    width: {
        ideal: number;
    };
    height: {
        ideal: number;
    };
};

export declare const fhdConsPort: {
    width: {
        ideal: number;
    };
    height: {
        ideal: number;
    };
};

export declare const fhdFrameRate = 20;

export declare const findOriginalProducerForSpeaker: (speakerId: string, allAudioStreams: Array<{
    producerId: string;
    name?: string;
    [key: string]: any;
}>) => string | null;

export declare const focusPanelists: ({ socket, roomName, member: _member, islevel, focusEnabled, muteOthersMic, muteOthersCamera, showAlert, }: FocusPanelistsOptions) => Promise<void>;

export declare interface FocusPanelistsOptions {
    socket: Socket;
    roomName: string;
    member: string;
    islevel: string;
    focusEnabled: boolean;
    muteOthersMic?: boolean;
    muteOthersCamera?: boolean;
    showAlert?: ShowAlert;
}

export declare type FocusPanelistsType = (options: FocusPanelistsOptions) => Promise<void>;

/**
 * Formats large numbers into compact display strings.
 *
 * Values are converted to `K`, `M`, or `B` suffixes for UI-friendly display.
 * Falsy values return `undefined` to match existing MediaSFU display behavior.
 *
 * @param options Number formatting options.
 * @returns A compact string such as `1.2K` or `3.4M`, or `undefined` for empty input.
 *
 * @example
 * ```typescript
 * const viewers = await formatNumber({ number: 1530 });
 * // viewers === '1.5K'
 * ```
 */
export declare const formatNumber: ({ number }: FormatNumberOptions) => Promise<string | undefined>;

export declare interface FormatNumberOptions {
    number: number;
}

export declare type FormatNumberType = (options: FormatNumberOptions) => Promise<string | undefined>;

/**
 * Generates the content for a specific page.
 *
 * @param {GeneratePageContentOptions} options - The options for generating page content.
 * @param {number | string} options.page - The page number to generate content for.
 * @param {GeneratePageContentParameters} options.parameters - The parameters required for generating content.
 * @param {Array} options.parameters.paginatedStreams - The streams to be paginated.
 * @param {number} options.parameters.currentUserPage - The current page of the user.
 * @param {Function} options.parameters.updateMainWindow - Function to update the main window flag.
 * @param {Function} options.parameters.updateCurrentUserPage - Function to update the current user page.
 * @param {Function} options.parameters.updateUpdateMainWindow - Function to update the main window update flag.
 * @param {Function} options.parameters.dispStreams - Function to display streams for the specified page.
 * @param {number} [options.breakRoom=-1] - The break room identifier.
 * @param {boolean} [options.inBreakRoom=false] - Flag indicating if the user is in a break room.
 *
 * @returns {Promise<void>} A promise that resolves when the content generation is complete.
 *
 * @throws {Error} Throws an error if content generation fails.
 *
 * @example
 * const options = {
 *   page: 1,
 *   parameters: {
 *     paginatedStreams: [[stream1, stream2], [stream3, stream4]], // Example paginated streams
 *     currentUserPage: 0,
 *     updateMainWindow: true,
 *     updateCurrentUserPage: (page) => console.log('Current user page updated to:', page),
 *     updateUpdateMainWindow: (flag) => console.log('Main window update flag:', flag),
 *     dispStreams: async ({ lStreams, ind }) => {
 *       console.log(`Displaying streams for page ${ind}:`, lStreams);
 *     },
 *   },
 *   breakRoom: 1,
 *   inBreakRoom: false,
 * };
 *
 * generatePageContent(options)
 *   .then(() => {
 *     console.log('Page content generated successfully');
 *   })
 *   .catch((error) => {
 *     console.error('Error generating page content:', error);
 *   });
 */
export declare function generatePageContent<TParameters extends GeneratePageContentParameters<any, any, any> = GeneratePageContentParameters>({ page, parameters, breakRoom, inBreakRoom, }: GeneratePageContentOptions<TParameters>): Promise<void>;

export declare interface GeneratePageContentOptions<TParameters extends GeneratePageContentParameters<any, any, any> = GeneratePageContentParameters> {
    page: number | string;
    parameters: TParameters;
    breakRoom?: number;
    inBreakRoom?: boolean;
}

export declare interface GeneratePageContentParameters<TStream extends Stream = Stream, TParticipant extends Participant = Participant, TDispParameters extends DispStreamsParameters<any, any, any, any> = DispStreamsParameters<TStream, TParticipant>> extends DispStreamsParameters<TStream, TParticipant> {
    paginatedStreams: (TParticipant | TStream)[][];
    currentUserPage: number;
    updateMainWindow: boolean;
    updateCurrentUserPage: (page: number) => void;
    updateUpdateMainWindow: (flag: boolean) => void;
    dispStreams: OpaqueDispStreamsInvoker;
    getUpdatedAllParams: () => GeneratePageContentParameters<TStream, TParticipant, TDispParameters>;
    [key: string]: any;
}

export declare type GeneratePageContentType = <TParameters extends GeneratePageContentParameters<any, any, any> = GeneratePageContentParameters>(options: GeneratePageContentOptions<TParameters>) => Promise<void>;

export declare const generateRandomMessages: ({ participants, member, coHost, host, forChatBroadcast, }: GenerateRandomMessagesOptions) => Message[];

export declare interface GenerateRandomMessagesOptions {
    participants: Participant[];
    member: string;
    coHost?: string;
    host: string;
    forChatBroadcast?: boolean;
}

export declare type GenerateRandomMessagesType = (options: GenerateRandomMessagesOptions) => Message[];

export declare const generateRandomParticipants: ({ member, coHost, host, forChatBroadcast, }: GenerateRandomParticipantsOptions) => Participant[];

export declare interface GenerateRandomParticipantsOptions {
    member: string;
    coHost?: string;
    host: string;
    forChatBroadcast?: boolean;
}

export declare type GenerateRandomParticipantsType = (options: GenerateRandomParticipantsOptions) => Participant[];

export declare const generateRandomPolls: ({ numberOfPolls }: GenerateRandomPollsOptions) => Poll[];

export declare interface GenerateRandomPollsOptions {
    numberOfPolls: number;
}

export declare type GenerateRandomPollsType = (options: GenerateRandomPollsOptions) => Poll[];

export declare const generateRandomRequestList: ({ participants, hostName, coHostName, numberOfRequests, }: GenerateRandomRequestListOptions) => Request_2[];

export declare interface GenerateRandomRequestListOptions {
    participants: Participant[];
    hostName: string;
    coHostName?: string;
    numberOfRequests: number;
}

export declare type GenerateRandomRequestListType = (options: GenerateRandomRequestListOptions) => Request_2[];

export declare const generateRandomWaitingRoomList: () => WaitingRoomParticipant[];

export declare type GenerateRandomWaitingRoomListType = () => WaitingRoomParticipant[];

export declare const getActiveTranslationConsumers: (translationProducerMap: Map<string, {
    translationProducerId: string;
    originalProducerId: string;
    language: string;
}>, consumerTransports: Transport[]) => Array<{
    speakerId: string;
    translationProducerId: string;
    originalProducerId: string;
    language: string;
}>;

export declare const getAvailableVoices: (langCode: string, provider?: TTSProvider | string) => {
    male: VoiceOption[];
    female: VoiceOption[];
};

/**
 * Returns the curated list of commonly-supported languages for translation UI pickers.
 * Sorted alphabetically by display name.
 */
export declare const getCommonLanguages: (displayLocale?: string) => LanguageOption[];

/**
 * Resolves newly announced consuming domains to connection targets and connects missing ones.
 *
 * @param {GetDomainsOptions} options - Domain payload and shared consume-socket connection helpers.
 * @returns {Promise<void>} Resolves after any missing consume domains are connected.
 *
 * @example
 * ```typescript
 * await getDomains({
 *   domains: ['recv-1', 'recv-2'],
 *   alt_domains,
 *   apiUserName: 'api-user',
 *   apiKey: 'api-key',
 *   apiToken: 'api-token',
 *   parameters,
 * });
 * ```
 */
export declare const getDomains: <TParameters = unknown, TConsumeSocket = ConsumeSocket, TRtpCapabilities = RtpCapabilities>({ domains, alt_domains, apiUserName, apiKey, apiToken, parameters, }: GetDomainsOptions<TParameters, TConsumeSocket, TRtpCapabilities>) => Promise<void>;

export declare interface GetDomainsOptions<TParameters = unknown, TConsumeSocket = ConsumeSocket, TRtpCapabilities = RtpCapabilities> {
    domains: string[];
    alt_domains: AltDomains;
    apiUserName: string;
    apiKey: string;
    apiToken: string;
    parameters: GetDomainsParameters<TParameters, TConsumeSocket, TRtpCapabilities> & TParameters;
}

export declare interface GetDomainsParameters<TParameters = unknown, TConsumeSocket = ConsumeSocket, TRtpCapabilities = RtpCapabilities> {
    roomRecvIPs: string[];
    rtpCapabilities: TRtpCapabilities | null;
    consume_sockets: TConsumeSocket[];
    connectIps: ConnectIpsLikeType<TParameters, TConsumeSocket>;
    getUpdatedAllParams: () => GetDomainsParameters<TParameters, TConsumeSocket, TRtpCapabilities> & TParameters;
    [key: string]: any;
}

export declare type GetDomainsType<TParameters = unknown, TConsumeSocket = ConsumeSocket, TRtpCapabilities = RtpCapabilities> = (options: GetDomainsOptions<TParameters, TConsumeSocket, TRtpCapabilities>) => Promise<void>;

/**
 * Estimates the number of rows and columns for a given set of parameters.
 *
 * @param {GetEstimateOptions} options - The options for the estimation.
 * @param {number} options.n - The number of items to estimate for.
 * @param {GetEstimateParameters} options.parameters - The parameters for the estimation.
 * @param {number} options.parameters.fixedPageLimit - The fixed page limit.
 * @param {number} options.parameters.screenPageLimit - The screen page limit.
 * @param {boolean} options.parameters.shareScreenStarted - Indicates if screen sharing has started.
 * @param {boolean} [options.parameters.shared] - Indicates if sharing is active.
 * @param {string} options.parameters.eventType - The type of event (e.g., "chat", "conference").
 * @param {boolean} options.parameters.removeAltGrid - Indicates if the alternate grid should be removed.
 * @param {boolean} options.parameters.isWideScreen - Indicates if the screen is wide.
 * @param {boolean} options.parameters.isMediumScreen - Indicates if the screen is medium-sized.
 * @param {Function} options.parameters.updateRemoveAltGrid - Function to update the removeAltGrid parameter.
 * @param {Function} options.parameters.calculateRowsAndColumns - Function to calculate rows and columns.
 *
 * @returns {[number, number, number]} An array containing the estimated number of items, rows, and columns.
 *
 * @throws Will log an error message if an error occurs during estimation.
 *
 * @example
 * const options = {
 *   n: 10,
 *   parameters: {
 *     fixedPageLimit: 5,
 *     screenPageLimit: 8,
 *     shareScreenStarted: false,
 *     shared: false,
 *     eventType: 'conference',
 *     removeAltGrid: false,
 *     isWideScreen: true,
 *     isMediumScreen: false,
 *     updateRemoveAltGrid: (value) => console.log('Remove Alt Grid:', value),
 *     calculateRowsAndColumns: ({ n }) => [3, 4], // Example implementation
 *   },
 * };
 *
 * const estimate = getEstimate(options);
 * console.log('Estimated:', estimate); // Output: Estimated: [10, 3, 4]
 */
export declare function getEstimate({ n, parameters }: GetEstimateOptions): [number, number, number];

export declare interface GetEstimateOptions {
    n: number;
    parameters: GetEstimateParameters;
}

export declare interface GetEstimateParameters {
    fixedPageLimit: number;
    screenPageLimit: number;
    shareScreenStarted: boolean;
    shared?: boolean;
    eventType: EventType;
    removeAltGrid: boolean;
    isWideScreen: boolean;
    isMediumScreen: boolean;
    updateRemoveAltGrid: (value: boolean) => void;
    calculateRowsAndColumns: CalculateRowsAndColumnsType;
    [key: string]: any;
}

export declare type GetEstimateType = (options: GetEstimateOptions) => [number, number, number];

export declare const getLanguageMetadata: (code: string) => LanguageMetadata;

export declare const getLanguageName: (code: string, displayLocale?: string) => string;

export declare const getLanguageNativeName: (code: string) => string;

export declare const getModalPosition: ({ position }: GetModalPositionOptions) => ModalPositionStyle;

export declare interface GetModalPositionOptions {
    position: string;
}

export declare type GetModalPositionType = (options: GetModalPositionOptions) => ModalPositionStyle;

/**
 * Maps a symbolic overlay position to CSS-style edge coordinates.
 *
 * This is used by display card components to anchor badges, audio indicators,
 * or auxiliary overlays to a participant tile corner.
 *
 * @param options Overlay position options.
 * @returns A partial coordinate object suitable for inline style application.
 *
 * @example
 * ```typescript
 * const style = getOverlayPosition({ position: 'bottomRight' });
 * // style === { bottom: 0, right: 0 }
 * ```
 */
export declare const getOverlayPosition: ({ position }: GetOverlayPositionOptions) => OverlayPositionStyle;

export declare interface GetOverlayPositionOptions {
    position: string;
}

export declare type GetOverlayPositionType = (options: GetOverlayPositionOptions) => OverlayPositionStyle;

/**
 * Retrieves piped producers and signals new consumer transport for each retrieved producer.
 *
 * @param {GetPipedProducersAltOptions} options - The options for retrieving piped producers.
 * @param {boolean} options.community - A flag indicating if the room is a community edition room.
 * @param {Socket} options.nsock - The WebSocket instance used for communication.
 * @param {string} options.islevel - A flag indicating the level of the request.
 * @param {GetPipedProducersAltParameters} options.parameters - Additional parameters for the request.
 * @param {string} options.parameters.member - The member identifier.
 * @param {Function} options.parameters.signalNewConsumerTransport - A function to signal new consumer transport.
 *
 * @returns {Promise<void>} A promise that resolves when the operation is complete.
 *
 * @throws {Error} If an error occurs during the process of retrieving producers.
 *
 * @example
 * const options = {
 *   community: false,
 *   nsock: socketInstance,
 *   islevel: '1',
 *   parameters: {
 *     member: 'memberId',
 *     signalNewConsumerTransport: async ({ nsock, remoteProducerId, islevel, parameters }) => {
 *       // Implementation for signaling new consumer transport
 *     },
 *   },
 * };
 *
 * getPipedProducersAlt(options)
 *   .then(() => {
 *     console.log('Successfully retrieved piped producers');
 *   })
 *   .catch((error) => {
 *     console.error('Error retrieving piped producers:', error);
 *   });
 */
export declare const getPipedProducersAlt: ({ community, nsock, islevel, parameters, }: GetPipedProducersAltOptions) => Promise<void>;

export declare interface GetPipedProducersAltOptions {
    community?: boolean;
    nsock: Socket;
    islevel: string;
    parameters: GetPipedProducersAltParameters;
}

export declare interface GetPipedProducersAltParameters extends Omit<SignalNewConsumerTransportParameters, 'getUpdatedAllParams'> {
    member: string;
    listenerTranslationPreferences?: {
        perSpeaker: Map<string, {
            speakerId: string;
            language: string | null;
            wantOriginal: boolean;
        }>;
        globalLanguage: string | null;
    };
    signalNewConsumerTransport: SignalNewConsumerTransportType;
    startConsumingTranslation?: (producerId: string, speakerId: string, language: string, originalProducerId?: string, nsock?: Socket) => Promise<void>;
    getUpdatedAllParams?: () => GetPipedProducersAltParameters;
    [key: string]: any;
}

export declare type GetPipedProducersAltType = (options: GetPipedProducersAltOptions) => Promise<void>;

/**
 * Retrieves piped producers and signals new consumer transport for each retrieved producer.
 *
 * @param {GetProducersPipedOptions} options - The options for getting piped producers.
 * @param {Socket} options.nsock - The WebSocket instance used for communication.
 * @param {string} options.islevel - A flag indicating the level of the operation.
 * @param {GetProducersPipedParameters} options.parameters - Additional parameters for the operation.
 * @param {string} options.parameters.member - The member identifier.
 * @param {Function} options.parameters.signalNewConsumerTransport - The function to signal new consumer transport.
 *
 * @returns {Promise<void>} A promise that resolves when the operation is complete.
 *
 * @throws {Error} If an error occurs during the process of retrieving producers.
 *
 * @example
 * const options = {
 *   nsock: socketInstance,
 *   islevel: '1',
 *   parameters: {
 *     member: 'memberId',
 *     signalNewConsumerTransport: async ({ remoteProducerId, islevel, nsock, parameters }) => {
 *       // Implementation for signaling new consumer transport
 *     },
 *   },
 * };
 *
 * getProducersPiped(options)
 *   .then(() => {
 *     console.log('Successfully retrieved piped producers');
 *   })
 *   .catch((error) => {
 *     console.error('Error retrieving piped producers:', error);
 *   });
 */
export declare const getProducersPiped: ({ nsock, islevel, parameters, }: GetProducersPipedOptions) => Promise<void>;

export declare interface GetProducersPipedOptions {
    nsock: Socket;
    islevel: string;
    parameters: GetProducersPipedParameters;
}

export declare interface GetProducersPipedParameters extends SignalNewConsumerTransportParameters {
    member: string;
    signalNewConsumerTransport: SignalNewConsumerTransportType;
    [key: string]: any;
}

export declare type GetProducersPipedType = (options: GetProducersPipedOptions) => Promise<void>;

export declare const getSubtitleForSpeaker: (subtitles: Map<string, LiveSubtitle>, speakerId: string, speakerName?: string, now?: number) => LiveSubtitle | null;

export declare const getSupportedLanguages: (displayLocale?: string) => LanguageOption[];

/**
 * Asynchronously processes and updates video streams by filtering out the admin's video stream.
 *
 * @param {GetVideosOptions} options - The options for getting videos.
 * @param {Participant[]} options.participants - The list of participants.
 * @param {(Stream | Participant)[]} options.allVideoStreams - The list of all video streams.
 * @param {(Stream | Participant)[]} options.oldAllStreams - The list of old video streams.
 * @param {string} [options.adminVidID] - The ID of the admin's video stream.
 * @param {Function} options.updateAllVideoStreams - Function to update the state variable for all video streams.
 * @param {Function} options.updateOldAllStreams - Function to update the state variable for old video streams.
 *
 * @returns {Promise<void>} A promise that resolves when the video streams have been processed and updated.
 *
 * @throws {Error} Throws an error if an issue occurs while processing the streams.
 *
 * @example
 * const options = {
 *   participants: participantList,
 *   allVideoStreams: allStreams,
 *   oldAllStreams: oldStreams,
 *   adminVidID: 'admin-video-id',
 *   updateAllVideoStreams: (streams) => {
 *     console.log('All video streams updated:', streams);
 *   },
 *   updateOldAllStreams: (streams) => {
 *     console.log('Old video streams updated:', streams);
 *   },
 * };
 *
 * getVideos(options)
 *   .then(() => {
 *     console.log('Video streams processed successfully');
 *   })
 *   .catch((error) => {
 *     console.error('Error processing video streams:', error);
 *   });
 */
export declare function getVideos({ participants, allVideoStreams, oldAllStreams, adminVidID, updateAllVideoStreams, updateOldAllStreams, }: GetVideosOptions): Promise<void>;

export declare interface GetVideosOptions {
    participants: Participant[];
    allVideoStreams: (Stream | Participant)[];
    oldAllStreams: (Stream | Participant)[];
    adminVidID?: string;
    updateAllVideoStreams: (streams: (Stream | Participant)[]) => void;
    updateOldAllStreams: (streams: (Stream | Participant)[]) => void;
}

export declare type GetVideosType = (options: GetVideosOptions) => Promise<void>;

export declare interface GridPlanEntry<T> {
    stream: T;
    index: number;
}

export declare interface GridSizes {
    gridWidth?: number;
    gridHeight?: number;
    altGridWidth?: number;
    altGridHeight?: number;
}

/**
 * Handles the creation of a poll by emitting a "createPoll" event with the provided details.
 *
 * @param {HandleCreatePollOptions} options - The options for creating the poll.
 * @param {NewPoll} options.poll - The poll object containing the poll question, type, and options.
 * @param {Socket} options.socket - The socket instance used to communicate with the server.
 * @param {string} options.roomName - The name of the room where the poll is created.
 * @param {Function} [options.showAlert] - Optional function to show alert messages.
 * @param {Function} options.updateIsPollModalVisible - Function to toggle the poll modal visibility.
 *
 * @example
 * ```typescript
 * handleCreatePoll({
 *   poll: { question: "Favorite color?", type: "singleChoice", options: ["Red", "Blue", "Green"] },
 *   socket: socketInstance,
 *   roomName: "roomA",
 *   showAlert: (message) => console.log(message),
 *   updateIsPollModalVisible: (isVisible) => setIsPollModalVisible(isVisible),
 * });
 * ```
 */
export declare const handleCreatePoll: ({ poll, socket, roomName, showAlert, updateIsPollModalVisible, }: HandleCreatePollOptions) => Promise<void>;

export declare interface HandleCreatePollOptions {
    poll: NewPoll;
    socket: Socket;
    roomName: string;
    showAlert?: ShowAlert;
    updateIsPollModalVisible: (visible: boolean) => void;
}

export declare type HandleCreatePollType = (options: HandleCreatePollOptions) => Promise<void>;

/**
 * Handles room creation with MediaSFU and/or local server
 *
 * @param {HandleCreateRoomOptions} options - Configuration for creating a room
 * @returns {Promise<void>}
 *
 * @example
 * ```typescript
 * await handleCreateRoom({
 *   payload: {
 *     action: 'create',
 *     duration: 30,
 *     capacity: 10,
 *     eventType: 'conference',
 *     userName: 'John Doe',
 *     recordOnly: false,
 *   },
 *   apiUserName: 'user123',
 *   apiKey: 'key123',
 *   parameters,
 *   createMediaSFURoom,
 * });
 * ```
 */
export declare function handleCreateRoom({ payload, localLink, connectMediaSFU, apiUserName, apiKey, validate, parameters, initSocket, localData, createMediaSFURoom, }: HandleCreateRoomOptions): Promise<void>;

/**
 * Options for handleCreateRoom function
 */
export declare interface HandleCreateRoomOptions {
    payload: CreateMediaSFURoomOptions;
    localLink?: string;
    connectMediaSFU?: boolean;
    apiUserName: string;
    apiKey: string;
    validate?: boolean;
    parameters: PreJoinPageParameters;
    initSocket?: Socket;
    localData?: ResponseLocalConnectionData;
    createMediaSFURoom: CreateRoomOnMediaSFUType;
}

/**
 * Handles the end of a poll by emitting an "endPoll" event through the provided socket.
 * Displays an alert based on the success or failure of the operation.
 *
 * @param {HandleEndPollOptions} options - The options for ending the poll.
 * @param {string} options.pollId - The ID of the poll to end.
 * @param {Socket} options.socket - The socket instance to emit the event.
 * @param {Function} [options.showAlert] - Optional function to display alerts.
 * @param {string} options.roomName - The name of the room where the poll is being conducted.
 * @param {Function} options.updateIsPollModalVisible - Function to update the poll modal visibility.
 *
 * @example
 * ```typescript
 * handleEndPoll({
 *   pollId: "poll123",
 *   socket: socketInstance,
 *   showAlert: (message) => console.log(message),
 *   roomName: "roomA",
 *   updateIsPollModalVisible: (isVisible) => setIsPollModalVisible(isVisible),
 * });
 * ```
 */
export declare const handleEndPoll: ({ pollId, socket, showAlert, roomName, updateIsPollModalVisible, }: HandleEndPollOptions) => Promise<void>;

export declare interface HandleEndPollOptions {
    pollId: string;
    socket: Socket;
    showAlert?: ShowAlert;
    roomName: string;
    updateIsPollModalVisible: (isVisible: boolean) => void;
}

export declare type HandleEndPollType = (options: HandleEndPollOptions) => Promise<void>;

/**
 * Handles joining an existing room on MediaSFU or local server
 *
 * @param {HandleJoinRoomOptions} options - Configuration for joining a room
 * @returns {Promise<void>}
 *
 * @example
 * ```typescript
 * await handleJoinRoom({
 *   payload: {
 *     action: 'join',
 *     meetingID: 'room123',
 *     userName: 'John Doe',
 *   },
 *   apiUserName: 'user123',
 *   apiKey: 'key123',
 *   parameters,
 *   joinMediaSFURoom,
 * });
 * ```
 */
export declare function handleJoinRoom({ payload, localLink, apiUserName, apiKey, parameters, initSocket, localData, joinMediaSFURoom, }: HandleJoinRoomOptions): Promise<void>;

/**
 * Options for handleJoinRoom function
 */
export declare interface HandleJoinRoomOptions {
    payload: JoinMediaSFURoomOptions;
    localLink?: string;
    apiUserName: string;
    apiKey: string;
    parameters: PreJoinPageParameters;
    initSocket?: Socket;
    localData?: any;
    joinMediaSFURoom: JoinRoomOnMediaSFUType;
}

/**
 * Handles the start of breakout rooms.
 * @function
 * @param {HandleStartBreakoutOptions} options - The options for starting breakout rooms.
 * @param {Socket} options.socket - The main socket instance.
 * @param {Socket} [options.localSocket] - The local socket instance (optional).
 * @param {Array<Array<{name: string, breakRoom: number | null}>>} options.breakoutRooms - The array of breakout rooms with participant data.
 * @param {string} options.newParticipantAction - The action to take for new participants.
 * @param {string} options.roomName - The name of the main room.
 * @param {boolean} options.breakOutRoomStarted - Whether breakout rooms have already started.
 * @param {boolean} options.breakOutRoomEnded - Whether breakout rooms have ended.
 * @param {ShowAlert} [options.showAlert] - Function to show alerts.
 * @param {Function} options.updateBreakOutRoomStarted - Function to update breakout room started state.
 * @param {Function} options.updateBreakOutRoomEnded - Function to update breakout room ended state.
 * @param {Function} options.onBreakoutRoomsClose - Function to close breakout rooms modal.
 * @param {string} options.meetingDisplayType - Current meeting display type.
 * @param {Function} options.updateMeetingDisplayType - Function to update meeting display type.
 * @returns {void}
 */
export declare const handleStartBreakout: ({ socket, localSocket, breakoutRooms, newParticipantAction, roomName, breakOutRoomStarted, breakOutRoomEnded, showAlert, updateBreakOutRoomStarted, updateBreakOutRoomEnded, onBreakoutRoomsClose, meetingDisplayType, updateMeetingDisplayType, }: HandleStartBreakoutOptions) => void;

export declare interface HandleStartBreakoutOptions {
    socket: Socket;
    localSocket?: Socket;
    breakoutRooms: Array<Array<{
        name: string;
        breakRoom?: number | null;
    }>>;
    newParticipantAction: string;
    roomName: string;
    breakOutRoomStarted: boolean;
    breakOutRoomEnded: boolean;
    showAlert?: ShowAlert;
    updateBreakOutRoomStarted: (started: boolean) => void;
    updateBreakOutRoomEnded: (ended: boolean) => void;
    onBreakoutRoomsClose: () => void;
    meetingDisplayType: string;
    updateMeetingDisplayType: (displayType: string) => void;
}

export declare type HandleStartBreakoutType = (options: HandleStartBreakoutOptions) => void;

/**
 * Handles the start of a whiteboard session.
 * @function
 * @param {HandleStartWhiteboardOptions} options - The options for starting the whiteboard.
 * @param {Socket} options.socket - The socket instance for communication.
 * @param {WhiteboardUser[]} options.whiteboardUsers - Array of users assigned to the whiteboard.
 * @param {string} options.roomName - The name of the room.
 * @param {boolean} options.whiteboardStarted - Whether the whiteboard has already started.
 * @param {boolean} options.whiteboardEnded - Whether the whiteboard has ended.
 * @param {ShowAlert} [options.showAlert] - Function to show alerts.
 * @param {Function} options.updateWhiteboardStarted - Function to update whiteboard started state.
 * @param {Function} options.updateWhiteboardEnded - Function to update whiteboard ended state.
 * @param {Function} options.updateIsConfigureWhiteboardModalVisible - Function to close the configure modal.
 * @returns {Promise<boolean>}
 */
export declare const handleStartWhiteboard: ({ socket, whiteboardUsers, roomName, whiteboardStarted, whiteboardEnded, showAlert, updateWhiteboardStarted, updateWhiteboardEnded, updateIsConfigureWhiteboardModalVisible, }: HandleStartWhiteboardOptions) => Promise<boolean>;

export declare interface HandleStartWhiteboardOptions {
    socket: Socket;
    whiteboardUsers: WhiteboardUser[];
    roomName: string;
    whiteboardStarted: boolean;
    whiteboardEnded: boolean;
    showAlert?: ShowAlert;
    updateWhiteboardStarted: (started: boolean) => void;
    updateWhiteboardEnded: (ended: boolean) => void;
    updateIsConfigureWhiteboardModalVisible: (isVisible: boolean) => void;
}

export declare type HandleStartWhiteboardType = (options: HandleStartWhiteboardOptions) => Promise<boolean>;

/**
 * Handles stopping breakout rooms.
 * @function
 * @param {HandleStopBreakoutOptions} options - The options for stopping breakout rooms.
 * @param {Socket} options.socket - The main socket instance.
 * @param {Socket} [options.localSocket] - The local socket instance (optional).
 * @param {string} options.roomName - The name of the main room.
 * @param {ShowAlert} [options.showAlert] - Function to show alerts.
 * @param {Function} options.updateBreakOutRoomStarted - Function to update breakout room started state.
 * @param {Function} options.updateBreakOutRoomEnded - Function to update breakout room ended state.
 * @param {Function} options.onBreakoutRoomsClose - Function to close breakout rooms modal.
 * @param {string} options.meetingDisplayType - Current meeting display type.
 * @param {string} options.prevMeetingDisplayType - Previous meeting display type.
 * @param {Function} options.updateMeetingDisplayType - Function to update meeting display type.
 * @returns {void}
 */
export declare const handleStopBreakout: ({ socket, localSocket, roomName, showAlert, updateBreakOutRoomStarted, updateBreakOutRoomEnded, onBreakoutRoomsClose, meetingDisplayType, prevMeetingDisplayType, updateMeetingDisplayType, }: HandleStopBreakoutOptions) => void;

export declare interface HandleStopBreakoutOptions {
    socket: Socket;
    localSocket?: Socket;
    roomName: string;
    showAlert?: ShowAlert;
    updateBreakOutRoomStarted: (started: boolean) => void;
    updateBreakOutRoomEnded: (ended: boolean) => void;
    onBreakoutRoomsClose: () => void;
    meetingDisplayType: string;
    prevMeetingDisplayType: string;
    updateMeetingDisplayType: (displayType: string) => void;
}

export declare type HandleStopBreakoutType = (options: HandleStopBreakoutOptions) => void;

/**
 * Handles stopping a whiteboard session.
 * @function
 * @param {HandleStopWhiteboardOptions} options - The options for stopping the whiteboard.
 * @param {Socket} options.socket - The socket instance for communication.
 * @param {string} options.roomName - The name of the room.
 * @param {ShowAlert} [options.showAlert] - Function to show alerts.
 * @param {Function} options.updateWhiteboardStarted - Function to update whiteboard started state.
 * @param {Function} options.updateWhiteboardEnded - Function to update whiteboard ended state.
 * @param {Function} options.updateIsConfigureWhiteboardModalVisible - Function to close the configure modal.
 * @returns {Promise<boolean>}
 */
export declare const handleStopWhiteboard: ({ socket, roomName, showAlert, updateWhiteboardStarted, updateWhiteboardEnded, updateIsConfigureWhiteboardModalVisible, }: HandleStopWhiteboardOptions) => Promise<boolean>;

export declare interface HandleStopWhiteboardOptions {
    socket: Socket;
    roomName: string;
    showAlert?: ShowAlert;
    updateWhiteboardStarted: (started: boolean) => void;
    updateWhiteboardEnded: (ended: boolean) => void;
    updateIsConfigureWhiteboardModalVisible: (isVisible: boolean) => void;
}

export declare type HandleStopWhiteboardType = (options: HandleStopWhiteboardOptions) => Promise<boolean>;

/**
 * Handles the voting process for a poll.
 *
 * @param {HandleVotePollOptions} options - The options for handling the vote.
 * @param {string} options.pollId - The ID of the poll.
 * @param {number} options.optionIndex - The index of the selected option.
 * @param {Socket} options.socket - The socket instance for communication.
 * @param {Function} [options.showAlert] - Optional function to show alerts.
 * @param {string} options.member - The member who is voting.
 * @param {string} options.roomName - The name of the room where the poll is conducted.
 * @param {Function} options.updateIsPollModalVisible - Function to update the visibility of the poll modal.
 *
 * @example
 * ```typescript
 * handleVotePoll({
 *   pollId: "poll123",
 *   optionIndex: 1,
 *   socket: socketInstance,
 *   showAlert: (message) => console.log(message),
 *   member: "user1",
 *   roomName: "roomA",
 *   updateIsPollModalVisible: (isVisible) => setIsPollModalVisible(isVisible),
 * });
 * ```
 */
export declare const handleVotePoll: ({ pollId, optionIndex, socket, showAlert, member, roomName, updateIsPollModalVisible, }: HandleVotePollOptions) => Promise<void>;

export declare interface HandleVotePollOptions {
    pollId: string;
    optionIndex: number;
    socket: Socket;
    showAlert?: ShowAlert;
    member: string;
    roomName: string;
    updateIsPollModalVisible: (isVisible: boolean) => void;
}

export declare type HandleVotePollType = (options: HandleVotePollOptions) => Promise<void>;

/**
 * Handles connection request with rate limiting for welcome page
 *
 * @param {HandleWelcomeRequestOptions} options - Configuration for the request
 * @returns {Promise<void>}
 *
 * @example
 * ```typescript
 * await handleWelcomeRequest({
 *   apiUserName: 'room123',
 *   apiToken: 'secret123',
 *   link: 'https://mediasfu.com/meeting',
 *   userName: 'John Doe',
 *   parameters,
 * });
 * ```
 */
export declare function handleWelcomeRequest({ apiUserName, apiToken, link, userName, parameters, }: HandleWelcomeRequestOptions): Promise<void>;

/**
 * Options for handleWelcomeRequest function
 */
export declare interface HandleWelcomeRequestOptions {
    apiUserName: string;
    apiToken: string;
    link: string;
    userName: string;
    parameters: PreJoinPageParameters;
}

export declare const hdCons: {
    width: {
        ideal: number;
    };
    height: {
        ideal: number;
    };
};

export declare const hdConsNeu: {
    width: {
        ideal: number;
    };
    height: {
        ideal: number;
    };
};

export declare const hdConsPort: {
    width: {
        ideal: number;
    };
    height: {
        ideal: number;
    };
};

export declare const hdFrameRate = 15;

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
export declare const hostRequestResponse: ({ requestResponse, showAlert, requestList, updateRequestList, updateMicAction, updateVideoAction, updateScreenAction, updateChatAction, updateAudioRequestState, updateVideoRequestState, updateScreenRequestState, updateChatRequestState, updateAudioRequestTime, updateVideoRequestTime, updateScreenRequestTime, updateChatRequestTime, updateRequestIntervalSeconds, }: HostRequestResponseOptions) => Promise<void>;

export declare interface HostRequestResponseData {
    requestResponse: RequestResponse;
}

export declare interface HostRequestResponseOptions {
    requestResponse: RequestResponse;
    showAlert?: ShowAlert;
    requestList: Request_2[];
    updateRequestList: (requestList: Request_2[]) => void;
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

export declare type HostRequestResponseType = (options: HostRequestResponseOptions) => Promise<void>;

export declare const hParams: HParamsType;

export declare type HParamsType = {
    encodings: RtpEncodingParameters[];
    codecOptions?: ProducerCodecOptions;
};

export declare type InfoPosition = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';

export declare const initialValuesState: {
    roomName: string;
    member: string;
    adminPasscode: string;
    islevel: string;
    coHost: string;
    coHostResponsibility: {
        name: string;
        value: boolean;
        dedicated: boolean;
    }[];
    youAreCoHost: boolean;
    youAreHost: boolean;
    confirmedToRecord: boolean;
    meetingDisplayType: string;
    meetingVideoOptimized: boolean;
    eventType: string;
    participants: never[];
    filteredParticipants: never[];
    participantsCounter: number;
    participantsFilter: string;
    validated: boolean;
    localUIMode: boolean;
    socket: {};
    localSocket: undefined;
    roomData: null;
    device: null;
    apiKey: string;
    apiUserName: string;
    apiToken: string;
    link: string;
    consume_sockets: never[];
    rtpCapabilities: null;
    roomRecvIPs: never[];
    meetingRoomParams: null;
    itemPageLimit: number;
    audioOnlyRoom: boolean;
    addForBasic: boolean;
    screenPageLimit: number;
    shareScreenStarted: boolean;
    shared: boolean;
    targetOrientation: string;
    targetResolution: string;
    targetResolutionHost: string;
    vidCons: {
        width: number;
        height: number;
    };
    frameRate: number;
    hParams: {};
    vParams: {};
    screenParams: {};
    aParams: {};
    recordingAudioPausesLimit: number;
    recordingAudioPausesCount: number;
    recordingAudioSupport: boolean;
    recordingAudioPeopleLimit: number;
    recordingAudioParticipantsTimeLimit: number;
    recordingVideoPausesCount: number;
    recordingVideoPausesLimit: number;
    recordingVideoSupport: boolean;
    recordingVideoPeopleLimit: number;
    recordingVideoParticipantsTimeLimit: number;
    recordingAllParticipantsSupport: boolean;
    recordingVideoParticipantsSupport: boolean;
    recordingAllParticipantsFullRoomSupport: boolean;
    recordingVideoParticipantsFullRoomSupport: boolean;
    recordingPreferredOrientation: string;
    recordingSupportForOtherOrientation: boolean;
    recordingMultiFormatsSupport: boolean;
    userRecordingParams: {
        mainSpecs: {
            mediaOptions: string;
            audioOptions: string;
            videoOptions: string;
            videoType: string;
            videoOptimized: boolean;
            recordingDisplayType: string;
            addHLS: boolean;
        };
        dispSpecs: {
            nameTags: boolean;
            backgroundColor: string;
            nameTagsColor: string;
            orientationVideo: string;
        };
    };
    canRecord: boolean;
    startReport: boolean;
    endReport: boolean;
    recordTimerInterval: null;
    recordStartTime: number;
    recordElapsedTime: number;
    isTimerRunning: boolean;
    canPauseResume: boolean;
    recordChangeSeconds: number;
    pauseLimit: number;
    pauseRecordCount: number;
    canLaunchRecord: boolean;
    stopLaunchRecord: boolean;
    participantsAll: never[];
    firstAll: boolean;
    updateMainWindow: boolean;
    first_round: boolean;
    landScaped: boolean;
    lock_screen: boolean;
    screenId: string;
    allVideoStreams: never[];
    newLimitedStreams: never[];
    newLimitedStreamsIDs: never[];
    activeSounds: never[];
    screenShareIDStream: string;
    screenShareNameStream: string;
    adminIDStream: string;
    adminNameStream: string;
    youYouStream: never[];
    youYouStreamIDs: never[];
    localStream: null;
    recordStarted: boolean;
    recordResumed: boolean;
    recordPaused: boolean;
    recordStopped: boolean;
    adminRestrictSetting: boolean;
    videoRequestState: null;
    videoRequestTime: number;
    videoAction: boolean;
    localStreamVideo: null;
    userDefaultVideoInputDevice: string;
    currentFacingMode: string;
    prevFacingMode: string;
    defVideoID: string;
    allowed: boolean;
    dispActiveNames: never[];
    activeNames: never[];
    prevActiveNames: never[];
    p_activeNames: never[];
    p_dispActiveNames: never[];
    membersReceived: boolean;
    deferScreenReceived: boolean;
    hostFirstSwitch: boolean;
    micAction: boolean;
    screenAction: boolean;
    chatAction: boolean;
    audioRequestState: null;
    screenRequestState: null;
    chatRequestState: null;
    audioRequestTime: number;
    screenRequestTime: number;
    chatRequestTime: number;
    updateRequestIntervalSeconds: number;
    oldSoundIds: never[];
    hostLabel: string;
    mainScreenFilled: boolean;
    localStreamScreen: null;
    screenAlreadyOn: boolean;
    chatAlreadyOn: boolean;
    redirectURL: string;
    oldAllStreams: never[];
    adminVidID: string;
    streamNames: never[];
    non_alVideoStreams: never[];
    sortAudioLoudness: boolean;
    audioDecibels: never[];
    mixed_alVideoStreams: never[];
    non_alVideoStreams_muted: never[];
    paginatedStreams: never[];
    localStreamAudio: null;
    defAudioID: string;
    userDefaultAudioInputDevice: string;
    userDefaultAudioOutputDevice: string;
    prevAudioInputDevice: string;
    prevVideoInputDevice: string;
    audioPaused: boolean;
    mainScreenPerson: string;
    adminOnMainScreen: boolean;
    screenStates: {
        mainScreenPerson: string;
        mainScreenProducerId: string;
        mainScreenFilled: boolean;
        adminOnMainScreen: boolean;
    }[];
    prevScreenStates: {
        mainScreenPerson: string;
        mainScreenProducerId: string;
        mainScreenFilled: boolean;
        adminOnMainScreen: boolean;
    }[];
    updateDateState: null;
    lastUpdate: null;
    nForReadjustRecord: number;
    fixedPageLimit: number;
    removeAltGrid: boolean;
    nForReadjust: number;
    reorderInterval: number;
    fastReorderInterval: number;
    lastReorderTime: number;
    audStreamNames: never[];
    currentUserPage: number;
    mainHeightWidth: number;
    prevMainHeightWidth: number;
    prevDoPaginate: boolean;
    doPaginate: boolean;
    shareEnded: boolean;
    lStreams: never[];
    chatRefStreams: never[];
    controlHeight: number;
    isWideScreen: boolean;
    isMediumScreen: boolean;
    isSmallScreen: boolean;
    addGrid: boolean;
    addAltGrid: boolean;
    gridRows: number;
    gridCols: number;
    altGridRows: number;
    altGridCols: number;
    numberPages: number;
    currentStreams: never[];
    showMiniView: boolean;
    nStream: null;
    defer_receive: boolean;
    allAudioStreams: never[];
    remoteScreenStream: never[];
    screenProducer: null;
    localScreenProducer: null;
    gotAllVids: boolean;
    paginationHeightWidth: number;
    paginationDirection: string;
    gridSizes: {
        gridWidth: number;
        gridHeight: number;
        altGridWidth: number;
        altGridHeight: number;
    };
    screenForceFullDisplay: boolean;
    mainGridStream: never[];
    otherGridStreams: never[][];
    audioOnlyStreams: never[];
    videoInputs: never[];
    audioInputs: never[];
    meetingProgressTime: string;
    meetingElapsedTime: number;
    ref_participants: never[];
    messages: never[];
    startDirectMessage: boolean;
    directMessageDetails: null;
    showMessagesBadge: boolean;
    audioSetting: string;
    videoSetting: string;
    screenshareSetting: string;
    chatSetting: string;
    displayOption: string;
    autoWave: boolean;
    forceFullDisplay: boolean;
    prevForceFullDisplay: boolean;
    prevMeetingDisplayType: string;
    waitingRoomFilter: string;
    waitingRoomList: never[];
    waitingRoomCounter: number;
    filteredWaitingRoomList: never[];
    requestFilter: string;
    requestList: never[];
    requestCounter: number;
    filteredRequestList: never[];
    totalReqWait: number;
    alertVisible: boolean;
    alertMessage: string;
    alertType: string;
    alertDuration: number;
    progressTimerVisible: boolean;
    progressTimerValue: number;
    isMenuModalVisible: boolean;
    isRecordingModalVisible: boolean;
    isSettingsModalVisible: boolean;
    isRequestsModalVisible: boolean;
    isWaitingModalVisible: boolean;
    isCoHostModalVisible: boolean;
    isMediaSettingsModalVisible: boolean;
    isDisplaySettingsModalVisible: boolean;
    isParticipantsModalVisible: boolean;
    isMessagesModalVisible: boolean;
    isConfirmExitModalVisible: boolean;
    isConfirmHereModalVisible: boolean;
    isShareEventModalVisible: boolean;
    isLoadingModalVisible: boolean;
    recordingMediaOptions: string;
    recordingAudioOptions: string;
    recordingVideoOptions: string;
    recordingVideoType: string;
    recordingVideoOptimized: boolean;
    recordingDisplayType: string;
    recordingAddHLS: boolean;
    recordingNameTags: boolean;
    recordingBackgroundColor: string;
    recordingNameTagsColor: string;
    recordingAddText: boolean;
    recordingCustomText: string;
    recordingCustomTextPosition: string;
    recordingCustomTextColor: string;
    recordingOrientationVideo: string;
    clearedToResume: boolean;
    clearedToRecord: boolean;
    recordState: string;
    showRecordButtons: boolean;
    recordingProgressTime: string;
    audioSwitching: boolean;
    videoSwitching: boolean;
    videoAlreadyOn: boolean;
    audioAlreadyOn: boolean;
    componentSizes: {
        mainHeight: number;
        otherHeight: number;
        mainWidth: number;
        otherWidth: number;
    };
    hasCameraPermission: boolean;
    hasAudioPermission: boolean;
    transportCreated: boolean;
    localTransportCreated: boolean;
    transportCreatedVideo: boolean;
    transportCreatedAudio: boolean;
    transportCreatedScreen: boolean;
    producerTransport: null;
    localProducerTransport: null;
    videoProducer: null;
    localVideoProducer: null;
    params: {};
    videoParams: {};
    audioParams: {};
    audioProducer: null;
    localAudioProducer: null;
    consumerTransports: never[];
    consumingTransports: never[];
    polls: never[];
    poll: null;
    isPollModalVisible: boolean;
    customImage: string;
    selectedImage: string;
    segmentVideo: null;
    selfieSegmentation: null;
    pauseSegmentation: boolean;
    processedStream: null;
    keepBackground: boolean;
    backgroundHasChanged: boolean;
    virtualStream: null;
    mainCanvas: null;
    prevKeepBackground: boolean;
    appliedBackground: boolean;
    isBackgroundModalVisible: boolean;
    autoClickBackground: boolean;
    breakoutRooms: never[];
    currentRoomIndex: number;
    canStartBreakout: boolean;
    breakOutRoomStarted: boolean;
    breakOutRoomEnded: boolean;
    hostNewRoom: number;
    limitedBreakRoom: never[];
    mainRoomsLength: number;
    memberRoom: number;
    isBreakoutRoomsModalVisible: boolean;
    whiteboardUsers: never[];
    currentWhiteboardIndex: number;
    canStartWhiteboard: boolean;
    whiteboardStarted: boolean;
    whiteboardEnded: boolean;
    whiteboardLimit: number;
    isWhiteboardModalVisible: boolean;
    isConfigureWhiteboardModalVisible: boolean;
    shapes: never[];
    useImageBackground: boolean;
    redoStack: never[];
    undoStack: never[];
    canvasStream: null;
    canvasWhiteboard: null;
    canvasScreenboard: null;
    processedScreenStream: null;
    annotateScreenStream: boolean;
    mainScreenCanvas: null;
    isScreenboardModalVisible: boolean;
    micActive: boolean;
    videoActive: boolean;
    screenShareActive: boolean;
    endCallActive: boolean;
    participantsActive: boolean;
    menuActive: boolean;
    commentsActive: boolean;
};

export declare type InitialValuesStateType = typeof initialValuesState;

export declare const isConsumingTranslationForSpeaker: (speakerId: string, consumerTransports: Transport[], translationProducerMap: Map<string, {
    translationProducerId: string;
    originalProducerId: string;
    language: string;
}>) => {
    consuming: boolean;
    language?: string;
    translationProducerId?: string;
    originalProducerId?: string;
};

export declare const isLanguageSupported: (code: string) => boolean;

export declare const isSpeakerInMyBreakoutRoom: (speakerName: string, parameters: TranslationConsumerSwitchParameters) => boolean;

export declare const isSubtitleExpired: (subtitle: LiveSubtitle, now?: number) => boolean;

/**
 * Joins a conference room using the provided options.
 *
 * @param {JoinConRoomOptions} options - The options for joining the conference room.
 * @param {Socket} options.socket - The socket instance to use for communication.
 * @param {string} options.roomName - The name of the room to join.
 * @param {string} options.islevel - The level of the user.
 * @param {string} options.member - The member identifier.
 * @param {string} options.sec - The security token.
 * @param {string} options.apiUserName - The API username.
 *
 * @returns {Promise<JoinConRoomResponse>} A promise that resolves with the response of the join operation.
 *
 * @example
 * ```typescript
 * const options = {
 *   socket: socketInstance,
 *   roomName: "s12345678",
 *   islevel: "1",
 *   member: "user123",
 *   sec: "64CharacterLongSecretHere",
 *   apiUserName: "user123",
 * };
 *
 * try {
 *   const response = await joinConRoom(options);
 *   console.log("Room joined:", response);
 * } catch (error) {
 *   console.error("Failed to join room:", error);
 * }
 * ```
 */
export declare function joinConRoom({ socket, roomName, islevel, member, sec, apiUserName }: JoinConRoomOptions): Promise<JoinConRoomResponse>;

export declare interface JoinConRoomOptions {
    socket: Socket;
    roomName: string;
    islevel: string;
    member: string;
    sec: string;
    apiUserName: string;
}

export declare interface JoinConRoomResponse {
    success: boolean;
    rtpCapabilities: RtpCapabilities | null;
    reason?: string;
    banned?: boolean;
    suspended?: boolean;
    noAdmin?: boolean;
    [key: string]: any;
}

export declare type JoinConRoomType = (options: JoinConRoomOptions) => Promise<JoinConRoomResponse>;

/**
 * Joins a consumption room by sending a request to the server, handling device setup, and managing piped transports.
 *
 * @function
 * @async
 * @param {Object} options - The configuration options.
 * @param {Socket} options.remote_sock - The remote socket for communication.
 * @param {string} options.apiToken - The API token for authentication.
 * @param {string} options.apiUserName - The API username for authentication.
 * @param {JoinConsumeRoomParameters} options.parameters - Additional parameters including room details and Mediasoup configurations.
 * @returns {Promise<JoinConsumeRoomResponse>} - An object indicating the success of joining the room and optional RTP capabilities.
 * @throws {Error} Throws an error if joining the room or setup fails.
 *
 * @example
 * import { joinConsumeRoom } from 'mediasfu-reactjs';
 * import { io } from 'socket.io-client';
 *
 * const apiToken = 'your-api-token';
 * const apiUserName = 'your-api-username';
 * const remote_sock = io("http://localhost:3000");
 *
 * const parameters = {
 *   roomName: 'room-name',
 *   islevel: '2',
 *   member: 'user-id',
 *   device: null,
 *   updateDevice: (device) => console.log('Device updated:', device),
 *   receiveAllPipedTransports: (params) => console.log('Receiving all piped transports:', params),
 *   createDeviceClient: async (params) => { // Device client setup logic  },
 *   getUpdatedAllParams: () => console.log('Getting updated parameters'),
 * };
 *
 * async function init() {
 *   try {
 *     const data = await joinConsumeRoom({
 *       remote_sock,
 *       apiToken,
 *       apiUserName,
 *       parameters,
 *     });
 *     console.log('Joined room:', data);
 *   } catch (error) {
 *     console.error('Error joining room:', error);
 *   }
 * }
 * init();
 * // Expected output: { success: true, rtpCapabilities: { ... } }
 */
export declare const joinConsumeRoom: ({ remote_sock, apiToken, apiUserName, parameters, }: JoinConsumeRoomOptions) => Promise<JoinConsumeRoomResponse>;

export declare interface JoinConsumeRoomOptions {
    remote_sock: Socket;
    apiToken: string;
    apiUserName: string;
    parameters: JoinConsumeRoomParameters;
}

export declare interface JoinConsumeRoomParameters extends ReceiveAllPipedTransportsParameters {
    roomName: string;
    islevel: string;
    member: string;
    device: Device | null;
    updateDevice: (device: Device | null) => void;
    receiveAllPipedTransports: ReceiveAllPipedTransportsType;
    createDeviceClient: CreateDeviceClientType;
    getUpdatedAllParams: () => JoinConsumeRoomParameters;
    [key: string]: any;
}

declare interface JoinConsumeRoomResponse {
    success: boolean;
    rtpCapabilities?: RtpCapabilities | null;
}

export declare type JoinConsumeRoomType = (options: JoinConsumeRoomOptions) => Promise<JoinConsumeRoomResponse>;

/**
 * Options for joining a local event room
 */
export declare interface JoinLocalEventRoomOptions {
    joinData: JoinLocalEventRoomParameters;
    link?: string;
}

/**
 * Parameters for joining a local event room
 */
export declare interface JoinLocalEventRoomParameters {
    eventID: string;
    userName: string;
    secureCode?: string;
    videoPreference?: string | null;
    audioPreference?: string | null;
    audioOutputPreference?: string | null;
}

export declare function joinLocalRoom({ socket, roomName, islevel, member, sec, apiUserName, parameters, checkConnect, joinMediaSFURoom, localLink, }: JoinLocalRoomOptions): Promise<ResponseJoinLocalRoom>;

export declare interface JoinLocalRoomOptions {
    socket: Socket;
    roomName: string;
    islevel: string;
    member: string;
    sec: string;
    apiUserName: string;
    parameters: PreJoinPageParameters;
    checkConnect?: boolean;
    joinMediaSFURoom?: JoinRoomOnMediaSFUType;
    localLink?: string;
}

export declare type JoinLocalRoomType = (options: JoinLocalRoomOptions) => Promise<ResponseJoinLocalRoom>;

export declare interface JoinMediaSFURoomOptions {
    action: 'join';
    meetingID: string;
    userName: string;
    secureCode?: string;
}

/**
 * Joins a user to a specified room via a socket connection.
 *
 * @param {JoinRoomOptions} options - The options for joining the room.
 * @param {Socket} options.socket - The socket instance to use for communication.
 * @param {string} options.roomName - The name of the room to join.
 * @param {string} options.islevel - The level of the user.
 * @param {string} options.member - The member identifier.
 * @param {string} options.sec - The security token.
 * @param {string} options.apiUserName - The API username of the user.
 *
 * @returns {Promise<JoinRoomResponse>} A promise that resolves with the data received from the 'joinRoom' event or rejects with a validation error.
 */
export declare function joinRoom({ socket, roomName, islevel, member, sec, apiUserName, }: JoinRoomOptions): Promise<JoinRoomResponse>;

/**
 * Joins a room by delegating to the producer or consumer join emit based on the consume flag.
 *
 * @param {JoinRoomClientOptions} options - The options for joining the room.
 * @returns {Promise<JoinRoomClientResponse>} The response returned from the server.
 */
export declare const joinRoomClient: ({ socket, roomName, islevel, member, sec, apiUserName, consume, }: JoinRoomClientOptions) => Promise<JoinRoomClientResponse>;

export declare interface JoinRoomClientOptions {
    socket: Socket;
    roomName: string;
    islevel: string;
    member: string;
    sec: string;
    apiUserName: string;
    consume?: boolean;
}

export declare type JoinRoomClientResponse = JoinRoomResponse | JoinConRoomResponse;

export declare type JoinRoomClientType = (options: JoinRoomClientOptions) => Promise<JoinRoomClientResponse>;

/**
 * Calls the MediaSFU join-room API and returns a normalized success/error result.
 *
 * This helper supports both cloud and self-hosted deployments through the
 * optional `localLink` override.
 *
 * @param options API request options including credentials and join payload.
 * @returns A result object containing either parsed response data or an error payload.
 *
 * @example
 * ```typescript
 * const result = await joinRoomOnMediaSFU({
 *   payload: { action: 'join', meetingID: 'room123', userName: 'Ada' },
 *   apiUserName: 'sampleuser',
 *   apiKey: '0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef',
 * });
 *
 * if (result.success) {
 *   console.log(result.data?.roomName);
 * }
 * ```
 */
export declare const joinRoomOnMediaSFU: CreateJoinRoomType;

export declare type JoinRoomOnMediaSFUType = (options: {
    payload: JoinMediaSFURoomOptions;
    apiUserName: string;
    apiKey: string;
    localLink?: string;
}) => Promise<{
    data: CreateJoinRoomResponse | CreateJoinRoomError | null;
    success: boolean;
}>;

declare type JoinRoomOnMediaSFUType_2 = (options: {
    payload: JoinMediaSFURoomOptions;
    apiUserName: string;
    apiKey: string;
    localLink?: string;
}) => Promise<CreateJoinRoomResult>;

export declare interface JoinRoomOptions {
    socket: Socket;
    roomName: string;
    islevel: string;
    member: string;
    sec: string;
    apiUserName: string;
}

export declare interface JoinRoomResponse {
    success: boolean;
    rtpCapabilities: RtpCapabilities | null;
    reason?: string;
    banned?: boolean;
    suspended?: boolean;
    noAdmin?: boolean;
    [key: string]: any;
}

export declare type JoinRoomType = (options: JoinRoomOptions) => Promise<JoinRoomResponse>;

export declare interface LanguageEntry {
    code: string;
    nickname?: string;
    voiceConfig?: TranslationVoiceConfig;
}

export declare interface LanguageMetadata {
    name: string;
    nativeName: string;
    region: LanguageRegion;
    ttsSupport: TTSSupport;
}

export declare type LanguageMode = 'allowlist' | 'blocklist' | 'any';

export declare interface LanguageOption {
    code: string;
    name: string;
    nativeName: string;
    region: LanguageRegion;
    ttsSupport: TTSSupport;
}

export declare type LanguageRegion = 'global' | 'europe' | 'asia' | 'south-asia' | 'mena' | 'africa' | 'caucasus' | 'central-asia' | 'constructed' | 'special' | 'other';

/**
 * Toggles the visibility of the background modal.
 */
export declare const launchBackground: LaunchBackgroundType;

export declare interface LaunchBackgroundOptions {
    updateIsBackgroundModalVisible: (isVisible: boolean) => void;
    isBackgroundModalVisible: boolean;
}

export declare type LaunchBackgroundType = (options: LaunchBackgroundOptions) => void;

/**
 * Launches the breakout rooms by toggling the visibility of the breakout rooms modal.
 *
 * @param {LaunchBreakoutRoomsOptions} options - The options object.
 * @param {Function} options.updateIsBreakoutRoomsModalVisible - Function to update the visibility state of the breakout rooms modal.
 * @param {boolean} options.isBreakoutRoomsModalVisible - Current visibility state of the breakout rooms modal.
 *
 * @example
 * ```typescript
 * const options: LaunchBreakoutRoomsOptions = {
 *   updateIsBreakoutRoomsModalVisible: setModalVisible,
 *   isBreakoutRoomsModalVisible: false,
 * }
 *
 * launchBreakoutRooms(options)
 * // Toggles the breakout rooms modal to visible.
 * ```
 */
export declare const launchBreakoutRooms: LaunchBreakoutRoomsType;

export declare interface LaunchBreakoutRoomsOptions {
    updateIsBreakoutRoomsModalVisible: (isVisible: boolean) => void;
    isBreakoutRoomsModalVisible: boolean;
}

export declare type LaunchBreakoutRoomsType = (options: LaunchBreakoutRoomsOptions) => void;

/**
 * Toggles the visibility of the co-host modal.
 *
 * @param {LaunchCoHostOptions} options - The options object.
 * @param {Function} options.updateIsCoHostModalVisible - Function to update the visibility state of the co-host modal.
 * @param {boolean} options.isCoHostModalVisible - Current visibility state of the co-host modal.
 *
 * @example
 * ```typescript
 * const options: LaunchCoHostOptions = {
 *   updateIsCoHostModalVisible: setModalVisible,
 *   isCoHostModalVisible: false,
 * }
 *
 * launchCoHost(options)
 * // Toggles the co-host modal to visible.
 * ```
 */
export declare const launchCoHost: LaunchCoHostType;

export declare interface LaunchCoHostOptions {
    updateIsCoHostModalVisible: (isVisible: boolean) => void;
    isCoHostModalVisible: boolean;
}

export declare type LaunchCoHostType = (options: LaunchCoHostOptions) => void;

/**
 * Toggles the visibility of the configure whiteboard modal.
 *
 * @param {LaunchConfigureWhiteboardOptions} options - The options for toggling the whiteboard modal visibility.
 * @param {Function} options.updateIsConfigureWhiteboardModalVisible - Function to update the visibility state of the configure whiteboard modal.
 * @param {boolean} options.isConfigureWhiteboardModalVisible - Current visibility state of the configure whiteboard modal.
 *
 * @example
 * ```typescript
 * const options = {
 *   updateIsConfigureWhiteboardModalVisible: (visible: boolean) => console.log('Modal visibility updated:', visible),
 *   isConfigureWhiteboardModalVisible: false,
 * }
 * launchConfigureWhiteboard(options)
 * ```
 */
export declare const launchConfigureWhiteboard: LaunchConfigureWhiteboardType;

export declare interface LaunchConfigureWhiteboardOptions {
    updateIsConfigureWhiteboardModalVisible: (visible: boolean) => void;
    isConfigureWhiteboardModalVisible: boolean;
}

export declare type LaunchConfigureWhiteboardType = (options: LaunchConfigureWhiteboardOptions) => void;

/**
 * Toggles the visibility of the confirmation exit modal.
 *
 * @param {LaunchConfirmExitOptions} options - The options for launching the confirmation exit modal.
 * @param {Function} options.updateIsConfirmExitModalVisible - Function to update the visibility state of the confirmation exit modal.
 * @param {boolean} options.isConfirmExitModalVisible - Current visibility state of the confirmation exit modal.
 *
 * @example
 * ```typescript
 * const options = {
 *   updateIsConfirmExitModalVisible: setIsConfirmExitModalVisible,
 *   isConfirmExitModalVisible: false,
 * }
 * launchConfirmExit(options)
 * ```
 */
export declare const launchConfirmExit: LaunchConfirmExitType;

export declare interface LaunchConfirmExitOptions {
    updateIsConfirmExitModalVisible: (isVisible: boolean) => void;
    isConfirmExitModalVisible: boolean;
}

export declare type LaunchConfirmExitType = (options: LaunchConfirmExitOptions) => void;

/**
 * Toggles the visibility of the display settings modal.
 *
 * @param {LaunchDisplaySettingsOptions} options - The options object.
 * @param {Function} options.updateIsDisplaySettingsModalVisible - Function to update the visibility state of the display settings modal.
 * @param {boolean} options.isDisplaySettingsModalVisible - Current visibility state of the display settings modal.
 *
 * @example
 * ```typescript
 * const options: LaunchDisplaySettingsOptions = {
 *   updateIsDisplaySettingsModalVisible: setModalVisibilityFunction,
 *   isDisplaySettingsModalVisible: false,
 * }
 *
 * launchDisplaySettings(options)
 * // This will open the display settings modal if it's currently closed, or close it if it's open.
 * ```
 */
export declare const launchDisplaySettings: LaunchDisplaySettingsType;

export declare interface LaunchDisplaySettingsOptions {
    updateIsDisplaySettingsModalVisible: (isVisible: boolean) => void;
    isDisplaySettingsModalVisible: boolean;
}

export declare type LaunchDisplaySettingsType = (options: LaunchDisplaySettingsOptions) => void;

/**
 * Launches the media settings modal and updates the available audio and video input devices.
 *
 * @param {LaunchMediaSettingsOptions} options - The options for launching media settings.
 * @param {Function} options.updateIsMediaSettingsModalVisible - Function to update the visibility state of the media settings modal.
 * @param {boolean} options.isMediaSettingsModalVisible - Current visibility state of the media settings modal.
 * @param {MediaDevices} options.mediaDevices - MediaDevices interface to enumerate media devices.
 * @param {MediaDeviceInfo[]} options.audioInputs - Array to store available audio input devices.
 * @param {MediaDeviceInfo[]} options.videoInputs - Array to store available video input devices.
 * @param {Function} options.updateAudioInputs - Function to update the available audio input devices.
 * @param {Function} options.updateVideoInputs - Function to update the available video input devices.
 * @returns {Promise<void>} A promise that resolves when the media settings have been updated.
 *
 * @example
 * ```typescript
 * launchMediaSettings({
 *   updateIsMediaSettingsModalVisible: (isVisible) => console.log('Modal visible:', isVisible),
 *   isMediaSettingsModalVisible: false,
 *   mediaDevices: navigator.mediaDevices,
 *   audioInputs: [],
 *   videoInputs: [],
 *   updateAudioInputs: (inputs) => console.log('Audio Inputs:', inputs),
 *   updateVideoInputs: (inputs) => console.log('Video Inputs:', inputs),
 * })
 * ```
 */
export declare const launchMediaSettings: LaunchMediaSettingsType;

export declare interface LaunchMediaSettingsOptions {
    updateIsMediaSettingsModalVisible: (isVisible: boolean) => void;
    isMediaSettingsModalVisible: boolean;
    mediaDevices: MediaDevices;
    audioInputs: MediaDeviceInfo[];
    videoInputs: MediaDeviceInfo[];
    updateAudioInputs: (inputs: MediaDeviceInfo[]) => void;
    updateVideoInputs: (inputs: MediaDeviceInfo[]) => void;
}

export declare type LaunchMediaSettingsType = (options: LaunchMediaSettingsOptions) => Promise<void>;

/**
 * Toggles the visibility of the menu modal.
 *
 * @param {LaunchMenuModalOptions} options - The options for launching the menu modal.
 * @param {Function} options.updateIsMenuModalVisible - Function to update the visibility state of the menu modal.
 * @param {boolean} options.isMenuModalVisible - Current visibility state of the menu modal.
 *
 * @example
 * ```typescript
 * launchMenuModal({
 *   updateIsMenuModalVisible: (isVisible) => console.log("Menu modal visibility:", isVisible),
 *   isMenuModalVisible: false,
 * });
 * ```
 */
export declare const launchMenuModal: LaunchMenuModalType;

export declare interface LaunchMenuModalOptions {
    updateIsMenuModalVisible: (isVisible: boolean) => void;
    isMenuModalVisible: boolean;
}

export declare type LaunchMenuModalType = (options: LaunchMenuModalOptions) => void;

/**
 * Toggles the visibility state of the messages modal.
 *
 * @param {LaunchMessagesOptions} options - The options object.
 * @param {Function} options.updateIsMessagesModalVisible - Function to update the visibility state of the messages modal.
 * @param {boolean} options.isMessagesModalVisible - Current visibility state of the messages modal.
 *
 * @example
 * ```typescript
 * const options: LaunchMessagesOptions = {
 *   updateIsMessagesModalVisible: setModalVisibilityFunction,
 *   isMessagesModalVisible: false,
 * }
 *
 * launchMessages(options)
 * ```
 */
export declare const launchMessages: LaunchMessagesType;

export declare interface LaunchMessagesOptions {
    updateIsMessagesModalVisible: (visible: boolean) => void;
    isMessagesModalVisible: boolean;
}

export declare type LaunchMessagesType = (options: LaunchMessagesOptions) => void;

export declare const launchPanelists: ({ updateIsPanelistsModalVisible, isPanelistsModalVisible, }: LaunchPanelistsOptions) => void;

export declare interface LaunchPanelistsOptions {
    updateIsPanelistsModalVisible: (visible: boolean) => void;
    isPanelistsModalVisible: boolean;
}

export declare type LaunchPanelistsType = (options: LaunchPanelistsOptions) => void;

/**
 * Toggles the visibility of the participants modal.
 *
 * @param {LaunchParticipantsOptions} options - The options for toggling the participants modal.
 * @param {Function} options.updateIsParticipantsModalVisible - Function to update the visibility state of the participants modal.
 * @param {boolean} options.isParticipantsModalVisible - Current visibility state of the participants modal.
 *
 * @example
 * ```typescript
 * launchParticipants({
 *   updateIsParticipantsModalVisible: (isVisible) => setParticipantsModalVisible(isVisible),
 *   isParticipantsModalVisible: true,
 * })
 * ```
 */
export declare const launchParticipants: LaunchParticipantsType;

export declare interface LaunchParticipantsOptions {
    updateIsParticipantsModalVisible: (isVisible: boolean) => void;
    isParticipantsModalVisible: boolean;
}

export declare type LaunchParticipantsType = (options: LaunchParticipantsOptions) => void;

export declare const launchPermissions: ({ updateIsPermissionsModalVisible, isPermissionsModalVisible, }: LaunchPermissionsOptions) => void;

export declare interface LaunchPermissionsOptions {
    updateIsPermissionsModalVisible: (visible: boolean) => void;
    isPermissionsModalVisible: boolean;
}

export declare type LaunchPermissionsType = (options: LaunchPermissionsOptions) => void;

/**
 * Toggles the visibility of the poll modal.
 *
 * @param {LaunchPollOptions} options - The options for toggling the poll modal visibility.
 * @param {Function} options.updateIsPollModalVisible - Function to update the visibility state of the poll modal.
 * @param {boolean} options.isPollModalVisible - Current visibility state of the poll modal.
 *
 * @example
 * ```typescript
 * launchPoll({
 *   updateIsPollModalVisible: (visible) => setIsPollModalVisible(visible),
 *   isPollModalVisible: false,
 * })
 * ```
 */
export declare const launchPoll: LaunchPollType;

export declare interface LaunchPollOptions {
    updateIsPollModalVisible: (isVisible: boolean) => void;
    isPollModalVisible: boolean;
}

export declare type LaunchPollType = (options: LaunchPollOptions) => void;

/**
 * Launches the recording process based on various conditions and updates the UI accordingly.
 *
 * @param {Object} options - The options for launching the recording.
 * @param {Function} options.updateIsRecordingModalVisible - Function to update the visibility of the recording modal.
 * @param {boolean} options.isRecordingModalVisible - Indicates if the recording modal is currently visible.
 * @param {Function} options.showAlert - Function to show an alert message.
 * @param {boolean} options.stopLaunchRecord - Indicates if the recording launch should be stopped.
 * @param {boolean} options.canLaunchRecord - Indicates if the recording can be launched.
 * @param {boolean} options.recordingAudioSupport - Indicates if audio recording is supported.
 * @param {boolean} options.recordingVideoSupport - Indicates if video recording is supported.
 * @param {Function} options.updateCanRecord - Function to update the recording capability.
 * @param {Function} options.updateClearedToRecord - Function to update the cleared-to-record status.
 * @param {boolean} options.recordStarted - Indicates if the recording has started.
 * @param {boolean} options.recordPaused - Indicates if the recording is paused.
 * @param {boolean} options.localUIMode - Indicates if the local UI mode is active.
 *
 * @returns {void}
 *
 * @example
 * ```typescript
 * launchRecording({
 *   updateIsRecordingModalVisible: (visible) => console.log(`Modal visible: ${visible}`),
 *   isRecordingModalVisible: false,
 *   showAlert: (alert) => console.log(alert.message),
 *   stopLaunchRecord: false,
 *   canLaunchRecord: true,
 *   recordingAudioSupport: true,
 *   recordingVideoSupport: true,
 *   updateCanRecord: (canRecord) => console.log(`Can record: ${canRecord}`),
 *   updateClearedToRecord: (cleared) => console.log(`Cleared to record: ${cleared}`),
 *   recordStarted: false,
 *   recordPaused: false,
 *   localUIMode: false,
 * })
 * ```
 */
export declare const launchRecording: LaunchRecordingType;

export declare interface LaunchRecordingOptions {
    updateIsRecordingModalVisible: (visible: boolean) => void;
    isRecordingModalVisible: boolean;
    showAlert?: ShowAlert;
    stopLaunchRecord: boolean;
    canLaunchRecord: boolean;
    recordingAudioSupport: boolean;
    recordingVideoSupport: boolean;
    updateCanRecord: (canRecord: boolean) => void;
    updateClearedToRecord: (cleared: boolean) => void;
    recordStarted: boolean;
    recordPaused: boolean;
    localUIMode: boolean;
    [key: string]: any;
}

export declare type LaunchRecordingType = (options: LaunchRecordingOptions) => void;

/**
 * Toggles the visibility state of the requests modal.
 *
 * @param {LaunchRequestsOptions} options - The options for launching requests.
 * @param {Function} options.updateIsRequestsModalVisible - Function to update the visibility state of the requests modal.
 * @param {boolean} options.isRequestsModalVisible - Current visibility state of the requests modal.
 *
 * @example
 * ```typescript
 * launchRequests({
 *   updateIsRequestsModalVisible: setRequestsModalVisible,
 *   isRequestsModalVisible: true,
 * })
 * ```
 */
export declare const launchRequests: LaunchRequestsType;

export declare interface LaunchRequestsOptions {
    updateIsRequestsModalVisible: (isVisible: boolean) => void;
    isRequestsModalVisible: boolean;
}

export declare type LaunchRequestsType = (options: LaunchRequestsOptions) => void;

/**
 * Toggles the visibility state of the settings modal.
 *
 * @param {LaunchSettingsOptions} options - The options for launching settings.
 * @param {Function} options.updateIsSettingsModalVisible - Function to update the visibility state of the settings modal.
 * @param {boolean} options.isSettingsModalVisible - Current visibility state of the settings modal.
 *
 * @example
 * ```typescript
 * launchSettings({
 *   isSettingsModalVisible: false,
 *   updateIsSettingsModalVisible: (visible) => setSettingsModalVisible(visible),
 * })
 * ```
 */
export declare const launchSettings: LaunchSettingsType;

export declare interface LaunchSettingsOptions {
    updateIsSettingsModalVisible: (isVisible: boolean) => void;
    isSettingsModalVisible: boolean;
}

export declare type LaunchSettingsType = (options: LaunchSettingsOptions) => void;

/**
 * Toggles the visibility of the waiting modal.
 *
 * @param {LaunchWaitingOptions} options - The options for toggling the waiting modal visibility.
 * @param {Function} options.updateIsWaitingModalVisible - Function to update the visibility state of the waiting modal.
 * @param {boolean} options.isWaitingModalVisible - Current visibility state of the waiting modal.
 *
 * @example
 * ```typescript
 * const options = {
 *   updateIsWaitingModalVisible: (visible: boolean) => console.log('Waiting modal visibility updated:', visible),
 *   isWaitingModalVisible: true,
 * }
 * launchWaiting(options)
 * ```
 */
export declare const launchWaiting: LaunchWaitingType;

export declare interface LaunchWaitingOptions {
    updateIsWaitingModalVisible: (visible: boolean) => void;
    isWaitingModalVisible: boolean;
}

export declare type LaunchWaitingType = (options: LaunchWaitingOptions) => void;

export declare interface LiveSubtitle {
    text: string;
    language: string;
    timestamp: number;
    expiresAt: number;
    speakerId: string;
    speakerName?: string;
}

export declare interface MainHostCardPlan {
    kind: 'video' | 'audio' | 'mini';
    key: string;
    name: string;
    initials?: string;
    remoteProducerId?: string;
    videoStream?: any;
    doMirror?: boolean;
    state: MainScreenState;
}

export declare type MainHostRenderMode = 'adminVideo' | 'audio' | 'mini' | 'video';

export declare interface MainScreenState {
    filled: boolean;
    adminOnMainScreen: boolean;
    mainScreenPerson: string;
}

export declare type MainSpecs = {
    mediaOptions: string;
    audioOptions: string;
    videoOptions: string;
    videoType: string;
    videoOptimized: boolean;
    recordingDisplayType: 'video' | 'media' | 'all';
    addHLS: boolean;
};

export declare const mediaDevices: {
    getUserMedia: (_constraints: MediaStreamConstraints) => Promise<MediaStream_2>;
    getDisplayMedia: (_constraints: MediaStreamConstraints) => Promise<MediaStream_2>;
    enumerateDevices: () => Promise<MediaDeviceInfo[]>;
};

declare interface MediaEntryLike {
    producerId?: string | null;
    audioID?: string | null;
}

declare class MediaStream_2 {
    tracks: any[];
    constructor(tracks?: any[]);
    [key: string]: any;
}
export { MediaStream_2 as MediaStream }

declare class MediaStreamTrack_2 {
    [key: string]: any;
}
export { MediaStreamTrack_2 as MediaStreamTrack }

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
export declare const meetingEnded: ({ showAlert, redirectURL, onWeb, eventType, }: MeetingEndedOptions) => Promise<void>;

export declare interface MeetingEndedOptions {
    showAlert?: ShowAlert;
    redirectURL?: string;
    onWeb: boolean;
    eventType: EventType;
    updateValidated?: (isValid: boolean) => void;
}

export declare type MeetingEndedType = (options: MeetingEndedOptions) => Promise<void>;

export declare interface MeetingRoomParams {
    itemPageLimit: number;
    mediaType: 'audio' | 'video';
    addCoHost: boolean;
    targetOrientation: 'landscape' | 'neutral' | 'portrait';
    targetOrientationHost: 'landscape' | 'neutral' | 'portrait';
    targetResolution: 'qhd' | 'fhd' | 'hd' | 'sd' | 'QnHD';
    targetResolutionHost: 'qhd' | 'fhd' | 'hd' | 'sd' | 'QnHD';
    type: EventType;
    audioSetting: 'allow' | 'approval' | 'disallow';
    videoSetting: 'allow' | 'approval' | 'disallow';
    screenshareSetting: 'allow' | 'approval' | 'disallow';
    chatSetting: 'allow' | 'disallow';
}

/**
 * Shows the "still there" confirmation modal.
 *
 * @param {MeetingStillThereOptions} options - Visibility setter for the confirmation modal.
 * @returns {Promise<void>} Resolves after the modal is shown.
 *
 * @example
 * ```typescript
 * await meetingStillThere({
 *   updateIsConfirmHereModalVisible: setIsConfirmHereModalVisible,
 * });
 * ```
 */
export declare const meetingStillThere: ({ updateIsConfirmHereModalVisible, }: MeetingStillThereOptions) => Promise<void>;

export declare interface MeetingStillThereData {
    timeRemaining: number;
}

export declare interface MeetingStillThereOptions {
    updateIsConfirmHereModalVisible: (isVisible: boolean) => void;
}

export declare type MeetingStillThereType = (options: MeetingStillThereOptions) => Promise<void>;

/**
 * Shows a meeting countdown alert for non-chat event types.
 *
 * @param options Function options including the remaining time in milliseconds.
 * @returns A promise that resolves after the alert has been evaluated and dispatched.
 */
export declare const meetingTimeRemaining: ({ timeRemaining, showAlert, eventType, }: MeetingTimeRemainingOptions) => Promise<void>;

export declare interface MeetingTimeRemainingData {
    timeRemaining: number;
}

export declare interface MeetingTimeRemainingOptions {
    timeRemaining: number;
    showAlert?: ShowAlert;
    eventType: EventType;
}

export declare type MeetingTimeRemainingType = (options: MeetingTimeRemainingOptions) => Promise<void>;

export declare interface Message {
    sender: string;
    receivers: string[];
    message: string;
    timestamp: string;
    group: boolean;
}

/**
 * Sends a direct message to a participant if the current member has the necessary permissions.
 *
 * @param {MessageParticipantsOptions} options - The options for messaging participants.
 * @param {CoHostResponsibility[]} options.coHostResponsibility - Array of responsibilities assigned to the co-host.
 * @param {Participant} options.participant - The participant to whom the message is to be sent.
 * @param {string} options.member - The current member attempting to send the message.
 * @param {string} options.islevel - The level of the current member.
 * @param {ShowAlert} [options.showAlert] - Function to show an alert message.
 * @param {string} options.coHost - The co-host member.
 * @param {Function} options.updateIsMessagesModalVisible - Function to update the visibility of the messages modal.
 * @param {Function} options.updateDirectMessageDetails - Function to update the details of the direct message.
 * @param {Function} options.updateStartDirectMessage - Function to start the direct message.
 *
 * @example
 * ```typescript
 * messageParticipants({
 *   coHostResponsibility: [{ name: "chat", value: true }],
 *   participant: { name: "John Doe", islevel: "1" },
 *   member: "currentMember",
 *   islevel: "2",
 *   showAlert: (alert) => console.log(alert.message),
 *   coHost: "coHostMember",
 *   updateIsMessagesModalVisible: (isVisible) => setMessagesModalVisible(isVisible),
 *   updateDirectMessageDetails: (participant) => setDirectMessageDetails(participant),
 *   updateStartDirectMessage: (start) => setStartDirectMessage(start),
 * });
 * ```
 */
export declare const messageParticipants: ({ coHostResponsibility, participant, member, islevel, showAlert, coHost, updateIsMessagesModalVisible, updateDirectMessageDetails, updateStartDirectMessage, }: MessageParticipantsOptions) => void;

export declare interface MessageParticipantsOptions {
    coHostResponsibility?: CoHostResponsibility[];
    participant: Participant;
    member: string;
    islevel: string;
    showAlert?: ShowAlert;
    coHost: string;
    updateIsMessagesModalVisible: (isVisible: boolean) => void;
    updateDirectMessageDetails: (participant: Participant | null) => void;
    updateStartDirectMessage: (start: boolean) => void;
}

export declare type MessageParticipantsType = (options: any) => void;

declare interface MixParticipantLike {
    videoID?: string | null;
    muted?: boolean | null;
}

declare interface MixStreamLike {
    producerId?: string | null;
    muted?: boolean | null;
}

/**
 * Mixes video and audio streams and participants based on specified parameters.
 *
 * @param {MixStreamsOptions} options - The options for mixing streams.
 * @param {Array} options.alVideoStreams - The list of audio and video streams to mix.
 * @param {Array} options.non_alVideoStreams - The list of non-audio and video streams to mix.
 * @param {Array} options.ref_participants - The list of reference participants to mix.
 * @returns {Promise<Array>} A promise that resolves with the mixed streams.
 * @throws Will throw an error if there is an issue mixing the streams.
 * @example
 * ```typescript
 * const mixedStreams = await mixStreams({
 *   alVideoStreams: [stream1, stream2],
 *   non_alVideoStreams: [participant1, participant2],
 *   ref_participants: [participant1, participant2],
 * });
 * console.log('Mixed streams:', mixedStreams);
 * ```
 */
export declare function mixStreams<TStream extends MixStreamLike = Stream, TParticipant extends MixParticipantLike = Participant>({ alVideoStreams, non_alVideoStreams, ref_participants, }: MixStreamsOptions<TStream, TParticipant>): Promise<(TStream | TParticipant)[]>;

declare type MixStreamsInvoker<TEntry, TParticipant> = (options: {
    alVideoStreams: TEntry[];
    non_alVideoStreams: TParticipant[];
    ref_participants: TEntry[];
}) => Promise<TEntry[]>;

export declare interface MixStreamsOptions<TStream extends MixStreamLike = Stream, TParticipant extends MixParticipantLike = Participant> {
    alVideoStreams: (TStream | TParticipant)[];
    non_alVideoStreams: TParticipant[];
    ref_participants: (TStream | TParticipant)[];
}

export declare type MixStreamsType = <TStream extends MixStreamLike = Stream, TParticipant extends MixParticipantLike = Participant>(options: MixStreamsOptions<TStream, TParticipant>) => Promise<(TStream | TParticipant)[]>;

export declare interface ModalPositionStyle {
    justifyContent: string;
    alignItems: string;
}

/**
 * Modifies the co-host settings for a given room.
 * @function
 * @param {ModifyCoHostSettingsOptions} options - The options for modifying co-host settings.
 * @param {string} options.roomName - The name of the room.
 * @param {ShowAlert} [options.showAlert] - Function to show an alert message.
 * @param {string} options.selectedParticipant - The participant selected to be co-host.
 * @param {string} options.coHost - The current co-host.
 * @param {CoHostResponsibility[]} options.coHostResponsibility - The responsibilities assigned to the co-host.
 * @param {Function} options.updateIsCoHostModalVisible - Function to update the visibility of the co-host modal.
 * @param {Function} options.updateCoHostResponsibility - Function to update the co-host responsibility.
 * @param {Function} options.updateCoHost - Function to update the co-host.
 * @param {Socket} options.socket - The socket instance for emitting events.
 * @returns {Promise<void>} A promise that resolves when the co-host settings have been modified.
 *
 * @example
 * ```typescript
 * const options: ModifyCoHostSettingsOptions = {
 *   roomName: "mainRoom",
 *   showAlert: (alert) => console.log(alert.message),
 *   selectedParticipant: "User123",
 *   coHost: "No coHost",
 *   coHostResponsibility: [{ name: "media", value: true, dedicated: false }],
 *   updateIsCoHostModalVisible: setModalVisible,
 *   updateCoHostResponsibility: setCoHostResponsibility,
 *   updateCoHost: setCoHost,
 *   socket: socketInstance,
 * };
 *
 * modifyCoHostSettings(options);
 * // Sets User123 as the new co-host with specific responsibilities and emits the update event.
 * ```
 */
export declare const modifyCoHostSettings: ({ roomName, selectedParticipant, coHost, coHostResponsibility, updateIsCoHostModalVisible, updateCoHostResponsibility, updateCoHost, socket, }: ModifyCoHostSettingsOptions) => Promise<void>;

export declare interface ModifyCoHostSettingsOptions {
    roomName: string;
    showAlert?: ShowAlert;
    selectedParticipant: string;
    coHost: string;
    coHostResponsibility: CoHostResponsibility[];
    updateIsCoHostModalVisible: (isVisible: boolean) => void;
    updateCoHostResponsibility: (coHostResponsibility: CoHostResponsibility[]) => void;
    updateCoHost: (coHost: string) => void;
    socket: Socket;
}

export declare type ModifyCoHostSettingsType = (options: ModifyCoHostSettingsOptions) => Promise<void>;

/**
 * Modifies the display settings based on the provided parameters.
 *
 * @param {ModifyDisplaySettingsOptions} options - The options containing the parameters to modify the display settings.
 * @param {Object} options.parameters - The parameters for modifying the display settings.
 * @param {Function} options.parameters.showAlert - Function to show alert messages.
 * @param {string} options.parameters.meetingDisplayType - The current meeting display type.
 * @param {boolean} options.parameters.autoWave - Flag indicating if auto wave is enabled.
 * @param {boolean} options.parameters.forceFullDisplay - Flag indicating if full display is forced.
 * @param {boolean} options.parameters.meetingVideoOptimized - Flag indicating if the meeting video is optimized.
 * @param {string} options.parameters.islevel - The current level of the meeting.
 * @param {boolean} options.parameters.recordStarted - Flag indicating if recording has started.
 * @param {boolean} options.parameters.recordResumed - Flag indicating if recording has resumed.
 * @param {boolean} options.parameters.recordStopped - Flag indicating if recording has stopped.
 * @param {boolean} options.parameters.recordPaused - Flag indicating if recording is paused.
 * @param {string} options.parameters.recordingDisplayType - The current recording display type.
 * @param {boolean} options.parameters.recordingVideoOptimized - Flag indicating if the recording video is optimized.
 * @param {string} options.parameters.prevForceFullDisplay - The previous force full display value.
 * @param {string} options.parameters.prevMeetingDisplayType - The previous meeting display type.
 * @param {Function} options.parameters.updateMeetingDisplayType - Function to update the meeting display type.
 * @param {Function} options.parameters.updateAutoWave - Function to update the auto wave setting.
 * @param {Function} options.parameters.updateForceFullDisplay - Function to update the force full display setting.
 * @param {Function} options.parameters.updateMeetingVideoOptimized - Function to update the meeting video optimization setting.
 * @param {Function} options.parameters.updatePrevForceFullDisplay - Function to update the previous force full display setting.
 * @param {Function} options.parameters.updatePrevMeetingDisplayType - Function to update the previous meeting display type.
 * @param {Function} options.parameters.updateIsDisplaySettingsModalVisible - Function to update the visibility of the display settings modal.
 * @param {Function} options.parameters.updateFirstAll - Function to update the first all setting.
 * @param {Function} options.parameters.updateUpdateMainWindow - Function to update the main window.
 * @param {boolean} options.parameters.breakOutRoomStarted - Flag indicating if a breakout room has started.
 * @param {boolean} options.parameters.breakOutRoomEnded - Flag indicating if a breakout room has ended.
 * @param {Function} options.parameters.onScreenChanges - Function to handle screen changes.
 *
 * @example
 * ```typescript
 * const options: ModifyDisplaySettingsOptions = {
 *   parameters: {
 *     showAlert: showAlertFunction,
 *     meetingDisplayType: "video",
 *     autoWave: true,
 *     forceFullDisplay: false,
 *     meetingVideoOptimized: true,
 *     islevel: "2",
 *     recordStarted: true,
 *     recordResumed: false,
 *     recordStopped: false,
 *     recordPaused: false,
 *     recordingDisplayType: "video",
 *     recordingVideoOptimized: true,
 *     prevForceFullDisplay: false,
 *     prevMeetingDisplayType: "media",
 *     updateMeetingDisplayType: updateDisplayTypeFunction,
 *     updateAutoWave: updateAutoWaveFunction,
 *     updateForceFullDisplay: updateForceFullDisplayFunction,
 *     updateMeetingVideoOptimized: updateVideoOptimizedFunction,
 *     updatePrevForceFullDisplay: updatePrevForceFullFunction,
 *     updatePrevMeetingDisplayType: updatePrevDisplayTypeFunction,
 *     updateIsDisplaySettingsModalVisible: setModalVisibilityFunction,
 *     updateFirstAll: setFirstAllFunction,
 *     updateUpdateMainWindow: setMainWindowUpdateFunction,
 *     breakOutRoomStarted: false,
 *     breakOutRoomEnded: true,
 *     onScreenChanges: onScreenChangesFunction
 *   }
 * };
 *
 * await modifyDisplaySettings(options);
 * ```
 */
export declare const modifyDisplaySettings: ({ parameters }: ModifyDisplaySettingsOptions) => Promise<void>;

export declare interface ModifyDisplaySettingsOptions {
    parameters: ModifyDisplaySettingsParameters;
}

export declare interface ModifyDisplaySettingsParameters extends OnScreenChangesParameters {
    showAlert?: ShowAlert;
    meetingDisplayType: string;
    autoWave: boolean;
    forceFullDisplay: boolean;
    showSubtitlesOnCards?: boolean;
    meetingVideoOptimized: boolean;
    islevel: string;
    recordStarted: boolean;
    recordResumed: boolean;
    recordStopped: boolean;
    recordPaused: boolean;
    recordingDisplayType: 'video' | 'media' | 'all';
    recordingVideoOptimized: boolean;
    prevForceFullDisplay: boolean;
    prevMeetingDisplayType: string;
    updateMeetingDisplayType: (displayType: string) => void;
    updateAutoWave: (autoWave: boolean) => void;
    updateForceFullDisplay: (forceFullDisplay: boolean) => void;
    updateShowSubtitlesOnCards?: (showSubtitlesOnCards: boolean) => void;
    updateMeetingVideoOptimized: (optimized: boolean) => void;
    updatePrevForceFullDisplay: (forceFullDisplay: boolean) => void;
    updatePrevMeetingDisplayType: (displayType: string) => void;
    updateIsDisplaySettingsModalVisible: (isVisible: boolean) => void;
    updateFirstAll: (firstAll: boolean) => void;
    updateUpdateMainWindow: (update: boolean) => void;
    breakOutRoomStarted: boolean;
    breakOutRoomEnded: boolean;
    onScreenChanges: OnScreenChangesType;
    [key: string]: any;
}

export declare type ModifyDisplaySettingsType = (options: ModifyDisplaySettingsOptions) => Promise<void>;

/**
 * Modifies the settings for a given room and updates the state accordingly.
 *
 * @param {ModifySettingsOptions} options - The options for modifying settings.
 * @returns {Promise<void>} A promise that resolves when the settings have been modified.
 *
 * @throws Will show an alert if any setting is set to "approval" in demo mode (room name starts with "d").
 *
 * @example
 * ```typescript
 * modifySettings({
 *   roomName: "d123",
 *   audioSet: "allow",
 *   videoSet: "allow",
 *   screenshareSet: "deny",
 *   chatSet: "allow",
 *   socket: mySocketInstance,
 *   updateAudioSetting: setAudioSetting,
 *   updateVideoSetting: setVideoSetting,
 *   updateScreenshareSetting: setScreenshareSetting,
 *   updateChatSetting: setChatSetting,
 *   updateIsSettingsModalVisible: setIsSettingsModalVisible,
 *   showAlert: (options) => alertUser(options),
 * });
 * ```
 */
export declare function modifySettings({ roomName, audioSet, videoSet, screenshareSet, chatSet, socket, updateAudioSetting, updateVideoSetting, updateScreenshareSetting, updateChatSetting, updateIsSettingsModalVisible, }: ModifySettingsOptions): Promise<void>;

export declare interface ModifySettingsOptions {
    showAlert?: ShowAlert;
    roomName: string;
    audioSet: string;
    videoSet: string;
    screenshareSet: string;
    chatSet: string;
    socket: Socket;
    updateAudioSetting: (audioSet: string) => void;
    updateVideoSetting: (videoSet: string) => void;
    updateScreenshareSetting: (screenshareSet: string) => void;
    updateChatSetting: (chatSet: string) => void;
    updateIsSettingsModalVisible: (isVisible: boolean) => void;
}

export declare type ModifySettingsType = (options: ModifySettingsOptions) => Promise<void>;

/**
 * Mutes a participant in a media session if the current member has the necessary permissions.
 *
 * @param {MuteParticipantsOptions} options - The options for muting participants.
 * @param {Socket} options.socket - The socket instance for communication.
 * @param {CoHostResponsibility[]} options.coHostResponsibility - List of co-host responsibilities.
 * @param {Participant} options.participant - The participant to be muted.
 * @param {string} options.member - The current member attempting to mute.
 * @param {string} options.islevel - The level of the current member.
 * @param {ShowAlert} [options.showAlert] - Optional function to show alerts.
 * @param {string} options.coHost - The co-host information.
 * @param {string} options.roomName - The name of the room.
 *
 * @example
 * ```typescript
 * muteParticipants({
 *   socket,
 *   coHostResponsibility: [{ name: "media", value: true }],
 *   participant: { id: "123", name: "John Doe", muted: false, islevel: "1" },
 *   member: "currentMember",
 *   islevel: "2",
 *   showAlert: (alert) => console.log(alert.message),
 *   coHost: "coHostMember",
 *   roomName: "room1",
 * });
 * ```
 */
export declare const muteParticipants: ({ socket, coHostResponsibility, participant, member, islevel, showAlert, coHost, roomName, }: MuteParticipantsOptions) => Promise<void>;

export declare interface MuteParticipantsOptions {
    socket: Socket;
    coHostResponsibility?: CoHostResponsibility[];
    participant: Participant;
    member: string;
    islevel: string;
    showAlert?: ShowAlert;
    coHost: string;
    roomName: string;
}

export declare type MuteParticipantsType = (options: any) => Promise<void>;

/**
 * Handles the creation of a new pipe producer by signaling for a new consumer transport and updating the necessary parameters.
 *
 * @function
 * @async
 * @param {NewPipeProducerOptions} options - The options for the new pipe producer.
 * @param {string} options.producerId - The ID of the producer to be consumed.
 * @param {string} options.islevel - The level status of the participant.
 * @param {Socket} options.nsock - The socket instance for real-time communication.
 * @param {NewPipeProducerParameters} options.parameters - Additional parameters required for the producer.
 * @param {boolean} options.parameters.shareScreenStarted - Indicates if screen sharing has started.
 * @param {boolean} options.parameters.shared - Indicates if sharing is active.
 * @param {boolean} options.parameters.landScaped - Indicates if the device is in landscape mode.
 * @param {ShowAlert} options.parameters.showAlert - Function to show alerts to the user.
 * @param {boolean} options.parameters.isWideScreen - Indicates if the device is a widescreen.
 * @param {Function} options.parameters.updateFirst_round - Function to update the first round status.
 * @param {Function} options.parameters.updateLandScaped - Function to update the landscape status.
 * @returns {Promise<void>} A promise that resolves when the operation is complete.
 * @throws {Error} Will throw an error if the operation fails to signal the new consumer transport.
 *
 * @example
 * import { newPipeProducer } from 'mediasfu-reactjs';
 * import { io } from 'socket.io-client';
 *
 * const parameters = {
 *   shareScreenStarted: true,
 *   shared: true,
 *   landScaped: false,
 *   showAlert: (alert) => console.log(alert.message),
 *   isWideScreen: false,
 *   updateFirst_round: (firstRound) => console.log('First round updated:', firstRound),
 *   updateLandScaped: (landScaped) => console.log('Landscape status updated:', landScaped),
 * };
 *
 * const producerId = 'producer-123';
 * const islevel = '2';
 * const nsock = io("http://localhost:3000");
 *
 * async function init() {
 *   try {
 *     await newPipeProducer({
 *       producerId,
 *       islevel,
 *       nsock,
 *       parameters,
 *     });
 *     console.log('New pipe producer created successfully');
 *   } catch (error) {
 *     console.error('Error creating new pipe producer:', error);
 *   }
 * }
 *
 * init();
 */
export declare const newPipeProducer: ({ producerId, islevel, nsock, parameters, isTranslation, translationMeta, }: NewPipeProducerOptions) => Promise<void>;

export declare interface NewPipeProducerOptions {
    producerId: string;
    islevel: string;
    nsock: Socket;
    parameters: NewPipeProducerParameters;
    isTranslation?: boolean;
    translationMeta?: TranslationMeta;
}

export declare interface NewPipeProducerParameters extends ReorderStreamsParameters, SignalNewConsumerTransportParameters, ConnectRecvTransportParameters {
    first_round: boolean;
    shareScreenStarted: boolean;
    shared: boolean;
    landScaped: boolean;
    showAlert?: ShowAlert;
    isWideScreen: boolean;
    updateFirst_round: (firstRound: boolean) => void;
    updateLandScaped: (landScaped: boolean) => void;
    device: Device | null;
    consumingTransports: string[];
    lock_screen: boolean;
    updateConsumingTransports: (transports: string[]) => void;
    connectRecvTransport: ConnectRecvTransportType;
    reorderStreams: ReorderStreamsType;
    getUpdatedAllParams: () => NewPipeProducerParameters;
    startConsumingTranslation?: (producerId: string, speakerId: string, language: string, originalProducerId?: string, nsock?: Socket) => Promise<void>;
    translationSubscriptions?: Map<string, {
        speakerId: string;
        language: string;
    }>;
    speakerTranslationStates?: Map<string, {
        speakerId: string;
        speakerName: string;
        inputLanguage: string;
        outputLanguage: string;
        originalProducerId: string;
        enabled: boolean;
    }>;
    listenerTranslationOverrides?: Map<string, {
        speakerId: string;
        wantOriginal: boolean;
        preferredLanguage?: string;
    }>;
    listenerTranslationPreferences?: {
        perSpeaker: Map<string, {
            speakerId: string;
            language: string | null;
            wantOriginal: boolean;
        }>;
        globalLanguage: string | null;
    };
    [key: string]: any;
}

export declare type NewPipeProducerType = (options: NewPipeProducerOptions) => Promise<void>;

declare interface NewPoll {
    question: string;
    type: string;
    options: string[];
}

export declare const normalizeLanguageCode: (code: string) => string;

declare type NumberUpdater = (value: number) => void;

declare type NumberUpdater_2 = (value: number) => void;

/**
 * Handles changes in screen events such as broadcast, chat, and conference.
 *
 * @param {OnScreenChangesOptions} options - The options for handling screen changes.
 * @param {boolean} options.changed - Indicates if the screen has changed.
 * @param {object} options.parameters - The parameters for handling screen changes.
 * @param {string} options.parameters.eventType - The type of event (e.g., "broadcast", "chat", "conference").
 * @param {boolean} options.parameters.shareScreenStarted - Indicates if screen sharing has started.
 * @param {boolean} options.parameters.shared - Indicates if the screen is shared.
 * @param {boolean} options.parameters.addForBasic - Flag to add basic controls.
 * @param {function} options.parameters.updateMainHeightWidth - Function to update the main height and width.
 * @param {function} options.parameters.updateAddForBasic - Function to update the addForBasic flag.
 * @param {number} options.parameters.itemPageLimit - The limit for item pages.
 * @param {function} options.parameters.updateItemPageLimit - Function to update the item page limit.
 * @param {function} options.parameters.reorderStreams - Function to reorder streams.
 *
 * @returns {Promise<void>} A promise that resolves when the screen changes have been handled.
 *
 * @throws {Error} Throws an error if there is an issue handling screen changes.
 *
 * @example
 * ```typescript
 * await onScreenChanges({
 *   changed: true,
 *   parameters: {
 *     eventType: 'conference',
 *     shareScreenStarted: false,
 *     shared: false,
 *     addForBasic: false,
 *     updateMainHeightWidth: (height) => console.log('Updated height:', height),
 *     updateAddForBasic: (value) => console.log('Updated addForBasic:', value),
 *     itemPageLimit: 2,
 *     updateItemPageLimit: (limit) => console.log('Updated item page limit:', limit),
 *     reorderStreams: async (options) => console.log('Reordered streams with options:', options),
 *   },
 * });
 * ```
 */
export declare function onScreenChanges<TParameters extends OnScreenChangesParameters = OnScreenChangesParameters>({ changed, parameters }: OnScreenChangesOptions<TParameters>): Promise<void>;

declare type OnScreenChangesInvoker = (options: {
    changed?: boolean;
    parameters: any;
}) => Promise<void>;

export declare interface OnScreenChangesOptions<TParameters extends OnScreenChangesParameters = OnScreenChangesParameters> {
    changed?: boolean;
    parameters: TParameters;
}

export declare interface OnScreenChangesParameters extends ReorderStreamsParameters<any, any, any> {
    eventType: EventType;
    shareScreenStarted: boolean;
    shared: boolean;
    addForBasic: boolean;
    updateAddForBasic: (value: boolean) => void;
    itemPageLimit: number;
    updateItemPageLimit: (value: number) => void;
    updateMainHeightWidth: (value: number) => void;
    reorderStreams: OpaqueReorderStreamsInvoker;
    [key: string]: any;
}

export declare type OnScreenChangesType = <TParameters extends OnScreenChangesParameters = OnScreenChangesParameters>(options: OnScreenChangesOptions<TParameters>) => Promise<void>;

declare type OpaqueAsyncInvoker = {
    bivarianceHack: (options: any) => Promise<any>;
}["bivarianceHack"];

declare type OpaqueCheckGridInvoker = {
    bivarianceHack: (options: any) => Promise<any> | any;
}["bivarianceHack"];

declare type OpaqueDispStreamsInvoker = {
    bivarianceHack: (options: any) => Promise<void>;
}['bivarianceHack'];

declare type OpaqueEstimateInvoker = {
    bivarianceHack: (options: any) => EstimateResult;
}["bivarianceHack"];

declare type OpaqueReorderStreamsInvoker = {
    bivarianceHack: (options: any) => Promise<void>;
}["bivarianceHack"];

export declare interface OverlayPositionStyle {
    top?: number;
    left?: number;
    right?: number;
    bottom?: number;
}

export declare const panelistControlMedia: ControlMediaType;

export declare interface PanelistData {
    id: string;
    name: string;
}

export declare const panelistFocusChanged: PanelistFocusChangedType;

export declare interface PanelistFocusChangedData {
    focusEnabled: boolean;
    panelists: PanelistData[];
    muteOthersMic: boolean;
    muteOthersCamera: boolean;
}

export declare interface PanelistFocusChangedOptions {
    data: PanelistFocusChangedData;
    updatePanelistsFocused?: (focused: boolean) => void;
    updateMuteOthersMic?: (mute: boolean) => void;
    updateMuteOthersCamera?: (mute: boolean) => void;
    updatePanelists?: (panelists: Participant[]) => void;
    currentPanelistsFocused?: boolean;
    currentPanelists?: Participant[];
    onScreenChanges?: () => Promise<void>;
}

export declare type PanelistFocusChangedType = (options: PanelistFocusChangedOptions) => Promise<void>;

export declare const panelistsUpdated: PanelistsUpdatedType;

export declare interface PanelistsUpdatedData {
    panelists: PanelistData[];
}

export declare interface PanelistsUpdatedOptions {
    data: PanelistsUpdatedData;
    updatePanelists?: (panelists: Participant[]) => void;
}

export declare type PanelistsUpdatedType = (options: PanelistsUpdatedOptions) => Promise<void>;

export declare interface Participant {
    id?: string;
    audioID: string;
    videoID: string;
    ScreenID?: string;
    ScreenOn?: boolean;
    islevel?: string;
    isAdmin?: boolean;
    isHost?: boolean;
    name: string;
    muted?: boolean;
    isBanned?: boolean;
    isSuspended?: boolean;
    useBoard?: boolean;
    breakRoom?: number | null;
    [key: string]: any;
}

declare interface ParticipantLike {
    name: string;
    islevel?: string | null;
    audioID?: string | null;
    producerId?: string | null;
    breakRoom?: number | null;
}

declare interface ParticipantLike_2 {
    name: string;
    islevel?: string | null;
    videoID?: string | null;
}

/**
 * Appends a new participant request and refreshes the combined request/waiting count.
 *
 * @param {ParticipantRequestedOptions} options - Request payload and state setters.
 * @returns {Promise<void>} Resolves after the request state is updated.
 *
 * @example
 * ```typescript
 * await participantRequested({
 *   userRequest,
 *   requestList,
 *   waitingRoomList,
 *   updateRequestList: setRequestList,
 *   updateTotalReqWait: setTotalReqWait,
 * });
 * ```
 */
export declare const participantRequested: ({ userRequest, requestList, waitingRoomList, updateTotalReqWait, updateRequestList, }: ParticipantRequestedOptions) => Promise<void>;

export declare interface ParticipantRequestedData {
    userRequest: Request_2;
}

export declare interface ParticipantRequestedOptions {
    userRequest: Request_2;
    requestList: Request_2[];
    waitingRoomList: WaitingRoomParticipant[];
    updateTotalReqWait: (count: number) => void;
    updateRequestList: (list: Request_2[]) => void;
}

export declare type ParticipantRequestedType = (options: ParticipantRequestedOptions) => Promise<void>;

export declare const pauseOriginalProducer: ({ originalProducerId, speakerId, parameters, }: PauseOriginalProducerOptions) => Promise<void>;

export declare interface PauseOriginalProducerOptions {
    originalProducerId: string;
    speakerId?: string;
    parameters: TranslationConsumerSwitchParameters;
}

export declare type PauseOriginalProducerType = (options: PauseOriginalProducerOptions) => Promise<void>;

export declare interface PendingRequestStorage {
    getItem: (key: string) => Promise<string | null>;
    setItem: (key: string, value: string) => Promise<void>;
    removeItem: (key: string) => Promise<void>;
}

export declare interface PermissionCapabilities {
    useMic: 'allow' | 'approval' | 'disallow';
    useCamera: 'allow' | 'approval' | 'disallow';
    useScreen: 'allow' | 'approval' | 'disallow';
    useChat: 'allow' | 'disallow';
}

export declare interface PermissionConfig {
    level0: PermissionCapabilities;
    level1: PermissionCapabilities;
}

export declare const permissionConfigUpdated: PermissionConfigUpdatedType;

export declare interface PermissionConfigUpdatedData {
    config: PermissionConfig;
}

export declare interface PermissionConfigUpdatedOptions {
    data: PermissionConfigUpdatedData;
    updatePermissionConfig?: (config: PermissionConfig) => void;
}

export declare type PermissionConfigUpdatedType = (options: PermissionConfigUpdatedOptions) => Promise<void>;

export declare type PermissionLevel = '0' | '1' | '2';

export declare const permissionUpdated: PermissionUpdatedType;

export declare interface PermissionUpdatedData {
    newLevel: string;
    message?: string;
}

export declare interface PermissionUpdatedOptions {
    data: PermissionUpdatedData;
    showAlert?: ShowAlert;
    updateIslevel?: (level: string) => void;
}

export declare type PermissionUpdatedType = (options: PermissionUpdatedOptions) => Promise<void>;

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
export declare const personJoined: ({ name, showAlert, }: PersonJoinedOptions) => Promise<void>;

export declare interface PersonJoinedOptions {
    showAlert?: ShowAlert;
    name: string;
}

export declare type PersonJoinedType = (options: PersonJoinedOptions) => Promise<void>;

export declare interface Poll {
    id: string;
    question: string;
    type: string;
    options: string[];
    votes: number[];
    status: string;
    voters?: Record<string, number>;
    [key: string]: any;
}

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
export declare const pollUpdated: ({ data, polls, poll, member, islevel, showAlert, updatePolls, updatePoll, updateIsPollModalVisible, }: PollUpdatedOptions) => Promise<void>;

export declare interface PollUpdatedData {
    polls?: Poll[];
    poll: Poll;
    status: string;
}

export declare interface PollUpdatedOptions {
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

export declare type PollUpdatedType = (options: PollUpdatedOptions) => Promise<void>;

export declare interface PreJoinPageOptions {
    localLink?: string;
    connectMediaSFU?: boolean;
    parameters: PreJoinPageParameters;
    credentials?: Credentials;
    returnUI?: boolean;
    noUIPreJoinOptions?: CreateMediaSFURoomOptions | JoinMediaSFURoomOptions;
    createMediaSFURoom?: CreateRoomOnMediaSFUType;
    joinMediaSFURoom?: JoinRoomOnMediaSFUType_2;
}

export declare interface PreJoinPageParameters {
    imgSrc?: string;
    showAlert?: ShowAlert;
    updateIsLoadingModalVisible: (visible: boolean) => void;
    connectSocket: any;
    connectLocalSocket?: any;
    updateSocket: (socket: Socket) => void;
    updateLocalSocket?: (socket: Socket) => void;
    updateValidated: (validated: boolean) => void;
    updateApiUserName: (userName: string) => void;
    updateApiToken: (token: string) => void;
    updateLink: (link: string) => void;
    updateRoomName: (roomName: string) => void;
    updateMember: (member: string) => void;
}

export declare interface PrepopulateParticipantLike {
    name?: string;
    islevel?: string;
    ScreenID?: string;
    ScreenOn?: boolean;
    [key: string]: any;
}

export declare interface PrepopulateStreamLike {
    producerId?: string;
    stream?: any;
    [key: string]: any;
}

export declare const prepopulateUserMedia: PrepopulateUserMediaType;

declare type PrepopulateUserMediaInvoker = {
    bivarianceHack: (options: PrepopulateUserMediaOptions) => Promise<unknown>;
}['bivarianceHack'];

export declare interface PrepopulateUserMediaOptions {
    name: string;
    parameters: PrepopulateUserMediaParameters;
}

export declare interface PrepopulateUserMediaParameters {
    [key: string]: any;
}

export declare interface PrepopulateUserMediaPlan<P extends PrepopulateParticipantLike> {
    screenFlowActive: boolean;
    shouldReturnEarly: boolean;
    shouldUpdateAdminOnMainScreen: boolean;
    screenForceFullDisplay: boolean;
    host: P | null;
    hostStream: any;
    adminOnMainScreen: boolean;
    mainScreenPerson: string;
}

export declare type PrepopulateUserMediaType = (options: PrepopulateUserMediaOptions) => Promise<void>;

/**
 * Processes consumer transports by pausing and resuming them based on certain conditions.
 *
 * @param {Object} options - The options for processing consumer transports.
 * @param {Array} options.consumerTransports - The list of consumer transports to process.
 * @param {Array} options.lStreams_ - The list of local streams.
 * @param {Object} options.parameters - The parameters object containing various stream arrays and utility functions.
 *
 * @returns {Promise<void>} - A promise that resolves when the processing is complete.
 *
 * @throws {Error} - Throws an error if there is an issue processing consumer transports.
 *
 * The function performs the following steps:
 * 1. Destructures and updates the parameters.
 * 2. Defines a helper function to check if a producerId is valid in given stream arrays.
 * 3. Filters consumer transports to resume based on certain conditions.
 * 4. Filters consumer transports to pause based on certain conditions.
 * 5. Pauses consumer transports after a short delay.
 * 6. Emits `consumer-pause` event for each filtered transport (not audio).
 * 7. Emits `consumer-resume` event for each filtered transport (not audio).
 *
 * @example
 * ```typescript
 * await processConsumerTransports({
 *   consumerTransports: [transport1, transport2],
 *   lStreams_: [stream1, stream2],
 *   parameters: {
 *     remoteScreenStream: [],
 *     oldAllStreams: [],
 *     newLimitedStreams: [],
 *     sleep: sleepFunction,
 *     getUpdatedAllParams: () => parameters,
 *   },
 * });
 * ```
 */
export declare function processConsumerTransports<TTransport extends TransportLike = Transport, TStreamEntry = Stream, TMediaEntry = Stream | Participant>({ consumerTransports, lStreams_, parameters, }: ProcessConsumerTransportsOptions<TTransport, TStreamEntry, TMediaEntry>): Promise<void>;

/**
 * Processes consumer transports for audio streams by pausing and resuming them based on their current state and the provided streams.
 *
 * @param {Object} options - The options for processing consumer transports.
 * @param {Array} options.consumerTransports - The list of consumer transports to process.
 * @param {Array} options.lStreams - The list of local streams to check against.
 * @param {Object} options.parameters - Additional parameters for processing.
 * @param {Function} options.parameters.sleep - A function to pause execution for a specified duration.
 *
 * @returns {Promise<void>} A promise that resolves when the processing is complete.
 *
 * @throws Will throw an error if there is an issue processing the consumer transports.
 *
 * @example
 * ```typescript
 * await processConsumerTransportsAudio({
 *   consumerTransports: [transport1, transport2],
 *   lStreams: [stream1, stream2],
 *   parameters: {
 *     sleep: sleepFunction,
 *   },
 * });
 * ```
 */
export declare const processConsumerTransportsAudio: <TTransport extends TransportLike_2 = Transport, TMediaEntry = Stream | Participant>({ consumerTransports, lStreams, parameters, }: ProcessConsumerTransportsAudioOptions<TTransport, TMediaEntry>) => Promise<void>;

export declare interface ProcessConsumerTransportsAudioOptions<TTransport extends TransportLike_2 = Transport, TMediaEntry = Stream | Participant> {
    consumerTransports: TTransport[];
    lStreams: TMediaEntry[];
    parameters: ProcessConsumerTransportsAudioParameters;
}

export declare interface ProcessConsumerTransportsAudioParameters {
    sleep: SleepType;
    [key: string]: any;
}

export declare type ProcessConsumerTransportsAudioType = <TTransport extends TransportLike_2 = Transport, TMediaEntry = Stream | Participant>(options: ProcessConsumerTransportsAudioOptions<TTransport, TMediaEntry>) => Promise<void>;

export declare interface ProcessConsumerTransportsOptions<TTransport extends TransportLike = Transport, TStreamEntry = Stream, TMediaEntry = Stream | Participant> {
    consumerTransports: TTransport[];
    lStreams_: TMediaEntry[];
    parameters: ProcessConsumerTransportsParameters<TStreamEntry, TMediaEntry>;
}

export declare interface ProcessConsumerTransportsParameters<TStreamEntry = Stream, TMediaEntry = Stream | Participant> {
    remoteScreenStream: TStreamEntry[];
    oldAllStreams: TMediaEntry[];
    newLimitedStreams: TMediaEntry[];
    sleep: SleepType;
    getUpdatedAllParams: () => ProcessConsumerTransportsParameters<TStreamEntry, TMediaEntry>;
    [key: string]: any;
}

export declare type ProcessConsumerTransportsType = <TTransport extends TransportLike = Transport, TStreamEntry = Stream, TMediaEntry = Stream | Participant>(options: ProcessConsumerTransportsOptions<TTransport, TStreamEntry, TMediaEntry>) => Promise<void>;

/**
 * Handles the closure of a producer identified by its remote producer ID.
 * This function will clean up the consumer transports and resize the video outputs.
 *
 * @function
 * @async
 * @param {ProducerClosedOptions} options - The options for closing the producer.
 * @param {string} options.remoteProducerId - The ID of the remote producer to close.
 * @param {ProducerClosedParameters} options.parameters - Additional parameters for the operation.
 * @param {Transport[]} options.parameters.consumerTransports - The list of consumer transports associated with the producer.
 * @param {Function} options.parameters.closeAndResize - Function to handle the closing and resizing of video streams.
 * @param {string} [options.parameters.screenId] - The ID of the screen producer (if applicable).
 * @param {Function} options.parameters.updateConsumerTransports - Function to update the state of consumer transports.
 * @returns {Promise<void>} A promise that resolves when the producer has been successfully closed.
 * @throws Will throw an error if there is an issue closing the consumer transport or the producer.
 *
 * @example
 * import { producerClosed } from 'mediasfu-reactjs';
 *
 * const options = {
 *   remoteProducerId: 'producerId',
 *   parameters: {
 *     consumerTransports: [], // Array of consumer transports
 *     closeAndResize: (params) => console.log('Close and resize called', params),
 *     screenId: 'screenId',
 *     updateConsumerTransports: (transports) => console.log('Updated transports:', transports),
 *   },
 * };
 *
 * producerClosed(options)
 *   .then(() => {
 *     console.log('Producer closed successfully');
 *   })
 *   .catch((error) => {
 *     console.error('Error closing producer:', error);
 *   });
 */
export declare const producerClosed: ({ remoteProducerId, parameters, }: ProducerClosedOptions) => Promise<void>;

export declare interface ProducerClosedOptions {
    remoteProducerId: string;
    parameters: ProducerClosedParameters;
}

export declare interface ProducerClosedParameters extends CloseAndResizeParameters {
    consumerTransports: Transport[];
    screenId?: string;
    updateConsumerTransports: (transports: Transport[]) => void;
    closeAndResize: CloseAndResizeType;
    getUpdatedAllParams: () => ProducerClosedParameters;
    [key: string]: any;
}

export declare type ProducerClosedType = (options: ProducerClosedOptions) => Promise<void>;

/**
 * Tears down a producer consumer transport and reconciles shared screen state when a producer closes.
 *
 * @param {ProducerMediaClosedOptions} options - Producer identity and shared room/media callbacks.
 * @returns {Promise<void>} Resolves once transport teardown and UI cleanup are complete.
 *
 * @example
 * ```typescript
 * await producerMediaClosed({
 *   producerId: '12345',
 *   kind: 'screenshare',
 *   parameters,
 * });
 * ```
 */
export declare const producerMediaClosed: <TTransport extends ProducerMediaClosedTransportLike = ProducerMediaClosedTransportLike, TCloseAndResizeParameters = CloseAndResizeParameters, TPrepopulateUserMediaParameters = PrepopulateUserMediaParameters, TReorderStreamsParameters = ReorderStreamsParameters, TAllParameters extends TCloseAndResizeParameters & TPrepopulateUserMediaParameters & TReorderStreamsParameters = TCloseAndResizeParameters & TPrepopulateUserMediaParameters & TReorderStreamsParameters>({ producerId, kind, parameters, }: ProducerMediaClosedOptions<TTransport, TCloseAndResizeParameters, TPrepopulateUserMediaParameters, TReorderStreamsParameters, TAllParameters>) => Promise<void>;

export declare interface ProducerMediaClosedCloseAndResizeOptions<TParameters = unknown> {
    producerId: string;
    kind: 'video' | 'screen' | 'audio' | 'screenshare';
    parameters: TParameters;
}

export declare type ProducerMediaClosedCloseAndResizeType<TParameters = unknown> = (options: ProducerMediaClosedCloseAndResizeOptions<TParameters>) => Promise<unknown>;

export declare interface ProducerMediaClosedData {
    producerId: string;
    kind: 'audio' | 'video' | 'screenshare';
    name: string;
}

export declare interface ProducerMediaClosedOptions<TTransport extends ProducerMediaClosedTransportLike = ProducerMediaClosedTransportLike, TCloseAndResizeParameters = CloseAndResizeParameters, TPrepopulateUserMediaParameters = PrepopulateUserMediaParameters, TReorderStreamsParameters = ReorderStreamsParameters, TAllParameters extends TCloseAndResizeParameters & TPrepopulateUserMediaParameters & TReorderStreamsParameters = TCloseAndResizeParameters & TPrepopulateUserMediaParameters & TReorderStreamsParameters> {
    producerId: string;
    kind: 'video' | 'screen' | 'audio' | 'screenshare';
    parameters: ProducerMediaClosedParameters<TTransport, TCloseAndResizeParameters, TPrepopulateUserMediaParameters, TReorderStreamsParameters, TAllParameters> & TAllParameters;
}

export declare interface ProducerMediaClosedParameters<TTransport extends ProducerMediaClosedTransportLike = ProducerMediaClosedTransportLike, TCloseAndResizeParameters = CloseAndResizeParameters, TPrepopulateUserMediaParameters = PrepopulateUserMediaParameters, TReorderStreamsParameters = ReorderStreamsParameters, TAllParameters extends TCloseAndResizeParameters & TPrepopulateUserMediaParameters & TReorderStreamsParameters = TCloseAndResizeParameters & TPrepopulateUserMediaParameters & TReorderStreamsParameters> {
    consumerTransports: TTransport[];
    updateConsumerTransports: (transports: TTransport[]) => void;
    hostLabel: string;
    shared: boolean;
    updateShared: (shared: boolean) => void;
    updateShareScreenStarted: (started: boolean) => void;
    updateScreenId: (screenId: string) => void;
    updateShareEnded: (ended: boolean) => void;
    closeAndResize: ProducerMediaClosedCloseAndResizeType<TCloseAndResizeParameters>;
    prepopulateUserMedia: ProducerMediaClosedPrepopulateUserMediaType<TPrepopulateUserMediaParameters>;
    reorderStreams: ProducerMediaClosedReorderStreamsType<TReorderStreamsParameters>;
    getUpdatedAllParams: () => ProducerMediaClosedParameters<TTransport, TCloseAndResizeParameters, TPrepopulateUserMediaParameters, TReorderStreamsParameters, TAllParameters> & TAllParameters;
    [key: string]: any;
}

export declare interface ProducerMediaClosedPrepopulateUserMediaOptions<TParameters = unknown> {
    name: string;
    parameters: TParameters;
}

export declare type ProducerMediaClosedPrepopulateUserMediaType<TParameters = unknown> = (options: ProducerMediaClosedPrepopulateUserMediaOptions<TParameters>) => Promise<unknown>;

export declare interface ProducerMediaClosedReorderStreamsOptions<TParameters = unknown> {
    add: boolean;
    screenChanged?: boolean;
    parameters: TParameters;
}

export declare type ProducerMediaClosedReorderStreamsType<TParameters = unknown> = (options: ProducerMediaClosedReorderStreamsOptions<TParameters>) => Promise<unknown>;

export declare interface ProducerMediaClosedTransportLike {
    producerId: string;
    consumerTransport?: {
        close: () => Promise<void> | void;
    };
    consumer: {
        close: () => Promise<void> | void;
    };
    [key: string]: any;
}

export declare type ProducerMediaClosedType<TTransport extends ProducerMediaClosedTransportLike = ProducerMediaClosedTransportLike, TCloseAndResizeParameters = CloseAndResizeParameters, TPrepopulateUserMediaParameters = PrepopulateUserMediaParameters, TReorderStreamsParameters = ReorderStreamsParameters, TAllParameters extends TCloseAndResizeParameters & TPrepopulateUserMediaParameters & TReorderStreamsParameters = TCloseAndResizeParameters & TPrepopulateUserMediaParameters & TReorderStreamsParameters> = (options: ProducerMediaClosedOptions<TTransport, TCloseAndResizeParameters, TPrepopulateUserMediaParameters, TReorderStreamsParameters, TAllParameters>) => Promise<void>;

/**
 * Reacts to a producer pause event by reconciling waveform state, main-window media, and layout ordering.
 *
 * @param {ProducerMediaPausedOptions} options - Producer identity and shared room/media callbacks.
 * @returns {Promise<void>} Resolves once paused-media side effects are synchronized.
 *
 * @example
 * ```typescript
 * await producerMediaPaused({
 *   producerId: 'abc123',
 *   kind: 'audio',
 *   name: 'Participant1',
 *   parameters,
 * });
 * ```
 */
export declare const producerMediaPaused: <TParticipant extends ProducerMediaPausedParticipantLike = ProducerMediaPausedParticipantLike, TPrepopulateUserMediaParameters = PrepopulateUserMediaParameters, TReorderStreamsParameters = ReorderStreamsParameters, TReUpdateInterParameters = ReUpdateInterParameters, TAllParameters extends TPrepopulateUserMediaParameters & TReorderStreamsParameters & TReUpdateInterParameters = TPrepopulateUserMediaParameters & TReorderStreamsParameters & TReUpdateInterParameters>({ producerId, kind, name, parameters, }: ProducerMediaPausedOptions<TParticipant, TPrepopulateUserMediaParameters, TReorderStreamsParameters, TReUpdateInterParameters, TAllParameters>) => Promise<void>;

export declare interface ProducerMediaPausedData {
    producerId: string;
    kind: 'audio';
    name: string;
}

export declare interface ProducerMediaPausedOptions<TParticipant extends ProducerMediaPausedParticipantLike = ProducerMediaPausedParticipantLike, TPrepopulateUserMediaParameters = PrepopulateUserMediaParameters, TReorderStreamsParameters = ReorderStreamsParameters, TReUpdateInterParameters = ReUpdateInterParameters, TAllParameters extends TPrepopulateUserMediaParameters & TReorderStreamsParameters & TReUpdateInterParameters = TPrepopulateUserMediaParameters & TReorderStreamsParameters & TReUpdateInterParameters> {
    producerId: string;
    kind: 'audio' | 'video' | 'screenshare' | 'screen';
    name: string;
    parameters: ProducerMediaPausedParameters<TParticipant, TPrepopulateUserMediaParameters, TReorderStreamsParameters, TReUpdateInterParameters, TAllParameters> & TAllParameters;
}

export declare interface ProducerMediaPausedParameters<TParticipant extends ProducerMediaPausedParticipantLike = ProducerMediaPausedParticipantLike, TPrepopulateUserMediaParameters = PrepopulateUserMediaParameters, TReorderStreamsParameters = ReorderStreamsParameters, TReUpdateInterParameters = ReUpdateInterParameters, TAllParameters extends TPrepopulateUserMediaParameters & TReorderStreamsParameters & TReUpdateInterParameters = TPrepopulateUserMediaParameters & TReorderStreamsParameters & TReUpdateInterParameters> {
    activeSounds: string[];
    meetingDisplayType: string;
    meetingVideoOptimized: boolean;
    participants: TParticipant[];
    oldSoundIds: string[];
    shared: boolean;
    shareScreenStarted: boolean;
    updateMainWindow: boolean;
    hostLabel: string;
    islevel: string;
    updateActiveSounds: (activeSounds: string[]) => void;
    updateUpdateMainWindow: (updateMainWindow: boolean) => void;
    reorderStreams: ProducerMediaPausedReorderStreamsType<TReorderStreamsParameters>;
    prepopulateUserMedia: ProducerMediaPausedPrepopulateUserMediaType<TPrepopulateUserMediaParameters>;
    reUpdateInter: ProducerMediaPausedReUpdateInterType<TReUpdateInterParameters>;
    getUpdatedAllParams: () => ProducerMediaPausedParameters<TParticipant, TPrepopulateUserMediaParameters, TReorderStreamsParameters, TReUpdateInterParameters, TAllParameters> & TAllParameters;
    [key: string]: any;
}

export declare interface ProducerMediaPausedParticipantLike {
    name?: string | null;
    muted?: boolean;
    islevel?: string | null;
    videoID?: string | null;
    audioID?: string | null;
}

export declare interface ProducerMediaPausedPrepopulateUserMediaOptions<TParameters = unknown> {
    name: string;
    parameters: TParameters;
}

export declare type ProducerMediaPausedPrepopulateUserMediaType<TParameters = unknown> = (options: ProducerMediaPausedPrepopulateUserMediaOptions<TParameters>) => Promise<unknown>;

export declare interface ProducerMediaPausedReorderStreamsOptions<TParameters = unknown> {
    add: boolean;
    screenChanged?: boolean;
    parameters: TParameters;
}

export declare type ProducerMediaPausedReorderStreamsType<TParameters = unknown> = (options: ProducerMediaPausedReorderStreamsOptions<TParameters>) => Promise<unknown>;

export declare interface ProducerMediaPausedReUpdateInterOptions<TParameters = unknown> {
    name: string;
    add: boolean;
    force?: boolean;
    parameters: TParameters;
}

export declare type ProducerMediaPausedReUpdateInterType<TParameters = unknown> = (options: ProducerMediaPausedReUpdateInterOptions<TParameters>) => Promise<unknown>;

export declare type ProducerMediaPausedType<TParticipant extends ProducerMediaPausedParticipantLike = ProducerMediaPausedParticipantLike, TPrepopulateUserMediaParameters = PrepopulateUserMediaParameters, TReorderStreamsParameters = ReorderStreamsParameters, TReUpdateInterParameters = ReUpdateInterParameters, TAllParameters extends TPrepopulateUserMediaParameters & TReorderStreamsParameters & TReUpdateInterParameters = TPrepopulateUserMediaParameters & TReorderStreamsParameters & TReUpdateInterParameters> = (options: ProducerMediaPausedOptions<TParticipant, TPrepopulateUserMediaParameters, TReorderStreamsParameters, TReUpdateInterParameters, TAllParameters>) => Promise<void>;

/**
 * Restores paused producer media state and refills the main window when needed.
 *
 * @param {ProducerMediaResumedOptions} options - Producer identity and shared room/media callbacks.
 * @returns {Promise<void>} Resolves once the resumed-media UI state is synchronized.
 *
 * @example
 * ```typescript
 * await producerMediaResumed({
 *   name: 'John Doe',
 *   kind: 'audio',
 *   parameters,
 * });
 * ```
 */
export declare const producerMediaResumed: <TParticipant extends ProducerMediaResumedParticipantLike = ProducerMediaResumedParticipantLike, TPrepopulateUserMediaParameters = PrepopulateUserMediaParameters, TReorderStreamsParameters = ReorderStreamsParameters, TAllParameters extends TPrepopulateUserMediaParameters & TReorderStreamsParameters = TPrepopulateUserMediaParameters & TReorderStreamsParameters>({ name, parameters, }: ProducerMediaResumedOptions<TParticipant, TPrepopulateUserMediaParameters, TReorderStreamsParameters, TAllParameters>) => Promise<void>;

export declare interface ProducerMediaResumedData {
    kind: 'audio';
    name: string;
}

export declare interface ProducerMediaResumedOptions<TParticipant extends ProducerMediaResumedParticipantLike = ProducerMediaResumedParticipantLike, TPrepopulateUserMediaParameters = PrepopulateUserMediaParameters, TReorderStreamsParameters = ReorderStreamsParameters, TAllParameters extends TPrepopulateUserMediaParameters & TReorderStreamsParameters = TPrepopulateUserMediaParameters & TReorderStreamsParameters> {
    name: string;
    kind: 'audio';
    parameters: ProducerMediaResumedParameters<TParticipant, TPrepopulateUserMediaParameters, TReorderStreamsParameters, TAllParameters> & TAllParameters;
}

export declare interface ProducerMediaResumedParameters<TParticipant extends ProducerMediaResumedParticipantLike = ProducerMediaResumedParticipantLike, TPrepopulateUserMediaParameters = PrepopulateUserMediaParameters, TReorderStreamsParameters = ReorderStreamsParameters, TAllParameters extends TPrepopulateUserMediaParameters & TReorderStreamsParameters = TPrepopulateUserMediaParameters & TReorderStreamsParameters> {
    meetingDisplayType: string;
    participants: TParticipant[];
    shared: boolean;
    shareScreenStarted: boolean;
    mainScreenFilled: boolean;
    hostLabel: string;
    updateUpdateMainWindow: (updateMainWindow: boolean) => void;
    reorderStreams: ProducerMediaResumedReorderStreamsType<TReorderStreamsParameters>;
    prepopulateUserMedia: ProducerMediaResumedPrepopulateUserMediaType<TPrepopulateUserMediaParameters>;
    getUpdatedAllParams: () => ProducerMediaResumedParameters<TParticipant, TPrepopulateUserMediaParameters, TReorderStreamsParameters, TAllParameters> & TAllParameters;
    [key: string]: any;
}

export declare interface ProducerMediaResumedParticipantLike {
    name?: string | null;
    islevel?: string | null;
    videoID?: string | null;
}

export declare interface ProducerMediaResumedPrepopulateUserMediaOptions<TParameters = unknown> {
    name: string;
    parameters: TParameters;
}

export declare type ProducerMediaResumedPrepopulateUserMediaType<TParameters = unknown> = (options: ProducerMediaResumedPrepopulateUserMediaOptions<TParameters>) => Promise<unknown>;

export declare interface ProducerMediaResumedReorderStreamsOptions<TParameters = unknown> {
    add: boolean;
    screenChanged?: boolean;
    parameters: TParameters;
}

export declare type ProducerMediaResumedReorderStreamsType<TParameters = unknown> = (options: ProducerMediaResumedReorderStreamsOptions<TParameters>) => Promise<unknown>;

export declare type ProducerMediaResumedType<TParticipant extends ProducerMediaResumedParticipantLike = ProducerMediaResumedParticipantLike, TPrepopulateUserMediaParameters = PrepopulateUserMediaParameters, TReorderStreamsParameters = ReorderStreamsParameters, TAllParameters extends TPrepopulateUserMediaParameters & TReorderStreamsParameters = TPrepopulateUserMediaParameters & TReorderStreamsParameters> = (options: ProducerMediaResumedOptions<TParticipant, TPrepopulateUserMediaParameters, TReorderStreamsParameters, TAllParameters>) => Promise<void>;

export declare const pruneExpiredSubtitles: (subtitles: Map<string, LiveSubtitle>, now?: number) => Map<string, LiveSubtitle>;

export declare const qhdCons: {
    width: {
        ideal: number;
    };
    height: {
        ideal: number;
    };
};

export declare const qhdConsNeu: {
    width: {
        ideal: number;
    };
    height: {
        ideal: number;
    };
};

export declare const qhdConsPort: {
    width: {
        ideal: number;
    };
    height: {
        ideal: number;
    };
};

export declare const qhdFrameRate = 30;

export declare const QnHDCons: {
    width: {
        ideal: number;
    };
    height: {
        ideal: number;
    };
};

export declare const QnHDConsNeu: {
    width: {
        ideal: number;
    };
    height: {
        ideal: number;
    };
};

export declare const QnHDConsPort: {
    width: {
        ideal: number;
    };
    height: {
        ideal: number;
    };
};

export declare const QnHDFrameRate = 5;

/**
 * Adjusts the layout parameters based on the provided options.
 *
 * @param {ReadjustOptions} options - The options for readjusting the layout.
 * @param {number} options.n - The number of participants or elements.
 * @param {number} options.state - The current state of the layout.
 * @param {object} options.parameters - The parameters for the layout adjustment.
 * @param {function} options.parameters.getUpdatedAllParams - Function to get updated parameters.
 * @param {string} options.parameters.eventType - The type of event (e.g., "broadcast", "chat", "conference").
 * @param {boolean} options.parameters.shareScreenStarted - Indicates if screen sharing has started.
 * @param {boolean} options.parameters.shared - Indicates if content is being shared.
 * @param {number} options.parameters.mainHeightWidth - The main height and width value.
 * @param {number} options.parameters.prevMainHeightWidth - The previous main height and width value.
 * @param {string} options.parameters.hostLabel - The label for the host.
 * @param {boolean} options.parameters.first_round - Indicates if it is the first round.
 * @param {boolean} options.parameters.lock_screen - Indicates if the screen is locked.
 * @param {function} options.parameters.updateMainHeightWidth - Function to update the main height and width.
 * @param {function} options.parameters.prepopulateUserMedia - Function to prepopulate user media.
 * @returns {Promise<void>} A promise that resolves when the layout adjustment is complete.
 * @throws {Error} Throws an error if there is an issue updating the grid sizes.
 *
 * @example
 * ```typescript
 * await readjust({
 *   n: 5,
 *   state: 1,
 *   parameters: {
 *     eventType: 'conference',
 *     shareScreenStarted: false,
 *     shared: false,
 *     mainHeightWidth: 100,
 *     prevMainHeightWidth: 80,
 *     hostLabel: 'Host Name',
 *     first_round: false,
 *     lock_screen: false,
 *     updateMainHeightWidth: updateMainHeightWidthFunction,
 *     getUpdatedAllParams: getUpdatedAllParamsFunction,
 *   },
 * });
 * ```
 */
export declare function readjust<TParameters extends ReadjustParameters = ReadjustParameters>({ n, state, parameters, }: ReadjustOptions<TParameters>): Promise<void>;

export declare interface ReadjustOptions<TParameters extends ReadjustParameters = ReadjustParameters> {
    n: number;
    state: number;
    parameters: TParameters;
}

export declare interface ReadjustParameters extends PrepopulateUserMediaParameters {
    eventType: EventType;
    shareScreenStarted: boolean;
    shared: boolean;
    mainHeightWidth: number;
    prevMainHeightWidth: number;
    hostLabel: string;
    first_round: boolean;
    lock_screen: boolean;
    updateMainHeightWidth: (value: number) => void;
    prepopulateUserMedia: PrepopulateUserMediaInvoker;
    getUpdatedAllParams: () => ReadjustParameters;
    [key: string]: any;
}

export declare type ReadjustType = <TParameters extends ReadjustParameters = ReadjustParameters>(options: ReadjustOptions<TParameters>) => Promise<void>;

/**
 * Receives all piped transports by emitting an event to the server and processing the response.
 *
 * @param {ReceiveAllPipedTransportsOptions} options - The options for receiving all piped transports.
 * @param {Socket} options.nsock - The socket instance used for communication.
 * @param {boolean} options.community - Whether the room is a community edition room.
 * @param {ReceiveAllPipedTransportsParameters} options.parameters - The parameters for the operation.
 * @param {string} options.parameters.roomName - The name of the room.
 * @param {string} options.parameters.member - The member identifier.
 * @param {Function} options.parameters.getPipedProducersAlt - The function to get piped producers for a given level.
 *
 * @returns {Promise<void>} A promise that resolves when the operation is complete.
 *
 * @throws Will log an error message if the operation fails.
 *
 * @example
 * ```typescript
 * await receiveAllPipedTransports({
 *   nsock: socketInstance,
 *   community: false,
 *   parameters: {
 *     roomName: 'Room1',
 *     member: 'Member1',
 *     getPipedProducersAlt: getPipedProducersAltFunction,
 *   },
 * });
 * ```
 */
export declare const receiveAllPipedTransports: ({ nsock, community, parameters }: ReceiveAllPipedTransportsOptions) => Promise<void>;

export declare interface ReceiveAllPipedTransportsOptions {
    nsock: Socket;
    community?: boolean;
    parameters: ReceiveAllPipedTransportsParameters;
}

export declare interface ReceiveAllPipedTransportsParameters extends GetPipedProducersAltParameters {
    roomName: string;
    member: string;
    getPipedProducersAlt: GetPipedProducersAltType;
    [key: string]: any;
}

export declare type ReceiveAllPipedTransportsType = (options: ReceiveAllPipedTransportsOptions) => Promise<void>;

/**
 * Appends an inbound chat message, filters banned senders, and updates unread badge state.
 *
 * @param {ReceiveMessageOptions} options - Message payload, participant state, and update callbacks.
 * @returns {Promise<void>} Resolves after message state is reconciled.
 *
 * @example
 * ```typescript
 * await receiveMessage({
 *   message,
 *   messages,
 *   participantsAll,
 *   member: 'Ada',
 *   eventType: 'conference',
 *   islevel: '1',
 *   coHost: '',
 *   updateMessages: setMessages,
 *   updateShowMessagesBadge: setShowMessagesBadge,
 * });
 * ```
 */
export declare const receiveMessage: ({ message, messages, participantsAll, member, eventType, islevel, coHost, updateMessages, updateShowMessagesBadge, }: ReceiveMessageOptions) => Promise<void>;

export declare interface ReceiveMessageData {
    message: Message;
}

export declare interface ReceiveMessageOptions {
    message: Message;
    messages: Message[];
    participantsAll: Participant[];
    member: string;
    eventType: EventType;
    islevel: string;
    coHost: string;
    updateMessages: (messages: Message[]) => void;
    updateShowMessagesBadge: (showBadge: boolean) => void;
}

export declare type ReceiveMessageType = (options: ReceiveMessageOptions) => Promise<void>;

/**
 * Retrieves messages from a specified room and updates the message state.
 *
 * @param {ReceiveRoomMessagesOptions} options - The options for receiving room messages.
 * @param {Socket} options.socket - The socket instance used for communication.
 * @param {string} options.roomName - The name of the room from which to retrieve messages.
 * @param {Function} options.updateMessages - Function to update the state with retrieved messages.
 *
 * @returns {Promise<void>} A promise that resolves when the messages have been retrieved and updated.
 *
 * @throws Will log an error message if there is an issue retrieving the messages.
 *
 * @example
 * ```typescript
 * await receiveRoomMessages({
 *   socket: socketInstance,
 *   roomName: 'Room1',
 *   updateMessages: (messages) => console.log(messages),
 * });
 * ```
 */
export declare function receiveRoomMessages({ socket, roomName, updateMessages, }: ReceiveRoomMessagesOptions): Promise<void>;

export declare interface ReceiveRoomMessagesOptions {
    socket: Socket;
    roomName: string;
    updateMessages: (messages: Message[]) => void;
}

export declare type ReceiveRoomMessagesType = (options: ReceiveRoomMessagesOptions) => Promise<void>;

export declare interface RecordingImageData {
    jpegBuffer: ImageData;
}

/**
 * Reconciles recording state updates, user recording settings, and progress UI after a recording socket notice.
 *
 * @param {RecordingNoticeOptions} options - Recording state payload and room-level update callbacks.
 * @returns {Promise<void>} Resolves once recording state, UI flags, and progress text are synchronized.
 *
 * @example
 * ```typescript
 * await recordingNotice({
 *   state: 'pause',
 *   userRecordingParam,
 *   pauseCount: 2,
 *   timeDone: 3600,
 *   parameters,
 * });
 * ```
 */
export declare const recordingNotice: <TUserRecordingParams extends RecordingNoticeUserRecordingParamsLike = UserRecordingParams, TEventType = EventType>({ state, userRecordingParam, pauseCount, timeDone, parameters, soundPlayer, }: RecordingNoticeOptions<TUserRecordingParams, TEventType>) => Promise<void>;

export declare interface RecordingNoticeData {
    state: string;
    userRecordingParam: UserRecordingParams;
    pauseCount: number;
    timeDone: number;
}

export declare interface RecordingNoticeOptions<TUserRecordingParams extends RecordingNoticeUserRecordingParamsLike = UserRecordingParams, TEventType = EventType> {
    state: string;
    userRecordingParam: TUserRecordingParams | null;
    pauseCount: number;
    timeDone: number;
    parameters: RecordingNoticeParameters<TUserRecordingParams, TEventType>;
    soundPlayer?: SoundPlayerType;
}

export declare interface RecordingNoticeParameters<TUserRecordingParams extends RecordingNoticeUserRecordingParamsLike = UserRecordingParams, TEventType = EventType> {
    islevel: string;
    userRecordingParams: TUserRecordingParams;
    pauseRecordCount?: number;
    recordElapsedTime: number;
    recordStartTime: number;
    recordStarted: boolean;
    recordPaused: boolean;
    canLaunchRecord: boolean;
    stopLaunchRecord: boolean;
    recordStopped: boolean;
    isTimerRunning: boolean;
    canPauseResume: boolean;
    eventType: TEventType;
    updateRecordingProgressTime: (time: string) => void;
    updateShowRecordButtons: (show: boolean) => void;
    updateUserRecordingParams: (params: TUserRecordingParams) => void;
    updateRecordingMediaOptions: (options: string) => void;
    updateRecordingAudioOptions: (options: string) => void;
    updateRecordingVideoOptions: (options: string) => void;
    updateRecordingVideoType: (type: string) => void;
    updateRecordingVideoOptimized: (optimized: boolean) => void;
    updateRecordingDisplayType: (type: 'video' | 'media' | 'all') => void;
    updateRecordingAddHLS: (addHLS: boolean) => void;
    updateRecordingNameTags: (nameTags: boolean) => void;
    updateRecordingBackgroundColor: (color: string) => void;
    updateRecordingNameTagsColor: (color: string) => void;
    updateRecordingOrientationVideo: (orientation: string) => void;
    updateRecordingAddText: (addText: boolean) => void;
    updateRecordingCustomText: (text: string) => void;
    updateRecordingCustomTextPosition: (position: string) => void;
    updateRecordingCustomTextColor: (color: string) => void;
    updatePauseRecordCount: (count: number) => void;
    updateRecordElapsedTime: (time: number) => void;
    updateRecordStarted: (started: boolean) => void;
    updateRecordPaused: (paused: boolean) => void;
    updateCanLaunchRecord: (canLaunch: boolean) => void;
    updateStopLaunchRecord: (stop: boolean) => void;
    updateRecordStopped: (stopped: boolean) => void;
    updateIsTimerRunning: (running: boolean) => void;
    updateCanPauseResume: (canPause: boolean) => void;
    updateRecordStartTime: (startTime: number) => void;
    updateRecordState: (state: string) => void;
    [key: string]: any;
}

export declare type RecordingNoticeType<TUserRecordingParams extends RecordingNoticeUserRecordingParamsLike = UserRecordingParams, TEventType = EventType> = (options: RecordingNoticeOptions<TUserRecordingParams, TEventType>) => Promise<void>;

export declare interface RecordingNoticeUserRecordingParamsLike {
    mainSpecs: {
        mediaOptions: string;
        audioOptions: string;
        videoOptions: string;
        videoType: string;
        videoOptimized: boolean;
        recordingDisplayType: 'video' | 'media' | 'all';
        addHLS: boolean;
    };
    dispSpecs: {
        nameTags: boolean;
        backgroundColor: string;
        nameTagsColor: string;
        orientationVideo: string;
    };
    textSpecs?: {
        addText?: boolean;
        customText?: string;
        customTextPosition?: string;
        customTextColor?: string;
    };
}

export declare interface RecordingParams {
    recordingAudioPausesLimit: number;
    recordingAudioSupport: boolean;
    recordingAudioPeopleLimit: number;
    recordingAudioParticipantsTimeLimit: number;
    recordingVideoPausesLimit: number;
    recordingVideoSupport: boolean;
    recordingVideoPeopleLimit: number;
    recordingVideoParticipantsTimeLimit: number;
    recordingAllParticipantsSupport: boolean;
    recordingVideoParticipantsSupport: boolean;
    recordingAllParticipantsFullRoomSupport: boolean;
    recordingVideoParticipantsFullRoomSupport: boolean;
    recordingPreferredOrientation: 'landscape' | 'portrait';
    recordingSupportForOtherOrientation: boolean;
    recordingMultiFormatsSupport: boolean;
    recordingHLSSupport: boolean;
    recordingAudioPausesCount?: number;
    recordingVideoPausesCount?: number;
}

export declare interface RecordParams {
    recordingAudioPausesLimit: number;
    recordingAudioPausesCount: number;
    recordingAudioSupport: boolean;
    recordingAudioPeopleLimit: number;
    recordingAudioParticipantsTimeLimit: number;
    recordingVideoPausesCount: number;
    recordingVideoPausesLimit: number;
    recordingVideoSupport: boolean;
    recordingVideoPeopleLimit: number;
    recordingVideoParticipantsTimeLimit: number;
    recordingAllParticipantsSupport: boolean;
    recordingVideoParticipantsSupport: boolean;
    recordingAllParticipantsFullRoomSupport: boolean;
    recordingVideoParticipantsFullRoomSupport: boolean;
    recordingPreferredOrientation: string;
    recordingSupportForOtherOrientation: boolean;
    recordingMultiFormatsSupport: boolean;
}

/**
 * Records the pause timer.
 *
 * @param {RecordPauseTimerOptions} options - The options for recording the pause timer.
 * @param {boolean} options.stop - A flag to stop the timer.
 * @param {boolean} options.isTimerRunning - Indicates if the timer is running.
 * @param {boolean} options.canPauseResume - Indicates if the timer can be paused or resumed.
 * @param {Function} options.showAlert - Function to show alerts.
 *
 * @returns {boolean} `true` if the timer can be paused or resumed, otherwise `false`.
 *
 * @example
 * ```typescript
 * const canPause = recordPauseTimer({
 *   stop: false,
 *   isTimerRunning: true,
 *   canPauseResume: true,
 *   showAlert: (alert) => console.log(alert.message),
 * })
 * ```
 */
export declare const recordPauseTimer: RecordPauseTimerType;

export declare interface RecordPauseTimerOptions {
    stop?: boolean;
    isTimerRunning: boolean;
    canPauseResume: boolean;
    showAlert?: ShowAlert;
}

export declare type RecordPauseTimerType = (options: RecordPauseTimerOptions) => boolean;

/**
 * Resumes the recording timer if it is not already running and can be paused/resumed.
 */
export declare const recordResumeTimer: RecordResumeTimerType;

export declare interface RecordResumeTimerOptions {
    parameters: RecordResumeTimerParameters;
}

export declare interface RecordResumeTimerParameters {
    isTimerRunning: boolean;
    canPauseResume: boolean;
    recordElapsedTime: number;
    recordStartTime: number;
    recordTimerInterval?: ReturnType<typeof setInterval> | null;
    showAlert?: ShowAlert;
    recordPaused: boolean;
    recordStopped: boolean;
    roomName: string | null;
    updateRecordStartTime: (time: number) => void;
    updateRecordTimerInterval: (interval: ReturnType<typeof setInterval> | null) => void;
    updateIsTimerRunning: (isRunning: boolean) => void;
    updateCanPauseResume: (canPause: boolean) => void;
    updateRecordElapsedTime: (elapsed: number) => void;
    updateRecordingProgressTime: (formatted: string) => void;
    getUpdatedAllParams: () => RecordResumeTimerParameters;
    [key: string]: any;
}

export declare type RecordResumeTimerType = (options: RecordResumeTimerOptions) => Promise<boolean>;

/**
 * Starts a recording timer and manages its state.
 *
 * @param {RecordStartTimerOptions} options - The options for starting the recording timer.
 * @param {Function} options.parameters.getUpdatedAllParams - Function to get updated parameters.
 * @param {number} options.parameters.recordStartTime - The start time of the recording.
 * @param {number | null} options.parameters.recordTimerInterval - The interval ID for the recording timer.
 * @param {boolean} options.parameters.isTimerRunning - Flag indicating if the timer is running.
 * @param {boolean} options.parameters.canPauseResume - Flag indicating if pause/resume actions are enabled.
 * @param {number} options.parameters.recordChangeSeconds - The time after which pause/resume actions are enabled.
 * @param {Function} options.parameters.updateRecordStartTime - Function to update the recording start time.
 * @param {Function} options.parameters.updateRecordTimerInterval - Function to update the recording timer interval.
 * @param {Function} options.parameters.updateIsTimerRunning - Function to update the timer running state.
 * @param {Function} options.parameters.updateCanPauseResume - Function to update the pause/resume state.
 *
 * @example
 * ```typescript
 * await recordStartTimer({ parameters })
 * ```
 */
export declare const recordStartTimer: RecordStartTimerType;

export declare interface RecordStartTimerOptions {
    parameters: RecordStartTimerParameters;
}

export declare interface RecordStartTimerParameters {
    recordStartTime: number;
    recordTimerInterval?: ReturnType<typeof setInterval> | null;
    isTimerRunning: boolean;
    canPauseResume: boolean;
    recordChangeSeconds: number;
    recordPaused: boolean;
    recordStopped: boolean;
    roomName: string | null;
    updateRecordStartTime: (time: number) => void;
    updateRecordTimerInterval: (interval: ReturnType<typeof setInterval> | null) => void;
    updateIsTimerRunning: (isRunning: boolean) => void;
    updateCanPauseResume: (canPause: boolean) => void;
    recordElapsedTime: number;
    updateRecordElapsedTime: (elapsed: number) => void;
    updateRecordingProgressTime: (formatted: string) => void;
    getUpdatedAllParams: () => RecordStartTimerParameters;
    [key: string]: any;
}

export declare type RecordStartTimerType = (options: RecordStartTimerOptions) => Promise<void>;

/**
 * Updates the recording timer by calculating the elapsed time since the recording started
 * and formatting it in HH:MM:SS format.
 *
 * @param {RecordUpdateTimerOptions} options - The options object.
 * @param {number} options.recordElapsedTime - The elapsed recording time in seconds.
 * @param {number} options.recordStartTime - The timestamp when the recording started.
 * @param {Function} options.updateRecordElapsedTime - Callback to update the elapsed recording time.
 * @param {Function} options.updateRecordingProgressTime - Callback to update the formatted recording time.
 *
 * @example
 * ```typescript
 * recordUpdateTimer({
 *   recordElapsedTime: 0,
 *   recordStartTime: Date.now(),
 *   updateRecordElapsedTime: (elapsedTime) => console.log('Elapsed:', elapsedTime),
 *   updateRecordingProgressTime: (formatted) => console.log('Progress:', formatted),
 * })
 * ```
 */
export declare const recordUpdateTimer: RecordUpdateTimerType;

export declare interface RecordUpdateTimerOptions {
    recordElapsedTime: number;
    recordStartTime: number;
    updateRecordElapsedTime: (elapsedTime: number) => void;
    updateRecordingProgressTime: (formattedTime: string) => void;
}

export declare type RecordUpdateTimerType = (options: RecordUpdateTimerOptions) => void;

export declare function registerGlobals(): void;

/**
 * Re-requests recording startup when host controls allow it.
 *
 * @param {ReInitiateRecordingOptions} options - Room identity, socket, and admin restriction state.
 * @returns {Promise<void>} Resolves after the emit request is sent or skipped.
 *
 * @example
 * ```typescript
 * await reInitiateRecording({
 *   roomName: 'exampleRoom',
 *   member: 'adminUser',
 *   socket,
 *   adminRestrictSetting: false,
 * });
 * ```
 */
export declare const reInitiateRecording: ({ roomName, member, socket, adminRestrictSetting, }: ReInitiateRecordingOptions) => Promise<void>;

export declare interface ReInitiateRecordingOptions {
    roomName: string;
    member: string;
    socket: ReInitiateRecordingSocketLike;
    adminRestrictSetting: boolean;
}

export declare interface ReInitiateRecordingSocketLike {
    emit: (event: string, payload: {
        roomName: string;
        member: string;
    }, callback?: (response: {
        success: boolean;
    }) => void) => void;
}

export declare type ReInitiateRecordingType = (options: ReInitiateRecordingOptions) => Promise<void>;

export declare const removedFromPanelists: RemovedFromPanelistsType;

export declare interface RemovedFromPanelistsData {
    message: string;
}

export declare interface RemovedFromPanelistsOptions {
    data: RemovedFromPanelistsData;
    showAlert?: ShowAlert;
}

export declare type RemovedFromPanelistsType = (options: RemovedFromPanelistsOptions) => Promise<void>;

export declare const removePanelist: ({ socket, participant, roomName, member: _member, islevel, showAlert, }: RemovePanelistOptions) => Promise<void>;

export declare interface RemovePanelistOptions {
    socket: Socket;
    participant: Participant;
    roomName: string;
    member: string;
    islevel: string;
    showAlert?: ShowAlert;
}

export declare type RemovePanelistType = (options: RemovePanelistOptions) => Promise<void>;

/**
 * Removes a participant from the room if the user has the necessary permissions.
 *
 * @param {RemoveParticipantsOptions} options - The options for removing a participant.
 * @param {CoHostResponsibility[]} options.coHostResponsibility - The responsibilities assigned to the co-host.
 * @param {Participant} options.participant - The participant to be removed from the room.
 * @param {string} options.member - The current member attempting to remove the participant.
 * @param {string} options.islevel - The level of the current member.
 * @param {ShowAlert} [options.showAlert] - Optional function to display an alert.
 * @param {string} options.coHost - The co-host identifier.
 * @param {Participant[]} options.participants - List of current participants.
 * @param {Socket} options.socket - The socket instance for communication.
 * @param {string} options.roomName - The name of the room.
 * @param {Function} options.updateParticipants - Function to update the participants list.
 *
 * @example
 * ```typescript
 * removeParticipants({
 *   coHostResponsibility: [{ name: "participants", value: true }],
 *   participant: { id: "123", name: "John Doe", islevel: "1" },
 *   member: "currentMember",
 *   islevel: "2",
 *   showAlert: (alert) => console.log(alert.message),
 *   coHost: "coHostMember",
 *   participants: [{ id: "123", name: "John Doe", islevel: "1" }],
 *   socket,
 *   roomName: "room1",
 *   updateParticipants: (updatedParticipants) => console.log(updatedParticipants),
 * });
 * ```
 */
export declare const removeParticipants: ({ coHostResponsibility, participant, member, islevel, showAlert, coHost, participants, socket, roomName, updateParticipants }: RemoveParticipantsOptions) => Promise<void>;

export declare interface RemoveParticipantsOptions {
    coHostResponsibility: CoHostResponsibility[];
    participant: Participant;
    member: string;
    islevel: string;
    showAlert?: ShowAlert;
    coHost: string;
    participants: Participant[];
    socket: Socket;
    roomName: string;
    updateParticipants: (participants: Participant[]) => void;
}

export declare type RemoveParticipantsType = (options: any) => Promise<void>;

declare interface ReorderParticipantLike {
    name: string;
    islevel?: string | null;
    videoID?: string | null;
    ScreenID?: string | null;
}

declare interface ReorderStreamLike {
    producerId?: string | null;
}

/**
 * Reorders the video streams based on the provided options and updates the UI accordingly.
 *
 * @param {ReorderStreamsOptions} options - The options for reordering streams.
 * @param {boolean} [options.add=false] - Whether to add new streams or not.
 * @param {boolean} [options.screenChanged=false] - Whether the screen has changed or not.
 * @param {Object} options.parameters - The parameters required for reordering streams.
 * @param {Function} options.parameters.getUpdatedAllParams - Function to get updated parameters.
 * @param {Array} options.parameters.allVideoStreams - Array of all video streams.
 * @param {Array} options.parameters.participants - Array of participants.
 * @param {Array} options.parameters.oldAllStreams - Array of old streams.
 * @param {string} options.parameters.screenId - ID of the screen.
 * @param {string} options.parameters.adminVidID - ID of the admin video.
 * @param {Array} options.parameters.newLimitedStreams - Array of new limited streams.
 * @param {Array} options.parameters.newLimitedStreamsIDs - Array of new limited stream IDs.
 * @param {Array} options.parameters.activeSounds - Array of active sounds.
 * @param {string} options.parameters.screenShareIDStream - ID of the screen share stream.
 * @param {string} options.parameters.screenShareNameStream - Name of the screen share stream.
 * @param {string} options.parameters.adminIDStream - ID of the admin stream.
 * @param {string} options.parameters.adminNameStream - Name of the admin stream.
 * @param {Function} options.parameters.updateNewLimitedStreams - Function to update new limited streams.
 * @param {Function} options.parameters.updateNewLimitedStreamsIDs - Function to update new limited stream IDs.
 * @param {Function} options.parameters.updateActiveSounds - Function to update active sounds.
 * @param {Function} options.parameters.updateScreenShareIDStream - Function to update screen share ID stream.
 * @param {Function} options.parameters.updateScreenShareNameStream - Function to update screen share name stream.
 * @param {Function} options.parameters.updateAdminIDStream - Function to update admin ID stream.
 * @param {Function} options.parameters.updateAdminNameStream - Function to update admin name stream.
 * @param {Function} options.parameters.updateYouYouStream - Function to update YouYou stream.
 * @param {Function} options.parameters.changeVids - Function to reflect changes on the UI.
 *
 * @returns {Promise<void>} A promise that resolves when the reordering is complete.
 *
 * @throws {Error} Throws an error if there is an issue updating the streams.
 *
 * @example
 * ```typescript
 * await reorderStreams({
 *   add: true,
 *   screenChanged: false,
 *   parameters: {
 *     allVideoStreams: [...],
 *     participants: [...],
 *     // additional parameters...
 *   },
 * });
 * ```
 */
export declare const reorderStreams: <TParameters extends ReorderStreamsParameters<any, any, any> = ReorderStreamsParameters>({ add, screenChanged, parameters, }: ReorderStreamsOptions<TParameters>) => Promise<void>;

declare type ReorderStreamsInvoker = (options: {
    add?: boolean;
    screenChanged?: boolean;
    parameters: any;
}) => Promise<void>;

export declare interface ReorderStreamsOptions<TParameters extends ReorderStreamsParameters<any, any, any> = ReorderStreamsParameters> {
    add?: boolean;
    screenChanged?: boolean;
    parameters: TParameters;
}

export declare interface ReorderStreamsParameters<TStream extends ReorderStreamLike = Stream, TParticipant extends ReorderParticipantLike = Participant, TChangeVidsParameters = unknown> {
    allVideoStreams: (TStream | TParticipant)[];
    participants: TParticipant[];
    oldAllStreams: (TStream | TParticipant)[];
    screenId?: string;
    adminVidID?: string;
    newLimitedStreams: (TStream | TParticipant)[];
    newLimitedStreamsIDs: string[];
    activeSounds: string[];
    screenShareIDStream?: string;
    screenShareNameStream?: string;
    adminIDStream?: string;
    adminNameStream?: string;
    updateNewLimitedStreams: StreamCollectionUpdater<TStream | TParticipant>;
    updateNewLimitedStreamsIDs: (ids: string[]) => void;
    updateActiveSounds: (sounds: string[]) => void;
    updateScreenShareIDStream: (id: string) => void;
    updateScreenShareNameStream: (name: string) => void;
    updateAdminIDStream: (id: string) => void;
    updateAdminNameStream: (name: string) => void;
    updateYouYouStream: StreamCollectionUpdater<TStream | TParticipant>;
    changeVids: ChangeVidsInvoker;
    getUpdatedAllParams: () => ReorderStreamsParameters<TStream, TParticipant, TChangeVidsParameters>;
    [key: string]: any;
}

export declare type ReorderStreamsType = <TParameters extends ReorderStreamsParameters<any, any, any> = ReorderStreamsParameters>(options: ReorderStreamsOptions<TParameters>) => Promise<void>;

/**
 * RePort function that handles the reporting logic based on the provided parameters.
 *
 * @param {RePortOptions} options - The options for the rePort function.
 * @param {boolean} [options.restart=false] - Flag indicating whether to restart the process.
 * @param {Object} options.parameters - The parameters object containing various states and functions.
 * @param {Function} options.parameters.getUpdatedAllParams - Function to get updated parameters.
 * @param {string} options.parameters.islevel - The current level of the process.
 * @param {string} options.parameters.mainScreenPerson - The person on the main screen.
 * @param {boolean} options.parameters.adminOnMainScreen - Flag indicating if admin is on the main screen.
 * @param {boolean} options.parameters.mainScreenFilled - Flag indicating if the main screen is filled.
 * @param {boolean} options.parameters.recordStarted - Flag indicating if recording has started.
 * @param {boolean} options.parameters.recordStopped - Flag indicating if recording has stopped.
 * @param {boolean} options.parameters.recordPaused - Flag indicating if recording is paused.
 * @param {boolean} options.parameters.recordResumed - Flag indicating if recording has resumed.
 * @param {Array} options.parameters.screenStates - Array of current screen states.
 * @param {Function} options.parameters.updateScreenStates - Function to update the current screen states.
 * @param {Function} options.parameters.updatePrevScreenStates - Function to update the previous screen states.
 * @param {Function} options.parameters.compareActiveNames - Function to compare active names.
 * @param {Function} options.parameters.compareScreenStates - Function to compare screen states.
 *
 * @returns {Promise<void>} A promise that resolves when the reporting process is complete.
 *
 * @throws {Error} Throws an error if there is an issue during the reporting process.
 *
 * @example
 * ```typescript
 * await rePort({
 *   restart: false,
 *   parameters: {
 *     islevel: "2",
 *     mainScreenPerson: "John Doe",
 *     // other parameters...
 *   },
 * });
 * ```
 */
export declare function rePort({ restart, parameters }: RePortOptions): Promise<void>;

export declare interface RePortOptions {
    restart?: boolean;
    parameters: RePortParameters;
}

export declare interface RePortParameters extends CompareScreenStatesParameters, CompareActiveNamesParameters {
    islevel: string;
    mainScreenPerson: string;
    adminOnMainScreen: boolean;
    mainScreenFilled: boolean;
    recordStarted: boolean;
    recordStopped: boolean;
    recordPaused: boolean;
    recordResumed: boolean;
    screenStates: ScreenState[];
    prevScreenStates: ScreenState[];
    updateScreenStates: (states: ScreenState[]) => void;
    updatePrevScreenStates: (states: ScreenState[]) => void;
    compareActiveNames: CompareActiveNamesType;
    compareScreenStates: CompareScreenStatesType;
    getUpdatedAllParams: () => RePortParameters;
    [key: string]: any;
}

export declare type RePortType = (options: RePortOptions) => Promise<void>;

declare interface Request_2 {
    id: string;
    icon: string;
    name?: string;
    username?: string;
    [key: string]: any;
}
export { Request_2 as Request }

export declare type RequestPermissionAudioType = () => Promise<string>;

export declare type RequestPermissionCameraType = () => Promise<string>;

export declare interface RequestResponse {
    id: string;
    icon?: string;
    name?: string;
    username?: string;
    action?: string;
    type?: string;
    [key: string]: any;
}

/**
 * Requests to start screen sharing.
 *
 * @param {RequestScreenShareOptions} options - The options for requesting screen share.
 * @param {Object} options.parameters - The parameters for the screen share request.
 * @param {Socket} options.parameters.socket - The socket instance to communicate with the server.
 * @param {Function} [options.parameters.showAlert] - Optional function to show alerts to the user.
 * @param {boolean} options.parameters.localUIMode - Indicates if the user is in local UI mode.
 * @param {string} [options.parameters.targetResolution] - The target resolution for screen sharing.
 * @param {string} [options.parameters.targetResolutionHost] - The target resolution for screen sharing for the host.
 * @param {Function} options.parameters.startShareScreen - Function to start screen sharing.
 *
 * @returns {Promise<void>} A promise that resolves when the screen share request is processed.
 *
 * @throws {Error} Throws an error if there is an issue during the screen share request process.
 *
 * @example
 * ```typescript
 * await requestScreenShare({
 *   parameters: {
 *     socket: socketInstance,
 *     localUIMode: false,
 *     targetResolution: 'fhd',
 *     startShareScreen: startShareScreenFunction,
 *     // other parameters...
 *   },
 * });
 * ```
 */
export declare function requestScreenShare({ parameters }: RequestScreenShareOptions): Promise<void>;

export declare interface RequestScreenShareOptions {
    parameters: RequestScreenShareParameters;
}

export declare interface RequestScreenShareParameters extends StartShareScreenParameters {
    socket: Socket;
    showAlert?: ShowAlert;
    localUIMode: boolean;
    targetResolution?: string;
    targetResolutionHost?: string;
    startShareScreen: StartShareScreenType;
    getUpdatedAllParams: () => RequestScreenShareParameters;
    [key: string]: any;
}

export declare type RequestScreenShareType = (options: RequestScreenShareOptions) => Promise<void>;

/**
 * Resolves the correct host video stream source for non-screen-share rendering.
 */
export declare function resolveHostVideoStream<TStreamLike extends PrepopulateStreamLike = PrepopulateStreamLike>({ islevel, keepBackground, virtualStream, localStreamVideo, oldAllStreams, hostVideoID, }: ResolveHostVideoStreamOptions<TStreamLike>): any;

export declare interface ResolveHostVideoStreamOptions<TStreamLike = PrepopulateStreamLike> {
    islevel: string;
    keepBackground: boolean;
    virtualStream: any;
    localStreamVideo: any;
    oldAllStreams: TStreamLike[];
    hostVideoID?: string;
}

/**
 * Pure helper for resolving which non-screen-share host card mode should render.
 */
export declare function resolveMainHostRenderMode({ islevel, localUIMode, videoAlreadyOn, audioAlreadyOn, hostVideoOn, hostMuted, }: ResolveMainHostRenderModeOptions): MainHostRenderMode;

export declare interface ResolveMainHostRenderModeOptions {
    islevel: string;
    localUIMode: boolean;
    videoAlreadyOn: boolean;
    audioAlreadyOn: boolean;
    hostVideoOn: boolean;
    hostMuted?: boolean;
}

/**
 * Responds to incoming requests by updating the request list and emitting a response to the server.
 *
 * @param {Object} options - The options for responding to requests.
 * @param {Socket} options.socket - The socket instance used to emit the response.
 * @param {Request} options.request - The request object containing details of the request.
 * @param {Function} options.updateRequestList - The function to update the request list.
 * @param {Request[]} options.requestList - The current list of requests.
 * @param {string} options.action - The action to be taken on the request.
 * @param {string} options.roomName - The name of the room to which the response should be emitted.
 *
 * @returns {Promise<void>} A promise that resolves when the response has been emitted.
 *
 * @example
 * ```typescript
 * respondToRequests({
 *   socket,
 *   request: { id: "123", name: "John", icon: "fa-microphone" },
 *   updateRequestList: setRequestList,
 *   requestList: currentRequests,
 *   action: "accept",
 *   roomName: "mainRoom"
 * });
 * ```
 */
export declare const respondToRequests: ({ socket, request, updateRequestList, requestList, action, roomName, }: RespondToRequestsOptions) => Promise<void>;

export declare interface RespondToRequestsOptions {
    socket: Socket;
    request: Request_2;
    updateRequestList: (newRequestList: Request_2[]) => void;
    requestList?: Request_2[];
    action: string;
    roomName: string;
}

export declare type RespondToRequestsType = (options: RespondToRequestsOptions) => Promise<void>;

/**
 * Responds to a participant waiting to join a room by either allowing or denying their entry.
 *
 * @param {RespondToWaitingOptions} options - The options for responding to the waiting participant.
 * @param {string} options.participantId - The ID of the participant.
 * @param {string} options.participantName - The name of the participant.
 * @param {Function} options.updateWaitingList - The function to update the waiting list.
 * @param {WaitingRoomParticipant[]} options.waitingList - The current waiting list of participants.
 * @param {boolean | string} options.type - The type of response, either "true" or "false".
 * @param {string} options.roomName - The name of the room.
 * @param {Socket} options.socket - The socket instance to emit events.
 *
 * @example
 * ```typescript
 * const options = {
 *   participantId: "12345",
 *   participantName: "John Doe",
 *   updateWaitingList: (list) => console.log("Updated Waiting List:", list),
 *   waitingList: [{ id: "12345", name: "John Doe" }],
 *   type: true,
 *   roomName: "room1",
 *   socket: socketInstance,
 * };
 * respondToWaiting(options);
 * ```
 */
export declare const respondToWaiting: ({ participantId, participantName, updateWaitingList, waitingList, type, roomName, socket, }: RespondToWaitingOptions) => Promise<void>;

export declare interface RespondToWaitingOptions {
    participantId: string;
    participantName: string;
    updateWaitingList: (waitingList: WaitingRoomParticipant[]) => void;
    waitingList?: WaitingRoomParticipant[];
    type: string | boolean;
    roomName: string;
    socket: Socket;
}

export declare type RespondToWaitingType = (options: RespondToWaitingOptions) => Promise<void>;

export declare interface ResponseJoinLocalRoom {
    rtpCapabilities?: RtpCapabilities | null;
    isHost: boolean;
    eventStarted: boolean;
    isBanned: boolean;
    hostNotJoined: boolean;
    eventRoomParams: MeetingRoomParams;
    recordingParams: RecordingParams;
    secureCode: string;
    mediasfuURL: string;
    apiKey: string;
    apiUserName: string;
    allowRecord: boolean;
}

export declare interface ResponseJoinRoom {
    rtpCapabilities?: RtpCapabilities | null;
    success: boolean;
    roomRecvIPs: string[];
    meetingRoomParams: MeetingRoomParams;
    recordingParams: RecordingParams;
    secureCode: string;
    recordOnly: boolean;
    isHost: boolean;
    safeRoom: boolean;
    autoStartSafeRoom: boolean;
    safeRoomStarted: boolean;
    safeRoomEnded: boolean;
    reason?: string;
    banned?: boolean;
    suspended?: boolean;
    noAdmin?: boolean;
}

export declare interface ResponseLocalConnection {
    socket?: Socket;
    data?: ResponseLocalConnectionData;
}

export declare interface ResponseLocalConnectionData {
    socketId: string;
    mode: string;
    apiUserName?: string;
    apiKey?: string;
    allowRecord: boolean;
    meetingRoomParams_: MeetingRoomParams;
    recordingParams_: RecordingParams;
}

export declare const resumeOriginalProducer: ({ originalProducerId, speakerId, parameters, }: ResumeOriginalProducerOptions) => Promise<void>;

export declare interface ResumeOriginalProducerOptions {
    originalProducerId: string;
    speakerId?: string;
    parameters: TranslationConsumerSwitchParameters;
}

export declare type ResumeOriginalProducerType = (options: ResumeOriginalProducerOptions) => Promise<void>;

/**
 * Resumes or pauses audio streams based on the provided options.
 *
 * @param {ResumePauseAudioStreamsOptions} options - The options for resuming or pausing audio streams.
 * @param {number} [options.breakRoom=-1] - The ID of the break room.
 * @param {boolean} [options.inBreakRoom=false] - Indicates if the participant is in a break room.
 * @param {ResumePauseAudioStreamsParameters} options.parameters - The parameters required for processing audio streams.
 *
 * @returns {Promise<void>} A promise that resolves when the audio streams have been processed.
 *
 * @throws Will log an error message if there is an issue processing the audio streams.
 *
 * @example
 * ```typescript
 * await resumePauseAudioStreams({
 *   breakRoom: 1,
 *   inBreakRoom: true,
 *   parameters: {
 *     // ...parameters here
 *   },
 * });
 * ```
 */
export declare const resumePauseAudioStreams: <TTransport extends AudioTransportLike = Transport, TMediaEntry extends MediaEntryLike | ParticipantLike = Stream | Participant>({ breakRoom, inBreakRoom, parameters, }: ResumePauseAudioStreamsOptions<TTransport, TMediaEntry>) => Promise<void>;

export declare interface ResumePauseAudioStreamsOptions<TTransport extends AudioTransportLike = Transport, TMediaEntry extends MediaEntryLike | ParticipantLike = Stream | Participant> {
    breakRoom?: number;
    inBreakRoom?: boolean;
    parameters: ResumePauseAudioStreamsParameters<TTransport, TMediaEntry>;
}

export declare interface ResumePauseAudioStreamsParameters<TTransport extends AudioTransportLike = Transport, TMediaEntry extends MediaEntryLike | ParticipantLike = Stream | Participant> extends ProcessConsumerTransportsAudioParameters {
    breakoutRooms: BreakoutParticipantLike_2[][];
    ref_participants: ParticipantLike[];
    allAudioStreams: TMediaEntry[];
    participants: ParticipantLike[];
    islevel: string;
    eventType: EventType;
    consumerTransports: TTransport[];
    limitedBreakRoom: BreakoutParticipantLike_2[];
    hostNewRoom: number;
    member: string;
    updateLimitedBreakRoom: (limitedBreakRoom: BreakoutParticipantLike_2[]) => void;
    processConsumerTransportsAudio: (options: {
        consumerTransports: TTransport[];
        lStreams: TMediaEntry[];
        parameters: ProcessConsumerTransportsAudioParameters;
    }) => Promise<void>;
    getUpdatedAllParams: () => ResumePauseAudioStreamsParameters<TTransport, TMediaEntry>;
    [key: string]: any;
}

export declare type ResumePauseAudioStreamsType = (options: ResumePauseAudioStreamsOptions) => Promise<void>;

/**
 * Resumes or pauses streams based on the provided parameters.
 *
 * @param {ResumePauseStreamsOptions} options - The options for resuming or pausing streams.
 * @param {Object} options.parameters - The parameters for the function.
 * @param {Array} options.parameters.participants - The list of participants.
 * @param {Array} options.parameters.dispActiveNames - The list of active display names.
 * @param {Array} options.parameters.consumerTransports - The list of consumer transports.
 * @param {string} [options.parameters.screenId] - The screen producer ID.
 * @param {string} options.parameters.islevel - The level of the user.
 *
 * @returns {Promise<void>} A promise that resolves when the streams have been resumed or paused.
 *
 * @throws Will throw an error if there is an issue during the process of resuming or pausing streams.
 *
 * @example
 * ```typescript
 * await resumePauseStreams({
 *   parameters: {
 *     participants: participantArray,
 *     dispActiveNames: ['user1', 'user2'],
 *     consumerTransports: transportArray,
 *     screenId: 'screen-123',
 *     islevel: '1',
 *   },
 * });
 * ```
 */
export declare function resumePauseStreams<TParticipant extends ParticipantLike_2 = Participant, TTransport extends TransportLike_3 = Transport, TStream = Stream>({ parameters, }: ResumePauseStreamsOptions<TParticipant, TTransport, TStream>): Promise<void>;

export declare interface ResumePauseStreamsOptions<TParticipant extends ParticipantLike_2 = Participant, TTransport extends TransportLike_3 = Transport, TStream = Stream> {
    parameters: ResumePauseStreamsParameters<TParticipant, TTransport, TStream>;
}

export declare interface ResumePauseStreamsParameters<TParticipant extends ParticipantLike_2 = Participant, TTransport extends TransportLike_3 = Transport, TStream = Stream> {
    participants: TParticipant[];
    dispActiveNames: string[];
    remoteScreenStream: TStream[];
    consumerTransports: TTransport[];
    screenId?: string;
    islevel: string;
    getUpdatedAllParams: () => ResumePauseStreamsParameters<TParticipant, TTransport, TStream>;
    [key: string]: any;
}

export declare type ResumePauseStreamsType = <TParticipant extends ParticipantLike_2 = Participant, TTransport extends TransportLike_3 = Transport, TStream = Stream>(options: ResumePauseStreamsOptions<TParticipant, TTransport, TStream>) => Promise<void>;

/**
 * Resumes the send transport for audio and updates the UI and audio producer state accordingly.
 *
 * This function supports both a primary and a local audio producer, delegating the local logic to a separate function.
 *
 * @param {ResumeSendTransportAudioOptions} options - The options for resuming the send transport.
 * @param {ResumeSendTransportAudioParameters} options.parameters - The parameters for resuming the send transport.
 * @param {Producer} options.parameters.audioProducer - The primary audio producer to resume.
 * @param {Producer} [options.parameters.localAudioProducer] - The local audio producer to resume.
 * @param {string} options.parameters.islevel - The level of the audio producer.
 * @param {string} options.parameters.hostLabel - The label for the host.
 * @param {boolean} options.parameters.lock_screen - Indicates if the screen is locked.
 * @param {boolean} options.parameters.shared - Indicates if the screen is shared.
 * @param {boolean} options.parameters.videoAlreadyOn - Indicates if the video is already on.
 * @param {Function} options.parameters.updateAudioProducer - Function to update the audio producer state.
 * @param {Function} [options.parameters.updateLocalAudioProducer] - Function to update the local audio producer state.
 * @param {Function} options.parameters.updateUpdateMainWindow - Function to update the main window.
 * @param {Function} options.parameters.prepopulateUserMedia - Function to prepopulate user media.
 * @returns {Promise<void>} A promise that resolves when the send transport is resumed and the UI is updated.
 *
 * @throws {Error} Throws an error if there is an issue during the process of resuming the audio send transport.
 *
 * @example
 * ```typescript
 * await resumeSendTransportAudio({
 *   parameters: {
 *     audioProducer: producer,
 *     localAudioProducer: localProducer,
 *     islevel: '1',
 *     hostLabel: 'Host',
 *     lock_screen: false,
 *     shared: false,
 *     updateAudioProducer: updateProducerFunction,
 *     updateLocalAudioProducer: updateLocalProducerFunction,
 *     videoAlreadyOn: false,
 *     updateUpdateMainWindow: updateWindowFunction,
 *     prepopulateUserMedia: prepopulateFunction,
 *     prepopulateLocalUserMedia: prepopulateLocalFunction,
 *   },
 * });
 * ```
 */
export declare const resumeSendTransportAudio: ResumeSendTransportAudioType;

export declare interface ResumeSendTransportAudioOptions {
    parameters: ResumeSendTransportAudioParameters;
}

export declare interface ResumeSendTransportAudioParameters extends PrepopulateUserMediaParameters {
    audioProducer: Producer | null;
    localAudioProducer?: Producer | null;
    islevel: string;
    hostLabel: string;
    lock_screen: boolean;
    shared: boolean;
    videoAlreadyOn: boolean;
    updateAudioProducer: (audioProducer: Producer | null) => void;
    updateLocalAudioProducer?: (localAudioProducer: Producer | null) => void;
    updateUpdateMainWindow: (updateMainWindow: boolean) => void;
    prepopulateUserMedia: PrepopulateUserMediaType;
    prepopulateLocalUserMedia?: PrepopulateUserMediaType;
    [key: string]: any;
}

export declare type ResumeSendTransportAudioType = (options: ResumeSendTransportAudioOptions) => Promise<void>;

/**
 * Updates the interaction state based on the provided options and parameters.
 *
 * @param {ReUpdateInterOptions} options - The options for updating the interaction.
 * @param {string} options.name - The name of the participant.
 * @param {boolean} [options.add=false] - Whether to add the participant to the interaction.
 * @param {boolean} [options.force=false] - Whether to force the update.
 * @param {number} [options.average=127] - The average value used for determining reorder intervals.
 * @param {Object} options.parameters - The parameters for updating the interaction.
 * @param {number} options.parameters.screenPageLimit - The screen page limit.
 * @param {number} options.parameters.itemPageLimit - The item page limit.
 * @param {number} options.parameters.reorderInterval - The reorder interval.
 * @param {number} options.parameters.fastReorderInterval - The fast reorder interval.
 * @param {string} options.parameters.eventType - The type of event.
 * @param {Array} options.parameters.participants - The list of participants.
 * @param {Array} options.parameters.allVideoStreams - The list of all video streams.
 * @param {boolean} options.parameters.shared - Whether the screen is shared.
 * @param {boolean} options.parameters.shareScreenStarted - Whether screen sharing has started.
 * @param {string} options.parameters.adminNameStream - The admin name stream.
 * @param {string} options.parameters.screenShareNameStream - The screen share name stream.
 * @param {boolean} options.parameters.updateMainWindow - Whether to update the main window.
 * @param {boolean} options.parameters.sortAudioLoudness - Whether to sort audio by loudness.
 * @param {number} options.parameters.lastReorderTime - The last reorder time.
 * @param {Array} options.parameters.newLimitedStreams - The list of new limited streams.
 * @param {Array} options.parameters.newLimitedStreamsIDs - The list of new limited stream IDs.
 * @param {Array} options.parameters.oldSoundIds - The list of old sound IDs.
 * @param {Function} options.parameters.updateUpdateMainWindow - Function to update the main window.
 * @param {Function} options.parameters.updateSortAudioLoudness - Function to update the audio loudness sorting.
 * @param {Function} options.parameters.updateLastReorderTime - Function to update the last reorder time.
 * @param {Function} options.parameters.updateNewLimitedStreams - Function to update the new limited streams.
 * @param {Function} options.parameters.updateNewLimitedStreamsIDs - Function to update the new limited stream IDs.
 * @param {Function} options.parameters.updateOldSoundIds - Function to update the old sound IDs.
 * @param {Function} options.parameters.onScreenChanges - Function to handle screen changes.
 * @param {Function} options.parameters.reorderStreams - Function to reorder streams.
 * @param {Function} options.parameters.changeVids - Function to change videos.
 *
 * @returns {Promise<void>} A promise that resolves when the interaction update is complete.
 *
 * @throws {Error} Throws an error if there is an issue during the updating process.
 *
 * @example
 * ```typescript
 * await reUpdateInter({
 *   name: 'participant1',
 *   add: true,
 *   parameters: {
 *     screenPageLimit: 4,
 *     itemPageLimit: 2,
 *     reorderInterval: 500,
 *     fastReorderInterval: 200,
 *     eventType: 'conference',
 *     participants: [...],
 *     allVideoStreams: [...],
 *     shared: false,
 *     shareScreenStarted: false,
 *     adminNameStream: 'Admin',
 *     screenShareNameStream: 'Screen Share',
 *     updateMainWindow: true,
 *     sortAudioLoudness: false,
 *     lastReorderTime: Date.now(),
 *     newLimitedStreams: [],
 *     newLimitedStreamsIDs: [],
 *     oldSoundIds: [],
 *     updateUpdateMainWindow: (value) => { console.log('your logic') },
 *     updateSortAudioLoudness: (value) => { console.log('your logic') },
 *     updateLastReorderTime: (value) => { console.log('your logic') },
 *     updateNewLimitedStreams: (streams) => { console.log('your logic') },
 *     updateNewLimitedStreamsIDs: (ids) => { console.log('your logic') },
 *     updateOldSoundIds: (ids) => { console.log('your logic') },
 *     onScreenChanges: async (options) => { console.log('your logic') },
 *     reorderStreams: async (options) => { console.log('your logic') },
 *     changeVids: async (options) => { console.log('your logic') },
 *   },
 * });
 * ```
 */
export declare function reUpdateInter<TParameters extends ReUpdateInterParameters<any, any> = ReUpdateInterParameters>({ name, add, force, average, parameters, }: ReUpdateInterOptions<TParameters>): Promise<void>;

export declare interface ReUpdateInterOptions<TParameters extends ReUpdateInterParameters<any, any> = ReUpdateInterParameters> {
    name: string;
    add?: boolean;
    force?: boolean;
    average?: number;
    parameters: TParameters;
}

export declare interface ReUpdateInterParameters<TStream extends ReUpdateInterStreamLike = Stream, TParticipant extends ReUpdateInterParticipantLike = Participant> {
    screenPageLimit: number;
    itemPageLimit: number;
    reorderInterval: number;
    fastReorderInterval: number;
    eventType: EventType;
    participants: TParticipant[];
    allVideoStreams: (TParticipant | TStream)[];
    shared: boolean;
    shareScreenStarted: boolean;
    adminNameStream?: string;
    screenShareNameStream?: string;
    updateMainWindow: boolean;
    sortAudioLoudness: boolean;
    lastReorderTime: number;
    newLimitedStreams: (TParticipant | TStream)[];
    newLimitedStreamsIDs: string[];
    oldSoundIds: string[];
    updateUpdateMainWindow: BooleanUpdater;
    updateSortAudioLoudness: BooleanUpdater;
    updateLastReorderTime: NumberUpdater;
    updateNewLimitedStreams: (streams: (TParticipant | TStream)[]) => void;
    updateNewLimitedStreamsIDs: StringListUpdater;
    updateOldSoundIds: StringListUpdater;
    onScreenChanges: OnScreenChangesInvoker;
    reorderStreams: ReorderStreamsInvoker;
    changeVids: ChangeVidsInvoker_2;
    getUpdatedAllParams: () => ReUpdateInterParameters<TStream, TParticipant>;
    [key: string]: any;
}

declare interface ReUpdateInterParticipantLike {
    name: string;
    videoID?: string | null;
    muted?: boolean | null;
}

declare interface ReUpdateInterStreamLike {
    producerId?: string | null;
}

export declare type ReUpdateInterType = <TParameters extends ReUpdateInterParameters<any, any> = ReUpdateInterParameters>(options: ReUpdateInterOptions<TParameters>) => Promise<void>;

/**
 * Applies room-level recording capability limits and toggles to UI state.
 *
 * @param {RoomRecordParamsOptions} options - Recording capability payload and setters.
 * @returns {Promise<void>} Resolves after all setters are applied.
 *
 * @example
 * ```typescript
 * await roomRecordParams({
 *   recordParams,
 *   parameters: recordingSetters,
 * });
 * ```
 */
export declare const roomRecordParams: ({ recordParams, parameters, }: RoomRecordParamsOptions) => Promise<void>;

export declare interface RoomRecordParamsOptions {
    recordParams: RecordParams;
    parameters: RoomRecordParamsParameters;
}

export declare interface RoomRecordParamsParameters {
    updateRecordingAudioPausesLimit: (value: number) => void;
    updateRecordingAudioPausesCount: (value: number) => void;
    updateRecordingAudioSupport: (value: boolean) => void;
    updateRecordingAudioPeopleLimit: (value: number) => void;
    updateRecordingAudioParticipantsTimeLimit: (value: number) => void;
    updateRecordingVideoPausesCount: (value: number) => void;
    updateRecordingVideoPausesLimit: (value: number) => void;
    updateRecordingVideoSupport: (value: boolean) => void;
    updateRecordingVideoPeopleLimit: (value: number) => void;
    updateRecordingVideoParticipantsTimeLimit: (value: number) => void;
    updateRecordingAllParticipantsSupport: (value: boolean) => void;
    updateRecordingVideoParticipantsSupport: (value: boolean) => void;
    updateRecordingAllParticipantsFullRoomSupport: (value: boolean) => void;
    updateRecordingVideoParticipantsFullRoomSupport: (value: boolean) => void;
    updateRecordingPreferredOrientation: (value: string) => void;
    updateRecordingSupportForOtherOrientation: (value: boolean) => void;
    updateRecordingMultiFormatsSupport: (value: boolean) => void;
    [key: string]: any;
}

export declare type RoomRecordParamsType = (options: RoomRecordParamsOptions) => Promise<void>;

export declare class RTCView {
    render(): null;
}

export declare interface SafeRoomNoticeData {
    state: string;
}

export declare const screenFrameRate = 30;

export declare const screenParams: ScreenParamsType;

export declare type ScreenParamsType = {
    encodings: RtpEncodingParameters[];
    codecOptions?: ProducerCodecOptions;
};

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
export declare const screenProducerId: ({ producerId, screenId, membersReceived, participants, updateScreenId, updateShareScreenStarted, updateDeferScreenReceived, }: ScreenProducerIdOptions) => void;

export declare interface ScreenProducerIdData {
    producerId: string;
}

export declare interface ScreenProducerIdOptions {
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

export declare type ScreenProducerIdType = (options: ScreenProducerIdOptions) => void;

export declare interface ScreenShareHostCardPlan {
    key: string;
    name: string;
    remoteProducerId: string;
    videoStream: any;
    forceFullDisplay: boolean;
    doMirror: false;
    state: MainScreenState;
}

export declare interface ScreenState {
    mainScreenPerson?: string;
    mainScreenProducerId?: string;
    mainScreenFilled: boolean;
    adminOnMainScreen: boolean;
}

export declare const sdCons: {
    width: {
        ideal: number;
    };
    height: {
        ideal: number;
    };
};

export declare const sdConsNeu: {
    width: {
        ideal: number;
    };
    height: {
        ideal: number;
    };
};

export declare const sdConsPort: {
    width: {
        ideal: number;
    };
    height: {
        ideal: number;
    };
};

export declare const sdFrameRate = 10;

export declare type SeedData = {
    member?: string;
    host?: string;
    eventType?: EventType;
    participants?: Participant[];
    messages?: Message[];
    polls?: Poll[];
    breakoutRooms?: BreakoutParticipant[][];
    requests?: Request_2[];
    waitingList?: WaitingRoomParticipant[];
    whiteboardUsers?: WhiteboardUser[];
};

/**
 * Sends a message to the server.
 *
 * @param {SendMessageOptions} options - The options for sending a message.
 * @param {string} options.message - The message content to be sent.
 * @param {string[]} options.receivers - The list of receivers for the message.
 * @param {boolean} options.group - Indicates if the message is for a group.
 * @param {number} options.messagesLength - The current number of messages.
 * @param {string} options.member - The member sending the message.
 * @param {string} options.sender - The sender of the message.
 * @param {string} options.islevel - The level of the sender (e.g., "2" for admin).
 * @param {EventType} [options.eventType] - The type of event (e.g., "broadcast", "chat", "conference").
 * @param {ShowAlert} [options.showAlert] - Function to show alerts to the user.
 * @param {CoHostResponsibility[]} options.coHostResponsibility - Array of co-host responsibilities.
 * @param {string} options.coHost - The co-host member name.
 * @param {string} options.roomName - The name of the room.
 * @param {Socket} options.socket - The socket instance for communication.
 * @param {string} options.chatSetting - The chat setting for the event room.
 * @returns {Promise<void>} A promise that resolves when the message is sent.
 *
 * @throws Will show an alert if the message count exceeds the limit, if the message is invalid, or if the user is not allowed to send a message.
 *
 * @example
 * ```typescript
 * await sendMessage({
 *   message: "Hello, World!",
 *   receivers: ["user1", "user2"],
 *   group: true,
 *   messagesLength: 50,
 *   member: "user3",
 *   sender: "user3",
 *   islevel: "2",
 *   eventType: "chat",
 *   showAlert: ({ message, type }) => console.log(message, type),
 *   coHostResponsibility: [{ name: "chat", value: true }],
 *   coHost: "coHostUser",
 *   roomName: "mainRoom",
 *   socket: socketInstance,
 *   chatSetting: "allow",
 * });
 * ```
 */
export declare const sendMessage: ({ message, receivers, group, messagesLength, member, sender, islevel, showAlert, coHostResponsibility, coHost, roomName, socket, chatSetting, }: SendMessageOptions) => Promise<void>;

export declare interface SendMessageOptions {
    message: string;
    receivers: string[];
    group: boolean;
    messagesLength: number;
    member: string;
    sender: string;
    islevel: string;
    eventType?: EventType;
    showAlert?: ShowAlert;
    coHostResponsibility: CoHostResponsibility[];
    coHost: string;
    roomName: string;
    socket: Socket;
    chatSetting: string;
}

export declare type SendMessageType = (options: SendMessageOptions) => Promise<void>;

export declare type Settings = [string, string, string, string];

export declare type Shape = Shapes;

export declare interface ShapePayload {
    type: string;
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    color: string;
    thickness: number;
    lineType: string;
    [key: string]: any;
}

export declare interface Shapes {
    action: string;
    payload: ShapePayload;
}

export declare type ShowAlert = (options: {
    message: string;
    type: 'success' | 'danger' | 'info';
    duration?: number;
}) => void;

/**
 * Signals the creation of a new consumer transport.
 *
 * @param {SignalNewConsumerTransportOptions} options - The options for signaling a new consumer transport.
 * @param {string} options.remoteProducerId - The ID of the remote producer.
 * @param {string} options.islevel - Indicates the level of the consumer.
 * @param {Socket} options.nsock - The socket instance for communication.
 * @param {SignalNewConsumerTransportParameters} options.parameters - The parameters for the transport.
 *
 * @returns {Promise<string[] | void>} A promise that resolves to an array of consuming transports or void.
 *
 * @throws Will throw an error if the signaling process fails.
 *
 * @example
 * const options = {
 *   remoteProducerId: 'producer-id',
 *   islevel: '1',
 *   nsock: socketInstance,
 *   parameters: {
 *     device: mediaDevice,
 *     consumingTransports: [],
 *     lock_screen: false,
 *     updateConsumingTransports: updateFunction,
 *     connectRecvTransport: connectFunction,
 *     reorderStreams: reorderFunction,
 *     getUpdatedAllParams: getUpdatedParamsFunction,
 *   },
 * };
 *
 * signalNewConsumerTransport(options)
 *   .then(consumingTransports => {
 *     console.log('Consuming Transports:', consumingTransports);
 *   })
 *   .catch(error => {
 *     console.error('Error signaling new consumer transport:', error);
 *   });
 */
export declare const signalNewConsumerTransport: ({ remoteProducerId, islevel, nsock, parameters, }: SignalNewConsumerTransportOptions) => Promise<string[] | void>;

export declare interface SignalNewConsumerTransportOptions {
    remoteProducerId: string;
    islevel: string;
    nsock: Socket;
    parameters: SignalNewConsumerTransportParameters;
}

export declare interface SignalNewConsumerTransportParameters extends ReorderStreamsParameters, ConnectRecvTransportParameters {
    device: Device | null;
    consumingTransports: string[];
    lock_screen: boolean;
    updateConsumingTransports: (transports: string[]) => void;
    connectRecvTransport: ConnectRecvTransportType;
    reorderStreams: ReorderStreamsType;
    getUpdatedAllParams: () => SignalNewConsumerTransportParameters;
    [key: string]: any;
}

export declare type SignalNewConsumerTransportType = (options: SignalNewConsumerTransportOptions) => Promise<string[] | void>;

/**
 * Delays execution for a specified number of milliseconds.
 *
 * This helper is used throughout MediaSFU to wait for short transport or media
 * lifecycle transitions before continuing work.
 *
 * @param options Delay configuration.
 * @returns A promise that resolves after the requested delay.
 *
 * @example
 * ```typescript
 * await sleep({ ms: 500 });
 * // Continue after a half-second pause.
 * ```
 */
export declare function sleep({ ms }: SleepOptions): Promise<void>;

export declare interface SleepOptions {
    ms: number;
}

export declare type SleepType = (options: SleepOptions) => Promise<void>;

declare interface SocketLike {
    emit: (event: string, payload: {
        serverConsumerId: string;
    }, callback?: ((payload?: {
        resumed: boolean;
    }) => void | Promise<unknown>)) => void;
}

declare interface SocketLike_2 {
    emit: (event: string, payload: {
        serverConsumerId: string;
    }, callback?: ((payload?: {
        resumed: boolean;
    }) => void | Promise<unknown>)) => void;
}

declare interface SocketLike_3 {
    emit: (event: string, payload: {
        serverConsumerId: string;
    }, callback?: ((payload: {
        resumed: boolean;
    }) => void | Promise<unknown>)) => void;
}

export declare interface SocketVoiceResponse {
    provider: string;
    language: string;
    voices: {
        male: VoiceOption[];
        female: VoiceOption[];
    };
    providers?: Record<string, unknown>;
    error?: string;
}

/**
 * Attempts to play a remote sound asset when the runtime supports browser audio playback.
 *
 * @param {SoundPlayerOptions} options - The sound asset URL to play.
 * @returns {void | Promise<void>} Completes after playback attempt starts/completes or is skipped.
 *
 * @example
 * ```typescript
 * await SoundPlayer({
 *   soundUrl: 'https://www.mediasfu.com/sounds/record-progress.mp3',
 * });
 * ```
 */
export declare const SoundPlayer: ({ soundUrl }: SoundPlayerOptions) => Promise<void>;

export declare interface SoundPlayerOptions {
    soundUrl: string;
}

export declare type SoundPlayerType = (options: SoundPlayerOptions) => void | Promise<void>;

declare interface SpeakerTranslationState {
    speakerId: string;
    speakerName: string;
    inputLanguage: string;
    outputLanguage: string;
    originalProducerId: string;
    enabled: boolean;
}

/**
 * Starts a one-second meeting progress timer and updates a formatted elapsed-time string.
 *
 * The timer automatically stops when the current runtime parameters indicate the
 * meeting is no longer validated or no room is active.
 *
 * @param options Timer start options.
 *
 * @example
 * ```typescript
 * startMeetingProgressTimer({
 *   startTime: Math.floor(Date.now() / 1000),
 *   parameters: {
 *     validated: true,
 *     roomName: 'room123',
 *     updateMeetingProgressTime: setMeetingTime,
 *     getUpdatedAllParams: () => currentParams,
 *   },
 * });
 * ```
 */
export declare function startMeetingProgressTimer({ startTime, parameters, }: StartMeetingProgressTimerOptions): void;

export declare interface StartMeetingProgressTimerOptions {
    startTime: number;
    parameters: StartMeetingProgressTimerParameters;
}

export declare interface StartMeetingProgressTimerParameters {
    updateMeetingProgressTime: (formattedTime: string) => void;
    validated: boolean;
    roomName: string;
    getUpdatedAllParams: () => StartMeetingProgressTimerParameters;
    [key: string]: any;
}

export declare type StartMeetingProgressTimerType = (options: StartMeetingProgressTimerOptions) => void;

/**
 * Starts the recording process based on the provided parameters.
 *
 * @param {StartRecordingOptions} options - The options for starting the recording.
 * @param {object} options.parameters - The parameters required for starting the recording.
 * @param {string} options.parameters.roomName - The name of the room where recording is to be started.
 * @param {object} options.parameters.userRecordingParams - User-specific recording parameters.
 * @param {object} options.parameters.socket - The socket instance for communication.
 * @param {object} options.parameters.localSocket - The local socket instance for communication.
 * @param {function} options.parameters.updateIsRecordingModalVisible - Function to update the visibility of the recording modal.
 * @param {boolean} options.parameters.confirmedToRecord - Flag indicating if the user has confirmed to record.
 * @param {function} options.parameters.showAlert - Function to show alerts.
 * @param {string} options.parameters.recordingMediaOptions - The media options for recording (e.g., "video", "audio").
 * @param {boolean} options.parameters.videoAlreadyOn - Flag indicating if the video is already on.
 * @param {boolean} options.parameters.audioAlreadyOn - Flag indicating if the audio is already on.
 * @param {boolean} options.parameters.recordStarted - Flag indicating if the recording has started.
 * @param {boolean} options.parameters.recordPaused - Flag indicating if the recording is paused.
 * @param {boolean} options.parameters.recordResumed - Flag indicating if the recording is resumed.
 * @param {boolean} options.parameters.recordStopped - Flag indicating if the recording is stopped.
 * @param {boolean} options.parameters.startReport - Flag indicating if the start report is active.
 * @param {boolean} options.parameters.endReport - Flag indicating if the end report is active.
 * @param {boolean} options.parameters.canRecord - Flag indicating if recording is allowed.
 * @param {function} options.parameters.updateClearedToRecord - Function to update the cleared to record status.
 * @param {function} options.parameters.updateRecordStarted - Function to update the record started status.
 * @param {function} options.parameters.updateRecordPaused - Function to update the record paused status.
 * @param {function} options.parameters.updateRecordResumed - Function to update the record resumed status.
 * @param {function} options.parameters.updateStartReport - Function to update the start report status.
 * @param {function} options.parameters.updateEndReport - Function to update the end report status.
 * @param {function} options.parameters.updateCanRecord - Function to update the can record status.
 * @param {boolean} options.parameters.whiteboardStarted - Flag indicating if the whiteboard has started.
 * @param {boolean} options.parameters.whiteboardEnded - Flag indicating if the whiteboard has ended.
 * @param {function} options.parameters.rePort - Function to report the recording status.
 * @param {function} options.parameters.captureCanvasStream - Function to capture the canvas stream.
 *
 * @returns {Promise<boolean | undefined>} - A promise that resolves to a boolean indicating if the recording attempt was successful, or undefined if not applicable.
 *
 * @example
 * ```typescript
 * startRecording({
 *   parameters: {
 *     roomName: "Room101",
 *     userRecordingParams: myUserRecordingParams,
 *     socket: mySocket,
 *     localSocket: myLocalSocket,
 *     updateIsRecordingModalVisible: setIsRecordingModalVisible,
 *     confirmedToRecord: true,
 *     showAlert: myShowAlert,
 *     recordingMediaOptions: "video",
 *     videoAlreadyOn: true,
 *     audioAlreadyOn: true,
 *     recordStarted: false,
 *     recordPaused: false,
 *     recordResumed: false,
 *     recordStopped: false,
 *     startReport: false,
 *     endReport: false,
 *     canRecord: true,
 *     updateClearedToRecord: setClearedToRecord,
 *     updateRecordStarted: setRecordStarted,
 *     updateRecordPaused: setRecordPaused,
 *     updateRecordResumed: setRecordResumed,
 *     updateStartReport: setStartReport,
 *     updateEndReport: setEndReport,
 *     updateCanRecord: setCanRecord,
 *     whiteboardStarted: true,
 *     whiteboardEnded: false,
 *     rePort: myRePort,
 *     captureCanvasStream: myCaptureCanvasStream,
 *   },
 * })
 * ```
 */
export declare const startRecording: StartRecordingType;

export declare type StartRecordingCaptureCanvasStream = (options: {
    parameters: any;
    start?: boolean;
}) => Promise<void>;

export declare interface StartRecordingOptions {
    parameters: StartRecordingParameters;
}

export declare interface StartRecordingParameters extends RecordStartTimerParameters, RecordResumeTimerParameters {
    roomName: string;
    userRecordingParams: UserRecordingParams;
    socket: Socket;
    localSocket?: Socket;
    updateIsRecordingModalVisible: (visible: boolean) => void;
    confirmedToRecord: boolean;
    showAlert?: ShowAlert;
    recordingMediaOptions: string;
    videoAlreadyOn: boolean;
    audioAlreadyOn: boolean;
    recordStarted: boolean;
    recordPaused: boolean;
    recordResumed: boolean;
    recordStopped: boolean;
    startReport: boolean;
    endReport: boolean;
    canRecord: boolean;
    updateClearedToRecord: (cleared: boolean) => void;
    updateRecordStarted: (started: boolean) => void;
    updateRecordPaused: (paused: boolean) => void;
    updateRecordResumed: (resumed: boolean) => void;
    updateStartReport: (started: boolean) => void;
    updateEndReport: (ended: boolean) => void;
    updateCanRecord: (canRecord: boolean) => void;
    whiteboardStarted: boolean;
    whiteboardEnded: boolean;
    rePort: StartRecordingRePort;
    captureCanvasStream: StartRecordingCaptureCanvasStream;
    getUpdatedAllParams: () => StartRecordingParameters;
    [key: string]: any;
}

export declare type StartRecordingRePort = (options: {
    restart?: boolean;
    parameters: any;
}) => Promise<void>;

export declare type StartRecordingType = (options: StartRecordingOptions) => Promise<boolean | undefined>;

/**
 * Requests recording startup for the current room.
 *
 * @param {StartRecordsOptions} options - Room, member, and socket details.
 * @returns {Promise<void>} Resolves after the emit request is sent.
 *
 * @example
 * ```typescript
 * await startRecords({
 *   roomName: 'RoomA',
 *   member: 'AdminUser',
 *   socket,
 * });
 * ```
 */
export declare const startRecords: ({ roomName, member, socket, }: StartRecordsOptions) => Promise<void>;

export declare interface StartRecordsOptions {
    roomName: string;
    member: string;
    socket: StartRecordsSocketLike;
}

export declare interface StartRecordsSocketLike {
    emit: (event: string, payload: {
        roomName: string;
        member: string;
    }, callback?: (response: {
        success: boolean;
    }) => void) => void;
}

export declare type StartRecordsType = (options: StartRecordsOptions) => Promise<void>;

/**
 * Starts the screen sharing process.
 *
 * @param {StartShareScreenOptions} options - The options for starting screen sharing.
 * @param {Object} options.parameters - The parameters for screen sharing.
 * @param {boolean} options.parameters.shared - Indicates if the screen is currently being shared.
 * @param {Function} options.parameters.showAlert - Function to show alert messages.
 * @param {Function} options.parameters.updateShared - Function to update the shared state.
 * @param {MediaDevices} options.parameters.mediaDevices - The media devices available for screen sharing.
 * @param {boolean} options.parameters.onWeb - Indicates if the application is running on a web platform.
 * @param {number} [options.parameters.targetWidth] - The target width for screen sharing.
 * @param {number} [options.parameters.targetHeight] - The target height for screen sharing.
 * @param {Function} options.parameters.streamSuccessScreen - Function to handle successful screen sharing.
 *
 * @returns {Promise<void>} A promise that resolves when the screen sharing process is complete.
 *
 * @throws Will log an error message if there is an issue starting the screen share.
 *
 * @example
 * const options = {
 *   parameters: {
 *     shared: false,
 *     showAlert: showAlertFunction,
 *     updateShared: updateSharedFunction,
 *     mediaDevices: navigator.mediaDevices,
 *     onWeb: true,
 *     targetWidth: 1280,
 *     targetHeight: 720,
 *     streamSuccessScreen: streamSuccessFunction,
 *   },
 * };
 *
 * startShareScreen(options)
 *   .then(() => {
 *     console.log('Screen sharing started successfully');
 *   })
 *   .catch(error => {
 *     console.error('Error starting screen share:', error);
 *   });
 */
export declare function startShareScreen({ parameters }: StartShareScreenOptions): Promise<void>;

export declare interface StartShareScreenOptions {
    parameters: StartShareScreenParameters;
}

export declare interface StartShareScreenParameters extends StreamSuccessScreenParameters {
    shared: boolean;
    showAlert?: ShowAlert;
    updateShared: (shared: boolean) => void;
    mediaDevices: MediaDevices;
    onWeb: boolean;
    targetWidth?: number;
    targetHeight?: number;
    streamSuccessScreen: StreamSuccessScreenType;
    [key: string]: any;
}

export declare type StartShareScreenType = (options: StartShareScreenOptions) => Promise<void>;

export declare const stopConsumingTranslation: (options: StopConsumingTranslationOptions) => Promise<string | null>;

export declare interface StopConsumingTranslationOptions {
    speakerId?: string;
    language: string;
    translationProducerMap: Record<string, Record<string, string>>;
    parameters: TranslationConsumerSwitchParameters;
}

export declare type StopConsumingTranslationType = (options: StopConsumingTranslationOptions) => Promise<string | null>;

/**
 * Shows a reasoned alert when the backend reports that recording has stopped.
 *
 * @param {StoppedRecordingOptions} options - Recording stop state and alert helper.
 * @returns {Promise<void>} Resolves after the alert is dispatched.
 *
 * @example
 * ```typescript
 * await stoppedRecording({
 *   state: 'stop',
 *   reason: 'The session ended',
 *   showAlert,
 * });
 * ```
 */
export declare const stoppedRecording: ({ state, reason, showAlert, }: StoppedRecordingOptions) => Promise<void>;

export declare interface StoppedRecordingData {
    state: string;
    reason?: string;
}

export declare interface StoppedRecordingOptions {
    state: string;
    reason: string;
    showAlert?: ShowAlert;
}

export declare type StoppedRecordingType = (options: StoppedRecordingOptions) => Promise<void>;

/**
 * Stops the recording process if it has been started and not yet stopped.
 */
export declare const stopRecording: StopRecordingType;

export declare interface StopRecordingOptions {
    parameters: StopRecordingParameters;
}

export declare interface StopRecordingParameters {
    roomName: string;
    socket: Socket;
    localSocket?: Socket;
    showAlert?: ShowAlert;
    startReport: boolean;
    endReport: boolean;
    recordStarted: boolean;
    recordPaused: boolean;
    recordStopped: boolean;
    updateRecordPaused: (paused: boolean) => void;
    updateRecordStopped: (stopped: boolean) => void;
    updateStartReport: (startReport: boolean) => void;
    updateEndReport: (endReport: boolean) => void;
    updateShowRecordButtons: (show: boolean) => void;
    whiteboardStarted: boolean;
    whiteboardEnded: boolean;
    recordingMediaOptions: string;
    captureCanvasStream: (options: {
        parameters: any;
        start?: boolean;
    }) => void;
    getUpdatedAllParams: () => StopRecordingParameters;
    [key: string]: any;
}

export declare type StopRecordingType = (options: StopRecordingOptions) => Promise<void>;

/**
 * Stops the screen sharing process and updates the relevant parameters and states.
 *
 * @param {StopShareScreenOptions} options - The options for stopping the screen share.
 * @param {Object} options.parameters - The parameters required for stopping the screen share.
 * @param {Function} options.parameters.getUpdatedAllParams - Function to get updated parameters.
 * @param {boolean} options.parameters.shared - Indicates if the screen is currently shared.
 * @param {boolean} options.parameters.shareScreenStarted - Indicates if the screen sharing has started.
 * @param {boolean} options.parameters.shareEnded - Indicates if the screen sharing has ended.
 * @param {boolean} options.parameters.updateMainWindow - Indicates if the main window needs to be updated.
 * @param {boolean} options.parameters.defer_receive - Indicates if receiving is deferred.
 * @param {string} options.parameters.hostLabel - The label of the host.
 * @param {boolean} options.parameters.lock_screen - Indicates if the screen is locked.
 * @param {boolean} options.parameters.forceFullDisplay - Indicates if full display is forced.
 * @param {boolean} options.parameters.firstAll - Indicates if it is the first all.
 * @param {boolean} options.parameters.first_round - Indicates if it is the first round.
 * @param {MediaStream} options.parameters.localStreamScreen - The local screen stream.
 * @param {string} options.parameters.eventType - The type of event.
 * @param {boolean} options.parameters.prevForceFullDisplay - Indicates if full display was previously forced.
 * @param {boolean} options.parameters.annotateScreenStream - Indicates if the screen stream is annotated.
 * @param {Function} options.parameters.updateShared - Function to update the shared state.
 * @param {Function} options.parameters.updateShareScreenStarted - Function to update the share screen started state.
 * @param {Function} options.parameters.updateShareEnded - Function to update the share ended state.
 * @param {Function} options.parameters.updateUpdateMainWindow - Function to update the main window state.
 * @param {Function} options.parameters.updateDefer_receive - Function to update the defer receive state.
 * @param {Function} options.parameters.updateLock_screen - Function to update the lock screen state.
 * @param {Function} options.parameters.updateForceFullDisplay - Function to update the force full display state.
 * @param {Function} options.parameters.updateFirstAll - Function to update the first all state.
 * @param {Function} options.parameters.updateFirst_round - Function to update the first round state.
 * @param {Function} options.parameters.updateLocalStreamScreen - Function to update the local screen stream.
 * @param {Function} options.parameters.updateMainHeightWidth - Function to update the main height and width.
 * @param {Function} options.parameters.updateAnnotateScreenStream - Function to update the annotate screen stream state.
 * @param {Function} options.parameters.updateIsScreenboardModalVisible - Function to update the screenboard modal visibility.
 * @param {Function} options.parameters.disconnectSendTransportScreen - Function to disconnect the send transport screen.
 * @param {Function} options.parameters.prepopulateUserMedia - Function to prepopulate user media.
 * @param {Function} options.parameters.reorderStreams - Function to reorder streams.
 * @param {Function} options.parameters.getVideos - Function to get videos.
 *
 * @returns {Promise<void>} A promise that resolves when the screen sharing process is stopped.
 *
 * @example
 * const options = {
 *   parameters: {
 *     shared: true,
 *     shareScreenStarted: true,
 *     shareEnded: false,
 *     updateMainWindow: true,
 *     defer_receive: false,
 *     hostLabel: "Host",
 *     lock_screen: false,
 *     forceFullDisplay: false,
 *     firstAll: false,
 *     first_round: false,
 *     localStreamScreen: localStream, // MediaStream object
 *     eventType: "conference",
 *     prevForceFullDisplay: false,
 *     annotateScreenStream: false,
 *     updateShared: updateSharedFunction,
 *     updateShareScreenStarted: updateShareScreenStartedFunction,
 *     updateShareEnded: updateShareEndedFunction,
 *     updateUpdateMainWindow: updateUpdateMainWindowFunction,
 *     updateDefer_receive: updateDefer_receiveFunction,
 *     updateLock_screen: updateLock_screenFunction,
 *     updateForceFullDisplay: updateForceFullDisplayFunction,
 *     updateFirstAll: updateFirstAllFunction,
 *     updateFirst_round: updateFirst_roundFunction,
 *     updateLocalStreamScreen: updateLocalStreamScreenFunction,
 *     updateMainHeightWidth: updateMainHeightWidthFunction,
 *     updateAnnotateScreenStream: updateAnnotateScreenStreamFunction,
 *     updateIsScreenboardModalVisible: updateIsScreenboardModalVisibleFunction,
 *     disconnectSendTransportScreen: disconnectSendTransportScreenFunction,
 *     prepopulateUserMedia: prepopulateUserMediaFunction,
 *     reorderStreams: reorderStreamsFunction,
 *     getVideos: getVideosFunction,
 *   },
 * };
 *
 * stopShareScreen(options)
 *   .then(() => {
 *     console.log('Screen sharing stopped successfully');
 *   })
 *   .catch(error => {
 *     console.error('Error stopping screen share:', error);
 *   });
 */
export declare function stopShareScreen({ parameters }: StopShareScreenOptions): Promise<void>;

export declare interface StopShareScreenOptions {
    parameters: StopShareScreenParameters;
}

export declare interface StopShareScreenParameters extends DisconnectSendTransportScreenParameters, PrepopulateUserMediaParameters, ReorderStreamsParameters {
    shared: boolean;
    shareScreenStarted: boolean;
    shareEnded: boolean;
    updateMainWindow: boolean;
    defer_receive: boolean;
    hostLabel: string;
    lock_screen: boolean;
    forceFullDisplay: boolean;
    firstAll: boolean;
    first_round: boolean;
    localStreamScreen: MediaStream | null;
    eventType: EventType;
    prevForceFullDisplay: boolean;
    annotateScreenStream: boolean;
    updateShared: (shared: boolean) => void;
    updateShareScreenStarted: (shareScreenStarted: boolean) => void;
    updateShareEnded: (shareEnded: boolean) => void;
    updateUpdateMainWindow: (updateMainWindow: boolean) => void;
    updateDefer_receive: (defer_receive: boolean) => void;
    updateLock_screen: (lock_screen: boolean) => void;
    updateForceFullDisplay: (forceFullDisplay: boolean) => void;
    updateFirstAll: (firstAll: boolean) => void;
    updateFirst_round: (first_round: boolean) => void;
    updateLocalStreamScreen: (localStreamScreen: MediaStream | null) => void;
    updateMainHeightWidth: (mainHeightWidth: number) => void;
    updateAnnotateScreenStream: (annotateScreenStream: boolean) => void;
    updateIsScreenboardModalVisible: (isVisible: boolean) => void;
    disconnectSendTransportScreen: DisconnectSendTransportScreenType;
    prepopulateUserMedia: PrepopulateUserMediaType;
    reorderStreams: ReorderStreamsType;
    getVideos: GetVideosType;
    getUpdatedAllParams: () => StopShareScreenParameters;
    [key: string]: any;
}

export declare type StopShareScreenType = (options: StopShareScreenOptions) => Promise<void>;

export declare interface Stream {
    producerId: string;
    muted?: boolean;
    stream?: MediaStream;
    socket_?: Socket;
    name?: string;
    [key: string]: any;
}

declare type StreamCollectionUpdater<TEntry> = {
    bivarianceHack: (streams: TEntry[]) => void;
}["bivarianceHack"];

declare type StreamCollectionUpdater_2<TEntry> = {
    bivarianceHack: (streams: TEntry[]) => void;
}["bivarianceHack"];

/**
 * Handles the successful streaming of audio by setting up the necessary transports and updating the relevant states.
 *
 * @param {StreamSuccessAudioOptions} options - The options for streaming success audio.
 * @param {MediaStream} options.stream - The media stream containing the audio track.
 * @param {Object} options.parameters - The parameters required for setting up the audio stream.
 * @param {Socket} options.parameters.socket - The socket connection for communication.
 * @param {Array<Participant>} options.parameters.participants - The list of participants.
 * @param {MediaStream | null} options.parameters.localStream - The local media stream.
 * @param {boolean} options.parameters.transportCreated - Flag indicating if the transport is created.
 * @param {boolean} options.parameters.transportCreatedAudio - Flag indicating if the audio transport is created.
 * @param {boolean} options.parameters.audioAlreadyOn - Flag indicating if the audio is already on.
 * @param {boolean} options.parameters.micAction - Flag indicating the microphone action.
 * @param {ProducerOptions} options.parameters.audioParams - The audio parameters.
 * @param {MediaStream | null} options.parameters.localStreamAudio - The local audio stream.
 * @param {string} options.parameters.defAudioID - The default audio device ID.
 * @param {string} options.parameters.userDefaultAudioInputDevice - The user default audio input device.
 * @param {ProducerOptions} options.parameters.params - Additional parameters.
 * @param {ProducerOptions} options.parameters.audioParamse - Additional audio parameters.
 * @param {ProducerOptions} options.parameters.aParams - Additional parameters for audio.
 * @param {string} options.parameters.hostLabel - The label of the host.
 * @param {string} options.parameters.islevel - The level of the user.
 * @param {string} options.parameters.member - The member name.
 * @param {boolean} options.parameters.updateMainWindow - Flag indicating if the main window should be updated.
 * @param {boolean} options.parameters.lock_screen - Flag indicating if the screen is locked.
 * @param {boolean} options.parameters.shared - Flag indicating if the screen is shared.
 * @param {boolean} options.parameters.videoAlreadyOn - Flag indicating if the video is already on.
 * @param {Function} options.parameters.showAlert - Function to show alert messages.
 * @param {Function} options.parameters.updateParticipants - Function to update participants.
 * @param {Function} options.parameters.updateTransportCreated - Function to update transport created flag.
 * @param {Function} options.parameters.updateTransportCreatedAudio - Function to update audio transport created flag.
 * @param {Function} options.parameters.updateAudioAlreadyOn - Function to update audio already on flag.
 * @param {Function} options.parameters.updateMicAction - Function to update microphone action flag.
 * @param {Function} options.parameters.updateAudioParams - Function to update audio parameters.
 * @param {Function} options.parameters.updateLocalStream - Function to update local stream.
 * @param {Function} options.parameters.updateLocalStreamAudio - Function to update local audio stream.
 * @param {Function} options.parameters.updateDefAudioID - Function to update default audio device ID.
 * @param {Function} options.parameters.updateUserDefaultAudioInputDevice - Function to update user default audio input device.
 * @param {Function} options.parameters.updateUpdateMainWindow - Function to update main window flag.
 * @param {Function} options.parameters.createSendTransport - Function to create send transport.
 * @param {Function} options.parameters.connectSendTransportAudio - Function to connect send transport audio.
 * @param {Function} options.parameters.resumeSendTransportAudio - Function to resume send transport audio.
 * @param {Function} options.parameters.prepopulateUserMedia - Function to prepopulate user media.
 *
 * @returns {Promise<void>} A promise that resolves when the audio streaming setup is complete.
 *
 * @example
 * const options = {
 *   stream: localStream, // MediaStream object containing the audio track
 *   parameters: {
 *     socket: socketInstance,
 *     participants: participantList,
 *     localStream: null,
 *     transportCreated: false,
 *     transportCreatedAudio: false,
 *     audioAlreadyOn: false,
 *     micAction: false,
 *     audioParams: {},
 *     localStreamAudio: null,
 *     defAudioID: "",
 *     userDefaultAudioInputDevice: "",
 *     params: {},
 *     audioParamse: {},
 *     aParams: {},
 *     hostLabel: "Host",
 *     islevel: "1",
 *     member: "user1",
 *     updateMainWindow: true,
 *     lock_screen: false,
 *     shared: false,
 *     videoAlreadyOn: false,
 *     showAlert: alertFunction,
 *     updateParticipants: updateParticipantsFunction,
 *     updateTransportCreated: updateTransportCreatedFunction,
 *     updateTransportCreatedAudio: updateTransportCreatedAudioFunction,
 *     updateAudioAlreadyOn: updateAudioAlreadyOnFunction,
 *     updateMicAction: updateMicActionFunction,
 *     updateAudioParams: updateAudioParamsFunction,
 *     updateLocalStream: updateLocalStreamFunction,
 *     updateLocalStreamAudio: updateLocalStreamAudioFunction,
 *     updateDefAudioID: updateDefAudioIDFunction,
 *     updateUserDefaultAudioInputDevice: updateUserDefaultAudioInputDeviceFunction,
 *     updateUpdateMainWindow: updateUpdateMainWindowFunction,
 *     createSendTransport: createSendTransportFunction,
 *     connectSendTransportAudio: connectSendTransportAudioFunction,
 *     resumeSendTransportAudio: resumeSendTransportAudioFunction,
 *     prepopulateUserMedia: prepopulateUserMediaFunction,
 *   },
 * };
 *
 * streamSuccessAudio(options)
 *   .then(() => {
 *     console.log('Audio streaming setup successfully');
 *   })
 *   .catch(error => {
 *     console.error('Error setting up audio streaming:', error);
 *   });
 */
export declare const streamSuccessAudio: ({ stream, parameters, }: StreamSuccessAudioOptions) => Promise<void>;

export declare interface StreamSuccessAudioOptions {
    stream: MediaStream;
    parameters: StreamSuccessAudioParameters;
}

export declare interface StreamSuccessAudioParameters extends CreateSendTransportParameters, ConnectSendTransportAudioParameters, ResumeSendTransportAudioParameters, PrepopulateUserMediaParameters {
    socket: Socket;
    participants: Participant[];
    localStream: MediaStream | null;
    transportCreated: boolean;
    transportCreatedAudio: boolean;
    audioAlreadyOn: boolean;
    micAction: boolean;
    audioParams: ProducerOptions;
    localStreamAudio: MediaStream | null;
    defAudioID: string;
    userDefaultAudioInputDevice: string;
    params: ProducerOptions;
    audioParamse?: ProducerOptions;
    aParams: ProducerOptions;
    hostLabel: string;
    islevel: string;
    member: string;
    updateMainWindow: boolean;
    lock_screen: boolean;
    shared: boolean;
    videoAlreadyOn: boolean;
    showAlert?: ShowAlert;
    updateParticipants: (participants: Participant[]) => void;
    updateTransportCreated: (transportCreated: boolean) => void;
    updateTransportCreatedAudio: (transportCreatedAudio: boolean) => void;
    updateAudioAlreadyOn: (audioAlreadyOn: boolean) => void;
    updateMicAction: (micAction: boolean) => void;
    updateAudioParams: (audioParams: ProducerOptions) => void;
    updateLocalStream: (localStream: MediaStream | null) => void;
    updateLocalStreamAudio: (localStreamAudio: MediaStream | null) => void;
    updateDefAudioID: (defAudioID: string) => void;
    updateUserDefaultAudioInputDevice: (userDefaultAudioInputDevice: string) => void;
    updateUpdateMainWindow: (updateMainWindow: boolean) => void;
    createSendTransport: CreateSendTransportType;
    connectSendTransportAudio: ConnectSendTransportAudioType;
    resumeSendTransportAudio: ResumeSendTransportAudioType;
    prepopulateUserMedia: PrepopulateUserMediaType;
    getUpdatedAllParams: () => StreamSuccessAudioParameters;
    [key: string]: any;
}

/**
 * Handles the switching of the audio stream upon successful stream connection.
 *
 * @param {StreamSuccessAudioSwitchOptions} options - The options for the audio stream success switch.
 * @param {MediaStream} options.stream - The new media stream containing the audio track.
 * @param {Object} options.parameters - The parameters required for setting up the audio stream.
 * @param {Producer} options.parameters.audioProducer - The current audio producer.
 * @param {Producer} options.parameters.localAudioProducer - The local audio producer.
 * @param {Socket} options.parameters.socket - The socket connection for communication.
 * @param {Socket} options.parameters.localSocket - The local socket connection for communication.
 * @param {string} options.parameters.roomName - The name of the room.
 * @param {MediaStream | null} options.parameters.localStream - The local media stream.
 * @param {MediaStream | null} options.parameters.localStreamAudio - The local audio stream.
 * @param {ProducerOptions} options.parameters.audioParams - The audio parameters.
 * @param {boolean} options.parameters.audioPaused - Indicates if the audio is paused.
 * @param {boolean} options.parameters.audioAlreadyOn - Indicates if the audio is already on.
 * @param {boolean} options.parameters.transportCreated - Indicates if the transport is created.
 * @param {ProducerCodecOptions} options.parameters.audioParamse - Additional audio parameters.
 * @param {string} options.parameters.defAudioID - The default audio device ID.
 * @param {string} options.parameters.userDefaultAudioInputDevice - The user default audio input device.
 * @param {string} options.parameters.hostLabel - The label of the host.
 * @param {boolean} options.parameters.updateMainWindow - Indicates if the main window should be updated.
 * @param {boolean} options.parameters.videoAlreadyOn - Indicates if the video is already on.
 * @param {string} options.parameters.islevel - The level of the participant.
 * @param {boolean} options.parameters.lock_screen - Indicates if the screen is locked.
 * @param {boolean} options.parameters.shared - Indicates if the screen is shared.
 * @param {Function} options.parameters.updateAudioProducer - Function to update the audio producer.
 * @param {Function} options.parameters.updateLocalAudioProducer - Function to update the local audio producer.
 * @param {Function} options.parameters.updateLocalStream - Function to update the local stream.
 * @param {Function} options.parameters.updateAudioParams - Function to update the audio parameters.
 * @param {Function} options.parameters.updateDefAudioID - Function to update the default audio device ID.
 * @param {Function} options.parameters.updateUserDefaultAudioInputDevice - Function to update the user default audio input device.
 * @param {Function} options.parameters.updateUpdateMainWindow - Function to update the main window.
 * @param {Function} options.parameters.sleep - Function to pause execution for a specified time.
 * @param {Function} options.parameters.prepopulateUserMedia - Function to prepopulate user media.
 * @param {Function} options.parameters.createSendTransport - Function to create a send transport.
 * @param {Function} options.parameters.connectSendTransportAudio - Function to connect the send transport for audio.
 *
 * @returns {Promise<void>} A promise that resolves when the audio stream switch is complete.
 *
 * @example
 * const options = {
 *   stream: newAudioStream, // MediaStream object containing the new audio track
 *   parameters: {
 *     audioProducer: currentAudioProducer,
 *     localAudioProducer: localAudioProducerInstance,
 *     localSocket: localSocketInstance,
 *     socket: socketInstance,
 *     roomName: "Room1",
 *     localStream: null,
 *     localStreamAudio: null,
 *     audioParams: audioProducerOptions,
 *     audioPaused: false,
 *     audioAlreadyOn: true,
 *     transportCreated: false,
 *     audioParamse: additionalAudioParams,
 *     defAudioID: "default-audio-device-id",
 *     userDefaultAudioInputDevice: "user-input-device-id",
 *     hostLabel: "Host",
 *     islevel: "1",
 *     videoAlreadyOn: false,
 *     lock_screen: false,
 *     shared: false,
 *     updateAudioProducer: updateAudioProducerFunction,
 *     updateLocalAudioProducer: updateLocalAudioProducerFunction,
 *     updateLocalStream: updateLocalStreamFunction,
 *     updateAudioParams: updateAudioParamsFunction,
 *     updateDefAudioID: updateDefAudioIDFunction,
 *     updateUserDefaultAudioInputDevice: updateUserDefaultAudioInputDeviceFunction,
 *     updateUpdateMainWindow: updateMainWindowFunction,
 *     sleep: sleepFunction,
 *     prepopulateUserMedia: prepopulateUserMediaFunction,
 *     createSendTransport: createSendTransportFunction,
 *     connectSendTransportAudio: connectSendTransportAudioFunction,
 *   },
 * };
 *
 * streamSuccessAudioSwitch(options)
 *   .then(() => {
 *     console.log('Audio stream switched successfully');
 *   })
 *   .catch(error => {
 *     console.error('Error switching audio stream:', error);
 *   });
 */
export declare const streamSuccessAudioSwitch: ({ stream, parameters, }: StreamSuccessAudioSwitchOptions) => Promise<void>;

export declare interface StreamSuccessAudioSwitchOptions {
    stream: MediaStream;
    parameters: StreamSuccessAudioSwitchParameters;
}

export declare interface StreamSuccessAudioSwitchParameters extends PrepopulateUserMediaParameters, CreateSendTransportParameters, ConnectSendTransportAudioParameters {
    audioProducer: Producer | null;
    localAudioProducer?: Producer | null;
    socket: Socket;
    localSocket?: Socket;
    roomName: string;
    localStream: MediaStream | null;
    localStreamAudio: MediaStream | null;
    audioParams: ProducerOptions;
    audioPaused: boolean;
    audioAlreadyOn: boolean;
    transportCreated: boolean;
    localTransportCreated?: boolean;
    audioParamse?: ProducerCodecOptions;
    defAudioID: string;
    userDefaultAudioInputDevice: string;
    hostLabel: string;
    updateMainWindow: boolean;
    videoAlreadyOn: boolean;
    islevel: string;
    lock_screen: boolean;
    shared: boolean;
    updateAudioProducer: (audioProducer: Producer | null) => void;
    updateLocalAudioProducer?: (localAudioProducer: Producer | null) => void;
    updateLocalStream: (localStream: MediaStream | null) => void;
    updateAudioParams: (audioParams: ProducerOptions) => void;
    updateDefAudioID: (defAudioID: string) => void;
    updateUserDefaultAudioInputDevice: (userDefaultAudioInputDevice: string) => void;
    updateUpdateMainWindow: (updateMainWindow: boolean) => void;
    sleep: SleepType;
    prepopulateUserMedia: PrepopulateUserMediaType;
    createSendTransport: CreateSendTransportType;
    connectSendTransportAudio: ConnectSendTransportAudioType;
    getUpdatedAllParams: () => StreamSuccessAudioSwitchParameters;
    [key: string]: any;
}

export declare type StreamSuccessAudioSwitchType = (options: StreamSuccessAudioSwitchOptions) => Promise<void>;

export declare type StreamSuccessAudioType = (options: StreamSuccessAudioOptions) => Promise<void>;

/**
 * Handles the successful initiation of screen sharing.
 *
 * @param {StreamSuccessScreenOptions} options - The options for the screen sharing success handler.
 * @param {MediaStream} options.stream - The media stream to be shared.
 * @param {Object} options.parameters - The parameters required for screen sharing.
 * @param {Socket} options.parameters.socket - The socket instance for communication.
 * @param {boolean} options.parameters.transportCreated - Flag indicating if the transport is already created.
 * @param {MediaStream | null} options.parameters.localStreamScreen - The local screen media stream.
 * @param {boolean} options.parameters.screenAlreadyOn - Flag indicating if the screen is already being shared.
 * @param {boolean} options.parameters.screenAction - Flag indicating if the screen share action is requested.
 * @param {boolean} options.parameters.transportCreatedScreen - Flag indicating if the screen transport is created.
 * @param {string} options.parameters.hostLabel - The label of the host.
 * @param {string} options.parameters.eventType - The type of the event (e.g., conference).
 * @param {Function} options.parameters.showAlert - Function to show alerts.
 * @param {boolean} options.parameters.annotateScreenStream - Flag indicating if screen annotation is enabled.
 * @param {Function} options.parameters.updateTransportCreatedScreen - Function to update the screen transport creation state.
 * @param {Function} options.parameters.updateScreenAlreadyOn - Function to update the screen sharing state.
 * @param {Function} options.parameters.updateScreenAction - Function to update the screen action state.
 * @param {Function} options.parameters.updateTransportCreated - Function to update the transport creation state.
 * @param {Function} options.parameters.updateLocalStreamScreen - Function to update the local screen stream.
 * @param {Function} options.parameters.updateShared - Function to update the shared state.
 * @param {Function} options.parameters.updateIsScreenboardModalVisible - Function to update the screenboard modal visibility.
 * @param {Function} options.parameters.sleep - Function to pause execution for a specified duration.
 * @param {Function} options.parameters.createSendTransport - Function to create a send transport.
 * @param {Function} options.parameters.connectSendTransportScreen - Function to connect the send transport for screen sharing.
 * @param {Function} options.parameters.disconnectSendTransportScreen - Function to disconnect the send transport for screen sharing.
 * @param {Function} options.parameters.stopShareScreen - Function to stop screen sharing.
 * @param {Function} options.parameters.reorderStreams - Function to reorder streams.
 * @param {Function} options.parameters.prepopulateUserMedia - Function to prepopulate user media.
 * @param {Function} options.parameters.rePort - Function to reinitialize ports.
 *
 * @returns {Promise<void>} A promise that resolves when the screen sharing setup is complete.
 *
 * @throws Will throw an error if there is an issue with screen sharing.
 *
 * @example
 * ```typescript
 * await streamSuccessScreen({
 *   stream: mediaStream,
 *   parameters: {
 *     socket,
 *     transportCreated,
 *     localStreamScreen: null,
 *     screenAlreadyOn: false,
 *     screenAction: true,
 *     transportCreatedScreen: false,
 *     hostLabel: "Host",
 *     eventType: "conference",
 *     showAlert,
 *     annotateScreenStream: false,
 *     updateTransportCreatedScreen,
 *     updateScreenAlreadyOn,
 *     updateScreenAction,
 *     updateTransportCreated,
 *     updateLocalStreamScreen,
 *     updateShared,
 *     updateIsScreenboardModalVisible,
 *     sleep,
 *     createSendTransport,
 *     connectSendTransportScreen,
 *     disconnectSendTransportScreen,
 *     stopShareScreen,
 *     reorderStreams,
 *     prepopulateUserMedia,
 *     rePort,
 *   },
 * });
 * ```
 */
export declare const streamSuccessScreen: ({ stream, parameters, }: StreamSuccessScreenOptions) => Promise<void>;

export declare interface StreamSuccessScreenOptions {
    stream: MediaStream;
    parameters: StreamSuccessScreenParameters;
}

export declare interface StreamSuccessScreenParameters extends CreateSendTransportParameters, ConnectSendTransportScreenParameters, DisconnectSendTransportScreenParameters, StopShareScreenParameters, ReorderStreamsParameters, PrepopulateUserMediaParameters, RePortParameters {
    socket: Socket;
    transportCreated: boolean;
    localStreamScreen: MediaStream | null;
    screenAlreadyOn: boolean;
    screenAction: boolean;
    transportCreatedScreen: boolean;
    hostLabel: string;
    eventType: EventType;
    showAlert?: ShowAlert;
    annotateScreenStream: boolean;
    shared: boolean;
    updateTransportCreatedScreen: (transportCreatedScreen: boolean) => void;
    updateScreenAlreadyOn: (screenAlreadyOn: boolean) => void;
    updateScreenAction: (screenAction: boolean) => void;
    updateTransportCreated: (transportCreated: boolean) => void;
    updateLocalStreamScreen: (localStreamScreen: MediaStream | null) => void;
    updateShared: (shared: boolean) => void;
    updateIsScreenboardModalVisible: (isVisible: boolean) => void;
    sleep: SleepType;
    createSendTransport: CreateSendTransportType;
    connectSendTransportScreen: ConnectSendTransportScreenType;
    disconnectSendTransportScreen: DisconnectSendTransportScreenType;
    stopShareScreen: StopShareScreenType;
    reorderStreams: ReorderStreamsType;
    prepopulateUserMedia: PrepopulateUserMediaType;
    rePort: RePortType;
    getUpdatedAllParams: () => StreamSuccessScreenParameters;
    [key: string]: any;
}

export declare type StreamSuccessScreenType = (options: StreamSuccessScreenOptions) => Promise<void>;

/**
 * Handles the successful streaming of video by managing the local stream, updating parameters, and handling video transport.
 *
 * @param {StreamSuccessVideoOptions} options - The options for streaming the video.
 * @param {MediaStream} options.stream - The media stream to be used for the video.
 * @param {Object} options.parameters - The parameters required for streaming the video.
 * @param {Socket} options.parameters.socket - The socket connection for communication.
 * @param {Array<Participant>} options.parameters.participants - The list of participants in the room.
 * @param {MediaStream | null} options.parameters.localStream - The local media stream.
 * @param {MediaStream | null} options.parameters.localStreamVideo - The local video stream.
 * @param {boolean} options.parameters.transportCreated - Indicates if the transport has been created.
 * @param {boolean} options.parameters.transportCreatedVideo - Indicates if the video transport has been created.
 * @param {boolean} options.parameters.videoAlreadyOn - Indicates if the video is already on.
 * @param {boolean} options.parameters.videoAction - Indicates the action state of the video.
 * @param {ProducerOptions} options.parameters.videoParams - The video parameters for the producer.
 * @param {string} options.parameters.defVideoID - The default video device ID.
 * @param {string} options.parameters.userDefaultVideoInputDevice - The user default video input device.
 * @param {string} options.parameters.hostLabel - The label of the host.
 * @param {string} options.parameters.islevel - The level of the participant.
 * @param {string} options.parameters.member - The name of the participant.
 * @param {boolean} options.parameters.updateMainWindow - Indicates if the main window should be updated.
 * @param {boolean} options.parameters.lock_screen - Indicates if the screen is locked.
 * @param {boolean} options.parameters.shared - Indicates if the screen is shared.
 * @param {boolean} options.parameters.shareScreenStarted - Indicates if screen sharing has started.
 * @param {VParamsType} options.parameters.vParams - Video parameters.
 * @param {HParamsType} options.parameters.hParams - Horizontal parameters.
 * @param {boolean} options.parameters.allowed - Indicates if the action is allowed.
 * @param {string} options.parameters.currentFacingMode - The current facing mode of the camera.
 * @param {Device | null} options.parameters.device - The device being used for streaming.
 * @param {boolean} options.parameters.keepBackground - Indicates if the background should be kept.
 * @param {boolean} options.parameters.appliedBackground - Indicates if the background has been applied.
 * @param {Producer | null} options.parameters.videoProducer - The video producer instance.
 * @param {Function} options.parameters.updateTransportCreatedVideo - Function to update the transport created state for video.
 * @param {Function} options.parameters.updateVideoAlreadyOn - Function to update the video already on state.
 * @param {Function} options.parameters.updateVideoAction - Function to update the video action state.
 * @param {Function} options.parameters.updateLocalStream - Function to update the local stream.
 * @param {Function} options.parameters.updateLocalStreamVideo - Function to update the local video stream.
 * @param {Function} options.parameters.updateUserDefaultVideoInputDevice - Function to update the user default video input device.
 * @param {Function} options.parameters.updateCurrentFacingMode - Function to update the current facing mode.
 * @param {Function} options.parameters.updateDefVideoID - Function to update the default video device ID.
 * @param {Function} options.parameters.updateAllowed - Function to update the allowed state.
 * @param {Function} options.parameters.updateUpdateMainWindow - Function to update the main window state.
 * @param {Function} options.parameters.createSendTransport - Function to create a send transport.
 * @param {Function} options.parameters.connectSendTransportVideo - Function to connect the send transport for video.
 * @param {Function} options.parameters.showAlert - Function to display alert messages to the user.
 *
 * @returns {Promise<void>} A promise that resolves when the video streaming setup is complete.
 *
 * @throws Will throw an error if there is an issue with streaming the video.
 *
 * @example
 * ```typescript
 * await streamSuccessVideo({
 *   stream: mediaStream,
 *   parameters: {
 *     socket,
 *     participants,
 *     localStream: null,
 *     localStreamVideo: null,
 *     transportCreated: false,
 *     transportCreatedVideo: false,
 *     videoAlreadyOn: false,
 *     videoAction: false,
 *     videoParams: producerOptions,
 *     defVideoID: "default-video-id",
 *     userDefaultVideoInputDevice: "user-device-id",
 *     hostLabel: "Host",
 *     islevel: "1",
 *     member: "Participant1",
 *     lock_screen: false,
 *     shared: false,
 *     shareScreenStarted: false,
 *     vParams,
 *     hParams,
 *     allowed: true,
 *     currentFacingMode: "user",
 *     device: mediaDevice,
 *     updateTransportCreatedVideo,
 *     updateVideoAlreadyOn,
 *     updateVideoAction,
 *     updateLocalStream,
 *     updateLocalStreamVideo,
 *     updateUserDefaultVideoInputDevice,
 *     updateCurrentFacingMode,
 *     updateDefVideoID,
 *     updateAllowed,
 *     updateUpdateMainWindow,
 *     createSendTransport,
 *     connectSendTransportVideo,
 *     showAlert,
 *   },
 * });
 * ```
 */
export declare const streamSuccessVideo: ({ stream, parameters, }: StreamSuccessVideoOptions) => Promise<void>;

export declare interface StreamSuccessVideoOptions {
    stream: MediaStream;
    parameters: StreamSuccessVideoParameters;
}

export declare interface StreamSuccessVideoParameters extends CreateSendTransportParameters, ConnectSendTransportVideoParameters, ReorderStreamsParameters {
    socket: Socket;
    participants: Participant[];
    localStream: MediaStream | null;
    transportCreated: boolean;
    transportCreatedVideo: boolean;
    videoAlreadyOn: boolean;
    videoAction: boolean;
    videoParams: ProducerOptions;
    localStreamVideo: MediaStream | null;
    defVideoID: string;
    userDefaultVideoInputDevice: string;
    params: ProducerOptions;
    videoParamse?: ProducerOptions;
    islevel: string;
    member: string;
    updateMainWindow: boolean;
    lock_screen: boolean;
    shared: boolean;
    shareScreenStarted: boolean;
    vParams: VParamsType;
    hParams: HParamsType;
    allowed: boolean;
    currentFacingMode: string;
    device: Device | null;
    keepBackground: boolean;
    appliedBackground: boolean;
    videoProducer: Producer | null;
    removeSingleVideoEncoding?: boolean;
    updateTransportCreatedVideo: (created: boolean) => void;
    updateVideoAlreadyOn: (videoOn: boolean) => void;
    updateVideoAction: (videoAction: boolean) => void;
    updateLocalStream: (stream: MediaStream | null) => void;
    updateLocalStreamVideo: (stream: MediaStream | null) => void;
    updateUserDefaultVideoInputDevice: (device: string) => void;
    updateCurrentFacingMode: (mode: string) => void;
    updateDefVideoID: (id: string) => void;
    updateAllowed: (allowed: boolean) => void;
    updateUpdateMainWindow: (updateMainWindow: boolean) => void;
    updateParticipants: (participants: Participant[]) => void;
    updateVideoParams: (params: ProducerOptions) => void;
    updateIsBackgroundModalVisible: (isVisible: boolean) => void;
    updateAutoClickBackground: (autoClick: boolean) => void;
    showAlert?: ShowAlert;
    createSendTransport: CreateSendTransportType;
    connectSendTransportVideo: ConnectSendTransportVideoType;
    reorderStreams: ReorderStreamsType;
    sleep: SleepType;
    getUpdatedAllParams: () => StreamSuccessVideoParameters;
    [key: string]: any;
}

export declare type StreamSuccessVideoType = (options: StreamSuccessVideoOptions) => Promise<void>;

declare type StringListUpdater = (ids: string[]) => void;

declare type StringListUpdater_2 = (names: string[]) => void;

export declare type StyleDictionary = Record<string, string | number | undefined>;

export declare const SUPPORTED_LANGUAGE_CODES: string[];

/**
 * Switches the audio input device based on user preference.
 *
 * @param {SwitchAudioOptions} options - The function parameters.
 * @returns {Promise<void>}
 *
 * @example
 * ```typescript
 * switchAudio({
 *   audioPreference: "newAudioDeviceID",
 *   parameters: {
 *     defAudioID: "defaultAudioDeviceID",
 *     userDefaultAudioInputDevice: "currentAudioDeviceID",
 *     prevAudioInputDevice: "previousAudioDeviceID",
 *     updateUserDefaultAudioInputDevice: (deviceId) => setUserDefaultAudio(deviceId),
 *     updatePrevAudioInputDevice: (deviceId) => setPrevAudioDevice(deviceId),
 *     switchUserAudio: switchUserAudioFunction,
 *     getUpdatedAllParams: getUpdatedParamsFunction
 *   }
 * });
 * ```
 */
export declare const switchAudio: ({ audioPreference, parameters }: SwitchAudioOptions) => Promise<void>;

export declare interface SwitchAudioOptions {
    audioPreference: string;
    parameters: SwitchAudioParameters;
}

export declare interface SwitchAudioParameters extends SwitchUserAudioParameters {
    defAudioID: string;
    userDefaultAudioInputDevice: string;
    prevAudioInputDevice: string;
    updateUserDefaultAudioInputDevice: (deviceId: string) => void;
    updatePrevAudioInputDevice: (deviceId: string) => void;
    switchUserAudio: SwitchUserAudioType;
    getUpdatedAllParams: () => SwitchAudioParameters;
    [key: string]: any;
}

export declare type SwitchAudioType = (options: SwitchAudioOptions) => Promise<void>;

/**
 * Switches the user's audio input device based on the provided audio preference.
 *
 * @param {SwitchUserAudioOptions} options - The options for switching the user's audio input device.
 * @param {string} options.audioPreference - The preferred audio input device ID.
 * @param {Object} options.parameters - Additional parameters required for switching the audio input device.
 * @param {MediaDevices} options.parameters.mediaDevices - The media devices interface for accessing user media.
 * @param {string} options.parameters.prevAudioInputDevice - The previous audio input device ID.
 * @param {Function} options.parameters.showAlert - Function to show alert messages.
 * @param {boolean} options.parameters.hasAudioPermission - Flag indicating if the user has granted audio permission.
 * @param {Function} options.parameters.updateUserDefaultAudioInputDevice - Function to update the user's default audio input device.
 * @param {Function} options.parameters.streamSuccessAudioSwitch - Function to handle successful audio stream switch.
 * @param {Function} options.parameters.requestPermissionAudio - Function to request audio permission from the user.
 * @param {Function} options.parameters.checkMediaPermission - Function to check if media permission is granted.
 *
 * @returns {Promise<void>} A promise that resolves when the audio input device has been successfully switched.
 *
 * @throws Will throw an error if the audio input device cannot be accessed or if there is an unexpected error.
 *
 * @example
 * ```typescript
 * await switchUserAudio({
 *   audioPreference: 'audio-device-id',
 *   parameters: {
 *     mediaDevices,
 *     prevAudioInputDevice: 'prev-audio-device-id',
 *     showAlert,
 *     hasAudioPermission,
 *     updateUserDefaultAudioInputDevice,
 *     streamSuccessAudioSwitch,
 *     requestPermissionAudio,
 *     checkMediaPermission,
 *   },
 * });
 * ```
 */
export declare function switchUserAudio({ audioPreference, parameters }: SwitchUserAudioOptions): Promise<void>;

export declare interface SwitchUserAudioOptions {
    audioPreference: string;
    parameters: SwitchUserAudioParameters;
}

export declare interface SwitchUserAudioParameters extends StreamSuccessAudioSwitchParameters {
    mediaDevices: MediaDevices;
    userDefaultAudioInputDevice: string;
    prevAudioInputDevice: string;
    showAlert?: ShowAlert;
    hasAudioPermission: boolean;
    updateUserDefaultAudioInputDevice: (deviceId: string) => void;
    streamSuccessAudioSwitch: StreamSuccessAudioSwitchType;
    requestPermissionAudio: RequestPermissionAudioType;
    checkMediaPermission: boolean;
    [key: string]: any;
}

export declare type SwitchUserAudioType = (options: SwitchUserAudioOptions) => Promise<void>;

/**
 * Switches the user's video input device based on the provided options.
 *
 * @param {SwitchUserVideoOptions} options - The options for switching the user's video.
 * @param {string} options.videoPreference - The preferred video input device ID.
 * @param {boolean} options.checkoff - Flag indicating whether to turn off the video.
 * @param {Object} options.parameters - Additional parameters required for switching the video.
 * @param {boolean} options.parameters.audioOnlyRoom - Indicates if the room is audio-only.
 * @param {number} options.parameters.frameRate - The desired frame rate for the video.
 * @param {Object} options.parameters.vidCons - Video constraints such as width and height.
 * @param {string} options.parameters.prevVideoInputDevice - The previous video input device ID.
 * @param {Function} options.parameters.showAlert - Function to show alerts to the user.
 * @param {Object} options.parameters.mediaDevices - Media devices object to access user media.
 * @param {boolean} options.parameters.hasCameraPermission - Indicates if the user has camera permission.
 * @param {Function} options.parameters.updateVideoSwitching - Function to update video switching state.
 * @param {Function} options.parameters.updateUserDefaultVideoInputDevice - Function to update the default video input device.
 * @param {Function} options.parameters.requestPermissionCamera - Function to request camera permission.
 * @param {Function} options.parameters.streamSuccessVideo - Function to handle successful video stream.
 * @param {Function} options.parameters.sleep - Function to pause execution for a specified duration.
 * @param {Function} options.parameters.checkMediaPermission - Function to check media permissions.
 *
 * @returns {Promise<void>} A promise that resolves when the video input device has been successfully switched.
 *
 * @throws Will throw an error if the audio input device cannot be accessed or if there is an unexpected error.
 *
 * @example
 * ```typescript
 * await switchUserVideo({
 *   videoPreference: 'video-device-id',
 *   checkoff: false,
 *   parameters: {
 *     audioOnlyRoom: false,
 *     frameRate: 30,
 *     vidCons: { width: 640, height: 480 },
 *     prevVideoInputDevice: 'prev-video-device-id',
 *     showAlert: showAlertFunction,
 *     mediaDevices: navigator.mediaDevices,
 *     hasCameraPermission: true,
 *     updateVideoSwitching: updateVideoSwitchingFunction,
 *     updateUserDefaultVideoInputDevice: updateUserDefaultVideoInputDeviceFunction,
 *     requestPermissionCamera: requestPermissionCameraFunction,
 *     streamSuccessVideo: streamSuccessVideoFunction,
 *     sleep: sleepFunction,
 *     checkMediaPermission: true,
 *     getUpdatedAllParams: getUpdatedAllParamsFunction,
 *   },
 * });
 * ```
 */
export declare function switchUserVideo({ videoPreference, checkoff, parameters, }: SwitchUserVideoOptions): Promise<void>;

/**
 * Switches the user's video stream based on the provided video preference and other parameters.
 *
 * @param {SwitchUserVideoAltOptions} options - The options for switching the user's video.
 * @param {string} options.videoPreference - The preferred video facing mode (e.g., "user" or "environment").
 * @param {boolean} options.checkoff - A flag indicating whether to turn off the video before switching.
 * @param {SwitchUserVideoAltParameters} options.parameters - The parameters required for switching the video.
 *
 * @returns {Promise<void>} A promise that resolves when the video switching is complete.
 *
 * @throws Will throw an error if there is an issue with switching the video.
 *
 * @example
 * ```typescript
 * const options = {
 *   videoPreference: "user",
 *   checkoff: false,
 *   parameters: {
 *     audioOnlyRoom: false,
 *     frameRate: 30,
 *     vidCons: { width: 640, height: 480 },
 *     showAlert: showNotification,
 *     mediaDevices: navigator.mediaDevices,
 *     hasCameraPermission: true,
 *     updateVideoSwitching: updateVideoSwitchingState,
 *     updateCurrentFacingMode: updateCurrentFacingMode,
 *     requestPermissionCamera: requestCameraPermission,
 *     streamSuccessVideo: streamSuccessVideoFunction,
 *     sleep: sleepFunction,
 *     checkMediaPermission: true,
 *     getUpdatedAllParams: getUpdatedAllParamsFunction,
 *   },
 * };
 *
 * switchUserVideoAlt(options)
 *   .then(() => {
 *     console.log("Video switched successfully");
 *   })
 *   .catch((error) => {
 *     console.error("Error switching video:", error);
 *   });
 * ```
 */
export declare function switchUserVideoAlt({ videoPreference, checkoff, parameters, }: SwitchUserVideoAltOptions): Promise<void>;

export declare interface SwitchUserVideoAltOptions {
    videoPreference: string;
    checkoff: boolean;
    parameters: SwitchUserVideoAltParameters;
}

export declare interface SwitchUserVideoAltParameters extends StreamSuccessVideoParameters, ClickVideoParameters {
    audioOnlyRoom: boolean;
    frameRate: number;
    vidCons: VidCons;
    showAlert?: ShowAlert;
    mediaDevices: MediaDevices;
    hasCameraPermission: boolean;
    updateVideoSwitching: (state: boolean) => void;
    updateCurrentFacingMode: (mode: string) => void;
    requestPermissionCamera: RequestPermissionCameraType;
    streamSuccessVideo: StreamSuccessVideoType;
    sleep: SleepType;
    checkMediaPermission: boolean;
    getUpdatedAllParams: () => SwitchUserVideoAltParameters;
    [key: string]: any;
}

export declare type SwitchUserVideoAltType = (options: SwitchUserVideoAltOptions) => Promise<void>;

export declare interface SwitchUserVideoOptions {
    videoPreference: string;
    checkoff: boolean;
    parameters: SwitchUserVideoParameters;
}

export declare interface SwitchUserVideoParameters extends StreamSuccessVideoParameters, ClickVideoParameters {
    audioOnlyRoom: boolean;
    frameRate: number;
    vidCons: VidCons;
    prevVideoInputDevice: string;
    userDefaultVideoInputDevice: string;
    showAlert?: ShowAlert;
    mediaDevices: MediaDevices;
    hasCameraPermission: boolean;
    updateVideoSwitching: (state: boolean) => void;
    updateUserDefaultVideoInputDevice: (deviceId: string) => void;
    requestPermissionCamera: RequestPermissionCameraType;
    streamSuccessVideo: StreamSuccessVideoType;
    sleep: SleepType;
    checkMediaPermission: boolean;
    getUpdatedAllParams: () => SwitchUserVideoParameters;
    [key: string]: any;
}

export declare type SwitchUserVideoType = (options: SwitchUserVideoOptions) => Promise<void>;

/**
 * Switches the user's video device based on the provided video preference.
 *
 * @param {SwitchVideoOptions} options - The function parameters.
 * @returns {Promise<void>}
 *
 * @example
 * ```typescript
 * switchVideo({
 *   videoPreference: "newVideoDeviceID",
 *   parameters: {
 *     recordStarted: true,
 *     recordResumed: false,
 *     recordStopped: false,
 *     recordPaused: false,
 *     recordingMediaOptions: "video",
 *     videoAlreadyOn: true,
 *     userDefaultVideoInputDevice: "currentVideoDeviceID",
 *     defVideoID: "defaultVideoDeviceID",
 *     allowed: true,
 *     updateDefVideoID: (deviceId) => setDefVideoID(deviceId),
 *     updatePrevVideoInputDevice: (deviceId) => setPrevVideoDevice(deviceId),
 *     updateUserDefaultVideoInputDevice: (deviceId) => setUserDefaultVideo(deviceId),
 *     updateIsMediaSettingsModalVisible: (isVisible) => setMediaSettingsModal(isVisible),
 *     showAlert: (alertOptions) => showAlert(alertOptions),
 *     switchUserVideo: switchUserVideoFunction,
 *   }
 * });
 * ```
 */
export declare const switchVideo: ({ videoPreference, parameters }: SwitchVideoOptions) => Promise<void>;

/**
 * Switches the user's video device with alternate logic, taking into account recording state and camera access permissions.
 *
 * @param {SwitchVideoAltOptions} options - The parameters object containing necessary variables.
 * @returns {Promise<void>}
 *
 * @example
 * ```typescript
 * switchVideoAlt({
 *   parameters: {
 *     recordStarted: true,
 *     recordResumed: false,
 *     recordStopped: false,
 *     recordPaused: false,
 *     recordingMediaOptions: 'video',
 *     videoAlreadyOn: true,
 *     currentFacingMode: 'user',
 *     prevFacingMode: 'environment',
 *     allowed: true,
 *     audioOnlyRoom: false,
 *     updateCurrentFacingMode: (mode) => setCurrentFacingMode(mode),
 *     updatePrevFacingMode: (mode) => setPrevFacingMode(mode),
 *     updateIsMediaSettingsModalVisible: (isVisible) => setMediaSettingsModal(isVisible),
 *     showAlert: (alertOptions) => showAlert(alertOptions),
 *     switchUserVideoAlt: switchUserVideoAltFunction,
 *   }
 * });
 * ```
 */
export declare const switchVideoAlt: ({ parameters }: SwitchVideoAltOptions) => Promise<void>;

export declare interface SwitchVideoAltOptions {
    parameters: SwitchVideoAltParameters;
}

export declare interface SwitchVideoAltParameters extends SwitchUserVideoAltParameters {
    recordStarted: boolean;
    recordResumed: boolean;
    recordStopped: boolean;
    recordPaused: boolean;
    recordingMediaOptions: string;
    videoAlreadyOn: boolean;
    currentFacingMode: string;
    prevFacingMode: string;
    allowed: boolean;
    audioOnlyRoom: boolean;
    updateCurrentFacingMode: (mode: string) => void;
    updatePrevFacingMode: (mode: string) => void;
    updateIsMediaSettingsModalVisible: (isVisible: boolean) => void;
    showAlert?: ShowAlert;
    switchUserVideoAlt: SwitchUserVideoAltType;
    getUpdatedAllParams: () => SwitchVideoAltParameters;
    [key: string]: any;
}

export declare type SwitchVideoAltType = (options: SwitchVideoAltOptions) => Promise<void>;

export declare interface SwitchVideoOptions {
    videoPreference: string;
    parameters: SwitchVideoParameters;
}

export declare interface SwitchVideoParameters extends SwitchUserVideoParameters {
    recordStarted: boolean;
    recordResumed: boolean;
    recordStopped: boolean;
    recordPaused: boolean;
    recordingMediaOptions: string;
    videoAlreadyOn: boolean;
    userDefaultVideoInputDevice: string;
    defVideoID: string;
    allowed: boolean;
    updateDefVideoID: (deviceId: string) => void;
    updatePrevVideoInputDevice: (deviceId: string) => void;
    updateUserDefaultVideoInputDevice: (deviceId: string) => void;
    updateIsMediaSettingsModalVisible: (isVisible: boolean) => void;
    showAlert?: ShowAlert;
    switchUserVideo: SwitchUserVideoType;
    [key: string]: any;
}

export declare type SwitchVideoType = (options: SwitchVideoOptions) => Promise<void>;

export declare const syncTranslationStateAfterBreakoutChange: (translationProducerMap: Record<string, Record<string, string>>, speakerIdByProducerId: Record<string, string>, parameters: TranslationConsumerSwitchParameters) => Promise<void>;

export declare type TextSpecs = {
    addText: boolean;
    customText?: string;
    customTextPosition?: string;
    customTextColor?: string;
};

/**
 * Shows a short warning that the current recording session is about to end.
 *
 * @param options Function options including the remaining recording time in seconds.
 */
export declare const timeLeftRecording: ({ timeLeft, showAlert }: TimeLeftRecordingOptions) => void;

export declare interface TimeLeftRecordingData {
    timeLeft: number;
}

export declare interface TimeLeftRecordingOptions {
    timeLeft: number;
    showAlert?: ShowAlert;
}

export declare type TimeLeftRecordingType = (options: TimeLeftRecordingOptions) => void;

export declare const translationChannelsAvailable: TranslationChannelsAvailableType;

export declare interface TranslationChannelsAvailableData {
    speakerId: string;
    speakerName?: string;
    languages: string[];
    originalProducerId: string;
}

export declare interface TranslationChannelsAvailableOptions {
    data: TranslationChannelsAvailableData;
    updateAvailableTranslationChannels?: (speakerId: string, languages: string[], originalProducerId: string) => void;
    myDefaultListenLanguage?: string | null;
    socket?: {
        emit: (event: string, payload: Record<string, unknown>) => void;
    } | null;
    roomName?: string;
}

export declare type TranslationChannelsAvailableType = (options: TranslationChannelsAvailableOptions) => Promise<void>;

export declare const translationConfigUpdated: TranslationConfigUpdatedType;

export declare interface TranslationConfigUpdatedData {
    config: TranslationRoomConfig;
}

export declare interface TranslationConfigUpdatedOptions {
    data: TranslationConfigUpdatedData;
    updateTranslationConfig?: (config: TranslationRoomConfig) => void;
    showAlert?: ShowAlert;
}

export declare type TranslationConfigUpdatedType = (options: TranslationConfigUpdatedOptions) => Promise<void>;

export declare interface TranslationConsumerSwitchParameters {
    consumerTransports: Transport[];
    roomName: string;
    member: string;
    updateConsumerTransports: (transports: Transport[]) => void;
    breakOutRoomStarted?: boolean;
    breakOutRoomEnded?: boolean;
    breakoutRooms?: BreakoutParticipant[][];
    limitedBreakRoom?: BreakoutParticipant[];
    participants?: Participant[];
    ref_participants?: Participant[];
    islevel?: string;
    eventType?: EventType;
    hostNewRoom?: number;
    [key: string]: any;
}

export declare const translationError: TranslationErrorType;

export declare interface TranslationErrorData {
    error: string;
    code?: string;
    details?: unknown;
    availableChannels?: string[];
    maxChannels?: number;
    message?: string;
}

export declare interface TranslationErrorOptions {
    data: TranslationErrorData;
    showAlert?: ShowAlert;
}

export declare type TranslationErrorType = (options: TranslationErrorOptions) => Promise<void>;

export declare interface TranslationLanguageEntry {
    code: string;
    nickname?: string;
    voiceConfig?: TranslationVoiceConfig;
}

export declare const translationLanguageSet: TranslationLanguageSetType;

export declare interface TranslationLanguageSetData {
    success: boolean;
    language: string;
    enabled: boolean;
    error?: string;
}

export declare interface TranslationLanguageSetOptions {
    data: TranslationLanguageSetData;
    updateMySpokenLanguage?: (lang: string) => void;
    updateMySpokenLanguageEnabled?: (enabled: boolean) => void;
    showAlert?: ShowAlert;
}

export declare type TranslationLanguageSetType = (options: TranslationLanguageSetOptions) => Promise<void>;

export declare const translationMemberState: TranslationMemberStateType;

export declare interface TranslationMemberStateData {
    memberId: string;
    memberName?: string;
    state: {
        speaking?: {
            enabled: boolean;
            inputLanguage: string;
            originalProducerId: string;
        };
        listening?: {
            [speakerId: string]: {
                language: string;
                producerId: string | null;
            };
        };
    };
}

export declare interface TranslationMemberStateOptions {
    data: TranslationMemberStateData;
    updateParticipantTranslationState?: (memberId: string, state: TranslationMemberStateData['state']) => void;
}

export declare type TranslationMemberStateType = (options: TranslationMemberStateOptions) => Promise<void>;

export declare interface TranslationMeta {
    speakerId: string;
    speakerName: string;
    language: string;
    originalProducerId?: string;
    isSpeakerControlled?: boolean;
}

export declare const translationProducerClosed: TranslationProducerClosedType;

export declare interface TranslationProducerClosedData {
    speakerId: string;
    language: string;
    producerId: string;
    reason?: string;
}

export declare interface TranslationProducerClosedOptions {
    data: TranslationProducerClosedData;
    updateTranslationProducerMap?: (updater: (prev: TranslationProducerMap) => TranslationProducerMap) => void;
    stopConsumingTranslation?: (producerId: string) => Promise<void>;
    resumeOriginalProducer?: (speakerId: string) => Promise<void>;
    showAlert?: ShowAlert;
}

export declare type TranslationProducerClosedType = (options: TranslationProducerClosedOptions) => Promise<void>;

export declare interface TranslationProducerMap {
    [originalProducerId: string]: {
        [languageCode: string]: string;
    };
}

export declare const translationProducerReady: TranslationProducerReadyType;

export declare interface TranslationProducerReadyData {
    speakerId: string;
    speakerName?: string;
    language: string;
    producerId: string;
    originalProducerId: string;
}

export declare interface TranslationProducerReadyOptions {
    data: TranslationProducerReadyData;
    updateTranslationProducerMap?: (updater: (prev: TranslationProducerMap) => TranslationProducerMap) => void;
    startConsumingTranslation?: (producerId: string, speakerId: string, language: string, originalProducerId: string) => Promise<void>;
    pauseOriginalProducer?: (originalProducerId: string) => Promise<void>;
    showAlert?: ShowAlert;
}

export declare type TranslationProducerReadyType = (options: TranslationProducerReadyOptions) => Promise<void>;

export declare interface TranslationRoomConfig {
    supportTranslation: boolean;
    spokenLanguageMode: LanguageMode;
    allowedSpokenLanguages?: LanguageEntry[];
    blockedSpokenLanguages?: string[];
    listenLanguageMode: LanguageMode;
    allowedListenLanguages?: LanguageEntry[];
    blockedListenLanguages?: string[];
    maxActiveChannelsPerSpeaker: number;
    autoDetectSpokenLanguage: boolean;
    allowSpokenLanguageChange?: boolean;
    allowListenLanguageChange?: boolean;
    translationVoiceConfig?: TranslationVoiceConfig | null;
    providerGroups?: {
        groupA?: {
            languages: string[];
            sttNickName?: string;
            llmNickName?: string;
            ttsNickName?: string;
        };
        groupB?: {
            languages: string[];
            sttNickName?: string;
            llmNickName?: string;
            ttsNickName?: string;
        };
        default?: {
            sttNickName?: string;
            llmNickName?: string;
            ttsNickName?: string;
        };
    } | null;
}

export declare const translationRoomConfig: TranslationRoomConfigType;

export declare interface TranslationRoomConfigData {
    config: TranslationRoomConfig;
}

export declare interface TranslationRoomConfigOptions {
    data: TranslationRoomConfigData;
    updateTranslationConfig?: (config: TranslationRoomConfig) => void;
    updateTranslationSupported?: (supported: boolean) => void;
}

export declare type TranslationRoomConfigType = (options: TranslationRoomConfigOptions) => Promise<void>;

export declare const translationSpeakerOutputChanged: TranslationSpeakerOutputChangedType;

export declare interface TranslationSpeakerOutputChangedData {
    speakerId: string;
    speakerName: string;
    inputLanguage: string;
    outputLanguage: string | null;
    originalProducerId: string;
    enabled: boolean;
}

export declare interface TranslationSpeakerOutputChangedOptions {
    data: TranslationSpeakerOutputChangedData;
    pauseOriginalProducer?: (originalProducerId: string, speakerId: string) => Promise<void>;
    resumeOriginalProducer?: (originalProducerId: string, speakerId: string) => Promise<void>;
    stopConsumingTranslationForSpeaker?: (speakerId: string) => Promise<void>;
    updateSpeakerTranslationState?: (speakerId: string, outputLanguage: string | null, originalProducerId: string) => void;
    showAlert?: ShowAlert;
    listenerOverride?: {
        speakerId: string;
        wantOriginal: boolean;
        preferredLanguage?: string;
    } | null;
}

export declare type TranslationSpeakerOutputChangedType = (options: TranslationSpeakerOutputChangedOptions) => Promise<void>;

export declare const translationSubscribed: TranslationSubscribedType;

export declare interface TranslationSubscribedData {
    speakerId: string;
    speakerName?: string;
    language: string;
    channelCreated: boolean;
    producerId?: string;
    originalProducerId?: string;
}

export declare interface TranslationSubscribedOptions {
    data: TranslationSubscribedData;
    updateListenPreferences?: (updater: (prev: Map<string, string>) => Map<string, string>) => void;
    updateTranslationProducerMap?: (updater: (prev: TranslationProducerMap) => TranslationProducerMap) => void;
    startConsumingTranslation?: (producerId: string, speakerId: string, language: string, originalProducerId?: string) => Promise<void>;
    showAlert?: ShowAlert;
}

export declare type TranslationSubscribedType = (options: TranslationSubscribedOptions) => Promise<void>;

export declare const translationTranscript: TranslationTranscriptType;

export declare interface TranslationTranscriptData {
    speakerId: string;
    speakerName?: string;
    language: string;
    originalText: string;
    translatedText?: string;
    timestamp?: number;
    targetLanguage?: string;
    isFinal?: boolean;
    [key: string]: any;
}

export declare interface TranslationTranscriptOptions {
    data: TranslationTranscriptData;
    updateTranscripts?: (updater: (prev: TranslationTranscriptData[]) => TranslationTranscriptData[]) => void;
    onTranscriptReceived?: (transcript: TranslationTranscriptData) => void;
    maxTranscripts?: number;
}

export declare type TranslationTranscriptType = (options: TranslationTranscriptOptions) => Promise<void>;

export declare const translationUnsubscribed: TranslationUnsubscribedType;

export declare interface TranslationUnsubscribedData {
    speakerId: string;
    language: string;
    channelClosed: boolean;
}

export declare interface TranslationUnsubscribedOptions {
    data: TranslationUnsubscribedData;
    updateListenPreferences?: (updater: (prev: Map<string, string>) => Map<string, string>) => void;
    stopConsumingTranslation?: (speakerId: string, language: string) => Promise<void>;
}

export declare type TranslationUnsubscribedType = (options: TranslationUnsubscribedOptions) => Promise<void>;

export declare interface TranslationVoiceConfig {
    voiceGender?: VoiceGender;
    voiceId?: string;
    voiceClone?: {
        provider: 'elevenlabs' | 'playht' | 'coqui' | 'cartesia';
        voiceId: string;
        stability?: number;
        similarity?: number;
    };
    sttNickName?: string;
    llmNickName?: string;
    ttsNickName?: string;
    ttsProvider?: string;
    sttParams?: Record<string, string | number | boolean>;
    llmParams?: Record<string, string | number | boolean>;
    ttsParams?: Record<string, string | number | boolean>;
}

export declare interface Transport {
    producerId: string;
    consumer: Consumer;
    socket_: Socket;
    serverConsumerTransportId: string;
    [key: string]: any;
}

declare interface TransportLike {
    producerId?: string | null;
    consumer?: ConsumerLike;
    socket_: SocketLike;
    serverConsumerTransportId: string;
}

declare interface TransportLike_2 {
    producerId?: string | null;
    consumer?: ConsumerLike_2;
    socket_: SocketLike_2;
    serverConsumerTransportId: string;
}

declare interface TransportLike_3 {
    producerId?: string | null;
    consumer: ConsumerLike_3;
    socket_: SocketLike_3;
    serverConsumerTransportId: string;
}

/**
 * Triggers an update to the screen client based on the provided parameters.
 *
 * @param {TriggerOptions} options - The options for triggering the update.
 * @param {string[]} options.ref_ActiveNames - Reference to the active names.
 * @param {TriggerParameters} options.parameters - The parameters for the trigger.
 *
 * @returns {Promise<void>} A promise that resolves when the trigger is complete.
 *
 * @throws Will throw an error if the updateScreenClient operation fails.
 *
 * @remarks
 * This function handles various conditions to determine the main screen person,
 * adjusts the screen states, and emits an update to the screen client via socket.
 *
 * @example
 * ```typescript
 * await trigger({
 *   ref_ActiveNames: ["user1", "user2"],
 *   parameters: {
 *     socket: socketInstance,
 *     localSocket: localSocketInstance,
 *     roomName: "room1",
 *     screenStates: [{ mainScreenPerson: "user1", mainScreenFilled: true, adminOnMainScreen: false }],
 *     participants: [{ name: "admin", islevel: "2" }],
 *     updateDateState: 0,
 *     lastUpdate: null,
 *     nForReadjust: 0,
 *     eventType: "conference",
 *     shared: false,
 *     shareScreenStarted: false,
 *     whiteboardStarted: false,
 *     whiteboardEnded: false,
 *     updateUpdateDateState: (date) => {},
 *     updateLastUpdate: (date) => {},
 *     updateNForReadjust: (n) => {},
 *     autoAdjust: async ({ n, parameters }) => [n, 0],
 *   },
 * });
 * ```
 */
export declare function trigger({ ref_ActiveNames, parameters, }: TriggerOptions): Promise<void>;

export declare interface TriggerOptions {
    ref_ActiveNames: string[];
    parameters: TriggerParameters;
}

export declare interface TriggerParameters {
    socket: Socket;
    localSocket?: Socket;
    roomName: string;
    screenStates: ScreenState[];
    participants: Participant[];
    updateDateState?: number | null;
    lastUpdate: number | null;
    nForReadjust: number | null;
    eventType: EventType;
    shared: boolean;
    shareScreenStarted: boolean;
    whiteboardStarted: boolean;
    whiteboardEnded: boolean;
    updateUpdateDateState: (timestamp: number | null) => void;
    updateLastUpdate: (lastUpdate: number | null) => void;
    updateNForReadjust: (nForReadjust: number) => void;
    autoAdjust: AutoAdjustType;
    getUpdatedAllParams: () => TriggerParameters;
    [key: string]: any;
}

export declare type TriggerType = (options: TriggerOptions) => Promise<void>;

export declare const TTS_PROVIDERS: Record<TTSProvider, {
    name: string;
    supportsSSML: boolean;
    multilingual?: boolean;
    isDefault?: boolean;
}>;

export declare type TTSProvider = 'deepgram' | 'openai' | 'azure' | 'google' | 'aws' | 'elevenlabs' | 'playht' | 'cartesia' | 'rime' | 'kokoro' | 'gemini' | 'assemblyai';

export declare type TTSSupport = 'excellent' | 'good' | 'moderate' | 'limited' | 'unknown' | 'n/a';

export declare const unfocusPanelists: ({ socket, roomName, member: _member, islevel, showAlert, }: UnfocusPanelistsOptions) => Promise<void>;

export declare interface UnfocusPanelistsOptions {
    socket: Socket;
    roomName: string;
    member: string;
    islevel: string;
    showAlert?: ShowAlert;
}

export declare type UnfocusPanelistsType = (options: UnfocusPanelistsOptions) => Promise<void>;

export declare interface UnsafeAlertData {
    name: string;
}

export declare interface UnSafeData {
    time: number;
    evidence: RecordingImageData;
}

/**
 * Connects newly announced consuming domains, routing through alternate-domain lookup when needed.
 *
 * @param {UpdateConsumingDomainsOptions} options - Domain payload and consume-domain connection helpers.
 * @returns {Promise<void>} Resolves once the needed consume domains are connected.
 *
 * @example
 * ```typescript
 * await updateConsumingDomains({
 *   domains,
 *   alt_domains,
 *   apiUserName: 'api-user',
 *   apiKey: 'api-key',
 *   apiToken: 'api-token',
 *   parameters,
 * });
 * ```
 */
export declare const updateConsumingDomains: <TParameters = unknown, TParticipant extends {
    name?: string | null;
} = Participant, TConsumeSocket = ConsumeSocket>({ domains, alt_domains, parameters, apiUserName, apiKey, apiToken, }: UpdateConsumingDomainsOptions<TParameters, TParticipant, TConsumeSocket>) => Promise<void>;

export declare interface UpdateConsumingDomainsData {
    domains: string[];
    alt_domains: AltDomains;
}

export declare interface UpdateConsumingDomainsGetDomainsOptions<TParameters = unknown, TParticipant extends {
    name?: string | null;
} = Participant, TConsumeSocket = ConsumeSocket> {
    domains: string[];
    alt_domains: AltDomains;
    apiUserName: string;
    apiKey: string;
    apiToken: string;
    parameters: UpdateConsumingDomainsParameters<TParameters, TParticipant, TConsumeSocket> & TParameters;
}

export declare type UpdateConsumingDomainsGetDomainsType<TParameters = unknown, TParticipant extends {
    name?: string | null;
} = Participant, TConsumeSocket = ConsumeSocket> = (options: UpdateConsumingDomainsGetDomainsOptions<TParameters, TParticipant, TConsumeSocket>) => Promise<void>;

export declare interface UpdateConsumingDomainsOptions<TParameters = unknown, TParticipant extends {
    name?: string | null;
} = Participant, TConsumeSocket = ConsumeSocket> {
    domains: string[];
    alt_domains: AltDomains;
    apiUserName: string;
    apiKey: string;
    apiToken: string;
    parameters: UpdateConsumingDomainsParameters<TParameters, TParticipant, TConsumeSocket> & TParameters;
}

export declare interface UpdateConsumingDomainsParameters<TParameters = unknown, TParticipant extends {
    name?: string | null;
} = Participant, TConsumeSocket = ConsumeSocket> {
    participants: TParticipant[];
    consume_sockets: TConsumeSocket[];
    connectIps: ConnectIpsLikeType<TParameters, TConsumeSocket>;
    getDomains: UpdateConsumingDomainsGetDomainsType<TParameters, TParticipant, TConsumeSocket>;
    getUpdatedAllParams: () => UpdateConsumingDomainsParameters<TParameters, TParticipant, TConsumeSocket> & TParameters;
    [key: string]: any;
}

export declare type UpdateConsumingDomainsType<TParameters = unknown, TParticipant extends {
    name?: string | null;
} = Participant, TConsumeSocket = ConsumeSocket> = (options: UpdateConsumingDomainsOptions<TParameters, TParticipant, TConsumeSocket>) => Promise<void>;

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
export declare const updatedCoHost: ({ coHost, coHostResponsibility, showAlert, eventType, islevel, member, youAreCoHost, updateCoHost, updateCoHostResponsibility, updateYouAreCoHost, }: UpdatedCoHostOptions) => Promise<void>;

export declare interface UpdatedCoHostData {
    coHost: string;
    coHostResponsibilities: CoHostResponsibility[];
}

export declare interface UpdatedCoHostOptions {
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

export declare type UpdatedCoHostType = (options: UpdatedCoHostOptions) => Promise<void>;

export declare const updateLiveSubtitlesFromTranscript: ({ currentSubtitles, transcript, now, }: UpdateLiveSubtitlesOptions) => Map<string, LiveSubtitle>;

export declare interface UpdateLiveSubtitlesOptions {
    currentSubtitles: Map<string, LiveSubtitle>;
    transcript: TranslationTranscriptData;
    now?: number;
}

/**
 * Expands the shared `Settings` tuple into individual media setting updaters.
 *
 * @param {UpdateMediaSettingsOptions} options - Settings tuple and update callbacks.
 * @returns {void} Updates state synchronously.
 *
 * @example
 * ```typescript
 * updateMediaSettings({
 *   settings: ['allow', 'allow', 'deny', 'allow'],
 *   updateAudioSetting: setAudioSetting,
 *   updateVideoSetting: setVideoSetting,
 *   updateScreenshareSetting: setScreenshareSetting,
 *   updateChatSetting: setChatSetting,
 * });
 * ```
 */
export declare const updateMediaSettings: ({ settings, updateAudioSetting, updateVideoSetting, updateScreenshareSetting, updateChatSetting, }: UpdateMediaSettingsOptions) => void;

export declare interface UpdateMediaSettingsData {
    settings: Settings;
}

export declare interface UpdateMediaSettingsOptions {
    settings: Settings;
    updateAudioSetting: (value: string) => void;
    updateVideoSetting: (value: string) => void;
    updateScreenshareSetting: (value: string) => void;
    updateChatSetting: (value: string) => void;
}

export declare type UpdateMediaSettingsType = (options: UpdateMediaSettingsOptions) => void;

export declare const updateMicLevel: (audioProducer: Producer, updateAudioLevel: (level: number) => void) => Promise<void>;

/**
 * Updates the mini cards grid based on the specified rows and columns.
 *
 * @param {UpdateMiniCardsGridOptions} options - The function parameters.
 * @param {number} options.rows - The number of rows in the grid.
 * @param {number} options.cols - The number of columns in the grid.
 * @param {boolean} [options.defal] - Flag indicating whether to update the default grid or an alternative grid.
 * @param {number} [options.actualRows] - The actual number of rows in the grid.
 * @param {UpdateMiniCardsGridParameters} options.parameters - Additional parameters needed for the function.
 * @returns {Promise<void>} A promise that resolves when the mini cards grid is updated.
 *
 * @throws Will throw an error if the update operation fails.
 *
 * @example
 * ```typescript
 * const options = {
 *   rows: 2,
 *   cols: 3,
 *   defal: true,
 *   actualRows: 2,
 *   parameters: {
 *     updateGridRows: updateGridRowsFunction,
 *     updateGridCols: updateGridColsFunction,
 *     updateAltGridRows: updateAltGridRowsFunction,
 *     updateAltGridCols: updateAltGridColsFunction,
 *     updateGridSizes: updateGridSizesFunction,
 *     gridSizes: { gridWidth: 100, gridHeight: 100 },
 *     paginationDirection: 'horizontal',
 *     paginationHeightWidth: 50,
 *     doPaginate: true,
 *     componentSizes: { otherWidth: 300, otherHeight: 200 },
 *     eventType: 'chat',
 *     getUpdatedAllParams: getUpdatedAllParamsFunction,
 *   },
 * };
 *
 * await updateMiniCardsGrid(options);
 * ```
 */
export declare function updateMiniCardsGrid({ rows, cols, defal, actualRows, parameters, }: UpdateMiniCardsGridOptions): Promise<void>;

export declare interface UpdateMiniCardsGridOptions {
    rows: number;
    cols: number;
    defal?: boolean;
    actualRows?: number;
    parameters: UpdateMiniCardsGridParameters;
}

export declare interface UpdateMiniCardsGridParameters {
    updateGridRows: (rows: number) => void;
    updateGridCols: (cols: number) => void;
    updateAltGridRows: (rows: number) => void;
    updateAltGridCols: (cols: number) => void;
    updateGridSizes: (gridSizes: GridSizes) => void;
    gridSizes: GridSizes;
    paginationDirection: string;
    paginationHeightWidth: number;
    doPaginate: boolean;
    componentSizes: ComponentSizes;
    eventType: EventType;
    getUpdatedAllParams: () => UpdateMiniCardsGridParameters;
    [key: string]: any;
}

export declare type UpdateMiniCardsGridType = (options: UpdateMiniCardsGridOptions) => Promise<void>;

export declare const updatePanelists: ({ socket, panelists, roomName, member: _member, islevel, showAlert, }: UpdatePanelistsOptions) => Promise<void>;

export declare interface UpdatePanelistsOptions {
    socket: Socket;
    panelists: Participant[];
    roomName: string;
    member: string;
    islevel: string;
    showAlert?: ShowAlert;
}

export declare type UpdatePanelistsType = (options: UpdatePanelistsOptions) => Promise<void>;

/**
 * Updates the audio decibels for a participant.
 *
 * @param {UpdateParticipantAudioDecibelsOptions} options - The options for updating participant audio decibels.
 * @param {string} options.name - The name of the participant.
 * @param {number} options.averageLoudness - The average loudness of the participant.
 * @param {Array<AudioDecibels>} options.audioDecibels - The array of audio decibels entries.
 * @param {Function} options.updateAudioDecibels - The function to update the audio decibels array.
 *
 * @returns {void}
 *
 * @example
 * const options = {
 *   name: 'participant1',
 *   averageLoudness: 50,
 *   audioDecibels: [{ name: 'participant1', averageLoudness: 50 }],
 *   updateAudioDecibels: updateAudioDecibelsFunction,
 * };
 *
 * updateParticipantAudioDecibels(options);
 */
export declare function updateParticipantAudioDecibels({ name, averageLoudness, audioDecibels, updateAudioDecibels, }: UpdateParticipantAudioDecibelsOptions): void;

export declare interface UpdateParticipantAudioDecibelsOptions {
    name: string;
    averageLoudness: number;
    audioDecibels: AudioDecibels[];
    updateAudioDecibels: (audioDecibels: AudioDecibels[]) => void;
}

export declare type UpdateParticipantAudioDecibelsType = (options: UpdateParticipantAudioDecibelsOptions) => void;

export declare const updateParticipantPermission: ({ socket, participant, newLevel, member: _member, islevel, roomName, showAlert, }: UpdateParticipantPermissionOptions) => Promise<void>;

export declare interface UpdateParticipantPermissionOptions {
    socket: Socket;
    participant: Participant;
    newLevel: PermissionLevel;
    member: string;
    islevel: string;
    roomName: string;
    showAlert?: ShowAlert;
}

export declare const updatePermissionConfig: ({ socket, config, islevel, roomName, showAlert, }: UpdatePermissionConfigOptions) => Promise<void>;

export declare interface UpdatePermissionConfigOptions {
    socket: Socket;
    config: PermissionConfig;
    member: string;
    islevel: string;
    roomName: string;
    showAlert?: ShowAlert;
}

/**
 * Updates the recording state based on the provided parameters.
 */
export declare const updateRecording: UpdateRecordingType;

export declare interface UpdateRecordingOptions {
    parameters: UpdateRecordingParameters;
}

export declare interface UpdateRecordingParameters extends RecordResumeTimerParameters {
    roomName: string;
    userRecordingParams: UserRecordingParams;
    socket: Socket;
    localSocket?: Socket;
    updateIsRecordingModalVisible: (visible: boolean) => void;
    confirmedToRecord: boolean;
    showAlert?: ShowAlert;
    recordingMediaOptions: string;
    videoAlreadyOn: boolean;
    audioAlreadyOn: boolean;
    recordStarted: boolean;
    recordPaused: boolean;
    recordResumed: boolean;
    recordStopped: boolean;
    recordChangeSeconds: number;
    pauseRecordCount: number;
    startReport: boolean;
    endReport: boolean;
    canRecord: boolean;
    canPauseResume: boolean;
    updateCanPauseResume: (canPauseResume: boolean) => void;
    updatePauseRecordCount: (count: number) => void;
    updateClearedToRecord: (cleared: boolean) => void;
    updateRecordPaused: (paused: boolean) => void;
    updateRecordResumed: (resumed: boolean) => void;
    updateStartReport: (start: boolean) => void;
    updateEndReport: (end: boolean) => void;
    updateCanRecord: (canRecord: boolean) => void;
    rePort: UpdateRecordingRePort;
    getUpdatedAllParams: () => UpdateRecordingParameters;
    [key: string]: any;
}

export declare type UpdateRecordingRePort = (options: {
    restart?: boolean;
    parameters: any;
}) => Promise<void>;

export declare type UpdateRecordingType = (options: UpdateRecordingOptions) => Promise<void>;

export declare const updateRoomParametersClient: ({ parameters }: UpdateRoomParametersClientOptions) => void;

export declare type UpdateRoomParametersClientOptions = {
    parameters: UpdateRoomParametersClientParameters;
};

export declare interface UpdateRoomParametersClientParameters {
    rtpCapabilities: RtpCapabilities | null;
    roomRecvIPs: string[];
    meetingRoomParams: MeetingRoomParams | null;
    itemPageLimit: number;
    audioOnlyRoom: boolean;
    addForBasic: boolean;
    screenPageLimit: number;
    shareScreenStarted: boolean;
    shared: boolean;
    targetOrientation: string;
    vidCons: VidCons;
    recordingVideoSupport: boolean;
    frameRate: number;
    adminPasscode: string;
    eventType: EventType;
    youAreCoHost: boolean;
    autoWave: boolean;
    forceFullDisplay: boolean;
    chatSetting: string;
    meetingDisplayType: string;
    audioSetting: string;
    videoSetting: string;
    screenshareSetting: string;
    hParams: HParamsType;
    vParams: VParamsType;
    screenParams: ScreenParamsType;
    aParams: AParamsType;
    islevel: string;
    showAlert?: ShowAlert;
    data: ResponseJoinRoom;
    updateRtpCapabilities: (rtpCapabilities: RtpCapabilities | null) => void;
    updateRoomRecvIPs: (roomRecvIPs: string[]) => void;
    updateMeetingRoomParams: (meetingRoomParams: MeetingRoomParams | null) => void;
    updateItemPageLimit: (limit: number) => void;
    updateAudioOnlyRoom: (isAudioOnly: boolean) => void;
    updateAddForBasic: (addForBasic: boolean) => void;
    updateScreenPageLimit: (limit: number) => void;
    updateVidCons: (cons: VidCons) => void;
    updateFrameRate: (frameRate: number) => void;
    updateAdminPasscode: (passcode: string) => void;
    updateEventType: (eventType: EventType) => void;
    updateYouAreCoHost: (coHost: boolean) => void;
    updateAutoWave: (autoWave: boolean) => void;
    updateForceFullDisplay: (forceFull: boolean) => void;
    updateChatSetting: (setting: string) => void;
    updateMeetingDisplayType: (type: string) => void;
    updateAudioSetting: (setting: string) => void;
    updateVideoSetting: (setting: string) => void;
    updateScreenshareSetting: (setting: string) => void;
    updateHParams: (params: HParamsType) => void;
    updateVParams: (params: VParamsType) => void;
    updateScreenParams: (params: ScreenParamsType) => void;
    updateAParams: (params: AParamsType) => void;
    updateMainHeightWidth: (heightWidth: number) => void;
    updateTargetResolution: (resolution: string) => void;
    updateTargetResolutionHost: (resolution: string) => void;
    updateRecordingAudioPausesLimit: (limit: number) => void;
    updateRecordingAudioPausesCount: (count: number) => void;
    updateRecordingAudioSupport: (support: boolean) => void;
    updateRecordingAudioPeopleLimit: (limit: number) => void;
    updateRecordingAudioParticipantsTimeLimit: (limit: number) => void;
    updateRecordingVideoPausesCount: (count: number) => void;
    updateRecordingVideoPausesLimit: (limit: number) => void;
    updateRecordingVideoSupport: (support: boolean) => void;
    updateRecordingVideoPeopleLimit: (limit: number) => void;
    updateRecordingVideoParticipantsTimeLimit: (limit: number) => void;
    updateRecordingAllParticipantsSupport: (support: boolean) => void;
    updateRecordingVideoParticipantsSupport: (support: boolean) => void;
    updateRecordingAllParticipantsFullRoomSupport: (support: boolean) => void;
    updateRecordingVideoParticipantsFullRoomSupport: (support: boolean) => void;
    updateRecordingPreferredOrientation: (orientation: string) => void;
    updateRecordingSupportForOtherOrientation: (support: boolean) => void;
    updateRecordingMultiFormatsSupport: (support: boolean) => void;
    updateRecordingVideoOptions: (options: string) => void;
    updateRecordingAudioOptions: (options: string) => void;
}

export declare type UpdateRoomParametersClientType = (options: UpdateRoomParametersClientOptions) => void;

export declare interface UserRecordingParams {
    mainSpecs: MainSpecs;
    dispSpecs: DispSpecs;
    textSpecs?: TextSpecs;
}

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
export declare const userWaiting: ({ name, showAlert, totalReqWait, updateTotalReqWait, }: UserWaitingOptions) => Promise<void>;

export declare interface UserWaitingData {
    name: string;
}

export declare interface UserWaitingOptions {
    name: string;
    showAlert?: ShowAlert;
    totalReqWait: number;
    updateTotalReqWait: (total: number) => void;
}

export declare type UserWaitingType = (options: UserWaitingOptions) => Promise<void>;

/**
 * Validates if the given string contains only alphanumeric characters.
 *
 * @param {ValidateAlphanumericOptions} options - The options containing the string to validate.
 * @param {string} options.str - The string to be validated.
 * @returns {Promise<boolean>} - A promise that resolves to `true` if the string is alphanumeric, otherwise `false`.
 *
 * @example
 * ```typescript
 * const isValid = await validateAlphanumeric({ str: "abc123" });
 * console.log(isValid);
 * // Output: true
 * ```
 */
export declare const validateAlphanumeric: ({ str }: ValidateAlphanumericOptions) => Promise<boolean>;

export declare interface ValidateAlphanumericOptions {
    str: string;
}

export declare type ValidateAlphanumericType = (options: ValidateAlphanumericOptions) => Promise<boolean>;

/**
 * Validates alphanumeric strings
 */
export declare function validateWelcomeAlphanumeric(str: string): boolean;

export declare function validateWelcomeInputs({ name, secret, eventID, link, }: ValidateWelcomeInputsOptions): {
    valid: boolean;
    message?: string;
};

/**
 * Validates welcome page form inputs
 */
export declare interface ValidateWelcomeInputsOptions {
    name: string;
    secret: string;
    eventID: string;
    link: string;
}

export declare interface VidCons {
    width: number | {
        ideal?: number;
        max?: number;
        min?: number;
    };
    height: number | {
        ideal?: number;
        max?: number;
        min?: number;
    };
}

export declare type VoiceGender = 'male' | 'female' | 'neutral';

export declare interface VoiceOption {
    id: string;
    name: string;
    gender: VoiceGender;
    provider: string;
    language: string;
    style?: string;
}

export declare interface VoiceSelectionPreference {
    gender: VoiceGender;
    voiceId?: string;
    style?: string;
}

export declare const vParams: VParamsType;

export declare type VParamsType = {
    encodings: RtpEncodingParameters[];
    codecOptions?: ProducerCodecOptions;
};

export declare interface WaitingRoomParticipant {
    name: string;
    id: string;
}

export declare interface WelcomePageParameters {
    imgSrc?: string;
    showAlert?: ShowAlert;
    updateIsLoadingModalVisible: (visible: boolean) => void;
    connectSocket: any;
    updateSocket: (socket: Socket) => void;
    updateValidated: (validated: boolean) => void;
    updateApiUserName: (apiUserName: string) => void;
    updateApiToken: (apiToken: string) => void;
    updateLink: (link: string) => void;
    updateRoomName: (roomName: string) => void;
    updateMember: (userName: string) => void;
}

export declare interface WhiteboardActionData {
    action: string;
    payload: ShapePayload;
}

export declare interface WhiteboardData {
    shapes: Shapes[];
    redoStack: Shapes[];
    undoStack: Shapes[];
    useImageBackground: boolean;
}

export declare interface WhiteboardUpdatedData {
    status: 'started' | 'ended';
    whiteboardUsers: WhiteboardUser[];
    members: Participant[];
    whiteboardData: WhiteboardData;
}

export declare interface WhiteboardUser {
    name: string;
    useBoard: boolean;
}

export { }
