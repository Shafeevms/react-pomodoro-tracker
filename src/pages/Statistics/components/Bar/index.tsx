import clsx from 'clsx';

import styles from './index.module.scss';

interface IBar {
  altitude: number,
  isToday?: boolean,
  onClick: () => void
}

const Bar = ({ altitude, isToday, onClick }: IBar) => {
  const backgroundColor = (): string => {
    if (isToday) {
      return 'tomato';
    }
    if (altitude <= 3) {
      return 'gray';
    }
    return 'coral';
  };

  return (
    <div
      className={clsx(styles.bar, styles[backgroundColor()])}
      onClick={onClick}
      style={{ height: altitude === 0 ? 1 + '%' : altitude + '%' }}
    >
    </div>
  );
};
// magic Number 1% чтобы возвышался минимальный размер бара )))

export default Bar;
