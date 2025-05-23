<script setup lang="ts">
import { capitalize } from 'vue';
import { API_ENDPOINTS } from '../../enums/api.enums';
import type { Auth } from '../../types/auth.types';
import { useAuthStore } from '../../store/auth.store';
import { BTN_VARIANTS, COLORS, INPUT_VARIANTS } from '../../enums/vuetify.enums';

const isVisibleVal = defineModel<boolean>('isVisible');

const { t } = useTranslations();

const password = ref<string>('');

const { apiCreate } = useEndpoints();

const { isAuthenticated, isLoginModalVisible } = storeToRefs(useAuthStore());

const { showFailure } = useShowNotification();

const authenticate = async () => {
  const { success, data } = await apiCreate<Auth, boolean>(
    { id: '1', password: password.value }, API_ENDPOINTS.AUTH,
  );
  if (success && data) {
    isAuthenticated.value = data;
    isVisibleVal.value = false;
  }
  else {
    showFailure({ title: t('notification.failure'), text: t('notification.admin.failureText') });
  }
};

onMounted(() => {
  if (!isAuthenticated) isLoginModalVisible.value = true;
});
</script>

<template>
  <VDialog
    v-model="isVisibleVal"
    max-width="750px"
    @keydown.enter="authenticate"
  >
    <VCard>
      <VCardText class="flex flex-col">
        <VTextField
          v-model="password"
          autofocus
          type="password"
          :variant="INPUT_VARIANTS.OUTLINED"
          :placeholder="capitalize(t('placeholders.password'))"
          :label="capitalize(t('labels.password'))"
        />
        <VBtn
          append-icon="mdi-login"
          :text="capitalize(t('buttons.login'))"
          :variant="BTN_VARIANTS.ELEVATED"
          :color="COLORS.PRIMARY"
          @click="authenticate"
        />
      </VCardText>
    </VCard>
  </VDialog>
</template>
