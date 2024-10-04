import { VForm } from 'vuetify/components';
import { cloneDeep } from 'lodash-es';

import { DEFAULT_FORM } from '~/constants/contact_form.constants';
import { STRINGS } from '~/constants/strings.constants';
import { useShowNotification } from '~/composables/notification_alert.composables';
import { useApi } from '~/composables/api.composables';
import { ApiEndpoints } from '~/enums/api.enums';
import type { Message, NewMessage } from '~/types/message.types';

export const useMessageApi = () => {
  const contactFormRef = ref<typeof VForm>(VForm);

  const form = ref<NewMessage>(cloneDeep(DEFAULT_FORM));

  const isValid = ref<boolean>(false);

  const { showSuccess } = useShowNotification();

  const { mutate } = useApi();

  const submitContactMessage = async () => {
    if (!isValid.value) return;

    const success = await mutate<NewMessage, Message>(form.value, ApiEndpoints.Messages);
    if (success) {
      contactFormRef.value.reset();
      showSuccess({ title: STRINGS.notification.success, text: STRINGS.notification.messages.successText });
    }
  };

  return {
    form,
    isValid,
    contactFormRef,
    submitContactMessage,
  };
};
