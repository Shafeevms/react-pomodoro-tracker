import Button from '../Common/Button';

import styles from './index.module.scss';

const Form = () => {
  return (
    <form className={styles.form}>
      <input
        className={styles.form__input}
        placeholder='Название задачи'
      />
      <Button text='Добавить'/>
    </form>
  );
};

export default Form;
