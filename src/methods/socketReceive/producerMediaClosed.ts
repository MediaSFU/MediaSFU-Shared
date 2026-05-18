import type {
  CloseAndResizeParameters,
  PrepopulateUserMediaParameters,
  ReorderStreamsParameters,
} from '../../types/types';

export interface ProducerMediaClosedCloseAndResizeOptions<TParameters = unknown> {
  producerId: string;
  kind: 'video' | 'screen' | 'audio' | 'screenshare';
  parameters: TParameters;
}

export type ProducerMediaClosedCloseAndResizeType<TParameters = unknown> = (
  options: ProducerMediaClosedCloseAndResizeOptions<TParameters>,
) => Promise<unknown>;

export interface ProducerMediaClosedPrepopulateUserMediaOptions<
  TParameters = unknown,
> {
  name: string;
  parameters: TParameters;
}

export type ProducerMediaClosedPrepopulateUserMediaType<
  TParameters = unknown,
> = (
  options: ProducerMediaClosedPrepopulateUserMediaOptions<TParameters>,
) => Promise<unknown>;

export interface ProducerMediaClosedReorderStreamsOptions<
  TParameters = unknown,
> {
  add: boolean;
  screenChanged?: boolean;
  parameters: TParameters;
}

export type ProducerMediaClosedReorderStreamsType<TParameters = unknown> = (
  options: ProducerMediaClosedReorderStreamsOptions<TParameters>,
) => Promise<unknown>;

export interface ProducerMediaClosedTransportLike {
  producerId: string;
  consumerTransport?: {
    close: () => Promise<void> | void;
  };
  consumer: {
    close: () => Promise<void> | void;
  };
  [key: string]: any;
}

export interface ProducerMediaClosedParameters<
  TTransport extends ProducerMediaClosedTransportLike = ProducerMediaClosedTransportLike,
  TCloseAndResizeParameters = CloseAndResizeParameters,
  TPrepopulateUserMediaParameters = PrepopulateUserMediaParameters,
  TReorderStreamsParameters = ReorderStreamsParameters,
  TAllParameters extends TCloseAndResizeParameters &
    TPrepopulateUserMediaParameters &
    TReorderStreamsParameters = TCloseAndResizeParameters &
    TPrepopulateUserMediaParameters &
    TReorderStreamsParameters,
> {
  consumerTransports: TTransport[];
  updateConsumerTransports: (transports: TTransport[]) => void;
  hostLabel: string;
  shared: boolean;
  updateShared: (shared: boolean) => void;
  updateShareScreenStarted: (started: boolean) => void;
  updateScreenId: (screenId: string) => void;
  updateShareEnded: (ended: boolean) => void;
  closeAndResize: ProducerMediaClosedCloseAndResizeType<TCloseAndResizeParameters>;
  prepopulateUserMedia: ProducerMediaClosedPrepopulateUserMediaType<TPrepopulateUserMediaParameters>;
  reorderStreams: ProducerMediaClosedReorderStreamsType<TReorderStreamsParameters>;
  getUpdatedAllParams: () =>
    ProducerMediaClosedParameters<
      TTransport,
      TCloseAndResizeParameters,
      TPrepopulateUserMediaParameters,
      TReorderStreamsParameters,
      TAllParameters
    > & TAllParameters;
  [key: string]: any;
}

export interface ProducerMediaClosedOptions<
  TTransport extends ProducerMediaClosedTransportLike = ProducerMediaClosedTransportLike,
  TCloseAndResizeParameters = CloseAndResizeParameters,
  TPrepopulateUserMediaParameters = PrepopulateUserMediaParameters,
  TReorderStreamsParameters = ReorderStreamsParameters,
  TAllParameters extends TCloseAndResizeParameters &
    TPrepopulateUserMediaParameters &
    TReorderStreamsParameters = TCloseAndResizeParameters &
    TPrepopulateUserMediaParameters &
    TReorderStreamsParameters,
