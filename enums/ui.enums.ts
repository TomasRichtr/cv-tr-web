// Convert to constants
export const BREAKPOINTS = {
  SMALL: '640px',
  MEDIUM: '768px',
  LARGE: '1024px',
  XL: '1280px',
  TWO_XL: '1546px',
} as const;

export const LANGUAGES = {
  ENGLISH: 'en',
  CZECH: 'cs',
} as const;

export type Languages = typeof LANGUAGES[keyof typeof LANGUAGES];
