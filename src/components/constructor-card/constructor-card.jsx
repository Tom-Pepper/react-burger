/**
 * Card component for the Burger Constructor
 */

import React from "react";
import burgerConstructor from "../burger-constructor/burger-constructor.module.css";
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";

function ConstructorCard(props) {
  return(
    <>
      <li className={burgerConstructor.constructor__item}>
        <DragIcon type="primary" />
        <ConstructorElement
          text={props.props.name}
          price={props.props.price}
          thumbnail={props.props.image}
        />
      </li>
    </>
  )
}

export default ConstructorCard;
