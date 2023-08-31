import { RootState } from '@store/types';

const TIME_FOR_TOMATO = 25;

export const selectTotalTomatoes = (state: RootState) => {
  const totalTomatoes = Object
    .values(state.todos)
    .reduce(
      (acc, todo) => acc + todo.tomatoes,
      0,
    );
  return TIME_FOR_TOMATO * totalTomatoes;
};
