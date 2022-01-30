import React from "react";
import ingDetailsStyle from './ingredient-details.module.css';
import Modal from "../modal/modal";
import PropTypes from "prop-types";

// @ts-ignore
const IngredientDetails = ({ isOpen, onClose, title }) => {
  return(
    <>
      <Modal isOpen={isOpen} onClose={onClose} title={title}>
        <div className={ingDetailsStyle.info_wrapper}>
          <img src="" alt=""/>
          <h4 className={ingDetailsStyle.details__item_name}>
            Биокотлета
          </h4>
          <ul className={ingDetailsStyle.items__list}>
            <li className={ingDetailsStyle.items__item}>
              <p className={ingDetailsStyle.element_text}>Калории</p>
              <p className={ingDetailsStyle.element_quantity}>111</p>
            </li>
            <li className={ingDetailsStyle.items__item}>
              <p className={ingDetailsStyle.element_text}>Белки</p>
              <p className={ingDetailsStyle.element_quantity}>111</p>
            </li>
            <li className={ingDetailsStyle.items__item}>
              <p className={ingDetailsStyle.element_text}>Жиры</p>
              <p className={ingDetailsStyle.element_quantity}>111</p>
            </li>
            <li className={ingDetailsStyle.items__item}>
              <p className={ingDetailsStyle.element_text}>Углеводы</p>
              <p className={ingDetailsStyle.element_quantity}>111</p>
            </li>
          </ul>
        </div>
      </Modal>
    </>
  );
}

IngredientDetails.propTypes = {
  props: PropTypes.object
}

export default IngredientDetails;
