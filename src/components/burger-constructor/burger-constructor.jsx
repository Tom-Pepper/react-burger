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
import {useSelector} from "react-redux";

const BurgerConstructor = ({ onSubmit }) => {
  const { constructorIngs } = useSelector(state => state.ingredients);
  console.log(constructorIngs)

  const orderIDs = [];
  const withoutBuns = [];

  constructorIngs.forEach(item => {
    if (item.type !== 'bun') {
      withoutBuns.push(item);
    }
  });

  const bun = constructorIngs.find((item) => item.type === 'bun');

  //Renders buns on top and to the bottom
  function renderBun (position, positionName) {
    return <ConstructorElement
      key={bun._id}
      type={position}
      isLocked={true}
      text={bun.name + ` ${positionName}`}
      thumbnail={bun.image}
      price={bun.price}
    />
  }

  //Renders constructor items from the file except buns (temporary)
  function renderIngs () {
    return withoutBuns.map((item) => {
      return <ConstructorCard key={item._id} name={item.name} price={item.price} image={item.image}/>
    })
  }

  //Total sum
  const calculateBurger = React.useMemo(() => {
    if (bun) {
      const bunsTotal = bun.price * 2;
      const ingsTotal = withoutBuns.reduce(function (sum, current) {
        return sum + current.price;
      }, 0);
      return bunsTotal + ingsTotal;
    }
    return 0;
  }, [bun, withoutBuns])

  function handlePlaceOrder (e) {
    orderIDs.push(bun._id);
    orderIDs.push(bun._id);

    for (let item of withoutBuns) {
      orderIDs.push(item._id);
    }

    onSubmit(e, orderIDs);
  }

  return (
    <section className={burgerConstructor.wrapper}>
      <ul className={burgerConstructor.constructor__list}>
        {
          constructorIngs.length > 0 &&
          <>
            <li className={burgerConstructor.lockedItem}>
              {renderBun('top', '(Верх)')}
            </li>
            <div className={burgerConstructor.inner__list}>
              {renderIngs()}
            </div>
            <li className={burgerConstructor.lockedItem}>
              {renderBun('bottom', '(Низ)')}
            </li>
          </>
        }
      </ul>

      <form className={burgerConstructor.constructor__form}>
        <div className={burgerConstructor.summ__wrapper}>
          <p className={burgerConstructor.summ__price}>
            { constructorIngs.length > 0 ? calculateBurger : 0 }
          </p>
          <CurrencyIcon type={"primary"} />
        </div>

        <Button type="primary" size="medium" onClick={handlePlaceOrder}>
          Оформить заказ
        </Button>
      </form>
    </section>
  )
}

BurgerConstructor.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default BurgerConstructor;
