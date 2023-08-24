import { AppDispatch, RootState } from '../../../store/types';
import { tickSecond } from '../slices/timerCountSlice';
import { expired } from './expired';

export const tick = () => {
  return (dispatch: AppDispatch, getState: () => RootState) => {
    const { countDownPeriod } = getState().timerCount;

    if (countDownPeriod === 1) {
      dispatch(expired());
      return;
    }
    dispatch(tickSecond());
  };
};
