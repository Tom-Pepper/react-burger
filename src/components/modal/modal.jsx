import React, {useEffect} from "react";
import PropTypes from 'prop-types';
import modalStyles from './modal.module.css';
import ReactDOM from "react-dom";
import ModalOverlay from "../modal-overlay/modal-overlay";
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";

const Modal = ({ onClose, title, ...props }) => {
  const modalContainer = document.querySelector('#modals');
  const children = props.children;

  //Close modal on Esc button
  useEffect(() => {
    function onEscClick (e) {
      if (e.key === 'Escape') {
        onClose();
      }
    }

    document.addEventListener('keydown', onEscClick);
    return () => {
      document.removeEventListener('keydown', onEscClick)
    };
  }, [onClose])

  return ReactDOM.createPortal(
    <>
      <div className={modalStyles.modal__bg} >
        <div className={modalStyles.modal__header}>
          <h3 className={modalStyles.modal__title}>{title}</h3>
          <button className={modalStyles.modal__button} onClick={onClose}>
            <CloseIcon type="primary"/>
          </button>
        </div>
        {children}
      </div>
      <ModalOverlay onClick={onClose}/>
    </>,
    modalContainer
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
}

export default Modal;
