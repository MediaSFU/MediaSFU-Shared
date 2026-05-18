import type { Participant } from '../../types/types';

export interface BanParticipantReorderOptions<TParameters = unknown> {
  add?: boolean;
  screenChanged?: boolean;
  parameters: TParameters;
}

export type BanParticipantReorderType<TParameters = unknown> = (
  options: BanParticipantReorderOptions<TParameters>,
) => Promise<void>;

export interface BanParticipantParameters<
  TParameters = unknown,
  TParticipant extends { name?: string | null } = Participant,
> {
  activeNames: string[];
  dispActiveNames: string[];
  participants: TParticipant[];
  updateParticipants: (participants: TParticipant[]) => void;
  reorderStreams: BanParticipantReorderType<TParameters>;
  [key: string]: any;
}

export interface BanParticipantOptions<
  TParameters = unknown,
  TParticipant extends { name?: string | null } = Participant,
> {
  name: string;
  parameters: BanParticipantParameters<TParameters, TParticipant> & TParameters;
}

export type BanParticipantType<
  TParameters = unknown,
  TParticipant extends { name?: string | null } = Participant,
> = (options: BanParticipantOptions<TParameters, TParticipant>) => Promise<void>;

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
export const banParticipant = async <
  TParameters = unknown,
  TParticipant extends { name?: string | null } = Participant,
>({
  name,
  parameters,
}: BanParticipantOptions<TParameters, TParticipant>): Promise<void> => {
  const {
    activeNames,
    dispActiveNames,
    participants,
    updateParticipants,
    reorderStreams,
  } = parameters;

  if (activeNames.includes(name) || dispActiveNames.includes(name)) {
    updateParticipants(
      participants.filter((participant) => participant.name !== name),
    );
    await reorderStreams({ add: false, screenChanged: true, parameters });
  }
};
