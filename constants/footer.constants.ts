import type { DeepReadonly } from 'vue';
import type { Routes } from '~/enums/routes';
import { ROUTES } from '~/enums/routes';
import type { FooterBtn } from '~/types/ui.types';
import { COLORS, BTN_VARIANTS } from '~/enums/vuetify.enums';

export const FOOTER_BTNS_MAP: DeepReadonly<Record<Routes, FooterBtn[]>> = {
  index: [
    {},
    {
      label: 'buttons.introduction',
      color: COLORS.INFO,
      to: ROUTES.INTRODUCTION,
      variant: BTN_VARIANTS.ELEVATED,
    },
  ],
  introduction: [
    {
      label: 'buttons.experience',
      color: COLORS.INFO,
      to: ROUTES.EXPERIENCE,
      variant: BTN_VARIANTS.ELEVATED,
    },
    {
      label: 'buttons.home',
      to: ROUTES.INDEX,
      color: COLORS.BACKGROUND,
      variant: BTN_VARIANTS.OUTLINED,
    },
  ],
  experience: [
    {
      label: 'buttons.skills',
      color: COLORS.INFO,
      to: ROUTES.SKILLS,
      variant: BTN_VARIANTS.ELEVATED,
    },
    {
      label: 'buttons.introduction',
      to: ROUTES.INTRODUCTION,
      variant: BTN_VARIANTS.OUTLINED,
      color: COLORS.BACKGROUND,
    },
  ],
  skills: [
    {
      label: 'buttons.contacts',
      color: COLORS.INFO,
      to: ROUTES.CONTACTS,
      variant: BTN_VARIANTS.ELEVATED,
    },
    {
      label: 'buttons.experience',
      to: ROUTES.EXPERIENCE,
      variant: BTN_VARIANTS.OUTLINED,
      color: COLORS.BACKGROUND,
    },
  ],
  contacts: [
    {},
    {
      label: 'buttons.skills',
      to: ROUTES.SKILLS,
      variant: BTN_VARIANTS.OUTLINED,
      color: COLORS.BACKGROUND,
    },
  ],
  admin: [],
};
