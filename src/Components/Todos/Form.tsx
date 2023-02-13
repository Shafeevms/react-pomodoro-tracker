import React, { useState } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { nanoid } from 'nanoid';
import { addTodo, ITodo } from './todosSlice';

import Button, { EButtonMargin } from '../Common/Button';

import styles from './index.module.scss';


const Form = () => {
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputValue === '') {
      return;
    }
    const todo: ITodo = {
      todo: inputValue,
      tomatoes: 1,
      id: nanoid(),
    }
    dispatch(addTodo(todo));
    setInputValue('');
  }

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}>
      <input
        className={styles.form__input}
        placeholder='Название задачи'
        value={inputValue}
        onChange={handleChange}
      />
      <Button text='Добавить' mb={EButtonMargin.mb25}/>
    </form>
  );
};

export default Form;
