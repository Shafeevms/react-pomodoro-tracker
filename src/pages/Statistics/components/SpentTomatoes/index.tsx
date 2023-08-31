import clsx from 'clsx';
import tomatoWithData from './tomato_with_data.png';
import tomatoWithoutData from './tomato_no_data.png';

import styles from './index.module.scss';
import { useAppSelector } from '@store/hooks';
import { selectStatistics } from '../../selectors/selectStatistics';
import { declOfNum } from '@helpers/declOfNum';


interface ISpentTomatoes {
  className?: string;
}

const TOMATOES = ['помидор', 'помидора', 'помидоров'];

const SpentTomatoes = ({ className }: ISpentTomatoes) => {
  const { tomatoes } = useAppSelector(selectStatistics);

  return (
    <div className={clsx(styles.mat, className)}>
      {
        tomatoes ?
          <div className={styles.mat__wrapWithData}>
            <div className={styles.mat__tomatoWrapper}>
              <img className={styles.mat__withData} alt="tomato" src={tomatoWithData}/>
              <span className={styles.mat__number}>{tomatoes}</span>
            </div>
            <footer className={styles.mat__footer}>
              { `${tomatoes} ${declOfNum(tomatoes, TOMATOES)}` }
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
