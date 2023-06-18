import Header from './header';
import Timer from '../Timer';
import Button from '../Common/Button';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

import {
  expired,
  pause,
  pauseInterval,
  plusMin,
  reset,
  resumeInterval,
  selectDefaultTimer,
  start
} from './timerSectionSlice';
import { selectCurrentTodo } from '../Todos/todosSlice';

import styles from './index.module.scss';

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
      case 'interval':
        dispatch(pauseInterval());
        break;
      case 'pausedInterval':
        dispatch(resumeInterval());
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
      case 'paused':
        dispatch(expired());
        break;
      default:
        return;
    }
  }

  const plusBtnClickHandler = () => {
    if (!currentTodo) {
      return;
    }
    dispatch(plusMin());
  }


  return (
    <div className={styles.timer}>
      <Header view={headerColor} status={timerStatus}/>
      <div className={styles.timer__grid}>
        <div className={styles.timer__clocks}>
          <Timer status={timerStatus} countDownPeriod={countDownPeriod}/>
        </div>
        <div className={styles.timer__addBtn}>
          <Button text="+" view="grayRound" onClick={plusBtnClickHandler}/>
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
