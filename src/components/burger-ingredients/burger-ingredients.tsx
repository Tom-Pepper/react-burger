/**
 * Menu component
 * Renders whole available burger ingredients
 */

import React from "react";
import burgerIngs from './burger-ingredients.module.css';
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import MenuCard from "../menu-card/menu-card";
import menuCard from "../menu-card/menu-card.module.css";
import PropTypes from 'prop-types';
import IngredientDetails from "../ingredient-details/ingredient-details";

// @ts-ignore
const BurgerIngredients = ({ ingredients, onItemClick }) => {
  const [current, setCurrent] = React.useState('one');

  //Renders menu items depending on product's category
  function renderMenu (category: string) {
    return ingredients.map((item: any) => {
      if (item.type === category) {
        return (
          <MenuCard key={item._id} item={item} onClick={onItemClick} />
        )
      }
    })
  }

  return(
    <section className={burgerIngs.wrapper}>
      <h2 className={'text text_type_main-large pb-5'}>Соберите бургер</h2>
      <div className={burgerIngs.tab__wrapper}>
        <Tab value="one" active={current === 'one'} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="two" active={current === 'two'} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="three" active={current === 'three'} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>

      <div className={burgerIngs.menu__window}>
        <h3 className={'text text_type_main-medium pb-6'}>
          Булки
        </h3>
        <ul className={menuCard.menu__list}>
          {renderMenu('bun')}
        </ul>

        <h3 className={'text text_type_main-medium pb-6'}>
          Соусы
        </h3>
        <ul className={menuCard.menu__list}>
          {renderMenu('sauce')}
        </ul>

        <h3 className={'text text_type_main-medium pb-6'}>
          Начинки
        </h3>
        <ul className={menuCard.menu__list}>
          {renderMenu('main')}
        </ul>
      </div>
    </section>
  );
}

BurgerIngredients.propTypes = {
  props: PropTypes.object
}

export default BurgerIngredients;
