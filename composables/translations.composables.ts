import { useUiStore } from '../store/ui.store';

export const useTranslations = () => {
  const { t } = useI18n();

  const { language } = storeToRefs(useUiStore());

  console.log(language);

  return {
    t,
  };
};
