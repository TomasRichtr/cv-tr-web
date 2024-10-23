import { ref } from 'vue';
import { useStorage } from '@vueuse/core';

export const useAuthStore = defineStore('authStore', () => {
  const isAuthenticatedSession = useStorage<boolean>('is-session-authenticated', false, sessionStorage);
  const isAuthenticated = ref<boolean>(isAuthenticatedSession.value);

  const isLoginModalVisible = ref<boolean>(true);

  return { isAuthenticated, isLoginModalVisible };
});
