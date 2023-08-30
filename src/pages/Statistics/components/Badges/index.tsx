import { useMemo } from 'react';

import StatDetails from '../StatDetails';
import { useAppSelector } from '@store/hooks';

import { selectStatistics } from '../../selectors/selectStatistics';
import { getParsedDuration } from '../../selectors/getParsedDuration';

import styles from '../../index.module.scss';

const Badges = () => {
  const { workTime, timeOnPause, stops } = useAppSelector(selectStatistics);

  const isTimeSpent = !!workTime;

  const focus = useMemo(() => {
    const totalTimeSpent = workTime + timeOnPause;
    return  workTime ? Math.round((workTime / totalTimeSpent) * 100) : 0;
  }, [workTime, timeOnPause]);

  return <>
    <StatDetails
      className={styles.grid__focus}
      badge={isTimeSpent ? 'focus' : 'focusDefault'}
      data={`${focus}%`}
    />
    <StatDetails
      className={styles.grid__pause}
      badge={isTimeSpent ? 'pause' : 'pauseDefault'}
      data={`${getParsedDuration(timeOnPause, true)}`}
    />
    <StatDetails
      className={styles.grid__stop}
      badge={isTimeSpent ? 'stop' : 'stopDefault'}
      data={`${stops}`}
    />
  </>;
};

export default Badges;
