import type { WaitingRoomParticipant } from '../../types/shared-base-types';

export type GenerateRandomWaitingRoomListType = () => WaitingRoomParticipant[];

export const generateRandomWaitingRoomList = (): WaitingRoomParticipant[] => {
  const names = ['Dimen', 'Nore', 'Ker', 'Lor', 'Mik'];

  const waitingRoomList: WaitingRoomParticipant[] = [];
  for (let index = 0; index < names.length; index += 1) {
    waitingRoomList.push({
      name: names[index],
      id: index.toString(),
    });
  }

  return waitingRoomList;
};
