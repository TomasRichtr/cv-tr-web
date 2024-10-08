export const CONTACT_FORM_INPUTS = Object.freeze({
  NAME: 'name',
  COMPANY: 'company',
  EMAIL: 'email',
  PHONE: 'phone',
  MESSAGE: 'message',
}) as const;

export type ContactFormInputs = typeof CONTACT_FORM_INPUTS[keyof typeof CONTACT_FORM_INPUTS];
