import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import dayjs from 'dayjs';

export interface IStatisticsSlice {
  stops: number,
  timeOnPause: number,
  workTime: number,
  tomatoes: number,
}

const TODAY = dayjs().format('YYYY-MM-DD');

export const initialState: Record<string, IStatisticsSlice> = {
  [TODAY]: {
    stops: 0,
    timeOnPause: 0,
    workTime: 0,
    tomatoes: 0,
  }
}

export const statisticsSlice = createSlice({
  name: 'statistics',
  initialState,
  reducers: {
    workTimeCount: (state) => {
      state[TODAY].workTime += 1;
    },
    timeOnPauseCount: (state) => {
      state[TODAY].timeOnPause += 1;
    },
    stopsCount: (state) => {
      state[TODAY].stops += 1;
    },
    plusTotalTomato: (state) => {
      state[TODAY].tomatoes += 1;
    }
  },
  extraReducers: builder => {
    builder
      .addCase('timerCount/plusMin', (state) => {
        state[TODAY].timeOnPause += 10; // TODO заменить на 60
      })
  }
});

export const {
  workTimeCount,
  timeOnPauseCount,
  stopsCount,
  plusTotalTomato,
} = statisticsSlice.actions;

export default statisticsSlice.reducer;
