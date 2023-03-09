import { createPortal } from 'react-dom';
import styles from './index.module.scss';
import btnClose from './closebtn.png';
import { ReactNode } from 'react';


interface IModal {
  title: string,
  button: ReactNode,
  onClose: any, //TODO
}


const Modal = ({ title, button, onClose }: IModal) => {
  const modal = document.getElementById('modal');
  if (!modal) return null;

  return createPortal(
    <div className={styles.mat} onClick={onClose}>
      <div className={styles.modal}>
        <button className={styles.modal__btnAbort} onClick={onClose}>
          <img src={btnClose}/>
        </button>
        <h3>{title}</h3>
        {button}
      </div>
    </div>, modal
  );
};
export default Modal;
