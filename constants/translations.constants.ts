import { ContactFormInputs } from '~/enums/contact_form.enums';

export const EN = {
  name: 'Tomas',
  surname: 'Richtr',
  description: 'self-taught web developer',
  pageSections: {
    contactForm: 'leave the message',
    contacts: 'contacts',
    filters: 'Filter by',
    sorters: 'Sort by',
    skills: 'Pick skills',
    skillsOverview: 'Skills',
  },
  btnLabels: {
    introduction: 'introduction',
    home: 'home',
    experience: 'experience',
    skills: 'skills',
    contacts: 'contacts',
    submit: 'submit',
  },
  period: {
    month: 'month',
    year: 'year',
    months: 'months',
    years: 'years',
    today: 'today',
  },
  labels: {
    all: 'all',
  },
  size: 'size',
  employees: 'employees',
  home: 'home',
  skillsDegree: {
    definition: 'how often I use:',
    fewTimes: 'few times',
    often: 'often',
    daily: 'daily',
  },
  404: {
    title: '',
  },
  selections: 'selections',
  sorting: {
    title: 'sorting',
    alphabetically: 'name',
  },
  inputLabels: {
    name: 'name',
    email: 'email',
    message: 'message',
    company: 'company',
    phone: 'phone',
  },
  placeholders: {
    phone: 'Fill, if you prefer to be called.',
  },
  validation: {
    [ContactFormInputs.Name]: {
      required: 'You must enter name.',
      count: 'Your name is too long! Max length is 100 characters.',
    },
    [ContactFormInputs.Company]: {
      count: 'Your phone is too long! Max length is 100 characters.',
    },
    [ContactFormInputs.Email]: {
      required: 'You must enter valid email.',
      format: 'You must enter valid email.',
      count: 'Your email is too long! Max length is 100 characters.',
    },
    [ContactFormInputs.Message]: {
      required: 'You must enter a message.',
      count: 'Your message is too long! Max length is 1000 characters.',
    },
    [ContactFormInputs.Phone]: {
      format: 'You must enter a valid phone number.',
      count: 'Your phone is too long! Max length is 20 characters.',
    },
  },
  notification: {
    success: 'Success',
    failure: 'Failure',
    messages: {
      successText: 'Your message has been successfully sent.',
    },
  },
  errors: {
    missingInstance: 'Missing app instance!',
  },
};

export const CS = {
  name: 'Tomas',
  surname: 'Richtr',
  description: 'samouk webový vývojář',
  pageSections: {
    contactForm: 'zanechte zprávu',
    contacts: 'kontakty',
    filters: 'Filtrovat podle',
    sorters: 'Seřadit podle',
    skills: 'Vyberte dovednosti',
    skillsOverview: 'Dovednosti',
  },
  btnLabels: {
    introduction: 'představení',
    home: 'domů',
    experience: 'zkušenosti',
    skills: 'dovednosti',
    contacts: 'kontakty',
    submit: 'odeslat',
  },
  period: {
    month: 'měsíc',
    year: 'rok',
    months: 'měsíce',
    years: 'roky',
    today: 'dnes',
  },
  labels: {
    all: 'vše',
  },
  size: 'velikost',
  employees: 'zaměstnanci',
  home: 'domů',
  skillsDegree: {
    definition: 'jak často používám:',
    fewTimes: 'několikrát',
    often: 'často',
    daily: 'denně',
  },
  404: {
    title: '',
  },
  selections: 'výběry',
  sorting: {
    title: 'řazení',
    alphabetically: 'název',
  },
  inputLabels: {
    name: 'jméno',
    email: 'email',
    message: 'zpráva',
    company: 'firma',
    phone: 'telefon',
  },
  placeholders: {
    phone: 'Vyplňte, pokud preferujete zavolání.',
  },
  validation: {
    [ContactFormInputs.Name]: {
      required: 'Musíte zadat jméno.',
      count: 'Vaše jméno je příliš dlouhé! Maximální délka je 100 znaků.',
    },
    [ContactFormInputs.Company]: {
      count: 'Název firmy je příliš dlouhý! Maximální délka je 100 znaků.',
    },
    [ContactFormInputs.Email]: {
      required: 'Musíte zadat platný e-mail.',
      format: 'Musíte zadat platný e-mail.',
      count: 'Váš e-mail je příliš dlouhý! Maximální délka je 100 znaků.',
    },
    [ContactFormInputs.Message]: {
      required: 'Musíte zadat zprávu.',
      count: 'Vaše zpráva je příliš dlouhá! Maximální délka je 1000 znaků.',
    },
    [ContactFormInputs.Phone]: {
      format: 'Musíte zadat platné telefonní číslo.',
      count: 'Vaše telefonní číslo je příliš dlouhé! Maximální délka je 20 znaků.',
    },
  },
  notification: {
    success: 'Úspěch',
    failure: 'Neúspěch',
    messages: {
      successText: 'Vaše zpráva byla úspěšně odeslána.',
    },
  },
  errors: {
    missingInstance: 'Chybí instance aplikace!',
  },
};

export const STRINGS = {
  en: EN,
  cs: CS,
};
