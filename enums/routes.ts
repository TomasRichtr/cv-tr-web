import type { DeepReadonly } from 'vue';

export type Routes = 'index' | 'introduction' | 'experience' | 'skills' | 'contacts' | 'admin';

export const ROUTES: DeepReadonly<Record<string, Routes>> = {
  INDEX: 'index',
  INTRODUCTION: 'introduction',
  EXPERIENCE: 'experience',
  SKILLS: 'skills',
  CONTACTS: 'contacts',
  ADMIN: 'admin',
};
