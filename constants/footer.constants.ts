import type { DeepReadonly } from 'vue';
import type { RoutesEnums } from '~/enums/routes.enums';
import { ROUTES_ENUMS } from '~/enums/routes.enums';
import type { FooterBtn } from '~/types/ui.types';
import { COLORS, VARIANTS } from '~/enums/vuetify.enums';

export const FOOTER_BTNS_MAP: DeepReadonly<Record<RoutesEnums, FooterBtn[]>> = {
  [ROUTES_ENUMS.INDEX]: [
    {},
    {
      label: 'btnLabels.introduction',
      color: COLORS.INFO,
      to: ROUTES_ENUMS.INTRODUCTION,
      variant: VARIANTS.ELEVATED,
    },
  ],
  [ROUTES_ENUMS.INTRODUCTION]: [
    {
      label: 'btnLabels.experience',
      color: COLORS.INFO,
      to: ROUTES_ENUMS.EXPERIENCE,
      variant: VARIANTS.ELEVATED,
    },
    {
      label: 'btnLabels.home',
      to: ROUTES_ENUMS.INDEX,
      color: COLORS.BACKGROUND,
      variant: VARIANTS.OUTLINED,
    },
  ],
  [ROUTES_ENUMS.EXPERIENCE]: [
    {
      label: 'btnLabels.skills',
      color: COLORS.INFO,
      to: ROUTES_ENUMS.SKILLS,
      variant: VARIANTS.ELEVATED,
    },
    {
      label: 'btnLabels.introduction',
      to: ROUTES_ENUMS.INTRODUCTION,
      variant: VARIANTS.OUTLINED,
      color: COLORS.BACKGROUND,
    },
  ],
  [ROUTES_ENUMS.SKILLS]: [
    {
      label: 'btnLabels.contacts',
      color: COLORS.INFO,
      to: ROUTES_ENUMS.CONTACTS,
      variant: VARIANTS.ELEVATED,
    },
    {
      label: 'btnLabels.experience',
      to: ROUTES_ENUMS.EXPERIENCE,
      variant: VARIANTS.OUTLINED,
      color: COLORS.BACKGROUND,
    },
  ],
  [ROUTES_ENUMS.CONTACTS]: [
    {},
    {
      label: 'btnLabels.skills',
      to: ROUTES_ENUMS.SKILLS,
      variant: VARIANTS.OUTLINED,
      color: COLORS.BACKGROUND,
    },
  ],
};
