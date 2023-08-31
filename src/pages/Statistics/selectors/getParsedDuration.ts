import dayjs from 'dayjs';
import { HOURS, MINUTES, SECONDS } from '@helpers/date';
import { declOfNum } from '@helpers/declOfNum';

type TUnit = 'ч' | 'м' | 'с';

const fromMap: Record<TUnit, string[]> = {
  'ч': HOURS,
  'м': MINUTES,
  'с': SECONDS,
};

export const getParsedDuration = (seconds: number, isNamingShort?: boolean): string => {
  const getDurationWithUnits = (num: number | string, unit: TUnit) => {
    return (+num !== 0)
      ? `${num}${isNamingShort
        ? unit
        : ' ' + declOfNum(+num, fromMap[unit])}`
      : '';
  };

  const durationObject = dayjs.duration(seconds, 'seconds').format('H-m-s');

  const [HH, MM, SS] = durationObject.split('-');

  return `${getDurationWithUnits(HH, 'ч')} ${getDurationWithUnits(MM, 'м')} ${getDurationWithUnits(SS, 'с')}`;
};
