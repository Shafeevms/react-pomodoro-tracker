import { Action, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';

import todos from '../Components/Todos/todosSlice';
import modal from '../Components/Common/Modal/modalSlice';
import timerView from '../Components/TimerSection/timerSectionViewSlice';
import timerCount from '../Components/TimerSection/timerSectionCountSlice';
import statistics from '../pages/Statistics/statisticsSlice';

import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

export const rootReducer = combineReducers({
  todos,
  modal,
  timerView,
  timerCount,
  statistics,
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
