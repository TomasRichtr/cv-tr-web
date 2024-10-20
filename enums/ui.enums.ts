import type { DeepReadonly } from 'vue';

export const BREAKPOINTS: DeepReadonly<Record<string, string>> = {
  SMALL: '640px',
  MEDIUM: '768px',
  LARGE: '1024px',
  XL: '1280px',
  TWO_XL: '1546px',
};

export const LANGUAGES: DeepReadonly<Record<string, string>> = {
  ENGLISH: 'en',
  CZECH: 'cs',
};

export type Languages = typeof LANGUAGES[keyof typeof LANGUAGES];
