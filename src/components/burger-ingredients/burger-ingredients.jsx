/**
 * Menu component
 * Renders whole available burger ingredients
 */
import React from "react";
import PropTypes from 'prop-types';
import burgerIngs from './burger-ingredients.module.css';
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import MenuCard from "../menu-card/menu-card";
import menuCard from "../menu-card/menu-card.module.css";

const BurgerIngredients = ({ ingredients, onItemClick }) => {
  const [current, setCurrent] = React.useState('one');

  //Renders menu items depending on product's category
  function renderMenu (category) {
    return ingredients.map((item) => {
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
  onItemClick: PropTypes.func.isRequired
}

export default BurgerIngredients;
