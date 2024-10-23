<script setup lang="ts">
import { useMessageApi } from '~/composables/messages.composables';
import MessageTable from '~/components/admin/MessageTable.vue';
import { useMessagesStore } from '~/store/messages.store';
import { VARIANTS } from '~/enums/vuetify.enums';
import LoginModal from '~/components/admin/LoginModal.vue';
import { useAuthStore } from '~/store/auth.store';

const { getMessages } = useMessageApi();

const { messages } = storeToRefs(useMessagesStore());

onMounted(async () => {
  messages.value = await getMessages();
});

const search = ref<string>('');

const { t } = useTranslations();

definePageMeta({
  middleware: ['auth'],
});

const { isAuthenticated, isLoginModalVisible } = storeToRefs(useAuthStore());
</script>

<template>
  <div>
    <template v-if="isAuthenticated">
      <VTextField
        v-model="search"
        :variant="VARIANTS.OUTLINED"
        :placeholder="t('placeholders.search', true)"
        :label="t('labels.search', true)"
      />
      <MessageTable
        :messages="messages"
        :search="search"
      />
    </template>
    <LoginModal v-model:is-visible="isLoginModalVisible" />
  </div>
</template>
