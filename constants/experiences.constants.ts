import dayjs from 'dayjs';
import type { Experience } from '~/types/data.types';

export const EXPERIENCES: Experience[] = [
  {
    position: 'Front-end developer',
    color: 'easy',
    place: 'Easy Software / Prague',
    description: `Development of Easy Project, a comprehensive project management tool. Their solutions help 
    organizations manage tasks, resources, and time tracking, enhancing productivity and efficiency.`,
    link: 'https://www.easysoftware.com/',
    startDate: dayjs('2023-10-01'),
    size: 80,
  },
  {
    position: 'Full-stack developer',
    color: 'amio',
    place: 'Amio / Prague',
    description: `Development of messaging platform that integrates multiple communication channels into a single 
    interface. Their solution enables businesses to manage customer interactions across platforms like WhatsApp, 
    Facebook Messenger, and email, improving customer service efficiency.`,
    link: 'https://www.amio.io/',
    startDate: dayjs('2022-04-01'),
    endDate: dayjs('2023-09-30'),
    size: 10,
  },
  {
    position: 'Full-stack developer',
    color: 'equiradar',
    place: 'Equiradar / Prague',
    description: `Developing software solutions for the equine industry. Their platform provides tools for managing 
    horse health, training, and performance data, helping equine professionals optimize care and training processes.`,
    link: 'https://equiradar.com/',
    startDate: dayjs('2021-05-01'),
    endDate: dayjs('2022-08-31'),
    size: 5,
  },
  {
    position: 'Front-end developer',
    color: 'easy',
    place: 'Easy Software / Prague',
    description: `Development of Easy Project, a comprehensive project management tool. Their solutions help 
    organizations manage tasks, resources, and time tracking, enhancing productivity and efficiency.`,
    link: 'https://www.easysoftware.com/',
    startDate: dayjs('2020-10-01'),
    endDate: dayjs('2022-04-30'),
    size: 80,
  },
];