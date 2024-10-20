import type { DeepReadonly } from 'vue';

export const CONTACT_FORM_INPUTS: DeepReadonly<Record<string, string>> = {
  NAME: 'name',
  COMPANY: 'company',
  EMAIL: 'email',
  PHONE: 'phone',
  MESSAGE: 'message',
};

export type ContactFormInputs = typeof CONTACT_FORM_INPUTS[keyof typeof CONTACT_FORM_INPUTS];
