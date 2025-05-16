import { ref } from 'vue';

export const useUiStore = defineStore('uiStore', () => {
  const showNavDrawer = ref<boolean>(false);
  const loading = ref<boolean>(false);

  return { showNavDrawer, loading };
});
