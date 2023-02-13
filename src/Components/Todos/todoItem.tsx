import MenuButton from '../Common/MenuButton';

import styles from './index.module.scss';

interface ITodoItem {
  tomatoes: number,
  todo: string
}

const TodoItem = ({ todo, tomatoes }: ITodoItem) => {
  return (
    <li className={styles.item}>
      <span className={styles.item__tomato}>{tomatoes}</span>
      <div className={styles.item__todo}>{todo}</div>
      <MenuButton/>
    </li>
  );
};

export default TodoItem;
