/**
 * Burger constructor component
 * Renders two buns (top and bottom, can not be removed)
 * and ingredients between them
 */

import React from "react";
import PropTypes from 'prop-types';
import burgerConstructor from './burger-constructor.module.css';
import {Button, ConstructorElement, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ConstructorCard from "../constructor-card/constructor-card";

const BurgerConstructor = ({ ingredients, onSubmit }) => {

  //Renders constructor items from the file except buns (temporary)
  function renderIngs () {
    return ingredients.map((item) => {
      if (item.type !== 'bun') {
        return <ConstructorCard key={item._id} name={item.name} price={item.price} image={item.image}/>
      }
    })
  }

  return (
    <section className={burgerConstructor.wrapper}>
      <ul className={burgerConstructor.constructor__list}>
        <li className={burgerConstructor.lockedItem}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text="Краторная булка N-200i (верх)"
            price={200}
            thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
          />
        </li>
        <div className={burgerConstructor.inner__list}>
          {renderIngs()}
        </div>
        <li className={burgerConstructor.lockedItem}>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text="Краторная булка N-200i (низ)"
            price={200}
            thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
          />
        </li>
      </ul>

      <form className={burgerConstructor.constructor__form}>
        <div className={burgerConstructor.summ__wrapper}>
          <p className={burgerConstructor.summ__price}>
            1100
          </p>
          <CurrencyIcon type={"primary"} />
        </div>

        <Button type="primary" size="medium" onClick={onSubmit}>
          Оформить заказ
        </Button>
      </form>
    </section>
  )
}

BurgerConstructor.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    proteins: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    image_mobile: PropTypes.string.isRequired,
    image_large: PropTypes.string.isRequired,
    __v: PropTypes.number,
  })).isRequired,
  onSubmit: PropTypes.func.isRequired,
}

export default BurgerConstructor;
