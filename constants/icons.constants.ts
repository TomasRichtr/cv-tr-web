import type { DeepReadonly } from 'vue';
import { SKILLS } from '~/enums/skills.enum';

export const DEV_ICON_MAP: DeepReadonly<Record<string, string>> = {
  [SKILLS.TAILWIND]: 'tailwindcss',
  [SKILLS.VUE]: 'vuejs',
  [SKILLS.HTML]: 'html5',
  [SKILLS.CSS]: 'css3',
  [SKILLS.KNEX]: 'knexjs',
  [SKILLS.NODE_JS]: 'nodejs',
  [SKILLS.CYPRESS]: 'cypressio',
  [SKILLS.NETLIFY_FUNCTIONS]: 'netlify',
  [SKILLS.ELASTIC_SEARCH]: 'elasticsearch',
  [SKILLS.NUXT]: 'nuxtjs',
};

export const MATERIAL_ICON_MAP: DeepReadonly<Record<string, string>> = {
  [SKILLS.REST_API]: 'api',
};
