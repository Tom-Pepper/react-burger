import React from "react";
import overlayStyles from './modal-overlay.module.css';

function ModalOverlay({ onClick }) {

  return (
    <div className={overlayStyles.modal__overlay} onClick={onClick}/>
  );
}

export default ModalOverlay;
