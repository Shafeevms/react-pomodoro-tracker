import styles from './index.module.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className={styles.header}>
      <Link to='/' className={styles.header__link}>
        <img className={styles.header__logo} src='./img/tomato.png'/>
        <span>pomodoro_box</span>
      </Link>
      <Link to='/statistics' className={styles.header__link}>Статистика</Link>
    </div>
  );
};

export default Header;
