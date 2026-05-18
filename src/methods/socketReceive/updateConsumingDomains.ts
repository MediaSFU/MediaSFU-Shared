import type {
  AltDomains,
  ConsumeSocket,
  Participant,
} from '../../types/types';
import type { ConnectIpsLikeType } from './getDomains';

export interface UpdateConsumingDomainsGetDomainsOptions<
  TParameters = unknown,
  TParticipant extends { name?: string | null } = Participant,
  TConsumeSocket = ConsumeSocket,
> {
  domains: string[];
  alt_domains: AltDomains;
  apiUserName: string;
  apiKey: string;
  apiToken: string;
  parameters:
    UpdateConsumingDomainsParameters<TParameters, TParticipant, TConsumeSocket> &
    TParameters;
}

export type UpdateConsumingDomainsGetDomainsType<
  TParameters = unknown,
  TParticipant extends { name?: string | null } = Participant,
  TConsumeSocket = ConsumeSocket,
> = (
  options: UpdateConsumingDomainsGetDomainsOptions<TParameters, TParticipant, TConsumeSocket>,
) => Promise<void>;

export interface UpdateConsumingDomainsParameters
  <
    TParameters = unknown,
    TParticipant extends { name?: string | null } = Participant,
    TConsumeSocket = ConsumeSocket,
  > {
  participants: TParticipant[];
  consume_sockets: TConsumeSocket[];
  connectIps: ConnectIpsLikeType<TParameters, TConsumeSocket>;
  getDomains: UpdateConsumingDomainsGetDomainsType<TParameters, TParticipant, TConsumeSocket>;
  getUpdatedAllParams: () =>
    UpdateConsumingDomainsParameters<TParameters, TParticipant, TConsumeSocket> &
    TParameters;
  [key: string]: any;
}

export interface UpdateConsumingDomainsOptions<
  TParameters = unknown,
  TParticipant extends { name?: string | null } = Participant,
  TConsumeSocket = ConsumeSocket,
> {
  domains: string[];
  alt_domains: AltDomains;
  apiUserName: string;
  apiKey: string;
  apiToken: string;
  parameters:
    UpdateConsumingDomainsParameters<TParameters, TParticipant, TConsumeSocket> &
    TParameters;
}

export type UpdateConsumingDomainsType<
  TParameters = unknown,
  TParticipant extends { name?: string | null } = Participant,
  TConsumeSocket = ConsumeSocket,
> = (
  options: UpdateConsumingDomainsOptions<TParameters, TParticipant, TConsumeSocket>,
) => Promise<void>;

/**
 * Connects newly announced consuming domains, routing through alternate-domain lookup when needed.
 *
 * @param {UpdateConsumingDomainsOptions} options - Domain payload and consume-domain connection helpers.
 * @returns {Promise<void>} Resolves once the needed consume domains are connected.
 *
 * @example
 * ```typescript
 * await updateConsumingDomains({
 *   domains,
 *   alt_domains,
 *   apiUserName: 'api-user',
 *   apiKey: 'api-key',
 *   apiToken: 'api-token',
 *   parameters,
 * });
 * ```
 */
export const updateConsumingDomains = async <
  TParameters = unknown,
  TParticipant extends { name?: string | null } = Participant,
  TConsumeSocket = ConsumeSocket,
>({
  domains,
  alt_domains,
  parameters,
  apiUserName,
  apiKey,
  apiToken,
}: UpdateConsumingDomainsOptions<TParameters, TParticipant, TConsumeSocket>): Promise<void> => {
  let { participants, getDomains, consume_sockets, connectIps } = parameters;
  consume_sockets = parameters.getUpdatedAllParams().consume_sockets;

  try {
    if (participants.length > 0) {
      if (Object.keys(alt_domains).length > 0) {
        await getDomains({
          domains,
          alt_domains,
          apiUserName,
          apiKey,
          apiToken,
          parameters,
        });
      } else {
        await connectIps({
          consume_sockets,
          remIP: domains,
          parameters,
          apiUserName,
          apiKey,
          apiToken,
        });
      }
    }
  } catch (error) {
    console.log('Error in updateConsumingDomains: ', error);
  }
};
