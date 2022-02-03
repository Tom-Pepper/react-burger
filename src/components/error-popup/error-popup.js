import React from "react";
import PropTypes from 'prop-types';
import errModalStyles from './error-popup.module.css';

const ErrorPopup = ({ text }) => {
  return (
    <div className={errModalStyles.info_wrapper}>
      {text}
    </div>
  );
}

ErrorPopup.propTypes = {
  text: PropTypes.string.isRequired
}

export default ErrorPopup;
