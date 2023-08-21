import { createSlice } from '@reduxjs/toolkit';
import dayjs from 'dayjs';
import { RootState } from '../../store/store';

import { todayDayAndWeek } from '../../helpers/data.helper';


export interface IStatisticsSlice {
  stops: number,
  timeOnPause: number,
  workTime: number,
  tomatoes: number,
}

const addCurrentDayToState = (state: Record<string, IStatisticsSlice>) => {
  const TODAY = todayDayAndWeek();

  if (!state[TODAY]) {
    state[TODAY] = {
      stops: 0,
      workTime: 0,
      timeOnPause: 0,
      tomatoes: 0,
    };
  }
  return TODAY;
};


export const initialState: Record<string, IStatisticsSlice> = {
  [todayDayAndWeek()]: {
    stops: 0,
    workTime: 0,
    timeOnPause: 0,
    tomatoes: 0,
  }
};

export const statisticsSlice = createSlice({
  name: 'statistics',
  initialState,
  reducers: {
    workTimeCount: (state) => {
      const TODAY = addCurrentDayToState(state);
      state[TODAY].workTime += 1;
    },
    timeOnPauseCount: (state) => {
      const TODAY = addCurrentDayToState(state);
      state[TODAY].timeOnPause += 1;
    },
    stopsCount: (state) => {
      const TODAY = addCurrentDayToState(state);
      state[TODAY].stops += 1;
    },
    plusTotalTomato: (state) => {
      const TODAY = addCurrentDayToState(state);
      state[TODAY].tomatoes += 1;
    }
  },
  extraReducers: (builder => {
    builder
      .addCase('timerCount/plusMin', (state) => {
        const TODAY = addCurrentDayToState(state);
        state[TODAY].timeOnPause += 10; // TODO заменить на 60
      });
  })
});

export const {
  workTimeCount,
  timeOnPauseCount,
  stopsCount,
  plusTotalTomato,
} = statisticsSlice.actions;

export const selectStatistics = (state: RootState) => state.statistics[todayDayAndWeek()];

export default statisticsSlice.reducer;
