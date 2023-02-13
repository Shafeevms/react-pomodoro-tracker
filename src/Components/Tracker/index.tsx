import TIMER from '../TIMER';
import Todos from '../Todos';

import styles from './index.module.scss';

const Tracker = () => {
  return (
    <div className={styles.traker}>
      <section>
        <h2>Ура! Теперь можно начать работать:</h2>
        <ul>
          <li>Выберите категорию и напишите название текущей задачи</li>
          <li>Запустите таймер («помидор»)</li>
          <li>Работайте пока «помидор» не прозвонит</li>
          <li>Сделайте короткий перерыв (3-5 минут)</li>
          <li>
            Продолжайте работать «помидор» за «помидором», пока задача не будут выполнена. Каждые 4 «помидора»
            делайте длинный перерыв (15-30 минут).
          </li>
        </ul>
        <Todos/>
      </section>
      <section>
        <TIMER/>
      </section>
    </div>
  );
};

export default Tracker;
