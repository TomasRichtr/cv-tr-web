import type { DeepReadonly } from 'vue';

export type Routes = 'index' | 'introduction' | 'experience' | 'skills' | 'contacts' | 'admin';

// Route names for Nuxt (these match the file names in the pages/[lang] directory)
export const ROUTES: DeepReadonly<Record<string, Routes>> = {
  INDEX: 'index',
  INTRODUCTION: 'introduction',
  EXPERIENCE: 'experience',
  SKILLS: 'skills',
  CONTACTS: 'contacts',
  ADMIN: 'admin',
};
