export interface ControlMediaHostNestedOptions<TParameters = unknown> {
  parameters: TParameters;
}

export interface ControlMediaHostTrackLike {
  enabled: boolean;
  kind?: string;
}

export interface ControlMediaHostMediaStreamLike {
  getAudioTracks?: () => ControlMediaHostTrackLike[];
  getVideoTracks?: () => ControlMediaHostTrackLike[];
  tracks?: ControlMediaHostTrackLike[];
  [key: string]: any;
}

export interface ControlMediaHostOnScreenChangesOptions<TParameters = unknown>
  extends ControlMediaHostNestedOptions<TParameters> {
  changed?: boolean;
}

export type ControlMediaHostOnScreenChangesType<TParameters = unknown> = (
  options: ControlMediaHostOnScreenChangesOptions<TParameters>,
) => Promise<void>;

export type ControlMediaHostStopShareScreenType<TParameters = unknown> = (
  options: ControlMediaHostNestedOptions<TParameters>,
) => Promise<void>;

export type ControlMediaHostDisconnectSendTransportVideoType<
  TParameters = unknown,
> = (options: ControlMediaHostNestedOptions<TParameters>) => Promise<void>;

export type ControlMediaHostDisconnectSendTransportAudioType<
  TParameters = unknown,
> = (options: ControlMediaHostNestedOptions<TParameters>) => Promise<void>;

export type ControlMediaHostDisconnectSendTransportScreenType<
  TParameters = unknown,
> = (options: ControlMediaHostNestedOptions<TParameters>) => Promise<void>;

export interface ControlMediaHostParameters<
  TOnScreenChangesParameters = unknown,
  TStopShareScreenParameters = unknown,
  TDisconnectSendTransportVideoParameters = unknown,
  TDisconnectSendTransportAudioParameters = unknown,
  TDisconnectSendTransportScreenParameters = unknown,
  TAllParameters extends TOnScreenChangesParameters &
    TStopShareScreenParameters &
    TDisconnectSendTransportVideoParameters &
    TDisconnectSendTransportAudioParameters &
    TDisconnectSendTransportScreenParameters = TOnScreenChangesParameters &
    TStopShareScreenParameters &
    TDisconnectSendTransportVideoParameters &
    TDisconnectSendTransportAudioParameters &
    TDisconnectSendTransportScreenParameters,
  TMediaStream extends ControlMediaHostMediaStreamLike = MediaStream,
> {
  updateAdminRestrictSetting: (value: boolean) => void;
  localStream: TMediaStream | null;
  updateLocalStream: (stream: TMediaStream | null) => void;
  updateAudioAlreadyOn: (value: boolean) => void;
  localStreamScreen: TMediaStream | null;
  updateLocalStreamScreen: (stream: TMediaStream | null) => void;
  localStreamVideo: TMediaStream | null;
  updateLocalStreamVideo: (stream: TMediaStream | null) => void;
  updateScreenAlreadyOn: (value: boolean) => void;
  updateVideoAlreadyOn: (value: boolean) => void;
  updateChatAlreadyOn: (value: boolean) => void;
  onScreenChanges: ControlMediaHostOnScreenChangesType<TOnScreenChangesParameters>;
  stopShareScreen: ControlMediaHostStopShareScreenType<TStopShareScreenParameters>;
  disconnectSendTransportVideo: ControlMediaHostDisconnectSendTransportVideoType<TDisconnectSendTransportVideoParameters>;
  disconnectSendTransportAudio: ControlMediaHostDisconnectSendTransportAudioType<TDisconnectSendTransportAudioParameters>;
  disconnectSendTransportScreen: ControlMediaHostDisconnectSendTransportScreenType<TDisconnectSendTransportScreenParameters>;
  getUpdatedAllParams: () =>
    ControlMediaHostParameters<
      TOnScreenChangesParameters,
      TStopShareScreenParameters,
      TDisconnectSendTransportVideoParameters,
      TDisconnectSendTransportAudioParameters,
      TDisconnectSendTransportScreenParameters,
      TAllParameters,
      TMediaStream
    > & TAllParameters;
  [key: string]: any;
}

export interface ControlMediaHostOptions<
  TOnScreenChangesParameters = unknown,
  TStopShareScreenParameters = unknown,
  TDisconnectSendTransportVideoParameters = unknown,
  TDisconnectSendTransportAudioParameters = unknown,
  TDisconnectSendTransportScreenParameters = unknown,
  TAllParameters extends TOnScreenChangesParameters &
    TStopShareScreenParameters &
    TDisconnectSendTransportVideoParameters &
    TDisconnectSendTransportAudioParameters &
    TDisconnectSendTransportScreenParameters = TOnScreenChangesParameters &
    TStopShareScreenParameters &
    TDisconnectSendTransportVideoParameters &
    TDisconnectSendTransportAudioParameters &
    TDisconnectSendTransportScreenParameters,
  TMediaStream extends ControlMediaHostMediaStreamLike = MediaStream,
> {
  type: 'audio' | 'video' | 'screenshare' | 'chat' | 'all';
  parameters:
    ControlMediaHostParameters<
      TOnScreenChangesParameters,
      TStopShareScreenParameters,
      TDisconnectSendTransportVideoParameters,
      TDisconnectSendTransportAudioParameters,
      TDisconnectSendTransportScreenParameters,
      TAllParameters,
      TMediaStream
    > & TAllParameters;
}

