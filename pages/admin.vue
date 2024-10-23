<script setup lang="ts">
import { useMessageApi } from '~/composables/messages.composables';
import MessageTable from '~/components/admin/MessageTable.vue';
import { useMessagesStore } from '~/store/messages.store';
import { VARIANTS } from '~/enums/vuetify.enums';
import LoginModal from '~/components/admin/LoginModal.vue';
import { useAuthStore } from '~/store/auth.store';
import NotLogged from '~/components/admin/NotLogged.vue';
import PageWrapper from '~/components/shared/PageWrapper.vue';

const { getMessages } = useMessageApi();

const { messages } = storeToRefs(useMessagesStore());

const { isAuthenticated, isLoginModalVisible } = storeToRefs(useAuthStore());

onMounted(async () => {
  isLoginModalVisible.value = !isAuthenticated.value;
  messages.value = await getMessages();
});

const search = ref<string>('');

const { t } = useTranslations();
</script>

<template>
  <PageWrapper>
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
    <NotLogged v-if="!isAuthenticated && !isLoginModalVisible" />
    <LoginModal v-model:is-visible="isLoginModalVisible" />
  </PageWrapper>
</template>
