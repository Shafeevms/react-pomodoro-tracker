import clsx from 'clsx';

import styles from './index.module.scss';


export enum EButton {
  green = 'green',
  gray = 'gray',
  red = 'red',
  modal_red = 'modal_red'
}

interface IButton {
  text: string,
  view?: EButton
}

const Index = ({ text, view = EButton.green }:IButton) => {

  return (
    <button className={clsx(styles.button, styles[view])}>
      {text}
    </button>
  );
};

export default Index;
