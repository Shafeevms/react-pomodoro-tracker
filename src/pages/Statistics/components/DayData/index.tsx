import clsx from 'clsx';

import { showParsedDuration, WEEKDAYS } from '../../../../helpers/date';
import { useAppSelector } from '../../../../store/hooks';
import { selectStatistics } from '../../slices/statisticsSlice';
import { selectCalendar } from '../../slices/calendarSlice';

import styles from './index.module.scss';

interface IDayData {
  className?: string,
}

const DayData = ({ className }: IDayData) => {

  const { workTime } = useAppSelector(selectStatistics);
  const { day: currentDay } = useAppSelector(selectCalendar);

  return (
    <div className={clsx(styles.dayData, className)}>
      <h2 className={styles.dayData__currentDay}>{WEEKDAYS[currentDay]}</h2>
      {workTime
        ? <p className={styles.dayData__text}>Вы работали над задачами в течение
          <span className={styles.dayData__spentTime}>{showParsedDuration(workTime)}</span>
        </p>
        : <p className={styles.dayData__text}>Нет данных</p>
      }
    </div>
  );
};

export default DayData;
