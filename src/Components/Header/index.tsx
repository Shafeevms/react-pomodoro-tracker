import { Link } from 'react-router-dom';

import styles from './index.module.scss';
import Logo from './tomato.png';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <Link to='/' className={styles.header__link}>
          <img className={styles.header__logo} src={Logo} alt='logo'/>
          <span>pomodoro_box</span>
        </Link>
        <Link to='/statistics' className={styles.header__link}>Статистика</Link>
      </div>
    </header>
  );
};

export default Header;
