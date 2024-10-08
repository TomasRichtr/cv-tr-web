import { createApp } from 'vue';
import AlertComponent from '~/components/shared/NotificationAlert.vue';
import type { NotificationAlertProps } from '~/types/notification_alert.types';
import { ALERT_TYPES } from '~/enums/vuetify.enums';
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
    createNotificationAlert({ type: ALERT_TYPES.SUCCESS, title, text });
  };

  const showFailure = ({ title, text }: Omit<NotificationAlertProps, 'type'>) => {
    createNotificationAlert({ type: ALERT_TYPES.ERROR, title, text });
  };

  return {
    showSuccess,
    showFailure,
  };
};
