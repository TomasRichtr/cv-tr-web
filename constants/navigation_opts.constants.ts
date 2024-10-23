import type { DeepReadonly } from 'vue';
import { ROUTES_ENUMS } from '~/enums/routes.enums';

export const NAVIGATION_OPTS: DeepReadonly<Record<string, string>[]> = [
  { text: 'buttons.home', icon: 'mdi-home', to: ROUTES_ENUMS.INDEX },
  { text: 'buttons.introduction', icon: 'mdi-presentation', to: ROUTES_ENUMS.INTRODUCTION },
  { text: 'buttons.experience', icon: 'mdi-briefcase', to: ROUTES_ENUMS.EXPERIENCE },
  { text: 'buttons.contacts', icon: 'mdi-account-box', to: ROUTES_ENUMS.CONTACTS },
  { text: 'buttons.admin', icon: 'mdi-tune', to: ROUTES_ENUMS.ADMIN },
];
