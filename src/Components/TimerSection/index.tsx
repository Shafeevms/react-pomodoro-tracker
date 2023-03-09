import Header from './header';

import styles from './index.module.scss';
import Timer from '../Timer';
import Button from '../Common/Button';


const TimerSection = () => {
  return (
    <div className={styles.timer}>
      <Header/>
      <div className={styles.timer__grid}>
        <div className={styles.timer__clocks}>
          <Timer/>
        </div>
        <div className={styles.timer__buttonGroup}>
          <Button text='Старт'/>
          <Button text='Стоп' view={'gray'}/>
        </div>
      </div>
    </div>
  );
};

export default TimerSection;
