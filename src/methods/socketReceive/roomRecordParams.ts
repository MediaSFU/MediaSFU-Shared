export interface RecordParams {
  recordingAudioPausesLimit: number;
  recordingAudioPausesCount: number;
  recordingAudioSupport: boolean;
  recordingAudioPeopleLimit: number;
  recordingAudioParticipantsTimeLimit: number;
  recordingVideoPausesCount: number;
  recordingVideoPausesLimit: number;
  recordingVideoSupport: boolean;
  recordingVideoPeopleLimit: number;
  recordingVideoParticipantsTimeLimit: number;
  recordingAllParticipantsSupport: boolean;
  recordingVideoParticipantsSupport: boolean;
  recordingAllParticipantsFullRoomSupport: boolean;
  recordingVideoParticipantsFullRoomSupport: boolean;
  recordingPreferredOrientation: string;
  recordingSupportForOtherOrientation: boolean;
  recordingMultiFormatsSupport: boolean;
}

export interface RoomRecordParamsParameters {
  updateRecordingAudioPausesLimit: (value: number) => void;
  updateRecordingAudioPausesCount: (value: number) => void;
  updateRecordingAudioSupport: (value: boolean) => void;
  updateRecordingAudioPeopleLimit: (value: number) => void;
  updateRecordingAudioParticipantsTimeLimit: (value: number) => void;
  updateRecordingVideoPausesCount: (value: number) => void;
  updateRecordingVideoPausesLimit: (value: number) => void;
  updateRecordingVideoSupport: (value: boolean) => void;
  updateRecordingVideoPeopleLimit: (value: number) => void;
  updateRecordingVideoParticipantsTimeLimit: (value: number) => void;
  updateRecordingAllParticipantsSupport: (value: boolean) => void;
  updateRecordingVideoParticipantsSupport: (value: boolean) => void;
  updateRecordingAllParticipantsFullRoomSupport: (value: boolean) => void;
  updateRecordingVideoParticipantsFullRoomSupport: (value: boolean) => void;
  updateRecordingPreferredOrientation: (value: string) => void;
  updateRecordingSupportForOtherOrientation: (value: boolean) => void;
  updateRecordingMultiFormatsSupport: (value: boolean) => void;
  [key: string]: any;
}

export interface RoomRecordParamsOptions {
  recordParams: RecordParams;
  parameters: RoomRecordParamsParameters;
}

export type RoomRecordParamsType = (
  options: RoomRecordParamsOptions,
) => Promise<void>;

/**
 * Applies room-level recording capability limits and toggles to UI state.
 *
 * @param {RoomRecordParamsOptions} options - Recording capability payload and setters.
 * @returns {Promise<void>} Resolves after all setters are applied.
 *
 * @example
 * ```typescript
 * await roomRecordParams({
 *   recordParams,
 *   parameters: recordingSetters,
 * });
 * ```
 */
export const roomRecordParams = async ({
  recordParams,
  parameters,
}: RoomRecordParamsOptions): Promise<void> => {
  const {
    updateRecordingAudioPausesLimit,
    updateRecordingAudioPausesCount,
    updateRecordingAudioSupport,
    updateRecordingAudioPeopleLimit,
    updateRecordingAudioParticipantsTimeLimit,
    updateRecordingVideoPausesCount,
    updateRecordingVideoPausesLimit,
    updateRecordingVideoSupport,
    updateRecordingVideoPeopleLimit,
    updateRecordingVideoParticipantsTimeLimit,
    updateRecordingAllParticipantsSupport,
    updateRecordingVideoParticipantsSupport,
    updateRecordingAllParticipantsFullRoomSupport,
    updateRecordingVideoParticipantsFullRoomSupport,
    updateRecordingPreferredOrientation,
    updateRecordingSupportForOtherOrientation,
    updateRecordingMultiFormatsSupport,
  } = parameters;

  updateRecordingAudioPausesLimit(recordParams.recordingAudioPausesLimit);
  updateRecordingAudioPausesCount(recordParams.recordingAudioPausesCount);
  updateRecordingAudioSupport(recordParams.recordingAudioSupport);
  updateRecordingAudioPeopleLimit(recordParams.recordingAudioPeopleLimit);
  updateRecordingAudioParticipantsTimeLimit(
    recordParams.recordingAudioParticipantsTimeLimit,
  );
  updateRecordingVideoPausesCount(recordParams.recordingVideoPausesCount);
  updateRecordingVideoPausesLimit(recordParams.recordingVideoPausesLimit);
  updateRecordingVideoSupport(recordParams.recordingVideoSupport);
  updateRecordingVideoPeopleLimit(recordParams.recordingVideoPeopleLimit);
  updateRecordingVideoParticipantsTimeLimit(
    recordParams.recordingVideoParticipantsTimeLimit,
  );
  updateRecordingAllParticipantsSupport(
    recordParams.recordingAllParticipantsSupport,
  );
  updateRecordingVideoParticipantsSupport(
    recordParams.recordingVideoParticipantsSupport,
  );
  updateRecordingAllParticipantsFullRoomSupport(
    recordParams.recordingAllParticipantsFullRoomSupport,
  );
  updateRecordingVideoParticipantsFullRoomSupport(
    recordParams.recordingVideoParticipantsFullRoomSupport,
  );
  updateRecordingPreferredOrientation(
    recordParams.recordingPreferredOrientation,
  );
  updateRecordingSupportForOtherOrientation(
    recordParams.recordingSupportForOtherOrientation,
  );
  updateRecordingMultiFormatsSupport(recordParams.recordingMultiFormatsSupport);
};
