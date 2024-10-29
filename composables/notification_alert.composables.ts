import { createApp } from 'vue';
import { ALERT_TYPES } from '../enums/vuetify.enums';
import type { NotificationAlertProps } from '../types/notification_alert.types';
import NotificationAlert from '../components/shared/NotificationAlert.vue';

export const useShowNotification = () => {
  const { vuetifyInstance } = useVuetify();

  const createNotificationAlert = (props: NotificationAlertProps) => {
    const app = createApp(NotificationAlert, {
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
