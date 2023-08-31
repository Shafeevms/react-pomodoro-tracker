import { useEffect, useRef } from 'react';
import { tick } from '@tracker/actions/tick';
import { plusTimeOnPause, plusWorkTime } from '@statistics/slices/statisticsSlice';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { selectDefaultTimerView } from '@tracker/selectors/selectDefaultTimerView';

export const useTimer = () => {
  const { timerStatus: status } = useAppSelector(selectDefaultTimerView);

  const timerRef = useRef<NodeJS.Timer>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log(status);
    if (['started', 'interval'].includes(status)) {
      timerRef.current = setInterval(() => {
        dispatch(tick());
        if (status === 'started') {
          dispatch(plusWorkTime());
        }
      }, 1000);
    }

    if (['paused', 'idle', 'pausedInterval'].includes(status)) {
      clearInterval(timerRef.current);
    }
    return () => {
      clearInterval(timerRef.current);
    };
  }, [status, dispatch]);


  useEffect(() => {
    if (status === 'paused' || status === 'pausedInterval') {
      timerRef.current = setInterval(() => {
        dispatch(plusTimeOnPause());
      }, 1000);
    }

    return () => {
      clearInterval(timerRef.current);
    };
  }, [status, dispatch]);
}
