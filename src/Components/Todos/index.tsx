import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { deleteTodo, selectTodos, selectTotalTomatoes } from './todosSlice';

import Form from './Form';
import TodoItem from './TodoItem';
import { isOpen, selectModal } from '../Common/Modal/modalSlice';
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
          button={<Button text="Удалить" onClick={dispatch(deleteTodo(id))}/>}
          onClose={dispatch(isOpen({ isModalOpen: false, id }))}
        />
      }
    </>
  );
};

export default Todos;
