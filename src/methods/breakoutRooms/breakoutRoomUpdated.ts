import type {
  BreakoutParticipant,
  BreakoutRoomUpdatedData,
  OnScreenChangesParameters,
  OnScreenChangesType,
  Participant,
  RePortParameters,
  RePortType,
} from '../../types/types'

export interface BreakoutRoomUpdatedParameters extends OnScreenChangesParameters, RePortParameters {
  breakOutRoomStarted: boolean
  breakOutRoomEnded: boolean
  breakoutRooms: BreakoutParticipant[][]
  hostNewRoom: number
  islevel: string
  participantsAll: Participant[]
  participants: Participant[]
  meetingDisplayType: string
  prevMeetingDisplayType: string
  updateBreakoutRooms: (rooms: BreakoutParticipant[][]) => void
  updateBreakOutRoomStarted: (started: boolean) => void
  updateBreakOutRoomEnded: (ended: boolean) => void
  updateHostNewRoom: (room: number) => void
  updateMeetingDisplayType: (type: string) => void
  updateParticipantsAll: (participants: Participant[]) => void
  updateParticipants: (participants: Participant[]) => void
  onScreenChanges: OnScreenChangesType
  rePort: RePortType
  getUpdatedAllParams: () => BreakoutRoomUpdatedParameters
  [key: string]: any
}

export interface BreakoutRoomUpdatedOptions {
  data: BreakoutRoomUpdatedData
  parameters: BreakoutRoomUpdatedParameters
}

export type BreakoutRoomUpdatedType = (options: BreakoutRoomUpdatedOptions) => Promise<void>

/**
 * Updates the state of breakout rooms based on the provided data and parameters.
 *
 * @param {BreakoutRoomUpdatedOptions} options - The options object.
 * @param {BreakoutRoomUpdatedData} options.data - The data object containing information about the breakout rooms.
 * @param {BreakoutRoomUpdatedParameters} options.parameters - The parameters object containing various state update functions and other parameters.
 *
 * @example
 * ```typescript
 * const breakoutOptions: BreakoutRoomUpdatedOptions = {
 *   data: breakoutData,
 *   parameters: {
 *     breakOutRoomStarted: false,
 *     breakOutRoomEnded: false,
 *     breakoutRooms: [[]],
 *     hostNewRoom: 1,
 *     islevel: '2',
 *     participantsAll: allParticipants,
 *     participants: activeParticipants,
 *     meetingDisplayType: 'all',
 *     prevMeetingDisplayType: 'video',
 *     updateBreakoutRooms: setBreakoutRooms,
 *     updateBreakOutRoomStarted: setBreakOutRoomStarted,
 *     updateBreakOutRoomEnded: setBreakOutRoomEnded,
 *     updateHostNewRoom: setHostNewRoom,
 *     updateMeetingDisplayType: setMeetingDisplayType,
 *     updateParticipantsAll: setAllParticipants,
 *     updateParticipants: setActiveParticipants,
 *     onScreenChanges: handleScreenChanges,
 *     rePort: reportFunction,
 *     getUpdatedAllParams: () => breakoutOptions.parameters,
 *   },
 * }
 *
 * await breakoutRoomUpdated(breakoutOptions)
 * ```
 */
export const breakoutRoomUpdated: BreakoutRoomUpdatedType = async ({ data, parameters }) => {
  try {
    let {
      breakOutRoomStarted,
      breakOutRoomEnded,
      breakoutRooms,
      hostNewRoom,
      islevel,
      participantsAll,
      participants,
      meetingDisplayType,
      prevMeetingDisplayType,
      updateBreakoutRooms,
      updateBreakOutRoomStarted,
      updateBreakOutRoomEnded,
      updateHostNewRoom,
      updateMeetingDisplayType,
      updateParticipantsAll,
      updateParticipants,
      onScreenChanges,
      rePort,
    } = parameters

    if (data.forHost) {
      hostNewRoom = data.newRoom!
      updateHostNewRoom(hostNewRoom!)
      await onScreenChanges({ changed: true, parameters })
      return
    }

    if (islevel === '2' && data.members) {
      participantsAll = data.members.map((participant) => ({
        isBanned: participant.isBanned,
        name: participant.name,
        audioID: participant.audioID,
        videoID: participant.videoID,
      }))
      updateParticipantsAll(participantsAll)

      participants = data.members.filter((participant) => !participant.isBanned)
      updateParticipants(participants)
    }

    breakoutRooms = data.breakoutRooms || []
    updateBreakoutRooms(breakoutRooms)

    if (data.status === 'started' && (!breakOutRoomStarted || breakOutRoomEnded)) {
      breakOutRoomStarted = true
      breakOutRoomEnded = false
      updateBreakOutRoomStarted(true)
      updateBreakOutRoomEnded(false)
      prevMeetingDisplayType = meetingDisplayType
      if (meetingDisplayType !== 'all') {
        meetingDisplayType = 'all'
        updateMeetingDisplayType('all')
      }
      await onScreenChanges({ changed: true, parameters })
      if (islevel === '2') {
        await rePort({ restart: true, parameters })
      }
    } else if (data.status === 'ended') {
      breakOutRoomEnded = true
      updateBreakOutRoomEnded(true)
      if (meetingDisplayType !== prevMeetingDisplayType) {
        updateMeetingDisplayType(prevMeetingDisplayType)
      }
      await onScreenChanges({ changed: true, parameters })
      if (islevel === '2') {
        await rePort({ restart: true, parameters })
      }
    } else if (data.status === 'started' && breakOutRoomStarted) {
      breakOutRoomStarted = true
      breakOutRoomEnded = false
      updateBreakOutRoomStarted(true)
      updateBreakOutRoomEnded(false)
      await onScreenChanges({ changed: true, parameters })
      if (islevel === '2') {
        await rePort({ restart: true, parameters })
      }
    }
  } catch {
    // Handle error
  }
}
