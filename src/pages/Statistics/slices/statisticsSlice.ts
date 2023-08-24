import { createSlice } from '@reduxjs/toolkit';

import { todayDayAndWeek } from '../../../helpers/date';
import { getInitialDailyStat } from '../../../helpers/statistics';

export interface IStatisticsSlice {
  stops: number,
  timeOnPause: number,
  workTime: number,
  tomatoes: number,
}

export const initialState: Record<string, IStatisticsSlice> = {
  [todayDayAndWeek()]: getInitialDailyStat(),
};

export const statisticsSlice = createSlice({
  name: 'statistics',
  initialState,
  reducers: {
    plusWorkTime: (state) => {
      state[todayDayAndWeek()].workTime += 1;
    },
    plusTimeOnPause: (state) => {
      state[todayDayAndWeek()].timeOnPause += 1;
    },
    plusStops: (state) => {
      state[todayDayAndWeek()].stops += 1;
    },
    plusTotalTomato: (state) => {
      state[todayDayAndWeek()].tomatoes += 1;
    }
  },
  extraReducers: (builder => {
    builder
      .addCase('timerCount/plusMin', (state) => {
        state[todayDayAndWeek()].timeOnPause += 10; // TODO заменить на 60
      });
  })
});

export const {
  plusWorkTime,
  plusTimeOnPause,
  plusStops,
  plusTotalTomato,
} = statisticsSlice.actions;

export default statisticsSlice.reducer;
