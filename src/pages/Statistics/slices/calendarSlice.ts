import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { currentDay, currentWeek } from '../../../helpers/date';
import { RootState } from '../../../store/types';

export interface ICalendarSlice {
  day: number,
  week: number,
}

const initialState: ICalendarSlice = {
  day: currentDay(),
  week: currentWeek(),
}

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    changeWeek: (state, action: PayloadAction<number | undefined>) => {
      state.week = action.payload ?? currentWeek();
    },
    changeDay: (state, action: PayloadAction<number | undefined>) => {
      state.day = action.payload ?? currentDay();
    },
  }
});

export const {
  changeWeek,
  changeDay,
} = calendarSlice.actions;

export const selectCalendar = (state: RootState) => state.calendar;


export default calendarSlice.reducer;
