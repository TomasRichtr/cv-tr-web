import { ref } from 'vue';
import { useStorage } from '@vueuse/core';

export const useAuthStore = defineStore('authStore', () => {
  const isAuthenticated = useStorage<boolean>('is-authenticated-storage', false);

  const isLoginModalVisible = ref<boolean>(false);

  return { isAuthenticated, isLoginModalVisible };
});
