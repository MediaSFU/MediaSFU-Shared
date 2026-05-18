import { PreJoinPageParameters } from "../../types/types";
import type { Socket } from "socket.io-client";
import Cookies from "universal-cookie";


const cookies = new Cookies();
const MAX_ATTEMPTS = 10; // Maximum number of unsuccessful attempts before rate limiting
const RATE_LIMIT_DURATION = 3 * 60 * 60 * 1000; // 3 hours in milliseconds

export interface CheckLimitsStorageAdapter {
  getItem: (key: string) => Promise<string | null | undefined> | string | null | undefined;
  setItem: (key: string, value: string) => Promise<void> | void;
}

export interface CheckLimitsAndMakeRequestWithStorageOptions {
  apiUserName: string;
  apiToken: string;
  link: string;
  apiKey?: string;
  userName: string;
  parameters: PreJoinPageParameters;
  validate?: boolean;
  storageAdapter: CheckLimitsStorageAdapter;
}

export type CheckLimitsAndMakeRequestWithStorageType = (
  options: CheckLimitsAndMakeRequestWithStorageOptions,
) => Promise<void>;

const readStoredNumber = async (
  adapter: CheckLimitsStorageAdapter,
  key: string,
): Promise<number> => {
  const value = await adapter.getItem(key);
  const parsed = parseInt((value ?? '0').toString(), 10);
  return Number.isNaN(parsed) ? 0 : parsed;
};

const writeStoredNumber = async (
  adapter: CheckLimitsStorageAdapter,
  key: string,
  value: number,
): Promise<void> => {
  await adapter.setItem(key, value.toString());
};

const hasConnectedSocketId = (socket: unknown): socket is Socket & { id: string } => {
  if (!socket || typeof socket !== 'object') {
    return false;
  }

  const candidate = socket as { id?: unknown };
  return typeof candidate.id === 'string' && candidate.id.length > 0;
};

/**
 * Mobile/storage-adapter variant used by RN/Expo wrappers to share one canonical implementation.
 */
export const checkLimitsAndMakeRequestWithStorage: CheckLimitsAndMakeRequestWithStorageType = async ({
  apiUserName,
  apiToken,
  link,
  apiKey = '',
  userName,
  parameters,
  validate = true,
  storageAdapter,
}) => {
  const TIMEOUT_DURATION = 10000; // 10 seconds

  try {
    let unsuccessfulAttempts = await readStoredNumber(storageAdapter, 'unsuccessfulAttempts');
    const lastRequestTimestamp = await readStoredNumber(storageAdapter, 'lastRequestTimestamp');

    if (
      unsuccessfulAttempts >= MAX_ATTEMPTS
      && Date.now() - lastRequestTimestamp < RATE_LIMIT_DURATION
    ) {
      parameters.showAlert?.({
        message: 'Too many unsuccessful attempts. Please try again later.',
        type: 'danger',
        duration: 3000,
      });
      await writeStoredNumber(storageAdapter, 'lastRequestTimestamp', Date.now());
      return;
    }

    if (unsuccessfulAttempts >= MAX_ATTEMPTS) {
      unsuccessfulAttempts = 0;
      await writeStoredNumber(storageAdapter, 'unsuccessfulAttempts', unsuccessfulAttempts);
      await writeStoredNumber(storageAdapter, 'lastRequestTimestamp', Date.now());
    }

    parameters.updateIsLoadingModalVisible(true);

    const socketPromise = parameters.connectSocket({
      apiUserName,
      apiKey,
      apiToken,
      link,
    });
    const timeoutPromise = new Promise<never>((_, reject) => setTimeout(
      () => reject(new Error('Request timed out')),
      TIMEOUT_DURATION,
    ));

    const socket = await Promise.race([socketPromise, timeoutPromise]);

    if (hasConnectedSocketId(socket)) {
      unsuccessfulAttempts = 0;
      await writeStoredNumber(storageAdapter, 'unsuccessfulAttempts', unsuccessfulAttempts);
      await writeStoredNumber(storageAdapter, 'lastRequestTimestamp', Date.now());

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
      if (validate) {
        parameters.updateValidated(true);
      }
    } else {
      unsuccessfulAttempts += 1;
      await writeStoredNumber(storageAdapter, 'unsuccessfulAttempts', unsuccessfulAttempts);
      await writeStoredNumber(storageAdapter, 'lastRequestTimestamp', Date.now());
      parameters.updateIsLoadingModalVisible(false);

      if (unsuccessfulAttempts >= MAX_ATTEMPTS) {
        parameters.showAlert?.({
          message: 'Too many unsuccessful attempts. Please try again later.',
          type: 'danger',
          duration: 3000,
        });
      } else {
        parameters.showAlert?.({
          message: 'Invalid credentials.',
          type: 'danger',
          duration: 3000,
        });
      }
    }
  } catch (error) {
    console.error('Error connecting to socket:', error);
    parameters.showAlert?.({
      message: 'Unable to connect. Check your credentials and try again.',
      type: 'danger',
      duration: 3000,
    });

    let unsuccessfulAttempts = await readStoredNumber(storageAdapter, 'unsuccessfulAttempts');
    unsuccessfulAttempts += 1;
    await writeStoredNumber(storageAdapter, 'unsuccessfulAttempts', unsuccessfulAttempts);
    await writeStoredNumber(storageAdapter, 'lastRequestTimestamp', Date.now());
    parameters.updateIsLoadingModalVisible(false);
  }
};


