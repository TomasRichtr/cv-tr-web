import type { VForm } from 'vuetify/components';
import { cloneDeep } from 'lodash-es';
import type { Message, NewMessage } from '../types/message.types';
import { DEFAULT_FORM } from '../constants/contact_form.constants';
import { API_ENDPOINTS } from '../enums/api.enums';

export const useMessageApi = () => {
  const contactFormRef = ref<typeof VForm>();

  const form = ref<NewMessage>(cloneDeep(DEFAULT_FORM));

  const isValid = ref<boolean>(false);

  const { showSuccess } = useShowNotification();

  const { apiCreate, apiQuery, apiDelete, apiUpdate } = useEndpoints();

  const { t } = useTranslations();

  const submitNewMessage = async () => {
    if (!isValid.value) return;

    const { success } = await apiCreate<NewMessage, Message>(form.value, API_ENDPOINTS.MESSAGES);
    if (success) {
      form.value = cloneDeep(DEFAULT_FORM);
      contactFormRef.value!.resetValidation();
      showSuccess({ title: t('notification.success'), text: t('notification.messages.successText') });
    }
  };

  const getMessages = async () => {
    const { success, data } = await apiQuery<Message[]>(API_ENDPOINTS.MESSAGES);
    if (success && data) return data;
    return [];
  };

  const updateMessage = async (id: string, message: Message) => {
    const { success, data } = await apiUpdate<Message, Message>(id, message, API_ENDPOINTS.MESSAGES);
    if (success && data) return data;
    return {};
  };

  const deleteMessage = async (id: string) => {
    const { success, data } = await apiDelete(id, API_ENDPOINTS.MESSAGES);
    if (success && data) return data;
    return null;
  };

  return {
    form,
    isValid,
    contactFormRef,
    submitNewMessage,
    getMessages,
    updateMessage,
    deleteMessage,
  };
};
