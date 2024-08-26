import { Routes } from '~/enums/routes';
import { STRINGS } from '~/constants/strings';
import { BtnsVariants, Colors } from '~/enums/vuetify';
import type { FooterBtn } from '~/types/ui';

export const FOOTER_BTNS_MAP: Record<Routes, FooterBtn[]> = {
  [Routes.Index]: [
    {},
    {
      label: STRINGS.btnLabels.introduction,
      color: Colors.Info,
      to: Routes.Introduction,
      variant: BtnsVariants.Elevated,
    },
  ],
  [Routes.Introduction]: [
    {
      label: STRINGS.btnLabels.introduction,
      color: Colors.Info,
      to: Routes.Experience,
      variant: BtnsVariants.Elevated,
    },
    {
      label: STRINGS.btnLabels.home,
      to: Routes.Index,
      variant: BtnsVariants.Outlined,
    },
  ],
  [Routes.Experience]: [
    {
      label: STRINGS.btnLabels.skills,
      color: Colors.Info,
      to: Routes.Skills,
      variant: BtnsVariants.Elevated,
    },
    {
      label: STRINGS.btnLabels.introduction,
      to: Routes.Introduction,
      variant: BtnsVariants.Outlined,
    },
  ],
  [Routes.Skills]: [
    {
      label: STRINGS.btnLabels.tools,
      color: Colors.Info,
      to: Routes.Tools,
      variant: BtnsVariants.Elevated,
    },
    {
      label: STRINGS.btnLabels.experience,
      to: Routes.Experience,
      variant: BtnsVariants.Outlined,
    },
  ],
  [Routes.Tools]: [
    {
      label: STRINGS.btnLabels.contact,
      color: Colors.Info,
      to: Routes.Contact,
      variant: BtnsVariants.Elevated,
    },
    {
      label: STRINGS.btnLabels.skills,
      to: Routes.Skills,
      variant: BtnsVariants.Outlined,
    },
  ],
  [Routes.Contact]: [
    {},
    {
      label: STRINGS.btnLabels.tools,
      to: Routes.Tools,
      variant: BtnsVariants.Outlined,
    },
  ],
};
