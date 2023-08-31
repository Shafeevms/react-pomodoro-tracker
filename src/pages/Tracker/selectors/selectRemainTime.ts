import { RootState } from '@store/types';
import { selectDefaultTimerCount } from '../slices/timerCountSlice';

const ONE_MINUTE = 60;
const ONE_SECOND = 1;

export const selectRemainTime = (state: RootState) => {
  const { countDownPeriod: seconds } = selectDefaultTimerCount(state);

  const remainMinutes = Math.floor(seconds / ONE_MINUTE);
  const remainSeconds = Math.floor((seconds % ONE_MINUTE) / ONE_SECOND);

  return {
    remainMinutes,
    remainSeconds
  };
}
