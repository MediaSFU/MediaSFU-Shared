import type { RtpCapabilities } from 'mediasoup-client/lib/types';
import type {
  AltDomains,
  ConsumeSocket,
} from '../../types/types';

export interface ConnectIpsLikeOptions<
  TParameters = unknown,
  TConsumeSocket = ConsumeSocket,
> {
  consume_sockets: TConsumeSocket[];
  remIP: string[];
  apiUserName: string;
  apiKey?: string;
  apiToken: string;
  parameters: TParameters;
}

export type ConnectIpsLikeType<
  TParameters = unknown,
  TConsumeSocket = ConsumeSocket,
> = (
  options: ConnectIpsLikeOptions<TParameters, TConsumeSocket>,
) => Promise<[unknown[], string[]]>;

export interface GetDomainsParameters<
  TParameters = unknown,
  TConsumeSocket = ConsumeSocket,
  TRtpCapabilities = RtpCapabilities,
> {
  roomRecvIPs: string[];
  rtpCapabilities: TRtpCapabilities | null;
  consume_sockets: TConsumeSocket[];
  connectIps: ConnectIpsLikeType<TParameters, TConsumeSocket>;
  getUpdatedAllParams: () => GetDomainsParameters<TParameters, TConsumeSocket, TRtpCapabilities> & TParameters;
  [key: string]: any;
}

export interface GetDomainsOptions<
  TParameters = unknown,
  TConsumeSocket = ConsumeSocket,
  TRtpCapabilities = RtpCapabilities,
> {
  domains: string[];
  alt_domains: AltDomains;
  apiUserName: string;
  apiKey: string;
  apiToken: string;
  parameters: GetDomainsParameters<TParameters, TConsumeSocket, TRtpCapabilities> & TParameters;
}

export type GetDomainsType<
  TParameters = unknown,
  TConsumeSocket = ConsumeSocket,
  TRtpCapabilities = RtpCapabilities,
> = (options: GetDomainsOptions<TParameters, TConsumeSocket, TRtpCapabilities>) => Promise<void>;

/**
 * Resolves newly announced consuming domains to connection targets and connects missing ones.
 *
 * @param {GetDomainsOptions} options - Domain payload and shared consume-socket connection helpers.
 * @returns {Promise<void>} Resolves after any missing consume domains are connected.
 *
 * @example
 * ```typescript
 * await getDomains({
 *   domains: ['recv-1', 'recv-2'],
 *   alt_domains,
 *   apiUserName: 'api-user',
 *   apiKey: 'api-key',
 *   apiToken: 'api-token',
 *   parameters,
 * });
 * ```
 */
export const getDomains = async <
  TParameters = unknown,
  TConsumeSocket = ConsumeSocket,
  TRtpCapabilities = RtpCapabilities,
>({
  domains,
  alt_domains,
  apiUserName,
  apiKey,
  apiToken,
  parameters,
}: GetDomainsOptions<TParameters, TConsumeSocket, TRtpCapabilities>): Promise<void> => {
  let { roomRecvIPs, consume_sockets, connectIps } = parameters;
  const ipsToConnect: string[] = [];

  try {
    consume_sockets = parameters.getUpdatedAllParams().consume_sockets;

    for (const domain of domains) {
      const ipToCheck = alt_domains[domain] || domain;
      if (!roomRecvIPs.includes(ipToCheck)) {
        ipsToConnect.push(ipToCheck);
      }
    }

    await connectIps({
      consume_sockets,
      remIP: ipsToConnect,
      parameters,
      apiUserName,
      apiKey,
      apiToken,
    });
  } catch (error) {
    console.error('Error in getDomains: ', error);
  }
};
