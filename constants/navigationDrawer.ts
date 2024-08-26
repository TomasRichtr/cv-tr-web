import { STRINGS } from '~/constants/strings';
import { Routes } from '~/enums/routes';

export const navigationDrawerItems = [
  { text: STRINGS.btnLabels.home, icon: 'mdi-home', to: Routes.Index },
  { text: STRINGS.btnLabels.introduction, icon: 'mdi-presentation', to: Routes.Introduction },
  { text: STRINGS.btnLabels.experience, icon: 'mdi-briefcase', to: Routes.Experience },
  { text: STRINGS.btnLabels.skills, icon: 'mdi-tools', to: Routes.Tools },
  { text: STRINGS.btnLabels.contact, icon: 'mdi-account-box', to: Routes.Contact },
];
