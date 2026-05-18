export interface StartMeetingProgressTimerParameters {
  updateMeetingProgressTime: (formattedTime: string) => void;
  validated: boolean;
  roomName: string;
  getUpdatedAllParams: () => StartMeetingProgressTimerParameters;
  [key: string]: any;
}

export interface StartMeetingProgressTimerOptions {
  startTime: number;
  parameters: StartMeetingProgressTimerParameters;
}

export type StartMeetingProgressTimerType = (options: StartMeetingProgressTimerOptions) => void;

/**
 * Starts a one-second meeting progress timer and updates a formatted elapsed-time string.
 *
 * The timer automatically stops when the current runtime parameters indicate the
 * meeting is no longer validated or no room is active.
 *
 * @param options Timer start options.
 *
 * @example
 * ```typescript
 * startMeetingProgressTimer({
 *   startTime: Math.floor(Date.now() / 1000),
 *   parameters: {
 *     validated: true,
 *     roomName: 'room123',
 *     updateMeetingProgressTime: setMeetingTime,
 *     getUpdatedAllParams: () => currentParams,
 *   },
 * });
 * ```
 */
export function startMeetingProgressTimer({
  startTime,
  parameters,
}: StartMeetingProgressTimerOptions): void {
  let { updateMeetingProgressTime, getUpdatedAllParams } = parameters;

  function calculateElapsedTime(currentStartTime: number): number {
    const currentTime = Math.floor(new Date().getTime() / 1000);
    return currentTime - currentStartTime;
  }

  function padNumber(value: number): string {
    return value.toString().padStart(2, '0');
  }

  function formatTime(time: number): string {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = Math.floor(time % 60);
    return `${padNumber(hours)}:${padNumber(minutes)}:${padNumber(seconds)}`;
  }

  let elapsedTime = calculateElapsedTime(startTime);

  let timeProgress: ReturnType<typeof setInterval> | null = setInterval(() => {
    elapsedTime++;
    updateMeetingProgressTime(formatTime(elapsedTime));

    parameters = getUpdatedAllParams();

    if (!parameters.validated || !parameters.roomName) {
      clearInterval(timeProgress!);
      timeProgress = null;
    }
  }, 1000);
}