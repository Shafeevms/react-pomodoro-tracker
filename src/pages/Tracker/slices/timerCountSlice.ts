import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@store/types';

const COUNTDOWNPERIOD = 10; // TODO заменить 25 * 60, // 25 минут в секундах
export const ONEMINUTE = 10; // TODO заменить на 60
const FIVEMINUTES = 5; // TODO изменить на 5 * 60

export interface ITimerSectionCount {
  countDownPeriod: number,
  pauseCount: number,
}

const initialState: ITimerSectionCount = {
  countDownPeriod: COUNTDOWNPERIOD,
  pauseCount: 0,
};

export const timerCountSlice = createSlice({
  name: 'timerCount',
  initialState,
  reducers: {
    tickSecond: (state) => {
      state.countDownPeriod -= 1;
    },
    plusMin: (state) => {
      state.countDownPeriod = state.countDownPeriod + ONEMINUTE;
    },
  },
  extraReducers: builder => {
    builder
      .addCase('todos/minusTomato', (state) => {
        state.pauseCount += 1;
      })
      .addCase('todos/deleteTodo', (state) => {
        state.pauseCount = 0;
      })
      .addCase('timerView/fiveMinInterval', (state) => {
        if (state.pauseCount % 4 === 0 && state.pauseCount !== 0) {
          state.countDownPeriod = COUNTDOWNPERIOD;
        } else {
          state.countDownPeriod = FIVEMINUTES;
        }
      })
      .addCase('timerView/reset', (state) => {
        state.countDownPeriod = COUNTDOWNPERIOD;
      })

  },
});

export const {
  tickSecond,
  plusMin,
} = timerCountSlice.actions;

export const selectDefaultTimerCount = (state: RootState) => state.timerCount;

export default timerCountSlice.reducer;
