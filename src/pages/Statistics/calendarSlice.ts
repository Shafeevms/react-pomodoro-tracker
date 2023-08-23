import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';
import { currentDay, currentWeek } from '../../helpers/data.helper';

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
    changeWeek: (state, action: PayloadAction<number>) => {
      state.week = action.payload;
    },
    changeDay: (state, action: PayloadAction<number>) => {
      state.day = action.payload;
    },
  }
});

export const {
  changeWeek,
  changeDay,
} = calendarSlice.actions;

export const selectCalendar = (state:RootState) => state.calendar;


export default calendarSlice.reducer;
