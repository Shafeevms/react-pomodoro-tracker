import { Link } from 'react-router-dom';

import styles from './index.module.scss';

// TODO: import Logo from './img/tomato.png + additional.d.ts (telegram)
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <Link to='/' className={styles.header__link}>
          <img className={styles.header__logo} src='./img/tomato.png' alt='logo'/>
          <span>pomodoro_box</span>
        </Link>
        <Link to='/statistics' className={styles.header__link}>Статистика</Link>
      </div>
    </header>
  );
};

export default Header;
