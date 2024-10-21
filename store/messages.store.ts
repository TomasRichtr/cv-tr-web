import { ref } from 'vue';
import type { Message } from '~/types/message.types';

export const useMessagesStore = defineStore('messagesStore', () => {
  const messages = ref<Message[]>([]);

  return { messages };
});
