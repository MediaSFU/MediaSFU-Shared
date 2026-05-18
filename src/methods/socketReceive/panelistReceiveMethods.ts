import type { Participant, ShowAlert } from '../../types/types';

export interface PanelistData {
  id: string;
  name: string;
}

export interface PanelistsUpdatedData {
  panelists: PanelistData[];
}

export interface PanelistFocusChangedData {
  focusEnabled: boolean;
  panelists: PanelistData[];
  muteOthersMic: boolean;
  muteOthersCamera: boolean;
}

export interface ControlMediaData {
  type: 'audio' | 'video';
  action: 'mute' | 'unmute';
  reason?: string;
}

export interface AddedAsPanelistData {
  message: string;
}

export interface RemovedFromPanelistsData {
  message: string;
}

export interface PanelistsUpdatedOptions {
  data: PanelistsUpdatedData;
  updatePanelists?: (panelists: Participant[]) => void;
}

export interface PanelistFocusChangedOptions {
  data: PanelistFocusChangedData;
  updatePanelistsFocused?: (focused: boolean) => void;
  updateMuteOthersMic?: (mute: boolean) => void;
  updateMuteOthersCamera?: (mute: boolean) => void;
  updatePanelists?: (panelists: Participant[]) => void;
  currentPanelistsFocused?: boolean;
  currentPanelists?: Participant[];
  onScreenChanges?: () => Promise<void>;
}

export interface ControlMediaOptions {
  data: ControlMediaData;
  showAlert?: ShowAlert;
  clickAudio?: () => void;
  clickVideo?: () => void;
  audioAlreadyOn?: boolean;
  videoAlreadyOn?: boolean;
}

export interface AddedAsPanelistOptions {
  data: AddedAsPanelistData;
  showAlert?: ShowAlert;
}

export interface RemovedFromPanelistsOptions {
  data: RemovedFromPanelistsData;
  showAlert?: ShowAlert;
}

export type PanelistsUpdatedType = (options: PanelistsUpdatedOptions) => Promise<void>;
export type PanelistFocusChangedType = (options: PanelistFocusChangedOptions) => Promise<void>;
export type ControlMediaType = (options: ControlMediaOptions) => Promise<void>;
export type AddedAsPanelistType = (options: AddedAsPanelistOptions) => Promise<void>;
export type RemovedFromPanelistsType = (options: RemovedFromPanelistsOptions) => Promise<void>;

export const panelistsUpdated: PanelistsUpdatedType = async ({
  data,
  updatePanelists,
}): Promise<void> => {
  try {
    const { panelists } = data;

    if (updatePanelists) {
      updatePanelists(
        panelists.map((panelist) => ({
          id: panelist.id,
          name: panelist.name,
          audioID: '',
          videoID: '',
        } as Participant)),
      );
    }
  } catch (error) {
    console.error('Error handling panelistsUpdated:', error);
  }
};

export const panelistFocusChanged: PanelistFocusChangedType = async ({
  data,
  updatePanelistsFocused,
  updateMuteOthersMic,
  updateMuteOthersCamera,
  updatePanelists,
  currentPanelistsFocused,
  currentPanelists,
  onScreenChanges,
}): Promise<void> => {
  try {
    const { focusEnabled, panelists, muteOthersMic, muteOthersCamera } = data;
    const focusChanged = currentPanelistsFocused !== undefined && currentPanelistsFocused !== focusEnabled;
    const currentPanelistIds = (currentPanelists || []).map((panelist) => panelist.id).sort().join(',');
    const newPanelistIds = panelists.map((panelist) => panelist.id).sort().join(',');
    const panelistsChanged = currentPanelistIds !== newPanelistIds;

    updatePanelistsFocused?.(focusEnabled);
    updateMuteOthersMic?.(muteOthersMic);
    updateMuteOthersCamera?.(muteOthersCamera);

    if (updatePanelists) {
      updatePanelists(
        panelists.map((panelist) => ({
          id: panelist.id,
          name: panelist.name,
          audioID: '',
          videoID: '',
        } as Participant)),
      );
    }

    if ((focusChanged || panelistsChanged) && onScreenChanges) {
      await onScreenChanges();
    }
  } catch (error) {
    console.error('Error handling panelistFocusChanged:', error);
  }
};

export const panelistControlMedia: ControlMediaType = async ({
  data,
  showAlert,
  clickAudio,
  clickVideo,
  audioAlreadyOn,
  videoAlreadyOn,
}: ControlMediaOptions): Promise<void> => {
  try {
    const { type, action, reason } = data;

    if (action === 'mute') {
      if (type === 'audio' && audioAlreadyOn && clickAudio) {
        clickAudio();
      } else if (type === 'video' && videoAlreadyOn && clickVideo) {
        clickVideo();
      }

      if (showAlert && reason) {
        showAlert({
          message: `Your ${type === 'audio' ? 'microphone' : 'camera'} has been muted. ${reason}`,
          type: 'info',
          duration: 3000,
        });
      }
    }
  } catch (error) {
    console.error('Error handling controlMedia:', error);
  }
};

export const addedAsPanelist: AddedAsPanelistType = async ({
  data,
  showAlert,
}: AddedAsPanelistOptions): Promise<void> => {
  try {
    showAlert?.({
      message: data.message || 'You have been added as a panelist',
      type: 'success',
      duration: 3000,
    });
  } catch (error) {
    console.error('Error handling addedAsPanelist:', error);
  }
};

export const removedFromPanelists: RemovedFromPanelistsType = async ({
  data,
  showAlert,
}: RemovedFromPanelistsOptions): Promise<void> => {
  try {
    showAlert?.({
      message: data.message || 'You have been removed from panelists',
      type: 'info',
      duration: 3000,
    });
  } catch (error) {
    console.error('Error handling removedFromPanelists:', error);
  }
};