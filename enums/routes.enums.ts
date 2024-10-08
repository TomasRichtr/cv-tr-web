export const ROUTES_ENUMS = Object.freeze({
  INDEX: 'index',
  INTRODUCTION: 'introduction',
  EXPERIENCE: 'experience',
  SKILLS: 'skills',
  CONTACTS: 'contacts',
}) as const;

export type RoutesEnums = typeof ROUTES_ENUMS[keyof typeof ROUTES_ENUMS];
