import type { DeepReadonly } from 'vue';

export const FORMATS: DeepReadonly<Record<string, string>> = {
  SHORT_MONTH_AND_YEAR: 'MMM YYYY',
};

export type PeriodUnits = 'month' | 'year';

export const PERIOD_UNITS: DeepReadonly<Record<string, PeriodUnits>> = {
  MONTH: 'month',
  YEAR: 'year',
};
