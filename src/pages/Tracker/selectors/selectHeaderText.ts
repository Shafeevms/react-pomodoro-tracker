import { RootState } from '../../../store/types';

import { selectCurrentTodo } from '../slices/todosSlice';
import { selectDefaultTimerView } from './selectDefaultTimerView';
import { selectDefaultTimerCount } from '../slices/timerCountSlice';

export const selectHeaderText = (state: RootState) => {
  const currentTodo = selectCurrentTodo(state);
  const { pauseCount} = selectDefaultTimerCount(state);
  const { timerStatus: status } = selectDefaultTimerView(state);

  if (!currentTodo) {
    return '';
  }

  switch (status) {
    case 'interval':
    case 'pausedInterval':
      return `Пауза ${pauseCount}`;
    case 'started':
    case 'paused':
    case 'idle':
      return `Помидор ${currentTodo?.tomatoes}`;
  }
}
