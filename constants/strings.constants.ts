import { ContactFormInputs } from '~/enums/contact_form.enums';

export const STRINGS = {
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
};
