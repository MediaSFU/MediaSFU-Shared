import { Socket } from 'socket.io-client';
import type { Consumer, DtlsParameters, IceCandidate, IceParameters, ProducerCodecOptions, RtpCapabilities } from 'mediasoup-client/lib/types';
import type { RtpEncodingParameters } from 'mediasoup-client/lib/types';

export interface Participant {
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

export interface Stream {
  producerId: string;
  muted?: boolean;
  stream?: MediaStream;
  socket_?: Socket;
  name?: string;
  [key: string]: any;
}

export interface Request {
  id: string;
  icon: string;
  name?: string;
  username?: string;
  [key: string]: any;
}

export interface RequestResponse {
  id: string;
  icon?: string;
  name?: string;
  username?: string;
  action?: string;
  type?: string;
  [key: string]: any;
}

export interface Transport {
  producerId: string;
  consumer: Consumer;
  socket_: Socket;
  serverConsumerTransportId: string;
  [key: string]: any;
}

export interface ScreenState {
  mainScreenPerson?: string;
  mainScreenProducerId?: string;
  mainScreenFilled: boolean;
  adminOnMainScreen: boolean;
}

export interface GridSizes {
  gridWidth?: number;
  gridHeight?: number;
  altGridWidth?: number;
  altGridHeight?: number;
}

export interface ComponentSizes {
  mainWidth: number;
  mainHeight: number;
  otherWidth: number;
  otherHeight: number;
}

export interface AudioDecibels {
  name: string;
  averageLoudness: number;
}

export type ShowAlert = (options: { message: string; type: 'success' | 'danger' | 'info'; duration?: number }) => void;

export interface CoHostResponsibility {
  name: string;
  value: boolean;
  dedicated: boolean;
}

export interface VidCons {
  width: number | { ideal?: number; max?: number; min?: number };
  height: number | { ideal?: number; max?: number; min?: number };
}

export type Settings = [string, string, string, string];

export interface Message {
  sender: string;
  receivers: string[];
  message: string;
  timestamp: string;
  group: boolean;
}

export type MainSpecs = {
  mediaOptions: string;
  audioOptions: string;
  videoOptions: string;
  videoType: string;
  videoOptimized: boolean;
  recordingDisplayType: 'video' | 'media' | 'all';
  addHLS: boolean;
};

export type DispSpecs = {
  nameTags: boolean;
  backgroundColor: string;
  nameTagsColor: string;
  orientationVideo: string;
};

export type TextSpecs = {
  addText: boolean;
  customText?: string;
  customTextPosition?: string;
  customTextColor?: string;
};

export interface UserRecordingParams {
  mainSpecs: MainSpecs;
  dispSpecs: DispSpecs;
  textSpecs?: TextSpecs;
}

export type AltDomains = {
  [key: string]: string;
};

export type RequestPermissionAudioType = () => Promise<string>;
export type RequestPermissionCameraType = () => Promise<string>;

export type ControlsPosition = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
export type InfoPosition = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';

export interface Poll {
  id: string;
  question: string;
  type: string;
  options: string[];
  votes: number[];
  status: string;
  voters?: Record<string, number>;
  [key: string]: any;
}

export interface WaitingRoomParticipant {
  name: string;
  id: string;
}

export interface ModalPositionStyle {
  justifyContent: string;
  alignItems: string;
}

export interface OverlayPositionStyle {
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
}

export type EventType = 'conference' | 'webinar' | 'chat' | 'broadcast' | 'none';

export interface PollUpdatedData {
  polls?: Poll[];
  poll: Poll;
  status: string;
}

export interface BreakoutParticipant {
  name: string;
  breakRoom?: number | null;
}

export interface BreakoutRoomUpdatedData {
  forHost?: boolean;
  newRoom?: number;
  members?: Participant[];
  breakoutRooms?: BreakoutParticipant[][];
  status?: string;
}

export interface ConsumeSocket {
  [ip: string]: Socket;
}

export interface WhiteboardUser {
  name: string;
  useBoard: boolean;
}

export interface ShapePayload {
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

export interface Shapes {
  action: string;
  payload: ShapePayload;
}

export interface WhiteboardData {
  shapes: Shapes[];
  redoStack: Shapes[];
  undoStack: Shapes[];
  useImageBackground: boolean;
}

export type SeedData = {
  member?: string;
  host?: string;
  eventType?: EventType;
  participants?: Participant[];
  messages?: Message[];
  polls?: Poll[];
  breakoutRooms?: BreakoutParticipant[][];
  requests?: Request[];
  waitingList?: WaitingRoomParticipant[];
  whiteboardUsers?: WhiteboardUser[];
};

export interface MeetingRoomParams {
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

export interface RecordingParams {
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

export interface RecordParams {
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

export type AParamsType = {
  encodings: RtpEncodingParameters[];
  codecOptions?: ProducerCodecOptions;
};

export type HParamsType = {
  encodings: RtpEncodingParameters[];
  codecOptions?: ProducerCodecOptions;
};

export type VParamsType = {
  encodings: RtpEncodingParameters[];
  codecOptions?: ProducerCodecOptions;
};

export type ScreenParamsType = {
  encodings: RtpEncodingParameters[];
  codecOptions?: ProducerCodecOptions;
};

export interface CreateRoomOptions {
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

export interface CreateMediaSFURoomOptions {
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

export interface JoinMediaSFURoomOptions {
  action: 'join';
  meetingID: string;
  userName: string;
  secureCode?: string;
}

export interface ResponseJoinLocalRoom {
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

export interface ResponseJoinRoom {
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

export interface AllMembersData {
  members: Participant[];
  requests: Request[];
  coHost?: string;
  coHostResponsibilities: CoHostResponsibility[];
}

export interface AllMembersRestData {
  members: Participant[];
  settings: Settings;
  coHost?: string;
  coHostResponsibilities: CoHostResponsibility[];
}

export interface UserWaitingData {
  name: string;
}

export interface AllWaitingRoomMembersData {
  waitingParticipants?: WaitingRoomParticipant[];
  waitingParticipantss?: WaitingRoomParticipant[];
}

export interface BanData {
  name: string;
}

export interface UpdatedCoHostData {
  coHost: string;
  coHostResponsibilities: CoHostResponsibility[];
}

export interface ParticipantRequestedData {
  userRequest: Request;
}

export interface ScreenProducerIdData {
  producerId: string;
}

export interface UpdateMediaSettingsData {
  settings: Settings;
}

export interface ProducerMediaPausedData {
  producerId: string;
  kind: 'audio';
  name: string;
}

export interface ProducerMediaResumedData {
  kind: 'audio';
  name: string;
}

export interface ProducerMediaClosedData {
  producerId: string;
  kind: 'audio' | 'video' | 'screenshare';
  name: string;
}

export interface ControlMediaHostData {
  type: 'all' | 'audio' | 'video' | 'screenshare';
}

export interface ReceiveMessageData {
  message: Message;
}

export interface MeetingTimeRemainingData {
  timeRemaining: number;
}

export interface MeetingStillThereData {
  timeRemaining: number;
}

export interface UpdateConsumingDomainsData {
  domains: string[];
  alt_domains: AltDomains;
}

export interface RecordingNoticeData {
  state: string;
  userRecordingParam: UserRecordingParams;
  pauseCount: number;
  timeDone: number;
}

export interface TimeLeftRecordingData {
  timeLeft: number;
}

export interface StoppedRecordingData {
  state: string;
  reason?: string;
}

export interface HostRequestResponseData {
  requestResponse: RequestResponse;
}

export interface SafeRoomNoticeData {
  state: string;
}

export interface UnSafeData {
  time: number;
  evidence: RecordingImageData;
}

export interface UnsafeAlertData {
  name: string;
}

export interface DataBufferNotice {
  state: string;
}

export interface AudioData {
  audioBuffer: AudioBuffer;
}

export interface RecordingImageData {
  jpegBuffer: ImageData;
}

export type StyleDictionary = Record<string, string | number | undefined>;

export interface CustomVideoCardOptions {
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

export interface CustomAudioCardOptions {
  name: string;
  barColor: boolean;
  textColor: string;
  imageSource: string;
  roundedImage: boolean;
  imageStyle?: StyleDictionary;
  parameters?: any;
}

export interface CustomMiniCardOptions {
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

export interface CustomPreJoinPageOptions {
  localLink?: string;
  connectMediaSFU?: boolean;
  parameters: any;
  credentials?: { apiUserName: string; apiKey: string };
  returnUI?: boolean;
  noUIPreJoinOptions?: CreateMediaSFURoomOptions | JoinMediaSFURoomOptions;
  createMediaSFURoom?: any;
  joinMediaSFURoom?: any;
}

export type CustomRenderer<Result, Options> = (options: Options) => Result;

export interface ButtonTouch<TIcon = unknown, TElement = unknown> {
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

export interface CustomButton<TIcon = unknown, TElement = unknown> {
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

export interface CustomButtonsOptions<TIcon = unknown, TElement = unknown> {
  buttons: CustomButton<TIcon, TElement>[];
}

export interface WhiteboardUpdatedData {
  status: 'started' | 'ended';
  whiteboardUsers: WhiteboardUser[];
  members: Participant[];
  whiteboardData: WhiteboardData;
}

export interface WhiteboardActionData {
  action: string;
  payload: ShapePayload;
}

export type Shape = Shapes;

export type CreateWebRTCTransportResponse = {
  id: string;
  dtlsParameters: DtlsParameters;
  iceCandidates: IceCandidate[];
  iceParameters: IceParameters;
  error?: string;
};

// Additional types needed by Vue components
export interface PreJoinPageParameters {
  imgSrc?: string;
  showAlert?: ShowAlert;
  updateIsLoadingModalVisible: (visible: boolean) => void;
  connectSocket: any; // ConnectSocketType - avoiding circular dependency
  connectLocalSocket?: any; // ConnectLocalSocketType - avoiding circular dependency
  updateSocket: (socket: Socket) => void;
  updateLocalSocket?: (socket: Socket) => void;
  updateValidated: (validated: boolean) => void;
  updateApiUserName: (userName: string) => void;
  updateApiToken: (token: string) => void;
  updateLink: (link: string) => void;
  updateRoomName: (roomName: string) => void;
  updateMember: (member: string) => void;
}

export interface Credentials {
  apiUserName: string;
  apiKey: string;
}

export interface CreateJoinRoomResponse {
  message: string;
  roomName: string;
  secureCode?: string;
  publicURL: string;
  link: string;
  secret: string;
  success: boolean;
}

export interface CreateJoinRoomError {
  error: string;
  success?: boolean;
}

export interface CreateJoinRoomResult {
  data: CreateJoinRoomResponse | CreateJoinRoomError | null;
  success: boolean;
}

export interface PendingRequestStorage {
  getItem: (key: string) => Promise<string | null>;
  setItem: (key: string, value: string) => Promise<void>;
  removeItem: (key: string) => Promise<void>;
}

export type CreateJoinRoomType = (options: {
  payload: CreateMediaSFURoomOptions | JoinMediaSFURoomOptions;
  apiUserName: string;
  apiKey: string;
  localLink?: string;
}) => Promise<CreateJoinRoomResult>;

export interface CreateRoomOnMediaSFUOptions {
  payload: CreateMediaSFURoomOptions;
  apiUserName: string;
  apiKey: string;
  localLink?: string;
  pendingRequestStorage?: PendingRequestStorage;
}

export type CreateRoomOnMediaSFUType = (
  options: CreateRoomOnMediaSFUOptions,
) => Promise<CreateJoinRoomResult>;

export type JoinRoomOnMediaSFUType = (options: {
  payload: JoinMediaSFURoomOptions;
  apiUserName: string;
  apiKey: string;
  localLink?: string;
}) => Promise<CreateJoinRoomResult>;

export interface WelcomePageParameters {
  imgSrc?: string;
  showAlert?: ShowAlert;
  updateIsLoadingModalVisible: (visible: boolean) => void;
  connectSocket: any; // ConnectSocketType - avoiding circular dependency
  updateSocket: (socket: Socket) => void;
  updateValidated: (validated: boolean) => void;
  updateApiUserName: (apiUserName: string) => void;
  updateApiToken: (apiToken: string) => void;
  updateLink: (link: string) => void;
  updateRoomName: (roomName: string) => void;
  updateMember: (userName: string) => void;
}

export interface PreJoinPageOptions {
  localLink?: string;
  connectMediaSFU?: boolean;
  parameters: PreJoinPageParameters;
  credentials?: Credentials;
  returnUI?: boolean;
  noUIPreJoinOptions?: CreateMediaSFURoomOptions | JoinMediaSFURoomOptions;
  createMediaSFURoom?: CreateRoomOnMediaSFUType;
  joinMediaSFURoom?: JoinRoomOnMediaSFUType;
}

// ResponseLocalConnection types moved to SocketManager.ts to avoid duplicates
// export interface ResponseLocalConnection {
//   socket?: Socket;
//   data?: ResponseLocalConnectionData;
// }

// export interface ResponseLocalConnectionData {
//   socketId: string;
//   mode: string;
//   apiUserName?: string;
//   apiKey?: string;
//   allowRecord: boolean;
//   meetingRoomParams_: MeetingRoomParams;
//   recordingParams_: RecordingParams;
// }

export type SleepType = (options: { ms: number }) => Promise<void>;

// Participant method types
export type MuteParticipantsType = (options: any) => Promise<void>;
export type MessageParticipantsType = (options: any) => void;
export type RemoveParticipantsType = (options: any) => Promise<void>;

// Consumer types - import from consumer-types file

