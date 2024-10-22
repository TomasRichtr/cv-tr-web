import { get } from 'lodash-es';
import { capitalize } from 'vue';
import { useUiStore } from '~/store/ui.store';
import { TRANSLATIONS } from '~/constants/translations.constants';

export const useTranslations = () => {
  const { language } = storeToRefs(useUiStore());

  const t = (path: string, upperFirst?: boolean) => {
    const translation = get(TRANSLATIONS[language.value], path);
    if (upperFirst) return capitalize(translation);
    return translation;
  };

  return {
    t,
  };
};
