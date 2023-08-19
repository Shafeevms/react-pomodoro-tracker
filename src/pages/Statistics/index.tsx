import Select from '../../Components/SelectWeek';
import DayData from '../../Components/DayData';
import SpentTomatoes from '../../Components/SpentTomatoes';
import StatDetails from '../../Components/StatDetails';
import Histogram from '../../Components/Histogram';

import dayjs from 'dayjs';

import styles from './index.module.scss';
import { useAppSelector } from '../../store/hooks';
import { selectStatistics } from './statisticsSlice';
import { showParsedDuration } from '../../helpers/data.helper';


export const TODAY = dayjs().format('YYYY-MM-DD');

const Statistics = () => {
  const { workTime, timeOnPause, stops } = useAppSelector(selectStatistics);

  const totalTimeSpent = workTime + timeOnPause;
  const focus = workTime ? Math.round((workTime / totalTimeSpent) * 100) : 0;

  return (
    <div className={styles.grid}>
      <h2 className={styles.grid__title}>Ваша активность</h2>
      <Select className={styles.grid__weeks}/>
      <DayData className={styles.grid__dayData}/>
      <SpentTomatoes className={styles.grid__tomatoes}/>
      <StatDetails className={styles.grid__focus} badge={'focus'} data={`${focus}%`}/>
      <StatDetails
        className={styles.grid__pause}
        badge={'pause'}
        data={`${showParsedDuration(timeOnPause, true)}`}
      />
      <StatDetails className={styles.grid__stop} badge={'stop'} data={stops}/>
      <Histogram className={styles.grid__bars}/>
    </div>
  );
};

export default Statistics;
