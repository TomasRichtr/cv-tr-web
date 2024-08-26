import { RoutesEnums } from '~/enums/routes.enums';
import { STRINGS } from '~/constants/strings.constants';
import { BtnsVariants, Colors } from '~/enums/vuetify.enums';
import type { FooterBtn } from '~/types/ui.types';

export const FOOTER_BTNS_MAP: Record<RoutesEnums, FooterBtn[]> = {
  [RoutesEnums.Index]: [
    {},
    {
      label: STRINGS.btnLabels.introduction,
      color: Colors.Info,
      to: RoutesEnums.Introduction,
      variant: BtnsVariants.Elevated,
    },
  ],
  [RoutesEnums.Introduction]: [
    {
      label: STRINGS.btnLabels.introduction,
      color: Colors.Info,
      to: RoutesEnums.Experience,
      variant: BtnsVariants.Elevated,
    },
    {
      label: STRINGS.btnLabels.home,
      to: RoutesEnums.Index,
      variant: BtnsVariants.Outlined,
    },
  ],
  [RoutesEnums.Experience]: [
    {
      label: STRINGS.btnLabels.skills,
      color: Colors.Info,
      to: RoutesEnums.Skills,
      variant: BtnsVariants.Elevated,
    },
    {
      label: STRINGS.btnLabels.introduction,
      to: RoutesEnums.Introduction,
      variant: BtnsVariants.Outlined,
    },
  ],
  [RoutesEnums.Skills]: [
    {
      label: STRINGS.btnLabels.tools,
      color: Colors.Info,
      to: RoutesEnums.Tools,
      variant: BtnsVariants.Elevated,
    },
    {
      label: STRINGS.btnLabels.experience,
      to: RoutesEnums.Experience,
      variant: BtnsVariants.Outlined,
    },
  ],
  [RoutesEnums.Tools]: [
    {
      label: STRINGS.btnLabels.contact,
      color: Colors.Info,
      to: RoutesEnums.Contact,
      variant: BtnsVariants.Elevated,
    },
    {
      label: STRINGS.btnLabels.skills,
      to: RoutesEnums.Skills,
      variant: BtnsVariants.Outlined,
    },
  ],
  [RoutesEnums.Contact]: [
    {},
    {
      label: STRINGS.btnLabels.tools,
      to: RoutesEnums.Tools,
      variant: BtnsVariants.Outlined,
    },
  ],
};
