import React, {useEffect, useState} from 'react';
import styles from './app.module.css';
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import Loader from "../loader/loader";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  //Fetch menu from server
  useEffect(() => {
    setIsLoading(true);

    fetch('https://norma.nomoreparties.space/api/ingredients')
      .then(res => res.json())
      .then(data => setData(data.data))
      .catch(err => console.log(`Smth went wrong while API fetched: ${err}`));

    setIsLoading(false);
  }, [])

  return (
    <>
      <AppHeader />
      <main className={styles.menu__wrapper}>
        {isLoading ? <Loader /> :
          <BurgerIngredients ingredients={data}/>
        }
        {isLoading ? <Loader /> :
          <BurgerConstructor ingredients={data}/>
        }
      </main>
    </>
  );
}

export default App;
