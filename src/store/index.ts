import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import todos from '../components/Todos/todosSlice';
import modal from '../components/Common/Modal/modalSlice';
import timerView from '../components/TimerSection/timerSectionViewSlice';
import timerCount from '../components/TimerSection/timerSectionCountSlice';
import statistics from '../pages/Statistics/slices/statisticsSlice';
import calendar from '../pages/Statistics/slices/calendarSlice';

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
  calendar,
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
