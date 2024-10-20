import type { DeepReadonly } from 'vue';

export const FORMATS: DeepReadonly<Record<string, string>> = {
  SHORT_MONTH_AND_YEAR: 'MMM YYYY',
};

export const PERIOD_UNITS: DeepReadonly<Record<string, string>> = {
  MONTH: 'month',
  YEAR: 'year',
};

export type PeriodUnits = typeof PERIOD_UNITS[keyof typeof PERIOD_UNITS];
