import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

import styles from './index.module.scss';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { minusTomato, selectCurrentTodo } from '../Todos/todosSlice';
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
  status: 'started' | 'paused' | 'idle',
  countDownPeriod: number,
}

const Timer = ({ status, countDownPeriod }: ITimer) => {
  const [count, setCount] = useState(countDownPeriod);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const timerRef = useRef<NodeJS.Timer>();
  const dispatch = useAppDispatch();

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

    if (status === 'idle') {
      setCount(countDownPeriod);
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
