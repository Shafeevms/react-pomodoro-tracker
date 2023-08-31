import { RootState } from '@store/types';

export const selectDefaultTimerView = (state: RootState) => state.timerView;
