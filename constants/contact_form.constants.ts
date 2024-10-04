import { VTextField, VTextarea } from 'vuetify/components';
import { STRINGS } from '~/constants/strings.constants';
import type { ContactFormInputProps } from '~/types/ui.types';
import inputValidations from '~/composables/input_validations.composables';
import { ContactFormInputs } from '~/enums/contact_form.enums';

export const CONTACT_FORM_INPUTS: ContactFormInputProps[] = [
  {
    name: ContactFormInputs.Name,
    label: STRINGS.inputLabels.name,
    counter: 100,
    component: VTextField,
    rules: [
      (val: string) => inputValidations.validateRequired(STRINGS.validation.name.required, val),
      (val: string) => inputValidations.validateLength(STRINGS.validation.name.count, 100, val),
    ],
    type: 'text',
  },
  {
    name: ContactFormInputs.Company,
    label: STRINGS.inputLabels.company,
    counter: 100,
    component: VTextField,
    rules: [
      (val: string) => inputValidations.validateLength(STRINGS.validation.company.count, 100, val),
    ],
    type: 'text',
  },
  {
    name: ContactFormInputs.Email,
    label: STRINGS.inputLabels.email,
    counter: 100,
    component: VTextField,
    rules: [
      (val: string) => inputValidations.validateRequired(STRINGS.validation.email.required, val),
      (val: string) => inputValidations.validateLength(STRINGS.validation.email.count, 100, val),
      (val: string) => inputValidations.validateEmail(STRINGS.validation.email.format, val),
    ],
    type: 'email',
  },
  {
    name: ContactFormInputs.Phone,
    label: STRINGS.inputLabels.phone,
    counter: 20,
    component: VTextField,
    rules: [
      (val: string) => inputValidations.validateLength(STRINGS.validation.phone.count, 20, val),
      (val: string) => inputValidations.validatePhone(STRINGS.validation.phone.format, val),
    ],
    type: 'phone',
  },
  {
    name: ContactFormInputs.Message,
    label: STRINGS.inputLabels.message,
    counter: 1000,
    component: VTextarea,
    rules: [
      (val: string) => inputValidations.validateLength(STRINGS.validation.message.count, 1000, val),
      (val: string) => inputValidations.validateRequired(STRINGS.validation.message.required, val),
    ],
    type: 'text',
  },
];

export const DEFAULT_FORM = Object.freeze({
  name: '',
  email: '',
  message: '',
});
