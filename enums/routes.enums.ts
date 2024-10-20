import type { DeepReadonly } from 'vue';

export const ROUTES_ENUMS: DeepReadonly<Record<string, string>> = {
  INDEX: 'index',
  INTRODUCTION: 'introduction',
  EXPERIENCE: 'experience',
  SKILLS: 'skills',
  CONTACTS: 'contacts',
  ADMIN: 'admin',
};

export type RoutesEnums = typeof ROUTES_ENUMS[keyof typeof ROUTES_ENUMS];
