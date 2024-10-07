import type { Dayjs } from 'dayjs';
import { FORMATS } from '~/enums/date.enums';

const { t } = useTranslations();

class DateUtils {
  resolveDateString(date?: Dayjs) {
    return date ? date.format(FORMATS.SHORT_MONTH_AND_YEAR) : t('period.today');
  }
}

export default new DateUtils();
