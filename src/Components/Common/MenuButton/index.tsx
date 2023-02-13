import styles from './index.module.css';


interface IMenuButton {
  onClick: () => void,
}

const MenuButton = ({ onClick }: IMenuButton) => {
  return (
    <button className={styles.button} onClick={onClick}>
      <img src={'/img/menubutton.png'}/>
    </button>
  );
};

export default MenuButton;
