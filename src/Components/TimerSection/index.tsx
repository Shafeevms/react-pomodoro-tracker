import Header from './header';
import Timer from '../Timer';
import Button from '../Common/Button';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

import {
  expired,
  pause,
  pauseInterval,
  reset,
  resumeInterval,
  start,
  selectDefaultTimerView,
} from './timerSectionViewSlice';

import {
  plusMin,
  selectDefaultTimerCount,
} from './timerSectionCountSlice';

import { selectCurrentTodo } from '../Todos/todosSlice';

import styles from './index.module.scss';
import { stopsCount } from '../../pages/Statistics/statisticsSlice';

const TimerSection = () => {

  const {
    timerStatus,
    headerColor,
    firstButtonText,
    firstButtonView: { view: firstBtnView },
    secondButtonText,
    secondButtonView: { view: secondBtnView },
  } = useAppSelector(selectDefaultTimerView);

  const {
    pauseCount,
    countDownPeriod,
  } = useAppSelector(selectDefaultTimerCount);

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
        dispatch(stopsCount());
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
        dispatch(stopsCount());
        break;
      case 'interval':
      case 'paused':
      case 'pausedInterval':
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
      <Header view={headerColor} status={timerStatus} pauseCount={pauseCount}/>
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
