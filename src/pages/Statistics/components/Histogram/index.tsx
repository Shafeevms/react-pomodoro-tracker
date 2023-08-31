import Bar from '../Bar';
import clsx from 'clsx';
import React from 'react';

import styles from './index.module.scss';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { changeDay, selectCalendar } from '../../slices/calendarSlice';
import { DAYS } from '@helpers/date';
import { selectAltitude } from '../../selectors/selectAltitude';
import { getParsedDuration } from '../../selectors/getParsedDuration';


interface IHistogram {
  className?: string,
}

const markDay = (index: number, day: number): string => day === index ? 'tomato' : '';

const Histogram = ({ className }: IHistogram) => {
  const dispatch = useAppDispatch();
  const { day } = useAppSelector(selectCalendar);
  const { altitude, maxValue } = useAppSelector(selectAltitude);

  const handleClick = (index: number) => {
    dispatch(changeDay(index));
  };

  return (
    <div className={clsx(styles.mat, className)}>
      <div className={styles.barsPlace}>
        {altitude.map((bar, index) => (
          <Bar
            key={`bar-component-${index}`}
            altitude={bar}
            isToday={day === index}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
      <div>
        <ul className={styles.mat__lines}>
          {[0.8, 0.6, 0.4, 0.2].map(
            (factor, index) => <LineItem maxValue={maxValue} factor={factor} key={`line-item-${index}`}/>
          )}
          <li className={styles.mat__linesItem}>
            <div className={clsx(styles.mat__line, styles.mat__line_last)}></div>
          </li>
        </ul>
        <footer className={styles.mat__footer}>
          <ul className={styles.mat__daysList}>
            {
              DAYS.map((currentDay, index) => <li
                onClick={() => handleClick(index)}
                key={`days-map-${index}`}
                className={clsx(styles.mat__day, styles[markDay(index, day)])}
              >
                {currentDay}
              </li>)
            }
          </ul>
        </footer>
      </div>
    </div>
  );
};

const LineItem = ({ maxValue, factor }: { maxValue: number, factor: number }) => {
  return <li className={styles.mat__linesItem}>
    <div className={styles.mat__line}></div>
    <span className={styles.mat__timeGrade}>
      {getParsedDuration(maxValue * factor, true)}
    </span>
  </li>;
};

export default Histogram;
