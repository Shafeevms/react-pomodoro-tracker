import { createSlice } from '@reduxjs/toolkit';

import { findDataFromPresentWeek, todayDayAndWeek } from '../../../helpers/date';
import { RootState } from '../../../store/types';


export interface IStatisticsSlice {
  stops: number,
  timeOnPause: number,
  workTime: number,
  tomatoes: number,
}
const TODAY = todayDayAndWeek();

const addCurrentDayToState = (state: Record<string, IStatisticsSlice>) => {
  /*if (!state[TODAY]) {
    state[TODAY] = {
      stops: 0,
      workTime: 0,
      timeOnPause: 0,
      tomatoes: 0,
    };
  }*/
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
      addCurrentDayToState(state);
      state[TODAY].workTime += 1;
    },
    timeOnPauseCount: (state) => {
      addCurrentDayToState(state);
      state[TODAY].timeOnPause += 1;
    },
    stopsCount: (state) => {
      addCurrentDayToState(state);
      state[TODAY].stops += 1;
    },
    plusTotalTomato: (state) => {
      addCurrentDayToState(state);
      state[TODAY].tomatoes += 1;
    }
  },
  extraReducers: (builder => {
    builder
      .addCase('timerCount/plusMin', (state) => {
        addCurrentDayToState(state);
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


export const selectStatistics = (state: RootState) => {
  const { day, week } = state.calendar;

  if (!state.statistics[`${day}-${week}`]) {
    return {
      stops: 0,
      workTime: 0,
      timeOnPause: 0,
      tomatoes: 0,
    };
  }
  return state.statistics[`${day}-${week}`];
};

export const selectWeekWorkData = (state: RootState) => {
  const { week } = state.calendar;
  return findDataFromPresentWeek(state.statistics, week);
};


export default statisticsSlice.reducer;
