import { RootState } from '@store/types';
import { selectDefaultTimerView } from './selectDefaultTimerView';
import { ITimerSectionView } from '../slices/timerViewSlice';

const viewMap: Record<ITimerSectionView['timerStatus'], string> = {
  started: 'red',
  interval: 'green',
  idle: 'default',
  paused: 'default',
  pausedInterval: 'default',
}

export const selectTimerView = (state: RootState) => {
  const { timerStatus: status } = selectDefaultTimerView(state);

  return viewMap[status];
};