export type ControlMediaHostType<
  TOnScreenChangesParameters = unknown,
  TStopShareScreenParameters = unknown,
  TDisconnectSendTransportVideoParameters = unknown,
  TDisconnectSendTransportAudioParameters = unknown,
  TDisconnectSendTransportScreenParameters = unknown,
  TAllParameters extends TOnScreenChangesParameters &
    TStopShareScreenParameters &
    TDisconnectSendTransportVideoParameters &
    TDisconnectSendTransportAudioParameters &
    TDisconnectSendTransportScreenParameters = TOnScreenChangesParameters &
    TStopShareScreenParameters &
    TDisconnectSendTransportVideoParameters &
    TDisconnectSendTransportAudioParameters &
    TDisconnectSendTransportScreenParameters,
  TMediaStream extends ControlMediaHostMediaStreamLike = MediaStream,
> = (
  options: ControlMediaHostOptions<
    TOnScreenChangesParameters,
    TStopShareScreenParameters,
    TDisconnectSendTransportVideoParameters,
    TDisconnectSendTransportAudioParameters,
    TDisconnectSendTransportScreenParameters,
    TAllParameters,
    TMediaStream
  >,
) => Promise<void>;

/**
 * Applies host-enforced media restrictions across local audio, video, screenshare, and chat state.
 *
 * @param {ControlMediaHostOptions} options - Restriction type and shared transport/screen callbacks.
 * @returns {Promise<void>} Resolves once the requested host restriction is applied.
 *
 * @example
 * ```typescript
 * await controlMediaHost({
 *   type: 'video',
 *   parameters,
 * });
 * ```
 */
export const controlMediaHost = async <
  TOnScreenChangesParameters = unknown,
  TStopShareScreenParameters = unknown,
  TDisconnectSendTransportVideoParameters = unknown,
  TDisconnectSendTransportAudioParameters = unknown,
  TDisconnectSendTransportScreenParameters = unknown,
  TAllParameters extends TOnScreenChangesParameters &
    TStopShareScreenParameters &
    TDisconnectSendTransportVideoParameters &
    TDisconnectSendTransportAudioParameters &
    TDisconnectSendTransportScreenParameters = TOnScreenChangesParameters &
    TStopShareScreenParameters &
    TDisconnectSendTransportVideoParameters &
    TDisconnectSendTransportAudioParameters &
    TDisconnectSendTransportScreenParameters,
  TMediaStream extends ControlMediaHostMediaStreamLike = MediaStream,
>({
  type,
  parameters,
}: ControlMediaHostOptions<
  TOnScreenChangesParameters,
  TStopShareScreenParameters,
  TDisconnectSendTransportVideoParameters,
  TDisconnectSendTransportAudioParameters,
  TDisconnectSendTransportScreenParameters,
  TAllParameters,
  TMediaStream
>): Promise<void> => {
  const {
    updateAdminRestrictSetting,
    updateLocalStream,
    updateAudioAlreadyOn,
    updateLocalStreamScreen,
    updateLocalStreamVideo,
    updateScreenAlreadyOn,
    updateVideoAlreadyOn,
    updateChatAlreadyOn,
    onScreenChanges,
    stopShareScreen,
    disconnectSendTransportVideo,
    disconnectSendTransportAudio,
    disconnectSendTransportScreen,
  } = parameters;

  const { localStream, localStreamScreen, localStreamVideo } =
    parameters.getUpdatedAllParams();

  const disableTrack = (
    stream: TMediaStream | null,
    kind: 'audio' | 'video',
  ): boolean => {
    const getTracks =
      kind === 'audio' ? stream?.getAudioTracks : stream?.getVideoTracks;
    const tracks =
      typeof getTracks === 'function'
        ? getTracks.call(stream)
        : stream?.tracks?.filter((track) => track.kind === kind) ?? [];
    const track = tracks && tracks[0];
    if (track) {
      track.enabled = false;
      return true;
    }
    return false;
  };

  try {
    updateAdminRestrictSetting(true);

    if (type === 'audio') {
      disableTrack(localStream, 'audio');
      updateLocalStream(localStream ?? null);
      await disconnectSendTransportAudio({ parameters });
      updateAudioAlreadyOn(false);
    } else if (type === 'video') {
      disableTrack(localStream, 'video');
      updateLocalStream(localStream ?? null);
      await disconnectSendTransportVideo({ parameters });
      await onScreenChanges({ changed: true, parameters });

      disableTrack(localStreamVideo, 'video');
      updateLocalStreamVideo(localStreamVideo ?? null);
      await disconnectSendTransportVideo({ parameters });
      await onScreenChanges({ changed: true, parameters });

      updateVideoAlreadyOn(false);
    } else if (type === 'screenshare') {
      disableTrack(localStreamScreen, 'video');
      updateLocalStreamScreen(localStreamScreen ?? null);
      await disconnectSendTransportScreen({ parameters });
      await stopShareScreen({ parameters });
      updateScreenAlreadyOn(false);
    } else if (type === 'chat') {
      updateChatAlreadyOn(false);
    } else if (type === 'all') {
      disableTrack(localStream, 'audio');
      updateLocalStream(localStream ?? null);
      await disconnectSendTransportAudio({ parameters });
      updateAudioAlreadyOn(false);

      disableTrack(localStreamScreen, 'video');
      updateLocalStreamScreen(localStreamScreen ?? null);
      await disconnectSendTransportScreen({ parameters });
      await stopShareScreen({ parameters });
      updateScreenAlreadyOn(false);

      disableTrack(localStream, 'video');
      updateLocalStream(localStream ?? null);
      await disconnectSendTransportVideo({ parameters });
      await onScreenChanges({ changed: true, parameters });

      disableTrack(localStreamVideo, 'video');
      updateLocalStreamVideo(localStreamVideo ?? null);
      await disconnectSendTransportVideo({ parameters });
      await onScreenChanges({ changed: true, parameters });

      updateVideoAlreadyOn(false);
    }
  } catch (error) {
    console.error('Error in controlMediaHost:', error);
  }
};
