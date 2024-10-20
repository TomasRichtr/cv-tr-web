import type { DeepReadonly } from 'vue';
import { ROUTES_ENUMS } from '~/enums/routes.enums';

export const NAVIGATION_OPTS: DeepReadonly<Record<string, string>[]> = [
  { text: 'btnLabels.home', icon: 'mdi-home', to: ROUTES_ENUMS.INDEX },
  { text: 'btnLabels.introduction', icon: 'mdi-presentation', to: ROUTES_ENUMS.INTRODUCTION },
  { text: 'btnLabels.experience', icon: 'mdi-briefcase', to: ROUTES_ENUMS.EXPERIENCE },
  { text: 'btnLabels.contacts', icon: 'mdi-account-box', to: ROUTES_ENUMS.CONTACTS },
  { text: 'btnLabels.admin', icon: 'mdi-tune', to: ROUTES_ENUMS.ADMIN },
];
