import { IButton } from '../../../components/Button';
import { createSlice } from '@reduxjs/toolkit';

export interface ITimerSectionView {
  headerColor: 'gray' | 'green' | 'tomato',
  timerStatus: 'started' | 'paused' | 'idle' | 'interval' | 'pausedInterval',
  firstButtonText: 'Старт' | 'Пауза' | 'Продолжить',
  firstButtonView: Pick<IButton, 'view'>,
  secondButtonText: 'Стоп' | 'Сделано' | 'Пропустить',
  secondButtonView: Pick<IButton, 'view'>,
}

const initialState: ITimerSectionView = {
  timerStatus: 'idle',
  headerColor: 'gray',
  firstButtonText: 'Старт',
  firstButtonView: { view: 'green' },
  secondButtonText: 'Стоп',
  secondButtonView: { view: 'gray' },
};

export const timerViewSlice = createSlice({
  name: 'timerView',
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
    pauseInterval: (state) => {
      state.timerStatus = 'pausedInterval';
      state.firstButtonText = 'Продолжить';
      state.secondButtonText = 'Пропустить';
    },
    resumeInterval: (state) => {
      state.timerStatus = 'interval';
      state.headerColor = 'green';
      state.firstButtonText = 'Пауза';
      state.secondButtonText = 'Пропустить';
      state.secondButtonView = { view: 'border-red' };
    },
    fiveMinInterval: (state) => {
      state.timerStatus = 'interval';
      state.headerColor = 'green';
      state.firstButtonText = 'Пауза';
      state.secondButtonText = 'Пропустить';
      state.secondButtonView = { view: 'border-red' };
    },
    reset: (state) => initialState,
  }
});

export const {
  start,
  pause,
  reset,
  fiveMinInterval,
  pauseInterval,
  resumeInterval,
} = timerViewSlice.actions;

export default timerViewSlice.reducer;
