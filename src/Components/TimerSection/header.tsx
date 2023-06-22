import { useAppSelector } from '../../store/hooks';
import { selectCurrentTodo } from '../Todos/todosSlice';
import clsx from 'clsx';

import styles from './index.module.scss';

interface IHeader {
  view: 'tomato' | 'gray' | 'green',
  status: 'started' | 'paused' | 'idle' | 'interval' | 'pausedInterval',
  pauseCount: number,
}

const Header = ({ view, status, pauseCount }: IHeader) => {
  const currentTodo = useAppSelector(selectCurrentTodo);


  const headerText = () => {

    if (!currentTodo) {
      return '';
    }

    switch (status) {
      case 'interval':
      case 'pausedInterval':
        return `Пауза ${pauseCount}`;
      case 'started':
      case 'paused':
      case 'idle':
        return `Помидор ${currentTodo?.tomatoes}`;
    }
  }

  return (
    <header className={clsx(styles.header, styles[view])}>
      <h3>{currentTodo?.todo || 'Нет задач'}</h3>
      <h3>{headerText()}</h3>
    </header>
  );
};

export default Header;
