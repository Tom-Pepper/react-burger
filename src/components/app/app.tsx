import React from 'react';
import styles from './app.module.css';
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import { ingredients } from '../../utils/data';
import PropTypes from 'prop-types';
import BurgerConstructor from "../burger-constructor/burger-constructor";

function App() {
  return (
    <>
      <AppHeader />
      <main className={styles.menu__wrapper}>
        <BurgerIngredients props={ingredients}/>
        <BurgerConstructor props={ingredients}/>
      </main>
    </>
  );
}

export default App;
