import { Transform } from 'redux-persist/es/types';
import { IStatisticsSlice } from '../pages/Statistics/slices/statisticsSlice';
import { createTransform } from 'redux-persist';
import { RootState } from './types';
import { todayDayAndWeek } from '../helpers/date';
import { getInitialDailyStat } from '../helpers/statistics';

type TTransform = Transform<Record<string, IStatisticsSlice>, Record<string, IStatisticsSlice>>;

export const transform: TTransform = createTransform(
  (inboundState: RootState['statistics']) => {
    const today = todayDayAndWeek();
    const newDay = inboundState[today] ? {} : { [today]: getInitialDailyStat() };

    return { ...inboundState, ...newDay };
  },
  null,
  { whitelist: ['statistics'] },
);
