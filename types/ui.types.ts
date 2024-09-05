import type { Variants, Colors } from '~/enums/vuetify.enums';
import type { RoutesEnums } from '~/enums/routes.enums';

export interface FooterBtn {
  label?: string;
  color?: Colors;
  to?: RoutesEnums;
  variant?: Variants;
}
