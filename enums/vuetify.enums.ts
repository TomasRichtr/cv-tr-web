import type { DeepReadonly } from 'vue';

export type BtnVariants = 'elevated' | 'outlined' | 'flat' | 'text' | 'tonal' | 'plain' | undefined;

export const BTN_VARIANTS: DeepReadonly<Record<string, BtnVariants>> = {
  ELEVATED: 'elevated',
  OUTLINED: 'outlined',
  FLAT: 'flat',
  TEXT: 'text',
  TONAL: 'tonal',
  PLAIN: 'plain',
};

export type InputVariants =
  'outlined' |
  'plain' |
  'filled' |
  'underlined' |
  'solo' |
  'solo-inverted' |
  'solo-filled' |
  undefined;

export const INPUT_VARIANTS: DeepReadonly<Record<string, InputVariants>> = {
  OUTLINED: 'outlined',
  PLAIN: 'plain',
};

type Density = 'compact';

export const DENSITY: DeepReadonly<Record<string, Density>> = {
  COMPACT: 'compact',
};

export const COLORS: DeepReadonly<Record<string, string>> = {
  INFO: 'info',
  WARNING: 'warning',
  SECONDARY: 'secondary',
  PRIMARY: 'primary',
  BACKGROUND: 'background',
  SUCCESS: 'success',
  ERROR: 'error',
  EASY: 'easy',
  AMIO: 'amio',
  EQUIRADAR: 'equiradar',
  DESIGNEO: 'designeo',
};

export const SIZES: DeepReadonly<Record<string, string>> = {
  X_SMALL: 'x-small',
  SMALL: 'small',
  DEFAULT: 'default',
  LARGE: 'large',
  X_LARGE: 'x-large',
};

export type Locations = 'start' | 'end' | 'left' | 'right';

export const LOCATIONS: DeepReadonly<Record<string, Locations>> = {
  START: 'start',
  END: 'end',
  LEFT: 'left',
  RIGHT: 'right',
};

export type AlertTypes = 'error' | 'info' | 'warning' | 'success' | undefined;

export const ALERT_TYPES: DeepReadonly<Record<string, AlertTypes>> = {
  SUCCESS: 'success',
  INFO: 'info',
  WARNING: 'warning',
  ERROR: 'error',
};

export type Colors = typeof COLORS[keyof typeof COLORS];

export type Alignes = 'start' | 'end' | 'center' | undefined;

export const ALIGNES: DeepReadonly<Record<string, Alignes>> = {
  CENTER: 'center',
};
