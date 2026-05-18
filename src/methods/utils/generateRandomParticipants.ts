import type { Participant } from '../../types/shared-base-types';

export interface GenerateRandomParticipantsOptions {
  member: string;
  coHost?: string;
  host: string;
  forChatBroadcast?: boolean;
}

export type GenerateRandomParticipantsType = (
  options: GenerateRandomParticipantsOptions,
) => Participant[];

export const generateRandomParticipants = ({
  member,
  coHost = '',
  host,
  forChatBroadcast = false,
}: GenerateRandomParticipantsOptions): Participant[] => {
  const participants: Participant[] = [];
  let names: string[] = [
    'Alice',
    'Bob',
    'Charlie',
    'David',
    'Eve',
    'Frank',
    'Grace',
    'Hank',
    'Ivy',
    'Jack',
    'Kate',
    'Liam',
    'Mia',
    'Nina',
    'Olivia',
    'Pete',
    'Quinn',
    'Rachel',
    'Steve',
    'Tina',
    'Ursula',
    'Vince',
    'Wendy',
    'Xander',
    'Yvonne',
    'Zack',
  ];

  if (forChatBroadcast) {
    names.splice(2);
  }

  if (!names.includes(member)) {
    names.unshift(member);
  }

  if (!names.includes(coHost) && !forChatBroadcast) {
    names.unshift(coHost);
  }

  if (!names.includes(host)) {
    names.unshift(host);
  }

  if (forChatBroadcast) {
    names.splice(2);
  }

  names = names.filter((name) => name.length > 1);

  const shuffledNames = [...names];
  for (let index = shuffledNames.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffledNames[index], shuffledNames[randomIndex]] = [shuffledNames[randomIndex], shuffledNames[index]];
  }

  let hasLevel2Participant = false;

  for (let index = 0; index < shuffledNames.length; index += 1) {
    const randomName = shuffledNames[index];
    const randomLevel = hasLevel2Participant ? '1' : randomName === host ? '2' : '1';
    const randomMuted = forChatBroadcast ? true : Math.random() < 0.5;

    if (randomLevel === '2') {
      hasLevel2Participant = true;
    }

    participants.push({
      name: randomName,
      islevel: randomLevel,
      muted: randomMuted,
      id: index.toString(),
      audioID: `audio-${index}`,
      videoID: `video-${index}`,
    });
  }

  return participants;
};
