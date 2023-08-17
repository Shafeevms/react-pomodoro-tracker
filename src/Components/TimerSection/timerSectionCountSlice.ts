import { expired } from './timerSectionViewSlice';
import { createSlice } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from '../../store/store';

export interface ITimerSectionCount {
  countDownPeriod: number,
  pauseCount: number,
}

const initialState: ITimerSectionCount = {
  countDownPeriod: 10, // TODO заменить 25 * 60, // 25 минут в секундах
  pauseCount: 0,
};

export const timerSectionCountSlice = createSlice({
  name: 'timerCount',
  initialState,
  reducers: {
    secondTick: (state) => {
      state.countDownPeriod -= 1;
    },
    plusMin: (state) => {
      state.countDownPeriod = state.countDownPeriod + 10; // TODO заменить на + 60
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
          state.countDownPeriod = 10;
        } else {
          state.countDownPeriod = 5; // TODO изменить на 5 * 60
        }
      })
      .addCase('timerView/reset', (state) => {
        state.countDownPeriod = 10;
      })
  },
})

export const {
  secondTick,
  plusMin,
} = timerSectionCountSlice.actions;

export const tick = () => {
  return (dispatch: AppDispatch, getState: () => RootState) => {
    const { countDownPeriod } = getState().timerCount;
    if (countDownPeriod === 1) {
      dispatch(expired());
      return;
    }
    dispatch(secondTick());
  }
}

export const selectDefaultTimerCount = (state: RootState) => state.timerCount;

export default timerSectionCountSlice.reducer;
