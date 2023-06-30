import tomatoWithData from './tomato_with_data.png';
import tomatoWithoutData from './tomato_no_data.png';

import styles from './index.module.scss';
import clsx from 'clsx';

interface ISpentTomatoes {
  className?: string
}

const SpentTomatoes = ({ className }: ISpentTomatoes) => {
  return (
    <div className={clsx(styles.mat, className)}>
      <img alt='tomato' src={tomatoWithoutData}/>
      <span className={styles.mat__number}>{2}</span>
      <footer className={styles.mat__footer}>
        2 помидора
      </footer>
    </div>
  )
}

export default SpentTomatoes;
