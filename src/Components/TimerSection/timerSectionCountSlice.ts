import { expired, ITimerSectionView } from './timerSectionViewSlice';
import { createSlice } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from '../../store/store';

export interface ITimerSectionCount {
  countDownPeriod: number,
  pauseCount: number,
}

const initialState: ITimerSectionCount = {
  countDownPeriod: 5, //25 * 60, // 25 минут в секундах
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
      state.countDownPeriod = state.countDownPeriod + 60;
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
        state.countDownPeriod = 4; // изменить на 5 * 60
      })
      .addCase('timer/reset', (state) => {
        state.countDownPeriod = 5;
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
    if (countDownPeriod === 0) {
      dispatch(expired());
      return;
    }
    dispatch(secondTick());
  }
}

export const selectDefaultTimerCount = (state: RootState) => state.timerCount;

export default timerSectionCountSlice.reducer;
