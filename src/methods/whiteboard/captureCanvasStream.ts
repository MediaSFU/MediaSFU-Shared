import type { Producer } from 'mediasoup-client/lib/types';
import type {
  ConnectSendTransportScreenParameters,
  ConnectSendTransportScreenType,
  CreateSendTransportParameters,
  CreateSendTransportType,
  DisconnectSendTransportScreenParameters,
  DisconnectSendTransportScreenType,
  SleepType,
} from '../../types/types';
import type { Socket } from 'socket.io-client';

export interface CaptureCanvasStreamParameters
  extends CreateSendTransportParameters,
    DisconnectSendTransportScreenParameters,
    ConnectSendTransportScreenParameters {
  canvasWhiteboard: HTMLCanvasElement | null;
  canvasStream: MediaStream | null;
  updateCanvasStream: (stream: MediaStream | null) => void;
  screenProducer: Producer | null;
  localScreenProducer?: Producer | null;
  transportCreated: boolean;
  localTransportCreated?: boolean;
  localSocket?: Socket;
  updateScreenProducer: (producer: Producer | null) => void;
  updateLocalScreenProducer?: (localProducer: Producer | null) => void;

  sleep: SleepType;
  createSendTransport: CreateSendTransportType;
  connectSendTransportScreen: ConnectSendTransportScreenType;
  disconnectSendTransportScreen: DisconnectSendTransportScreenType;

  getUpdatedAllParams: () => CaptureCanvasStreamParameters;
  [key: string]: any;
}

export interface CaptureCanvasStreamOptions {
  parameters: CaptureCanvasStreamParameters;
  start?: boolean;
}

export type CaptureCanvasStreamType = (options: CaptureCanvasStreamOptions) => Promise<void>;

/**
 * Captures or tears down a whiteboard canvas stream used for screen-style sharing.
 *
 * When starting, this helper captures the canvas at 30 FPS and ensures the
 * correct screen transport is created or reconnected. When stopping, it ends all
 * canvas tracks and disconnects the corresponding transport.
 *
 * @param options Function options for starting or stopping the captured canvas stream.
 * @returns A promise that resolves after the whiteboard stream lifecycle step completes.
 */
export const captureCanvasStream = async ({
  parameters,
  start = true,
}: CaptureCanvasStreamOptions): Promise<void> => {
  try {
    let {
      canvasWhiteboard,
      canvasStream,
      updateCanvasStream,
      screenProducer,
      localScreenProducer,
      transportCreated,
      localTransportCreated,
      updateScreenProducer,
      updateLocalScreenProducer,
      localSocket,
      sleep,
      createSendTransport,
      connectSendTransportScreen,
      disconnectSendTransportScreen,
    } = parameters;

    if (start && !canvasStream) {
      const stream = canvasWhiteboard!.captureStream(30);
      canvasStream = stream;
      updateCanvasStream(stream);

      if (localSocket && !localSocket.id) {
        try {
          if (!localTransportCreated) {
            await createSendTransport({ option: 'screen', parameters });
          } else {
            try {
              if (localScreenProducer) {
                localScreenProducer.close();
                if (updateLocalScreenProducer) {
                  updateLocalScreenProducer(null);
                }
                await sleep({ ms: 500 });
              }
            } catch (error) {
              console.error(error);
            }
            await connectSendTransportScreen({ stream, parameters });
          }
        } catch {
        }

        return;
      }

      if (!transportCreated) {
        await createSendTransport({ option: 'screen', parameters });
      } else {
        try {
          if (screenProducer) {
            screenProducer.close();
            updateScreenProducer(null);
            await sleep({ ms: 500 });
          }
        } catch (error) {
          console.error(error);
        }
        await connectSendTransportScreen({ stream, parameters });
      }
    } else if (canvasStream && !start) {
      canvasStream.getTracks().forEach((track) => track.stop());
      canvasStream = null;
      updateCanvasStream(null);
      disconnectSendTransportScreen({ parameters });
    }
  } catch (error) {
    console.error(error, 'error in captureCanvasStream');
  }
};