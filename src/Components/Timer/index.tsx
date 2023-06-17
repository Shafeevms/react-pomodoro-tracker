import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

import styles from './index.module.scss';
import { useAppDispatch } from '../../store/hooks';
import { expired } from '../TimerSection/timerSectionSlice';

const ONE_MINUTE = 60;
const ONE_SECOND = 1;

const countDown = (seconds: number) => {
  const remainMinutes = Math.floor(seconds / ONE_MINUTE);
  const remainSeconds = Math.floor((seconds % ONE_MINUTE) / ONE_SECOND);

  return {
    remainMinutes,
    remainSeconds
  }
}

export interface ITimer {
  status: 'started' | 'paused' | 'idle' | 'interval',
  countDownPeriod: number,
}

const Timer = ({ status, countDownPeriod }: ITimer) => {
  const [count, setCount] = useState(countDownPeriod);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const timerRef = useRef<NodeJS.Timer>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    setCount(countDownPeriod)
  }, [countDownPeriod, status])


  useEffect(() => {

    if (status === 'started') {
      timerRef.current = setInterval(() => {
        setCount(prevCount => prevCount - 1);
      }, 1000);
      if (count === 0) {
        clearInterval(timerRef.current);
        dispatch(expired());
      }
    }
// пришлось сделать такую же функцию  - если сделать if (status === 'started' || status === 'interval')  не работает
    // объясни почему так?

    if (status === 'interval') {
      timerRef.current = setInterval(() => {
        setCount(prevCount => prevCount - 1);
      }, 1000);
      if (count === 0) {
        clearInterval(timerRef.current);
        dispatch(expired());
      }
    }

    return () => {
      clearInterval(timerRef.current);
    }
  }, [status, count])


  const { remainMinutes, remainSeconds } = countDown(count);

  return (
    <div className={clsx(status === 'started' && styles.red)}>
      {remainMinutes < 10 ? `0${remainMinutes}` : remainMinutes}:
      {remainSeconds < 10 ? `0${remainSeconds}` : remainSeconds}
    </div>
  );
};

export default Timer;
