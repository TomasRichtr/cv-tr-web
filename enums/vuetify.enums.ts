import type { DeepReadonly } from 'vue';

export const VARIANTS: DeepReadonly<Record<string, string>> = {
  ELEVATED: 'elevated',
  OUTLINED: 'outlined',
  FLAT: 'flat',
  TEXT: 'text',
  TONAL: 'tonal',
  PLAIN: 'plain',
};

export const DENSITY: DeepReadonly<Record<string, string>> = {
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
};

export const SIZES: DeepReadonly<Record<string, string>> = {
  X_SMALL: 'x-small',
  SMALL: 'small',
  DEFAULT: 'default',
  LARGE: 'large',
  X_LARGE: 'x-large',
};

export const LOCATIONS: DeepReadonly<Record<string, string>> = {
  START: 'start',
  END: 'end',
  LEFT: 'left',
  RIGHT: 'right',
};

export const ALERT_TYPES: DeepReadonly<Record<string, string>> = {
  SUCCESS: 'success',
  INFO: 'info',
  WARNING: 'warning',
  ERROR: 'error',
};

export type Variants = typeof VARIANTS[keyof typeof VARIANTS];

export type Colors = typeof COLORS[keyof typeof COLORS];

export type AlertTypes = typeof ALERT_TYPES[keyof typeof ALERT_TYPES];
