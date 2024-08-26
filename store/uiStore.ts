import { ref } from 'vue';

export const useUiStore = defineStore('uiStore', () => {
  const showNavDrawer = ref<boolean>(false);

  return { showNavDrawer };
});
