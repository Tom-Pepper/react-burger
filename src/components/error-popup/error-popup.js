import React from "react";
import errModalStyles from './error-popup.module.css';

const ErrorPopup = ({ text }) => {
  return (
    <div className={errModalStyles.info_wrapper}>
      {text}
    </div>
  );
}

export default ErrorPopup;
