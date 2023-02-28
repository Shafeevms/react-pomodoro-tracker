import styles from './index.module.scss';

interface IDropDownMenuItem {
  img: string,
  title: string,
  action: any,
}

const DropDownMenuItem = ({ img, action, title }: IDropDownMenuItem) => {

  return (
    <li className={styles.dropItem} onClick={action}>
      <img className={styles.dropItem__img} src={img} alt={title}/>
      <h2>{title}</h2>
    </li>
  );
};

export default DropDownMenuItem;
