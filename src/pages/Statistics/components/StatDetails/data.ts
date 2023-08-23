import React from 'react';

import { ReactComponent as clockSVG } from './clock.svg';
import { ReactComponent as ringSVG } from './ring.svg';
import { ReactComponent as stopSVG } from './stop.svg';

export type TBadge = 'stop' | 'pause' | 'focus' | 'stopDefault' | 'pauseDefault' | 'focusDefault'

interface ISVGComponent {
  SVGComponent: React.ComponentType<any>;
  gridArea: string;
  title: string;
  color: 'beige' | 'violet' | 'blue' | 'default',
  stroke: string,
}

export const getDataByBadge = (badge: TBadge): ISVGComponent => {

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
