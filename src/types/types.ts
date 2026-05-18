// Re-export all base types from shared-base-types (SharedTypes)
export * from './shared-base-types';

// Consumer exports
export * from '../consumers/addVideosGrid';
export * from '../consumers/consumerResume';
export * from '../consumers/changeVids';
export * from '../consumers/checkScreenShare';
export * from '../consumers/closeAndResize';
export * from '../consumers/compareActiveNames';
export * from '../consumers/compareScreenStates';
export * from '../consumers/connectIps';
export * from '../consumers/connectLocalIps';
export * from '../consumers/connectRecvTransport';
export * from '../consumers/connectSendTransport';
export * from '../consumers/connectSendTransportAudio';
export * from '../consumers/connectSendTransportScreen';
export * from '../consumers/connectSendTransportVideo';
export * from '../consumers/createSendTransport';
export * from '../consumers/disconnectSendTransportAudio';
export * from '../consumers/disconnectSendTransportScreen';
export * from '../consumers/disconnectSendTransportVideo';
export * from '../consumers/dispStreams';
export * from '../consumers/generatePageContent';
export * from '../consumers/getVideos';
export * from '../consumers/mixStreams';
export * from '../consumers/onScreenChanges';
export * from '../consumers/prepopulateUserMedia';
export * from '../consumers/processConsumerTransports';
export * from '../consumers/processConsumerTransportsAudio';
export * from '../consumers/readjust';
export * from '../consumers/receiveAllPipedTransports';
export * from '../consumers/reorderStreams';
export * from '../consumers/rePort';
export * from '../consumers/requestScreenShare';
export * from '../consumers/resumePauseAudioStreams';
export * from '../consumers/resumePauseStreams';
export * from '../consumers/reUpdateInter';
export * from '../consumers/signalNewConsumerTransport';
export * from '../consumers/startShareScreen';
export * from '../consumers/stopShareScreen';
export * from '../consumers/streamSuccessAudio';
export * from '../consumers/streamSuccessAudioSwitch';
export * from '../consumers/streamSuccessScreen';
export * from '../consumers/streamSuccessVideo';
export * from '../consumers/switchUserAudio';
export * from '../consumers/switchUserVideo';
export * from '../consumers/switchUserVideoAlt';
export * from '../consumers/trigger';

// Socket receive method exports
export * from '../consumers/socketReceiveMethods/joinConsumeRoom';
export * from '../consumers/socketReceiveMethods/newPipeProducer';
export * from '../consumers/socketReceiveMethods/producerClosed';

// Method exports from shared (excluding ones that duplicate shared-base-types)
export * from '../methods/breakoutRooms/breakoutRoomUpdated';
export * from '../methods/settings/modifySettings';
export * from '../methods/utils/checkLimitsAndMakeRequest';
export * from '../methods/requests/hostRequestResponse';
export * from '../methods/stream/clickAudio';
export * from '../methods/stream/clickScreenShare';
export * from '../methods/stream/clickVideo';
export * from '../methods/recording/timeLeftRecording';
export * from '../methods/whiteboard/captureCanvasStream';
// Note: handleCreateRoom, handleJoinRoom, removeParticipants export types that conflict with shared-base-types, so we don't re-export them here

// ProducerClient exports
export * from '../ProducerClient/producerClientEmits/createDeviceClient';
export * from '../ProducerClient/producerClientEmits/joinRoomClient';
export * from '../ProducerClient/producerClientEmits/updateRoomParametersClient';

// Producers exports
export * from '../producers/producerEmits/joinConRoom';
export * from '../producers/producerEmits/joinLocalRoom';
export * from '../producers/producerEmits/joinRoom';

// Socket Manager types (re-export explicitly to avoid function exports)
export type { ResponseLocalConnection, ResponseLocalConnectionData, ConnectSocketType, ConnectLocalSocketType, DisconnectSocketType } from '../sockets/SocketManager';

