import clsx from 'clsx';

import styles from './index.module.scss';
import dayjs from 'dayjs';
import { showParsedDuration } from '../../helpers/data.helper';
import { useAppSelector } from '../../store/hooks';
import { selectStatistics } from '../../pages/Statistics/statisticsSlice';


interface IDayData {
  className?: string,
}


// TODO сюда должны передаваться данные из родительского компонента
const capitalisedWord = (word: string): string => word.charAt(0).toUpperCase() + word.slice(1);

const DayData = ({ className }: IDayData) => {

  const statistics = useAppSelector(selectStatistics);
  const currentDay = capitalisedWord(dayjs().format('dddd'));

  return (
    <div className={clsx(styles.dayData, className)}>
      <h2 className={styles.dayData__currentDay}>{currentDay}</h2>
      {statistics?.workTime
        ? <p className={styles.dayData__text}>Вы работали над задачами в течение
          <span className={styles.dayData__spentTime}>{showParsedDuration(statistics?.workTime)}</span>
        </p>
        : <p className={styles.dayData__text}>нет данных</p>
      }
    </div>
  );
};

export default DayData;
