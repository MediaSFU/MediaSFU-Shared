import { ModalPositionStyle } from '../../types/shared-base-types';

export interface GetModalPositionOptions {
  position: string;
}

export type GetModalPositionType = (options: GetModalPositionOptions) => ModalPositionStyle;

export const getModalPosition = ({ position }: GetModalPositionOptions): ModalPositionStyle => {
  switch (position) {
    case 'center':
      return { justifyContent: 'center', alignItems: 'center' };
    case 'topLeft':
      return { justifyContent: 'flex-start', alignItems: 'flex-start' };
    case 'topRight':
      return { justifyContent: 'flex-start', alignItems: 'flex-end' };
    case 'bottomLeft':
      return { justifyContent: 'flex-end', alignItems: 'flex-start' };
    case 'bottomRight':
    default:
      return { justifyContent: 'flex-end', alignItems: 'flex-end' };
  }
};