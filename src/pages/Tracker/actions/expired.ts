import { AppDispatch, RootState } from '@store/types';
import { deleteTodo, minusTomato } from '../slices/todosSlice';
import { plusTotalTomato } from '@statistics/slices/statisticsSlice';
import { fiveMinInterval, reset, start } from '../slices/timerViewSlice';

export const expired = () => {
  return (dispatch: AppDispatch, getState: () => RootState) => {
    const { todos, timerView } = getState();

    const [{ id, tomatoes }] = Object.values(todos);
    const { timerStatus } = timerView;

    if (tomatoes === 1) {
      if (timerStatus === 'started' || timerStatus === 'paused') {
        dispatch(reset());
        dispatch(deleteTodo(id));
        dispatch(plusTotalTomato());
      }
      if (timerStatus === 'interval' || timerStatus === 'pausedInterval') {
        dispatch(reset());
        dispatch(start());
      }
    }

    if (tomatoes > 1) {
      if (timerStatus === 'started') {
        dispatch(fiveMinInterval());
        dispatch(minusTomato(id));
        dispatch(plusTotalTomato());
      }
      if (timerStatus === 'paused') {
        dispatch(minusTomato(id));
        dispatch(plusTotalTomato());
        dispatch(reset());
        dispatch(start());
      }
      if (timerStatus === 'interval') {
        dispatch(reset());
        dispatch(start());
      }
    }
  };
};
