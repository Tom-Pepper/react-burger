import React from "react";
import menuCard from "./menu-card.module.css";
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

function MenuCard(props: any) {

  return (
    <>
        <li className={menuCard.list__item}>
          <div className={menuCard.quantity__tag}>1</div>
          <img src={props.props.image} alt={props.props.name} className={menuCard.item__image}/>
          <p className={menuCard.item__price}>
            <span className={'p-1'}>
              {props.props.price}
            </span>
            <CurrencyIcon type="primary" />
          </p>
          <h3 className={menuCard.item__title}>
            {props.props.name}
          </h3>
        </li>
    </>
  )
}

MenuCard.propTypes = {
  props: PropTypes.object
}

export default MenuCard;
