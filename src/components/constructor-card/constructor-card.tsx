/**
 * Card component for the Burger Constructor
 */

import React from "react";
import PropTypes from "prop-types";
import burgerConstructor from "../burger-constructor/burger-constructor.module.css";
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";

function ConstructorCard(props: any) {
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

ConstructorCard.propTypes = {
  props: PropTypes.object
}

export default ConstructorCard;
