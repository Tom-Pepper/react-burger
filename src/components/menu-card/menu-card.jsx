/**
 * Card component for the Menu list
 */
import React from "react";
import PropTypes from 'prop-types';
import menuCard from "./menu-card.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const MenuCard = ({ onClick, item }) => {

  function handleClick(e) {
    onClick(e, item);
  }

  return (
    <>
      <li className={menuCard.list__item} onClick={handleClick}>
        <div className={menuCard.quantity__tag}>1</div>
        <img src={item.image} alt={item.name} className={menuCard.item__image}/>
        <p className={menuCard.item__price}>
          <span className={'p-1'}>
            {item.price}
          </span>
          <CurrencyIcon type="primary" />
        </p>
        <h3 className={menuCard.item__title}>
          {item.name}
        </h3>
      </li>
    </>
  )
}

MenuCard.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
}

export default MenuCard;
