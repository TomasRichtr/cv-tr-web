import type { Dayjs } from 'dayjs';

export interface Experience {
  position: string;
  color: string;
  place: string;
  description: string;
  link: string;
  startDate: Dayjs;
  endDate?: Dayjs;
  size: number;
}
