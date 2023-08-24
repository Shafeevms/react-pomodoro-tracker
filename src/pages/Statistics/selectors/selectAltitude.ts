import { RootState } from '../../../store/types';

const selectWeekWorkData = (state: RootState) => {
  const { week: currentWeek } = state.calendar;

  return Object.entries(state.statistics).reduce(
    (acc: number[], [dayAndWeek, dailyStat]) => {
      const [day, week] = dayAndWeek.split('-');

      if (+week !== currentWeek) {
        return acc;
      }
      acc[+day] += dailyStat.workTime;

      return acc;
    },
    new Array(7).fill(0),
  );
};

export const selectAltitude = (state: RootState) => {
  const weeklyWorkData = selectWeekWorkData(state);

  const maxValue = Math.max(...weeklyWorkData);

  return {
    altitude: weeklyWorkData.map(workData => {
      const num = Math.round((workData / maxValue) * 100);
      return Number.isNaN(num) ? 0 : num;
    }),
    maxValue,
  };
};
