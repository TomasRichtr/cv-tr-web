export const FORMATS = Object.freeze({
  SHORT_MONTH_AND_YEAR: 'MMM YYYY',
}) as const;

export const PERIOD_UNITS = Object.freeze({
  MONTH: 'month',
  YEAR: 'year',
}) as const;

export type PeriodUnits = typeof PERIOD_UNITS[keyof typeof PERIOD_UNITS];
