import { useAppDispatch } from '@store/hooks';
import { minusTomato, plusTomato, setEditable } from '../../slices/todosSlice';

import plus from './img/plus.svg';
import minus from './img/minus.svg';
import edit from './img/edit.svg';
import del from './img/delete.svg';
import { toggleModal } from '@components/Modal/modalSlice';


export interface IMenuMap {
  name: string,
  action: () => void,
  img: string,
}

interface IUseMenuMap {
  id: string;
}

export const useMenuMap = ({ id }: IUseMenuMap): IMenuMap[] => {
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
      action: () => dispatch((setEditable({ id, isEditable: true }))),
    },
    {
      img: del,
      name: 'Удалить',
      action: () => dispatch(toggleModal({ isModalOpen: true, id }))
    }
  ];
};

