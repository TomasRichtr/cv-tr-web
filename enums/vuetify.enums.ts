export const VARIANTS = {
  ELEVATED: 'elevated',
  OUTLINED: 'outlined',
  FLAT: 'flat',
  TEXT: 'text',
  TONAL: 'tonal',
  PLAIN: 'plain',
} as const;

export const DENSITY = {
  COMPACT: 'compact',
} as const;

export const COLORS = {
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
} as const;

export const SIZES = {
  X_SMALL: 'x-small',
  SMALL: 'small',
  DEFAULT: 'default',
  LARGE: 'large',
  X_LARGE: 'x-large',
} as const;

export const LOCATIONS = {
  START: 'start',
  END: 'end',
  LEFT: 'left',
  RIGHT: 'right',
} as const;

export const ALERT_TYPES = {
  SUCCESS: 'success',
  INFO: 'info',
  WARNING: 'warning',
  ERROR: 'error',
} as const;

export type Variants = typeof VARIANTS[keyof typeof VARIANTS];

export type Colors = typeof COLORS[keyof typeof COLORS];

export type Sizes = typeof SIZES[keyof typeof SIZES];

export type AlertTypes = typeof ALERT_TYPES[keyof typeof ALERT_TYPES];
