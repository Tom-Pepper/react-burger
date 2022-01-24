import React from "react";
import burgerIngs from './burger-ingredients.module.css';
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import MenuCard from "../menu-card/menu-card";
import menuCard from "../menu-card/menu-card.module.css";
import PropTypes from 'prop-types';

function BurgerIngredients(props: any) {

  const [current, setCurrent] = React.useState('one');

  //Renders menu items depending on product's category
  function renderMenu (category: string) {
    return props.props.map((item: any) => {
      if (item.type === category) {
        return (
          <MenuCard key={item._id} props={item}/>
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
  props: PropTypes.array
}

export default BurgerIngredients;
