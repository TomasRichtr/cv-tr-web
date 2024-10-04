import type { Dayjs } from 'dayjs';
import { STRINGS } from '~/constants/translations.constants';
import { Formats } from '~/enums/date.enums';

class DateUtils {
  resolveDateString(date?: Dayjs) {
    return date ? date.format(Formats.ShortMonthAndYear) : STRINGS.period.today;
  }
}

export default new DateUtils();
