import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import todos from '../Components/Todos/todosSlice';
// import counterReducer from '../features/counter/_counterSlice';

export const store = configureStore({
  reducer: {
    todos,
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
