import dayjs, { type Dayjs } from 'dayjs';
import { PeriodUnits } from '~/enums/date';
import { STRINGS } from '~/constants/strings';

class StringUtils {
  resolvePeriodLength(item: { startDate: Dayjs; endDate?: Dayjs }) {
    const endDate = item.endDate || dayjs();

    const monthsCount = endDate.diff(item.startDate, PeriodUnits.Month);
    if (monthsCount >= 12) {
      const yearsCount = endDate.diff(item.startDate, PeriodUnits.Year);
      const unfinishedYearMonthsCount = monthsCount % 12;
      const yearString = `${this.pluralizePeriod(yearsCount, PeriodUnits.Year)}`;
      if (unfinishedYearMonthsCount) {
        return `${yearString} ${this.pluralizePeriod(unfinishedYearMonthsCount, PeriodUnits.Month)}`;
      }

      return yearString;
    }

    return `${this.pluralizePeriod(monthsCount, PeriodUnits.Month)}`;
  }

  private pluralizePeriod(count: number, period: PeriodUnits) {
    return `${count} ${count > 1 ? STRINGS.period[`${period}s`] : STRINGS.period[period]}`;
  }
}

export default new StringUtils();
