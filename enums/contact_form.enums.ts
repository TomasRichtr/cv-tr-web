import type { DeepReadonly } from 'vue';

export type ContactFormInputs = 'name' | 'company' | 'email' | 'phone' | 'message';

export const CONTACT_FORM_INPUTS: DeepReadonly<Record<string, ContactFormInputs>> = {
  NAME: 'name',
  COMPANY: 'company',
  EMAIL: 'email',
  PHONE: 'phone',
  MESSAGE: 'message',
};
