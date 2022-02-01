import React, {useEffect} from "react";
import overlayStyles from './modal-overlay.module.css';

// @ts-ignore
function ModalOverlay({ onClick }) {

  //Close Modal with Esc button
  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      if (e.keyCode === 27) {
        onClick();
      }
    });
    return document.removeEventListener('keydown', (e) => {
      if (e.keyCode === 27) {
        onClick();
      }
    })
  })

  return (
    <div className={overlayStyles.modal__overlay} onClick={onClick}/>
  );
}

export default ModalOverlay;
