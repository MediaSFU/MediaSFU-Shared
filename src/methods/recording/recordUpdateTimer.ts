export interface RecordUpdateTimerOptions {
  recordElapsedTime: number
  recordStartTime: number
  updateRecordElapsedTime: (elapsedTime: number) => void
  updateRecordingProgressTime: (formattedTime: string) => void
}

export type RecordUpdateTimerType = (options: RecordUpdateTimerOptions) => void

/**
 * Updates the recording timer by calculating the elapsed time since the recording started
 * and formatting it in HH:MM:SS format.
 *
 * @param {RecordUpdateTimerOptions} options - The options object.
 * @param {number} options.recordElapsedTime - The elapsed recording time in seconds.
 * @param {number} options.recordStartTime - The timestamp when the recording started.
 * @param {Function} options.updateRecordElapsedTime - Callback to update the elapsed recording time.
 * @param {Function} options.updateRecordingProgressTime - Callback to update the formatted recording time.
 *
 * @example
 * ```typescript
 * recordUpdateTimer({
 *   recordElapsedTime: 0,
 *   recordStartTime: Date.now(),
 *   updateRecordElapsedTime: (elapsedTime) => console.log('Elapsed:', elapsedTime),
 *   updateRecordingProgressTime: (formatted) => console.log('Progress:', formatted),
 * })
 * ```
 */
export const recordUpdateTimer: RecordUpdateTimerType = ({
  recordElapsedTime,
  recordStartTime,
  updateRecordElapsedTime,
  updateRecordingProgressTime,
}) => {
  const padNumber = (value: number): string => value.toString().padStart(2, '0')

  const currentTime = new Date().getTime()
  let elapsedSeconds = recordElapsedTime
  elapsedSeconds = Math.floor((currentTime - recordStartTime) / 1000)
  updateRecordElapsedTime(elapsedSeconds)

  const hours = Math.floor(elapsedSeconds / 3600)
  const minutes = Math.floor((elapsedSeconds % 3600) / 60)
  const seconds = elapsedSeconds % 60
  const formattedTime = `${padNumber(hours)}:${padNumber(minutes)}:${padNumber(seconds)}`

  updateRecordingProgressTime(formattedTime)
}
