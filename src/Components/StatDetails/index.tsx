import React from 'react';
import clsx from 'clsx';

import { ReactComponent as clockSVG } from './clock.svg';
import { ReactComponent as ringSVG } from './ring.svg';
import { ReactComponent as stopSVG } from './stop.svg';

import styles from './index.module.scss';


interface IStatDetails {
  badge: 'stop' | 'pause' | 'focus',
  data: string,
  className?: string,
}

interface ISVGComponent {
  SVGComponent: React.ComponentType<any>;
  grid: string;
  title: string;
  color: 'beige' | 'violet' | 'blue' | 'default',
  stroke: string,
}

const componentSVG = (badge: IStatDetails['badge']): ISVGComponent => {

  switch (badge) {
    case 'focus':
      return {
        SVGComponent: ringSVG,
        grid: badge,
        title: 'Фокус',
        color: 'beige',
        stroke: '#FFAE35',
      };
    case 'pause':
      return {
        SVGComponent: clockSVG,
        grid: badge,
        title: 'Время на паузе',
        color: 'violet',
        stroke: '#9C97D7',
      };
    default:
      return {
        SVGComponent: stopSVG,
        grid: badge,
        title: 'Остановки',
        color: 'blue',
        stroke: '#7FC2D7',
      };
  }
};


const StatDetails = ({ data, badge, className }: IStatDetails) => {

  const {
    SVGComponent,
    grid,
    title,
    color,
    stroke
  } = componentSVG(badge);

  return (
    <div className={clsx(styles.mat, styles[grid], styles[color], className)}>
      <h2>{title}</h2>
      <p>{data}</p>
      {SVGComponent && <SVGComponent stroke={stroke}/>}
    </div>
  );
};

export default StatDetails;