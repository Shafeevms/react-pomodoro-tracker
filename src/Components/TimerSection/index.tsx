import Header from './header';
import Timer from '../Timer';
import Button from '../Common/Button';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

import styles from './index.module.scss';
import { pause, reset, selectDefaultTimer, start } from './timerSectionSlice';
import { selectCurrentTodo } from '../Todos/todosSlice';


const TimerSection = () => {

  const {
    timerStatus,
    countDownPeriod,
    headerColor,
    firstButtonText,
    firstButtonView: { view: firstBtnView },
    secondButtonText,
    secondButtonView: { view: secondBtnView },
  } = useAppSelector(selectDefaultTimer);

  const dispatch = useAppDispatch();
  const currentTodo = useAppSelector(selectCurrentTodo);

  const firstBtnClickHandler = () => {
    if (!currentTodo) return;

    switch (timerStatus) {
      case 'idle':
      case 'paused':
        dispatch(start());
        break;
      case 'started':
        dispatch(pause());
        break;
      default:
        return;
    }
  }

  const secondBtnClickHandler = () => {

    switch (timerStatus) {
      case 'started':
        dispatch(reset());
        break;
      default:
        return;
    }
  }


  return (
    <div className={styles.timer}>
      <Header view={headerColor}/>
      <div className={styles.timer__grid}>
        <div className={styles.timer__clocks}>
          <Timer status={timerStatus} countDownPeriod={countDownPeriod}/>
        </div>
        <div className={styles.timer__addBtn}>
          <Button text="+" view="grayRound"/>
        </div>
        <div className={styles.timer__buttonGroup}>
          <Button text={firstButtonText} view={firstBtnView} onClick={firstBtnClickHandler}/>
          <Button text={secondButtonText} view={secondBtnView} onClick={secondBtnClickHandler}/>
        </div>
      </div>
    </div>
  );
};

export default TimerSection;
