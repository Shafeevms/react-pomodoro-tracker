import { FocusEvent, KeyboardEvent, SyntheticEvent, useEffect, useRef, useState } from 'react';
import { useAppDispatch } from '../../../../store/hooks';
import { editTodo, ITodo, setEditable } from '../../slices/todosSlice';
import { useMenuMap } from './useMenuMap';

import DropDown from '../../../../components/DropDown';

import styles from './index.module.scss';


interface ITodoItem {
  todoElement: ITodo,
}

const TodoItem = ({ todoElement: { todo, tomatoes, id, editable } }: ITodoItem) => {
  const dispatch = useAppDispatch();

  const divRef = useRef<HTMLDivElement>(null);

  const [text, setText] = useState(todo);

  const menuMap = useMenuMap({ id });

  useEffect(() => {
    if (editable && divRef.current) {
      divRef.current.focus();
    }
  }, [editable]);


  const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (event.target?.innerText) {
      dispatch(editTodo({ id, todo: event.target.innerText }));
      dispatch(setEditable({ id, isEditable: false }));
    }
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.code === 'Enter') {
      const target = event.target as HTMLDivElement;
      dispatch(editTodo({ id, todo: target?.innerText }));
      dispatch(setEditable({ id, isEditable: true }));
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
        onChange={handleInputChange}
        className={styles.item__todo}
      />
      <DropDown menu={menuMap}/>
    </li>
  );
};

export default TodoItem;
