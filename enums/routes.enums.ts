export const ROUTES_ENUMS = {
  INDEX: 'index',
  INTRODUCTION: 'introduction',
  EXPERIENCE: 'experience',
  SKILLS: 'skills',
  CONTACTS: 'contacts',
} as const;

export type RoutesEnums = typeof ROUTES_ENUMS[keyof typeof ROUTES_ENUMS];
