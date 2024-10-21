import type { DeepReadonly } from 'vue';
import { CONTACT_FORM_INPUTS } from '~/enums/contact_form.enums';

export const EN: DeepReadonly<Record<string, unknown>> = {
  name: 'Tomas',
  surname: 'Richtr',
  description: 'self-taught web developer',
  introduction: `
  Hello,
  <br/><br/> 
  I'm Tomas Richtr, a passionate and versatile web developer with a solid track record in both 
  front-end and back-end development. 
  <br/><br/> 
  I specialize in Vue.js, and a variety of tools that power modern web applications, including GraphQL, MySQL, 
  and testing frameworks like Jest and Cypress. 
  <br/><br/>
  My professional journey has given me the opportunity to work on diverse projects, from project management software 
  to chatbot development, each time honing my expertise and pushing my and product boundaries.
  <br/><br/>
  I am fluent in both Czech and English, enabling me to collaborate effectively in diverse teams. 
  I thrive on solving complex challenges, learning new technologies, and creating solutions that make an impact.`,
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
    admin: 'admin',
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
    [CONTACT_FORM_INPUTS.NAME]: {
      required: 'You must enter name.',
      count: 'Your name is too long! Max length is 100 characters.',
    },
    [CONTACT_FORM_INPUTS.COMPANY]: {
      count: 'Your phone is too long! Max length is 100 characters.',
    },
    [CONTACT_FORM_INPUTS.EMAIL]: {
      required: 'You must enter valid email.',
      format: 'You must enter valid email.',
      count: 'Your email is too long! Max length is 100 characters.',
    },
    [CONTACT_FORM_INPUTS.MESSAGE]: {
      required: 'You must enter a message.',
      count: 'Your message is too long! Max length is 1000 characters.',
    },
    [CONTACT_FORM_INPUTS.PHONE]: {
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
  tooltip: {
    read: 'Change to read',
    unread: 'Change to unread',
  },
  action: 'actions',
  modal: {
    title: 'from',
  },
};

export const CS: DeepReadonly<Record<string, unknown>> = {
  name: 'Tomas',
  surname: 'Richtr',
  description: 'samouk webový vývojář',
  introduction:
  `Ahoj,
  <br/><br/>
  Jmenuji se Tomáš Richtr a jsem vášnivý a všestranný webový vývojář s pevnou zkušeností jak ve front-endu, tak i v 
  back-end vývoji.
  <br/><br/>
  Specializuji se na Vue.js a řadu nástrojů, které pohánějí moderní webové aplikace, včetně GraphQL, MySQL a 
  testovacích frameworků jako jsou Jest a Cypress.
  <br/><br/>
  Má profesní cesta mi poskytla příležitost pracovat na různorodých projektech, od softwaru pro řízení projektů až po 
  vývoj chatbotů, a tím jsem si neustále zdokonaloval své dovednosti a posouval hranice produktů.
  <br/><br/>
  Ovládám češtinu i angličtinu, což mi umožňuje efektivně spolupracovat v různorodých týmech. Daří se mi v řešení 
  složitých výzev, učení se novým technologiím a vytváření řešení, která mají dopad.`,
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
    admin: 'admin',
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
    [CONTACT_FORM_INPUTS.NAME]: {
      required: 'Musíte zadat jméno.',
      count: 'Vaše jméno je příliš dlouhé! Maximální délka je 100 znaků.',
    },
    [CONTACT_FORM_INPUTS.COMPANY]: {
      count: 'Název firmy je příliš dlouhý! Maximální délka je 100 znaků.',
    },
    [CONTACT_FORM_INPUTS.EMAIL]: {
      required: 'Musíte zadat platný e-mail.',
      format: 'Musíte zadat platný e-mail.',
      count: 'Váš e-mail je příliš dlouhý! Maximální délka je 100 znaků.',
    },
    [CONTACT_FORM_INPUTS.MESSAGE]: {
      required: 'Musíte zadat zprávu.',
      count: 'Vaše zpráva je příliš dlouhá! Maximální délka je 1000 znaků.',
    },
    [CONTACT_FORM_INPUTS.PHONE]: {
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

export const TRANSLATIONS: DeepReadonly<Record<string, unknown>> = {
  en: EN,
  cs: CS,
};
