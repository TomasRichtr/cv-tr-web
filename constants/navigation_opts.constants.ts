import { STRINGS } from '~/constants/strings.constants';
import { RoutesEnums } from '~/enums/routes.enums';

export const NAVIGATION_OPTS = [
  { text: STRINGS.btnLabels.home, icon: 'mdi-home', to: RoutesEnums.Index },
  { text: STRINGS.btnLabels.introduction, icon: 'mdi-presentation', to: RoutesEnums.Introduction },
  { text: STRINGS.btnLabels.experience, icon: 'mdi-briefcase', to: RoutesEnums.Experience },
  { text: STRINGS.btnLabels.contacts, icon: 'mdi-account-box', to: RoutesEnums.Contacts },
];
