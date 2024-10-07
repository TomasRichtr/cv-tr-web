import type { VForm } from 'vuetify/components';
import { cloneDeep } from 'lodash-es';
import { DEFAULT_FORM } from '~/constants/contact_form.constants';
import { useShowNotification } from '~/composables/notification_alert.composables';
import { useEndpoints } from '~/composables/endpoints.composables';
import { API_ENDPOINTS } from '~/enums/api.enums';
import type { Message, NewMessage } from '~/types/message.types';

export const useMessageApi = () => {
  const contactFormRef = ref<typeof VForm>();

  const form = ref<NewMessage>(cloneDeep(DEFAULT_FORM));

  const isValid = ref<boolean>(false);

  const { showSuccess } = useShowNotification();

  const { apiMutate } = useEndpoints();

  const { t } = useTranslations();

  const submitContactMessage = async () => {
    if (!isValid.value) return;

    const { success } = await apiMutate<NewMessage, Message>(form.value, API_ENDPOINTS.MESSAGES);
    if (success) {
      form.value = cloneDeep(DEFAULT_FORM);
      contactFormRef.value!.resetValidation();
      showSuccess({ title: t('notification.success'), text: t('notification.messages.successText') });
    }
  };

  return {
    form,
    isValid,
    contactFormRef,
    submitContactMessage,
  };
};
