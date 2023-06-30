import Select from '../../Components/SelectWeek';
import DayData from '../../Components/DayData';
import SpentTomatoes from '../../Components/SpentTomatoes';
import StatDetails from '../../Components/StatDetails';

import styles from './index.module.scss';

const Statistics = () => {
  return (
    <div className={styles.grid}>
      <h2 className={styles.grid__title}>Ваша активность</h2>
      <Select className={styles.grid__weeks}/>
      <DayData className={styles.grid__dayData}/>
      <SpentTomatoes className={styles.grid__tomatoes}/>
      <StatDetails className={styles.grid__focus} badge={'focus'} data='some data...' />
      <StatDetails className={styles.grid__pause} badge={'pause'} data='some data...' />
      <StatDetails className={styles.grid__stop} badge={'stop'} data='some data...' />
    </div>
  );
};

export default Statistics;
