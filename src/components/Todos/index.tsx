import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { deleteTodo, selectTodos, selectTotalTomatoes } from './todosSlice';

import Form from './Form';
import TodoItem from './TodoItem';
import { selectModal, toggleModal } from '../Common/Modal/modalSlice';
import Modal from '../Common/Modal';
import Button from '../Common/Button';


const Todos = () => {
  const todos = useAppSelector(selectTodos);
  const totalTime = useAppSelector(selectTotalTomatoes);
  const dispatch = useAppDispatch();
  const { isModalOpen, id } = useAppSelector(selectModal);

  return (
    <>
      <Form/>
      <ul>
        {todos && todos.map(todoItem => {
          if (!todoItem.id) {
            return;
          }
          const { id } = todoItem;
          return <TodoItem
            key={id}
            todoElement={todoItem}
          />;
        })
        }
      </ul>
      <span>{totalTime} мин</span>
      {isModalOpen &&
        <
          Modal
          title="Удалить задачу"
          button={<Button view='red' text="Удалить" className='mb10' onClick={() => dispatch(deleteTodo(id))}/>}
        />
      }
    </>
  );
};

export default Todos;