> {
  producerId: string;
  kind: 'video' | 'screen' | 'audio' | 'screenshare';
  parameters:
    ProducerMediaClosedParameters<
      TTransport,
      TCloseAndResizeParameters,
      TPrepopulateUserMediaParameters,
      TReorderStreamsParameters,
      TAllParameters
    > & TAllParameters;
}

export type ProducerMediaClosedType<
  TTransport extends ProducerMediaClosedTransportLike = ProducerMediaClosedTransportLike,
  TCloseAndResizeParameters = CloseAndResizeParameters,
  TPrepopulateUserMediaParameters = PrepopulateUserMediaParameters,
  TReorderStreamsParameters = ReorderStreamsParameters,
  TAllParameters extends TCloseAndResizeParameters &
    TPrepopulateUserMediaParameters &
    TReorderStreamsParameters = TCloseAndResizeParameters &
    TPrepopulateUserMediaParameters &
    TReorderStreamsParameters,
> = (
  options: ProducerMediaClosedOptions<
    TTransport,
    TCloseAndResizeParameters,
    TPrepopulateUserMediaParameters,
    TReorderStreamsParameters,
    TAllParameters
  >,
) => Promise<void>;

/**
 * Tears down a producer consumer transport and reconciles shared screen state when a producer closes.
 *
 * @param {ProducerMediaClosedOptions} options - Producer identity and shared room/media callbacks.
 * @returns {Promise<void>} Resolves once transport teardown and UI cleanup are complete.
 *
 * @example
 * ```typescript
 * await producerMediaClosed({
 *   producerId: '12345',
 *   kind: 'screenshare',
 *   parameters,
 * });
 * ```
 */
export const producerMediaClosed = async <
  TTransport extends ProducerMediaClosedTransportLike = ProducerMediaClosedTransportLike,
  TCloseAndResizeParameters = CloseAndResizeParameters,
  TPrepopulateUserMediaParameters = PrepopulateUserMediaParameters,
  TReorderStreamsParameters = ReorderStreamsParameters,
  TAllParameters extends TCloseAndResizeParameters &
    TPrepopulateUserMediaParameters &
    TReorderStreamsParameters = TCloseAndResizeParameters &
    TPrepopulateUserMediaParameters &
    TReorderStreamsParameters,
>({
  producerId,
  kind,
  parameters,
}: ProducerMediaClosedOptions<
  TTransport,
  TCloseAndResizeParameters,
  TPrepopulateUserMediaParameters,
  TReorderStreamsParameters,
  TAllParameters
>): Promise<void> => {
  const updatedParameters = parameters.getUpdatedAllParams();

  const {
    consumerTransports,
    updateConsumerTransports,
    hostLabel,
    shared,
    updateShared,
    updateShareScreenStarted,
    updateScreenId,
    updateShareEnded,
    closeAndResize,
    prepopulateUserMedia,
    reorderStreams,
  } = updatedParameters;

  const producerToClose = consumerTransports.find(
    (transportData) => transportData.producerId === producerId,
  );

  if (producerToClose) {
    try {
      await producerToClose.consumerTransport?.close();
    } catch (error) {
      console.error('Error closing consumer transport:', error);
    }

    try {
      producerToClose.consumer.close();
    } catch (error) {
      console.error('Error closing consumer:', error);
    }

    const updatedTransports = consumerTransports.filter(
      (transportData) => transportData.producerId !== producerId,
    );
    updateConsumerTransports(updatedTransports);

    await closeAndResize({
      producerId,
      kind,
      parameters: updatedParameters,
    });
  } else if (kind === 'screenshare' || kind === 'screen') {
    if (shared) {
      updateShared(false);
    } else {
      updateShareScreenStarted(false);
      updateScreenId('');
    }
    updateShareEnded(true);
    await prepopulateUserMedia({ name: hostLabel, parameters: updatedParameters });
    await reorderStreams({
      add: false,
      screenChanged: true,
      parameters: updatedParameters,
    });
  }
};
