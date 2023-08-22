import React from 'react';
import clsx from 'clsx';

import { ReactComponent as clockSVG } from './clock.svg';
import { ReactComponent as ringSVG } from './ring.svg';
import { ReactComponent as stopSVG } from './stop.svg';

import styles from './index.module.scss';


interface IStatDetails {
  badge: 'stop' | 'pause' | 'focus' | 'stopDefault' | 'pauseDefault' | 'focusDefault',
  data: string | number,
  className?: string,
}

interface ISVGComponent {
  SVGComponent: React.ComponentType<any>;
  gridArea: string;
  title: string;
  color: 'beige' | 'violet' | 'blue' | 'default',
  stroke: string,
}

const componentSVG = (badge: IStatDetails['badge']): ISVGComponent => {

  switch (badge) {
    case 'focus':
      return {
        SVGComponent: ringSVG,
        gridArea: badge,
        title: 'Фокус',
        color: 'beige',
        stroke: '#FFAE35',
      };
    case 'focusDefault':
      return {
        SVGComponent: ringSVG,
        gridArea: badge,
        title: 'Фокус',
        color: 'default',
        stroke: '#C4C4C4',
      };
    case 'pause':
      return {
        SVGComponent: clockSVG,
        gridArea: badge,
        title: 'Время на паузе',
        color: 'violet',
        stroke: '#9C97D7',
      };
    case 'pauseDefault':
      return {
        SVGComponent: clockSVG,
        gridArea: badge,
        title: 'Время на паузе',
        color: 'default',
        stroke: '#C4C4C4',
      };
    case 'stop':
      return {
        SVGComponent: stopSVG,
        gridArea: badge,
        title: 'Остановки',
        color: 'blue',
        stroke: '#7FC2D7',
      };
    default: // stopDefault
      return {
        SVGComponent: stopSVG,
        gridArea: badge,
        title: 'Остановки',
        color: 'default',
        stroke: '#C4C4C4',
      };
  }
};

const StatDetails = ({ data, badge, className }: IStatDetails) => {

  const {
    SVGComponent,
    gridArea,
    title,
    color,
    stroke
  } = componentSVG(badge);

  return (
    <div className={clsx(styles.mat, styles[gridArea], styles[color], className)}>
      <div className={styles.mat__wrapper}>
        <h2>{title}</h2>
        <p className={styles.mat__data}>{data === '  ' ? '0м' : data}</p>
      </div>
      {SVGComponent && <SVGComponent stroke={stroke}/>}
    </div>
  );
};

export default StatDetails;
