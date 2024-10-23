import type { DeepReadonly } from 'vue';
import { ROUTES } from '~/enums/routes';

export const NAVIGATION_OPTS: DeepReadonly<Record<string, string>[]> = [
  { text: 'buttons.home', icon: 'mdi-home', to: ROUTES.INDEX },
  { text: 'buttons.introduction', icon: 'mdi-presentation', to: ROUTES.INTRODUCTION },
  { text: 'buttons.experience', icon: 'mdi-briefcase', to: ROUTES.EXPERIENCE },
  { text: 'buttons.contacts', icon: 'mdi-account-box', to: ROUTES.CONTACTS },
  { text: 'buttons.admin', icon: 'mdi-tune', to: ROUTES.ADMIN },
];
