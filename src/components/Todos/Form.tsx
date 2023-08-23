import React, { ChangeEvent, SyntheticEvent, useState } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { addTodo } from './todosSlice';

import Button from '../Common/Button';

import styles from './index.module.scss';


const Form = () => {
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();

    dispatch(addTodo(inputValue));
    setInputValue('');
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
    >
      <input
        className={styles.form__input}
        placeholder="Название задачи"
        value={inputValue}
        onChange={handleChange}
      />
      <Button text="Добавить" className={styles.form__button}/>
    </form>
  );
};

export default Form;
