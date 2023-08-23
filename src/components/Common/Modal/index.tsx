import { createPortal } from 'react-dom';
import { ReactNode } from 'react';
import { useAppDispatch } from '../../../store/hooks';
import { toggleModal } from './modalSlice';

import btnClose from './closebtn.png';

import styles from './index.module.scss';

interface IModal {
  title: string,
  button: ReactNode,
}


const Modal = ({ title, button }: IModal) => {
  const dispatch = useAppDispatch();

  const modal = document.getElementById('modal');
  if (!modal) return null;

  const closeHandler = () => {
    dispatch(toggleModal({ isModalOpen: false, id: '' }));
  }

  return createPortal(
    <div className={styles.mat}>
      <div className={styles.modal}>
        <button className={styles.modal__btnCorner} onClick={closeHandler}>
          <img src={btnClose} alt='button'/>
        </button>
        <h3 className={styles.modal__title}>{title}</h3>
        {button}
        <button className={styles.modal__btnAbort} onClick={closeHandler}>Отменить</button>
      </div>
    </div>, modal
  );
};
export default Modal;
