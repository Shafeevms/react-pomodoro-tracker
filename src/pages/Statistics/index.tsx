import { useEffect } from 'react';

import Select from './components/SelectWeek';
import DayData from './components/DayData';
import SpentTomatoes from './components/SpentTomatoes';
import Badges from './components/Badges';
import Histogram from './components/Histogram';

import { useAppDispatch } from '@store/hooks';
import { changeDay, changeWeek } from './slices/calendarSlice';

import styles from './index.module.scss';

const Statistics = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(changeDay());
    dispatch(changeWeek());
  }, []);

  return (
    <div className={styles.grid}>
      <h2 className={styles.grid__title}>Ваша активность</h2>
      <Select className={styles.grid__weeks}/>
      <DayData className={styles.grid__dayData}/>
      <SpentTomatoes className={styles.grid__tomatoes}/>
      <Badges/>
      <Histogram className={styles.grid__bars}/>
    </div>
  );
};

export default Statistics;
