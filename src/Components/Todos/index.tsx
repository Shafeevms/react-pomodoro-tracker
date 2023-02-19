import { useAppSelector } from '../../store/hooks';
import { selectTodos } from './todosSlice';

import Form from './Form';
import TodoItem from './TodoItem';

const Todos = () => {
  const todos = useAppSelector(selectTodos);

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
    </>
  );
};

export default Todos;
