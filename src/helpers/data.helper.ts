import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import isoWeek from 'dayjs/plugin/isoWeek';


dayjs.extend(duration);
dayjs.extend(advancedFormat);
dayjs.extend(isoWeek);


const HOURS = ['час', 'часа', 'часов'];
const MINUTES = ['минута', 'минуты', 'минут'];
const SECONDS = ['секунда', 'секунды', 'секунд'];

export const declOfNum = (number: number, words: string[]): string => {
  return words[(number % 100 > 4 && number % 100 < 20)
    ? 2
    : [2, 0, 1, 1, 1, 2][(number % 10 < 5)
      ? Math.abs(number) % 10
      : 5]];
};

export const showParsedDuration = (seconds: number, isNamingShort?: boolean): string => {
  const durationObject = dayjs.duration(seconds, 'seconds').format('H-m-s');
  return durationObject
    .split('-')
    .map((num, index) => {
      if (index === 0 && num !== '0') {
        return `${num}${isNamingShort ? 'ч' : ' ' + declOfNum(+num, HOURS)}`;
      }
      if (index === 1 && num !== '0') {
        return `${num}${isNamingShort ? 'м' : ' ' + declOfNum(+num, MINUTES)}`;
      }
      if (index === 2 && num !== '0') {
        return `${num}${isNamingShort ? 'с' : ' ' + declOfNum(+num, SECONDS)}`;
      }
    })
    .join(' ')
};

export const todayDayAndWeek = (): string => dayjs().format('d-W');
