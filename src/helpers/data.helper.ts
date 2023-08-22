import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import isoWeek from 'dayjs/plugin/isoWeek';
import { IStatisticsSlice } from '../pages/Statistics/statisticsSlice';


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
    .join(' ');
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
    return weekWorkData.fill(0, 0, 6);
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
