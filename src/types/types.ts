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
export * from '../methods/stream/clickVideo';
// Note: handleCreateRoom, handleJoinRoom, removeParticipants export types that conflict with shared-base-types, so we don't re-export them here

// ProducerClient exports
export * from '../ProducerClient/producerClientEmits/createDeviceClient';

// Producers exports
export * from '../producers/producerEmits/joinConRoom';

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
