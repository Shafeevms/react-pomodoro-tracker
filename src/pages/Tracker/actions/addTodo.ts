import { nanoid } from 'nanoid';
import { AppDispatch } from '@store/types';
import { add, ITodo } from '../slices/todosSlice';

export const addTodo = (inputValue: string) => {
  return (dispatch: AppDispatch) => {
    if (inputValue === '') {
      return;
    }

    const todo: ITodo = {
      todo: inputValue,
      tomatoes: 1,
      id: nanoid(),
      editable: false,
    };
    dispatch(add(todo));
  };
};
