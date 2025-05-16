import { useUiStore } from '../store/ui.store';
import { LOCALES } from '../enums/ui.enums';

export default defineNuxtRouteMiddleware((to, _) => {
  const uiStore = useUiStore();
  const { language } = storeToRefs(uiStore);

  const langParam = to.params.lang as string;
  console.log(langParam);
  const isValidLang = Object.values(LOCALES).includes(langParam);

  if (isValidLang) {
    language.value = langParam;
  }
  else if (to.path !== '/') {
    return navigateTo(`/${language.value}${to.fullPath}`);
  }

  if (to.path === '/') {
    return navigateTo(`/${language.value}`);
  }
});
