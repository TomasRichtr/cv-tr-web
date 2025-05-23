import type { VTextarea, VTextField } from 'vuetify/components';
import type { BtnVariants, Colors } from '../enums/vuetify.enums';
import type { Routes } from '../enums/routes.enums';
import type { ContactFormInputs } from '../enums/contact_form.enums';

export interface FooterBtn {
  label?: string;
  color?: Colors;
  to?: Routes;
  variant?: BtnVariants;
}

export interface ContactFormInputProps {
  name: ContactFormInputs;
  counter: number;
  label: string;
  placeholder?: string;
  rules: ((val: string) => string | boolean)[];
  type: 'text' | 'email' | 'phone';
  component: typeof VTextField | typeof VTextarea;
}
