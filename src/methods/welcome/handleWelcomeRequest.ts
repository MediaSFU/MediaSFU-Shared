import { Socket } from 'socket.io-client';
import Cookies from 'universal-cookie';
import type { PreJoinPageParameters } from '../../types/types';

const cookies = new Cookies();
const MAX_ATTEMPTS = 10;
const RATE_LIMIT_DURATION = 3 * 60 * 60 * 1000; // 3 hours

/**
 * Options for handleWelcomeRequest function
 */
export interface HandleWelcomeRequestOptions {
  apiUserName: string;
  apiToken: string;
  link: string;
  userName: string;
  parameters: PreJoinPageParameters;
}

/**
 * Validates alphanumeric strings
 */
export function validateAlphanumeric(str: string): boolean {
  if (str.length === 0) return true;
  const alphanumericRegex = /^[a-zA-Z0-9]+$/;
  return alphanumericRegex.test(str);
}

/**
 * Validates welcome page form inputs
 */
export interface ValidateWelcomeInputsOptions {
  name: string;
  secret: string;
  eventID: string;
  link: string;
}

export function validateWelcomeInputs({
  name,
  secret,
  eventID,
  link,
}: ValidateWelcomeInputsOptions): { valid: boolean; message?: string } {
  if (name.length === 0 || secret.length === 0 || eventID.length === 0 || link.length === 0) {
    return { valid: false, message: 'Please fill all the fields.' };
  }

  if (
    !validateAlphanumeric(name) ||
    !validateAlphanumeric(secret) ||
    !validateAlphanumeric(eventID) ||
    !link.includes('mediasfu.com') ||
    eventID.toLowerCase().startsWith('d')
  ) {
    return { valid: false, message: 'Please enter valid details.' };
  }

  if (
    secret.length != 64 ||
    name.length > 12 ||
    name.length < 2 ||
    eventID.length > 32 ||
    eventID.length < 8 ||
    link.length < 12
  ) {
    return { valid: false, message: 'Please enter valid details.' };
  }

  return { valid: true };
}

/**
 * Handles connection request with rate limiting for welcome page
 * 
 * @param {HandleWelcomeRequestOptions} options - Configuration for the request
 * @returns {Promise<void>}
 * 
 * @example
 * ```typescript
 * await handleWelcomeRequest({
 *   apiUserName: 'room123',
 *   apiToken: 'secret123',
 *   link: 'https://mediasfu.com/meeting',
 *   userName: 'John Doe',
 *   parameters,
 * });
 * ```
 */
export async function handleWelcomeRequest({
  apiUserName,
  apiToken,
  link,
  userName,
  parameters,
}: HandleWelcomeRequestOptions): Promise<void> {
  const {
    showAlert,
    updateIsLoadingModalVisible,
    connectSocket,
    updateSocket,
    updateValidated,
    updateApiUserName,
    updateApiToken,
    updateLink,
    updateRoomName,
    updateMember,
  } = parameters;

  const TIMEOUT_DURATION = 10000; // 10 seconds

  let unsuccessfulAttempts = parseInt(cookies.get('unsuccessfulAttempts') || '0');
  let lastRequestTimestamp = parseInt(cookies.get('lastRequestTimestamp') || '0');

  if (unsuccessfulAttempts >= MAX_ATTEMPTS) {
    if (Date.now() - lastRequestTimestamp < RATE_LIMIT_DURATION) {
      showAlert?.({
        message: 'Too many unsuccessful attempts. Please try again later.',
        type: 'danger',
        duration: 3000,
      });
      cookies.set('lastRequestTimestamp', Date.now().toString());
      return;
    } else {
      unsuccessfulAttempts = 0;
      cookies.set('unsuccessfulAttempts', unsuccessfulAttempts.toString());
      cookies.set('lastRequestTimestamp', Date.now().toString());
    }
  }

  try {
    updateIsLoadingModalVisible(true);

    const socketPromise = connectSocket({
      apiUserName,
      apiKey: '',
      apiToken,
      link,
    });
    const timeoutPromise = new Promise<never>((_, reject) =>
      setTimeout(() => reject(new Error('Request timed out')), TIMEOUT_DURATION)
    );

    const socket = await Promise.race([socketPromise, timeoutPromise]);

    if (socket && socket instanceof Socket && socket.id) {
      unsuccessfulAttempts = 0;
      cookies.set('unsuccessfulAttempts', unsuccessfulAttempts.toString());
      cookies.set('lastRequestTimestamp', Date.now().toString());
      updateSocket(socket);
      updateApiUserName(apiUserName);
      updateApiToken(apiToken);
      updateLink(link);
      updateRoomName(apiUserName);
      updateMember(userName);
      updateValidated(true);
    } else {
      unsuccessfulAttempts += 1;
      cookies.set('unsuccessfulAttempts', unsuccessfulAttempts.toString());
      cookies.set('lastRequestTimestamp', Date.now().toString());
      updateIsLoadingModalVisible(false);

      if (unsuccessfulAttempts >= MAX_ATTEMPTS) {
        showAlert?.({
          message: 'Too many unsuccessful attempts. Please try again later.',
          type: 'danger',
          duration: 3000,
        });
      } else {
        showAlert?.({
          message: 'Invalid credentials.',
          type: 'danger',
          duration: 3000,
        });
      }
    }
  } catch {
    showAlert?.({
      message: 'Unable to connect. Check your credentials and try again.',
      type: 'danger',
      duration: 3000,
    });

    unsuccessfulAttempts += 1;
    cookies.set('unsuccessfulAttempts', unsuccessfulAttempts.toString());
    cookies.set('lastRequestTimestamp', Date.now().toString());
    updateIsLoadingModalVisible(false);
  }
}
