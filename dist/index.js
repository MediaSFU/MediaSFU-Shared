import io, { Socket } from "socket.io-client";
import * as mediasoupClient from "mediasoup-client";
const addVideosGrid = async () => {
  console.warn("addVideosGrid called on shared package - should be implemented in framework package");
};
const consumerResume = async () => {
  console.warn("consumerResume called on shared package - should be implemented in framework package");
};
const changeVids = async ({ screenChanged = false, parameters }) => {
  let { getUpdatedAllParams } = parameters;
  parameters = getUpdatedAllParams();
  let {
    allVideoStreams,
    p_activeNames,
    activeNames,
    dispActiveNames,
    shareScreenStarted,
    shared,
    newLimitedStreams,
    non_alVideoStreams,
    ref_participants,
    participants,
    eventType,
    islevel,
    member,
    sortAudioLoudness,
    audioDecibels,
    mixed_alVideoStreams,
    non_alVideoStreams_muted,
    remoteProducerId,
    localStreamVideo,
    oldAllStreams,
    screenPageLimit,
    meetingDisplayType,
    meetingVideoOptimized,
    recordingVideoOptimized,
    recordingDisplayType,
    paginatedStreams,
    itemPageLimit,
    doPaginate,
    prevDoPaginate,
    currentUserPage,
    breakoutRooms,
    hostNewRoom,
    breakOutRoomStarted,
    breakOutRoomEnded,
    virtualStream,
    mainRoomsLength,
    memberRoom,
    updateP_activeNames,
    updateActiveNames,
    updateDispActiveNames,
    updateNewLimitedStreams,
    updateNon_alVideoStreams,
    updateRef_participants,
    updateSortAudioLoudness,
    updateMixed_alVideoStreams,
    updateNon_alVideoStreams_muted,
    updatePaginatedStreams,
    updateDoPaginate,
    updatePrevDoPaginate,
    updateCurrentUserPage,
    updateNumberPages,
    updateMainRoomsLength,
    updateMemberRoom,
    mixStreams: mixStreams2,
    dispStreams: dispStreams2
  } = parameters;
  try {
    let alVideoStreams = [...allVideoStreams];
    p_activeNames = [...activeNames];
    let streame;
    if (shareScreenStarted || shared) {
      alVideoStreams = [...newLimitedStreams];
      activeNames = [];
    }
    activeNames = [];
    dispActiveNames = [];
    ref_participants = participants;
    let temp = alVideoStreams;
    await Promise.all(
      temp.map(async (stream) => {
        let participant = ref_participants.find(
          (obj) => obj.videoID === stream.producerId
        );
        if (!participant && stream.producerId !== "youyou" && stream.producerId !== "youyouyou") {
          alVideoStreams = alVideoStreams.filter(
            (obj) => obj.producerId !== stream.producerId
          );
        }
      })
    );
    if (eventType === "broadcast" || eventType === "chat") {
      sortAudioLoudness = false;
    }
    if (shareScreenStarted || shared) {
      non_alVideoStreams = [];
      non_alVideoStreams_muted = [];
      mixed_alVideoStreams = [];
    } else {
      if (alVideoStreams.length > screenPageLimit) {
        alVideoStreams = alVideoStreams.filter(
          (obj) => obj.producerId !== "youyou" && obj.producerId !== "youyouyou"
        );
        ref_participants = ref_participants.sort(
          (a, b) => (a.muted ?? false) > (b.muted ?? false) ? 1 : -1
        );
        let temp2 = [];
        await Promise.all(
          ref_participants.map((participant) => {
            let stream = alVideoStreams.find(
              (obj) => obj.producerId === participant.videoID
            );
            if (stream) {
              temp2.push(stream);
            }
          })
        );
        alVideoStreams = temp2;
        let youyou = allVideoStreams.find(
          (obj) => obj.producerId === "youyou"
        );
        if (!youyou) {
          let youyouyou = allVideoStreams.find(
            (obj) => obj.producerId === "youyouyou"
          );
          alVideoStreams.unshift(youyouyou);
        } else {
          alVideoStreams.unshift(youyou);
        }
      }
      const admin = participants.filter(
        (participant) => participant.islevel === "2"
      );
      let adminName = "";
      if (admin.length > 0) {
        adminName = admin[0].name || "";
      }
      non_alVideoStreams = [];
      await Promise.all(
        ref_participants.map(async (participant) => {
          let stream = alVideoStreams.find(
            (obj) => obj.producerId === participant.videoID
          );
          if (eventType !== "chat" && eventType !== "conference") {
            if (!stream && participant.name !== member && !participant.muted && participant.name !== adminName) {
              non_alVideoStreams.push(participant);
            }
          } else {
            if (!stream && participant.name !== member && !participant.muted) {
              non_alVideoStreams.push(participant);
            }
          }
        })
      );
      if (sortAudioLoudness) {
        non_alVideoStreams.sort((a, b) => {
          const avgLoudnessA = audioDecibels.find((obj) => obj.name === a.name)?.averageLoudness || 127;
          const avgLoudnessB = audioDecibels.find((obj) => obj.name === b.name)?.averageLoudness || 127;
          return avgLoudnessB - avgLoudnessA;
        });
        if (!(meetingDisplayType === "video" && meetingVideoOptimized) || !(recordingVideoOptimized && recordingDisplayType === "video")) {
          mixed_alVideoStreams = await mixStreams2({
            alVideoStreams,
            non_alVideoStreams,
            ref_participants
          });
        }
      }
      non_alVideoStreams_muted = [];
      await Promise.all(
        ref_participants.map(async (participant) => {
          let stream = alVideoStreams.find(
            (obj) => obj.producerId === participant.videoID
          );
          if (eventType !== "chat" && eventType !== "conference") {
            if (!stream && participant.name !== member && participant.muted && participant.name !== adminName) {
              non_alVideoStreams_muted.push(participant);
            }
          } else {
            if (!stream && participant.name !== member && participant.muted) {
              non_alVideoStreams_muted.push(participant);
            }
          }
        })
      );
    }
    if (eventType === "conference" && islevel !== "2") {
      let host = participants.find((obj) => obj.islevel === "2");
      if (host) {
        remoteProducerId = host.videoID;
        if (islevel === "2") {
          host.stream = virtualStream || localStreamVideo;
        } else {
          let hostVideo = alVideoStreams.find(
            (obj) => obj.producerId === remoteProducerId
          );
          if (!hostVideo) {
            streame = oldAllStreams.find(
              (streame2) => streame2.producerId === remoteProducerId
            );
            if (streame) {
              alVideoStreams = alVideoStreams.filter(
                (obj) => obj.producerId !== host.videoID
              );
              non_alVideoStreams = non_alVideoStreams.filter(
                (obj) => obj.name !== host.name
              );
              non_alVideoStreams_muted = non_alVideoStreams_muted.filter(
                (obj) => obj.name !== host.name
              );
              if (sortAudioLoudness) {
                mixed_alVideoStreams = mixed_alVideoStreams.filter(
                  (obj) => obj.name !== host.name
                );
                non_alVideoStreams_muted = non_alVideoStreams_muted.filter(
                  (obj) => obj.name !== host.name
                );
                if (meetingDisplayType == "video" && meetingVideoOptimized) {
                  alVideoStreams.unshift(streame);
                } else {
                  mixed_alVideoStreams.unshift(streame);
                }
              } else {
                alVideoStreams.unshift(streame);
              }
            } else {
              await Promise.all(
                ref_participants.map(async (participant) => {
                  let stream = alVideoStreams.find(
                    (obj) => obj.producerId == participant.videoID && participant.name == host.name
                  );
                  if (stream) {
                    if (sortAudioLoudness) {
                      mixed_alVideoStreams = mixed_alVideoStreams.filter(
                        (obj) => obj.name !== host.name
                      );
                      non_alVideoStreams_muted = non_alVideoStreams_muted.filter(
                        (obj) => obj.name !== host.name
                      );
                      mixed_alVideoStreams.unshift(participant);
                    } else {
                      non_alVideoStreams = non_alVideoStreams.filter(
                        (obj) => obj.name !== host.name
                      );
                      non_alVideoStreams.unshift(participant);
                      return;
                    }
                  }
                })
              );
            }
          }
        }
      }
    }
    let allStreamsPaged = [];
    if (sortAudioLoudness) {
      if (meetingDisplayType === "video") {
        if (meetingVideoOptimized) {
          allStreamsPaged = [...alVideoStreams];
        } else {
          allStreamsPaged = [...mixed_alVideoStreams];
        }
      } else if (meetingDisplayType === "media") {
        allStreamsPaged = [...mixed_alVideoStreams];
      } else if (meetingDisplayType === "all") {
        allStreamsPaged = [...mixed_alVideoStreams, ...non_alVideoStreams_muted];
      }
    } else {
      if (meetingDisplayType === "video") {
        allStreamsPaged = [...alVideoStreams];
      } else if (meetingDisplayType === "media") {
        allStreamsPaged = [...alVideoStreams, ...non_alVideoStreams];
      } else if (meetingDisplayType === "all") {
        allStreamsPaged = [
          ...alVideoStreams,
          ...non_alVideoStreams,
          ...non_alVideoStreams_muted
        ];
      }
    }
    paginatedStreams = [];
    let limit = itemPageLimit;
    if (shareScreenStarted || shared) {
      limit = screenPageLimit;
    }
    let firstPage = [];
    let page = [];
    let limit_ = limit + 1;
    if (eventType === "conference" && !shared && !shareScreenStarted) {
      limit_ = limit_ - 1;
    }
    let memberInRoom = false;
    let filterHost = false;
    if (breakOutRoomStarted && !breakOutRoomEnded) {
      let tempBreakoutRooms = JSON.parse(JSON.stringify(breakoutRooms));
      let host = participants.find((obj) => obj.islevel == "2");
      for (let room of tempBreakoutRooms) {
        try {
          let currentStreams = [];
          const roomIndex = tempBreakoutRooms.indexOf(room);
          if (hostNewRoom != -1 && roomIndex == hostNewRoom) {
            if (host) {
              if (!room.map((obj) => obj.name).includes(host.name)) {
                room = [...room, { name: host.name, breakRoom: roomIndex }];
                filterHost = true;
              }
            }
          }
          for (let participant of room) {
            if (participant.name == member && !memberInRoom) {
              memberInRoom = true;
              memberRoom = participant.breakRoom;
              updateMemberRoom(memberRoom);
            }
            let streams = allStreamsPaged.filter((stream) => {
              if (Object.prototype.hasOwnProperty.call(stream, "producerId") && stream.producerId != null && stream.producerId !== "" || Object.prototype.hasOwnProperty.call(stream, "audioID") && stream["audioID"] != null && stream["audioID"] !== "") {
                let producerId = stream.producerId || stream["audioID"];
                let matchingParticipant = ref_participants.find(
                  (obj) => obj["audioID"] === producerId || obj.videoID === producerId || (producerId == "youyou" || producerId == "youyouyou") && member == participant.name
                );
                return matchingParticipant && matchingParticipant.name === participant.name || participant.name == member && (producerId == "youyou" || producerId == "youyouyou");
              } else {
                return Object.prototype.hasOwnProperty.call(stream, "name") && stream.name == participant.name;
              }
            });
            for (let stream of streams) {
              if (currentStreams.length < limit_) {
                currentStreams.push(stream);
              }
            }
          }
          paginatedStreams.push(currentStreams);
        } catch {
        }
      }
      let remainingStreams = allStreamsPaged.filter((stream) => {
        if (Object.prototype.hasOwnProperty.call(stream, "producerId") && stream.producerId != null && stream.producerId !== "" || Object.prototype.hasOwnProperty.call(stream, "audioID") && stream["audioID"] != null && stream["audioID"] !== "") {
          let producerId = stream.producerId || stream["audioID"];
          let matchingParticipant = ref_participants.find(
            (obj) => obj["audioID"] === producerId || obj.videoID === producerId || (producerId == "youyou" || producerId == "youyouyou") && member == obj.name
          );
          return matchingParticipant && !breakoutRooms.flat().map((obj) => obj.name).includes(matchingParticipant.name) && (!filterHost || matchingParticipant.name != host.name);
        } else {
          return !breakoutRooms.flat().map((obj) => obj.name).includes(stream.name ?? "") && (!filterHost || stream.name != host.name);
        }
      });
      if (memberInRoom) {
        let memberStream = allStreamsPaged.find((stream) => {
          if (Object.prototype.hasOwnProperty.call(stream, "producerId") && stream.producerId != null && stream.producerId !== "") {
            return stream.producerId == "youyou" || stream.producerId == "youyouyou";
          }
          return false;
        });
        if (memberStream && !remainingStreams.includes(memberStream)) {
          remainingStreams.unshift(memberStream);
        }
      }
      let remainingPaginatedStreams = [];
      if (remainingStreams.length > 0) {
        firstPage = remainingStreams.slice(0, limit_);
        remainingPaginatedStreams.push(firstPage);
        for (let i = limit_; i < remainingStreams.length; i += limit) {
          page = remainingStreams.slice(i, i + limit);
          remainingPaginatedStreams.push(page);
        }
      }
      mainRoomsLength = remainingPaginatedStreams.length;
      updateMainRoomsLength(mainRoomsLength);
      for (let i = remainingPaginatedStreams.length - 1; i >= 0; i--) {
        paginatedStreams.unshift(remainingPaginatedStreams[i]);
      }
    } else {
      firstPage = allStreamsPaged.slice(0, limit_);
      paginatedStreams.push(firstPage);
      for (let i = limit_; i < allStreamsPaged.length; i += limit) {
        page = allStreamsPaged.slice(i, i + limit);
        paginatedStreams.push(page);
      }
    }
    updateP_activeNames(p_activeNames);
    updateActiveNames(activeNames);
    updateDispActiveNames(dispActiveNames);
    updateNewLimitedStreams(newLimitedStreams);
    updateNon_alVideoStreams(non_alVideoStreams);
    updateRef_participants(ref_participants);
    updateSortAudioLoudness(sortAudioLoudness);
    updateMixed_alVideoStreams(mixed_alVideoStreams);
    updateNon_alVideoStreams_muted(non_alVideoStreams_muted);
    updatePaginatedStreams(paginatedStreams);
    prevDoPaginate = doPaginate;
    doPaginate = false;
    updatePrevDoPaginate(prevDoPaginate);
    updateDoPaginate(doPaginate);
    let isActive = false;
    if (paginatedStreams.length > 1) {
      if (!shareScreenStarted && !shared) {
        doPaginate = true;
      }
      updateDoPaginate(doPaginate);
      if (currentUserPage > paginatedStreams.length - 1) {
        if (breakOutRoomStarted && !breakOutRoomEnded) {
          currentUserPage = 0;
        } else {
          currentUserPage = paginatedStreams.length - 1;
        }
      } else if (currentUserPage == 0) {
        isActive = true;
      }
      updateCurrentUserPage(currentUserPage);
      updateNumberPages(paginatedStreams.length - 1);
      if (screenChanged) {
        await dispStreams2({
          lStreams: paginatedStreams[0],
          ind: 0,
          parameters
        });
      } else {
        await dispStreams2({
          lStreams: paginatedStreams[0],
          ind: 0,
          auto: true,
          parameters
        });
      }
      if (!isActive) {
        const currentPageBreak = currentUserPage - mainRoomsLength;
        await dispStreams2({
          lStreams: paginatedStreams[currentUserPage],
          ind: currentUserPage,
          parameters,
          breakRoom: currentPageBreak,
          inBreakRoom: currentPageBreak >= 0
        });
      }
    } else {
      currentUserPage = 0;
      updateCurrentUserPage(currentUserPage);
      if (screenChanged) {
        await dispStreams2({
          lStreams: paginatedStreams[0],
          ind: 0,
          parameters
        });
      } else {
        await dispStreams2({
          lStreams: paginatedStreams[0],
          ind: 0,
          auto: true,
          parameters
        });
      }
    }
  } catch (error) {
    console.log("changeVids error", error);
  }
};
async function checkScreenShare({ parameters }) {
  try {
    const {
      shared,
      showAlert,
      whiteboardStarted,
      whiteboardEnded,
      breakOutRoomStarted,
      breakOutRoomEnded,
      //mediasfu functions
      stopShareScreen: stopShareScreen2,
      requestScreenShare: requestScreenShare2
    } = parameters;
    if (shared) {
      if (whiteboardStarted && !whiteboardEnded) {
        showAlert?.({
          message: "Screen share is not allowed when whiteboard is active",
          type: "danger"
        });
        return;
      }
      await stopShareScreen2({ parameters });
    } else {
      if (breakOutRoomStarted && !breakOutRoomEnded) {
        showAlert?.({
          message: "Screen share is not allowed when breakout room is active",
          type: "danger"
        });
        return;
      }
      if (whiteboardStarted && !whiteboardEnded) {
        showAlert?.({
          message: "Screen share is not allowed when whiteboard is active",
          type: "danger"
        });
        return;
      }
      await requestScreenShare2({ parameters });
    }
  } catch (error) {
    console.log("checkScreenShare error", error);
  }
}
const closeAndResize = async ({ producerId, kind, parameters }) => {
  let { getUpdatedAllParams } = parameters;
  parameters = getUpdatedAllParams();
  let {
    allAudioStreams,
    allVideoStreams,
    activeNames,
    participants,
    streamNames,
    recordingDisplayType,
    recordingVideoOptimized,
    adminIDStream,
    newLimitedStreams,
    newLimitedStreamsIDs,
    oldAllStreams,
    shareScreenStarted,
    shared,
    meetingDisplayType,
    defer_receive,
    lock_screen,
    firstAll,
    first_round,
    gotAllVids,
    eventType,
    hostLabel,
    shareEnded,
    updateMainWindow,
    updateActiveNames,
    updateAllAudioStreams,
    updateAllVideoStreams,
    updateShareScreenStarted,
    updateUpdateMainWindow,
    updateNewLimitedStreams,
    updateOldAllStreams,
    updateDefer_receive,
    updateMainHeightWidth,
    updateShareEnded,
    updateLock_screen,
    updateFirstAll,
    updateFirst_round,
    //mediasfu functions
    reorderStreams: reorderStreams2,
    prepopulateUserMedia: prepopulateUserMedia2,
    getVideos: getVideos2,
    rePort: rePort2
  } = parameters;
  let participant;
  if (kind === "audio") {
    allAudioStreams = allAudioStreams.filter(function(audioStream) {
      return audioStream.producerId !== producerId;
    });
    updateAllAudioStreams(allAudioStreams);
    if (recordingDisplayType == "video" && recordingVideoOptimized == true) ;
    else {
      participant = participants.find(
        (obj) => obj.audioID === producerId
      );
      if (participant) {
        if (participant.videoID !== null && participant.videoID !== "") ;
        else {
          activeNames = activeNames.filter(function(name) {
            return name !== participant.name;
          });
          updateActiveNames(activeNames);
        }
      }
    }
    let checker = false;
    let alt_checker = false;
    if (meetingDisplayType == "video") {
      checker = participant[0].videoID != null && participant[0].videoID != "" && participant[0].videoID != void 0;
    } else {
      checker = true;
      alt_checker = true;
    }
    if (checker) {
      if (shareScreenStarted || shared) {
        if (!alt_checker) {
          await reorderStreams2({ parameters });
        }
      } else {
        if (alt_checker && meetingDisplayType != "video") {
          await reorderStreams2({ add: false, screenChanged: true, parameters });
        }
      }
    }
  } else if (kind === "video") {
    if (producerId == adminIDStream) {
      updateMainWindow = true;
      updateUpdateMainWindow(updateMainWindow);
    }
    try {
      allVideoStreams = allVideoStreams.filter(function(videoStream) {
        return videoStream.producerId !== producerId;
      });
      updateAllVideoStreams(allVideoStreams);
      try {
        oldAllStreams = oldAllStreams.filter(function(videoStream) {
          return videoStream.producerId !== producerId;
        });
        updateOldAllStreams(oldAllStreams);
      } catch {
      }
      try {
        newLimitedStreams = newLimitedStreams.filter(function(videoStream) {
          return videoStream.producerId !== producerId;
        });
        updateNewLimitedStreams(newLimitedStreams);
      } catch {
      }
    } catch {
      try {
        oldAllStreams = oldAllStreams.filter(function(videoStream) {
          return videoStream.producerId !== producerId;
        });
        updateOldAllStreams(oldAllStreams);
      } catch {
      }
    }
    try {
      activeNames = activeNames.filter(function(name) {
        let participant2 = streamNames.find(
          (obj) => obj.producerId === producerId
        );
        return name !== participant2["name"];
      });
      updateActiveNames(activeNames);
    } catch {
    }
    if (lock_screen) {
      defer_receive = true;
      if (newLimitedStreamsIDs.includes(producerId)) {
        await prepopulateUserMedia2({ name: hostLabel, parameters });
        await reorderStreams2({ add: false, screenChanged: true, parameters });
      }
    } else {
      await prepopulateUserMedia2({ name: hostLabel, parameters });
      await reorderStreams2({ add: false, screenChanged: true, parameters });
    }
  } else if (kind === "screenshare" || kind === "screen") {
    updateMainWindow = true;
    shareScreenStarted = false;
    shareEnded = true;
    lock_screen = false;
    firstAll = false;
    first_round = false;
    updateUpdateMainWindow(updateMainWindow);
    updateShareScreenStarted(shareScreenStarted);
    updateShareEnded(shareEnded);
    updateLock_screen(lock_screen);
    updateFirstAll(firstAll);
    updateFirst_round(first_round);
    if (!gotAllVids || defer_receive) {
      defer_receive = false;
      updateDefer_receive(defer_receive);
      await getVideos2({
        participants,
        allVideoStreams,
        oldAllStreams,
        updateAllVideoStreams,
        updateOldAllStreams
      });
      await rePort2({ parameters });
    }
    if (eventType == "conference") {
      updateMainHeightWidth(0);
    }
    await prepopulateUserMedia2({ name: hostLabel, parameters });
    await reorderStreams2({ add: false, screenChanged: true, parameters });
  }
};
async function compareActiveNames({
  restart = false,
  parameters
}) {
  try {
    const { getUpdatedAllParams } = parameters;
    parameters = getUpdatedAllParams();
    const {
      activeNames,
      prevActiveNames,
      updatePrevActiveNames,
      //mediasfu functions
      trigger: trigger2
    } = parameters;
    if (restart) {
      await trigger2({ ref_ActiveNames: activeNames, parameters });
      return;
    }
    const nameChanged = [];
    for (let i = 0; i < activeNames.length; i++) {
      const currentName = activeNames[i];
      const hasNameChanged = !prevActiveNames.includes(currentName);
      if (hasNameChanged) {
        nameChanged.push(true);
        await trigger2({ ref_ActiveNames: activeNames, parameters });
        break;
      }
    }
    const count = nameChanged.filter((value) => value === true).length;
    if (count < 1) {
      for (let i = 0; i < prevActiveNames.length; i++) {
        const currentName = prevActiveNames[i];
        const hasNameChanged = !activeNames.includes(currentName);
        if (hasNameChanged) {
          await trigger2({ ref_ActiveNames: activeNames, parameters });
          break;
        }
      }
    }
    updatePrevActiveNames([...activeNames]);
  } catch (error) {
    console.log("compareActiveNames error", error);
  }
}
async function compareScreenStates({
  restart = false,
  parameters
}) {
  try {
    const { getUpdatedAllParams } = parameters;
    parameters = getUpdatedAllParams();
    const {
      recordingDisplayType,
      recordingVideoOptimized,
      screenStates,
      prevScreenStates,
      activeNames,
      //mediasfu functions
      trigger: trigger2
    } = parameters;
    if (restart) {
      return;
    }
    for (let i = 0; i < screenStates.length; i++) {
      const currentScreenState = screenStates[i];
      const prevScreenState = prevScreenStates[i];
      const hasChanged = Object.keys(currentScreenState).some(
        (key) => currentScreenState[key] !== prevScreenState[key]
      );
      if (hasChanged) {
        if (recordingDisplayType === "video") {
          if (recordingVideoOptimized) {
            await trigger2({
              ref_ActiveNames: activeNames,
              parameters
            });
            break;
          }
        }
        await trigger2({ ref_ActiveNames: activeNames, parameters });
        break;
      }
    }
  } catch (error) {
    console.log("compareScreenStates error", error);
  }
}
async function validateApiKeyToken(value) {
  if (!/^[a-z0-9]{64}$/i.test(value)) {
    throw new Error("Invalid API key or token.");
  }
  return true;
}
async function connectSocket({ apiUserName, apiKey, apiToken, link }) {
  if (!apiUserName) {
    throw new Error("API username required.");
  }
  if (!(apiKey || apiToken)) {
    throw new Error("API key or token required.");
  }
  if (!link) {
    throw new Error("Socket link required.");
  }
  let useKey = false;
  try {
    if (apiKey && apiKey.length === 64) {
      await validateApiKeyToken(apiKey);
      useKey = true;
    } else if (apiToken && apiToken.length === 64) {
      await validateApiKeyToken(apiToken);
      useKey = false;
    } else {
      throw new Error("Invalid API key or token format.");
    }
  } catch {
    throw new Error("Invalid API key or token.");
  }
  let socket;
  return new Promise((resolve, reject) => {
    if (useKey) {
      socket = io(`${link}/media`, {
        transports: ["websocket"],
        query: {
          apiUserName,
          apiKey
        }
      });
    } else {
      socket = io(`${link}/media`, {
        transports: ["websocket"],
        query: {
          apiUserName,
          apiToken
        }
      });
    }
    socket.on("connection-success", ({ socketId }) => {
      let conn = "media";
      try {
        if (link.includes("mediasfu.com") && (link.match(/c/g)?.length ?? 0) > 1) {
          conn = "consume";
        }
      } catch {
      }
      console.log(`Connected to ${conn} socket with ID: ${socketId}`);
      resolve(socket);
    });
    socket.on("connect_error", (error) => {
      reject(new Error("Error connecting to media socket: " + error.message));
    });
  });
}
async function connectLocalSocket({ link }) {
  if (!link) {
    throw new Error("Socket link required.");
  }
  let socket;
  return new Promise((resolve, reject) => {
    socket = io(`${link}/media`, {
      transports: ["websocket"]
    });
    socket.on("connection-success", (data) => {
      resolve({ socket, data });
    });
    socket.on("connect_error", (error) => {
      reject(new Error("Error connecting to media socket: " + error.message));
    });
  });
}
async function disconnectSocket({ socket }) {
  if (socket) {
    socket.disconnect();
  }
  return true;
}
const signalNewConsumerTransport = async ({
  remoteProducerId,
  islevel,
  nsock,
  parameters
}) => {
  try {
    let {
      device,
      consumingTransports,
      lock_screen,
      updateConsumingTransports,
      connectRecvTransport: connectRecvTransport2,
      reorderStreams: reorderStreams2
    } = parameters;
    const updatedParams = parameters.getUpdatedAllParams();
    device = updatedParams.device;
    consumingTransports = updatedParams.consumingTransports;
    if (consumingTransports.includes(remoteProducerId)) {
      return consumingTransports;
    }
    consumingTransports.push(remoteProducerId);
    updateConsumingTransports(consumingTransports);
    nsock.emit(
      "createWebRtcTransport",
      { consumer: true, islevel },
      async ({ params }) => {
        if (params.error) {
          return;
        }
        try {
          const consumerTransport = device.createRecvTransport({ ...params });
          consumerTransport.on(
            "connect",
            async ({ dtlsParameters }, callback, errback) => {
              try {
                nsock.emit("transport-recv-connect", {
                  dtlsParameters,
                  serverConsumerTransportId: params.id
                });
                callback();
              } catch (error) {
                errback(error);
              }
            }
          );
          consumerTransport.on("connectionstatechange", async (state) => {
            switch (state) {
              case "connecting":
                break;
              case "connected":
                break;
              case "failed":
                consumerTransport.close();
                if (lock_screen) {
                  await reorderStreams2({ add: true, parameters });
                } else {
                  await reorderStreams2({ add: false, parameters });
                }
                break;
              default:
                break;
            }
          });
          await connectRecvTransport2({
            consumerTransport,
            remoteProducerId,
            serverConsumerTransportId: params.id,
            nsock,
            parameters
          });
        } catch (error) {
          console.log(error, "createRecvTransport error");
          return;
        }
      }
    );
  } catch (error) {
    console.log(error, "signalNewConsumerTransport error");
    return;
  }
};
const newPipeProducer = async ({
  producerId,
  islevel,
  nsock,
  parameters
}) => {
  const {
    shareScreenStarted,
    shared,
    landScaped,
    showAlert,
    isWideScreen,
    updateFirst_round,
    updateLandScaped
  } = parameters;
  await signalNewConsumerTransport({
    remoteProducerId: producerId,
    islevel,
    nsock,
    parameters
  });
  let updatedFirstRound = false;
  if (shareScreenStarted || shared) {
    if (!isWideScreen) {
      if (!landScaped) {
        if (showAlert) {
          showAlert({
            message: "Please rotate your device to landscape mode for better experience",
            type: "success",
            duration: 3e3
          });
        }
        updateLandScaped(true);
      }
    }
    updatedFirstRound = true;
    updateFirst_round(updatedFirstRound);
  }
};
const producerClosed = async ({
  remoteProducerId,
  parameters
}) => {
  let { consumerTransports, closeAndResize: closeAndResize2, screenId, updateConsumerTransports } = parameters;
  const producerToClose = consumerTransports.find(
    (transportData) => transportData.producerId === remoteProducerId
  );
  if (!producerToClose) {
    return;
  }
  let kind = producerToClose.consumer.kind;
  if (producerToClose.producerId === screenId) {
    kind = "screenshare";
  }
  try {
    await producerToClose.consumerTransport.close();
  } catch (error) {
    console.error("Error closing consumer transport:", error);
  }
  try {
    producerToClose.consumer.close();
  } catch (error) {
    console.error("Error closing consumer:", error);
  }
  consumerTransports = consumerTransports.filter(
    (transportData) => transportData.producerId !== remoteProducerId
  );
  updateConsumerTransports(consumerTransports);
  await closeAndResize2({ producerId: remoteProducerId, kind, parameters });
};
const validateAlphanumeric$1 = async ({ str }) => {
  let code, i, len;
  for (i = 0, len = str.length; i < len; i++) {
    code = str.charCodeAt(i);
    if (!(code > 47 && code < 58) && // numeric (0-9)
    !(code > 64 && code < 91) && // upper alpha (A-Z)
    !(code > 96 && code < 123)) {
      return false;
    }
  }
  return true;
};
async function joinConRoom({ socket, roomName, islevel, member, sec, apiUserName }) {
  return new Promise((resolve, reject) => {
    if (!(sec && roomName && islevel && apiUserName && member)) {
      const validationError = {
        success: false,
        rtpCapabilities: null,
        reason: "Missing required parameters"
      };
      reject(validationError);
      return;
    }
    try {
      validateAlphanumeric$1({ str: roomName });
      validateAlphanumeric$1({ str: apiUserName });
      validateAlphanumeric$1({ str: member });
    } catch {
      const validationError = {
        success: false,
        rtpCapabilities: null,
        reason: "Invalid roomName or apiUserName or member"
      };
      reject(validationError);
      return;
    }
    if (!(roomName.startsWith("s") || roomName.startsWith("p"))) {
      const validationError = {
        success: false,
        rtpCapabilities: null,
        reason: "Invalid roomName, must start with s or p"
      };
      reject(validationError);
      return;
    }
    if (!(sec.length === 64 && roomName.length >= 8 && islevel.length === 1 && apiUserName.length >= 6 && (islevel == "0" || islevel == "1" || islevel == "2"))) {
      const validationError = {
        success: false,
        rtpCapabilities: null,
        reason: "Invalid roomName or islevel or apiUserName or secret"
      };
      reject(validationError);
      return;
    }
    socket.emit(
      "joinConRoom",
      { roomName, islevel, member, sec, apiUserName },
      async (data) => {
        try {
          if (data.rtpCapabilities == null) {
            if (data.banned) {
              throw new Error("User is banned.");
            }
            if (data.suspended) {
              throw new Error("User is suspended.");
            }
            if (data.noAdmin) {
              throw new Error("Host has not joined the room yet.");
            }
            resolve(data);
          } else {
            resolve(data);
          }
        } catch (error) {
          console.log("Error joining room:", error);
          reject(error);
        }
      }
    );
  });
}
const joinConsumeRoom = async ({
  remote_sock,
  apiToken,
  apiUserName,
  parameters
}) => {
  const {
    roomName,
    islevel,
    member,
    device,
    updateDevice,
    // Mediasfu functions
    receiveAllPipedTransports: receiveAllPipedTransports2,
    createDeviceClient: createDeviceClient2
  } = parameters;
  try {
    const data = await joinConRoom({ socket: remote_sock, roomName, islevel, member, sec: apiToken, apiUserName });
    if (data && data.success) {
      if (!device) {
        if (data.rtpCapabilities) {
          const device_ = await createDeviceClient2({
            rtpCapabilities: data.rtpCapabilities
          });
          if (device_) {
            updateDevice(device_);
          }
        }
      }
      await receiveAllPipedTransports2({ nsock: remote_sock, parameters });
    }
    return data;
  } catch (error) {
    console.error("Error in joinConsumeRoom:", error);
    throw new Error("Failed to join the consumption room or set up necessary components.");
  }
};
const connectIps = async ({
  consume_sockets,
  remIP,
  apiUserName,
  apiKey,
  apiToken,
  // mediasfu methods
  newProducerMethod = newPipeProducer,
  closedProducerMethod = producerClosed,
  joinConsumeRoomMethod = joinConsumeRoom,
  parameters
}) => {
  try {
    const { roomRecvIPs, updateRoomRecvIPs, updateConsume_sockets } = parameters;
    if (!consume_sockets || !remIP || !apiUserName || !apiKey && !apiToken) {
      console.log("Missing required parameters", {
        consume_sockets,
        remIP,
        apiUserName,
        apiToken
      });
      return [consume_sockets, roomRecvIPs];
    }
    for (const ip of remIP) {
      try {
        const matching = consume_sockets.find((socketObj) => Object.keys(socketObj)[0] === ip);
        if (matching || !ip) {
          continue;
        }
        const remote_sock = await connectSocket({ apiUserName, apiKey, apiToken, link: `https://${ip}.mediasfu.com` });
        if (remote_sock.id) {
          if (!roomRecvIPs.includes(ip)) {
            roomRecvIPs.push(ip);
            updateRoomRecvIPs(roomRecvIPs);
          }
          remote_sock.on("new-pipe-producer", async ({ producerId, islevel }) => {
            if (newProducerMethod) {
              await newProducerMethod({
                producerId,
                islevel,
                nsock: remote_sock,
                parameters
              });
            }
          });
          remote_sock.on("producer-closed", async ({ remoteProducerId }) => {
            if (closedProducerMethod) {
              await closedProducerMethod({ remoteProducerId, parameters });
            }
          });
          if (joinConsumeRoomMethod) {
            let data = await joinConsumeRoomMethod({
              remote_sock,
              apiToken,
              apiUserName,
              parameters
            });
            if (!data.rtpCapabilities) {
              return [consume_sockets, roomRecvIPs];
            }
          }
          consume_sockets.push({ [ip]: remote_sock });
          updateConsume_sockets(consume_sockets);
        }
      } catch (error) {
        console.log("connectIps error", error);
      }
    }
    return [consume_sockets, roomRecvIPs];
  } catch (error) {
    console.log("connectIps error", error);
    return [consume_sockets, parameters.roomRecvIPs];
  }
};
const connectLocalIps = async ({
  socket,
  // mediasfu methods
  newProducerMethod = newPipeProducer,
  closedProducerMethod = producerClosed,
  parameters
}) => {
  try {
    socket.on("new-producer", async ({ producerId, islevel }) => {
      if (newProducerMethod) {
        await newProducerMethod({
          producerId,
          islevel,
          nsock: socket,
          parameters
        });
      }
    });
    socket.on("producer-closed", async ({ remoteProducerId }) => {
      if (closedProducerMethod) {
        await closedProducerMethod({ remoteProducerId, parameters });
      }
    });
    await parameters.receiveAllPipedTransports({ nsock: socket, community: true, parameters });
  } catch (error) {
    console.log("ConnectLocalIps error", error);
  }
};
const connectRecvTransport = async ({
  consumerTransport,
  remoteProducerId,
  serverConsumerTransportId,
  nsock,
  parameters
}) => {
  parameters = parameters.getUpdatedAllParams();
  const {
    device,
    consumerTransports,
    updateConsumerTransports,
    consumerResume: consumerResume2
  } = parameters;
  try {
    nsock.emit(
      "consume",
      {
        rtpCapabilities: device.rtpCapabilities,
        remoteProducerId,
        serverConsumerTransportId
      },
      async ({ params }) => {
        if (params.error) {
          console.log("consume error", params.error);
          return;
        }
        try {
          const consumer = await consumerTransport.consume({
            id: params.id,
            producerId: params.producerId,
            kind: params.kind,
            rtpParameters: params.rtpParameters
          });
          consumerTransports.push({
            consumerTransport,
            serverConsumerTransportId: params.id,
            producerId: remoteProducerId,
            consumer,
            socket_: nsock
          });
          updateConsumerTransports(consumerTransports);
          const { track } = consumer;
          nsock.emit(
            "consumer-resume",
            { serverConsumerId: params.serverConsumerId },
            async ({ resumed }) => {
              if (resumed) {
                try {
                  await consumerResume2({
                    track,
                    kind: params.kind,
                    remoteProducerId,
                    params,
                    parameters,
                    nsock,
                    consumer
                  });
                } catch (error) {
                  console.log("consumerResume error", error);
                }
              }
            }
          );
        } catch (error) {
          console.log("consume error", error);
          return;
        }
      }
    );
  } catch (error) {
    console.log("connectRecvTransport error", error);
  }
};
const connectSendTransport = async ({ option, targetOption = "all", parameters }) => {
  try {
    let {
      audioParams,
      videoParams,
      localStreamScreen,
      canvasStream,
      whiteboardStarted,
      whiteboardEnded,
      shared,
      islevel,
      //media functions
      connectSendTransportAudio: connectSendTransportAudio2,
      connectSendTransportVideo: connectSendTransportVideo2,
      connectSendTransportScreen: connectSendTransportScreen2
    } = parameters;
    if (option === "audio") {
      await connectSendTransportAudio2({
        targetOption,
        audioParams,
        parameters
      });
    } else if (option === "video") {
      await connectSendTransportVideo2({
        targetOption,
        videoParams,
        parameters
      });
    } else if (option === "screen") {
      if (whiteboardStarted && !whiteboardEnded && canvasStream && islevel === "2" && !shared) {
        await connectSendTransportScreen2({
          targetOption,
          stream: canvasStream,
          parameters
        });
      } else {
        await connectSendTransportScreen2({
          targetOption,
          stream: localStreamScreen,
          parameters
        });
      }
    } else {
      await connectSendTransportAudio2({
        targetOption,
        audioParams,
        parameters
      });
      await connectSendTransportVideo2({
        targetOption,
        videoParams,
        parameters
      });
    }
  } catch (error) {
    console.log("connectSendTransport error", error);
  }
};
const connectLocalSendTransportAudio = async ({
  parameters,
  audioParams
}) => {
  try {
    let {
      localAudioProducer,
      localProducerTransport,
      updateLocalAudioProducer,
      updateLocalProducerTransport
    } = parameters;
    if (localProducerTransport) {
      localAudioProducer = await localProducerTransport.produce(audioParams);
      updateLocalAudioProducer?.(localAudioProducer);
      updateLocalProducerTransport?.(localProducerTransport);
    }
  } catch (error) {
    console.error("Error connecting local audio transport:", error);
    throw error;
  }
};
const updateMicLevel = async (audioProducer, updateAudioLevel) => {
  try {
    setInterval(() => {
      const sender = audioProducer.rtpSender;
      sender?.getStats().then((stats) => {
        stats.forEach((report) => {
          if (report.type === "media-source" && report.kind === "audio" && report.audioLevel !== void 0) {
            const newLevel = 127.5 + report.audioLevel * 127.5;
            updateAudioLevel(newLevel);
          }
        });
      });
    }, 1e3);
  } catch {
  }
};
const connectSendTransportAudio = async ({
  parameters,
  audioParams,
  targetOption = "all"
}) => {
  try {
    let {
      audioProducer,
      producerTransport,
      updateAudioProducer,
      updateProducerTransport
    } = parameters;
    if (targetOption === "all" || targetOption === "remote") {
      audioProducer = await producerTransport.produce(audioParams);
      updateMicLevel(audioProducer, parameters.updateAudioLevel);
      updateAudioProducer(audioProducer);
      updateProducerTransport(producerTransport);
    }
    if (targetOption === "all" || targetOption === "local") {
      try {
        await connectLocalSendTransportAudio({ parameters, audioParams });
        if (targetOption === "local" && parameters.updateAudioLevel) {
          if (!parameters.localAudioProducer) {
            parameters = parameters.getUpdatedAllParams();
          }
          updateMicLevel(parameters.localAudioProducer, parameters.updateAudioLevel);
        }
      } catch (localError) {
        console.error("Local audio transport connection failed:", localError);
      }
    }
  } catch (primaryError) {
    console.error("audio transport connection failed:", primaryError);
    throw new Error("Failed to connect to audio transport.");
  }
};
const connectLocalSendTransportScreen = async ({
  stream,
  parameters
}) => {
  try {
    let {
      localScreenProducer,
      localProducerTransport,
      updateLocalScreenProducer,
      updateLocalProducerTransport,
      device
    } = parameters;
    const codec = device?.rtpCapabilities?.codecs?.find(
      (codec2) => codec2.mimeType.toLowerCase() === "video/vp9"
    );
    if (localProducerTransport) {
      localScreenProducer = await localProducerTransport.produce({
        track: stream.getVideoTracks()[0],
        codec,
        appData: { mediaTag: "screen-video" }
      });
      updateLocalScreenProducer?.(localScreenProducer);
      updateLocalProducerTransport?.(localProducerTransport);
    }
  } catch (error) {
    console.error("Error connecting local screen transport:", error);
    throw error;
  }
};
const connectSendTransportScreen = async ({
  stream,
  parameters,
  targetOption = "all"
}) => {
  try {
    let {
      screenProducer,
      device,
      screenParams,
      producerTransport,
      params,
      updateScreenProducer,
      updateProducerTransport
    } = parameters;
    device = parameters.getUpdatedAllParams().device;
    params = screenParams;
    const codec = device?.rtpCapabilities?.codecs?.find(
      (codec2) => codec2.mimeType.toLowerCase() === "video/vp9"
    );
    if (targetOption === "remote" || targetOption === "all") {
      screenProducer = await producerTransport.produce({
        track: stream.getVideoTracks()[0],
        ...params,
        codec,
        appData: { mediaTag: "screen-video" }
      });
      updateScreenProducer(screenProducer);
      updateProducerTransport(producerTransport);
    }
    if (targetOption === "local" || targetOption === "all") {
      try {
        await connectLocalSendTransportScreen({ stream, parameters });
      } catch (localError) {
        console.log("Error connecting local screen transport:", localError);
      }
    }
  } catch (error) {
    console.log("connectSendTransportScreen error", error);
    throw error;
  }
};
const connectLocalSendTransportVideo = async ({
  videoParams,
  parameters
}) => {
  try {
    let {
      localVideoProducer,
      localProducerTransport,
      updateLocalVideoProducer,
      updateLocalProducerTransport
    } = parameters;
    if (localProducerTransport) {
      localVideoProducer = await localProducerTransport.produce(videoParams);
      updateLocalVideoProducer?.(localVideoProducer);
      updateLocalProducerTransport?.(localProducerTransport);
    }
  } catch (error) {
    console.error("Error connecting local video transport:", error);
    throw error;
  }
};
const connectSendTransportVideo = async ({
  videoParams,
  parameters,
  targetOption = "all"
}) => {
  try {
    let {
      videoProducer,
      producerTransport,
      islevel,
      updateMainWindow,
      updateVideoProducer,
      updateProducerTransport,
      updateUpdateMainWindow
    } = parameters;
    if (targetOption === "all" || targetOption === "remote") {
      videoProducer = await producerTransport.produce(videoParams);
      if (islevel === "2") {
        updateMainWindow = true;
      }
      updateVideoProducer(videoProducer);
      updateProducerTransport(producerTransport);
      updateUpdateMainWindow(updateMainWindow);
    }
    if (targetOption === "all" || targetOption === "local") {
      try {
        await connectLocalSendTransportVideo({ videoParams, parameters });
      } catch (localError) {
        console.log("Error connecting local video transport:", localError);
      }
    }
  } catch (error) {
    console.log("connectSendTransportVideo error", error);
    throw error;
  }
};
const createLocalSendTransport = async ({
  option,
  parameters
}) => {
  try {
    let {
      islevel,
      member,
      socket,
      localSocket,
      device,
      localProducerTransport,
      localTransportCreated,
      updateLocalProducerTransport,
      updateLocalTransportCreated,
      connectSendTransport: connectSendTransport2
    } = parameters;
    if (!localSocket || !localSocket.id || socket.id === localSocket.id) {
      return;
    }
    localSocket.emit(
      "createWebRtcTransport",
      { consumer: false, islevel },
      async ({ params }) => {
        if (params && params.error) {
          console.error("Error in local createWebRtcTransport:", params.error);
          return;
        }
        localProducerTransport = await device.createSendTransport(params);
        if (updateLocalProducerTransport) {
          updateLocalProducerTransport(localProducerTransport);
        }
        localProducerTransport.on(
          "connect",
          async ({ dtlsParameters }, callback, errback) => {
            try {
              localSocket.emit("transport-connect", { dtlsParameters });
              callback();
            } catch (error) {
              errback(error);
            }
          }
        );
        localProducerTransport.on(
          "produce",
          async (parameters2, callback, errback) => {
            try {
              localSocket.emit(
                "transport-produce",
                {
                  kind: parameters2.kind,
                  rtpParameters: parameters2.rtpParameters,
                  appData: parameters2.appData,
                  islevel,
                  name: member
                },
                ({ id }) => callback({ id })
              );
            } catch (error) {
              errback(error);
            }
          }
        );
        localProducerTransport.on("connectionstatechange", (state) => {
          if (state === "failed") {
            console.error("Local transport connection failed.");
            if (localProducerTransport) {
              localProducerTransport.close();
            }
          }
        });
        localTransportCreated = true;
        updateLocalTransportCreated?.(localTransportCreated);
        await connectSendTransport2({
          targetOption: "local",
          option,
          parameters: { ...parameters, localProducerTransport }
        });
      }
    );
  } catch (error) {
    console.error("Error creating local send transport:", error);
  }
};
const createSendTransport = async ({
  option,
  parameters
}) => {
  try {
    let {
      islevel,
      member,
      socket,
      device,
      producerTransport,
      transportCreated,
      updateProducerTransport,
      updateTransportCreated,
      connectSendTransport: connectSendTransport2
    } = parameters;
    const updatedParams = parameters.getUpdatedAllParams();
    device = updatedParams.device;
    socket = updatedParams.socket;
    try {
      await createLocalSendTransport({ option, parameters });
    } catch (error) {
      console.log("Error creating local send transport:", error);
    }
    socket.emit(
      "createWebRtcTransport",
      { consumer: false, islevel },
      async ({ params }) => {
        if (params && params.error) {
          console.error("Error in createWebRtcTransport:", params.error);
          return;
        }
        producerTransport = await device.createSendTransport(params);
        updateProducerTransport(producerTransport);
        producerTransport.on(
          "connect",
          async ({ dtlsParameters }, callback, errback) => {
            try {
              socket.emit("transport-connect", { dtlsParameters });
              callback();
            } catch (error) {
              errback(error);
            }
          }
        );
        producerTransport.on(
          "produce",
          async (parameters2, callback, errback) => {
            try {
              socket.emit(
                "transport-produce",
                {
                  kind: parameters2.kind,
                  rtpParameters: parameters2.rtpParameters,
                  appData: parameters2.appData,
                  islevel,
                  name: member
                },
                async ({ id }) => {
                  callback({ id });
                }
              );
            } catch (error) {
              errback(error);
            }
          }
        );
        producerTransport.on("connectionstatechange", async (state) => {
          switch (state) {
            case "connecting":
              break;
            case "connected":
              break;
            case "failed":
              console.log("Transport connection failed.");
              producerTransport.close();
              break;
            default:
              break;
          }
        });
        transportCreated = true;
        parameters = parameters.getUpdatedAllParams();
        await connectSendTransport2({
          targetOption: "remote",
          option,
          parameters: {
            ...parameters,
            producerTransport
          }
        });
        updateTransportCreated(transportCreated);
      }
    );
  } catch (error) {
    console.log("Error creating send transport:", error);
  }
};
const disconnectLocalSendTransportAudio = async ({
  parameters
}) => {
  try {
    const {
      localAudioProducer,
      localSocket,
      roomName,
      updateLocalAudioProducer
    } = parameters;
    if (localSocket && localSocket.id) {
      if (localAudioProducer) {
        localAudioProducer.close();
        updateLocalAudioProducer?.(null);
      }
      localSocket.emit("pauseProducerMedia", { mediaTag: "audio", roomName });
    } else {
      return;
    }
  } catch (error) {
    console.log("Error disconnecting local audio send transport:", error);
    throw error;
  }
};
const disconnectSendTransportAudio = async ({
  parameters
}) => {
  try {
    let {
      audioProducer,
      socket,
      videoAlreadyOn,
      islevel,
      lock_screen,
      shared,
      updateMainWindow,
      hostLabel,
      roomName,
      updateAudioProducer,
      updateUpdateMainWindow,
      //mediasfu functions
      prepopulateUserMedia: prepopulateUserMedia2
    } = parameters;
    if (audioProducer) {
      audioProducer.pause();
      updateAudioProducer(audioProducer);
    }
    if (!videoAlreadyOn && islevel === "2") {
      if (!lock_screen && !shared) {
        updateMainWindow = true;
        updateUpdateMainWindow(updateMainWindow);
        await prepopulateUserMedia2({ name: hostLabel, parameters });
        updateMainWindow = false;
        updateUpdateMainWindow(updateMainWindow);
      }
    }
    socket.emit("pauseProducerMedia", {
      mediaTag: "audio",
      roomName
    });
    try {
      await disconnectLocalSendTransportAudio({ parameters });
    } catch (localError) {
      console.log("Error disconnecting local audio send transport:", localError);
    }
  } catch (error) {
    console.log("Error disconnecting primary audio send transport:", error);
  }
};
const disconnectLocalSendTransportScreen = async ({ parameters }) => {
  try {
    let {
      localScreenProducer,
      localSocket,
      roomName,
      updateLocalScreenProducer
    } = parameters;
    if (localSocket && localSocket.id) {
      localScreenProducer.close();
      updateLocalScreenProducer(localScreenProducer);
      localSocket.emit("closeScreenProducer");
      localSocket.emit("pauseProducerMedia", { mediaTag: "screen", roomName });
    }
  } catch {
    console.log("Error disconnecting local send transport for screen");
  }
};
const disconnectSendTransportScreen = async ({ parameters }) => {
  let { getUpdatedAllParams } = parameters;
  parameters = getUpdatedAllParams();
  try {
    let {
      screenProducer,
      socket,
      roomName,
      updateScreenProducer
    } = parameters;
    screenProducer.close();
    updateScreenProducer(screenProducer);
    socket.emit("closeScreenProducer");
    socket.emit("pauseProducerMedia", { mediaTag: "screen", roomName });
  } catch (error) {
    if (error instanceof Error) {
      console.log("Error disconnecting send transport for screen:", error.message);
    } else {
      console.log("Error disconnecting send transport for screen:", error);
    }
  }
  try {
    await disconnectLocalSendTransportScreen({ parameters });
  } catch {
  }
};
const disconnectLocalSendTransportVideo = async ({
  parameters
}) => {
  try {
    const {
      localVideoProducer,
      localSocket,
      roomName,
      updateLocalVideoProducer
    } = parameters;
    if (localSocket && localSocket.id) {
    } else {
      return;
    }
    if (localVideoProducer) {
      localVideoProducer.close();
      updateLocalVideoProducer?.(null);
    }
    localSocket.emit("pauseProducerMedia", { mediaTag: "video", roomName });
  } catch (error) {
    console.error("Error disconnecting local video send transport:", error);
    throw error;
  }
};
const disconnectSendTransportVideo = async ({
  parameters
}) => {
  try {
    let {
      videoProducer,
      socket,
      islevel,
      roomName,
      updateMainWindow,
      lock_screen,
      updateUpdateMainWindow,
      updateVideoProducer,
      reorderStreams: reorderStreams2
    } = parameters;
    if (videoProducer) {
      videoProducer.close();
      updateVideoProducer(null);
    }
    socket.emit("pauseProducerMedia", { mediaTag: "video", roomName });
    if (islevel === "2") {
      updateMainWindow = true;
      updateUpdateMainWindow(updateMainWindow);
    }
    if (lock_screen) {
      await reorderStreams2({ add: true, screenChanged: true, parameters });
    } else {
      await reorderStreams2({ add: false, screenChanged: true, parameters });
    }
    try {
      await disconnectLocalSendTransportVideo({ parameters });
    } catch (localError) {
      console.error("Error disconnecting local video send transport:", localError);
    }
  } catch (error) {
    if (error instanceof Error) {
      console.log("Error disconnecting send transport for video:", error.message);
    } else {
      console.log("Error disconnecting send transport for video:", error);
    }
  }
};
async function dispStreams({
  lStreams,
  ind,
  auto = false,
  ChatSkip = false,
  forChatID = null,
  parameters,
  breakRoom = -1,
  inBreakRoom = false
}) {
  let { getUpdatedAllParams } = parameters;
  parameters = getUpdatedAllParams();
  let {
    consumerTransports,
    streamNames,
    audStreamNames,
    participants,
    ref_participants,
    recordingDisplayType,
    recordingVideoOptimized,
    meetingDisplayType,
    meetingVideoOptimized,
    currentUserPage,
    hostLabel,
    mainHeightWidth,
    prevMainHeightWidth,
    prevDoPaginate,
    doPaginate,
    firstAll,
    shared,
    shareScreenStarted,
    shareEnded,
    oldAllStreams,
    updateMainWindow,
    remoteProducerId,
    activeNames,
    dispActiveNames,
    p_dispActiveNames,
    nForReadjustRecord,
    first_round,
    lock_screen,
    chatRefStreams,
    eventType,
    islevel,
    localStreamVideo,
    breakOutRoomStarted,
    breakOutRoomEnded,
    keepBackground,
    virtualStream,
    updateActiveNames,
    updateDispActiveNames,
    updateLStreams,
    updateChatRefStreams,
    updateNForReadjustRecord,
    updateUpdateMainWindow,
    updateShowMiniView,
    prepopulateUserMedia: prepopulateUserMedia2,
    rePort: rePort2,
    processConsumerTransports: processConsumerTransports2,
    resumePauseStreams: resumePauseStreams2,
    readjust: readjust2,
    addVideosGrid: addVideosGrid2,
    checkGrid: checkGrid2,
    getEstimate: getEstimate2,
    resumePauseAudioStreams: resumePauseAudioStreams2
  } = parameters;
  let proceed = true;
  let lStreams_ = lStreams.filter((stream) => stream.producerId !== "youyou" && stream.producerId !== "youyouyou");
  lStreams_ = lStreams_.filter((stream) => stream.id !== "youyou" && stream.id !== "youyouyou" && stream.name !== "youyou" && stream.name !== "youyouyou");
  if (eventType === "chat") {
    proceed = true;
  } else if (ind === 0 || islevel !== "2" && currentUserPage === ind) {
    proceed = false;
    lStreams_.forEach((stream) => {
      let checker = false;
      let check_level = 0;
      if (recordingDisplayType === "video") {
        if (recordingVideoOptimized) {
          if (Object.prototype.hasOwnProperty.call(stream, "producerId") && stream.producerId != null && stream.producerId !== "") {
            checker = true;
            check_level = 0;
          }
        } else {
          if (Object.prototype.hasOwnProperty.call(stream, "producerId") && stream.producerId != null && stream.producerId !== "" || Object.prototype.hasOwnProperty.call(stream, "audioID") && stream.audioID != null && stream.audioID !== "") {
            checker = true;
            check_level = 1;
          }
        }
      } else if (recordingDisplayType === "media") {
        if (Object.prototype.hasOwnProperty.call(stream, "producerId") && stream.producerId != null && stream.producerId !== "" || Object.prototype.hasOwnProperty.call(stream, "audioID") && stream.audioID != null && stream.audioID !== "") {
          checker = true;
          check_level = 1;
        }
      } else {
        if (Object.prototype.hasOwnProperty.call(stream, "producerId") && stream.producerId != null && stream.producerId !== "" || Object.prototype.hasOwnProperty.call(stream, "audioID") && stream.audioID != null && stream.audioID !== "" || Object.prototype.hasOwnProperty.call(stream, "name") && stream.name !== null && stream.name != "") {
          checker = true;
          check_level = 2;
        }
      }
      let participant;
      if (checker) {
        if (check_level == 0) {
          if (Object.prototype.hasOwnProperty.call(stream, "producerId") && stream.producerId != null && stream.producerId !== "") {
            participant = streamNames.find(
              (obj) => obj.producerId === stream.producerId
            );
          }
        } else if (check_level == 1) {
          if (Object.prototype.hasOwnProperty.call(stream, "producerId") && stream.producerId != null && stream.producerId !== "") {
            participant = streamNames.find(
              (obj) => obj.producerId === stream.producerId
            );
          }
          if (!participant) {
            if (Object.prototype.hasOwnProperty.call(stream, "audioID") && stream.audioID != null && stream.audioID !== "") {
              participant = audStreamNames.find(
                (obj) => obj.producerId === stream.audioID
              );
              if (!participant) {
                participant = ref_participants.find(
                  (obj) => obj.audioID === stream.audioID
                );
              }
            }
          }
        } else if (check_level == 2) {
          if (Object.prototype.hasOwnProperty.call(stream, "producerId") && stream.producerId != null && stream.producerId !== "") {
            participant = streamNames.find(
              (obj) => obj.producerId === stream.producerId
            );
          }
          if (!participant) {
            if (Object.prototype.hasOwnProperty.call(stream, "audioID") && stream.audioID != null && stream.audioID !== "") {
              participant = audStreamNames.find(
                (obj) => obj.producerId === stream.audioID
              );
              if (!participant) {
                participant = ref_participants.find(
                  (obj) => obj.audioID === stream.audioID
                );
              }
            }
          }
          if (!participant) {
            if (Object.prototype.hasOwnProperty.call(stream, "name") && stream.name !== null && stream.name != "") {
              participant = ref_participants.find(
                (obj) => obj.name === stream.name
              );
            }
          }
        }
        if (participant) {
          if (participant.name && !activeNames.includes(participant.name)) {
            activeNames.push(participant.name);
          }
        }
      }
    });
    updateActiveNames(activeNames);
    lStreams_.forEach((stream) => {
      let disp_checker = false;
      let disp_check_level = 0;
      if (meetingDisplayType == "video") {
        if (meetingVideoOptimized) {
          if (Object.prototype.hasOwnProperty.call(stream, "producerId") && stream.producerId != null && stream.producerId !== "") {
            disp_checker = true;
            disp_check_level = 0;
          }
        } else {
          if (Object.prototype.hasOwnProperty.call(stream, "producerId") && stream.producerId != null && stream.producerId !== "" || Object.prototype.hasOwnProperty.call(stream, "audioID") && stream.audioID != null && stream.audioID !== "") {
            disp_checker = true;
            disp_check_level = 1;
          }
        }
      } else if (meetingDisplayType == "media") {
        if (Object.prototype.hasOwnProperty.call(stream, "producerId") && stream.producerId != null && stream.producerId !== "" || Object.prototype.hasOwnProperty.call(stream, "audioID") && stream.audioID != null && stream.audioID !== "") {
          disp_checker = true;
          disp_check_level = 1;
        }
      } else {
        if (Object.prototype.hasOwnProperty.call(stream, "producerId") && stream.producerId != null && stream.producerId !== "" || Object.prototype.hasOwnProperty.call(stream, "audioID") && stream.audioID != null && stream.audioID !== "" || Object.prototype.hasOwnProperty.call(stream, "name") && stream.name !== null && stream.name != "") {
          disp_checker = true;
          disp_check_level = 2;
        }
      }
      let participant_;
      if (disp_checker) {
        if (disp_check_level == 0) {
          if (Object.prototype.hasOwnProperty.call(stream, "producerId") && stream.producerId != null && stream.producerId !== "") {
            participant_ = streamNames.find(
              (obj) => obj.producerId === stream.producerId
            );
          }
        } else if (disp_check_level == 1) {
          if (Object.prototype.hasOwnProperty.call(stream, "producerId") && stream.producerId != null && stream.producerId !== "") {
            participant_ = streamNames.find(
              (obj) => obj.producerId === stream.producerId
            );
          }
          if (!participant_) {
            if (Object.prototype.hasOwnProperty.call(stream, "audioID") && stream.audioID != null && stream.audioID !== "") {
              participant_ = audStreamNames.find(
                (obj) => obj.producerId === stream.audioID
              );
              if (!participant_) {
                participant_ = ref_participants.find(
                  (obj) => obj.audioID === stream.audioID
                );
              }
            }
          }
        } else if (disp_check_level == 2) {
          if (Object.prototype.hasOwnProperty.call(stream, "producerId") && stream.producerId != null && stream.producerId !== "") {
            participant_ = streamNames.find(
              (obj) => obj.producerId === stream.producerId
            );
          }
          if (!participant_) {
            if (Object.prototype.hasOwnProperty.call(stream, "audioID") && stream.audioID != null && stream.audioID !== "") {
              participant_ = audStreamNames.find(
                (obj) => obj.producerId === stream.audioID
              );
              if (!participant_) {
                participant_ = ref_participants.find(
                  (obj) => obj.audioID === stream.audioID
                );
              }
            }
          }
          if (!participant_) {
            if (Object.prototype.hasOwnProperty.call(stream, "name") && stream.name !== null && stream.name != "") {
              participant_ = ref_participants.find(
                (obj) => obj.name === stream.name
              );
            }
          }
        }
      }
      if (participant_) {
        if (participant_.name && !dispActiveNames.includes(participant_.name)) {
          dispActiveNames.push(participant_.name);
          if (!p_dispActiveNames.includes(participant_.name)) {
            proceed = true;
          }
        }
      }
    });
    updateDispActiveNames(dispActiveNames);
    if (lStreams_.length < 1 && (shareScreenStarted || shared || !firstAll)) {
      proceed = true;
    }
    if (shareScreenStarted || shared) ;
    else {
      if (prevMainHeightWidth !== mainHeightWidth) {
        updateMainWindow = true;
        updateUpdateMainWindow(updateMainWindow);
      }
    }
    nForReadjustRecord = activeNames.length;
    updateNForReadjustRecord(nForReadjustRecord);
  }
  if (!proceed && auto) {
    if (updateMainWindow && !lock_screen && !shared) {
      await prepopulateUserMedia2({ name: hostLabel, parameters });
    } else if (!first_round) {
      await prepopulateUserMedia2({ name: hostLabel, parameters });
    }
    if (ind === 0 && eventType !== "chat") {
      await rePort2({ parameters });
    }
    return;
  }
  if (eventType == "broadcast") {
    lStreams = lStreams_;
    updateLStreams(lStreams);
  } else if (eventType == "chat") {
    if (forChatID != null) {
      lStreams = chatRefStreams;
      updateLStreams(lStreams);
    } else {
      updateShowMiniView(false);
      if (islevel != "2") {
        let host = participants.find((obj) => {
          return obj.islevel === "2";
        });
        if (host) {
          let streame;
          remoteProducerId = host.videoID;
          if (islevel == "2") {
            host.stream = keepBackground && virtualStream ? virtualStream : localStreamVideo;
          } else {
            streame = oldAllStreams.find(
              (streame2) => streame2.producerId == remoteProducerId
            );
            if (streame) {
              lStreams = lStreams.filter((stream) => {
                return stream.name != host.name;
              });
              lStreams.push(streame);
            }
          }
        }
      }
      let youyou = lStreams.find((obj) => {
        return obj.producerId === "youyou" || obj.producerId === "youyouyou";
      });
      lStreams = lStreams.filter((stream) => {
        return stream.producerId != "youyou" && stream.producerId != "youyouyou";
      });
      if (youyou) {
        lStreams.push(youyou);
      }
      chatRefStreams = lStreams;
      updateLStreams(lStreams);
      updateChatRefStreams(chatRefStreams);
    }
  }
  let refLength = lStreams.length;
  const [, rows, cols] = getEstimate2({ n: refLength, parameters });
  let result = await checkGrid2({ rows, cols, actives: refLength }) || [false, 0, 0, 0, 0, 0, 0];
  let [removeAltGrid, numtoaddd, numRows, numCols, , actualRows, lastrowcols] = result;
  if (ChatSkip && eventType === "chat") {
    numRows = 1;
    numCols = 1;
    actualRows = 1;
  }
  await readjust2({ n: lStreams.length, state: ind, parameters });
  let mainGridStreams = lStreams.slice(0, numtoaddd);
  let altGridStreams = lStreams.slice(numtoaddd);
  if (doPaginate || prevDoPaginate !== doPaginate || shared || shareScreenStarted || shareEnded) {
    let lStreams_alt = lStreams_;
    await processConsumerTransports2({ consumerTransports, lStreams_: lStreams_alt, parameters });
    try {
      if (breakOutRoomStarted && !breakOutRoomEnded) {
        await resumePauseAudioStreams2({ inBreakRoom, breakRoom, parameters });
      } else {
        await resumePauseStreams2({ parameters });
      }
    } catch {
    }
    try {
      if (!breakOutRoomStarted || breakOutRoomStarted && breakOutRoomEnded) {
        await resumePauseStreams2({ parameters });
      }
    } catch {
    }
    if (shareEnded) {
      shareEnded = false;
    }
  }
  if (ChatSkip && eventType === "chat") {
    await addVideosGrid2({
      mainGridStreams,
      altGridStreams,
      numtoadd: numtoaddd - 1,
      numRows,
      numCols,
      actualRows,
      lastrowcols,
      removeAltGrid,
      parameters
    });
  } else {
    await addVideosGrid2({
      mainGridStreams,
      altGridStreams,
      numtoadd: numtoaddd,
      numRows,
      numCols,
      actualRows,
      lastrowcols,
      removeAltGrid,
      parameters
    });
  }
  if (updateMainWindow && !lock_screen && !shared) {
    await prepopulateUserMedia2({ name: hostLabel, parameters });
  } else if (!first_round) {
    await prepopulateUserMedia2({ name: hostLabel, parameters });
  }
  if (ind === 0 && eventType !== "chat") {
    await rePort2({ parameters });
  }
}
async function generatePageContent({
  page,
  parameters,
  breakRoom = -1,
  inBreakRoom = false
}) {
  try {
    let {
      paginatedStreams,
      currentUserPage,
      updateMainWindow,
      updateCurrentUserPage,
      updateUpdateMainWindow,
      //mediasfu functions
      dispStreams: dispStreams2
    } = parameters;
    page = typeof page === "string" ? parseInt(page) : page;
    currentUserPage = page;
    updateCurrentUserPage(currentUserPage);
    updateMainWindow = true;
    updateUpdateMainWindow(updateMainWindow);
    await dispStreams2({
      lStreams: paginatedStreams[page],
      ind: page,
      parameters,
      breakRoom,
      inBreakRoom
    });
  } catch (error) {
    if (error instanceof Error) {
      console.log("Error generating page content:", error.message);
    } else {
      console.log("Error generating page content:", error);
    }
  }
}
async function getVideos({
  participants,
  allVideoStreams,
  oldAllStreams,
  adminVidID,
  updateAllVideoStreams,
  updateOldAllStreams
}) {
  try {
    let admin = participants.filter(
      (participant) => participant.islevel === "2"
    );
    if (admin.length > 0) {
      adminVidID = admin[0].videoID;
      if (adminVidID != null && adminVidID !== "") {
        let oldAllStreams_ = [];
        if (oldAllStreams.length > 0) {
          oldAllStreams_ = oldAllStreams;
        }
        oldAllStreams = allVideoStreams.filter(
          (streame) => streame.producerId === adminVidID
        );
        if (oldAllStreams.length < 1) {
          oldAllStreams = oldAllStreams_;
        }
        updateOldAllStreams(oldAllStreams);
        allVideoStreams = allVideoStreams.filter(
          (streame) => streame.producerId !== adminVidID
        );
        updateAllVideoStreams(allVideoStreams);
      }
    }
  } catch (error) {
    console.log("Error updating video streams:", error.message);
  }
}
async function mixStreams({
  alVideoStreams,
  non_alVideoStreams,
  ref_participants
}) {
  try {
    const mixedStreams = [];
    const youyouStream = alVideoStreams.find(
      (obj) => obj.producerId === "youyou" || obj.producerId === "youyouyou"
    );
    let remainingAlVideoStreams = alVideoStreams.filter(
      (obj) => obj.producerId !== "youyou" && obj.producerId !== "youyouyou"
    );
    const unmutedAlVideoStreams = remainingAlVideoStreams.filter((obj) => {
      const participant = ref_participants.find(
        (p) => p.videoID === obj.producerId
      );
      return !obj.muted && participant && participant.muted === false;
    });
    const mutedAlVideoStreams = remainingAlVideoStreams.filter((obj) => {
      const participant = ref_participants.find(
        (p) => p.videoID === obj.producerId
      );
      return obj.muted || participant && participant.muted === true;
    });
    const nonAlVideoStreams = [...non_alVideoStreams];
    mixedStreams.push(...unmutedAlVideoStreams);
    let nonAlIndex = 0;
    for (let i = 0; i < mutedAlVideoStreams.length; i++) {
      if (nonAlIndex < nonAlVideoStreams.length) {
        mixedStreams.push(nonAlVideoStreams[nonAlIndex]);
        nonAlIndex++;
      }
      mixedStreams.push(mutedAlVideoStreams[i]);
    }
    for (let i = nonAlIndex; i < nonAlVideoStreams.length; i++) {
      mixedStreams.push(nonAlVideoStreams[i]);
    }
    if (youyouStream) {
      mixedStreams.unshift(youyouStream);
    }
    return mixedStreams;
  } catch (error) {
    console.log("Error mixing streams:", error.message);
    throw error;
  }
}
async function onScreenChanges({ changed, parameters }) {
  try {
    let {
      eventType,
      shareScreenStarted,
      shared,
      addForBasic,
      updateMainHeightWidth,
      updateAddForBasic,
      itemPageLimit,
      updateItemPageLimit,
      //mediasfu functions
      reorderStreams: reorderStreams2
    } = parameters;
    addForBasic = false;
    updateAddForBasic(addForBasic);
    if (eventType === "broadcast" || eventType === "chat") {
      addForBasic = true;
      updateAddForBasic(addForBasic);
      itemPageLimit = eventType === "broadcast" ? 1 : 2;
      updateItemPageLimit(itemPageLimit);
      updateMainHeightWidth(eventType === "broadcast" ? 100 : 0);
    } else {
      if (eventType === "conference" && !(shareScreenStarted || shared)) {
        updateMainHeightWidth(0);
      }
    }
    await reorderStreams2({ add: false, screenChanged: changed, parameters });
  } catch (error) {
    console.log("Error handling screen changes:", error.message);
  }
}
const prepopulateUserMedia = async () => {
  console.warn("prepopulateUserMedia called on shared package - should be implemented in framework package");
};
async function processConsumerTransports({
  consumerTransports,
  lStreams_,
  parameters
}) {
  try {
    let isValidProducerId = function(producerId, ...streamArrays) {
      return producerId !== null && producerId !== "" && streamArrays.some((streamArray) => {
        return streamArray.length > 0 && streamArray.some((stream) => stream?.producerId === producerId);
      });
    };
    parameters = parameters.getUpdatedAllParams();
    const {
      remoteScreenStream,
      oldAllStreams,
      newLimitedStreams,
      sleep
    } = parameters;
    const consumerTransportsToResume = consumerTransports.filter(
      (transport) => isValidProducerId(
        transport.producerId,
        lStreams_,
        remoteScreenStream,
        oldAllStreams,
        newLimitedStreams
      ) && transport.consumer?.paused === true && transport.consumer.kind !== "audio"
    );
    const consumerTransportsToPause = consumerTransports.filter(
      (transport) => transport.producerId && transport.producerId !== null && transport.producerId !== "" && !lStreams_.some(
        (stream) => stream.producerId === transport.producerId
      ) && transport.consumer && transport.consumer.kind && transport.consumer.paused !== true && transport.consumer.kind !== "audio" && !remoteScreenStream.some((stream) => stream.producerId === transport.producerId) && !oldAllStreams.some((stream) => stream.producerId === transport.producerId) && !newLimitedStreams.some((stream) => stream.producerId === transport.producerId)
    );
    await sleep({ ms: 100 });
    for (const transport of consumerTransportsToPause) {
      transport.consumer.pause();
      transport.socket_.emit(
        "consumer-pause",
        { serverConsumerId: transport.serverConsumerTransportId },
        async () => {
        }
      );
    }
    for (const transport of consumerTransportsToResume) {
      transport.socket_.emit(
        "consumer-resume",
        { serverConsumerId: transport.serverConsumerTransportId },
        async ({ resumed }) => {
          if (resumed) {
            transport.consumer.resume();
          }
        }
      );
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error processing consumer transports: ${error.message}`);
    } else {
      console.error("Error processing consumer transports:", error);
    }
  }
}
const processConsumerTransportsAudio = async ({
  consumerTransports,
  lStreams,
  parameters
}) => {
  try {
    const { sleep } = parameters;
    const isValidProducerId = (producerId, ...streamArrays) => {
      return producerId !== null && producerId !== "" && streamArrays.some((streamArray) => {
        return streamArray.length > 0 && streamArray.some((stream) => stream?.producerId === producerId);
      });
    };
    const consumerTransportsToResume = consumerTransports.filter(
      (transport) => isValidProducerId(transport.producerId, lStreams) && transport.consumer?.paused === true && transport.consumer.kind === "audio"
    );
    const consumerTransportsToPause = consumerTransports.filter(
      (transport) => transport.producerId && transport.producerId !== null && transport.producerId !== "" && !lStreams.some(
        (stream) => stream.producerId === transport.producerId
      ) && transport.consumer && transport.consumer.kind && transport.consumer.paused !== true && transport.consumer.kind === "audio"
    );
    await sleep({ ms: 100 });
    for (const transport of consumerTransportsToPause) {
      transport.consumer.pause();
      transport.socket_.emit(
        "consumer-pause",
        { serverConsumerId: transport.serverConsumerTransportId },
        async () => {
        }
      );
    }
    for (const transport of consumerTransportsToResume) {
      transport.socket_.emit(
        "consumer-resume",
        { serverConsumerId: transport.serverConsumerTransportId },
        async ({ resumed }) => {
          if (resumed) {
            transport.consumer.resume();
          }
        }
      );
    }
  } catch (error) {
    console.error("Error in processConsumerTransportsAudio:", error);
  }
};
async function readjust({ n, state, parameters }) {
  let { getUpdatedAllParams } = parameters;
  parameters = getUpdatedAllParams();
  try {
    let {
      eventType,
      shareScreenStarted,
      shared,
      mainHeightWidth,
      prevMainHeightWidth,
      hostLabel,
      first_round,
      lock_screen,
      updateMainHeightWidth,
      prepopulateUserMedia: prepopulateUserMedia2
    } = parameters;
    if (state === 0) {
      prevMainHeightWidth = mainHeightWidth;
    }
    let val1 = 6;
    let val2 = 12 - val1;
    let cal1 = Math.floor(val1 / 12 * 100);
    let cal2 = 100 - cal1;
    if (eventType === "broadcast") {
      val1 = 0;
      val2 = 12 - val1;
      if (n === 0) {
        val1 = 0;
        val2 = 12 - val1;
      }
    } else if (eventType === "chat" || eventType === "conference" && !(shareScreenStarted || shared)) {
      val1 = 12;
      val2 = 12 - val1;
    } else {
      if (shareScreenStarted || shared) {
        val2 = 10;
        val1 = 12 - val2;
      } else {
        if (n === 0) {
          val1 = 1;
          val2 = 12 - val1;
        } else if (n >= 1 && n < 4) {
          val1 = 4;
          val2 = 12 - val1;
        } else if (n >= 4 && n < 6) {
          val1 = 6;
          val2 = 12 - val1;
        } else if (n >= 6 && n < 9) {
          val1 = 6;
          val2 = 12 - val1;
        } else if (n >= 9 && n < 12) {
          val1 = 6;
          val2 = 12 - val1;
        } else if (n >= 12 && n < 20) {
          val1 = 8;
          val2 = 12 - val1;
        } else if (n >= 20 && n < 50) {
          val1 = 8;
          val2 = 12 - val1;
        } else {
          val1 = 10;
          val2 = 12 - val1;
        }
      }
    }
    if (state === 0) {
      mainHeightWidth = val2;
    }
    cal1 = Math.floor(val1 / 12 * 100);
    cal2 = 100 - cal1;
    updateMainHeightWidth(cal2);
    if (prevMainHeightWidth !== mainHeightWidth) {
      if (!lock_screen && !shared) {
        await prepopulateUserMedia2({ name: hostLabel, parameters });
      } else if (!first_round) {
        await prepopulateUserMedia2({ name: hostLabel, parameters });
      }
    }
  } catch (error) {
    if (error instanceof Error) {
      console.log("Error updating grid sizes:", error.message);
    } else {
      console.log("Error updating grid sizes:", error);
    }
  }
}
const receiveAllPipedTransports = async ({ nsock, community = false, parameters }) => {
  try {
    const { roomName, member, getPipedProducersAlt: getPipedProducersAlt2 } = parameters;
    const emitName = community ? "createReceiveAllTransports" : "createReceiveAllTransportsPiped";
    const emitData = community ? { islevel: "0" } : { roomName, member };
    await nsock.emit(
      emitName,
      emitData,
      async ({ producersExist }) => {
        const options = ["0", "1", "2"];
        if (producersExist) {
          for (const islevel of options) {
            await getPipedProducersAlt2({ nsock, community, islevel, parameters });
          }
        }
      }
    );
  } catch (error) {
    console.log("receiveAllPipedTransports error", error);
  }
};
const reorderStreams = async ({
  add = false,
  screenChanged = false,
  parameters
}) => {
  const { getUpdatedAllParams } = parameters;
  parameters = getUpdatedAllParams();
  let {
    allVideoStreams,
    participants,
    oldAllStreams,
    screenId,
    adminVidID,
    newLimitedStreams,
    newLimitedStreamsIDs,
    activeSounds,
    screenShareIDStream,
    screenShareNameStream,
    adminIDStream,
    adminNameStream,
    updateNewLimitedStreams,
    updateNewLimitedStreamsIDs,
    updateActiveSounds,
    updateScreenShareIDStream,
    updateScreenShareNameStream,
    updateAdminIDStream,
    updateAdminNameStream,
    updateYouYouStream,
    //mediasfu functions
    changeVids: changeVids2
  } = parameters;
  if (!add) {
    newLimitedStreams = [];
    newLimitedStreamsIDs = [];
    activeSounds = [];
  }
  const youyou = allVideoStreams.filter((stream) => stream.producerId === "youyou");
  const admin = participants.filter((participant) => participant.islevel === "2");
  if (admin.length > 0) {
    adminVidID = admin[0].videoID;
  } else {
    adminVidID = "";
  }
  if (adminVidID) {
    const adminStream = allVideoStreams.find((stream) => stream.producerId === adminVidID);
    if (!add) {
      newLimitedStreams = [...newLimitedStreams, ...youyou];
      newLimitedStreamsIDs = [...newLimitedStreamsIDs, ...youyou.map((stream) => stream.producerId)];
    } else {
      const youyouStream = newLimitedStreams.find((stream) => stream.producerId === "youyou");
      if (!youyouStream) {
        newLimitedStreams = [...newLimitedStreams, ...youyou];
        newLimitedStreamsIDs = [...newLimitedStreamsIDs, ...youyou.map((stream) => stream.producerId)];
      }
    }
    if (adminStream) {
      adminIDStream = adminVidID;
      if (!add) {
        newLimitedStreams = [...newLimitedStreams, adminStream];
        newLimitedStreamsIDs = [...newLimitedStreamsIDs, adminStream.producerId];
      } else {
        const adminStreamer = newLimitedStreams.find((stream) => stream.producerId === adminVidID);
        if (!adminStreamer) {
          newLimitedStreams = [...newLimitedStreams, adminStream];
          newLimitedStreamsIDs = [...newLimitedStreamsIDs, adminStream.producerId];
        }
      }
    } else {
      const oldAdminStream = oldAllStreams.find((stream) => stream.producerId === adminVidID);
      if (oldAdminStream) {
        adminIDStream = adminVidID;
        adminNameStream = admin[0].name;
        if (!add) {
          newLimitedStreams = [...newLimitedStreams, oldAdminStream];
          newLimitedStreamsIDs = [...newLimitedStreamsIDs, oldAdminStream.producerId];
        } else {
          const adminStreamer = newLimitedStreams.find((stream) => stream.producerId === adminVidID);
          if (!adminStreamer) {
            newLimitedStreams = [...newLimitedStreams, oldAdminStream];
            newLimitedStreamsIDs = [...newLimitedStreamsIDs, oldAdminStream.producerId];
          }
        }
      }
    }
    const screenParticipant = participants.filter((participant) => participant.ScreenID === screenId);
    if (screenParticipant.length > 0) {
      const screenParticipantVidID = screenParticipant[0].videoID;
      const screenParticipantVidID_ = newLimitedStreams.filter((stream) => stream.producerId === screenParticipantVidID);
      if (screenParticipantVidID_?.length < 1 && screenParticipantVidID) {
        screenShareIDStream = screenParticipantVidID;
        screenShareNameStream = screenParticipant[0].name;
        const screenParticipantVidID__ = allVideoStreams.filter((stream) => stream.producerId === screenParticipantVidID);
        newLimitedStreams = [...newLimitedStreams, ...screenParticipantVidID__];
        newLimitedStreamsIDs = [...newLimitedStreamsIDs, ...screenParticipantVidID__.map((stream) => stream.producerId)];
      }
    }
  } else {
    if (!add) {
      newLimitedStreams = [...newLimitedStreams, ...youyou];
      newLimitedStreamsIDs = [...newLimitedStreamsIDs, ...youyou.map((stream) => stream.producerId)];
    } else {
      const youyouStream = newLimitedStreams.find((stream) => stream.producerId === "youyou");
      if (!youyouStream) {
        newLimitedStreams = [...newLimitedStreams, ...youyou];
        newLimitedStreamsIDs = [...newLimitedStreamsIDs, ...youyou.map((stream) => stream.producerId)];
      }
    }
    const screenParticipant = participants.filter((participant) => participant.ScreenID === screenId);
    if (screenParticipant.length > 0) {
      const screenParticipantVidID = screenParticipant[0].videoID;
      const screenParticipantVidID_ = newLimitedStreams.filter((stream) => stream.producerId === screenParticipantVidID);
      if (screenParticipantVidID_?.length < 1 && screenParticipantVidID) {
        screenShareIDStream = screenParticipantVidID;
        screenShareNameStream = screenParticipant[0].name;
        const screenParticipantVidID__ = allVideoStreams.filter((stream) => stream.producerId === screenParticipantVidID);
        newLimitedStreams = [...newLimitedStreams, ...screenParticipantVidID__];
        newLimitedStreamsIDs = [...newLimitedStreamsIDs, ...screenParticipantVidID__.map((stream) => stream.producerId)];
      }
    }
  }
  updateNewLimitedStreams(newLimitedStreams);
  updateNewLimitedStreamsIDs(newLimitedStreamsIDs);
  updateActiveSounds(activeSounds);
  updateScreenShareIDStream(screenShareIDStream);
  updateScreenShareNameStream(screenShareNameStream);
  updateAdminIDStream(adminIDStream);
  updateAdminNameStream(adminNameStream);
  updateYouYouStream(youyou);
  await changeVids2({ screenChanged, parameters });
};
async function rePort({ restart = false, parameters }) {
  const { getUpdatedAllParams } = parameters;
  parameters = getUpdatedAllParams();
  try {
    const {
      islevel,
      mainScreenPerson,
      adminOnMainScreen,
      mainScreenFilled,
      recordStarted,
      recordStopped,
      recordPaused,
      recordResumed,
      screenStates,
      updateScreenStates,
      updatePrevScreenStates,
      compareActiveNames: compareActiveNames2,
      compareScreenStates: compareScreenStates2
    } = parameters;
    if (recordStarted || recordResumed) {
      if (recordStopped || recordPaused) {
      } else {
        if (islevel === "2") {
          const previousScreenStates = [...screenStates];
          updatePrevScreenStates(previousScreenStates);
          const currentScreenStates = [
            { mainScreenPerson, adminOnMainScreen, mainScreenFilled }
          ];
          updateScreenStates(currentScreenStates);
          if (restart) {
            await compareActiveNames2({ restart, parameters });
            return;
          }
          await compareActiveNames2({ restart, parameters });
          await compareScreenStates2({ restart, parameters });
        }
      }
    }
  } catch (error) {
    console.log("Error during rePorting: ", error);
  }
}
async function requestScreenShare({ parameters }) {
  try {
    let {
      socket,
      showAlert,
      localUIMode,
      targetResolution = "hd",
      targetResolutionHost = "hd",
      //mediasfu functions
      startShareScreen: startShareScreen2
    } = parameters;
    let targetWidth = 1280;
    let targetHeight = 720;
    if (targetResolution == "qhd" || targetResolutionHost == "qhd") {
      targetWidth = 2560;
      targetHeight = 1440;
    } else if (targetResolution == "fhd" || targetResolutionHost == "fhd") {
      targetWidth = 1920;
      targetHeight = 1080;
    }
    if (localUIMode === true) {
      await startShareScreen2({ parameters });
      return;
    }
    socket.emit("requestScreenShare", async ({ allowScreenShare }) => {
      if (!allowScreenShare) {
        showAlert?.({
          message: "You are not allowed to share screen",
          type: "danger",
          duration: 3e3
        });
      } else {
        await startShareScreen2({ parameters: { ...parameters, targetWidth, targetHeight } });
      }
    });
  } catch (error) {
    console.log("Error during requesting screen share: ", error);
  }
}
const resumePauseAudioStreams = async ({
  breakRoom = -1,
  inBreakRoom = false,
  parameters
}) => {
  const { getUpdatedAllParams } = parameters;
  parameters = getUpdatedAllParams();
  const {
    breakoutRooms,
    ref_participants,
    allAudioStreams,
    participants,
    islevel,
    eventType,
    consumerTransports,
    hostNewRoom,
    member,
    updateLimitedBreakRoom,
    processConsumerTransportsAudio: processConsumerTransportsAudio2
  } = parameters;
  let room = [];
  let currentStreams = [];
  if (inBreakRoom && breakRoom !== -1) {
    room = breakoutRooms[breakRoom];
  } else {
    room = ref_participants.filter(
      (participant) => !breakoutRooms.flat().map((obj) => obj.name).includes(participant.name)
    ).map(({ name, breakRoom: breakRoom2 }) => ({ name, breakRoom: breakRoom2 }));
  }
  updateLimitedBreakRoom(room);
  try {
    let addHostAudio = false;
    if (islevel !== "2" && eventType === "conference") {
      const roomMember = breakoutRooms.find(
        (r) => r.find((p) => p.name === member)
      );
      let memberBreakRoom = -1;
      if (roomMember) {
        memberBreakRoom = breakoutRooms.indexOf(roomMember);
      }
      if (inBreakRoom && breakRoom !== hostNewRoom || !inBreakRoom && hostNewRoom !== -1 && hostNewRoom !== memberBreakRoom) {
        const host = participants.find((obj) => obj.islevel === "2");
        room = room.filter((participant) => participant.name !== host?.name);
      } else {
        if (inBreakRoom && breakRoom === hostNewRoom || !inBreakRoom && hostNewRoom === -1 || !inBreakRoom && hostNewRoom === memberBreakRoom && memberBreakRoom !== -1) {
          addHostAudio = true;
        }
      }
    }
    for (let participant of room) {
      let streams = allAudioStreams.filter((stream) => {
        if (Object.prototype.hasOwnProperty.call(stream, "producerId") && stream.producerId || Object.prototype.hasOwnProperty.call(stream, "audioID") && stream.audioID) {
          let producerId = stream.producerId || stream.audioID;
          let matchingParticipant = ref_participants.find(
            (obj) => obj.audioID == producerId
          );
          return matchingParticipant && matchingParticipant.name == participant.name;
        }
        return false;
      });
      currentStreams.push(...streams);
    }
    if (islevel !== "2" && (eventType === "webinar" || addHostAudio)) {
      const host = participants.find((obj) => obj.islevel === "2");
      const hostStream = allAudioStreams.find(
        (obj) => obj.producerId === host?.audioID
      );
      if (hostStream && !currentStreams.includes(hostStream)) {
        currentStreams.push(hostStream);
        if (!room.map((obj) => obj.name).includes(host?.name ?? "")) {
          room.push({ name: host?.name || "", breakRoom: -1 });
        }
        updateLimitedBreakRoom(room);
      }
    }
    await processConsumerTransportsAudio2({
      consumerTransports,
      lStreams: currentStreams,
      parameters
    });
  } catch (error) {
    console.log("Error in resumePauseAudioStreams:", error);
  }
};
async function resumePauseStreams({
  parameters
}) {
  try {
    const { participants, dispActiveNames, consumerTransports, screenId, islevel } = parameters;
    const host = participants.find((obj) => obj.islevel === "2");
    const hostVideoID = host ? host.videoID : null;
    const videosIDs = dispActiveNames.map((name) => {
      const participant = participants.find((obj) => obj.name === name);
      return participant ? participant.videoID : null;
    });
    if (screenId) {
      videosIDs.push(screenId);
    }
    if (islevel !== "2" && hostVideoID) {
      videosIDs.push(hostVideoID);
    }
    const allVideoIDs = videosIDs.filter(
      (videoID) => videoID !== null && videoID !== ""
    );
    if (allVideoIDs.length > 0) {
      const consumerTransportsToResume = consumerTransports.filter(
        (transport) => allVideoIDs.includes(transport.producerId) && transport.consumer.kind !== "audio"
      );
      for (const transport of consumerTransportsToResume) {
        transport.socket_.emit(
          "consumer-resume",
          { serverConsumerId: transport.serverConsumerTransportId },
          async ({ resumed }) => {
            if (resumed) {
              transport.consumer.resume();
            }
          }
        );
      }
    }
  } catch (error) {
    console.log("Error during resuming or pausing streams: ", error);
  }
}
async function reUpdateInter({
  name,
  add = false,
  force = false,
  average = 127,
  parameters
}) {
  let {
    screenPageLimit,
    itemPageLimit,
    reorderInterval,
    fastReorderInterval,
    eventType,
    participants,
    allVideoStreams,
    shared,
    shareScreenStarted,
    adminNameStream,
    screenShareNameStream,
    updateMainWindow,
    sortAudioLoudness,
    lastReorderTime,
    newLimitedStreams,
    newLimitedStreamsIDs,
    oldSoundIds,
    updateUpdateMainWindow,
    updateSortAudioLoudness,
    updateLastReorderTime,
    updateNewLimitedStreams,
    updateNewLimitedStreamsIDs,
    updateOldSoundIds,
    //mediasfu functions
    onScreenChanges: onScreenChanges2,
    reorderStreams: reorderStreams2,
    changeVids: changeVids2
  } = parameters;
  if (eventType === "broadcast" || eventType === "chat") {
    return;
  }
  let refLimit = screenPageLimit - 1;
  if (!(shareScreenStarted || shared)) {
    refLimit = itemPageLimit - 1;
    if (add) {
      const currentTime = Date.now();
      if (currentTime - lastReorderTime >= reorderInterval && average > 128.5 || average > 130 && currentTime - lastReorderTime >= fastReorderInterval) {
        lastReorderTime = currentTime;
        sortAudioLoudness = true;
        if (eventType === "conference") {
          await onScreenChanges2({ changed: true, parameters });
        } else {
          await reorderStreams2({ add: false, screenChanged: true, parameters });
        }
        sortAudioLoudness = false;
        updateSortAudioLoudness(sortAudioLoudness);
        updateUpdateMainWindow(updateMainWindow);
        updateLastReorderTime(lastReorderTime);
        return;
      }
    }
  }
  let videoID = null;
  if (shareScreenStarted || shared) {
    if (add) {
      const participant = participants.find((p) => p.name === name);
      videoID = participant?.videoID ?? null;
      if (!videoID) {
        return;
      }
      if (!newLimitedStreamsIDs.includes(videoID)) {
        if (newLimitedStreams.length > refLimit) {
          let oldoldSounds = [...oldSoundIds];
          for (let i = 0; i < oldSoundIds.length; i++) {
            if (newLimitedStreams.length > refLimit) {
              if (newLimitedStreams.length < screenPageLimit) {
                return;
              }
              const currentId = oldSoundIds[i];
              if (currentId !== screenShareNameStream && currentId !== adminNameStream) {
                newLimitedStreams = newLimitedStreams.filter(
                  (stream2) => stream2.producerId !== currentId
                );
                newLimitedStreamsIDs = newLimitedStreamsIDs.filter(
                  (id) => id !== currentId
                );
                oldoldSounds = oldoldSounds.filter((id) => id !== currentId);
              }
            }
          }
          oldSoundIds = [...oldoldSounds];
        }
        const stream = allVideoStreams.find(
          (s) => s.producerId === videoID
        );
        if (stream && newLimitedStreams.length < screenPageLimit) {
          newLimitedStreams.push(stream);
          newLimitedStreamsIDs.push(videoID);
          if (!oldSoundIds.includes(name)) {
            oldSoundIds.push(name);
          }
          await changeVids2({ screenChanged: true, parameters });
        }
      }
    } else {
      if (!force) {
        try {
          if (newLimitedStreams.length < screenPageLimit) {
            return;
          }
          newLimitedStreams = newLimitedStreams.filter(
            (stream) => stream.producerId != videoID
          );
          newLimitedStreamsIDs = newLimitedStreamsIDs.filter(
            (id) => id !== videoID
          );
          oldSoundIds = oldSoundIds.filter((id) => id !== name);
          await changeVids2({ parameters });
        } catch {
        }
      } else {
        const participant = participants.find((p) => p.name === name);
        if (participant?.muted) {
          try {
            newLimitedStreams = newLimitedStreams.filter(
              (stream) => stream.producerId !== videoID
            );
            newLimitedStreamsIDs = newLimitedStreamsIDs.filter(
              (id) => id !== videoID
            );
            oldSoundIds = oldSoundIds.filter((id) => id !== name);
            await changeVids2({ parameters });
          } catch {
          }
        }
      }
    }
    updateNewLimitedStreams(newLimitedStreams);
    updateNewLimitedStreamsIDs(newLimitedStreamsIDs);
    updateOldSoundIds(oldSoundIds);
  }
}
async function startShareScreen({ parameters }) {
  let {
    shared,
    showAlert,
    updateShared,
    mediaDevices,
    onWeb,
    targetWidth = 1280,
    targetHeight = 720,
    streamSuccessScreen: streamSuccessScreen2
  } = parameters;
  try {
    if (!onWeb) {
      showAlert?.({
        message: "You cannot share screen while on mobile",
        type: "danger",
        duration: 3e3
      });
      return;
    }
    if (mediaDevices && mediaDevices.getDisplayMedia) {
      shared = true;
      await mediaDevices.getDisplayMedia({
        video: {
          width: targetWidth,
          height: targetHeight,
          frameRate: 30
        },
        audio: false
      }).then(async (stream) => {
        await streamSuccessScreen2({ stream, parameters });
      }).catch(async () => {
        shared = false;
        showAlert?.({
          message: "Could not share screen, check and retry",
          type: "danger",
          duration: 3e3
        });
      });
    } else {
      showAlert?.({
        message: "Could not share screen, check and retry",
        type: "danger",
        duration: 3e3
      });
    }
    updateShared(shared);
  } catch (error) {
    console.log("Error starting screen share", error);
  }
}
async function stopShareScreen({ parameters }) {
  let { getUpdatedAllParams } = parameters;
  parameters = getUpdatedAllParams();
  let {
    shared,
    shareScreenStarted,
    shareEnded,
    updateMainWindow,
    defer_receive,
    hostLabel,
    lock_screen,
    forceFullDisplay,
    firstAll,
    first_round,
    localStreamScreen,
    eventType,
    prevForceFullDisplay,
    annotateScreenStream,
    updateShared,
    updateShareScreenStarted,
    updateShareEnded,
    updateUpdateMainWindow,
    updateDefer_receive,
    updateLock_screen,
    updateForceFullDisplay,
    updateFirstAll,
    updateFirst_round,
    updateLocalStreamScreen,
    updateMainHeightWidth,
    updateAnnotateScreenStream,
    updateIsScreenboardModalVisible,
    disconnectSendTransportScreen: disconnectSendTransportScreen2,
    prepopulateUserMedia: prepopulateUserMedia2,
    reorderStreams: reorderStreams2,
    getVideos: getVideos2
  } = parameters;
  shared = false;
  updateShared(shared);
  shareScreenStarted = false;
  updateShareScreenStarted(shareScreenStarted);
  shareEnded = true;
  updateShareEnded(shareEnded);
  updateMainWindow = true;
  updateUpdateMainWindow(updateMainWindow);
  if (defer_receive) {
    defer_receive = false;
    updateDefer_receive(defer_receive);
    await getVideos2({
      participants: parameters.participants,
      allVideoStreams: parameters.allVideoStreams,
      oldAllStreams: parameters.oldAllStreams,
      adminVidID: parameters.adminVidID,
      updateAllVideoStreams: parameters.updateAllVideoStreams,
      updateOldAllStreams: parameters.updateOldAllStreams
    });
  }
  try {
    localStreamScreen.getTracks().forEach((track) => track.stop());
  } catch {
  }
  updateLocalStreamScreen(null);
  await disconnectSendTransportScreen2({ parameters });
  try {
    if (annotateScreenStream) {
      annotateScreenStream = false;
      updateAnnotateScreenStream(annotateScreenStream);
      updateIsScreenboardModalVisible(true);
      await new Promise((resolve) => setTimeout(resolve, 500));
      updateIsScreenboardModalVisible(false);
    }
  } catch (error) {
    console.log("Error handling screen annotation:", error);
  }
  if (eventType === "conference") {
    updateMainHeightWidth(0);
  }
  try {
    await prepopulateUserMedia2({ name: hostLabel, parameters });
  } catch (error) {
    console.log("Error in prepopulateUserMedia", error);
  }
  try {
    await reorderStreams2({ add: false, screenChanged: true, parameters });
  } catch (error) {
    console.log("Error in reorderStreams", error);
  }
  lock_screen = false;
  updateLock_screen(lock_screen);
  forceFullDisplay = prevForceFullDisplay;
  updateForceFullDisplay(forceFullDisplay);
  firstAll = false;
  updateFirstAll(firstAll);
  first_round = false;
  updateFirst_round(first_round);
}
const streamSuccessAudio = async ({
  stream,
  parameters
}) => {
  let {
    socket,
    participants,
    localStream,
    transportCreated,
    transportCreatedAudio,
    audioAlreadyOn,
    micAction,
    audioParams,
    localStreamAudio,
    defAudioID,
    userDefaultAudioInputDevice,
    params,
    audioParamse,
    aParams,
    hostLabel,
    islevel,
    member,
    updateMainWindow,
    lock_screen,
    shared,
    videoAlreadyOn,
    showAlert,
    //update functions
    updateParticipants,
    updateTransportCreated,
    updateTransportCreatedAudio,
    updateAudioAlreadyOn,
    updateMicAction,
    updateAudioParams,
    updateLocalStream,
    updateLocalStreamAudio,
    updateDefAudioID,
    updateUserDefaultAudioInputDevice,
    updateUpdateMainWindow,
    //mediasfu functions
    createSendTransport: createSendTransport2,
    connectSendTransportAudio: connectSendTransportAudio2,
    resumeSendTransportAudio: resumeSendTransportAudio2,
    prepopulateUserMedia: prepopulateUserMedia2
  } = parameters;
  localStreamAudio = stream;
  updateLocalStreamAudio(localStreamAudio);
  if (localStream == null) {
    localStream = new MediaStream([localStreamAudio.getAudioTracks()[0]]);
    updateLocalStream(localStream);
  } else {
    localStream.addTrack(localStreamAudio.getAudioTracks()[0]);
    updateLocalStream(localStream);
  }
  const audioTracked = localStream.getAudioTracks()[0];
  defAudioID = audioTracked.getSettings().deviceId || "";
  userDefaultAudioInputDevice = defAudioID;
  updateDefAudioID(defAudioID);
  updateUserDefaultAudioInputDevice(userDefaultAudioInputDevice);
  try {
    params = aParams;
    audioParamse = { ...params };
    audioParams = {
      track: localStream.getAudioTracks()[0],
      ...audioParamse
    };
    updateAudioParams(audioParams);
    if (!transportCreated) {
      try {
        await createSendTransport2({
          parameters: {
            ...parameters,
            audioParams
          },
          option: "audio"
        });
      } catch (error) {
        console.error("Error creating transport:", error);
      }
    } else {
      if (!transportCreatedAudio) {
        await connectSendTransportAudio2({
          audioParams,
          parameters
        });
      } else {
        await resumeSendTransportAudio2({ parameters });
      }
    }
  } catch (error) {
    if (showAlert) {
      showAlert({
        message: error.message,
        type: "danger",
        duration: 3e3
      });
    }
  }
  audioAlreadyOn = true;
  updateAudioAlreadyOn(audioAlreadyOn);
  if (micAction === true) {
    micAction = false;
    updateMicAction(micAction);
  }
  participants.forEach((participant) => {
    if (participant.socketId === socket.id && participant.name === member) {
      participant.muted = false;
    }
  });
  updateParticipants(participants);
  transportCreated = true;
  transportCreatedAudio = true;
  updateTransportCreated(transportCreated);
  updateTransportCreatedAudio(transportCreatedAudio);
  if (!videoAlreadyOn && islevel === "2") {
    if (!lock_screen && !shared) {
      updateMainWindow = true;
      updateUpdateMainWindow(updateMainWindow);
      await prepopulateUserMedia2({ name: hostLabel, parameters });
      updateMainWindow = false;
      updateUpdateMainWindow(updateMainWindow);
    }
  }
};
const streamSuccessAudioSwitch = async ({
  stream,
  parameters
}) => {
  let {
    audioProducer,
    localAudioProducer,
    socket,
    localSocket,
    roomName,
    localStream,
    localStreamAudio,
    audioParams,
    audioPaused,
    audioAlreadyOn,
    transportCreated,
    audioParamse,
    defAudioID,
    userDefaultAudioInputDevice,
    hostLabel,
    updateMainWindow,
    videoAlreadyOn,
    islevel,
    lock_screen,
    shared,
    updateAudioProducer,
    updateLocalAudioProducer,
    updateLocalStream,
    updateAudioParams,
    updateDefAudioID,
    updateUserDefaultAudioInputDevice,
    updateUpdateMainWindow,
    //mediasfu functions
    sleep,
    prepopulateUserMedia: prepopulateUserMedia2,
    createSendTransport: createSendTransport2,
    connectSendTransportAudio: connectSendTransportAudio2
  } = parameters;
  let newDefAudioID = stream.getAudioTracks()[0].getSettings().deviceId;
  if (newDefAudioID !== defAudioID) {
    if (audioProducer) {
      audioProducer.close();
      updateAudioProducer(audioProducer);
    }
    socket.emit("pauseProducerMedia", {
      mediaTag: "audio",
      roomName,
      force: true
    });
    try {
      if (localSocket && localSocket.id) {
        if (localAudioProducer) {
          localAudioProducer.close();
          if (updateLocalAudioProducer) {
            updateLocalAudioProducer(localAudioProducer);
          }
        }
        localSocket.emit("pauseProducerMedia", {
          mediaTag: "audio",
          roomName,
          force: true
        });
      }
    } catch {
    }
    localStreamAudio = stream;
    if (localStream == null) {
      localStream = new MediaStream([
        localStreamAudio.getAudioTracks()[0]
      ]);
    } else {
      localStream.getAudioTracks().forEach((track) => {
        localStream.removeTrack(track);
      });
      localStream.addTrack(localStreamAudio.getAudioTracks()[0]);
    }
    updateLocalStream(localStream);
    const audioTracked = localStream.getAudioTracks()[0];
    defAudioID = audioTracked.getSettings().deviceId || "";
    updateDefAudioID(defAudioID);
    userDefaultAudioInputDevice = defAudioID;
    updateUserDefaultAudioInputDevice(userDefaultAudioInputDevice);
    audioParams = {
      track: localStream.getAudioTracks()[0],
      ...audioParamse
    };
    updateAudioParams(audioParams);
    await sleep({ ms: 500 });
    if (!transportCreated) {
      try {
        await createSendTransport2({
          parameters: {
            ...parameters,
            audioParams
          },
          option: "audio"
        });
      } catch (error) {
        console.error("Error creating send transport:", error);
      }
    } else {
      await connectSendTransportAudio2({
        audioParams,
        parameters
      });
    }
    if (audioPaused === true && !audioAlreadyOn) {
      audioProducer.pause();
      updateAudioProducer(audioProducer);
      socket.emit("pauseProducerMedia", {
        mediaTag: "audio",
        roomName
      });
      try {
        if (localSocket && localSocket.id) {
          localAudioProducer.pause();
          if (updateLocalAudioProducer) {
            updateLocalAudioProducer(localAudioProducer);
          }
          localSocket.emit("pauseProducerMedia", {
            mediaTag: "audio",
            roomName
          });
        }
      } catch {
      }
    }
  }
  if (!videoAlreadyOn && islevel === "2") {
    if (!lock_screen && !shared) {
      updateMainWindow = true;
      updateUpdateMainWindow(updateMainWindow);
      await prepopulateUserMedia2({ name: hostLabel, parameters });
      updateMainWindow = false;
      updateUpdateMainWindow(updateMainWindow);
    }
  }
};
const streamSuccessScreen = async ({
  stream,
  parameters
}) => {
  let { getUpdatedAllParams } = parameters;
  parameters = getUpdatedAllParams();
  let {
    socket,
    transportCreated,
    localStreamScreen,
    screenAlreadyOn,
    screenAction,
    transportCreatedScreen,
    hostLabel,
    eventType,
    showAlert,
    annotateScreenStream,
    updateTransportCreatedScreen,
    updateScreenAlreadyOn,
    updateScreenAction,
    updateTransportCreated,
    updateLocalStreamScreen,
    updateShared,
    updateIsScreenboardModalVisible,
    sleep,
    // mediasfu functions
    createSendTransport: createSendTransport2,
    connectSendTransportScreen: connectSendTransportScreen2,
    disconnectSendTransportScreen: disconnectSendTransportScreen2,
    stopShareScreen: stopShareScreen2,
    reorderStreams: reorderStreams2,
    prepopulateUserMedia: prepopulateUserMedia2,
    rePort: rePort2
  } = parameters;
  localStreamScreen = stream;
  updateLocalStreamScreen(localStreamScreen);
  try {
    if (!transportCreated) {
      await createSendTransport2({
        option: "screen",
        parameters: { ...parameters, localStreamScreen }
      });
    } else {
      await connectSendTransportScreen2({
        stream: localStreamScreen,
        parameters: { ...parameters, localStreamScreen }
      });
    }
    socket.emit("startScreenShare");
  } catch (error) {
    showAlert?.({
      message: error.message,
      type: "danger",
      duration: 3e3
    });
  }
  try {
    updateShared(true);
    await prepopulateUserMedia2({
      name: hostLabel,
      parameters: { ...parameters, localStreamScreen, shared: true }
    });
  } catch (error) {
    console.error("Error updating shared screen UI:", error);
  }
  screenAlreadyOn = true;
  updateScreenAlreadyOn(screenAlreadyOn);
  try {
    if (eventType === "conference") {
      await reorderStreams2({ add: false, screenChanged: true, parameters });
      await prepopulateUserMedia2({ name: hostLabel, parameters });
    } else {
      await reorderStreams2({ parameters });
    }
  } catch {
    try {
      await rePort2({ parameters });
    } catch {
    }
  }
  localStreamScreen.getVideoTracks()[0].onended = async function() {
    await disconnectSendTransportScreen2({ parameters });
    await stopShareScreen2({ parameters });
  };
  if (screenAction === true) {
    screenAction = false;
  }
  updateScreenAction(screenAction);
  transportCreatedScreen = true;
  updateTransportCreatedScreen(transportCreatedScreen);
  transportCreated = true;
  updateTransportCreated(transportCreated);
  try {
    if (annotateScreenStream) {
      annotateScreenStream = false;
      updateIsScreenboardModalVisible(true);
      await sleep({ ms: 500 });
      updateIsScreenboardModalVisible(false);
    }
  } catch (error) {
    console.error("Error handling screen annotation:", error);
  }
};
const streamSuccessVideo = async ({
  stream,
  parameters
}) => {
  let { getUpdatedAllParams } = parameters;
  parameters = getUpdatedAllParams();
  try {
    let {
      socket,
      participants,
      localStream,
      transportCreated,
      transportCreatedVideo,
      videoAlreadyOn,
      videoAction,
      videoParams,
      localStreamVideo,
      defVideoID,
      userDefaultVideoInputDevice,
      params,
      videoParamse,
      islevel,
      member,
      updateMainWindow,
      lock_screen,
      shared,
      shareScreenStarted,
      vParams,
      hParams,
      allowed,
      currentFacingMode,
      device,
      keepBackground,
      appliedBackground,
      videoProducer,
      updateTransportCreatedVideo,
      updateVideoAlreadyOn,
      updateVideoAction,
      updateLocalStream,
      updateLocalStreamVideo,
      updateUserDefaultVideoInputDevice,
      updateCurrentFacingMode,
      updateDefVideoID,
      updateAllowed,
      updateUpdateMainWindow,
      updateParticipants,
      updateVideoParams,
      updateIsBackgroundModalVisible,
      updateAutoClickBackground,
      //mediasfu functions
      createSendTransport: createSendTransport2,
      connectSendTransportVideo: connectSendTransportVideo2,
      showAlert,
      reorderStreams: reorderStreams2,
      sleep
    } = parameters;
    localStreamVideo = stream;
    updateLocalStreamVideo(localStreamVideo);
    if (localStream == null) {
      localStream = new MediaStream([
        localStreamVideo.getVideoTracks()[0]
      ]);
      updateLocalStream(localStream);
    } else {
      localStream.getVideoTracks().forEach((track) => {
        localStream.removeTrack(track);
      });
      localStream.addTrack(localStreamVideo.getVideoTracks()[0]);
      updateLocalStream(localStream);
    }
    const videoTracked = localStream.getVideoTracks()[0];
    defVideoID = videoTracked.getSettings().deviceId || "";
    userDefaultVideoInputDevice = defVideoID;
    currentFacingMode = videoTracked.getSettings().facingMode || "user";
    if (defVideoID) {
      updateDefVideoID(defVideoID);
    }
    if (userDefaultVideoInputDevice) {
      updateUserDefaultVideoInputDevice(userDefaultVideoInputDevice);
    }
    if (currentFacingMode) {
      updateCurrentFacingMode(currentFacingMode);
    }
    allowed = true;
    updateAllowed(allowed);
    try {
      if (islevel === "2") {
        params = shared || shareScreenStarted ? vParams : hParams;
        videoParamse = { ...params };
      } else {
        params = vParams;
        videoParamse = { ...params };
      }
      let codec = device?.rtpCapabilities?.codecs?.filter(
        (codec2) => codec2.mimeType.toLowerCase() !== "video/vp9" && codec2.kind === "video"
      ) || [];
      videoParams = {
        track: localStream.getVideoTracks()[0],
        ...videoParamse,
        codec: codec[0]
      };
      updateVideoParams(videoParams);
      if (keepBackground && appliedBackground) {
        videoAlreadyOn = true;
        updateVideoAlreadyOn(videoAlreadyOn);
        updateAutoClickBackground(true);
        updateIsBackgroundModalVisible(true);
        await sleep({ ms: 500 });
        updateIsBackgroundModalVisible(false);
        updateAutoClickBackground(false);
      } else {
        if (!transportCreated) {
          try {
            await createSendTransport2({
              parameters: { ...parameters, videoParams },
              option: "video"
            });
          } catch {
          }
        } else {
          try {
            videoProducer.close();
            await sleep({ ms: 500 });
          } catch {
          }
          await connectSendTransportVideo2({
            parameters,
            videoParams
          });
        }
      }
    } catch (error) {
      showAlert?.({
        message: error.message,
        type: "danger",
        duration: 3e3
      });
    }
    videoAlreadyOn = true;
    updateVideoAlreadyOn(videoAlreadyOn);
    if (videoAction === true) {
      videoAction = false;
      updateVideoAction(videoAction);
    }
    if (islevel === "2") {
      updateMainWindow = true;
      updateUpdateMainWindow(updateMainWindow);
    }
    participants.forEach((participant) => {
      if (participant.socketId == socket.id && participant.name == member) {
        participant.videoOn = true;
      }
    });
    updateParticipants(participants);
    transportCreatedVideo = true;
    updateTransportCreatedVideo(transportCreatedVideo);
    if (lock_screen) {
      await reorderStreams2({
        add: true,
        screenChanged: true,
        parameters: { ...parameters, videoAlreadyOn }
      });
    } else {
      try {
        await reorderStreams2({
          add: false,
          screenChanged: true,
          parameters: { ...parameters, videoAlreadyOn }
        });
      } catch {
      }
    }
  } catch (error) {
    try {
      let { showAlert } = parameters;
      showAlert?.({
        message: error.message,
        type: "danger",
        duration: 3e3
      });
    } catch {
    }
  }
};
async function switchUserAudio({ audioPreference, parameters }) {
  const {
    mediaDevices,
    prevAudioInputDevice,
    showAlert,
    hasAudioPermission,
    updateUserDefaultAudioInputDevice,
    // Media functions
    streamSuccessAudioSwitch: streamSuccessAudioSwitch2,
    requestPermissionAudio,
    checkMediaPermission
  } = parameters;
  try {
    if (!hasAudioPermission) {
      if (checkMediaPermission) {
        const statusMic = await requestPermissionAudio();
        if (statusMic !== "granted") {
          showAlert?.({
            message: "Allow access to your microphone or check if your microphone is not being used by another application.",
            type: "danger",
            duration: 3e3
          });
          return;
        }
      }
    }
    const mediaConstraints = {
      audio: {
        deviceId: { exact: audioPreference },
        echoCancellation: false,
        noiseSuppression: false,
        autoGainControl: false
      },
      video: false
    };
    await mediaDevices.getUserMedia(mediaConstraints).then(async (stream) => {
      await streamSuccessAudioSwitch2({ stream, parameters });
    }).catch((error) => {
      console.log("Error switching audio A", error);
      updateUserDefaultAudioInputDevice(prevAudioInputDevice);
      showAlert?.({
        message: "Error switching; the specified microphone could not be accessed.",
        type: "danger",
        duration: 3e3
      });
    });
  } catch (error) {
    console.log("Error switching audio", error);
    updateUserDefaultAudioInputDevice(prevAudioInputDevice);
    showAlert?.({
      message: "Error switching; the specified microphone could not be accessed.",
      type: "danger",
      duration: 3e3
    });
  }
}
const clickVideo = async ({ parameters }) => {
  let {
    checkMediaPermission,
    hasCameraPermission,
    videoAlreadyOn,
    audioOnlyRoom,
    recordStarted,
    recordResumed,
    recordPaused,
    recordStopped,
    recordingMediaOptions,
    islevel,
    youAreCoHost,
    adminRestrictSetting,
    videoRequestState,
    videoRequestTime,
    member,
    socket,
    roomName,
    userDefaultVideoInputDevice,
    currentFacingMode,
    vidCons,
    frameRate,
    videoAction,
    localStream,
    audioSetting,
    videoSetting,
    screenshareSetting,
    chatSetting,
    updateRequestIntervalSeconds,
    streamSuccessVideo: streamSuccessVideo2,
    showAlert,
    updateVideoAlreadyOn,
    updateVideoRequestState,
    updateLocalStream,
    mediaDevices,
    disconnectSendTransportVideo: disconnectSendTransportVideo2,
    requestPermissionCamera,
    checkPermission: checkPermission2
  } = parameters;
  if (audioOnlyRoom) {
    showAlert?.({
      message: "You cannot turn on your camera in an audio-only event.",
      type: "danger",
      duration: 3e3
    });
    return;
  }
  if (videoAlreadyOn) {
    if (islevel === "2" && (recordStarted || recordResumed)) {
      if (!(recordPaused || recordStopped)) {
        if (recordingMediaOptions === "video") {
          showAlert?.({
            message: "You cannot turn off your camera while recording video, please pause or stop recording first.",
            type: "danger",
            duration: 3e3
          });
          return;
        }
      }
    }
    videoAlreadyOn = false;
    updateVideoAlreadyOn(videoAlreadyOn);
    localStream.getVideoTracks()[0].enabled = false;
    updateLocalStream(localStream);
    await disconnectSendTransportVideo2({ parameters });
  } else {
    if (adminRestrictSetting) {
      showAlert?.({
        message: "You cannot turn on your camera. Access denied by host.",
        duration: 3e3,
        type: "danger"
      });
      return;
    }
    let response = 2;
    if (!videoAction && islevel !== "2" && !youAreCoHost) {
      response = await checkPermission2({
        permissionType: "videoSetting",
        audioSetting,
        videoSetting,
        screenshareSetting,
        chatSetting
      });
    } else {
      response = 0;
    }
    if (response == 1) {
      if (videoRequestState === "pending") {
        showAlert?.({
          message: "A request is pending. Please wait for the host to respond.",
          type: "danger",
          duration: 3e3
        });
        return;
      }
      if (videoRequestState === "rejected" && Date.now() - videoRequestTime < updateRequestIntervalSeconds) {
        showAlert?.({
          message: `A request was rejected. Please wait for ${updateRequestIntervalSeconds} seconds before sending another request.`,
          type: "danger",
          duration: 3e3
        });
        return;
      }
      showAlert?.({
        message: "Request sent to host.",
        type: "success",
        duration: 3e3
      });
      videoRequestState = "pending";
      updateVideoRequestState(videoRequestState);
      const userRequest = { id: socket.id, name: member, icon: "fa-video" };
      await socket.emit("participantRequest", { userRequest, roomName });
    } else if (response === 2) {
      showAlert?.({
        message: "You cannot turn on your camera. Access denied by host.",
        type: "danger",
        duration: 3e3
      });
    } else {
      if (!hasCameraPermission) {
        if (checkMediaPermission) {
          const statusCamera = await requestPermissionCamera();
          if (statusCamera !== "granted") {
            showAlert?.({
              message: "Allow access to your camera or check if your camera is not being used by another application.",
              type: "danger",
              duration: 3e3
            });
            return;
          }
        }
      }
      let mediaConstraints = {};
      let altMediaConstraints = {};
      if (userDefaultVideoInputDevice) {
        if (vidCons && vidCons.width && vidCons.height) {
          mediaConstraints = {
            video: {
              deviceId: userDefaultVideoInputDevice,
              facingMode: currentFacingMode,
              ...vidCons,
              frameRate: { ideal: frameRate }
            },
            audio: false
          };
          altMediaConstraints = {
            video: { ...vidCons, frameRate: { ideal: frameRate } },
            audio: false
          };
        } else {
          mediaConstraints = {
            video: { ...vidCons, frameRate: { ideal: frameRate } },
            audio: false
          };
          altMediaConstraints = {
            video: { frameRate: { ideal: frameRate } },
            audio: false
          };
        }
      } else {
        if (vidCons && vidCons.width && vidCons.height) {
          mediaConstraints = {
            video: { ...vidCons, frameRate: { ideal: frameRate } },
            audio: false
          };
          altMediaConstraints = {
            video: { ...vidCons, frameRate: { ideal: frameRate } },
            audio: false
          };
        } else {
          mediaConstraints = {
            video: { frameRate: { ideal: frameRate } },
            audio: false
          };
        }
      }
      await mediaDevices.getUserMedia(mediaConstraints).then(async (stream) => {
        await streamSuccessVideo2({ stream, parameters });
      }).catch(async () => {
        await mediaDevices.getUserMedia(altMediaConstraints).then(async (stream) => {
          await streamSuccessVideo2({ stream, parameters });
        }).catch(async () => {
          altMediaConstraints = {
            video: { ...vidCons },
            audio: false
          };
          await mediaDevices.getUserMedia(altMediaConstraints).then(async (stream) => {
            await streamSuccessVideo2({ stream, parameters });
          }).catch(() => {
            showAlert?.({
              message: "Allow access to your camera or check if your camera is not being used by another application.",
              type: "danger",
              duration: 3e3
            });
          });
        });
      });
    }
  }
};
async function switchUserVideo({
  videoPreference,
  checkoff,
  parameters
}) {
  const {
    audioOnlyRoom,
    frameRate,
    vidCons,
    prevVideoInputDevice,
    showAlert,
    mediaDevices,
    hasCameraPermission,
    updateVideoSwitching,
    updateUserDefaultVideoInputDevice,
    //mediasfu functions
    requestPermissionCamera,
    streamSuccessVideo: streamSuccessVideo2,
    sleep,
    checkMediaPermission
  } = parameters;
  try {
    if (audioOnlyRoom) {
      showAlert?.({
        message: "You cannot turn on your camera in an audio-only event.",
        type: "danger",
        duration: 3e3
      });
      return;
    }
    if (!checkoff) {
      await clickVideo({ parameters });
      updateVideoSwitching(true);
      await sleep({ ms: 500 });
      updateVideoSwitching(false);
    }
    if (!hasCameraPermission) {
      if (checkMediaPermission) {
        const statusCamera = await requestPermissionCamera();
        if (statusCamera !== "granted") {
          showAlert?.({
            message: "Allow access to your camera or check if your camera is not being used by another application.",
            type: "danger",
            duration: 3e3
          });
          return;
        }
      }
    }
    let mediaConstraints;
    if (vidCons && vidCons.width && vidCons.height) {
      mediaConstraints = {
        video: {
          deviceId: { exact: videoPreference },
          ...vidCons,
          frameRate: { ideal: frameRate }
        },
        audio: false
      };
    } else {
      mediaConstraints = {
        video: {
          deviceId: { exact: videoPreference },
          frameRate: { ideal: frameRate }
        },
        audio: false
      };
    }
    await mediaDevices.getUserMedia(mediaConstraints).then(async (stream) => {
      await streamSuccessVideo2({ stream, parameters });
    }).catch(async () => {
      updateUserDefaultVideoInputDevice(prevVideoInputDevice);
      showAlert?.({
        message: "Error switching; not accessible, might need to turn off your video and turn it back on after switching.",
        type: "danger",
        duration: 3e3
      });
    });
  } catch {
    updateUserDefaultVideoInputDevice(prevVideoInputDevice);
    showAlert?.({
      message: "Error switching; not accessible, might need to turn off your video and turn it back on after switching.",
      type: "danger",
      duration: 3e3
    });
  }
}
async function switchUserVideoAlt({
  videoPreference,
  checkoff,
  parameters
}) {
  const updatedParameters = parameters.getUpdatedAllParams();
  const {
    audioOnlyRoom,
    frameRate,
    vidCons,
    showAlert,
    mediaDevices,
    hasCameraPermission,
    updateVideoSwitching,
    updateCurrentFacingMode,
    //mediasfu functions
    requestPermissionCamera,
    streamSuccessVideo: streamSuccessVideo2,
    sleep,
    checkMediaPermission
  } = parameters;
  let { currentFacingMode, prevFacingMode } = updatedParameters;
  try {
    if (audioOnlyRoom) {
      showAlert?.({
        message: "You cannot turn on your camera in an audio-only event.",
        type: "danger",
        duration: 3e3
      });
      return;
    }
    if (!checkoff) {
      await clickVideo({ parameters });
      updateVideoSwitching(true);
      await sleep({ ms: 500 });
      updateVideoSwitching(false);
    }
    if (!hasCameraPermission && checkMediaPermission) {
      const statusCamera = await requestPermissionCamera();
      if (statusCamera !== "granted") {
        showAlert?.({
          message: "Allow access to your camera or check if your camera is not being used by another application.",
          type: "danger",
          duration: 3e3
        });
        return;
      }
    }
    const videoDevices = await mediaDevices.enumerateDevices();
    let mediaConstraints = {};
    if (vidCons && vidCons.width && vidCons.height) {
      mediaConstraints = {
        video: {
          facingMode: { exact: videoPreference },
          ...vidCons,
          frameRate: { ideal: frameRate }
        },
        audio: false
      };
    } else {
      mediaConstraints = {
        video: {
          facingMode: { exact: videoPreference },
          frameRate: { ideal: frameRate }
        },
        audio: false
      };
    }
    await mediaDevices.getUserMedia(mediaConstraints).then(async (stream) => {
      await streamSuccessVideo2({ stream, parameters });
    }).catch(async () => {
      let videoDevicesFront = [];
      if (videoPreference === "user") {
        videoDevicesFront = videoDevices.filter(
          (device) => device.label.includes("front") && device.kind === "videoinput"
        );
      } else {
        videoDevicesFront = videoDevices.filter(
          (device) => device.label.includes("back") && device.kind === "videoinput"
        );
      }
      if (videoDevicesFront.length > 0) {
        videoDevicesFront.forEach((device) => {
          if (device.kind === "videoinput") {
            let videoDeviceId = device.deviceId;
            if (vidCons && vidCons.width && vidCons.height) {
              mediaConstraints = {
                video: {
                  deviceId: { exact: videoDeviceId },
                  ...vidCons,
                  frameRate: { ideal: frameRate }
                },
                audio: false
              };
            } else {
              mediaConstraints = {
                video: {
                  deviceId: { exact: videoDeviceId },
                  frameRate: { ideal: frameRate }
                },
                audio: false
              };
            }
            mediaDevices.getUserMedia(mediaConstraints).then(async (stream) => {
              await streamSuccessVideo2({ stream, parameters });
            }).catch(() => {
              if (videoDeviceId === videoDevicesFront[videoDevicesFront.length - 1].deviceId) {
                currentFacingMode = prevFacingMode;
                updateCurrentFacingMode(currentFacingMode);
                showAlert?.({
                  message: "Error switching; not accessible, might need to turn off your video and turn it back on after switching.",
                  type: "danger",
                  duration: 3e3
                });
              }
            });
          }
        });
      } else {
        currentFacingMode = prevFacingMode;
        updateCurrentFacingMode(currentFacingMode);
        showAlert?.({
          message: "Error switching; not accessible, might need to turn off your video and turn it back on after switching.",
          type: "danger",
          duration: 3e3
        });
      }
    });
  } catch {
    const videoDevices = await mediaDevices.enumerateDevices();
    let videoDevicesFront = [];
    if (videoPreference === "user") {
      videoDevicesFront = videoDevices.filter(
        (device) => device.label.includes("front") && device.kind === "videoinput"
      );
    } else {
      videoDevicesFront = videoDevices.filter(
        (device) => device.label.includes("back") && device.kind === "videoinput"
      );
    }
    let mediaConstraints = {};
    if (videoDevicesFront.length > 0) {
      videoDevicesFront.forEach((device) => {
        if (device.kind === "videoinput") {
          let videoDeviceId = device.deviceId;
          if (vidCons && vidCons.width && vidCons.height) {
            mediaConstraints = {
              video: {
                deviceId: { exact: videoDeviceId },
                ...vidCons,
                frameRate: { ideal: frameRate }
              },
              audio: false
            };
          } else {
            mediaConstraints = {
              video: {
                deviceId: { exact: videoDeviceId },
                frameRate: { ideal: frameRate }
              },
              audio: false
            };
          }
          mediaDevices.getUserMedia(mediaConstraints).then(async (stream) => {
            await streamSuccessVideo2({ stream, parameters });
          }).catch(() => {
            if (videoDeviceId === videoDevicesFront[videoDevicesFront.length - 1].deviceId) {
              currentFacingMode = prevFacingMode;
              updateCurrentFacingMode(currentFacingMode);
              showAlert?.({
                message: "Error switching; not accessible, might need to turn off your video and turn it back on after switching.",
                type: "danger",
                duration: 3e3
              });
            }
          });
        }
      });
    } else {
      currentFacingMode = prevFacingMode;
      updateCurrentFacingMode(currentFacingMode);
      showAlert?.({
        message: "Error switching; not accessible, might need to turn off your video and turn it back on after switching.",
        type: "danger",
        duration: 3e3
      });
    }
  }
}
async function trigger({
  ref_ActiveNames,
  parameters
}) {
  try {
    parameters = parameters.getUpdatedAllParams();
    let {
      socket,
      localSocket,
      roomName,
      screenStates,
      participants,
      updateDateState,
      lastUpdate,
      nForReadjust,
      eventType,
      shared,
      shareScreenStarted,
      whiteboardStarted,
      whiteboardEnded,
      updateUpdateDateState,
      updateLastUpdate,
      updateNForReadjust,
      //mediasfu functions
      autoAdjust: autoAdjust2
    } = parameters;
    let socketRef = socket;
    if (localSocket && localSocket.id) {
      socketRef = localSocket;
    }
    let personOnMainScreen = screenStates[0].mainScreenPerson;
    let adminName = "";
    const admin = participants.filter(
      (participant) => participant.islevel == "2"
    );
    if (admin.length > 0) {
      adminName = admin[0].name || "";
    }
    if (personOnMainScreen === "WhiteboardActive") {
      personOnMainScreen = adminName;
    }
    let mainfilled = screenStates[0].mainScreenFilled;
    let adminOnMain = screenStates[0].adminOnMainScreen;
    let nForReadjust_;
    let val1;
    let noww = (/* @__PURE__ */ new Date()).getTime();
    let timestamp = Math.floor(noww / 1e3);
    let eventPass = false;
    if (eventType == "conference" && !(shared || shareScreenStarted)) {
      eventPass = true;
      personOnMainScreen = adminName;
      if (!ref_ActiveNames.includes(adminName)) {
        ref_ActiveNames.unshift(adminName);
      }
    }
    if (mainfilled && personOnMainScreen != null && adminOnMain || eventPass) {
      if (eventType == "conference") {
        nForReadjust = nForReadjust + 1;
        updateNForReadjust(nForReadjust);
      }
      if (!ref_ActiveNames.includes(adminName) && whiteboardStarted && !whiteboardEnded) {
        ref_ActiveNames.unshift(adminName);
      }
      nForReadjust_ = ref_ActiveNames.length;
      if (nForReadjust_ == 0 && eventType == "webinar") {
        val1 = 0;
      } else {
        const [val11] = await autoAdjust2({
          n: nForReadjust_,
          eventType,
          shared,
          shareScreenStarted
        });
        val1 = val11;
      }
      let calc1 = Math.floor(val1 / 12 * 100);
      let calc2 = 100 - calc1;
      if (lastUpdate == null || updateDateState != timestamp) {
        let now = /* @__PURE__ */ new Date();
        socketRef.emit(
          "updateScreenClient",
          {
            roomName,
            names: ref_ActiveNames,
            mainPercent: calc2,
            mainScreenPerson: personOnMainScreen,
            viewType: eventType
          },
          ({ success, reason }) => {
            updateDateState = timestamp;
            updateUpdateDateState(updateDateState);
            lastUpdate = Math.floor(now.getTime() / 1e3);
            updateLastUpdate(lastUpdate);
            if (!success) {
              console.log(reason, "updateScreenClient failed");
            }
          }
        );
      }
    } else if (mainfilled && personOnMainScreen != null && !adminOnMain) {
      nForReadjust_ = ref_ActiveNames.length;
      if (!ref_ActiveNames.includes(adminName)) {
        ref_ActiveNames.unshift(adminName);
      }
      const [val11] = await autoAdjust2({
        n: nForReadjust_,
        eventType,
        shared,
        shareScreenStarted
      });
      val1 = val11;
      const calc1 = Math.floor(val1 / 12 * 100);
      const calc2 = 100 - calc1;
      if (lastUpdate == null || updateDateState !== timestamp) {
        let now = /* @__PURE__ */ new Date();
        socketRef.emit(
          "updateScreenClient",
          {
            roomName,
            names: ref_ActiveNames,
            mainPercent: calc2,
            mainScreenPerson: personOnMainScreen,
            viewType: eventType
          },
          ({ success, reason }) => {
            updateDateState = timestamp;
            updateUpdateDateState(updateDateState);
            lastUpdate = Math.floor(now.getTime() / 1e3);
            updateLastUpdate(lastUpdate);
            if (!success) {
              console.log(reason, "updateScreenClient failed");
            }
          }
        );
      }
    } else {
      console.log("trigger stopRecording");
    }
  } catch (error) {
    console.log("Error triggering updateScreen:", error);
  }
}
const breakoutRoomUpdated = async ({ data, parameters }) => {
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
      onScreenChanges: onScreenChanges2,
      rePort: rePort2
    } = parameters;
    if (data.forHost) {
      hostNewRoom = data.newRoom;
      updateHostNewRoom(hostNewRoom);
      await onScreenChanges2({ changed: true, parameters });
      return;
    }
    if (islevel === "2" && data.members) {
      participantsAll = data.members.map((participant) => ({
        isBanned: participant.isBanned,
        name: participant.name,
        audioID: participant.audioID,
        videoID: participant.videoID
      }));
      updateParticipantsAll(participantsAll);
      participants = data.members.filter((participant) => !participant.isBanned);
      updateParticipants(participants);
    }
    breakoutRooms = data.breakoutRooms || [];
    updateBreakoutRooms(breakoutRooms);
    if (data.status === "started" && (!breakOutRoomStarted || breakOutRoomEnded)) {
      breakOutRoomStarted = true;
      breakOutRoomEnded = false;
      updateBreakOutRoomStarted(true);
      updateBreakOutRoomEnded(false);
      prevMeetingDisplayType = meetingDisplayType;
      if (meetingDisplayType !== "all") {
        meetingDisplayType = "all";
        updateMeetingDisplayType("all");
      }
      await onScreenChanges2({ changed: true, parameters });
      if (islevel === "2") {
        await rePort2({ restart: true, parameters });
      }
    } else if (data.status === "ended") {
      breakOutRoomEnded = true;
      updateBreakOutRoomEnded(true);
      if (meetingDisplayType !== prevMeetingDisplayType) {
        updateMeetingDisplayType(prevMeetingDisplayType);
      }
      await onScreenChanges2({ changed: true, parameters });
      if (islevel === "2") {
        await rePort2({ restart: true, parameters });
      }
    } else if (data.status === "started" && breakOutRoomStarted) {
      breakOutRoomStarted = true;
      breakOutRoomEnded = false;
      updateBreakOutRoomStarted(true);
      updateBreakOutRoomEnded(false);
      await onScreenChanges2({ changed: true, parameters });
      if (islevel === "2") {
        await rePort2({ restart: true, parameters });
      }
    }
  } catch {
  }
};
async function modifySettings({
  showAlert,
  roomName,
  audioSet,
  videoSet,
  screenshareSet,
  chatSet,
  socket,
  updateAudioSetting,
  updateVideoSetting,
  updateScreenshareSetting,
  updateChatSetting,
  updateIsSettingsModalVisible
}) {
  if (roomName.toLowerCase().startsWith("d")) {
    if (audioSet === "approval" || videoSet === "approval" || screenshareSet === "approval" || chatSet === "approval") {
      showAlert?.({
        message: "You cannot set approval for demo mode.",
        type: "danger",
        duration: 3e3
      });
      return;
    }
  }
  if (audioSet) {
    updateAudioSetting(audioSet);
  }
  if (videoSet) {
    updateVideoSetting(videoSet);
  }
  if (screenshareSet) {
    updateScreenshareSetting(screenshareSet);
  }
  if (chatSet) {
    updateChatSetting(chatSet);
  }
  const settings = [audioSet, videoSet, screenshareSet, chatSet];
  socket.emit("updateSettingsForRequests", { settings, roomName });
  updateIsSettingsModalVisible(false);
}
var cookie = {};
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
var hasRequiredCookie;
function requireCookie() {
  if (hasRequiredCookie) return cookie;
  hasRequiredCookie = 1;
  cookie.parse = parse;
  cookie.serialize = serialize;
  var __toString = Object.prototype.toString;
  var __hasOwnProperty = Object.prototype.hasOwnProperty;
  var cookieNameRegExp = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;
  var cookieValueRegExp = /^("?)[\u0021\u0023-\u002B\u002D-\u003A\u003C-\u005B\u005D-\u007E]*\1$/;
  var domainValueRegExp = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i;
  var pathValueRegExp = /^[\u0020-\u003A\u003D-\u007E]*$/;
  function parse(str, opt) {
    if (typeof str !== "string") {
      throw new TypeError("argument str must be a string");
    }
    var obj = {};
    var len = str.length;
    if (len < 2) return obj;
    var dec = opt && opt.decode || decode;
    var index = 0;
    var eqIdx = 0;
    var endIdx = 0;
    do {
      eqIdx = str.indexOf("=", index);
      if (eqIdx === -1) break;
      endIdx = str.indexOf(";", index);
      if (endIdx === -1) {
        endIdx = len;
      } else if (eqIdx > endIdx) {
        index = str.lastIndexOf(";", eqIdx - 1) + 1;
        continue;
      }
      var keyStartIdx = startIndex(str, index, eqIdx);
      var keyEndIdx = endIndex(str, eqIdx, keyStartIdx);
      var key = str.slice(keyStartIdx, keyEndIdx);
      if (!__hasOwnProperty.call(obj, key)) {
        var valStartIdx = startIndex(str, eqIdx + 1, endIdx);
        var valEndIdx = endIndex(str, endIdx, valStartIdx);
        if (str.charCodeAt(valStartIdx) === 34 && str.charCodeAt(valEndIdx - 1) === 34) {
          valStartIdx++;
          valEndIdx--;
        }
        var val = str.slice(valStartIdx, valEndIdx);
        obj[key] = tryDecode(val, dec);
      }
      index = endIdx + 1;
    } while (index < len);
    return obj;
  }
  function startIndex(str, index, max) {
    do {
      var code = str.charCodeAt(index);
      if (code !== 32 && code !== 9) return index;
    } while (++index < max);
    return max;
  }
  function endIndex(str, index, min) {
    while (index > min) {
      var code = str.charCodeAt(--index);
      if (code !== 32 && code !== 9) return index + 1;
    }
    return min;
  }
  function serialize(name, val, opt) {
    var enc = opt && opt.encode || encodeURIComponent;
    if (typeof enc !== "function") {
      throw new TypeError("option encode is invalid");
    }
    if (!cookieNameRegExp.test(name)) {
      throw new TypeError("argument name is invalid");
    }
    var value = enc(val);
    if (!cookieValueRegExp.test(value)) {
      throw new TypeError("argument val is invalid");
    }
    var str = name + "=" + value;
    if (!opt) return str;
    if (null != opt.maxAge) {
      var maxAge = Math.floor(opt.maxAge);
      if (!isFinite(maxAge)) {
        throw new TypeError("option maxAge is invalid");
      }
      str += "; Max-Age=" + maxAge;
    }
    if (opt.domain) {
      if (!domainValueRegExp.test(opt.domain)) {
        throw new TypeError("option domain is invalid");
      }
      str += "; Domain=" + opt.domain;
    }
    if (opt.path) {
      if (!pathValueRegExp.test(opt.path)) {
        throw new TypeError("option path is invalid");
      }
      str += "; Path=" + opt.path;
    }
    if (opt.expires) {
      var expires = opt.expires;
      if (!isDate(expires) || isNaN(expires.valueOf())) {
        throw new TypeError("option expires is invalid");
      }
      str += "; Expires=" + expires.toUTCString();
    }
    if (opt.httpOnly) {
      str += "; HttpOnly";
    }
    if (opt.secure) {
      str += "; Secure";
    }
    if (opt.partitioned) {
      str += "; Partitioned";
    }
    if (opt.priority) {
      var priority = typeof opt.priority === "string" ? opt.priority.toLowerCase() : opt.priority;
      switch (priority) {
        case "low":
          str += "; Priority=Low";
          break;
        case "medium":
          str += "; Priority=Medium";
          break;
        case "high":
          str += "; Priority=High";
          break;
        default:
          throw new TypeError("option priority is invalid");
      }
    }
    if (opt.sameSite) {
      var sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
      switch (sameSite) {
        case true:
          str += "; SameSite=Strict";
          break;
        case "lax":
          str += "; SameSite=Lax";
          break;
        case "strict":
          str += "; SameSite=Strict";
          break;
        case "none":
          str += "; SameSite=None";
          break;
        default:
          throw new TypeError("option sameSite is invalid");
      }
    }
    return str;
  }
  function decode(str) {
    return str.indexOf("%") !== -1 ? decodeURIComponent(str) : str;
  }
  function isDate(val) {
    return __toString.call(val) === "[object Date]";
  }
  function tryDecode(str, decode2) {
    try {
      return decode2(str);
    } catch (e) {
      return str;
    }
  }
  return cookie;
}
var cookieExports = requireCookie();
function hasDocumentCookie() {
  const testingValue = typeof global === "undefined" ? void 0 : global.TEST_HAS_DOCUMENT_COOKIE;
  if (typeof testingValue === "boolean") {
    return testingValue;
  }
  return typeof document === "object" && typeof document.cookie === "string";
}
function parseCookies(cookies2) {
  if (typeof cookies2 === "string") {
    return cookieExports.parse(cookies2);
  } else if (typeof cookies2 === "object" && cookies2 !== null) {
    return cookies2;
  } else {
    return {};
  }
}
function readCookie(value, options = {}) {
  const cleanValue = cleanupCookieValue(value);
  if (!options.doNotParse) {
    try {
      return JSON.parse(cleanValue);
    } catch (e) {
    }
  }
  return value;
}
function cleanupCookieValue(value) {
  if (value && value[0] === "j" && value[1] === ":") {
    return value.substr(2);
  }
  return value;
}
class Cookies {
  constructor(cookies2, defaultSetOptions = {}) {
    this.changeListeners = [];
    this.HAS_DOCUMENT_COOKIE = false;
    this.update = () => {
      if (!this.HAS_DOCUMENT_COOKIE) {
        return;
      }
      const previousCookies = this.cookies;
      this.cookies = cookieExports.parse(document.cookie);
      this._checkChanges(previousCookies);
    };
    const domCookies = typeof document === "undefined" ? "" : document.cookie;
    this.cookies = parseCookies(cookies2 || domCookies);
    this.defaultSetOptions = defaultSetOptions;
    this.HAS_DOCUMENT_COOKIE = hasDocumentCookie();
  }
  _emitChange(params) {
    for (let i = 0; i < this.changeListeners.length; ++i) {
      this.changeListeners[i](params);
    }
  }
  _checkChanges(previousCookies) {
    const names = new Set(Object.keys(previousCookies).concat(Object.keys(this.cookies)));
    names.forEach((name) => {
      if (previousCookies[name] !== this.cookies[name]) {
        this._emitChange({
          name,
          value: readCookie(this.cookies[name])
        });
      }
    });
  }
  _startPolling() {
    this.pollingInterval = setInterval(this.update, 300);
  }
  _stopPolling() {
    if (this.pollingInterval) {
      clearInterval(this.pollingInterval);
    }
  }
  get(name, options = {}) {
    if (!options.doNotUpdate) {
      this.update();
    }
    return readCookie(this.cookies[name], options);
  }
  getAll(options = {}) {
    if (!options.doNotUpdate) {
      this.update();
    }
    const result = {};
    for (let name in this.cookies) {
      result[name] = readCookie(this.cookies[name], options);
    }
    return result;
  }
  set(name, value, options) {
    if (options) {
      options = Object.assign(Object.assign({}, this.defaultSetOptions), options);
    } else {
      options = this.defaultSetOptions;
    }
    const stringValue = typeof value === "string" ? value : JSON.stringify(value);
    this.cookies = Object.assign(Object.assign({}, this.cookies), { [name]: stringValue });
    if (this.HAS_DOCUMENT_COOKIE) {
      document.cookie = cookieExports.serialize(name, stringValue, options);
    }
    this._emitChange({ name, value, options });
  }
  remove(name, options) {
    const finalOptions = options = Object.assign(Object.assign(Object.assign({}, this.defaultSetOptions), options), { expires: new Date(1970, 1, 1, 0, 0, 1), maxAge: 0 });
    this.cookies = Object.assign({}, this.cookies);
    delete this.cookies[name];
    if (this.HAS_DOCUMENT_COOKIE) {
      document.cookie = cookieExports.serialize(name, "", finalOptions);
    }
    this._emitChange({ name, value: void 0, options });
  }
  addChangeListener(callback) {
    this.changeListeners.push(callback);
    if (this.HAS_DOCUMENT_COOKIE && this.changeListeners.length === 1) {
      if (typeof window === "object" && "cookieStore" in window) {
        window.cookieStore.addEventListener("change", this.update);
      } else {
        this._startPolling();
      }
    }
  }
  removeChangeListener(callback) {
    const idx = this.changeListeners.indexOf(callback);
    if (idx >= 0) {
      this.changeListeners.splice(idx, 1);
    }
    if (this.HAS_DOCUMENT_COOKIE && this.changeListeners.length === 0) {
      if (typeof window === "object" && "cookieStore" in window) {
        window.cookieStore.removeEventListener("change", this.update);
      } else {
        this._stopPolling();
      }
    }
  }
}
const cookies$1 = new Cookies();
const MAX_ATTEMPTS$1 = 10;
const RATE_LIMIT_DURATION$1 = 3 * 60 * 60 * 1e3;
const checkLimitsAndMakeRequest = async ({
  apiUserName,
  apiToken,
  link,
  apiKey = "",
  userName,
  parameters,
  validate = true
}) => {
  const TIMEOUT_DURATION = 1e4;
  let unsuccessfulAttempts = parseInt(cookies$1.get("unsuccessfulAttempts")) || 0;
  let lastRequestTimestamp = parseInt(cookies$1.get("lastRequestTimestamp")) || 0;
  if (unsuccessfulAttempts >= MAX_ATTEMPTS$1 && Date.now() - lastRequestTimestamp < RATE_LIMIT_DURATION$1) {
    parameters.showAlert?.({
      message: "Too many unsuccessful attempts. Please try again later.",
      type: "danger",
      duration: 3e3
    });
    return;
  } else {
    unsuccessfulAttempts = 0;
    cookies$1.set("unsuccessfulAttempts", unsuccessfulAttempts.toString());
    cookies$1.set("lastRequestTimestamp", Date.now().toString());
  }
  try {
    parameters.updateIsLoadingModalVisible(true);
    const socketPromise = await parameters.connectSocket({
      apiUserName,
      apiKey,
      apiToken,
      link
    });
    const timeoutPromise = new Promise(
      (_, reject) => setTimeout(
        () => reject(new Error("Request timed out")),
        TIMEOUT_DURATION
      )
    );
    const socket = await Promise.race([socketPromise, timeoutPromise]);
    if (socket && socket instanceof Socket && socket.id) {
      unsuccessfulAttempts = 0;
      cookies$1.set("unsuccessfulAttempts", unsuccessfulAttempts.toString());
      cookies$1.set("lastRequestTimestamp", Date.now().toString());
      if (validate) {
        parameters.updateSocket(socket);
      } else {
        parameters.updateLocalSocket?.(socket);
      }
      parameters.updateApiUserName(apiUserName);
      parameters.updateApiToken(apiToken);
      parameters.updateLink(link);
      parameters.updateRoomName(apiUserName);
      parameters.updateMember(userName);
      if (validate) parameters.updateValidated(true);
    } else {
      unsuccessfulAttempts += 1;
      cookies$1.set("unsuccessfulAttempts", unsuccessfulAttempts.toString());
      parameters.updateIsLoadingModalVisible(false);
      parameters.showAlert?.({
        message: "Invalid credentials.",
        type: "danger",
        duration: 3e3
      });
    }
  } catch {
    parameters.showAlert?.({
      message: "Unable to connect. Check your credentials and try again.",
      type: "danger",
      duration: 3e3
    });
    unsuccessfulAttempts += 1;
    cookies$1.set("unsuccessfulAttempts", unsuccessfulAttempts.toString());
    parameters.updateIsLoadingModalVisible(false);
  }
};
const createDeviceClient = async ({
  rtpCapabilities
}) => {
  try {
    if (!rtpCapabilities) {
      throw new Error(
        "Both rtpCapabilities and mediasoupClient must be provided."
      );
    }
    const device = new mediasoupClient.Device();
    rtpCapabilities.headerExtensions = rtpCapabilities.headerExtensions.filter(
      (ext) => ext.uri !== "urn:3gpp:video-orientation"
    );
    await device.load({
      routerRtpCapabilities: rtpCapabilities
    });
    return device;
  } catch (error) {
    if (error && error.name === "UnsupportedError") {
      console.error("Device creation is not supported by this browser.");
    }
    throw error;
  }
};
async function autoAdjust({
  n,
  eventType,
  shareScreenStarted,
  shared
}) {
  let val1 = 6;
  let val2 = 12 - val1;
  if (eventType === "broadcast") {
    val1 = 0;
    val2 = 12 - val1;
  } else if (eventType === "chat" || eventType === "conference" && !(shareScreenStarted || shared)) {
    val1 = 12;
    val2 = 12 - val1;
  } else {
    if (shareScreenStarted || shared) {
      val2 = 10;
      val1 = 12 - val2;
    } else {
      if (n === 0) {
        val1 = 1;
        val2 = 12 - val1;
      } else if (n >= 1 && n < 4) {
        val1 = 4;
        val2 = 12 - val1;
      } else if (n >= 4 && n < 6) {
        val1 = 6;
        val2 = 12 - val1;
      } else if (n >= 6 && n < 9) {
        val1 = 6;
        val2 = 12 - val1;
      } else if (n >= 9 && n < 12) {
        val1 = 6;
        val2 = 12 - val1;
      } else if (n >= 12 && n < 20) {
        val1 = 8;
        val2 = 12 - val1;
      } else if (n >= 20 && n < 50) {
        val1 = 8;
        val2 = 12 - val1;
      } else {
        val1 = 10;
        val2 = 12 - val1;
      }
    }
  }
  return [val1, val2];
}
function calculateRowsAndColumns({ n }) {
  const sqrt = Math.sqrt(n);
  let cols = Math.floor(sqrt);
  let rows = Math.ceil(n / cols);
  let prod = rows * cols;
  while (prod < n) {
    if (cols < rows) {
      cols++;
    } else {
      rows++;
    }
    prod = rows * cols;
  }
  return [rows, cols];
}
async function checkGrid({ rows, cols, actives }) {
  try {
    let numRows = 0;
    let numCols = 0;
    let lastrow = 0;
    let lastrowcols = 0;
    let remainingVideos = 0;
    let numtoadd = 0;
    let actualRows = 0;
    let removeAltGrid = false;
    if (rows * cols !== actives) {
      if (rows * cols > actives) {
        const res = actives - (rows - 1) * cols;
        if (cols * 0.5 < res) {
          lastrow = rows;
          lastrowcols = res;
          remainingVideos = lastrowcols;
        } else {
          lastrowcols = res + cols;
          lastrow = rows - 1;
          remainingVideos = lastrowcols;
        }
        numRows = lastrow - 1;
        numCols = cols;
        numtoadd = (lastrow - 1) * numCols;
        actualRows = lastrow;
        removeAltGrid = false;
      }
    } else {
      numCols = cols;
      numRows = rows;
      lastrow = rows;
      lastrowcols = cols;
      remainingVideos = 0;
      numtoadd = lastrow * numCols;
      actualRows = lastrow;
      removeAltGrid = true;
    }
    return [
      removeAltGrid,
      numtoadd,
      numRows,
      numCols,
      remainingVideos,
      actualRows,
      lastrowcols
    ];
  } catch (error) {
    console.log("checkGrid error", error);
  }
}
async function checkPermission({ permissionType, audioSetting, videoSetting, screenshareSetting, chatSetting }) {
  try {
    switch (permissionType) {
      case "audioSetting":
        if (audioSetting === "allow") {
          return 0;
        } else if (audioSetting === "approval") {
          return 1;
        } else {
          return 2;
        }
      case "videoSetting":
        if (videoSetting === "allow") {
          return 0;
        } else if (videoSetting === "approval") {
          return 1;
        } else {
          return 2;
        }
      case "screenshareSetting":
        if (screenshareSetting === "allow") {
          return 0;
        } else if (screenshareSetting === "approval") {
          return 1;
        } else {
          return 2;
        }
      case "chatSetting":
        if (chatSetting === "allow") {
          return 0;
        } else if (chatSetting === "approval") {
          return 1;
        } else {
          return 2;
        }
      default:
        return 2;
    }
  } catch {
    return 2;
  }
}
async function controlMedia({
  participantId,
  participantName,
  type,
  socket,
  coHostResponsibility,
  participants,
  member,
  islevel,
  showAlert,
  coHost,
  roomName
}) {
  try {
    let mediaValue = false;
    try {
      mediaValue = coHostResponsibility.find((item) => item.name === "media")?.value ?? false;
    } catch (error) {
      console.log("Error retrieving media control value", error);
    }
    const participant = participants.find((obj) => obj.name === participantName);
    if (!participant) {
      console.log("Participant not found");
      return;
    }
    if (islevel === "2" || coHost === member && mediaValue === true) {
      if (!participant.muted && participant.islevel !== "2" && type === "audio" || participant.islevel !== "2" && type === "video" && participant.videoOn) {
        socket.emit("controlMedia", {
          participantId,
          participantName,
          type,
          roomName
        });
      }
    } else {
      if (showAlert) {
        showAlert({
          message: "You are not allowed to control media for other participants.",
          type: "danger",
          duration: 3e3
        });
      }
    }
  } catch (error) {
    console.log("controlMedia error", error);
  }
}
function getEstimate({ n, parameters }) {
  try {
    let {
      fixedPageLimit,
      screenPageLimit,
      shareScreenStarted,
      shared,
      eventType,
      removeAltGrid,
      isWideScreen,
      isMediumScreen,
      updateRemoveAltGrid,
      //mediaSfu functions
      calculateRowsAndColumns: calculateRowsAndColumns2
    } = parameters;
    const [rows, cols] = calculateRowsAndColumns2({ n });
    if (n < fixedPageLimit || (shareScreenStarted || shared) && n < screenPageLimit + 1) {
      removeAltGrid = true;
      updateRemoveAltGrid(removeAltGrid);
      if (!(isMediumScreen || isWideScreen)) {
        return eventType === "chat" || eventType === "conference" && !(shareScreenStarted || shared) ? [n, n, 1] : [n, 1, n];
      } else {
        return eventType === "chat" || eventType === "conference" && !(shareScreenStarted || shared) ? [n, 1, n] : [n, n, 1];
      }
    }
    return [rows * cols, rows, cols];
  } catch (error) {
    if (error instanceof Error) {
      console.log("Error estimating rows and columns:", error.message);
    } else {
      console.log("Error estimating rows and columns:", error);
    }
    return [0, 0, 0];
  }
}
const getPipedProducersAlt = async ({
  community = false,
  nsock,
  islevel,
  parameters
}) => {
  try {
    const { member, signalNewConsumerTransport: signalNewConsumerTransport2 } = parameters;
    const emitName = community ? "getProducersAlt" : "getProducersPipedAlt";
    await nsock.emit(
      emitName,
      { islevel, member },
      async (producerIds) => {
        if (producerIds.length > 0) {
          await Promise.all(
            producerIds.map(
              (id) => signalNewConsumerTransport2({
                nsock,
                remoteProducerId: id,
                islevel,
                parameters
              })
            )
          );
        }
      }
    );
  } catch (error) {
    console.log("Error getting piped producers:", error.message);
  }
};
const getProducersPiped = async ({
  nsock,
  islevel,
  parameters
}) => {
  try {
    const { member, signalNewConsumerTransport: signalNewConsumerTransport2 } = parameters;
    await nsock.emit(
      "getProducersPipedAlt",
      { islevel, member },
      async (producerIds) => {
        if (producerIds.length > 0) {
          await Promise.all(
            producerIds.map(
              (id) => signalNewConsumerTransport2({
                remoteProducerId: id,
                islevel,
                nsock,
                parameters
              })
            )
          );
        }
      }
    );
  } catch (error) {
    console.log("Error getting piped producers:", error.message);
  }
};
async function receiveRoomMessages({
  socket,
  roomName,
  updateMessages
}) {
  try {
    socket.emit("getMessage", { roomName }, async ({ messages_ }) => {
      updateMessages(messages_);
    });
  } catch (error) {
    if (error instanceof Error) {
      console.log("Error tuning messages:", error.message);
    } else {
      console.log("Error tuning messages:", error);
    }
  }
}
const resumeLocalSendTransportAudio = async ({
  parameters
}) => {
  try {
    const {
      localAudioProducer,
      updateLocalAudioProducer
    } = parameters;
    if (localAudioProducer) {
      localAudioProducer.resume();
      updateLocalAudioProducer?.(localAudioProducer);
    }
  } catch (error) {
    console.error("Error resuming local audio send transport:", error);
    throw error;
  }
};
const resumeSendTransportAudio = async ({
  parameters
}) => {
  try {
    const {
      audioProducer,
      islevel,
      hostLabel,
      lock_screen,
      shared,
      updateAudioProducer,
      videoAlreadyOn,
      updateUpdateMainWindow,
      //mediasfu functions
      prepopulateUserMedia: prepopulateUserMedia2
    } = parameters;
    audioProducer.resume();
    if (!videoAlreadyOn && islevel === "2") {
      if (!lock_screen && !shared) {
        let updatedMainWindow = true;
        updateUpdateMainWindow(updatedMainWindow);
        await prepopulateUserMedia2({ name: hostLabel, parameters });
        updatedMainWindow = false;
        updateUpdateMainWindow(updatedMainWindow);
      }
    }
    updateAudioProducer(audioProducer);
    try {
      await resumeLocalSendTransportAudio({ parameters });
    } catch (localError) {
      console.error(
        "local audio send transport resuming failed:",
        localError
      );
    }
  } catch (error) {
    throw new Error(
      `Error during resuming audio send transport: ${error.message}`
    );
  }
};
async function updateMiniCardsGrid({
  rows,
  cols,
  defal = true,
  actualRows = 2,
  parameters
}) {
  let { getUpdatedAllParams } = parameters;
  parameters = getUpdatedAllParams();
  let {
    updateGridRows,
    updateGridCols,
    updateAltGridRows,
    updateAltGridCols,
    updateGridSizes,
    gridSizes,
    paginationDirection,
    paginationHeightWidth,
    doPaginate,
    componentSizes,
    eventType
  } = parameters;
  let containerWidth = componentSizes.otherWidth;
  let containerHeight = componentSizes.otherHeight;
  if (doPaginate) {
    if (paginationDirection === "horizontal") {
      containerHeight -= paginationHeightWidth;
    } else {
      containerWidth -= paginationHeightWidth;
    }
  }
  let cardSpacing = 3;
  if (eventType === "chat") {
    cardSpacing = 0;
  }
  let totalSpacingHorizontal = (cols - 1) * cardSpacing;
  let totalSpacingVertical = (actualRows - 1) * cardSpacing;
  let cardWidth;
  let cardHeight;
  if (cols === 0 || actualRows === 0) {
    cardWidth = 0;
    cardHeight = 0;
  } else {
    cardWidth = Math.floor(
      (containerWidth - totalSpacingHorizontal) / cols
    );
    cardHeight = Math.floor(
      (containerHeight - totalSpacingVertical) / actualRows
    );
  }
  if (defal) {
    updateGridRows(rows);
    updateGridCols(cols);
    gridSizes = { ...gridSizes, gridWidth: cardWidth, gridHeight: cardHeight };
    updateGridSizes(gridSizes);
  } else {
    updateAltGridRows(rows);
    updateAltGridCols(cols);
    gridSizes = {
      ...gridSizes,
      altGridWidth: cardWidth,
      altGridHeight: cardHeight
    };
    updateGridSizes(gridSizes);
  }
}
function updateParticipantAudioDecibels({
  name,
  averageLoudness,
  audioDecibels,
  updateAudioDecibels
}) {
  const existingEntry = audioDecibels.find((entry) => entry.name === name);
  if (existingEntry) {
    existingEntry.averageLoudness = averageLoudness;
  } else {
    audioDecibels.push({ name, averageLoudness });
  }
  updateAudioDecibels(audioDecibels);
}
const launchBackground = ({
  updateIsBackgroundModalVisible,
  isBackgroundModalVisible
}) => {
  updateIsBackgroundModalVisible(!isBackgroundModalVisible);
};
const handleStartBreakout = ({
  socket,
  localSocket,
  breakoutRooms,
  newParticipantAction,
  roomName,
  breakOutRoomStarted,
  breakOutRoomEnded,
  showAlert,
  updateBreakOutRoomStarted,
  updateBreakOutRoomEnded,
  onBreakoutRoomsClose,
  meetingDisplayType,
  updateMeetingDisplayType
}) => {
  const emitName = breakOutRoomStarted && !breakOutRoomEnded ? "updateBreakout" : "startBreakout";
  const filteredBreakoutRooms = breakoutRooms.map(
    (room) => room.map(({ name, breakRoom }) => ({ name, breakRoom }))
  );
  socket.emit(
    emitName,
    { breakoutRooms: filteredBreakoutRooms, newParticipantAction, roomName },
    (response) => {
      if (response.success) {
        showAlert?.({ message: "Breakout rooms active", type: "success" });
        updateBreakOutRoomStarted(true);
        updateBreakOutRoomEnded(false);
        onBreakoutRoomsClose();
        if (meetingDisplayType !== "all") {
          updateMeetingDisplayType("all");
        }
      } else {
        showAlert?.({ message: response.reason, type: "danger" });
      }
    }
  );
  if (localSocket && localSocket.id) {
    try {
      localSocket.emit(
        emitName,
        { breakoutRooms: filteredBreakoutRooms, newParticipantAction, roomName },
        (response) => {
          if (response.success) {
          }
        }
      );
    } catch {
      console.log("Error starting local breakout rooms:");
    }
  }
};
const handleStopBreakout = ({
  socket,
  localSocket,
  roomName,
  showAlert,
  updateBreakOutRoomStarted,
  updateBreakOutRoomEnded,
  onBreakoutRoomsClose,
  meetingDisplayType,
  prevMeetingDisplayType,
  updateMeetingDisplayType
}) => {
  socket.emit("stopBreakout", { roomName }, (response) => {
    if (response.success) {
      showAlert?.({ message: "Breakout rooms stopped", type: "success" });
      updateBreakOutRoomStarted(false);
      updateBreakOutRoomEnded(true);
      onBreakoutRoomsClose();
      if (meetingDisplayType !== prevMeetingDisplayType) {
        updateMeetingDisplayType(prevMeetingDisplayType);
      }
    } else {
      showAlert?.({ message: response.reason, type: "danger" });
    }
  });
  if (localSocket && localSocket.id) {
    try {
      localSocket.emit("stopBreakout", { roomName }, (response) => {
        if (response.success) {
        }
      });
    } catch {
      console.log("Error stopping local breakout rooms:");
    }
  }
};
const launchBreakoutRooms = ({
  updateIsBreakoutRoomsModalVisible,
  isBreakoutRoomsModalVisible
}) => {
  updateIsBreakoutRoomsModalVisible(!isBreakoutRoomsModalVisible);
};
const launchCoHost = ({ updateIsCoHostModalVisible, isCoHostModalVisible }) => {
  updateIsCoHostModalVisible(!isCoHostModalVisible);
};
const modifyCoHostSettings = async ({
  roomName,
  showAlert,
  selectedParticipant,
  coHost,
  coHostResponsibility,
  updateIsCoHostModalVisible,
  updateCoHostResponsibility,
  updateCoHost,
  socket
}) => {
  if (roomName.toLowerCase().startsWith("d")) {
    showAlert?.({
      message: "You cannot add co-host in demo mode.",
      type: "danger",
      duration: 3e3
    });
    return;
  }
  let newCoHost = coHost;
  if (coHost !== "No coHost" || selectedParticipant && selectedParticipant !== "Select a participant") {
    if (selectedParticipant && selectedParticipant !== "Select a participant") {
      newCoHost = selectedParticipant;
      updateCoHost(newCoHost);
    }
    updateCoHostResponsibility(coHostResponsibility);
    socket.emit("updateCoHost", {
      roomName,
      coHost: newCoHost,
      coHostResponsibility
    });
  }
  updateIsCoHostModalVisible(false);
};
const launchDisplaySettings = ({
  updateIsDisplaySettingsModalVisible,
  isDisplaySettingsModalVisible
}) => {
  updateIsDisplaySettingsModalVisible(!isDisplaySettingsModalVisible);
};
const modifyDisplaySettings = async ({
  parameters
}) => {
  let {
    showAlert,
    meetingDisplayType,
    autoWave,
    forceFullDisplay,
    meetingVideoOptimized,
    islevel,
    recordStarted,
    recordResumed,
    recordStopped,
    recordPaused,
    recordingDisplayType,
    recordingVideoOptimized,
    prevForceFullDisplay,
    prevMeetingDisplayType,
    updateMeetingDisplayType,
    updateAutoWave,
    updateForceFullDisplay,
    updateMeetingVideoOptimized,
    updatePrevForceFullDisplay,
    updatePrevMeetingDisplayType,
    updateIsDisplaySettingsModalVisible,
    updateFirstAll,
    updateUpdateMainWindow,
    breakOutRoomStarted,
    breakOutRoomEnded,
    onScreenChanges: onScreenChanges2
  } = parameters;
  updateAutoWave(autoWave);
  updateForceFullDisplay(forceFullDisplay);
  if (islevel === "2" && (recordStarted || recordResumed) && !recordStopped && !recordPaused) {
    if (recordingDisplayType === "video" && meetingDisplayType === "video" && meetingVideoOptimized && !recordingVideoOptimized) {
      showAlert?.({
        message: "Meeting display type can be either video, media, or all when recording display type is non-optimized video.",
        type: "danger",
        duration: 3e3
      });
      meetingDisplayType = recordingDisplayType;
      updateMeetingDisplayType(meetingDisplayType);
      meetingVideoOptimized = recordingVideoOptimized;
      updateMeetingVideoOptimized(meetingVideoOptimized);
      return;
    } else if (recordingDisplayType === "media" && meetingDisplayType === "video") {
      showAlert?.({
        message: "Meeting display type can be either media or all when recording display type is media.",
        type: "danger",
        duration: 3e3
      });
      meetingDisplayType = recordingDisplayType;
      updateMeetingDisplayType(meetingDisplayType);
      return;
    } else if (recordingDisplayType === "all" && (meetingDisplayType === "video" || meetingDisplayType === "media")) {
      showAlert?.({
        message: "Meeting display type can be only all when recording display type is all.",
        type: "danger",
        duration: 3e3
      });
      meetingDisplayType = recordingDisplayType;
      updateMeetingDisplayType(meetingDisplayType);
      return;
    }
  }
  updateMeetingDisplayType(meetingDisplayType);
  updateMeetingVideoOptimized(meetingVideoOptimized);
  updateIsDisplaySettingsModalVisible(false);
  if (prevMeetingDisplayType !== meetingDisplayType || prevForceFullDisplay !== forceFullDisplay) {
    if (breakOutRoomStarted && !breakOutRoomEnded && meetingDisplayType !== "all") {
      showAlert?.({
        message: "Breakout room is active. Display type can only be all.",
        type: "danger"
      });
      meetingDisplayType = prevMeetingDisplayType;
      updateMeetingDisplayType(prevMeetingDisplayType);
      return;
    }
    updateFirstAll(meetingDisplayType !== "all" ? true : false);
    updateUpdateMainWindow(true);
    await onScreenChanges2({
      changed: true,
      parameters: { ...parameters, meetingDisplayType, forceFullDisplay }
    });
    updatePrevForceFullDisplay(forceFullDisplay);
    updatePrevMeetingDisplayType(meetingDisplayType);
  }
};
const confirmExit = async ({
  socket,
  localSocket,
  member,
  roomName,
  ban = false
}) => {
  socket.emit("disconnectUser", {
    member,
    roomName,
    ban
  });
  if (localSocket && localSocket.id) {
    localSocket.emit("disconnectUser", {
      member,
      roomName,
      ban
    });
  }
};
const launchConfirmExit = ({
  updateIsConfirmExitModalVisible,
  isConfirmExitModalVisible
}) => {
  updateIsConfirmExitModalVisible(!isConfirmExitModalVisible);
};
const launchMediaSettings = async ({
  updateIsMediaSettingsModalVisible,
  isMediaSettingsModalVisible,
  mediaDevices,
  audioInputs,
  videoInputs,
  updateAudioInputs,
  updateVideoInputs
}) => {
  if (!isMediaSettingsModalVisible) {
    try {
      const devices = await mediaDevices.enumerateDevices();
      videoInputs = devices.filter((device) => device.kind === "videoinput");
      audioInputs = devices.filter((device) => device.kind === "audioinput");
      updateVideoInputs(videoInputs);
      updateAudioInputs(audioInputs);
    } catch (error) {
      console.log("Error getting media devices", error);
    }
  }
  updateIsMediaSettingsModalVisible(!isMediaSettingsModalVisible);
};
const launchMenuModal = ({
  updateIsMenuModalVisible,
  isMenuModalVisible
}) => {
  updateIsMenuModalVisible(!isMenuModalVisible);
};
const launchMessages = ({ updateIsMessagesModalVisible, isMessagesModalVisible }) => {
  updateIsMessagesModalVisible(!isMessagesModalVisible);
};
const sendMessage = async ({
  message,
  receivers,
  group,
  messagesLength,
  member,
  sender,
  islevel,
  eventType,
  showAlert,
  coHostResponsibility,
  coHost,
  roomName,
  socket,
  chatSetting
}) => {
  let chatValue = false;
  if (eventType === "broadcast") {
    if (messagesLength >= 100) {
      showAlert?.({
        message: "You have reached the maximum number of messages",
        type: "danger",
        duration: 3e3
      });
      return;
    }
  } else if (eventType === "chat") {
    if (messagesLength >= 500) {
      showAlert?.({
        message: "You have reached the maximum number of messages",
        type: "danger",
        duration: 3e3
      });
      return;
    }
  } else {
    if (messagesLength >= 1e5) {
      showAlert?.({
        message: "You have reached the maximum number of messages",
        type: "danger",
        duration: 3e3
      });
      return;
    }
  }
  if (!message || message === "") {
    showAlert?.({
      message: "Message is not valid.",
      type: "danger",
      duration: 3e3
    });
    return;
  }
  if (receivers.length < 1 && group === false) {
    showAlert?.({
      message: "Please select a message to reply to",
      type: "danger",
      duration: 3e3
    });
    return;
  }
  const messageObject = {
    sender: sender ? sender : member,
    receivers,
    message,
    timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString(),
    group: group !== void 0 && group !== null ? group : false
  };
  try {
    chatValue = coHostResponsibility.find((item) => item.name === "chat")?.value ?? false;
  } catch (error) {
    console.error(error);
  }
  if (islevel === "2" || coHost === member && chatValue === true) ;
  else {
    if (!chatSetting) {
      showAlert?.({
        message: "You are not allowed to send a message in this event room",
        type: "danger",
        duration: 3e3
      });
      return;
    }
  }
  socket.emit("sendMessage", {
    messageObject,
    roomName
  });
};
const launchParticipants = ({ updateIsParticipantsModalVisible, isParticipantsModalVisible }) => {
  updateIsParticipantsModalVisible(!isParticipantsModalVisible);
};
const messageParticipants = ({
  coHostResponsibility = [],
  participant,
  member,
  islevel,
  showAlert,
  coHost,
  updateIsMessagesModalVisible,
  updateDirectMessageDetails,
  updateStartDirectMessage
}) => {
  let chatValue = false;
  try {
    chatValue = coHostResponsibility.find((item) => item.name === "chat")?.value ?? false;
  } catch (error) {
    console.error(error);
  }
  if (islevel === "2" || coHost === member && chatValue === true) {
    if (participant.islevel !== "2") {
      updateDirectMessageDetails(participant);
      updateStartDirectMessage(true);
      updateIsMessagesModalVisible(true);
    }
  } else {
    showAlert?.({
      message: "You are not allowed to send this message",
      type: "danger",
      duration: 3e3
    });
    return;
  }
};
const muteParticipants = async ({
  socket,
  coHostResponsibility = [],
  participant,
  member,
  islevel,
  showAlert,
  coHost,
  roomName
}) => {
  let mediaValue = false;
  try {
    mediaValue = coHostResponsibility.find((item) => item.name === "media")?.value ?? false;
  } catch (error) {
    console.error(error);
  }
  if (islevel === "2" || coHost === member && mediaValue) {
    if (!participant.muted && participant.islevel !== "2") {
      const participantId = participant.id;
      socket.emit("controlMedia", {
        participantId,
        participantName: participant.name,
        type: "all",
        roomName
      });
    }
  } else {
    showAlert?.({
      message: "You are not allowed to mute other participants",
      type: "danger",
      duration: 3e3
    });
  }
};
const removeParticipants = async ({
  coHostResponsibility,
  participant,
  member,
  islevel,
  showAlert,
  coHost,
  participants,
  socket,
  roomName,
  updateParticipants
}) => {
  let participantsValue = false;
  try {
    participantsValue = coHostResponsibility.find((item) => item.name === "participants")?.value ?? false;
  } catch {
    participantsValue = false;
  }
  if (islevel === "2" || coHost === member && participantsValue === true) {
    if (participant.islevel !== "2") {
      const participantId = participant.id;
      socket.emit("disconnectUserInitiate", {
        member: participant.name,
        roomName,
        id: participantId
      });
      const index = participants.findIndex((obj) => obj.name === participant.name);
      if (index !== -1) {
        participants.splice(index, 1);
      }
      updateParticipants(participants);
    }
  } else {
    showAlert?.({
      message: "You are not allowed to remove other participants",
      type: "danger",
      duration: 3e3
    });
  }
};
const handleCreatePoll = async ({
  poll,
  socket,
  roomName,
  showAlert,
  updateIsPollModalVisible
}) => {
  try {
    socket.emit(
      "createPoll",
      { roomName, poll },
      (response) => {
        if (response.success) {
          showAlert?.({ message: "Poll created successfully", type: "success" });
          updateIsPollModalVisible(false);
        } else {
          showAlert?.({ message: response.reason || "Failed to create poll", type: "danger" });
        }
      }
    );
  } catch (error) {
    console.error("Error creating poll:", error);
  }
};
const handleEndPoll = async ({
  pollId,
  socket,
  showAlert,
  roomName,
  updateIsPollModalVisible
}) => {
  try {
    socket.emit(
      "endPoll",
      { roomName, poll_id: pollId },
      (response) => {
        if (response.success) {
          showAlert?.({
            message: "Poll ended successfully",
            type: "success"
          });
          updateIsPollModalVisible(false);
        } else {
          showAlert?.({ message: response.reason || "Failed to end poll", type: "danger" });
        }
      }
    );
  } catch (error) {
    console.error("Error ending poll:", error);
  }
};
const handleVotePoll = async ({
  pollId,
  optionIndex,
  socket,
  showAlert,
  member,
  roomName,
  updateIsPollModalVisible
}) => {
  try {
    socket.emit(
      "votePoll",
      {
        roomName,
        poll_id: pollId,
        member,
        choice: optionIndex
      },
      (response) => {
        if (response.success) {
          showAlert?.({
            message: "Vote submitted successfully",
            type: "success"
          });
          updateIsPollModalVisible(false);
        } else {
          showAlert?.({ message: response.reason || "Failed to submit vote", type: "danger" });
        }
      }
    );
  } catch (error) {
    console.error("Error submitting vote:", error);
  }
};
const launchPoll = ({ updateIsPollModalVisible, isPollModalVisible }) => {
  updateIsPollModalVisible(!isPollModalVisible);
};
async function handleCreateRoom({
  payload,
  localLink = "",
  connectMediaSFU = true,
  apiUserName,
  apiKey,
  validate = true,
  parameters,
  initSocket,
  localData,
  createMediaSFURoom
}) {
  const {
    updateIsLoadingModalVisible,
    updateSocket,
    updateApiUserName,
    updateApiToken,
    updateLink,
    updateRoomName,
    updateMember,
    updateValidated,
    showAlert
  } = parameters;
  const createLocalRoom = async ({
    createData,
    link = localLink
  }) => {
    initSocket?.emit("createRoom", createData, (response) => {
      if (response.success) {
        updateSocket(initSocket);
        updateApiUserName(localData?.apiUserName || "");
        updateApiToken(response.secret);
        updateLink(link);
        updateRoomName(createData.eventID);
        updateMember(createData.userName + "_2");
        updateIsLoadingModalVisible(false);
        updateValidated(true);
      } else {
        updateIsLoadingModalVisible(false);
        showAlert?.({
          message: `Unable to create room. ${response.reason}`,
          type: "danger",
          duration: 3e3
        });
      }
    });
  };
  const roomCreator = async ({
    payload: createPayload,
    apiUserName: userName,
    apiKey: key,
    validate: shouldValidate = true
  }) => {
    const response = await createMediaSFURoom({
      payload: createPayload,
      apiUserName: userName,
      apiKey: key,
      localLink
    });
    if (response.success && response.data && "roomName" in response.data) {
      await checkLimitsAndMakeRequest({
        apiUserName: response.data.roomName,
        apiToken: response.data.secret,
        link: response.data.link,
        userName: createPayload.userName,
        parameters,
        validate: shouldValidate
      });
      return response;
    } else {
      updateIsLoadingModalVisible(false);
      showAlert?.({
        message: `Unable to create room. ${response.data ? "error" in response.data ? response.data.error : "" : ""}`,
        type: "danger",
        duration: 3e3
      });
    }
  };
  updateIsLoadingModalVisible(true);
  if (localLink.length > 0) {
    const secureCode = Math.random().toString(30).substring(2, 14) + Math.random().toString(30).substring(2, 14);
    let eventID = (/* @__PURE__ */ new Date()).getTime().toString(30) + (/* @__PURE__ */ new Date()).getUTCMilliseconds() + Math.floor(10 + Math.random() * 99).toString();
    eventID = "m" + eventID;
    const eventRoomParams = localData?.meetingRoomParams_;
    if (eventRoomParams && payload.eventType) {
      eventRoomParams.type = payload.eventType;
    }
    const createData = {
      eventID,
      duration: payload.duration,
      capacity: payload.capacity,
      userName: payload.userName,
      scheduledDate: /* @__PURE__ */ new Date(),
      secureCode,
      waitRoom: false,
      recordingParams: localData?.recordingParams_,
      eventRoomParams,
      videoPreference: null,
      audioPreference: null,
      audioOutputPreference: null,
      mediasfuURL: ""
    };
    if (connectMediaSFU && initSocket && localData && localData.apiUserName && localData.apiKey) {
      const localApiUserName = localData.apiUserName;
      const localApiKey = localData.apiKey;
      const roomIdentifier = `local_create_${payload.userName}_${payload.duration}_${payload.capacity}`;
      const pendingKey = `prejoin_pending_${roomIdentifier}`;
      const PENDING_TIMEOUT = 30 * 1e3;
      try {
        const pendingRequest = localStorage.getItem(pendingKey);
        if (pendingRequest) {
          const pendingData = JSON.parse(pendingRequest);
          const timeSincePending = Date.now() - (pendingData?.timestamp ?? 0);
          if (timeSincePending < PENDING_TIMEOUT) {
            updateIsLoadingModalVisible(false);
            showAlert?.({
              message: "Room creation already in progress",
              type: "danger",
              duration: 3e3
            });
            return;
          } else {
            try {
              localStorage.removeItem(pendingKey);
            } catch {
            }
          }
        }
      } catch {
      }
      try {
        localStorage.setItem(
          pendingKey,
          JSON.stringify({
            timestamp: Date.now(),
            payload: {
              action: "create",
              userName: payload.userName,
              duration: payload.duration,
              capacity: payload.capacity
            }
          })
        );
        setTimeout(() => {
          try {
            localStorage.removeItem(pendingKey);
          } catch {
          }
        }, PENDING_TIMEOUT);
      } catch {
      }
      payload.recordOnly = true;
      try {
        const response = await roomCreator({
          payload,
          apiUserName: localApiUserName,
          apiKey: localApiKey,
          validate: false
        });
        try {
          localStorage.removeItem(pendingKey);
        } catch {
        }
        if (response && response.success && response.data && "roomName" in response.data) {
          createData.eventID = response.data.roomName;
          createData.secureCode = response.data.secureCode || "";
          createData.mediasfuURL = response.data.publicURL;
          await createLocalRoom({
            createData,
            link: response.data.link
          });
        } else {
          updateIsLoadingModalVisible(false);
          showAlert?.({
            message: `Unable to create room on MediaSFU.`,
            type: "danger",
            duration: 3e3
          });
          try {
            updateSocket(initSocket);
            await createLocalRoom({ createData });
          } catch (error) {
            updateIsLoadingModalVisible(false);
            showAlert?.({
              message: `Unable to create room. ${error}`,
              type: "danger",
              duration: 3e3
            });
          }
        }
      } catch (error) {
        try {
          localStorage.removeItem(pendingKey);
        } catch {
        }
        updateIsLoadingModalVisible(false);
        showAlert?.({
          message: `Unable to create room on MediaSFU. ${error}`,
          type: "danger",
          duration: 3e3
        });
      }
    } else {
      try {
        updateSocket(initSocket);
        await createLocalRoom({ createData });
      } catch (error) {
        updateIsLoadingModalVisible(false);
        showAlert?.({
          message: `Unable to create room. ${error}`,
          type: "danger",
          duration: 3e3
        });
      }
    }
  } else {
    const roomIdentifier = `mediasfu_create_${payload.userName}_${payload.duration}_${payload.capacity}`;
    const pendingKey = `prejoin_pending_${roomIdentifier}`;
    const PENDING_TIMEOUT = 30 * 1e3;
    try {
      const pendingRequest = localStorage.getItem(pendingKey);
      if (pendingRequest) {
        const pendingData = JSON.parse(pendingRequest);
        const timeSincePending = Date.now() - (pendingData?.timestamp ?? 0);
        if (timeSincePending < PENDING_TIMEOUT) {
          updateIsLoadingModalVisible(false);
          showAlert?.({
            message: "Room creation already in progress",
            type: "danger",
            duration: 3e3
          });
          return;
        } else {
          try {
            localStorage.removeItem(pendingKey);
          } catch {
          }
        }
      }
    } catch {
    }
    try {
      localStorage.setItem(
        pendingKey,
        JSON.stringify({
          timestamp: Date.now(),
          payload: {
            action: "create",
            userName: payload.userName,
            duration: payload.duration,
            capacity: payload.capacity
          }
        })
      );
      setTimeout(() => {
        try {
          localStorage.removeItem(pendingKey);
        } catch {
        }
      }, PENDING_TIMEOUT);
    } catch {
    }
    try {
      await roomCreator({
        payload,
        apiUserName,
        apiKey,
        validate
      });
      try {
        localStorage.removeItem(pendingKey);
      } catch {
      }
    } catch (error) {
      try {
        localStorage.removeItem(pendingKey);
      } catch {
      }
      updateIsLoadingModalVisible(false);
      showAlert?.({
        message: `Unable to create room. ${error}`,
        type: "danger",
        duration: 3e3
      });
    }
  }
}
async function handleJoinRoom({
  payload,
  localLink = "",
  apiUserName,
  apiKey,
  parameters,
  initSocket,
  localData,
  joinMediaSFURoom
}) {
  const {
    updateIsLoadingModalVisible,
    updateSocket,
    updateApiUserName,
    updateApiToken,
    updateLink,
    updateRoomName,
    updateMember,
    updateValidated,
    showAlert
  } = parameters;
  const joinLocalRoom = async ({ joinData, link = localLink }) => {
    initSocket?.emit("joinEventRoom", joinData, (response2) => {
      if (response2.success) {
        updateSocket(initSocket);
        updateApiUserName(localData?.apiUserName || "");
        updateApiToken(response2.secret);
        updateLink(link);
        updateRoomName(joinData.eventID);
        updateMember(joinData.userName);
        updateIsLoadingModalVisible(false);
        updateValidated(true);
      } else {
        updateIsLoadingModalVisible(false);
        showAlert?.({
          message: `Unable to join room. ${response2.reason}`,
          type: "danger",
          duration: 3e3
        });
      }
    });
  };
  if (localLink.length > 0 && !localLink.includes("mediasfu.com")) {
    const joinData = {
      eventID: payload.meetingID,
      userName: payload.userName,
      secureCode: "",
      videoPreference: null,
      audioPreference: null,
      audioOutputPreference: null
    };
    await joinLocalRoom({ joinData });
    return;
  }
  updateIsLoadingModalVisible(true);
  const response = await joinMediaSFURoom({
    payload,
    apiUserName,
    apiKey,
    localLink
  });
  if (response.success && response.data && "roomName" in response.data) {
    await checkLimitsAndMakeRequest({
      apiUserName: response.data.roomName,
      apiToken: response.data.secret,
      link: response.data.link,
      userName: payload.userName,
      parameters
    });
  } else {
    updateIsLoadingModalVisible(false);
    showAlert?.({
      message: `Unable to join room. ${response.data ? "error" in response.data ? response.data.error : "" : ""}`,
      type: "danger",
      duration: 3e3
    });
  }
}
const checkPauseState = async ({
  recordingMediaOptions,
  recordingVideoPausesLimit,
  recordingAudioPausesLimit,
  pauseRecordCount,
  showAlert
}) => {
  const refLimit = recordingMediaOptions === "video" ? recordingVideoPausesLimit : recordingAudioPausesLimit;
  if (pauseRecordCount < refLimit) {
    return true;
  }
  showAlert?.({
    message: "You have reached the limit of pauses - you can choose to stop recording.",
    type: "danger",
    duration: 3e3
  });
  return false;
};
const checkResumeState = async ({
  recordingMediaOptions,
  recordingVideoPausesLimit,
  recordingAudioPausesLimit,
  pauseRecordCount
}) => {
  const refLimit = recordingMediaOptions === "video" ? recordingVideoPausesLimit : recordingAudioPausesLimit;
  return pauseRecordCount <= refLimit;
};
const confirmRecording = async ({
  parameters
}) => {
  parameters = parameters.getUpdatedAllParams();
  let {
    showAlert,
    recordingMediaOptions,
    recordingAudioOptions,
    recordingVideoOptions,
    recordingVideoType,
    recordingDisplayType,
    recordingNameTags,
    recordingBackgroundColor,
    recordingNameTagsColor,
    recordingOrientationVideo,
    recordingAddHLS,
    recordingAddText,
    recordingCustomText,
    recordingCustomTextPosition,
    recordingCustomTextColor,
    meetingDisplayType,
    recordingVideoParticipantsFullRoomSupport,
    recordingAllParticipantsSupport,
    recordingVideoParticipantsSupport,
    recordingSupportForOtherOrientation,
    recordingPreferredOrientation,
    recordingMultiFormatsSupport,
    recordingVideoOptimized,
    recordingAllParticipantsFullRoomSupport,
    meetingVideoOptimized,
    eventType,
    breakOutRoomStarted,
    breakOutRoomEnded,
    updateRecordingDisplayType,
    updateRecordingVideoOptimized,
    updateUserRecordingParams,
    updateConfirmedToRecord
  } = parameters;
  if (!recordingVideoParticipantsFullRoomSupport && recordingVideoOptions === "all" && recordingMediaOptions === "video") {
    if (meetingDisplayType === "all" && !(breakOutRoomStarted && !breakOutRoomEnded)) {
      showAlert?.({
        message: "You are not allowed to record videos of all participants; change the meeting display type to video or video optimized.",
        type: "danger",
        duration: 3e3
      });
      return;
    }
  }
  if (!recordingAllParticipantsSupport && recordingVideoOptions === "all") {
    showAlert?.({
      message: "You are only allowed to record yourself.",
      type: "danger",
      duration: 3e3
    });
    return;
  }
  if (!recordingVideoParticipantsSupport && recordingDisplayType === "video") {
    showAlert?.({
      message: "You are not allowed to record other video participants.",
      type: "danger",
      duration: 3e3
    });
    return;
  }
  if (!recordingSupportForOtherOrientation && recordingOrientationVideo === "all") {
    showAlert?.({
      message: "You are not allowed to record all orientations.",
      type: "danger",
      duration: 3e3
    });
    return;
  }
  if (recordingPreferredOrientation === "landscape" && recordingOrientationVideo === "portrait" || recordingPreferredOrientation === "portrait" && recordingOrientationVideo === "landscape") {
    if (!recordingSupportForOtherOrientation) {
      showAlert?.({
        message: "You are not allowed to record this orientation.",
        type: "danger",
        duration: 3e3
      });
      return;
    }
  }
  if (!recordingMultiFormatsSupport && recordingVideoType === "all") {
    showAlert?.({
      message: "You are not allowed to record all formats.",
      type: "danger",
      duration: 3e3
    });
    return;
  }
  if (eventType !== "broadcast") {
    if (recordingMediaOptions === "video") {
      if (meetingDisplayType === "media" && recordingDisplayType === "all") {
        showAlert?.({
          message: "Recording display type can be either video, video optimized, or media when meeting display type is media.",
          type: "danger",
          duration: 3e3
        });
        updateRecordingDisplayType(meetingDisplayType);
        return;
      }
      if (meetingDisplayType === "video") {
        if (recordingDisplayType === "all" || recordingDisplayType === "media") {
          showAlert?.({
            message: "Recording display type can be either video or video optimized when meeting display type is video.",
            type: "danger",
            duration: 3e3
          });
          updateRecordingDisplayType(meetingDisplayType);
          return;
        }
        if (meetingVideoOptimized && !recordingVideoOptimized) {
          showAlert?.({
            message: "Recording display type can only be video optimized when meeting display type is video optimized.",
            type: "danger",
            duration: 3e3
          });
          updateRecordingVideoOptimized(meetingVideoOptimized);
          return;
        }
      }
    } else {
      updateRecordingDisplayType("media");
      updateRecordingVideoOptimized(false);
    }
  }
  if (recordingDisplayType === "all" && !recordingAllParticipantsFullRoomSupport) {
    showAlert?.({
      message: "You can only record all participants with media.",
      type: "danger",
      duration: 3e3
    });
    return;
  }
  const mainSpecs = {
    mediaOptions: recordingMediaOptions,
    audioOptions: recordingAudioOptions,
    videoOptions: recordingVideoOptions,
    videoType: recordingVideoType,
    videoOptimized: recordingVideoOptimized,
    recordingDisplayType,
    addHLS: recordingAddHLS
  };
  const dispSpecs = {
    nameTags: recordingNameTags,
    backgroundColor: recordingBackgroundColor,
    nameTagsColor: recordingNameTagsColor,
    orientationVideo: recordingOrientationVideo
  };
  const textSpecs = {
    addText: recordingAddText,
    customText: recordingCustomText,
    customTextPosition: recordingCustomTextPosition,
    customTextColor: recordingCustomTextColor
  };
  const userRecordingParams = { mainSpecs, dispSpecs, textSpecs };
  updateUserRecordingParams(userRecordingParams);
  updateConfirmedToRecord(true);
};
const launchRecording = ({
  updateIsRecordingModalVisible,
  isRecordingModalVisible,
  showAlert,
  stopLaunchRecord,
  canLaunchRecord,
  recordingAudioSupport,
  recordingVideoSupport,
  updateCanRecord,
  updateClearedToRecord,
  recordStarted,
  recordPaused,
  localUIMode
}) => {
  if (!isRecordingModalVisible && stopLaunchRecord && !localUIMode) {
    showAlert?.({
      message: "Recording has already ended or you are not allowed to record",
      type: "danger",
      duration: 3e3
    });
    return;
  }
  if (!isRecordingModalVisible && canLaunchRecord && !localUIMode) {
    if (!recordingAudioSupport && !recordingVideoSupport) {
      showAlert?.({
        message: "You are not allowed to record",
        type: "danger",
        duration: 3e3
      });
      return;
    }
    updateClearedToRecord(false);
    updateCanRecord(false);
  }
  if (!isRecordingModalVisible && recordStarted && !recordPaused) {
    showAlert?.({
      message: "You can only re-configure recording after pausing it",
      type: "danger",
      duration: 3e3
    });
    return;
  }
  if (!isRecordingModalVisible && !recordingAudioSupport && !recordingVideoSupport && !localUIMode) {
    showAlert?.({
      message: "You are not allowed to record",
      type: "danger",
      duration: 3e3
    });
    return;
  }
  updateIsRecordingModalVisible(!isRecordingModalVisible);
};
const recordPauseTimer = ({
  stop = false,
  isTimerRunning,
  canPauseResume,
  showAlert
}) => {
  if (isTimerRunning && canPauseResume) {
    return true;
  }
  const message = stop ? "Can only stop after 15 seconds of starting or pausing or resuming recording" : "Can only pause or resume after 15 seconds of starting or pausing or resuming recording";
  showAlert?.({
    message,
    type: "danger"
  });
  return false;
};
const recordUpdateTimer = ({
  recordElapsedTime,
  recordStartTime,
  updateRecordElapsedTime,
  updateRecordingProgressTime
}) => {
  const padNumber = (value) => value.toString().padStart(2, "0");
  const currentTime = (/* @__PURE__ */ new Date()).getTime();
  let elapsedSeconds = recordElapsedTime;
  elapsedSeconds = Math.floor((currentTime - recordStartTime) / 1e3);
  updateRecordElapsedTime(elapsedSeconds);
  const hours = Math.floor(elapsedSeconds / 3600);
  const minutes = Math.floor(elapsedSeconds % 3600 / 60);
  const seconds = elapsedSeconds % 60;
  const formattedTime = `${padNumber(hours)}:${padNumber(minutes)}:${padNumber(seconds)}`;
  updateRecordingProgressTime(formattedTime);
};
const recordResumeTimer = async ({ parameters }) => {
  const { getUpdatedAllParams } = parameters;
  parameters = getUpdatedAllParams();
  let {
    isTimerRunning,
    canPauseResume,
    recordElapsedTime,
    recordStartTime,
    recordTimerInterval,
    showAlert,
    updateRecordStartTime,
    updateRecordTimerInterval,
    updateIsTimerRunning,
    updateCanPauseResume
  } = parameters;
  if (!isTimerRunning && canPauseResume) {
    recordStartTime = (/* @__PURE__ */ new Date()).getTime() - recordElapsedTime * 1e3;
    updateRecordStartTime(recordStartTime);
    recordTimerInterval = setInterval(() => {
      recordUpdateTimer({
        recordElapsedTime,
        recordStartTime,
        updateRecordElapsedTime: parameters.updateRecordElapsedTime,
        updateRecordingProgressTime: parameters.updateRecordingProgressTime
      });
      parameters = getUpdatedAllParams();
      if (parameters.recordPaused || parameters.recordStopped || parameters.roomName === "" || parameters.roomName === null) {
        clearInterval(recordTimerInterval);
        updateRecordTimerInterval(null);
        isTimerRunning = false;
        updateIsTimerRunning(isTimerRunning);
        canPauseResume = false;
        updateCanPauseResume(canPauseResume);
      }
    }, 1e3);
    updateRecordTimerInterval(recordTimerInterval);
    isTimerRunning = true;
    updateIsTimerRunning(isTimerRunning);
    canPauseResume = false;
    updateCanPauseResume(canPauseResume);
    return true;
  }
  showAlert?.({
    type: "danger",
    message: "Can only pause or resume after 15 seconds of starting or pausing or resuming recording"
  });
  return false;
};
const recordStartTimer = async ({ parameters }) => {
  const { getUpdatedAllParams } = parameters;
  parameters = getUpdatedAllParams();
  let {
    recordStartTime,
    recordTimerInterval,
    isTimerRunning,
    canPauseResume,
    recordChangeSeconds,
    updateRecordStartTime,
    updateRecordTimerInterval,
    updateIsTimerRunning,
    updateCanPauseResume
  } = parameters;
  const enablePauseResume = () => {
    canPauseResume = true;
    updateCanPauseResume(canPauseResume);
  };
  if (!isTimerRunning) {
    recordStartTime = (/* @__PURE__ */ new Date()).getTime();
    updateRecordStartTime(recordStartTime);
    recordTimerInterval = setInterval(() => {
      recordUpdateTimer({
        recordElapsedTime: parameters.recordElapsedTime,
        recordStartTime,
        updateRecordElapsedTime: parameters.updateRecordElapsedTime,
        updateRecordingProgressTime: parameters.updateRecordingProgressTime
      });
      parameters = getUpdatedAllParams();
      if (parameters.recordPaused || parameters.recordStopped || parameters.roomName === "" || parameters.roomName === null) {
        clearInterval(recordTimerInterval);
        updateRecordTimerInterval(null);
        isTimerRunning = false;
        updateIsTimerRunning(isTimerRunning);
        canPauseResume = false;
        updateCanPauseResume(canPauseResume);
      }
    }, 1e3);
    updateRecordTimerInterval(recordTimerInterval);
    isTimerRunning = true;
    updateIsTimerRunning(isTimerRunning);
    canPauseResume = false;
    updateCanPauseResume(canPauseResume);
    setTimeout(enablePauseResume, recordChangeSeconds);
  }
};
const startRecording = async ({
  parameters
}) => {
  parameters = parameters.getUpdatedAllParams();
  let {
    roomName,
    userRecordingParams,
    socket,
    localSocket,
    updateIsRecordingModalVisible,
    confirmedToRecord,
    showAlert,
    recordingMediaOptions,
    videoAlreadyOn,
    audioAlreadyOn,
    recordStarted,
    recordPaused,
    recordResumed,
    recordStopped,
    startReport,
    endReport,
    canRecord,
    updateClearedToRecord,
    updateRecordStarted,
    updateRecordPaused,
    updateRecordResumed,
    updateStartReport,
    updateEndReport,
    updateCanRecord,
    whiteboardStarted,
    whiteboardEnded,
    rePort: rePort2,
    captureCanvasStream
  } = parameters;
  if (!confirmedToRecord) {
    showAlert?.({
      message: "You must click confirm before you can start recording",
      type: "danger"
    });
    return false;
  }
  if (recordingMediaOptions === "video" && !videoAlreadyOn) {
    showAlert?.({
      message: "You must turn on your video before you can start recording",
      type: "danger"
    });
    return false;
  }
  if (recordingMediaOptions === "audio" && !audioAlreadyOn) {
    showAlert?.({
      message: "You must turn on your audio before you can start recording",
      type: "danger"
    });
    return false;
  }
  updateClearedToRecord(true);
  let action = "startRecord";
  if (recordStarted && recordPaused && !recordResumed && !recordStopped) {
    action = "resumeRecord";
  }
  let recAttempt = false;
  const socketRef = localSocket && localSocket.connected ? localSocket : socket;
  await new Promise((resolve) => {
    socketRef.emit(
      action,
      { roomName, userRecordingParams },
      async ({ success, reason }) => {
        if (success) {
          recordStarted = true;
          startReport = true;
          endReport = false;
          recordPaused = false;
          recAttempt = true;
          updateRecordStarted(recordStarted);
          updateStartReport(startReport);
          updateEndReport(endReport);
          updateRecordPaused(recordPaused);
          if (action === "startRecord") {
            await rePort2({ parameters: parameters.getUpdatedAllParams() });
            await recordStartTimer({ parameters });
          } else {
            updateRecordResumed(true);
            await rePort2({ restart: true, parameters: parameters.getUpdatedAllParams() });
            await recordResumeTimer({ parameters });
          }
        } else {
          showAlert?.({
            message: `Recording could not start - ${reason}`,
            type: "danger"
          });
          canRecord = true;
          startReport = false;
          endReport = true;
          recAttempt = false;
          updateCanRecord(canRecord);
          updateStartReport(startReport);
          updateEndReport(endReport);
        }
        resolve();
      }
    );
  });
  try {
    if (recAttempt && whiteboardStarted && !whiteboardEnded && recordingMediaOptions === "video") {
      await captureCanvasStream({ parameters: parameters.getUpdatedAllParams() });
    }
  } catch (error) {
    console.error("Error capturing canvas stream:", error);
  }
  updateIsRecordingModalVisible(false);
  return recAttempt;
};
const stopRecording = async ({ parameters }) => {
  let {
    roomName,
    socket,
    localSocket,
    showAlert,
    startReport,
    endReport,
    recordStarted,
    recordPaused,
    recordStopped,
    updateRecordPaused,
    updateRecordStopped,
    updateStartReport,
    updateEndReport,
    updateShowRecordButtons,
    whiteboardStarted,
    whiteboardEnded,
    recordingMediaOptions,
    captureCanvasStream
  } = parameters;
  let recAttempt = false;
  if (recordStarted && !recordStopped) {
    const stop = recordPauseTimer({
      stop: true,
      isTimerRunning: parameters.isTimerRunning,
      canPauseResume: parameters.canPauseResume,
      showAlert: parameters.showAlert
    });
    if (stop) {
      const action = "stopRecord";
      const socketRef = localSocket && localSocket.connected ? localSocket : socket;
      await new Promise((resolve) => {
        socketRef.emit(
          action,
          { roomName },
          ({ success, reason, recordState }) => {
            if (success) {
              startReport = false;
              endReport = true;
              recordPaused = false;
              recordStopped = true;
              recAttempt = true;
              updateStartReport(startReport);
              updateEndReport(endReport);
              updateRecordPaused(recordPaused);
              updateRecordStopped(recordStopped);
              showAlert?.({ message: "Recording Stopped", type: "success" });
              updateShowRecordButtons(false);
            } else {
              const reasonMessage = `Recording Stop Failed: ${reason}; the recording is currently ${recordState}`;
              showAlert?.({ message: reasonMessage, type: "danger" });
              recAttempt = false;
            }
            resolve();
          }
        );
      });
      try {
        if (recAttempt && whiteboardStarted && !whiteboardEnded && recordingMediaOptions === "video") {
          captureCanvasStream({ parameters: parameters.getUpdatedAllParams(), start: false });
        }
      } catch (error) {
        console.error("Error capturing canvas stream:", error);
      }
    } else {
      return;
    }
  } else {
    showAlert?.({
      message: "Recording is not started yet or already stopped",
      type: "danger"
    });
  }
};
const updateRecording = async ({ parameters }) => {
  let {
    roomName,
    userRecordingParams,
    socket,
    localSocket,
    updateIsRecordingModalVisible,
    confirmedToRecord,
    showAlert,
    recordingMediaOptions,
    videoAlreadyOn,
    audioAlreadyOn,
    recordStarted,
    recordPaused,
    recordResumed,
    recordStopped,
    recordChangeSeconds,
    pauseRecordCount,
    startReport,
    endReport,
    canRecord,
    canPauseResume,
    updateCanPauseResume,
    updatePauseRecordCount,
    updateClearedToRecord,
    updateRecordPaused,
    updateRecordResumed,
    updateStartReport,
    updateEndReport,
    updateCanRecord,
    rePort: rePort2
  } = parameters;
  if (recordStopped) {
    showAlert?.({
      message: "Recording has already stopped",
      type: "danger",
      duration: 3e3
    });
    return;
  }
  if (recordingMediaOptions === "video" && !videoAlreadyOn) {
    showAlert?.({
      message: "You must turn on your video before you can start recording",
      type: "danger",
      duration: 3e3
    });
    return;
  }
  if (recordingMediaOptions === "audio" && !audioAlreadyOn) {
    showAlert?.({
      message: "You must turn on your audio before you can start recording",
      type: "danger",
      duration: 3e3
    });
    return;
  }
  const socketRef = localSocket && localSocket.connected ? localSocket : socket;
  if (recordStarted && !recordPaused && !recordStopped) {
    const proceed = await checkPauseState({
      recordingMediaOptions,
      recordingVideoPausesLimit: parameters.recordingVideoPausesLimit,
      recordingAudioPausesLimit: parameters.recordingAudioPausesLimit,
      pauseRecordCount,
      showAlert
    });
    if (!proceed) return;
    const record = recordPauseTimer({
      stop: false,
      isTimerRunning: parameters.isTimerRunning,
      canPauseResume: parameters.canPauseResume,
      showAlert
    });
    if (record) {
      const action = "pauseRecord";
      await new Promise((resolve) => {
        socketRef.emit(
          action,
          { roomName },
          async ({ success, reason, recordState, pauseCount }) => {
            pauseRecordCount = pauseCount;
            updatePauseRecordCount(pauseRecordCount);
            if (success) {
              startReport = false;
              endReport = true;
              recordPaused = true;
              updateStartReport(startReport);
              updateEndReport(endReport);
              updateRecordPaused(recordPaused);
              showAlert?.({
                message: "Recording paused",
                type: "success",
                duration: 3e3
              });
              updateIsRecordingModalVisible(false);
              setTimeout(() => {
                canPauseResume = true;
                updateCanPauseResume(canPauseResume);
              }, recordChangeSeconds);
            } else {
              showAlert?.({
                message: `Recording Pause Failed: ${reason}; the current state is: ${recordState}`,
                type: "danger",
                duration: 3e3
              });
            }
            resolve();
          }
        );
      });
    }
  } else if (recordStarted && recordPaused && !recordStopped) {
    if (!confirmedToRecord) {
      showAlert?.({
        message: "You must click confirm before you can start recording",
        type: "danger",
        duration: 3e3
      });
      return;
    }
    const proceed = await checkResumeState({
      recordingMediaOptions,
      recordingVideoPausesLimit: parameters.recordingVideoPausesLimit,
      recordingAudioPausesLimit: parameters.recordingAudioPausesLimit,
      pauseRecordCount
    });
    if (!proceed) return;
    const resume = await recordResumeTimer({ parameters });
    if (resume) {
      updateClearedToRecord(true);
      const action = "resumeRecord";
      await new Promise((resolve) => {
        socketRef.emit(
          action,
          { roomName, userRecordingParams },
          async ({ success, reason }) => {
            if (success) {
              recordResumed = true;
              recordPaused = false;
              updateRecordPaused(recordPaused);
              updateRecordResumed(recordResumed);
              await rePort2({ restart: true, parameters: parameters.getUpdatedAllParams() });
            } else {
              showAlert?.({
                message: `Recording could not resume - ${reason}`,
                type: "danger",
                duration: 3e3
              });
            }
            canRecord = true;
            startReport = false;
            endReport = true;
            updateCanRecord(canRecord);
            updateStartReport(startReport);
            updateEndReport(endReport);
            resolve();
          }
        );
      });
      updateIsRecordingModalVisible(false);
      setTimeout(() => {
        updateCanPauseResume(true);
      }, recordChangeSeconds);
    }
  }
};
const launchRequests = ({ updateIsRequestsModalVisible, isRequestsModalVisible }) => {
  updateIsRequestsModalVisible(!isRequestsModalVisible);
};
const respondToRequests = async ({
  socket,
  request,
  updateRequestList,
  requestList = [],
  action,
  roomName
}) => {
  if (!request || typeof request !== "object") {
    return;
  }
  if (!updateRequestList) {
    console.warn("[respondToRequests] Missing updateRequestList handler; aborting emit.");
    return;
  }
  const currentList = Array.isArray(requestList) ? requestList : [];
  const requestIdRaw = request.id;
  const requestIcon = request.icon;
  const requestName = request.name;
  if (requestIdRaw === void 0 || requestIcon === void 0 || requestName === void 0) {
    console.warn("[respondToRequests] Request payload is missing required fields; aborting emit.", request);
    return;
  }
  const requestId = String(requestIdRaw);
  if (!requestId || !requestIcon || !requestName) {
    console.warn("[respondToRequests] Request payload contains empty fields; aborting emit.", request);
    return;
  }
  const newRequestList = currentList.filter(
    (request_) => !(request_ && request_.id === requestId && request_.icon === requestIcon && request_.name === requestName)
  );
  updateRequestList(newRequestList);
  const requestResponse = {
    id: requestId,
    name: requestName,
    type: requestIcon,
    action
  };
  const socketReady = socket && typeof socket.emit === "function";
  if (!socketReady) {
    console.warn("[respondToRequests] Socket is not ready; skipping emit.");
    return;
  }
  socket.emit("updateUserofRequestStatus", { requestResponse, roomName });
};
const launchSettings = ({ updateIsSettingsModalVisible, isSettingsModalVisible }) => {
  updateIsSettingsModalVisible(!isSettingsModalVisible);
};
const switchAudio = async ({
  audioPreference,
  parameters
}) => {
  let {
    defAudioID,
    userDefaultAudioInputDevice,
    prevAudioInputDevice,
    updateUserDefaultAudioInputDevice,
    updatePrevAudioInputDevice,
    //mediasfu functions
    switchUserAudio: switchUserAudio2
  } = parameters;
  if (audioPreference !== defAudioID) {
    prevAudioInputDevice = userDefaultAudioInputDevice;
    updatePrevAudioInputDevice(prevAudioInputDevice);
    userDefaultAudioInputDevice = audioPreference;
    updateUserDefaultAudioInputDevice(userDefaultAudioInputDevice);
    if (defAudioID) {
      await switchUserAudio2({ audioPreference, parameters });
    }
  }
};
const switchVideo = async ({
  videoPreference,
  parameters
}) => {
  let {
    recordStarted,
    recordResumed,
    recordStopped,
    recordPaused,
    recordingMediaOptions,
    videoAlreadyOn,
    userDefaultVideoInputDevice,
    defVideoID,
    allowed,
    updateDefVideoID,
    updatePrevVideoInputDevice,
    updateUserDefaultVideoInputDevice,
    updateIsMediaSettingsModalVisible,
    //mediasfu functions
    showAlert,
    switchUserVideo: switchUserVideo2
  } = parameters;
  let checkoff = false;
  if ((recordStarted || recordResumed) && !recordStopped && !recordPaused) {
    if (recordingMediaOptions === "video") {
      checkoff = true;
    }
  }
  if (!allowed) {
    showAlert?.({
      message: "Allow access to your camera by starting it for the first time.",
      type: "danger",
      duration: 3e3
    });
    return;
  }
  if (checkoff) {
    if (videoAlreadyOn) {
      showAlert?.({
        message: "Please turn off your video before switching.",
        type: "danger",
        duration: 3e3
      });
      return;
    }
  } else {
    if (!videoAlreadyOn) {
      showAlert?.({
        message: "Please turn on your video before switching.",
        type: "danger",
        duration: 3e3
      });
      return;
    }
  }
  if (!defVideoID) {
    defVideoID = userDefaultVideoInputDevice ?? "default";
    updateDefVideoID(defVideoID);
  }
  if (videoPreference !== defVideoID) {
    const prevVideoInputDevice = userDefaultVideoInputDevice;
    updatePrevVideoInputDevice(prevVideoInputDevice);
    userDefaultVideoInputDevice = videoPreference;
    updateUserDefaultVideoInputDevice(userDefaultVideoInputDevice);
    if (defVideoID) {
      updateIsMediaSettingsModalVisible(false);
      await switchUserVideo2({ videoPreference, checkoff, parameters });
    }
  }
};
const switchVideoAlt = async ({
  parameters
}) => {
  let {
    recordStarted,
    recordResumed,
    recordStopped,
    recordPaused,
    recordingMediaOptions,
    videoAlreadyOn,
    currentFacingMode,
    prevFacingMode,
    allowed,
    audioOnlyRoom,
    updateCurrentFacingMode,
    updateIsMediaSettingsModalVisible,
    updatePrevFacingMode,
    showAlert,
    //media functions
    switchUserVideoAlt: switchUserVideoAlt2
  } = parameters;
  if (audioOnlyRoom) {
    showAlert?.({
      message: "You cannot turn on your camera in an audio-only event.",
      type: "danger",
      duration: 3e3
    });
    return;
  }
  let checkoff = false;
  if ((recordStarted || recordResumed) && !recordStopped && !recordPaused && recordingMediaOptions === "video") {
    checkoff = true;
  }
  if (!allowed) {
    showAlert?.({
      message: "Allow access to your camera by starting it for the first time.",
      type: "danger",
      duration: 3e3
    });
    return;
  }
  if (checkoff) {
    if (videoAlreadyOn) {
      showAlert?.({
        message: "Please turn off your video before switching.",
        type: "danger",
        duration: 3e3
      });
      return;
    }
  } else {
    if (!videoAlreadyOn) {
      showAlert?.({
        message: "Please turn on your video before switching.",
        type: "danger",
        duration: 3e3
      });
      return;
    }
  }
  prevFacingMode = currentFacingMode;
  updatePrevFacingMode(prevFacingMode);
  currentFacingMode = currentFacingMode === "environment" ? "user" : "environment";
  updateCurrentFacingMode(currentFacingMode);
  updateIsMediaSettingsModalVisible(false);
  await switchUserVideoAlt2({
    videoPreference: currentFacingMode,
    checkoff,
    parameters
  });
};
const launchWaiting = ({ updateIsWaitingModalVisible, isWaitingModalVisible }) => {
  updateIsWaitingModalVisible(!isWaitingModalVisible);
};
const respondToWaiting = async ({
  participantId,
  participantName,
  updateWaitingList,
  waitingList = [],
  type,
  roomName,
  socket
}) => {
  if (!participantId || !participantName) {
    return;
  }
  if (!updateWaitingList) {
    console.warn("[respondToWaiting] Missing updateWaitingList handler; aborting emit.");
    return;
  }
  if (!socket || typeof socket.emit !== "function") {
    console.warn("[respondToWaiting] Socket is not ready; skipping emit.");
    return;
  }
  const newWaitingList = waitingList.filter((item) => item.name !== participantName);
  updateWaitingList(newWaitingList);
  const responseType = type === "true" || type === true ? "true" : "false";
  socket.emit("allowUserIn", {
    participantId,
    participantName,
    type: responseType,
    roomName
  });
};
const cookies = new Cookies();
const MAX_ATTEMPTS = 10;
const RATE_LIMIT_DURATION = 3 * 60 * 60 * 1e3;
function validateAlphanumeric(str) {
  if (str.length === 0) return true;
  const alphanumericRegex = /^[a-zA-Z0-9]+$/;
  return alphanumericRegex.test(str);
}
function validateWelcomeInputs({
  name,
  secret,
  eventID,
  link
}) {
  if (name.length === 0 || secret.length === 0 || eventID.length === 0 || link.length === 0) {
    return { valid: false, message: "Please fill all the fields." };
  }
  if (!validateAlphanumeric(name) || !validateAlphanumeric(secret) || !validateAlphanumeric(eventID) || !link.includes("mediasfu.com") || eventID.toLowerCase().startsWith("d")) {
    return { valid: false, message: "Please enter valid details." };
  }
  if (secret.length != 64 || name.length > 12 || name.length < 2 || eventID.length > 32 || eventID.length < 8 || link.length < 12) {
    return { valid: false, message: "Please enter valid details." };
  }
  return { valid: true };
}
async function handleWelcomeRequest({
  apiUserName,
  apiToken,
  link,
  userName,
  parameters
}) {
  const {
    showAlert,
    updateIsLoadingModalVisible,
    connectSocket: connectSocket2,
    updateSocket,
    updateValidated,
    updateApiUserName,
    updateApiToken,
    updateLink,
    updateRoomName,
    updateMember
  } = parameters;
  const TIMEOUT_DURATION = 1e4;
  let unsuccessfulAttempts = parseInt(cookies.get("unsuccessfulAttempts") || "0");
  let lastRequestTimestamp = parseInt(cookies.get("lastRequestTimestamp") || "0");
  if (unsuccessfulAttempts >= MAX_ATTEMPTS) {
    if (Date.now() - lastRequestTimestamp < RATE_LIMIT_DURATION) {
      showAlert?.({
        message: "Too many unsuccessful attempts. Please try again later.",
        type: "danger",
        duration: 3e3
      });
      cookies.set("lastRequestTimestamp", Date.now().toString());
      return;
    } else {
      unsuccessfulAttempts = 0;
      cookies.set("unsuccessfulAttempts", unsuccessfulAttempts.toString());
      cookies.set("lastRequestTimestamp", Date.now().toString());
    }
  }
  try {
    updateIsLoadingModalVisible(true);
    const socketPromise = connectSocket2({
      apiUserName,
      apiKey: "",
      apiToken,
      link
    });
    const timeoutPromise = new Promise(
      (_, reject) => setTimeout(() => reject(new Error("Request timed out")), TIMEOUT_DURATION)
    );
    const socket = await Promise.race([socketPromise, timeoutPromise]);
    if (socket && socket instanceof Socket && socket.id) {
      unsuccessfulAttempts = 0;
      cookies.set("unsuccessfulAttempts", unsuccessfulAttempts.toString());
      cookies.set("lastRequestTimestamp", Date.now().toString());
      updateSocket(socket);
      updateApiUserName(apiUserName);
      updateApiToken(apiToken);
      updateLink(link);
      updateRoomName(apiUserName);
      updateMember(userName);
      updateValidated(true);
    } else {
      unsuccessfulAttempts += 1;
      cookies.set("unsuccessfulAttempts", unsuccessfulAttempts.toString());
      cookies.set("lastRequestTimestamp", Date.now().toString());
      updateIsLoadingModalVisible(false);
      if (unsuccessfulAttempts >= MAX_ATTEMPTS) {
        showAlert?.({
          message: "Too many unsuccessful attempts. Please try again later.",
          type: "danger",
          duration: 3e3
        });
      } else {
        showAlert?.({
          message: "Invalid credentials.",
          type: "danger",
          duration: 3e3
        });
      }
    }
  } catch {
    showAlert?.({
      message: "Unable to connect. Check your credentials and try again.",
      type: "danger",
      duration: 3e3
    });
    unsuccessfulAttempts += 1;
    cookies.set("unsuccessfulAttempts", unsuccessfulAttempts.toString());
    cookies.set("lastRequestTimestamp", Date.now().toString());
    updateIsLoadingModalVisible(false);
  }
}
const handleStartWhiteboard = async ({
  socket,
  whiteboardUsers,
  roomName,
  whiteboardStarted,
  whiteboardEnded,
  showAlert,
  updateWhiteboardStarted,
  updateWhiteboardEnded,
  updateIsConfigureWhiteboardModalVisible
}) => {
  const emitName = whiteboardStarted && !whiteboardEnded ? "updateWhiteboard" : "startWhiteboard";
  const filteredWhiteboardUsers = whiteboardUsers.map(({ name, useBoard }) => ({ name, useBoard }));
  return new Promise((resolve) => {
    socket.emit(
      emitName,
      { whiteboardUsers: filteredWhiteboardUsers, roomName },
      (response) => {
        if (response.success) {
          showAlert?.({ message: "Whiteboard active", type: "success" });
          updateWhiteboardStarted(true);
          updateWhiteboardEnded(false);
          updateIsConfigureWhiteboardModalVisible(false);
        } else {
          showAlert?.({ message: response.reason || "Failed to start whiteboard", type: "danger" });
        }
        resolve(response.success);
      }
    );
  });
};
const handleStopWhiteboard = async ({
  socket,
  roomName,
  showAlert,
  updateWhiteboardStarted,
  updateWhiteboardEnded,
  updateIsConfigureWhiteboardModalVisible
}) => {
  return new Promise((resolve) => {
    socket.emit("stopWhiteboard", { roomName }, (response) => {
      if (response.success) {
        showAlert?.({ message: "Whiteboard stopped", type: "success" });
        updateWhiteboardStarted(false);
        updateWhiteboardEnded(true);
        updateIsConfigureWhiteboardModalVisible(false);
      } else {
        showAlert?.({ message: response.reason || "Failed to stop whiteboard", type: "danger" });
      }
      resolve(response.success);
    });
  });
};
const launchConfigureWhiteboard = ({
  updateIsConfigureWhiteboardModalVisible,
  isConfigureWhiteboardModalVisible
}) => {
  updateIsConfigureWhiteboardModalVisible(!isConfigureWhiteboardModalVisible);
};
export {
  addVideosGrid,
  autoAdjust,
  breakoutRoomUpdated,
  calculateRowsAndColumns,
  changeVids,
  checkGrid,
  checkLimitsAndMakeRequest,
  checkPauseState,
  checkPermission,
  checkResumeState,
  checkScreenShare,
  clickVideo,
  closeAndResize,
  compareActiveNames,
  compareScreenStates,
  confirmExit,
  confirmRecording,
  connectIps,
  connectLocalIps,
  connectLocalSocket,
  connectRecvTransport,
  connectSendTransport,
  connectSendTransportAudio,
  connectSendTransportScreen,
  connectSendTransportVideo,
  connectSocket,
  consumerResume,
  controlMedia,
  createDeviceClient,
  createSendTransport,
  disconnectSendTransportAudio,
  disconnectSendTransportScreen,
  disconnectSendTransportVideo,
  disconnectSocket,
  dispStreams,
  generatePageContent,
  getEstimate,
  getPipedProducersAlt,
  getProducersPiped,
  getVideos,
  handleCreatePoll,
  handleCreateRoom,
  handleEndPoll,
  handleJoinRoom,
  handleStartBreakout,
  handleStartWhiteboard,
  handleStopBreakout,
  handleStopWhiteboard,
  handleVotePoll,
  handleWelcomeRequest,
  joinConRoom,
  joinConsumeRoom,
  launchBackground,
  launchBreakoutRooms,
  launchCoHost,
  launchConfigureWhiteboard,
  launchConfirmExit,
  launchDisplaySettings,
  launchMediaSettings,
  launchMenuModal,
  launchMessages,
  launchParticipants,
  launchPoll,
  launchRecording,
  launchRequests,
  launchSettings,
  launchWaiting,
  messageParticipants,
  mixStreams,
  modifyCoHostSettings,
  modifyDisplaySettings,
  modifySettings,
  muteParticipants,
  newPipeProducer,
  onScreenChanges,
  prepopulateUserMedia,
  processConsumerTransports,
  processConsumerTransportsAudio,
  producerClosed,
  rePort,
  reUpdateInter,
  readjust,
  receiveAllPipedTransports,
  receiveRoomMessages,
  recordPauseTimer,
  recordResumeTimer,
  recordStartTimer,
  recordUpdateTimer,
  removeParticipants,
  reorderStreams,
  requestScreenShare,
  respondToRequests,
  respondToWaiting,
  resumePauseAudioStreams,
  resumePauseStreams,
  resumeSendTransportAudio,
  sendMessage,
  signalNewConsumerTransport,
  startRecording,
  startShareScreen,
  stopRecording,
  stopShareScreen,
  streamSuccessAudio,
  streamSuccessAudioSwitch,
  streamSuccessScreen,
  streamSuccessVideo,
  switchAudio,
  switchUserAudio,
  switchUserVideo,
  switchUserVideoAlt,
  switchVideo,
  switchVideoAlt,
  trigger,
  updateMicLevel,
  updateMiniCardsGrid,
  updateParticipantAudioDecibels,
  updateRecording,
  validateAlphanumeric,
  validateWelcomeInputs
};
//# sourceMappingURL=index.js.map
