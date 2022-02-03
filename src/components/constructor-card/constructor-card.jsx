/**
 * Card component for the Burger Constructor
 */

import React from "react";
import PropTypes from 'prop-types';
import burgerConstructor from "../burger-constructor/burger-constructor.module.css";
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";

function ConstructorCard({ name, price, image }) {
  return(
    <>
      <li className={burgerConstructor.constructor__item}>
        <DragIcon type="primary" />
        <ConstructorElement
          text={name}
          price={price}
          thumbnail={image}
        />
      </li>
    </>
  )
}

ConstructorCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
}

export default ConstructorCard;
