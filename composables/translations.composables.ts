export const useTranslations = () => {
  const { t, setLocale, locale } = useI18n();

  const localePath = useLocalePath();

  return {
    t,
    localePath,
    setLocale,
    locale,
  };
};
