import type { Participant, Request } from '../../types/shared-base-types';

export interface GenerateRandomRequestListOptions {
  participants: Participant[];
  hostName: string;
  coHostName?: string;
  numberOfRequests: number;
}

export type GenerateRandomRequestListType = (options: GenerateRandomRequestListOptions) => Request[];

export const generateRandomRequestList = ({
  participants,
  hostName,
  coHostName,
  numberOfRequests,
}: GenerateRandomRequestListOptions): Request[] => {
  const filteredParticipants = participants.filter(
    (participant) => participant.name !== hostName && participant.name !== coHostName,
  );

  const requestIcons = ['fa-video', 'fa-desktop', 'fa-microphone'];

  for (let index = requestIcons.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [requestIcons[index], requestIcons[randomIndex]] = [requestIcons[randomIndex], requestIcons[index]];
  }

  return filteredParticipants.flatMap((participant) => {
    const uniqueIcons = new Set<string>();
    const requests: Request[] = [];

    for (let index = 0; index < numberOfRequests; index += 1) {
      let randomIcon: string;
      do {
        randomIcon = requestIcons[Math.floor(Math.random() * requestIcons.length)];
      } while (uniqueIcons.has(randomIcon));

      uniqueIcons.add(randomIcon);

      requests.push({
        id: participant.id || '',
        name: participant.name ? participant.name.toLowerCase().replace(/\s/g, '_') : '',
        icon: randomIcon,
        username: participant.name ? participant.name.toLowerCase().replace(/\s/g, '_') : '',
      });
    }

    return requests;
  });
};
