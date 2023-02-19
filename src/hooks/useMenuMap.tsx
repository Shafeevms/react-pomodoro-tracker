import plus from '../Components/Todos/img/plus.svg';
import minus from '../Components/Todos/img/minus.svg';
import edit from '../Components/Todos/img/edit.svg';
import del from '../Components/Todos/img/delete.svg';
import { useAppDispatch } from '../store/hooks';
import { deleteTodo, plusTomato, minusTomato, divIsEditable } from '../Components/Todos/todosSlice';


export interface IMenuMap {
  name: string,
  action: () => void,
  img: string,
}

interface IUseMenuMap {
  id: string;
}

export const useMenuMap = ({ id }: IUseMenuMap): IMenuMap[] => {
  const makeDivEditable = () => {

  }
  const dispatch = useAppDispatch();
  return [
    {
      img: plus,
      name: 'Увеличить',
      action: () => dispatch(plusTomato(id)),
    },
    {
      img: minus,
      name: 'Уменьшить',
      action: () => dispatch(minusTomato(id)),
    },
    {
      img: edit,
      name: 'Редактировать',
      action: () => dispatch((divIsEditable(id))),
    },
    {
      img: del,
      name: 'Удалить',
      action: () => dispatch(deleteTodo(id))
    }
  ];
};

export default useMenuMap;





