import dayjs, { type Dayjs } from 'dayjs';
import type { PeriodUnits } from '~/enums/date.enums';
import { PERIOD_UNITS } from '~/enums/date.enums';

const { t } = useTranslations();

class StringUtils {
  resolvePeriodLength(item: { startDate: Dayjs; endDate?: Dayjs }) {
    const endDate = item.endDate || dayjs();

    const monthsCount = endDate.diff(item.startDate, PERIOD_UNITS.MONTH);
    if (monthsCount >= 12) {
      const yearsCount = endDate.diff(item.startDate, PERIOD_UNITS.YEAR);
      const unfinishedYearMonthsCount = monthsCount % 12;
      const yearString = `${this.pluralizePeriod(yearsCount, PERIOD_UNITS.YEAR)}`;
      if (unfinishedYearMonthsCount) {
        return `${yearString} ${this.pluralizePeriod(unfinishedYearMonthsCount, PERIOD_UNITS.MONTH)}`;
      }

      return yearString;
    }

    return `${this.pluralizePeriod(monthsCount, PERIOD_UNITS.MONTH)}`;
  }

  private pluralizePeriod(count: number, period: PeriodUnits) {
    return `${count} ${count > 1 ? t(`period.${period}s`) : t(`period.${period}`)}`;
  }
}

export default new StringUtils();
