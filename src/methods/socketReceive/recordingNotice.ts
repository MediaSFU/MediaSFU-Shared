import type { EventType, UserRecordingParams } from '../../types/types';
import { SoundPlayer, type SoundPlayerType } from '../utils/SoundPlayer';

export interface RecordingNoticeUserRecordingParamsLike {
  mainSpecs: {
    mediaOptions: string;
    audioOptions: string;
    videoOptions: string;
    videoType: string;
    videoOptimized: boolean;
    recordingDisplayType: 'video' | 'media' | 'all';
    addHLS: boolean;
  };
  dispSpecs: {
    nameTags: boolean;
    backgroundColor: string;
    nameTagsColor: string;
    orientationVideo: string;
  };
  textSpecs?: {
    addText?: boolean;
    customText?: string;
    customTextPosition?: string;
    customTextColor?: string;
  };
}

export interface RecordingNoticeParameters<
  TUserRecordingParams extends RecordingNoticeUserRecordingParamsLike = UserRecordingParams,
  TEventType = EventType,
> {
  islevel: string;
  userRecordingParams: TUserRecordingParams;
  pauseRecordCount?: number;
  recordElapsedTime: number;
  recordStartTime: number;
  recordStarted: boolean;
  recordPaused: boolean;
  canLaunchRecord: boolean;
  stopLaunchRecord: boolean;
  recordStopped: boolean;
  isTimerRunning: boolean;
  canPauseResume: boolean;
  eventType: TEventType;
  updateRecordingProgressTime: (time: string) => void;
  updateShowRecordButtons: (show: boolean) => void;
  updateUserRecordingParams: (params: TUserRecordingParams) => void;
  updateRecordingMediaOptions: (options: string) => void;
  updateRecordingAudioOptions: (options: string) => void;
  updateRecordingVideoOptions: (options: string) => void;
  updateRecordingVideoType: (type: string) => void;
  updateRecordingVideoOptimized: (optimized: boolean) => void;
  updateRecordingDisplayType: (type: 'video' | 'media' | 'all') => void;
  updateRecordingAddHLS: (addHLS: boolean) => void;
  updateRecordingNameTags: (nameTags: boolean) => void;
  updateRecordingBackgroundColor: (color: string) => void;
  updateRecordingNameTagsColor: (color: string) => void;
  updateRecordingOrientationVideo: (orientation: string) => void;
  updateRecordingAddText: (addText: boolean) => void;
  updateRecordingCustomText: (text: string) => void;
  updateRecordingCustomTextPosition: (position: string) => void;
  updateRecordingCustomTextColor: (color: string) => void;
  updatePauseRecordCount: (count: number) => void;
  updateRecordElapsedTime: (time: number) => void;
  updateRecordStarted: (started: boolean) => void;
  updateRecordPaused: (paused: boolean) => void;
  updateCanLaunchRecord: (canLaunch: boolean) => void;
  updateStopLaunchRecord: (stop: boolean) => void;
  updateRecordStopped: (stopped: boolean) => void;
  updateIsTimerRunning: (running: boolean) => void;
  updateCanPauseResume: (canPause: boolean) => void;
  updateRecordStartTime: (startTime: number) => void;
  updateRecordState: (state: string) => void;
  [key: string]: any;
}

export interface RecordingNoticeOptions<
  TUserRecordingParams extends RecordingNoticeUserRecordingParamsLike = UserRecordingParams,
  TEventType = EventType,
> {
  state: string;
  userRecordingParam: TUserRecordingParams | null;
  pauseCount: number;
  timeDone: number;
  parameters: RecordingNoticeParameters<TUserRecordingParams, TEventType>;
  soundPlayer?: SoundPlayerType;
}

export type RecordingNoticeType<
  TUserRecordingParams extends RecordingNoticeUserRecordingParamsLike = UserRecordingParams,
  TEventType = EventType,
> = (
  options: RecordingNoticeOptions<TUserRecordingParams, TEventType>,
) => Promise<void>;

/**
 * Reconciles recording state updates, user recording settings, and progress UI after a recording socket notice.
 *
 * @param {RecordingNoticeOptions} options - Recording state payload and room-level update callbacks.
 * @returns {Promise<void>} Resolves once recording state, UI flags, and progress text are synchronized.
 *
 * @example
 * ```typescript
 * await recordingNotice({
 *   state: 'pause',
 *   userRecordingParam,
 *   pauseCount: 2,
 *   timeDone: 3600,
 *   parameters,
 * });
 * ```
 */
export const recordingNotice = async <
  TUserRecordingParams extends RecordingNoticeUserRecordingParamsLike = UserRecordingParams,
  TEventType = EventType,
