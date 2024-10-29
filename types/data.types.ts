import type { Dayjs } from 'dayjs';
import type { Skills } from '../enums/skills.enum';
import type { Colors } from '../enums/vuetify.enums';

export interface Experience {
  position: string;
  color: Colors;
  place: string;
  description: string;
  link: string;
  startDate: Dayjs;
  endDate?: Dayjs;
  size: number;
  skills: Skills[];
}

export interface Quote { q?: string; a?: string; h?: string }
