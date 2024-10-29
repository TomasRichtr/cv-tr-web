import type { AlertTypes } from '../enums/vuetify.enums';

export interface NotificationAlertProps {
  text?: string;
  title: string;
  type?: AlertTypes;
}
