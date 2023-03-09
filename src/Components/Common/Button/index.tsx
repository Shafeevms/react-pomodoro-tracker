import clsx from 'clsx';

import styles from './index.module.scss';
import { ThunkAction } from '@reduxjs/toolkit';


export interface IButton {
  text: string,
  className?: string,
  view?: 'green' | 'gray'| 'red' | 'modalRed',
  onClick?: any, //TODO
}

const Index = ({ text, className, view = 'green', onClick }: IButton) => {
  return (
    <button className={clsx(styles.button, styles[view], className)} onClick={onClick}>
      {text}
    </button>
  );
};

export default Index;
