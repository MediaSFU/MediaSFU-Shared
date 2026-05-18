import type { Poll } from '../../types/shared-base-types';

export interface GenerateRandomPollsOptions {
  numberOfPolls: number;
}

export type GenerateRandomPollsType = (options: GenerateRandomPollsOptions) => Poll[];

export const generateRandomPolls = ({ numberOfPolls }: GenerateRandomPollsOptions): Poll[] => {
  const pollTypes: string[] = ['trueFalse', 'yesNo', 'custom'];
  const polls: Poll[] = [];

  for (let index = 0; index < numberOfPolls; index += 1) {
    const type = pollTypes[Math.floor(Math.random() * pollTypes.length)];
    let options: string[];

    switch (type) {
      case 'trueFalse':
        options = ['True', 'False'];
        break;
      case 'yesNo':
        options = ['Yes', 'No'];
        break;
      case 'custom':
        options = Array.from({ length: Math.floor(Math.random() * 5) + 2 }, (_, optionIndex) => `Option ${optionIndex + 1}`);
        break;
      default:
        options = [];
    }

    polls.push({
      id: `${index + 1}`,
      question: `Random Question ${index + 1}`,
      type,
      options,
      votes: Array(options.length).fill(0),
      status: 'inactive',
      voters: {},
    });
  }

  return polls;
};
