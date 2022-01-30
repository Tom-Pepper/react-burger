import React from "react";
import ingDetailsStyle from './ingredient-details.module.css';
import Modal from "../modal/modal";
import PropTypes from "prop-types";

// @ts-ignore
const IngredientDetails = ({ isOpen, onClose, title }) => {
  return(
    <>
      <Modal isOpen={isOpen} onClose={onClose} title={title}>

      </Modal>
    </>
  );
}

IngredientDetails.propTypes = {
  props: PropTypes.object
}

export default IngredientDetails;
