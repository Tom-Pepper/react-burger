import React from "react";
import orderDetailsStyle from './order-details.module.css';
import PropTypes from "prop-types";
import Modal from "../modal/modal";
import orderCheck from '../../images/order-accepted.svg';
import {CheckMarkIcon} from "@ya.praktikum/react-developer-burger-ui-components";

// @ts-ignore
const OrderDetails = ({ isOpen, onClose, title }) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} title={title}>
        <div className={orderDetailsStyle.order__info_wrapper}>
          <h3 className={orderDetailsStyle.order__number}>012345</h3>
          <div className={orderDetailsStyle.order__text}>
            <p className={orderDetailsStyle.order__desc}>идентификатор заказа</p>
            <div className={orderDetailsStyle.order__checkmark}>
              <img src={orderCheck} alt="Order check image"/>
            </div>
            <p className={orderDetailsStyle.order__info}>
              Ваш заказ начали готовить
              <br/>
              <span className={orderDetailsStyle.order__info_subinfo}>
            Дождитесь готовности на орбитальной станции
          </span>
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
}

OrderDetails.propTypes = {
  props: PropTypes.object
}

export default OrderDetails;
