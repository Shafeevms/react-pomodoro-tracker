import clsx from 'clsx';
import tomatoWithData from './tomato_with_data.png';
import tomatoWithoutData from './tomato_no_data.png';

import styles from './index.module.scss';

interface ISpentTomatoes {
  className?: string;
}

const SpentTomatoes = ({ className }: ISpentTomatoes) => {
  const data = 0;
  return (
    <div className={clsx(styles.mat, className)}>
      {
        data ?
          <div className={styles.mat__wrapWithData}>
            <div className={styles.mat__tomatoWrapper}>
              <img className={styles.mat__withData} alt="tomato" src={tomatoWithData}/>
              <span className={styles.mat__number}>{2}</span>
            </div>
            <footer className={styles.mat__footer}>
              2 помидора
            </footer>
          </div>
          : <div className={styles.mat__wrapWithoutData}>
            <img className={styles.mat__withoutData} alt="tomato" src={tomatoWithoutData}/>
          </div>
      }
    </div>
  );
};

export default SpentTomatoes;
