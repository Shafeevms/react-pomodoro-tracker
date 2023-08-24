import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


import todos from '../pages/Tracker/slices/todosSlice';
import modal from '../components/Modal/modalSlice';
import timerView from '../pages/Tracker/slices/timerViewSlice';
import timerCount from '../pages/Tracker/slices/timerCountSlice';
import statistics from '../pages/Statistics/slices/statisticsSlice';
import calendar from '../pages/Statistics/slices/calendarSlice';
import { transform } from './transforms';

const persistConfig = {
  key: 'root',
  storage,
  transforms: [transform],
};

export const rootReducer = combineReducers({
  todos,
  modal,
  timerView,
  timerCount,
  statistics,
  calendar,
});

const persistedReducer = persistReducer(persistConfig, rootReducer) as typeof rootReducer;

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
});

export const persistor = persistStore(store);
