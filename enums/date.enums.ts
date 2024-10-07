export const FORMATS = {
  SHORT_MONTH_AND_YEAR: 'MMM YYYY',
} as const;

export const PERIOD_UNITS = {
  MONTH: 'month',
  YEAR: 'year',
} as const;

export type PeriodUnits = typeof PERIOD_UNITS[keyof typeof PERIOD_UNITS];
