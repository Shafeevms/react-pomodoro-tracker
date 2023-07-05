import clsx from 'clsx';

import styles from './index.module.scss';

interface IDayData {
  className?: string,
}


// показывает общее время потрачнное на выполнение задач за день
// переводить секудны в минуты-часы
const DayData = ({ className }: IDayData) => {
  const currentDay = 'Четверг';
  const spentTime = '9 часов 15 минут';

  return (
    <div className={clsx(styles.dayData, className)}>
      <h2 className={styles.dayData__currentDay}>{currentDay}</h2>
      <p className={styles.dayData__text}>Вы работали над задачами в течение
        <span className={styles.dayData__spentTime}>{spentTime}</span>
      </p>
    </div>
  );
};

export default DayData;
