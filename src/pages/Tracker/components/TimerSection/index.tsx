import Header from './Header';
import Timer from '../Timer';
import Button from '@components/Button';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';

import {
  pause,
  pauseInterval,
  reset,
  resumeInterval,
  start,

} from '../../slices/timerViewSlice';

import {
  plusMin,
  selectDefaultTimerCount,
} from '../../slices/timerCountSlice';

import { selectCurrentTodo } from '../../slices/todosSlice';

import styles from './index.module.scss';
import { plusStops } from '../../../Statistics/slices/statisticsSlice';
import { selectDefaultTimerView } from '../../selectors/selectDefaultTimerView';
import { expired } from '../../actions/expired';

const TimerSection = () => {

  const {
    timerStatus,
    headerColor,
    firstButtonText,
    firstButtonView: { view: firstBtnView },
    secondButtonText,
    secondButtonView: { view: secondBtnView },
  } = useAppSelector(selectDefaultTimerView);

  const { countDownPeriod } = useAppSelector(selectDefaultTimerCount);

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
        dispatch(plusStops());
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
        dispatch(plusStops());
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
      <Header view={headerColor}/>
      <div className={styles.timer__grid}>
        <div className={styles.timer__clocks}>
          <Timer/>
        </div>
        <div className={styles.timer__addBtn}>
          <Button text="+" view="gray-round" onClick={plusBtnClickHandler}/>
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
