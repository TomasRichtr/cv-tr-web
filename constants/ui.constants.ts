import { RoutesEnums } from '~/enums/routes.enums';
import { STRINGS } from '~/constants/strings.constants';
import { Variants, Colors } from '~/enums/vuetify.enums';
import type { FooterBtn } from '~/types/ui.types';

export const FOOTER_BTNS_MAP: Record<RoutesEnums, FooterBtn[]> = {
  [RoutesEnums.Index]: [
    {},
    {
      label: STRINGS.btnLabels.introduction,
      color: Colors.Info,
      to: RoutesEnums.Introduction,
      variant: Variants.Elevated,
    },
  ],
  [RoutesEnums.Introduction]: [
    {
      label: STRINGS.btnLabels.introduction,
      color: Colors.Info,
      to: RoutesEnums.Experience,
      variant: Variants.Elevated,
    },
    {
      label: STRINGS.btnLabels.home,
      to: RoutesEnums.Index,
      color: Colors.Background,
      variant: Variants.Outlined,
    },
  ],
  [RoutesEnums.Experience]: [
    {
      label: STRINGS.btnLabels.skills,
      color: Colors.Info,
      to: RoutesEnums.Skills,
      variant: Variants.Elevated,
    },
    {
      label: STRINGS.btnLabels.introduction,
      to: RoutesEnums.Introduction,
      variant: Variants.Outlined,
      color: Colors.Background,
    },
  ],
  [RoutesEnums.Skills]: [
    {
      label: STRINGS.btnLabels.contacts,
      color: Colors.Info,
      to: RoutesEnums.Contacts,
      variant: Variants.Elevated,
    },
    {
      label: STRINGS.btnLabels.experience,
      to: RoutesEnums.Experience,
      variant: Variants.Outlined,
      color: Colors.Background,
    },
  ],
  [RoutesEnums.Contacts]: [
    {},
    {
      label: STRINGS.btnLabels.skills,
      to: RoutesEnums.Skills,
      variant: Variants.Outlined,
      color: Colors.Background,
    },
  ],
};
