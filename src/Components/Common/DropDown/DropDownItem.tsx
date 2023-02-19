import styles from './index.module.scss';

interface IDropDownMenuItem {
  img: string,
  name: string,
  action: any,
}

const DropDownMenuItem = ({ img, action, name }: IDropDownMenuItem) => {

  return (
    <li className={styles.dropItem} onClick={action}>
      <img className={styles.dropItem__img} src={img} alt={name}/>
      <h2>{name}</h2>
    </li>
  );
};

export default DropDownMenuItem;