// Additional consumer exports
export * from '../consumers/autoAdjust';
export * from '../consumers/calculateRowsAndColumns';
export * from '../consumers/checkGrid';
export * from '../consumers/checkPermission';
export * from '../consumers/controlMedia';
export * from '../consumers/getEstimate';
export * from '../consumers/getPipedProducersAlt';
export * from '../consumers/getProducersPiped';
export * from '../consumers/receiveRoomMessages';
export * from '../consumers/resumeSendTransportAudio';
export * from '../consumers/updateMiniCardsGrid';
export * from '../consumers/updateParticipantAudioDecibels';
export type {
	LiveSubtitle,
	TranslationTranscriptData,
	UpdateLiveSubtitlesOptions,
} from '../methods/utils/liveSubtitle';
export type {
	CreateJoinRoomError,
	CreateJoinRoomResponse,
	CreateJoinRoomType,
	JoinRoomOnMediaSFUType,
} from '../methods/utils/joinRoomOnMediaSFU';
export type { CreateResponseJoinRoomOptions } from '../methods/utils/createResponseJoinRoom';
export type {
	SoundPlayerOptions,
	SoundPlayerType,
} from '../methods/utils/SoundPlayer';
export type { FormatNumberOptions } from '../methods/utils/formatNumber';
export type {
	GetOverlayPositionOptions,
	GetOverlayPositionType,
} from '../methods/utils/getOverlayPosition';
export type {
	GetModalPositionOptions,
	GetModalPositionType,
} from '../methods/utils/getModalPosition';
export type { ClickChatOptions, ClickChatType } from '../methods/stream/clickChat';
export type { PollUpdatedOptions, PollUpdatedType } from '../methods/polls/pollUpdated';
export type {
	BulkUpdateParticipantPermissionsOptions,
	PermissionLevel,
	UpdateParticipantPermissionOptions,
} from '../methods/permissions/updateParticipantPermission';
export type { SleepOptions, SleepType } from '../methods/utils/sleep';
export type {
	ValidateAlphanumericOptions,
	ValidateAlphanumericType,
} from '../methods/utils/validateAlphanumeric';
export type {
	StartMeetingProgressTimerOptions,
	StartMeetingProgressTimerParameters,
	StartMeetingProgressTimerType,
} from '../methods/utils/meetingTimer/startMeetingProgressTimer';
export type {
	MeetingTimeRemainingOptions,
	MeetingTimeRemainingType,
} from '../methods/utils/meetingTimeRemaining';
export type {
	AllWaitingRoomMembersOptions,
	AllWaitingRoomMembersType,
} from '../methods/socketReceive/allWaitingRoomMembers';
export type {
	AllMembersOptions,
	AllMembersParameters,
	AllMembersType,
} from '../methods/socketReceive/allMembers';
export type {
	AllMembersRestOptions,
	AllMembersRestParameters,
	AllMembersRestType,
} from '../methods/socketReceive/allMembersRest';
export type {
	BanParticipantOptions,
	BanParticipantParameters,
	BanParticipantType,
} from '../methods/socketReceive/banParticipant';
export type {
	ControlMediaHostOptions,
	ControlMediaHostParameters,
	ControlMediaHostType,
} from '../methods/socketReceive/controlMediaHost';
export type {
	DisconnectOptions,
	DisconnectType,
} from '../methods/socketReceive/disconnect';
export type {
	DisconnectUserSelfOptions,
	DisconnectUserSelfType,
} from '../methods/socketReceive/disconnectUserSelf';
export type {
	GetDomainsOptions,
	GetDomainsParameters,
	GetDomainsType,
} from '../methods/socketReceive/getDomains';
export type {
	HostRequestResponseOptions,
	HostRequestResponseType,
} from '../methods/requests/hostRequestResponse';
export type {
	MeetingEndedOptions,
	MeetingEndedType,
} from '../methods/socketReceive/meetingEnded';
export type {
	AddedAsPanelistOptions,
	AddedAsPanelistType,
	ControlMediaData,
	ControlMediaOptions,
	ControlMediaType,
	PanelistData,
	PanelistFocusChangedData,
	PanelistFocusChangedOptions,
	PanelistFocusChangedType,
	PanelistsUpdatedData,
	PanelistsUpdatedOptions,
	PanelistsUpdatedType,
	RemovedFromPanelistsOptions,
	RemovedFromPanelistsType,
} from '../methods/socketReceive/panelistReceiveMethods';
export type {
	MeetingStillThereOptions,
	MeetingStillThereType,
} from '../methods/socketReceive/meetingStillThere';
export type {
	ParticipantRequestedOptions,
	ParticipantRequestedType,
} from '../methods/socketReceive/participantRequested';
export type {
	PermissionConfigUpdatedData,
	PermissionConfigUpdatedOptions,
	PermissionConfigUpdatedType,
	PermissionUpdatedData,
	PermissionUpdatedOptions,
	PermissionUpdatedType,
} from '../methods/socketReceive/permissionReceiveMethods';
export type {
	PersonJoinedOptions,
	PersonJoinedType,
} from '../methods/socketReceive/personJoined';
export type {
	ProducerMediaClosedOptions,
	ProducerMediaClosedParameters,
	ProducerMediaClosedType,
} from '../methods/socketReceive/producerMediaClosed';
export type {
	ProducerMediaPausedOptions,
	ProducerMediaPausedParameters,
	ProducerMediaPausedType,
} from '../methods/socketReceive/producerMediaPaused';
export type {
	ProducerMediaResumedOptions,
	ProducerMediaResumedParameters,
	ProducerMediaResumedType,
} from '../methods/socketReceive/producerMediaResumed';
export type {
	ReceiveMessageOptions,
	ReceiveMessageType,
} from '../methods/socketReceive/receiveMessage';
export type {
	RecordingNoticeOptions,
	RecordingNoticeParameters,
	RecordingNoticeType,
} from '../methods/socketReceive/recordingNotice';
export type {
	ReInitiateRecordingOptions,
	ReInitiateRecordingType,
} from '../methods/socketReceive/reInitiateRecording';
export type {
	RecordParams,
	RoomRecordParamsOptions,
	RoomRecordParamsParameters,
	RoomRecordParamsType,
} from '../methods/socketReceive/roomRecordParams';
export type {
	ScreenProducerIdOptions,
	ScreenProducerIdType,
} from '../methods/socketReceive/screenProducerId';
export type {
	StartRecordsOptions,
	StartRecordsType,
} from '../methods/socketReceive/startRecords';
export type {
	StoppedRecordingOptions,
	StoppedRecordingType,
} from '../methods/socketReceive/stoppedRecording';
export type {
	LanguageEntry,
	LanguageMode,
	TranslationChannelsAvailableData,
	TranslationChannelsAvailableOptions,
	TranslationChannelsAvailableType,
	TranslationConfigUpdatedData,
	TranslationConfigUpdatedOptions,
	TranslationConfigUpdatedType,
	TranslationErrorData,
	TranslationErrorOptions,
	TranslationErrorType,
	TranslationLanguageSetData,
	TranslationLanguageSetOptions,
	TranslationLanguageSetType,
	TranslationMemberStateData,
	TranslationMemberStateOptions,
	TranslationMemberStateType,
	TranslationProducerClosedData,
	TranslationProducerClosedOptions,
	TranslationProducerClosedType,
	TranslationProducerMap,
	TranslationProducerReadyData,
	TranslationProducerReadyOptions,
	TranslationProducerReadyType,
	TranslationRoomConfig,
	TranslationRoomConfigData,
	TranslationRoomConfigOptions,
	TranslationRoomConfigType,
	TranslationSpeakerOutputChangedData,
	TranslationSpeakerOutputChangedOptions,
	TranslationSpeakerOutputChangedType,
	TranslationSubscribedData,
	TranslationSubscribedOptions,
	TranslationSubscribedType,
	TranslationTranscriptOptions,
	TranslationTranscriptType,
	TranslationUnsubscribedData,
	TranslationUnsubscribedOptions,
	TranslationUnsubscribedType,
} from '../methods/socketReceive/translationReceiveMethods';
export type {
	TimeLeftRecordingOptions,
	TimeLeftRecordingType,
} from '../methods/recording/timeLeftRecording';
export type {
	UpdateMediaSettingsOptions,
	UpdateMediaSettingsType,
} from '../methods/socketReceive/updateMediaSettings';
export type {
	UpdateConsumingDomainsOptions,
	UpdateConsumingDomainsParameters,
	UpdateConsumingDomainsType,
} from '../methods/socketReceive/updateConsumingDomains';
export type {
	UpdatedCoHostOptions,
	UpdatedCoHostType,
} from '../methods/socketReceive/updatedCoHost';
export type {
	UserWaitingOptions,
	UserWaitingType,
} from '../methods/socketReceive/userWaiting';
export type {
	LanguageMetadata,
	LanguageOption,
	LanguageRegion,
	TranslationLanguageEntry,
	TranslationVoiceConfig,
	TTSSupport,
	VoiceGender,
	VoiceOption,
	VoiceSelectionPreference,
} from '../methods/utils/translationLanguages';
