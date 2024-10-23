<script setup lang="ts">
import { COLORS, VARIANTS } from '~/enums/vuetify.enums';
import { API_ENDPOINTS } from '~/enums/api.enums';
import { useEndpoints } from '~/composables/endpoints.composables';
import type { Auth } from '~/types/auth.types';

const isVisibleVal = defineModel<boolean>('isVisible');

const { t } = useTranslations();

const password = ref<string>('');

const { apiCreate } = useEndpoints();

const authenticate = async () => {
  const { success, data } = await apiCreate<Auth, Auth>(
    { id: '1', password: password.value }, API_ENDPOINTS.AUTH,
  );
  if (success && data) return data;
  return {};
};
</script>

<template>
  <VDialog
    v-model="isVisibleVal"
    max-width="750px"
  >
    <VCard>
      <VCardText class="flex flex-col">
        <VTextField
          v-model="password"
          type="password"
          :variant="VARIANTS.OUTLINED"
          :placeholder="t('placeholders.password', true)"
          :label="t('labels.password', true)"
        />
        <VBtn
          append-icon="mdi-login"
          :text="t('buttons.login', true)"
          :variant="VARIANTS.ELEVATED"
          :color="COLORS.PRIMARY"
          @click="authenticate"
        />
      </VCardText>
    </VCard>
  </VDialog>
</template>
