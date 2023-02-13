import React from 'react';
import { createPortal } from 'react-dom';
import { useAppDispatch } from '../store/hooks';
import { deleteTodo } from '../Components/Todos/todosSlice';

import styles from './index.module.scss';


interface IDropDownMenu {
  position: React.MutableRefObject<any>,
  closeMenu: () => void,
  id: string,
}

const DropDownMenu = ({ position, closeMenu, id }: IDropDownMenu) => {
  const dispatch = useAppDispatch();
  const deleteTodoHandler = () => {
    dispatch(deleteTodo(id));
  };

  const menu = document.getElementById('dropdown');

  if (!menu) {
    return null;
  }


  return createPortal(
    <div className={styles.menu} onClick={closeMenu}>
      <div
        className={styles.menu__inner}
        style={
          {
            top: position.current.offsetTop + 30,
            left: position.current.offsetLeft - 40,
          }
        }
      >
        <button className={styles.menu__button}>Увеличить</button>
        <button className={styles.menu__button}>Уменьшить</button>
        <button className={styles.menu__button}>Редактировать</button>
        <button className={styles.menu__button} onClick={deleteTodoHandler}>Удалить</button>
      </div>
    </div>
    , menu);
};

export default DropDownMenu;
