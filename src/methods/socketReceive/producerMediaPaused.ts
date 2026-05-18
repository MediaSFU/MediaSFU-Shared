import type {
  PrepopulateUserMediaParameters,
  ReorderStreamsParameters,
  ReUpdateInterParameters,
} from '../../types/types';

export interface ProducerMediaPausedPrepopulateUserMediaOptions<
  TParameters = unknown,
> {
  name: string;
  parameters: TParameters;
}

export type ProducerMediaPausedPrepopulateUserMediaType<
  TParameters = unknown,
> = (
  options: ProducerMediaPausedPrepopulateUserMediaOptions<TParameters>,
) => Promise<unknown>;

export interface ProducerMediaPausedReorderStreamsOptions<
  TParameters = unknown,
> {
  add: boolean;
  screenChanged?: boolean;
  parameters: TParameters;
}

export type ProducerMediaPausedReorderStreamsType<TParameters = unknown> = (
  options: ProducerMediaPausedReorderStreamsOptions<TParameters>,
) => Promise<unknown>;

export interface ProducerMediaPausedReUpdateInterOptions<
  TParameters = unknown,
> {
  name: string;
  add: boolean;
  force?: boolean;
  parameters: TParameters;
}

export type ProducerMediaPausedReUpdateInterType<TParameters = unknown> = (
  options: ProducerMediaPausedReUpdateInterOptions<TParameters>,
) => Promise<unknown>;

export interface ProducerMediaPausedParticipantLike {
  name?: string | null;
  muted?: boolean;
  islevel?: string | null;
  videoID?: string | null;
  audioID?: string | null;
}

export interface ProducerMediaPausedParameters<
  TParticipant extends ProducerMediaPausedParticipantLike = ProducerMediaPausedParticipantLike,
  TPrepopulateUserMediaParameters = PrepopulateUserMediaParameters,
  TReorderStreamsParameters = ReorderStreamsParameters,
  TReUpdateInterParameters = ReUpdateInterParameters,
  TAllParameters extends TPrepopulateUserMediaParameters &
    TReorderStreamsParameters &
    TReUpdateInterParameters = TPrepopulateUserMediaParameters &
    TReorderStreamsParameters &
    TReUpdateInterParameters,
>
  {
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
  getUpdatedAllParams: () =>
    ProducerMediaPausedParameters<
      TParticipant,
      TPrepopulateUserMediaParameters,
      TReorderStreamsParameters,
      TReUpdateInterParameters,
      TAllParameters
    > & TAllParameters;
  [key: string]: any;
}

export interface ProducerMediaPausedOptions<
  TParticipant extends ProducerMediaPausedParticipantLike = ProducerMediaPausedParticipantLike,
  TPrepopulateUserMediaParameters = PrepopulateUserMediaParameters,
  TReorderStreamsParameters = ReorderStreamsParameters,
  TReUpdateInterParameters = ReUpdateInterParameters,
  TAllParameters extends TPrepopulateUserMediaParameters &
    TReorderStreamsParameters &
    TReUpdateInterParameters = TPrepopulateUserMediaParameters &
    TReorderStreamsParameters &
    TReUpdateInterParameters,
> {
  producerId: string;
  kind: 'audio' | 'video' | 'screenshare' | 'screen';
  name: string;
  parameters:
    ProducerMediaPausedParameters<
      TParticipant,
      TPrepopulateUserMediaParameters,
      TReorderStreamsParameters,
      TReUpdateInterParameters,
      TAllParameters
    > & TAllParameters;
}

export type ProducerMediaPausedType<
  TParticipant extends ProducerMediaPausedParticipantLike = ProducerMediaPausedParticipantLike,
  TPrepopulateUserMediaParameters = PrepopulateUserMediaParameters,
  TReorderStreamsParameters = ReorderStreamsParameters,
  TReUpdateInterParameters = ReUpdateInterParameters,
  TAllParameters extends TPrepopulateUserMediaParameters &
    TReorderStreamsParameters &
    TReUpdateInterParameters = TPrepopulateUserMediaParameters &
    TReorderStreamsParameters &
    TReUpdateInterParameters,
> = (
  options: ProducerMediaPausedOptions<
    TParticipant,
    TPrepopulateUserMediaParameters,
    TReorderStreamsParameters,
    TReUpdateInterParameters,
    TAllParameters
  >,
) => Promise<void>;

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
export const producerMediaPaused = async <
  TParticipant extends ProducerMediaPausedParticipantLike = ProducerMediaPausedParticipantLike,
  TPrepopulateUserMediaParameters = PrepopulateUserMediaParameters,
  TReorderStreamsParameters = ReorderStreamsParameters,
  TReUpdateInterParameters = ReUpdateInterParameters,
  TAllParameters extends TPrepopulateUserMediaParameters &
    TReorderStreamsParameters &
    TReUpdateInterParameters = TPrepopulateUserMediaParameters &
    TReorderStreamsParameters &
    TReUpdateInterParameters,
>({
  producerId,
  kind,
  name,
  parameters,
}: ProducerMediaPausedOptions<
  TParticipant,
  TPrepopulateUserMediaParameters,
  TReorderStreamsParameters,
  TReUpdateInterParameters,
  TAllParameters
>): Promise<void> => {
  parameters = parameters.getUpdatedAllParams();

  let {
    activeSounds,
    meetingDisplayType,
    meetingVideoOptimized,
    participants,
    oldSoundIds,
    shared,
    shareScreenStarted,
    updateMainWindow,
    hostLabel,
    islevel,
    updateActiveSounds,
    updateUpdateMainWindow,
    reorderStreams,
    prepopulateUserMedia,
    reUpdateInter,
  } = parameters;

  await Promise.all(
    participants.map(async (participant) => {
      if (participant.muted) {
        try {
          if (
            participant.islevel === '2' &&
            !participant.videoID &&
            !shared &&
            !shareScreenStarted &&
            islevel !== '2'
          ) {
            updateMainWindow = true;
            updateUpdateMainWindow(updateMainWindow);
            await prepopulateUserMedia({ name: hostLabel, parameters });
            updateMainWindow = false;
            updateUpdateMainWindow(updateMainWindow);
          }
        } catch {
          // no-op
        }

        if (shareScreenStarted || shared) {
          if (participant.name && activeSounds.includes(participant.name)) {
            activeSounds = activeSounds.filter(
              (audioStream) => audioStream !== participant.name,
            );
            updateActiveSounds(activeSounds);
          }

          reUpdateInter({
            name: participant.name!,
            add: false,
            force: true,
            parameters,
          });
        }
      }
    }),
  );

  if (
    meetingDisplayType === 'media' ||
    (meetingDisplayType === 'video' && !meetingVideoOptimized)
  ) {
    const participant = participants.find((item) => item.name === name);
    const hasVideo = participant?.videoID !== null && participant?.videoID !== '';

    if (!hasVideo && !(shareScreenStarted || shared)) {
      await reorderStreams({ add: false, screenChanged: true, parameters });
    }
  }

  if (kind === 'audio') {
    try {
      const participant =
        participants.find((item) => item.audioID === producerId) ||
        participants.find((item) => item.name === name);

      if (
        participant &&
        ((participant.name && oldSoundIds.includes(participant.name)) ||
          (name && oldSoundIds.includes(name)))
      ) {
        reUpdateInter({
          name: participant.name!,
          add: false,
          force: true,
          parameters,
        });
      }
    } catch {
      // no-op
    }
  }
};
