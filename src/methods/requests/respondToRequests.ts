import { Socket } from "socket.io-client";
import type { Request, RequestResponse } from "../../types/types";

export interface RespondToRequestsOptions {
  socket: Socket;
  request: Request;
  updateRequestList: (newRequestList: Request[]) => void;
  requestList?: Request[];
  action: string;
  roomName: string;
}

// Export the type definition for the function
export type RespondToRequestsType = (options: RespondToRequestsOptions) => Promise<void>;

/**
 * Responds to incoming requests by updating the request list and emitting a response to the server.
 *
 * @param {Object} options - The options for responding to requests.
 * @param {Socket} options.socket - The socket instance used to emit the response.
 * @param {Request} options.request - The request object containing details of the request.
 * @param {Function} options.updateRequestList - The function to update the request list.
 * @param {Request[]} options.requestList - The current list of requests.
 * @param {string} options.action - The action to be taken on the request.
 * @param {string} options.roomName - The name of the room to which the response should be emitted.
 *
 * @returns {Promise<void>} A promise that resolves when the response has been emitted.
 * 
 * @example
 * ```typescript
 * respondToRequests({
 *   socket,
 *   request: { id: "123", name: "John", icon: "fa-microphone" },
 *   updateRequestList: setRequestList,
 *   requestList: currentRequests,
 *   action: "accept",
 *   roomName: "mainRoom"
 * });
 * ```
 */

export const respondToRequests = async ({
  socket,
  request,
  updateRequestList,
  requestList = [],
  action,
  roomName,
}: RespondToRequestsOptions): Promise<void> => {
  if (!request || typeof request !== "object") {
    return;
  }

  if (!updateRequestList) {
    console.warn("[respondToRequests] Missing updateRequestList handler; aborting emit.");
    return;
  }

  const currentList = Array.isArray(requestList) ? requestList : [];

  const requestIdRaw = (request as { id?: string | number }).id;
  const requestIcon = (request as { icon?: string }).icon;
  const requestName = (request as { name?: string }).name;

  if (requestIdRaw === undefined || requestIcon === undefined || requestName === undefined) {
    console.warn("[respondToRequests] Request payload is missing required fields; aborting emit.", request);
    return;
  }

  const requestId = String(requestIdRaw);

  if (!requestId || !requestIcon || !requestName) {
    console.warn("[respondToRequests] Request payload contains empty fields; aborting emit.", request);
    return;
  }

  // Filter out the request from the request list
  const newRequestList = currentList.filter(
    (request_) =>
      !(
        request_ &&
        request_.id === requestId &&
        request_.icon === requestIcon &&
        request_.name === requestName
      )
  );

  // Update the request list with the filtered list
  updateRequestList(newRequestList);

  // Prepare the request response
  const requestResponse: RequestResponse = {
    id: requestId,
    name: requestName,
    type: requestIcon,
    action,
  };

  // Emit the request response to the server
  const socketReady = socket && typeof (socket as Socket).emit === "function";

  if (!socketReady) {
    console.warn("[respondToRequests] Socket is not ready; skipping emit.");
    return;
  }

  (socket as Socket).emit("updateUserofRequestStatus", { requestResponse, roomName });
};
