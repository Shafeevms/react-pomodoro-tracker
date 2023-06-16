import { useAppSelector } from '../../store/hooks';
import { selectCurrentTodo } from '../Todos/todosSlice';
import clsx from 'clsx';

import styles from './index.module.scss';

interface IHeader {
    view: 'tomato' | 'gray' | 'green'
}

const Header = ({ view }: IHeader) => {
  const currentTodo = useAppSelector(selectCurrentTodo);

  return (
    <header className={clsx(styles.header, styles[view])}>
      <h3>{currentTodo?.todo || 'Нет задач'}</h3>
      <h3>{currentTodo?.todo ? `Помидор ${currentTodo?.tomatoes}`: ''}</h3>
    </header>
  );
};

export default Header;
