import styles from './index.module.scss';

interface IDropDownMenuItem {
  img: string,
  title: string,
  action: () => void,
  testId?: string,
}

const DropDownMenuItem = ({ img, action, title, testId }: IDropDownMenuItem) => {

  return (
    <li className={styles.dropItem} onClick={action} data-testid={testId}>
      <img className={styles.dropItem__img} src={img} alt={title}/>
      <h2>{title}</h2>
    </li>
  );
};

export default DropDownMenuItem;
