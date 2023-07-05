import Bar from '../Bar';
import clsx from 'clsx';
import React, { ReactNode } from 'react';

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

// по умолчанию отображается текущий день

const Histogram = ({ className }: IHistogram) => {

  const activityTime = [2000, 145, 500, 2100, 840, 300, 2];
  const [altitude, maxValue] = getAltitude(activityTime);

  return (
    <div className={clsx(styles.mat, className)}>
      <div className={styles.barsPlace}>
        {altitude.map((bar, index): ReactNode => {
          return <Bar key={index} altitude={bar}/>;
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
            <li className={styles.mat__day}>Пн</li>
            <li className={styles.mat__day}>Вт</li>
            <li className={styles.mat__day}>Ср</li>
            <li className={styles.mat__day}>Чт</li>
            <li className={styles.mat__day}>Пт</li>
            <li className={styles.mat__day}>Сб</li>
            <li className={styles.mat__day}>Вс</li>
          </ul>
        </footer>
      </div>
    </div>
  );
};

export default Histogram;
