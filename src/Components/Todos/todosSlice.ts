import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';


export interface ITodo {
  id: string,
  todo: string,
  tomatoes: number,
};

const initialState: ITodo[] = [];

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<ITodo>) => {
      state.push(action.payload);
    }
  }
});

export const { addTodo } = todosSlice.actions;

export const todosState = (state: RootState) => state.todos;

export default todosSlice.reducer;
