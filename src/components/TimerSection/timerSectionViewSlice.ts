import { IButton } from '../Common/Button';
import { createSlice } from '@reduxjs/toolkit';
import { deleteTodo, minusTomato } from '../Todos/todosSlice';
import { plusTotalTomato } from '../../pages/Statistics/slices/statisticsSlice';
import { AppDispatch, RootState } from '../../store/types';

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

export const timerSectionViewSlice = createSlice({
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
} = timerSectionViewSlice.actions;

export const expired = () => {
  return (dispatch: AppDispatch, getState: () => RootState) => {
    const { id, tomatoes } = Object.values(getState().todos)[0];
    const { timerStatus } = getState().timerView;

    if (tomatoes === 1) {
      if (timerStatus === 'started' || timerStatus === 'paused') {
        dispatch(reset());
        dispatch(deleteTodo(id));
        dispatch(plusTotalTomato());
      }
      if (timerStatus === 'interval' || timerStatus === 'pausedInterval') {
        dispatch(reset());
        dispatch(start());
      }
    }

    if (tomatoes > 1) {
      if (timerStatus === 'started') {
        dispatch(fiveMinInterval());
        dispatch(minusTomato(id));
        dispatch(plusTotalTomato());
      }
      if (timerStatus === 'paused') {
        dispatch(minusTomato(id));
        dispatch(plusTotalTomato());
        dispatch(reset());
        dispatch(start());
      }
      if (timerStatus === 'interval') {
        dispatch(reset());
        dispatch(start());
      }
    }
  }
};

export const selectDefaultTimerView = (state: RootState) => state.timerView;

export default timerSectionViewSlice.reducer;
