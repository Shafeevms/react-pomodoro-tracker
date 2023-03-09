import styles from './index.module.scss';
import { useAppSelector } from '../../store/hooks';
import { selectCurrentTodo } from '../Todos/todosSlice';

const Header = () => {
  const currentTodo = useAppSelector(selectCurrentTodo);
  return (
    <header className={styles.header}>
      <h3>{currentTodo?.todo || 'Нет задач'}</h3>
      <h3>Помидор 1</h3>
    </header>
  );
};

export default Header;
