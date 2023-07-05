import { createSlice } from '@reduxjs/toolkit';

export interface IStatisticsSlice {
  date: Date,
  stops: number,
  timeOnPause: number,
  workTime: number,
}

export const initialState: IStatisticsSlice = {
  date: new Date(),
  stops: 0,
  timeOnPause: 0,
  workTime: 0,
}

export const statisticsSlice = createSlice({
  name: 'statistics',
  initialState,
  reducers: {

  }
})
