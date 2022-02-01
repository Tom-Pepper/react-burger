import React, {useEffect} from "react";
import modalStyles from './modal.module.css';
import ReactDOM from "react-dom";
import ModalOverlay from "../modal-overlay/modal-overlay";
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";

const Modal = ({ isOpen, onClose, title, ...props }) => {
  const modalContainer = document.querySelector('#modals');

  useEffect(() => {
    //Close modal on Esc button
    const onEscClick = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    }

    document.addEventListener('keydown', (e) => {
      onEscClick(e);
    });
    return document.removeEventListener('keydown', (e) => {
      onEscClick(e);
    })
  }, [onClose])

  return ReactDOM.createPortal(
    <>
      {isOpen &&
        (<>
          <div className={modalStyles.modal__bg} >
            <div className={modalStyles.modal__header}>
              <h3 className={modalStyles.modal__title}>{title}</h3>
              <button className={modalStyles.modal__button} onClick={onClose}>
                <CloseIcon type="primary"/>
              </button>
            </div>
            {props.children}
          </div>
          <ModalOverlay onClick={onClose}/>
        </>)
      }
    </>,
    modalContainer
  );
}

export default Modal;
