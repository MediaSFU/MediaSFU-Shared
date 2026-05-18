import { Socket } from 'socket.io-client';
import {
  JoinMediaSFURoomOptions,
  PreJoinPageParameters,
  ResponseJoinLocalRoom,
} from '../../types/shared-base-types';
import { validateAlphanumeric } from '../../methods/utils/validateAlphanumeric';
import { joinRoomOnMediaSFU, JoinRoomOnMediaSFUType } from '../../methods/utils/joinRoomOnMediaSFU';
import { checkLimitsAndMakeRequest } from '../../methods/utils/checkLimitsAndMakeRequest';

export interface JoinLocalRoomOptions {
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

export type JoinLocalRoomType = (
  options: JoinLocalRoomOptions,
) => Promise<ResponseJoinLocalRoom>;

export interface CheckMediasfuURLOptions {
  data: ResponseJoinLocalRoom;
  member: string;
  roomName: string;
  islevel: string;
  socket: Socket;
  parameters: PreJoinPageParameters;
  joinMediaSFURoom?: JoinRoomOnMediaSFUType;
  localLink?: string;
}

export type CheckMediasfuURLType = (options: CheckMediasfuURLOptions) => Promise<void>;

export async function checkMediasfuURL({
  data,
  member,
  roomName,
  islevel,
  socket,
  parameters,
  joinMediaSFURoom = joinRoomOnMediaSFU,
  localLink = '',
}: CheckMediasfuURLOptions): Promise<void> {
  if (
    data.mediasfuURL
    && data.mediasfuURL !== ''
    && data.mediasfuURL.length > 10
  ) {
    let link;
    let secretCode;

    try {
      const splitTexts = ['/meet/', '/chat/', '/broadcast/'];
      const splitText = splitTexts.find((text) => data.mediasfuURL.includes(text)) || '/meet/';

      const urlParts = data.mediasfuURL.split(splitText);
      link = urlParts[0];
      secretCode = urlParts[1].split('/')[1];
    } catch {
      link = data.mediasfuURL;
      return;
    }

    await checkLimitsAndMakeRequest({
      apiUserName: roomName,
      apiToken: secretCode,
      link,
      apiKey: '',
      userName: member,
      parameters,
      validate: false,
    });

    return;
  }

  if (
    (!data.mediasfuURL || data.mediasfuURL.length < 10)
    && islevel !== '2'
    && data.allowRecord
    && (data.allowRecord === true || data.allowRecord === 'true')
    && data.apiKey
    && data.apiKey.length === 64
    && data.apiUserName
    && data.apiUserName.length > 5
    && (roomName.startsWith('s') || roomName.startsWith('p'))
  ) {
    const payload: JoinMediaSFURoomOptions = {
      action: 'join',
      meetingID: roomName,
      userName: member,
    };

    const response = await joinMediaSFURoom({
      payload,
      apiKey: data.apiKey,
      apiUserName: data.apiUserName,
      localLink,
    });

    if (response.success && response.data && 'roomName' in response.data) {
      try {
        socket.emit(
          'updateMediasfuURL',
          { eventID: roomName, mediasfuURL: response.data.publicURL },
          async () => {},
        );
      } catch {
        // Do nothing
      }

      await checkLimitsAndMakeRequest({
        apiUserName: response.data.roomName,
        apiToken: response.data.secret,
        link: response.data.link,
        userName: member,
        parameters,
        validate: false,
      });
      parameters.updateApiToken(response.data.secret);
    }
  }
}

export async function joinLocalRoom({
  socket,
  roomName,
  islevel,
  member,
  sec,
  apiUserName,
  parameters,
  checkConnect = false,
  joinMediaSFURoom = joinRoomOnMediaSFU,
  localLink = '',
}: JoinLocalRoomOptions): Promise<ResponseJoinLocalRoom> {
  return new Promise((resolve, reject) => {
    if (!(sec && roomName && islevel && apiUserName && member)) {
      const validationError = {
        success: false,
        rtpCapabilities: null,
        reason: 'Missing required parameters',
      };
      reject(validationError);
      return;
    }

    try {
      validateAlphanumeric({ str: roomName });
      validateAlphanumeric({ str: apiUserName });
      validateAlphanumeric({ str: member });
    } catch {
      const validationError = {
        success: false,
        rtpCapabilities: null,
        reason: 'Invalid roomName or apiUserName or member',
      };
      reject(validationError);
      return;
    }

    if (!(roomName.startsWith('s') || roomName.startsWith('p') || roomName.startsWith('m') || roomName.startsWith('d'))) {
      const validationError = {
        success: false,
        rtpCapabilities: null,
        reason: 'Invalid roomName, must start with s or p or m or d',
      };
      reject(validationError);
      return;
    }

    if (
      !(
        sec.length === 32
        && roomName.length >= 8
        && islevel.length === 1
        && apiUserName.length >= 6
        && (islevel === '0' || islevel === '1' || islevel === '2')
      )
    ) {
      const validationError = {
        success: false,
        rtpCapabilities: null,
        reason: 'Invalid roomName or islevel or apiUserName or secret',
      };
      reject(validationError);
      return;
    }

    socket.emit(
      'joinRoom',
      { roomName, islevel, member, sec, apiUserName },
      async (data: ResponseJoinLocalRoom) => {
        try {
          if (data.rtpCapabilities === null) {
            if (data.isBanned) {
              throw new Error('User is banned.');
            }
            if (data.hostNotJoined) {
              throw new Error('Host has not joined the room yet.');
            }

            resolve(data);
          } else {
            if (checkConnect) {
              await checkMediasfuURL({
                data,
                member,
                roomName,
                islevel,
                socket,
                parameters,
                joinMediaSFURoom,
                localLink,
              });
            } else if (data.mediasfuURL && data.mediasfuURL !== '' && data.mediasfuURL.length > 10) {
              const splitTexts = ['/meet/', '/chat/', '/broadcast/'];
              const splitText = splitTexts.find((text) => data.mediasfuURL.includes(text)) || '/meet/';
              const urlParts = data.mediasfuURL.split(splitText);
              const secretCode = urlParts[1].split('/')[1];
              parameters.updateApiToken(secretCode);
            }

            resolve(data);
          }
        } catch (error) {
          console.log('Error joining room:', error);
          reject(error);
        }
      },
    );
  });
}