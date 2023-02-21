import clsx from 'clsx';

import styles from './index.module.scss';


interface IButton {
  text: string,
  className?: string,
  view?: 'green' | 'gray'| 'red' | 'modalRed',
  onClick?: () => void,
}

const Index = ({ text, className, view = 'green' }:IButton) => {

  return (
    <button className={clsx(styles.button, styles[view], className)}>
      {text}
    </button>
  );
};

export default Index;