export const checkLimitsAndMakeRequest = async ({
    apiUserName,
    apiToken,
    link,
    apiKey = "",
    userName,
    parameters,
    validate = true,
  }: {
    apiUserName: string;
    apiToken: string;
    link: string;
    apiKey?: string;
    userName: string;
    parameters: PreJoinPageParameters;
    validate?: boolean;
  }) => {
    const TIMEOUT_DURATION = 10000; // 10 seconds
    let unsuccessfulAttempts =
      parseInt(cookies.get("unsuccessfulAttempts")) || 0;
    let lastRequestTimestamp =
      parseInt(cookies.get("lastRequestTimestamp")) || 0;
  
    if (
      unsuccessfulAttempts >= MAX_ATTEMPTS &&
      Date.now() - lastRequestTimestamp < RATE_LIMIT_DURATION
    ) {
      parameters.showAlert?.({
        message: "Too many unsuccessful attempts. Please try again later.",
        type: "danger",
        duration: 3000,
      });
      return;
    } else {
      unsuccessfulAttempts = 0;
      cookies.set("unsuccessfulAttempts", unsuccessfulAttempts.toString());
      cookies.set("lastRequestTimestamp", Date.now().toString());
    }
  
    try {
      parameters.updateIsLoadingModalVisible(true);
      const socketPromise = await parameters.connectSocket({
        apiUserName,
        apiKey,
        apiToken,
        link,
      });
      const timeoutPromise = new Promise<null>((_, reject) =>
        setTimeout(
          () => reject(new Error("Request timed out")),
          TIMEOUT_DURATION
        )
      );
  
      const socket = await Promise.race([socketPromise, timeoutPromise]);
      if (hasConnectedSocketId(socket)) {
        unsuccessfulAttempts = 0;
        cookies.set("unsuccessfulAttempts", unsuccessfulAttempts.toString());
        cookies.set("lastRequestTimestamp", Date.now().toString());
        if (validate){
          // only one connection is established, no local socket
          parameters.updateSocket(socket);
        }else{
          // local socket is also established, mediaSFU connection is now the local socket
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
        cookies.set("unsuccessfulAttempts", unsuccessfulAttempts.toString());
        parameters.updateIsLoadingModalVisible(false);
        parameters.showAlert?.({
          message: "Invalid credentials.",
          type: "danger",
          duration: 3000,
        });
      }
    } catch {
      parameters.showAlert?.({
        message: "Unable to connect. Check your credentials and try again.",
        type: "danger",
        duration: 3000,
      });
      unsuccessfulAttempts += 1;
      cookies.set("unsuccessfulAttempts", unsuccessfulAttempts.toString());
      parameters.updateIsLoadingModalVisible(false);
    }
  };