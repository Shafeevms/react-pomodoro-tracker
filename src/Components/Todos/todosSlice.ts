import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from '../../store/store';
import { nanoid } from 'nanoid';


export interface ITodo {
  id: string,
  todo: string,
  tomatoes: number,
  editable: boolean,
}

const initialState: Record<string, ITodo> = {};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<ITodo>) => {
      const { id } = action.payload;
      state[id] = action.payload;
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      delete state[action.payload];
    },
    plusTomato: (state, action: PayloadAction<string>) => {
      if (state[action.payload].tomatoes < 4) {
        state[action.payload].tomatoes += 1;
      }
    },
    minusTomato: (state, action: PayloadAction<string>) => {
      if (state[action.payload].tomatoes > 0) {
        state[action.payload].tomatoes -= 1;
      }
    },
    setEditable: (state, action: PayloadAction<{ id: string, isEditable: boolean }>) => {
      const { id, isEditable } = action.payload;
      state[id].editable = isEditable;
    },
    editTodo: (state, action: PayloadAction<{ todo: string, id: string }>) => {
      const { id, todo } = action.payload;
      state[id].todo = todo;
    }
  }
});

export const {
  add,
  deleteTodo,
  plusTomato,
  minusTomato,
  editTodo,
  setEditable,
} = todosSlice.actions;

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

export const selectTodos = (state: RootState) => Object.values(state.todos);

export const selectTotalTomatoes = (state: RootState) => {
  const TIME_FOR_TOMATO = 25;
  const totalTomatoes = Object
    .values(state.todos)
    .reduce((acc, todo) => {
    return acc += todo.tomatoes;
  }, 0);
  return TIME_FOR_TOMATO * totalTomatoes;
};

export const selectCurrentTodo = (state: RootState) => Object.values(state.todos)[0];

export default todosSlice.reducer;
