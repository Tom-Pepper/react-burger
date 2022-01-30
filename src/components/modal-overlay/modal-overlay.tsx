import React, {useEffect} from "react";
import overlayStyles from './modal-overlay.module.css';
import PropTypes from "prop-types";
import Modal from "../modal/modal";

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

ModalOverlay.propTypes = {
  props: PropTypes.object
}


export default ModalOverlay;
