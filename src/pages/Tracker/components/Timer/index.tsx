import clsx from 'clsx';

import { useAppSelector } from '@store/hooks';
import { selectRemainTime } from '@tracker/selectors/selectRemainTime';
import { selectTimerView } from '@tracker/selectors/selectTimerView';
import { useTimer } from './useTimer';

import styles from './index.module.scss';

const Timer = () => {

  const { remainMinutes, remainSeconds } = useAppSelector(selectRemainTime);
  const view = useAppSelector(selectTimerView);

  useTimer();

  return (
    <div className={clsx(styles[view])}>
      {remainMinutes < 10 ? `0${remainMinutes}` : remainMinutes}:
      {remainSeconds < 10 ? `0${remainSeconds}` : remainSeconds}
    </div>
  );
};

export default Timer;
