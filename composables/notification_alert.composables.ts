import { createApp } from 'vue';
import AlertComponent from '~/components/shared/NotificationAlert.vue';
import type { NotificationAlertProps } from '~/types/notification_alert.types';
import { AlertTypes } from '~/enums/vuetify.enums';
import { useVuetify } from '~/composables/vuetify.composables';

export const useShowNotification = () => {
  const { vuetifyInstance } = useVuetify();

  const createNotificationAlert = (props: NotificationAlertProps) => {
    const app = createApp(AlertComponent, {
      title: props.title,
      text: props.text,
      type: props.type,
    });

    app.use(vuetifyInstance.value!);
    app.mount('#teleports');
  };

  const showSuccess = ({ title, text }: Omit<NotificationAlertProps, 'type'>) => {
    createNotificationAlert({ type: AlertTypes.Success, title, text });
  };

  const showFailure = ({ title, text }: Omit<NotificationAlertProps, 'type'>) => {
    createNotificationAlert({ type: AlertTypes.Error, title, text });
  };

  return {
    showSuccess,
    showFailure,
  };
};
