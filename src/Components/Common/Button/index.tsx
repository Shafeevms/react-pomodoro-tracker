import clsx from 'clsx';

import styles from './index.module.scss';


export interface IButton {
  text: string,
  className?: string,
  view?: 'green' | 'gray' | 'red' | 'modalRed' | 'grayRound',
  onClick?: () => void,
}

const Index = ({ text, className, view = 'green', onClick }: IButton) => {
  return (
    <button className={clsx(styles.button, styles[view], className && styles[className])} onClick={onClick}>
      {text}
    </button>
  );
};

export default Index;
