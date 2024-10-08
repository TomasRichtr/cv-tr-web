import { get } from 'lodash-es';
import { useUiStore } from '~/store/ui.store';
import { TRANSLATIONS } from '~/constants/translations.constants';

export const useTranslations = () => {
  const { language } = storeToRefs(useUiStore());

  const t = (path: string) => {
    return get(TRANSLATIONS[language.value], path);
  };

  return {
    t,
  };
};
