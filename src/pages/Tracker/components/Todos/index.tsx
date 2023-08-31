import { useAppDispatch, useAppSelector } from '@store/hooks';
import { deleteTodo, selectTodos } from '../../slices/todosSlice';

import Form from './Form';
import TodoItem from './TodoItem';
import { selectModal } from '@components/Modal/modalSlice';
import Modal from '@components/Modal';
import Button from '@components/Button';
import { selectTotalTomatoes } from '../../selectors/selectTotalTomatoes';


const Todos = () => {
  const todos = useAppSelector(selectTodos);
  const totalTime = useAppSelector(selectTotalTomatoes);
  const dispatch = useAppDispatch();
  const { isModalOpen, id } = useAppSelector(selectModal);

  return (
    <>
      <Form/>
      <ul>
        {todos?.map(todoItem => (
          <TodoItem
            key={todoItem.id}
            todoElement={todoItem}
          />
        ))}
      </ul>
      <span>{totalTime} мин</span>
      {isModalOpen &&
        <Modal
          title="Удалить задачу"
          button={
            <Button
              view='red'
              text="Удалить"
              className='mb10'
              onClick={() => dispatch(deleteTodo(id))}
            />
          }
        />
      }
    </>
  );
};

export default Todos;

