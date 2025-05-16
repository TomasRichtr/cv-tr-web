import cs from './messages/cs.json';
import en from './messages/en.json';

export default defineI18nConfig(() => {
  return {
    legacy: false,
    locale: 'en',
    messages: {
      en,
      cs,
    },
  };
});
