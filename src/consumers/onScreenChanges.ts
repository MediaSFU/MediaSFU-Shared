import { ReorderStreamsParameters, EventType } from "../types/types";

type OpaqueReorderStreamsInvoker = {
  bivarianceHack: (options: any) => Promise<void>;
}["bivarianceHack"];

export interface OnScreenChangesParameters extends ReorderStreamsParameters<any, any, any> {
  eventType: EventType;
  shareScreenStarted: boolean;
  shared: boolean;
  addForBasic: boolean;
  updateAddForBasic: (value: boolean) => void;
  itemPageLimit: number;
  updateItemPageLimit: (value: number) => void;
  updateMainHeightWidth: (value: number) => void;

  // mediasfu functions
  reorderStreams: OpaqueReorderStreamsInvoker;
  [key: string]: any;
}

export interface OnScreenChangesOptions<
  TParameters extends OnScreenChangesParameters = OnScreenChangesParameters,
> {
  changed?: boolean;
  parameters: TParameters;
}

// Export the type definition for the function
export type OnScreenChangesType = <
  TParameters extends OnScreenChangesParameters = OnScreenChangesParameters,
>(options: OnScreenChangesOptions<TParameters>) => Promise<void>;

/**
 * Handles changes in screen events such as broadcast, chat, and conference.
 * 
 * @param {OnScreenChangesOptions} options - The options for handling screen changes.
 * @param {boolean} options.changed - Indicates if the screen has changed.
 * @param {object} options.parameters - The parameters for handling screen changes.
 * @param {string} options.parameters.eventType - The type of event (e.g., "broadcast", "chat", "conference").
 * @param {boolean} options.parameters.shareScreenStarted - Indicates if screen sharing has started.
 * @param {boolean} options.parameters.shared - Indicates if the screen is shared.
 * @param {boolean} options.parameters.addForBasic - Flag to add basic controls.
 * @param {function} options.parameters.updateMainHeightWidth - Function to update the main height and width.
 * @param {function} options.parameters.updateAddForBasic - Function to update the addForBasic flag.
 * @param {number} options.parameters.itemPageLimit - The limit for item pages.
 * @param {function} options.parameters.updateItemPageLimit - Function to update the item page limit.
 * @param {function} options.parameters.reorderStreams - Function to reorder streams.
 * 
 * @returns {Promise<void>} A promise that resolves when the screen changes have been handled.
 * 
 * @throws {Error} Throws an error if there is an issue handling screen changes.
 * 
 * @example
 * ```typescript
 * await onScreenChanges({
 *   changed: true,
 *   parameters: {
 *     eventType: 'conference',
 *     shareScreenStarted: false,
 *     shared: false,
 *     addForBasic: false,
 *     updateMainHeightWidth: (height) => console.log('Updated height:', height),
 *     updateAddForBasic: (value) => console.log('Updated addForBasic:', value),
 *     itemPageLimit: 2,
 *     updateItemPageLimit: (limit) => console.log('Updated item page limit:', limit),
 *     reorderStreams: async (options) => console.log('Reordered streams with options:', options),
 *   },
 * });
 * ```
 */ 

export async function onScreenChanges<
  TParameters extends OnScreenChangesParameters = OnScreenChangesParameters,
>({ changed, parameters }: OnScreenChangesOptions<TParameters>): Promise<void> {
  try {
    // Destructure parameters
    let {
      eventType,
      shareScreenStarted,
      shared,
      whiteboardStarted,
      whiteboardEnded,
      addForBasic,
      updateMainHeightWidth,
      updateAddForBasic,
      itemPageLimit,
      updateItemPageLimit,

      //mediasfu functions
      reorderStreams,
    } = parameters;
    const screenFlowActive = shareScreenStarted || shared || (whiteboardStarted && !whiteboardEnded);

    // Remove element with id 'controlButtons'
    addForBasic = false;
    updateAddForBasic(addForBasic);

    if (eventType === "broadcast" || eventType === "chat") {
      addForBasic = true;
      updateAddForBasic(addForBasic);

      itemPageLimit = eventType === "broadcast" ? 1 : 2;
      updateItemPageLimit(itemPageLimit);
      updateMainHeightWidth(screenFlowActive ? 84 : eventType === "broadcast" ? 100 : 0);
    } else if (screenFlowActive) {
      updateMainHeightWidth(84);
    } else {
      if (eventType === "conference") {
        updateMainHeightWidth(0);
      }
    }

    // Update the mini cards grid
    await reorderStreams({ add: false, screenChanged: changed, parameters });
  } catch (error) {
    // Handle errors during the process of handling screen changes
    console.log("Error handling screen changes:", (error as Error).message);
    // throw error;
  }
}
