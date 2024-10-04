import { ref } from 'vue';
import { useStorage } from '@vueuse/core';
import { Languages } from '~/enums/ui.enums';

export const useUiStore = defineStore('uiStore', () => {
  const showNavDrawer = ref<boolean>(false);
  const loading = ref<boolean>(false);
  const language = useStorage<Languages>('tr-cv-app-language', Languages.English);

  return { showNavDrawer, loading, language };
});
