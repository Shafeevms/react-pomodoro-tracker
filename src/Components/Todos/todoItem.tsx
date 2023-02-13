import DropDown from '../../DropDown';

import styles from './index.module.scss';
import { ITodo } from './todosSlice';


interface ITodoItem {
  todoElement: ITodo,
}

const TodoItem = ({ todoElement }: ITodoItem) => {
  const {todo, tomatoes, id} = todoElement;
  return (
    <li className={styles.item}>
      <span className={styles.item__tomato}>{tomatoes}</span>
      <div className={styles.item__todo}>{todo}</div>
      <DropDown id={id}/>
    </li>
  );
};

export default TodoItem;
