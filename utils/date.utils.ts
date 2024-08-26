import type { Dayjs } from 'dayjs';
import { STRINGS } from '~/constants/strings';
import { Formats } from '~/enums/date.enum';

class DateUtils {
  resolveDateString(date?: Dayjs) {
    return date ? date.format(Formats.ShortMonthAndYear) : STRINGS.period.today;
  }
}

export default new DateUtils();
