<script setup lang="ts">
import type { Message } from '~/types/message.types';
import { useMessageApi } from '~/composables/messages.composables';
import IconBtn from '~/components/shared/IconBtn.vue';
import { COLORS, VARIANTS } from '~/enums/vuetify.enums';
import { useMessagesStore } from '~/store/messages.store';
import MessageDetailModal from '~/components/admin/MessageDetailModal.vue';

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
    <VTooltip :text="isRead ? t('tooltip.unread') : t('tooltip.read')">
      <template #activator="{ props: tooltipProps }">
        <VCheckbox
          v-bind="tooltipProps"
          v-model="isRead"
          :hide-details="true"
        />
      </template>
    </VTooltip>
    <IconBtn
      icon="mdi-delete"
      :variant="VARIANTS.PLAIN"
      :color="COLORS.ERROR"
      @click.once="handleMessageDelete"
    />
    <IconBtn
      icon="mdi-eye"
      :variant="VARIANTS.PLAIN"
      :color="COLORS.PRIMARY"
      @click="isDetailVisible = true"
    />
  </div>
  <MessageDetailModal
    :is-visible="isDetailVisible"
    :message="props.message"
  />
</template>
