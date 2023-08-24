import { RootState } from '../../../store/types';
import { getInitialDailyStat } from '../../../helpers/statistics';

export const selectStatistics = (state: RootState) => {
  const { day, week } = state.calendar;

  if (!state.statistics[`${day}-${week}`]) {
    return getInitialDailyStat();
  }
  return state.statistics[`${day}-${week}`];
};
