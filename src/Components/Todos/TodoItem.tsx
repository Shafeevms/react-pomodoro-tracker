import { FocusEvent, KeyboardEvent, SyntheticEvent, useEffect, useRef, useState } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { divIsNotEditable, editTodo, ITodo } from './todosSlice';
import useMenuMap from '../../hooks/useMenuMap';

import DropDown from '../Common/DropDown';

import styles from './index.module.scss';


interface ITodoItem {
  todoElement: ITodo,
}

const TodoItem = ({ todoElement }: ITodoItem) => {
  const { todo, tomatoes, id, editable } = todoElement;
  const menuMap = useMenuMap({ id });
  const [text, setText] = useState(todo);
  const divRef = useRef<HTMLDivElement>(null);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (editable && divRef.current) {
      divRef.current.focus();
    }
  }, [editable]);


  const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (event.target?.innerText) {
      dispatch(editTodo({ id, todo: event.target.innerText }));
      dispatch(divIsNotEditable(id));
    }
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.code === 'Enter') {
      const target = event.target as HTMLDivElement;
      dispatch(editTodo({ id, todo: target?.innerText }));
      dispatch(divIsNotEditable(id));
    }
  };

  const handleInputChange = (event: SyntheticEvent<HTMLDivElement>) => {
    const value = event.currentTarget.innerHTML;
    setText(value);
  };

  return (
    <li className={styles.item}>
      <span className={styles.item__tomato}>{tomatoes}</span>
      <div
        onBlur={handleBlur}
        onKeyDown={handleKeyPress}
        ref={divRef}
        contentEditable={editable}
        dangerouslySetInnerHTML={{ __html: text }}
        onInput={handleInputChange}
        className={styles.item__todo}
      >
      </div>
      <DropDown menu={menuMap}/>
    </li>
  );
};

export default TodoItem;
