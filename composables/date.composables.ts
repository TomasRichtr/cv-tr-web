import type { Dayjs } from 'dayjs';
import { FORMATS } from '../enums/date.enums';

export const useDatetime = () => {
  const { t } = useTranslations();

  const resolveDateString = (date?: Dayjs) => {
    return date ? date.format(FORMATS.SHORT_MONTH_AND_YEAR) : t('period.today');
  };

  return {
    resolveDateString,
  };
};
