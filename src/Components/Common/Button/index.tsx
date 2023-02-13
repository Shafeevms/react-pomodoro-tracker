import clsx from 'clsx';

import styles from './index.module.scss';


export enum EButtonColor {
  green = 'green',
  gray = 'gray',
  red = 'red',
  modal_red = 'modal_red'
}

export enum EButtonMargin {
  mb25 = 'mb25',
  default = '',
}

interface IButton {
  text: string,
  view?: EButtonColor,
  mb?: EButtonMargin
}

const Index = ({ text, view = EButtonColor.green, mb = EButtonMargin.default}:IButton) => {

  return (
    <button className={clsx(styles.button, styles[view], styles[mb])}>
      {text}
    </button>
  );
};

export default Index;
