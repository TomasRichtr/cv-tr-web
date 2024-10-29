import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import type { PeriodUnits } from '../enums/date.enums';
import { PERIOD_UNITS } from '../enums/date.enums';

export const useString = () => {
  const { t } = useTranslations();

  const pluralizePeriod = (count: number, period: PeriodUnits) => {
    return `${count} ${count > 1 ? t(`period.${period}s`) : t(`period.${period}`)}`;
  };

  const resolvePeriodLength = (item: { startDate: Dayjs; endDate?: Dayjs }) => {
    const endDate = item.endDate || dayjs();

    const monthsCount = endDate.diff(item.startDate, PERIOD_UNITS.MONTH);
    if (monthsCount >= 12) {
      const yearsCount = endDate.diff(item.startDate, PERIOD_UNITS.YEAR);
      const unfinishedYearMonthsCount = monthsCount % 12;
      const yearString = `${pluralizePeriod(yearsCount, PERIOD_UNITS.YEAR)}`;
      if (unfinishedYearMonthsCount) {
        return `${yearString} ${pluralizePeriod(unfinishedYearMonthsCount, PERIOD_UNITS.MONTH)}`;
      }

      return yearString;
    }

    return `${pluralizePeriod(monthsCount, PERIOD_UNITS.MONTH)}`;
  };

  return {
    resolvePeriodLength,
  };
};
