import { ref } from 'vue';

export const useAuthStore = defineStore('authStore', () => {
  const isAuthenticated = ref<boolean>(false);

  const isLoginModalVisible = ref<boolean>(false);

  return { isAuthenticated, isLoginModalVisible };
});
