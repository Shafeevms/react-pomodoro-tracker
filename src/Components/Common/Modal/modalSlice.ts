import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../store/store';


export interface IModal {
  isModalOpen: boolean,
  id: string,
}

const initialState: IModal = { isModalOpen: false, id: '' };

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggleModal: (state, action: PayloadAction<IModal>) => {
      const { isModalOpen, id } = action.payload;
      state.isModalOpen = isModalOpen;
      state.id = id;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase('todos/deleteTodo', (state) => {
        state.isModalOpen = false;
        state.id = '';
      });
  }
});

export const {
  toggleModal
} = modalSlice.actions;

export const selectModal = (state: RootState) => state.modal;

export default modalSlice.reducer;
