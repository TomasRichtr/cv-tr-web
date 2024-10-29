<script setup lang="ts">
import { useMessagesStore } from '../../store/messages.store';
import type { Message } from '../../types/message.types';
import IconBtn from '../shared/IconBtn.vue';
import { BTN_VARIANTS, COLORS } from '../../enums/vuetify.enums';
import MessageDetailModal from './MessageDetailModal.vue';

interface Props {
  message: Message;
}

const props = defineProps<Props>();

const { t } = useTranslations();

const { updateMessage, deleteMessage } = useMessageApi();

const isRead = computed({
  get() {
    return !!props.message.read;
  },
  async set(read: boolean) {
    await updateMessage(props.message.id, { ...props.message, read });
    messages.value = await getMessages();
  },
});

const { getMessages } = useMessageApi();

const { messages } = storeToRefs(useMessagesStore());

const handleMessageDelete = async () => {
  await deleteMessage(props.message.id);
  messages.value = await getMessages();
};

const isDetailVisible = ref<boolean>(false);
</script>

<template>
  <div class="flex items-center">
    <VCheckbox
      v-model="isRead"
      v-tooltip:start="isRead ? t('tooltip.unread') : t('tooltip.read')"
      :hide-details="true"
    />

    <IconBtn
      v-tooltip:start="t('tooltip.delete')"
      icon="mdi-delete"
      :variant="BTN_VARIANTS.PLAIN"
      :color="COLORS.ERROR"
      @click.once="handleMessageDelete"
    />
    <IconBtn
      v-tooltip:start="t('tooltip.detail')"
      icon="mdi-eye"
      :variant="BTN_VARIANTS.PLAIN"
      :color="COLORS.PRIMARY"
      @click="isDetailVisible = true"
    />
  </div>
  <MessageDetailModal
    v-model:is-visible="isDetailVisible"
    :message="props.message"
  />
</template>
