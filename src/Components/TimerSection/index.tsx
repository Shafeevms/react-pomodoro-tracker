import Header from './header';
import Timer from '../Timer';
import Button from '../Common/Button';

import styles from './index.module.scss';


const TimerSection = () => {
  return (
    <div className={styles.timer}>
      <Header/>
      <div className={styles.timer__grid}>
        <div className={styles.timer__clocks}>
          <Timer status='idle'/>
        </div>
        <div className={styles.timer__addBtn}>
          <Button text='+' view='grayRound'/>
        </div>
        <div className={styles.timer__buttonGroup}>
          <Button text='Старт'/>
          <Button text='Стоп' view='gray'/>
        </div>
      </div>
    </div>
  );
};

export default TimerSection;

