import styles from './index.module.scss';
import clsx from 'clsx';

interface IDayData {
  className?: string,
}

const DayData = ({ className }: IDayData) => {
  const currentDay = 'Четверг';
  const spentTime = '9 часов 15 минут';

  return (
    <div className={clsx(styles.dayData, className)}>
      <h2 className={styles.dayData__currentDay}>{currentDay}</h2>
      <p>Вы работали над задачами в течение
        <span className={styles.dayData__spentTime}>{spentTime}</span>
      </p>
    </div>
  );
};

export default DayData;