>({
  state,
  userRecordingParam,
  pauseCount,
  timeDone,
  parameters,
  soundPlayer,
}: RecordingNoticeOptions<TUserRecordingParams, TEventType>): Promise<void> => {
  let {
    islevel,
    userRecordingParams,
    pauseRecordCount,
    recordElapsedTime,
    recordStartTime,
    recordStarted,
    recordPaused,
    canLaunchRecord,
    stopLaunchRecord,
    recordStopped,
    isTimerRunning,
    canPauseResume,
    eventType,
    updateRecordingProgressTime,
    updateShowRecordButtons,
    updateUserRecordingParams,
    updateRecordingMediaOptions,
    updateRecordingAudioOptions,
    updateRecordingVideoOptions,
    updateRecordingVideoType,
    updateRecordingVideoOptimized,
    updateRecordingDisplayType,
    updateRecordingAddHLS,
    updateRecordingNameTags,
    updateRecordingBackgroundColor,
    updateRecordingNameTagsColor,
    updateRecordingOrientationVideo,
    updateRecordingAddText,
    updateRecordingCustomText,
    updateRecordingCustomTextPosition,
    updateRecordingCustomTextColor,
    updatePauseRecordCount,
    updateRecordElapsedTime,
    updateRecordStartTime,
    updateRecordStarted,
    updateRecordPaused,
    updateCanLaunchRecord,
    updateStopLaunchRecord,
    updateRecordStopped,
    updateIsTimerRunning,
    updateCanPauseResume,
    updateRecordState,
  } = parameters;

  const playSound = async (soundUrl: string): Promise<void> => {
    await (soundPlayer ?? SoundPlayer)({ soundUrl });
  };

  try {
    if (islevel !== '2') {
      if (state === 'pause') {
        updateRecordStarted(true);
        updateRecordPaused(true);
        updateRecordState('yellow');
        if (eventType !== 'broadcast') {
          await playSound('https://www.mediasfu.com/sounds/record-paused.mp3');
        }
      } else if (state === 'stop') {
        updateRecordStarted(true);
        updateRecordStopped(true);
        updateRecordState('green');
        if (eventType !== 'broadcast') {
          await playSound('https://www.mediasfu.com/sounds/record-stopped.mp3');
        }
      } else {
        updateRecordState('red');
        updateRecordStarted(true);
        updateRecordPaused(false);
        if (eventType !== 'broadcast') {
          await playSound('https://www.mediasfu.com/sounds/record-progress.mp3');
        }
      }
    } else {
      if (state === 'pause') {
        updateRecordState('yellow');
        if (userRecordingParam) {
          userRecordingParams.mainSpecs = userRecordingParam.mainSpecs;
          userRecordingParams.dispSpecs = userRecordingParam.dispSpecs;
          userRecordingParams.textSpecs = userRecordingParam.textSpecs;

          updateUserRecordingParams(userRecordingParams);
          updateRecordingMediaOptions(userRecordingParams.mainSpecs.mediaOptions);
          updateRecordingAudioOptions(userRecordingParams.mainSpecs.audioOptions);
          updateRecordingVideoOptions(userRecordingParams.mainSpecs.videoOptions);
          updateRecordingVideoType(userRecordingParams.mainSpecs.videoType);
          updateRecordingVideoOptimized(userRecordingParams.mainSpecs.videoOptimized);
          updateRecordingDisplayType(userRecordingParams.mainSpecs.recordingDisplayType);
          updateRecordingAddHLS(userRecordingParams.mainSpecs.addHLS);
          updateRecordingNameTags(userRecordingParams.dispSpecs.nameTags);
          updateRecordingBackgroundColor(userRecordingParams.dispSpecs.backgroundColor);
          updateRecordingNameTagsColor(userRecordingParams.dispSpecs.nameTagsColor);
          updateRecordingOrientationVideo(userRecordingParams.dispSpecs.orientationVideo);
          updateRecordingAddText(userRecordingParams.textSpecs?.addText ?? false);
          updateRecordingCustomText(userRecordingParams.textSpecs?.customText ?? '');
          updateRecordingCustomTextPosition(
            userRecordingParams.textSpecs?.customTextPosition ?? '',
          );
          updateRecordingCustomTextColor(
            userRecordingParams.textSpecs?.customTextColor ?? '',
          );

          pauseRecordCount = pauseCount;
          updatePauseRecordCount(pauseRecordCount);

          recordElapsedTime = Math.floor(timeDone / 1000);
          recordStartTime = Math.floor(Date.now() / 1000) - recordElapsedTime;
          updateRecordStartTime(recordStartTime);
          updateRecordElapsedTime(recordElapsedTime);

          recordStarted = true;
          recordPaused = true;
          canLaunchRecord = false;
          recordStopped = false;

          updateRecordStarted(recordStarted);
          updateRecordPaused(recordPaused);
          updateCanLaunchRecord(canLaunchRecord);
          updateRecordStopped(recordStopped);
          updateShowRecordButtons(true);

          isTimerRunning = false;
          canPauseResume = true;

          updateIsTimerRunning(isTimerRunning);
          updateCanPauseResume(canPauseResume);
          updateRecordingProgressTime(formatElapsedTime(recordElapsedTime));
        }
        await playSound('https://www.mediasfu.com/sounds/record-paused.mp3');
      } else if (state === 'stop') {
        recordStarted = true;
        recordStopped = true;
        canLaunchRecord = false;
        stopLaunchRecord = true;

        updateRecordStarted(recordStarted);
        updateRecordStopped(recordStopped);
        updateCanLaunchRecord(canLaunchRecord);
        updateStopLaunchRecord(stopLaunchRecord);
        updateShowRecordButtons(false);
        updateRecordState('green');
        await playSound('https://www.mediasfu.com/sounds/record-stopped.mp3');
      } else {
        updateRecordState('red');
        updateRecordStarted(true);
        updateRecordPaused(false);
        await playSound('https://www.mediasfu.com/sounds/record-progress.mp3');
      }
    }
  } catch (error) {
    console.log('Error in RecordingNotice: ', error);
  }
};

const formatElapsedTime = (recordElapsedTime: number): string => {
  const hours = Math.floor(recordElapsedTime / 3600);
  const minutes = Math.floor((recordElapsedTime % 3600) / 60);
  const seconds = recordElapsedTime % 60;

  return `${padNumber(hours)}:${padNumber(minutes)}:${padNumber(seconds)}`;
};

const padNumber = (value: number): string => value.toString().padStart(2, '0');
