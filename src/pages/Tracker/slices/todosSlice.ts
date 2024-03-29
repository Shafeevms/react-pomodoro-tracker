import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../store/types';

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
      if (state[action.payload].tomatoes < 5) {
        state[action.payload].tomatoes += 1;
      }
    },
    minusTomato: (state, action: PayloadAction<string>) => {
      if (state[action.payload].tomatoes > 1) {
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

export const selectTodos = (state: RootState) => Object.values(state.todos);

export const selectCurrentTodo = (state: RootState) => Object.values(state.todos)[0];

export default todosSlice.reducer;
