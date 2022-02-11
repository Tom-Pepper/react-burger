import React from "react";
import PropTypes from 'prop-types';
import overlayStyles from './modal-overlay.module.css';

function ModalOverlay({ onClick }) {

  return (
    <div className={overlayStyles.modal__overlay} onClick={onClick}/>
  );
}

ModalOverlay.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default ModalOverlay;
