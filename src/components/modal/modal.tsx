import React from "react";
import modalStyles from './modal.module.css';
import ReactDOM from "react-dom";
import ModalOverlay from "../modal-overlay/modal-overlay";
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

// @ts-ignore
const Modal = ({ isOpen, onClose, title, ...props }) => {
  const modalContainer: Element | null = document.querySelector('#root');

  // @ts-ignore
  return ReactDOM.createPortal(
    <>
      {isOpen &&
        <>
          <div className={modalStyles.modal__bg}>
            <div className={modalStyles.modal__header}>
              <h3 className={modalStyles.modal__title}>{title}</h3>
              <button className={modalStyles.modal__button} onClick={onClose}>
                <CloseIcon type="primary"/>
              </button>
            </div>
            {props.children}
          </div>
          <ModalOverlay onClick={onClose}/>
        </>
      }
    </>,
    // @ts-ignore
    modalContainer
  );
}

Modal.propTypes = {
  props: PropTypes.object
}

export default Modal;
