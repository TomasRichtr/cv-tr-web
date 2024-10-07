import { VTextField, VTextarea } from 'vuetify/components';
import type { ContactFormInputProps } from '~/types/ui.types';
import inputValidations from '~/composables/input_validations.composables';
import { CONTACT_FORM_INPUTS } from '~/enums/contact_form.enums';

const { t } = useTranslations();

export const CONTACT_FORM_FIELDS: ContactFormInputProps[] = [
  {
    name: CONTACT_FORM_INPUTS.NAME,
    label: t('inputLabels.name'),
    counter: 100,
    component: VTextField,
    rules: [
      (val: string) => inputValidations.validateRequired(t('validation.name.required'), val),
      (val: string) => inputValidations.validateLength(t('validation.name.count'), 100, val),
    ],
    type: 'text',
  },
  {
    name: CONTACT_FORM_INPUTS.COMPANY,
    label: t('inputLabels.company'),
    counter: 100,
    component: VTextField,
    rules: [
      (val: string) => inputValidations.validateLength(t('validation.company.count'), 100, val),
    ],
    type: 'text',
  },
  {
    name: CONTACT_FORM_INPUTS.EMAIL,
    label: t('inputLabels.email'),
    counter: 100,
    component: VTextField,
    rules: [
      (val: string) => inputValidations.validateRequired(t('validation.email.required'), val),
      (val: string) => inputValidations.validateLength(t('validation.email.count'), 100, val),
      (val: string) => inputValidations.validateEmail(t('validation.email.format'), val),
    ],
    type: 'email',
  },
  {
    name: CONTACT_FORM_INPUTS.PHONE,
    label: t('inputLabels.phone'),
    counter: 20,
    component: VTextField,
    rules: [
      (val: string) => inputValidations.validateLength(t('validation.phone.count'), 20, val),
      (val: string) => inputValidations.validatePhone(t('validation.phone.format'), val),
    ],
    type: 'phone',
  },
  {
    name: CONTACT_FORM_INPUTS.MESSAGE,
    label: t('inputLabels.message'),
    counter: 1000,
    component: VTextarea,
    rules: [
      (val: string) => inputValidations.validateLength(t('validation.message.count'), 1000, val),
      (val: string) => inputValidations.validateRequired(t('validation.message.required'), val),
    ],
    type: 'text',
  },
];

export const DEFAULT_FORM = Object.freeze({
  name: null,
  email: null,
  message: null,
  company: null,
  phone: null,
});
