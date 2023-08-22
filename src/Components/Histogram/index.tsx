import Bar from '../Bar';
import clsx from 'clsx';
import React, { ReactNode, SyntheticEvent, useEffect, useState } from 'react';
import dayjs from 'dayjs';

import styles from './index.module.scss';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { changeDay, selectCalendar } from '../../pages/Statistics/calendarSlice';
import { selectWeekWorkData } from '../../pages/Statistics/statisticsSlice';


interface IHistogram {
  className?: string,
}

const getAltitude = (array: number[]): [number[], number] => {
  const calcMaxValue = Math.max(...array);
  return [array.map(number => Math.round((number / calcMaxValue) * 100)), calcMaxValue];
};

const DAYS = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];


const Histogram = ({ className }: IHistogram) => {

  const dispatch = useAppDispatch();
  const { day } = useAppSelector(selectCalendar);
  const activityTime = useAppSelector(selectWeekWorkData);

  const [altitude, setAltitude] = useState<number[]>([]);
  const [maxValue, setMaxValue] = useState(0);

  useEffect(() => {
    const [calcAltitude, calcMaxValue] = getAltitude(activityTime);
    setAltitude(calcAltitude);
    setMaxValue(calcMaxValue);

  }, [activityTime])

  const markDay = (index: number): string => day === index ? 'tomato' : '';

  const handleClick = (index: number) => {
    dispatch(changeDay(index));
  }


  return (
    <div className={clsx(styles.mat, className)}>
      <div className={styles.barsPlace}>
        {altitude.map((bar, index): ReactNode => {
          return <Bar
            key={index}
            altitude={bar}
            isToday={day === index}
            onClick={() => handleClick(index)}
          />;
        })}
      </div>
      <div>
        <ul className={styles.mat__lines}>
          <li className={styles.mat__linesItem}>
            <div className={styles.mat__line}></div>
            <span className={styles.mat__timeGrade}>{maxValue * 0.8}</span>
          </li>
          <li className={styles.mat__linesItem}>
            <div className={styles.mat__line}></div>
            <span className={styles.mat__timeGrade}>{maxValue * 0.6}</span>
          </li>
          <li className={styles.mat__linesItem}>
            <div className={styles.mat__line}></div>
            <span className={styles.mat__timeGrade}>{maxValue * 0.4}</span>
          </li>
          <li className={styles.mat__linesItem}>
            <div className={styles.mat__line}></div>
            <span className={styles.mat__timeGrade}>{maxValue * 0.2}</span>
          </li>
          <li className={styles.mat__linesItem}>
            <div className={clsx(styles.mat__line, styles.mat__line_last)}></div>
          </li>
        </ul>
        <footer className={styles.mat__footer}>
          <ul className={styles.mat__daysList}>
            {
              DAYS.map((day, index) => {
                return <li
                  onClick={() => handleClick(index)}
                  key={index}
                  className={clsx(styles.mat__day, styles[markDay(index)])
                  }
                >
                  {day}
                </li>;
              })
            }
          </ul>
        </footer>
      </div>
    </div>
  );
};

export default Histogram;
