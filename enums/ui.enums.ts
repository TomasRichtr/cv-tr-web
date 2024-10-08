export const BREAKPOINTS = Object.freeze({
  SMALL: '640px',
  MEDIUM: '768px',
  LARGE: '1024px',
  XL: '1280px',
  TWO_XL: '1546px',
}) as const;

export const LANGUAGES = Object.freeze({
  ENGLISH: 'en',
  CZECH: 'cs',
}) as const;

export type Languages = typeof LANGUAGES[keyof typeof LANGUAGES];
