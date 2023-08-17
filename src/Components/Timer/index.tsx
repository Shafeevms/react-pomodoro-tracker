import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

import { useAppDispatch } from '../../store/hooks';
import { tick } from '../TimerSection/timerSectionCountSlice';
import { timeOnPauseCount, workTimeCount } from '../../pages/Statistics/statisticsSlice';

import styles from './index.module.scss';


const ONE_MINUTE = 60;
const ONE_SECOND = 1;

const countDown = (seconds: number) => {
  const remainMinutes = Math.floor(seconds / ONE_MINUTE);
  const remainSeconds = Math.floor((seconds % ONE_MINUTE) / ONE_SECOND);

  return {
    remainMinutes,
    remainSeconds
  };
};

export interface ITimer {
  status: 'started' | 'paused' | 'idle' | 'interval' | 'pausedInterval',
  countDownPeriod: number,
}

const Timer = ({ status, countDownPeriod }: ITimer) => {
  const [view, setView] = useState('default');
  const timerRef = useRef<NodeJS.Timer>();

  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log(status);
    if (status === 'started' || status === 'interval') {
      timerRef.current = setInterval(() => {
        dispatch(tick());
        if (status === 'started') {
          dispatch(workTimeCount());
        }
      }, 1000);
    }

    if (status === 'paused'
      || status === 'idle'
      || status === 'pausedInterval') {
      clearInterval(timerRef.current);
    }
    return () => {
      clearInterval(timerRef.current);
    };
  }, [status, dispatch]);


  useEffect(() => {
    if (status === 'paused' || status === 'pausedInterval') {
      timerRef.current = setInterval(() => {
        dispatch(timeOnPauseCount());
      }, 1000);
    }

    return () => {
      clearInterval(timerRef.current);
    };
  }, [status, dispatch]);


  useEffect(() => {
    switch (status) {
      case 'started':
        setView('red');
        break;
      case 'interval':
        setView('green');
        break;
      default:
        setView('default');
    }
  }, [status]);


  const { remainMinutes, remainSeconds } = countDown(countDownPeriod);

  return (
    <div className={clsx(styles[view])}>
      {remainMinutes < 10 ? `0${remainMinutes}` : remainMinutes}:
      {remainSeconds < 10 ? `0${remainSeconds}` : remainSeconds}
    </div>
  );
};

export default Timer;
