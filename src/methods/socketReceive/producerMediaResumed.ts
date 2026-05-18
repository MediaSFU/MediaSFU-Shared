import type {
  PrepopulateUserMediaParameters,
  ReorderStreamsParameters,
} from '../../types/types';

export interface ProducerMediaResumedPrepopulateUserMediaOptions<
  TParameters = unknown,
> {
  name: string;
  parameters: TParameters;
}

export type ProducerMediaResumedPrepopulateUserMediaType<
  TParameters = unknown,
> = (
  options: ProducerMediaResumedPrepopulateUserMediaOptions<TParameters>,
) => Promise<unknown>;

export interface ProducerMediaResumedReorderStreamsOptions<
  TParameters = unknown,
> {
  add: boolean;
  screenChanged?: boolean;
  parameters: TParameters;
}

export type ProducerMediaResumedReorderStreamsType<TParameters = unknown> = (
  options: ProducerMediaResumedReorderStreamsOptions<TParameters>,
) => Promise<unknown>;

export interface ProducerMediaResumedParticipantLike {
  name?: string | null;
  islevel?: string | null;
  videoID?: string | null;
}

export interface ProducerMediaResumedParameters<
  TParticipant extends ProducerMediaResumedParticipantLike = ProducerMediaResumedParticipantLike,
  TPrepopulateUserMediaParameters = PrepopulateUserMediaParameters,
  TReorderStreamsParameters = ReorderStreamsParameters,
  TAllParameters extends TPrepopulateUserMediaParameters &
    TReorderStreamsParameters = TPrepopulateUserMediaParameters &
    TReorderStreamsParameters,
> {
  meetingDisplayType: string;
  participants: TParticipant[];
  shared: boolean;
  shareScreenStarted: boolean;
  mainScreenFilled: boolean;
  hostLabel: string;
  updateUpdateMainWindow: (updateMainWindow: boolean) => void;
  reorderStreams: ProducerMediaResumedReorderStreamsType<TReorderStreamsParameters>;
  prepopulateUserMedia: ProducerMediaResumedPrepopulateUserMediaType<TPrepopulateUserMediaParameters>;
  getUpdatedAllParams: () =>
    ProducerMediaResumedParameters<
      TParticipant,
      TPrepopulateUserMediaParameters,
      TReorderStreamsParameters,
      TAllParameters
    > & TAllParameters;
  [key: string]: any;
}

export interface ProducerMediaResumedOptions<
  TParticipant extends ProducerMediaResumedParticipantLike = ProducerMediaResumedParticipantLike,
  TPrepopulateUserMediaParameters = PrepopulateUserMediaParameters,
  TReorderStreamsParameters = ReorderStreamsParameters,
  TAllParameters extends TPrepopulateUserMediaParameters &
    TReorderStreamsParameters = TPrepopulateUserMediaParameters &
    TReorderStreamsParameters,
> {
  name: string;
  kind: 'audio';
  parameters:
    ProducerMediaResumedParameters<
      TParticipant,
      TPrepopulateUserMediaParameters,
      TReorderStreamsParameters,
      TAllParameters
    > & TAllParameters;
}

export type ProducerMediaResumedType<
  TParticipant extends ProducerMediaResumedParticipantLike = ProducerMediaResumedParticipantLike,
  TPrepopulateUserMediaParameters = PrepopulateUserMediaParameters,
  TReorderStreamsParameters = ReorderStreamsParameters,
  TAllParameters extends TPrepopulateUserMediaParameters &
    TReorderStreamsParameters = TPrepopulateUserMediaParameters &
    TReorderStreamsParameters,
> = (
  options: ProducerMediaResumedOptions<
    TParticipant,
    TPrepopulateUserMediaParameters,
    TReorderStreamsParameters,
    TAllParameters
  >,
) => Promise<void>;

/**
 * Restores paused producer media state and refills the main window when needed.
 *
 * @param {ProducerMediaResumedOptions} options - Producer identity and shared room/media callbacks.
 * @returns {Promise<void>} Resolves once the resumed-media UI state is synchronized.
 *
 * @example
 * ```typescript
 * await producerMediaResumed({
 *   name: 'John Doe',
 *   kind: 'audio',
 *   parameters,
 * });
 * ```
 */
export const producerMediaResumed = async <
  TParticipant extends ProducerMediaResumedParticipantLike = ProducerMediaResumedParticipantLike,
  TPrepopulateUserMediaParameters = PrepopulateUserMediaParameters,
  TReorderStreamsParameters = ReorderStreamsParameters,
  TAllParameters extends TPrepopulateUserMediaParameters &
    TReorderStreamsParameters = TPrepopulateUserMediaParameters &
    TReorderStreamsParameters,
>({
  name,
  parameters,
}: ProducerMediaResumedOptions<
  TParticipant,
  TPrepopulateUserMediaParameters,
  TReorderStreamsParameters,
  TAllParameters
>): Promise<void> => {
  const {
    meetingDisplayType,
    participants,
    shared,
    shareScreenStarted,
    mainScreenFilled,
    hostLabel,
    updateUpdateMainWindow,
    reorderStreams,
    prepopulateUserMedia,
  } = parameters;

  const participant = participants.find((item) => item.name === name);

  if (participant && !mainScreenFilled && participant.islevel === '2') {
    updateUpdateMainWindow(true);
    await prepopulateUserMedia({ name: hostLabel, parameters });
    updateUpdateMainWindow(false);
  }

  if (meetingDisplayType === 'media' && participant) {
    const hasVideo = participant.videoID !== null && participant.videoID !== '';

    if (!hasVideo && !(shareScreenStarted || shared)) {
      await reorderStreams({ add: false, screenChanged: true, parameters });
    }
  }
};
