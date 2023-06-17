import { IButton } from '../Common/Button';
import { createSlice } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from '../../store/store';
import { minusTomato } from '../Todos/todosSlice';

export interface ITimerSection {
  headerColor: 'gray' | 'green' | 'tomato',
  timerStatus: 'started' | 'paused' | 'idle' | 'interval',
  countDownPeriod: number,
  firstButtonText: 'Старт' | 'Пауза' | 'Продолжить',
  firstButtonView: Pick<IButton, 'view'>,
  secondButtonText: 'Стоп' | 'Сделано' | 'Пропустить',
  secondButtonView: Pick<IButton, 'view'>,
  usedTomatoes: number,
}

const initialState: ITimerSection = {
  timerStatus: 'idle',
  headerColor: 'gray',
  countDownPeriod: 5, //25 * 60, // 25 минут в секундах
  firstButtonText: 'Старт',
  firstButtonView: { view: 'green' },
  secondButtonText: 'Стоп',
  secondButtonView: { view: 'gray' },
  usedTomatoes: 0,
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
    pauseInterval: (state) => {
      state.timerStatus = 'paused';
      state.firstButtonText = 'Продолжить';
      state.secondButtonText = 'Пропустить';
    },
    fiveMinInterval: (state) => {
      state.timerStatus = 'interval';
      state.headerColor = 'green';
      state.countDownPeriod = 4; // изменить на 5 * 60
      state.firstButtonText = 'Пауза';
      state.secondButtonText = 'Пропустить';
      state.secondButtonView = { view: 'border-red' };
    },
    reset: () => initialState,
    plusMin: (state) => {
      console.log(1)
      state.countDownPeriod = state.countDownPeriod + 60;
    },
    expired: (state) => {
      // мне нужен стейт todos...
    }
  }
});

export const {
  start,
  pause,
  reset,
  fiveMinInterval,
  plusMin,
  pauseInterval,
} = timerSectionSlice.actions;

export const expired = () => {
  return (dispatch: AppDispatch, getState: () => RootState) => {
    const { id, tomatoes } = Object.values(getState().todos)[0];
    const { timerStatus } = getState().timer;

    if (tomatoes > 1 && timerStatus === 'started') {
      // start 5 min interval;
      dispatch(fiveMinInterval())
      // current tomatoes - 1;
      dispatch(minusTomato(id));
    }
  }
}

export const selectDefaultTimer = (state: RootState) => state.timer;

export default timerSectionSlice.reducer;
