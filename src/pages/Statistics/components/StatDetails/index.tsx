import React from 'react';
import clsx from 'clsx';

import styles from './index.module.scss';
import { getDataByBadge, TBadge } from './data';

interface IStatDetails {
  badge: TBadge,
  data: string,
  className?: string,
}

const StatDetails = ({ data, badge, className }: IStatDetails) => {
  const {
    SVGComponent,
    gridArea,
    title,
    color,
    stroke,
  } = getDataByBadge(badge);

  return (
    <div className={clsx(styles.mat, styles[gridArea], styles[color], className)}>
      <div className={styles.mat__wrapper}>
        <h2>{title}</h2>
        <p className={styles.mat__data}>{data.trim() ? data : '0м'}</p>
      </div>
      {SVGComponent && <SVGComponent stroke={stroke}/>}
    </div>
  );
};

export default StatDetails;
