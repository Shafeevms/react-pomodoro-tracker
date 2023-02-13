import { useAppSelector } from '../../store/hooks';
import { todosState } from './todosSlice';

import Form from './Form';
import TodoItem from './todoItem';


const Todos = () => {
  const todos = useAppSelector(todosState);

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
