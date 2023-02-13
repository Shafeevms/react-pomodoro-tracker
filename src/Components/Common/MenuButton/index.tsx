import styles from './index.module.css';


const MenuButton = () => {
  return (
    <button className={styles.button}>
      <img src={'/img/menubutton.png'}/>
    </button>
  );
};

export default MenuButton;
