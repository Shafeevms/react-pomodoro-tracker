import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import isoWeek from 'dayjs/plugin/isoWeek';

dayjs.extend(duration);
dayjs.extend(advancedFormat);
dayjs.extend(isoWeek);

export const HOURS = ['час', 'часа', 'часов'];
export const MINUTES = ['минута', 'минуты', 'минут'];
export const SECONDS = ['секунда', 'секунды', 'секунд'];

export const WEEKDAYS = [
  'Воскресенье',
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
];
export const DAYS = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];

export const todayDayAndWeek = (): string => dayjs().format('d-W');
export const currentWeek = (): number => +dayjs().format('W');
export const currentDay = (): number => dayjs().day();
