import clsx from 'clsx';

import { useAppSelector } from '../../../../store/hooks';
import { selectCurrentTodo } from '../../slices/todosSlice';
import { selectHeaderText } from '../../selectors/selectHeaderText';

import styles from './index.module.scss';

interface IHeader {
  view: 'tomato' | 'gray' | 'green',
}

const Header = ({ view }: IHeader) => {
  const currentTodo = useAppSelector(selectCurrentTodo);
  const text = useAppSelector(selectHeaderText);

  return (
    <header className={clsx(styles.header, styles[view])}>
      <h3>{currentTodo?.todo || 'Нет задач'}</h3>
      <h3>{text}</h3>
    </header>
  );
};

export default Header;
