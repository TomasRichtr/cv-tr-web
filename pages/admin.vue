<script setup lang="ts">
import { useMessageApi } from '~/composables/messages.composables';
import MessageTable from '~/components/admin/MessageTable.vue';
import { useMessagesStore } from '~/store/messages.store';
import { VARIANTS } from '~/enums/vuetify.enums';

const { getMessages } = useMessageApi();

const { messages } = storeToRefs(useMessagesStore());

onMounted(async () => {
  messages.value = await getMessages();
});

const search = ref<string>('');

const { t } = useTranslations();
</script>

<template>
  <div>
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
  </div>
</template>
