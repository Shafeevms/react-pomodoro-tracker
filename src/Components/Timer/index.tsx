import React, { useRef, useState } from 'react';

const TIMER_DISTANCE = 25 * 60;
const ONE_MINUTE = 60;
const ONE_SECOND = 1;

export interface ITimer {
  status: 'started' | 'paused' | 'idle',
}

const Timer = ({ status }: ITimer) => {
  const [count, setCount] = useState(TIMER_DISTANCE);
  const timerRef = useRef(count);

  const countDown = () => {
    const remainMinutes = Math.floor(timerRef.current / ONE_MINUTE);
    const remainSeconds = Math.floor((timerRef.current % ONE_MINUTE) / ONE_SECOND);
    // setCount(timerRef.current -1);

    return {
      remainMinutes,
      remainSeconds
    }
  }

  const { remainMinutes, remainSeconds } = countDown();

  return (
    <>
      {remainMinutes < 10 ? `0${remainMinutes}` : remainMinutes}:
      {remainSeconds < 10 ? `0${remainSeconds}` : remainSeconds}
    </>
  );
};

export default Timer;
