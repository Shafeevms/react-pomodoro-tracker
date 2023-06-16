import { IButton } from '../Common/Button';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from '../../store/store';

export interface ITimerSection {
  headerColor: 'gray' | 'green' | 'tomato',
  timerStatus: 'started' | 'paused' | 'idle',
  countDownPeriod: number,
  firstButtonText: 'Старт' | 'Пауза' | 'Продолжить',
  firstButtonView: Pick<IButton, 'view'>,
  secondButtonText: 'Стоп' | 'Сделано' | 'Пропустить',
  secondButtonView: Pick<IButton, 'view'>,
}

const initialState: ITimerSection = {
  timerStatus: 'idle',
  headerColor: 'gray',
  countDownPeriod: 5, //25 * 60, // 25 минут в секундах
  firstButtonText: 'Старт',
  firstButtonView: { view: 'green' },
  secondButtonText: 'Стоп',
  secondButtonView: { view: 'gray' },
};

export const timerSectionSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    start: (state) => {
      state.timerStatus = 'started';
      state.headerColor = 'tomato';
      state.firstButtonText = 'Пауза';
      state.secondButtonText = 'Стоп';
      state.secondButtonView = { view: 'border-red' };
    },
    pause: (state) => {
      state.timerStatus = 'paused';
      state.firstButtonText = 'Продолжить';
      state.secondButtonText = 'Сделано';
    },
    reset: () => initialState,
    expired: (state) => {
      // мне нужен стейт todos...
    }
  }
});

export const {
  start,
  pause,
  reset,
} = timerSectionSlice.actions;

export const expired = () => {
  return (dispatch: AppDispatch, getState: () => RootState) => {
    const { tomatoes } = Object.values(getState().todos)[0];

  }
}

export const selectDefaultTimer = (state: RootState) => state.timer;

export default timerSectionSlice.reducer;
