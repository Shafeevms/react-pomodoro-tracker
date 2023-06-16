import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import todos from '../Components/Todos/todosSlice';
import modal from '../Components/Common/Modal/modalSlice';
import timer from '../Components/TimerSection/timerSectionSlice';

export const store = configureStore({
  reducer: {
    todos,
    modal,
    timer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
