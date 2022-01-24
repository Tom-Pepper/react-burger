import React from 'react';
import styles from './app.module.css';
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import { ingredients } from '../../utils/data';
import PropTypes from 'prop-types';

function App() {
  return (
    <>
      <AppHeader />
      <main className={styles.menu__wrapper}>
        <BurgerIngredients props={ingredients}/>
      </main>
    </>
  );
}

App.propTypes = {
  ingredients: PropTypes.any
}

export default App;
