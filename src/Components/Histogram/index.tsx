import Bar from '../Bar';
import clsx from 'clsx';
import React, { ReactNode } from 'react';
import dayjs from 'dayjs';

import styles from './index.module.scss';


interface IHistogram {
  className?: string,
}

const getAltitude = (array: number[]): [number[], number] => {
  const maxValue = Math.max(...array);
  while (array.length < 7) {
    array.push(0);
  }
  return [array.map(number => Math.round((number / maxValue) * 100)), maxValue];
};

const DAYS = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];

// нужно получить данные за неделю

const Histogram = ({ className }: IHistogram) => {

  const activityTime = [2000, 145, 500, 2100, 840, 300, 2];
  const [altitude, maxValue] = getAltitude(activityTime);

  const markDay = (index: number): string => dayjs().day() === index ? 'tomato' : '';


  return (
    <div className={clsx(styles.mat, className)}>
      <div className={styles.barsPlace}>
        {altitude.map((bar, index): ReactNode => {
          return <Bar key={index} altitude={bar} isToday={dayjs().day() === index}/>;
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
