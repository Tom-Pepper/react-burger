/**
 * Card component for the Burger Constructor
 */

import React from "react";
import burgerConstructor from "../burger-constructor/burger-constructor.module.css";
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";

function ConstructorCard({ item }) {
  return(
    <>
      <li className={burgerConstructor.constructor__item}>
        <DragIcon type="primary" />
        <ConstructorElement
          text={item.name}
          price={item.price}
          thumbnail={item.image}
        />
      </li>
    </>
  )
}

export default ConstructorCard;
