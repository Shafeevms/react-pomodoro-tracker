import dayjs from 'dayjs';
import { IStatisticsSlice } from '../pages/Statistics/slices/statisticsSlice';

const HOURS = ['час', 'часа', 'часов'];
const MINUTES = ['минута', 'минуты', 'минут'];
const SECONDS = ['секунда', 'секунды', 'секунд'];

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

export const declOfNum = (number: number, words: string[]): string => {
  return words[(number % 100 > 4 && number % 100 < 20)
    ? 2
    : [2, 0, 1, 1, 1, 2][(number % 10 < 5)
      ? Math.abs(number) % 10
      : 5]];
};

type TUnit = 'ч' | 'м' | 'с';
const fromMap: Record<TUnit, string[]> = {
  'ч': HOURS,
  'м': MINUTES,
  'с': SECONDS,
}

export const showParsedDuration = (seconds: number, isNamingShort?: boolean): string => {
  const getDurationWithUnits = (num: number | string, unit: TUnit) => {
    return (+num !== 0)
      ? `${num}${isNamingShort
        ? unit
        : ' ' + declOfNum(+num, fromMap[unit])}`
      : '';
  }

  const durationObject = dayjs.duration(seconds, 'seconds').format('H-m-s');

  const [HH, MM, SS] = durationObject.split('-');

  return `${getDurationWithUnits(HH, 'ч')} ${getDurationWithUnits(MM, 'м')} ${getDurationWithUnits(SS, 'с')}`;
};

export const todayDayAndWeek = (): string => dayjs().format('d-W');
export const currentWeek = (): number => +dayjs().format('W');
export const currentDay = (): number => dayjs().day();

export const findDataFromPresentWeek = (object: Record<string, IStatisticsSlice>, week: number) => {
  const filteredData: Record<string, IStatisticsSlice> = {};
  const separatedWeek = (date: string) => +date.split('-')[1];
  const weekWorkData: number[] = [];

  for (let date in object) {
    if (separatedWeek(date) === week) {
      filteredData[String(date)] = object[date];
    }
  }

  if (Object.keys(filteredData).length === 0) {
    return new Array(7).fill(0);
  }

  for (let i = 0; i <= 6; i++) {
    const dayStatistics =
      Object
        .entries(filteredData)
        .find(el => el[0] === `${i}-${week}`);
    dayStatistics
      ? weekWorkData.push(dayStatistics[1].workTime)
      : weekWorkData.push(0);
  }
  return weekWorkData;
};
