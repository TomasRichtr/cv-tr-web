import type { DeepReadonly } from 'vue';
import type { RoutesEnums } from '~/enums/routes.enums';
import { ROUTES_ENUMS } from '~/enums/routes.enums';
import type { FooterBtn } from '~/types/ui.types';
import { COLORS, VARIANTS } from '~/enums/vuetify.enums';

export const FOOTER_BTNS_MAP: DeepReadonly<Record<RoutesEnums, FooterBtn[]>> = {
  [ROUTES_ENUMS.INDEX]: [
    {},
    {
      label: 'buttons.introduction',
      color: COLORS.INFO,
      to: ROUTES_ENUMS.INTRODUCTION,
      variant: VARIANTS.ELEVATED,
    },
  ],
  [ROUTES_ENUMS.INTRODUCTION]: [
    {
      label: 'buttons.experience',
      color: COLORS.INFO,
      to: ROUTES_ENUMS.EXPERIENCE,
      variant: VARIANTS.ELEVATED,
    },
    {
      label: 'buttons.home',
      to: ROUTES_ENUMS.INDEX,
      color: COLORS.BACKGROUND,
      variant: VARIANTS.OUTLINED,
    },
  ],
  [ROUTES_ENUMS.EXPERIENCE]: [
    {
      label: 'buttons.skills',
      color: COLORS.INFO,
      to: ROUTES_ENUMS.SKILLS,
      variant: VARIANTS.ELEVATED,
    },
    {
      label: 'buttons.introduction',
      to: ROUTES_ENUMS.INTRODUCTION,
      variant: VARIANTS.OUTLINED,
      color: COLORS.BACKGROUND,
    },
  ],
  [ROUTES_ENUMS.SKILLS]: [
    {
      label: 'buttons.contacts',
      color: COLORS.INFO,
      to: ROUTES_ENUMS.CONTACTS,
      variant: VARIANTS.ELEVATED,
    },
    {
      label: 'buttons.experience',
      to: ROUTES_ENUMS.EXPERIENCE,
      variant: VARIANTS.OUTLINED,
      color: COLORS.BACKGROUND,
    },
  ],
  [ROUTES_ENUMS.CONTACTS]: [
    {},
    {
      label: 'buttons.skills',
      to: ROUTES_ENUMS.SKILLS,
      variant: VARIANTS.OUTLINED,
      color: COLORS.BACKGROUND,
    },
  ],
};
