import React, {useEffect, useState} from 'react';
import styles from './app.module.css';
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import Loader from "../loader/loader";
import OrderDetails from "../order-details/order-details";
import IngredientDetails from "../ingredient-details/ingredient-details";
import { API_URL } from '../../utils/constants';

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [orderModal, setOrderModal] = useState(false);
  const [itemModal, setItemModal] = useState({
    isOpen: false,
    item: null
  });

  //Fetch menu from server
  useEffect(() => {
    setIsLoading(true);

    fetch(`${API_URL}/ingredients`)
      .then(res => {
        if(res.ok) {
          return res.json();
        } else {
          return Promise.reject(res.status);
        }
      })
      .then(data => setData(data.data))
      .catch(err => console.log(`Smth went wrong while API fetched: ${err}`))
      .finally(() => setIsLoading(false));

  }, [])

  //Open order modal method
  const openOrderModal = (e) => {
    e.preventDefault();
    setOrderModal(true);
  }

  //Open item modal method
  const openItemModal = (e, item) => {

    e.preventDefault();
    setItemModal({
      isOpen: true,
      item: item
    });
  }

  //Close modal method
  const onCloseModal = () => {
    setOrderModal(false);
    setItemModal({
      isOpen: false,
      item: null
    });
  }

  return (
    <>
      <AppHeader />
      <main className={styles.menu__wrapper}>
        {isLoading ? <Loader /> :
          <BurgerIngredients ingredients={data} onItemClick={openItemModal}/>
        }
        {isLoading ? <Loader /> :
          <BurgerConstructor ingredients={data} onSubmit={openOrderModal}/>
        }
      </main>
      <IngredientDetails
        isOpen={itemModal.isOpen}
        onClose={onCloseModal}
        item={itemModal.item}
      />
      <OrderDetails
        isOpen={orderModal}
        onClose={onCloseModal}
        title={""}
      />
    </>
  );
}

export default App;