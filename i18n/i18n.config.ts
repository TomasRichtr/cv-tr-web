export default defineI18nConfig(() => {
  return {
    fallbackLocale: 'en',
    locales: [
      { code: 'en', name: 'English', file: './messages/en.json' },
      { code: 'cs', name: 'Czech', file: './messages/cs.json' },
    ],
  };
});
