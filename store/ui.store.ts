import { ref } from 'vue';
import { useStorage } from '@vueuse/core';
import type { Languages } from '../enums/ui.enums';
import { LOCALES } from '../enums/ui.enums';

export const useUiStore = defineStore('uiStore', () => {
  const showNavDrawer = ref<boolean>(false);
  const loading = ref<boolean>(false);
  const language = useStorage<Languages>('tr-cv-app-language', LOCALES.ENGLISH);

  return { showNavDrawer, loading, language };
});
