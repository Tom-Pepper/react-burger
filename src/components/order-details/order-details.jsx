import React from "react";
import PropTypes from 'prop-types';
import orderDetailsStyle from './order-details.module.css';
import orderCheck from '../../images/order-accepted.svg';

const OrderDetails = ({ orderNumber }) => {
  return (
    <>
      <div className={orderDetailsStyle.order__info_wrapper}>
        <h3 className={orderDetailsStyle.order__number}>{orderNumber}</h3>
        <div className={orderDetailsStyle.order__text}>
          <p className={orderDetailsStyle.order__desc}>идентификатор заказа</p>
          <div className={orderDetailsStyle.order__checkmark}>
            <img src={orderCheck} alt="Order check"/>
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
    </>
  );
}

OrderDetails.propTypes = {
  orderNumber: PropTypes.number.isRequired
}

export default OrderDetails;
