import clsx from 'clsx';

import styles from './index.module.scss';


interface IBar {
  altitude: number,
}

const Bar = ({ altitude }: IBar) => {
  return (
    <div className={clsx(styles.bar)}
         style={{ height: altitude === 0 ? 1 + '%' : altitude + '%', // magic Number 1% чтобы возвышался минимальный размер бара )))
                  backgroundColor: altitude <= 3 ? '#adacac' : ''}}>
    </div>
  );
};

export default Bar;
