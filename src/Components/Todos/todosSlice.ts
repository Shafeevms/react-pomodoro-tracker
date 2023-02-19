import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from '../../store/store';
import { nanoid } from 'nanoid';


export interface ITodo {
  id: string,
  todo: string,
  tomatoes: number,
  editable: boolean,
}

const initialState: ITodo[] = [];

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<ITodo>) => {
      state.push(action.payload);
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      return state.filter(todo => todo.id !== action.payload);
    },
    plusTomato: (state, action: PayloadAction<string>) => {
      const todoIndex = state.findIndex(todo => todo.id === action.payload);
      if (todoIndex !== -1) {
        const updatedTodo = { ...state[todoIndex], tomatoes: state[todoIndex].tomatoes + 1 };
        state[todoIndex] = updatedTodo;
      }
    },
    minusTomato: (state, action: PayloadAction<string>) => {
      const todoIndex = state.findIndex(todo => todo.id === action.payload);
      if (todoIndex !== -1) {
        const updatedTodo = { ...state[todoIndex], tomatoes: state[todoIndex].tomatoes - 1 };
        state[todoIndex] = updatedTodo;
      }
    },
    divIsEditable: (state, action: PayloadAction<string>) => {
      const todoIndex = state.findIndex(todo => todo.id === action.payload);
      if (todoIndex !== -1) {
        const updatedTodo = { ...state[todoIndex], editable: true };
        state[todoIndex] = updatedTodo;
      }
    },
    divIsNotEditable: (state, action: PayloadAction<string>) => {
      const todoIndex = state.findIndex(todo => todo.id === action.payload);
      if (todoIndex !== -1) {
        const updatedTodo = { ...state[todoIndex], editable: false };
        state[todoIndex] = updatedTodo;
      }
    },
    editTodo: (state, action: PayloadAction<{ todo: string, id: string }>) => {
      const { id, todo } = action.payload;
      const todoIndex = state.findIndex(todo => todo.id === id);
      if (todoIndex !== -1) {
        const updatedTodo = { ...state[todoIndex], todo };
        state[todoIndex] = updatedTodo;
      }
    }
  }
});

export const {
  add,
  deleteTodo,
  plusTomato,
  minusTomato,
  divIsEditable,
  divIsNotEditable,
  editTodo,
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


export const selectTodos = (state: RootState) => state.todos;

export default todosSlice.reducer;
