import type { BtnsVariants, Colors } from '~/enums/vuetify';
import type { Routes } from '~/enums/routes';

export interface FooterBtn {
  label?: string;
  color?: Colors;
  to?: Routes;
  variant?: BtnsVariants;
}
