import styles from './index.module.css';
import menuBtn from './menubutton.png';


interface IMenuButton {
  onClick: () => void,
}

const MenuButton = ({ onClick }: IMenuButton) => {
  return (
    <button className={styles.button} onClick={onClick}>
      <img src={menuBtn}/>
    </button>
  );
};

export default MenuButton;
