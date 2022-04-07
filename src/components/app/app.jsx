import React, {useEffect, useState} from 'react';
import styles from './app.module.css';
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import Loader from "../loader/loader";
import OrderDetails from "../order-details/order-details";
import IngredientDetails from "../ingredient-details/ingredient-details";
import api from "../../utils/api";
import Modal from "../modal/modal";
import ErrorPopup from "../error-popup/error-popup";

import {MenuContext} from "../../services/menuContext";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [orderModal, setOrderModal] = useState({
    isOpen: false,
    orderNumber: null
  });
  const [itemModal, setItemModal] = useState({
    isOpen: false,
    item: null
  });
  const [errorModal, setErrorModal] = useState({
    isOpen: false,
    title: 'Произошла ошибка',
    text: ''
  })

  //Fetch menu from server
  useEffect(() => {
    setIsLoading(true);

    api.getMenu()
      .then(data => setData(data.data))
      .catch(err => setErrorModal((prevState) => ({
        ...prevState,
        isOpen: true,
        text: `Что-то не то с загрузкой меню с сервера. Попробуйте зайти позже. Ошибка ${err}. ${err.text}`
      })))
      .finally(() => setIsLoading(false));

  }, [])

  //Open order modal method
  const openOrderModal = (e, order) => {
    e.preventDefault();
    api.putOrder(order)
      .then((res) => setOrderModal({
        isOpen: true,
        orderNumber: res.order.number
      }))
      .catch(err => setErrorModal((prevState) => ({
        ...prevState,
        isOpen: true,
        text: `Ошибка передачи заказа. Попробуйте позже. Ошибка ${err}. ${err.text}`
      })))
  }

  //Open item modal method
  const openItemModal = (e, item) => {

    e.preventDefault();
    setItemModal({
      isOpen: true,
      item: item
    });
  }

  //Close all modals method
  const onCloseModal = () => {
    setOrderModal((prevState) => ({
      ...prevState,
      isOpen: false
    }));
    setErrorModal((prevState) => ({
      ...prevState,
      isOpen: false,
      text: ''
    }));
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
          <MenuContext.Provider value={data}>
            <BurgerConstructor onSubmit={openOrderModal}/>
          </MenuContext.Provider>
        }
      </main>

      {itemModal.isOpen &&
        <Modal
          onClose={onCloseModal}
          title={"Детали ингридиента"}
        >
          <IngredientDetails
            item={itemModal.item}
          />
        </Modal>
      }

      {orderModal.isOpen &&
        <Modal onClose={onCloseModal} title={""}>
          <OrderDetails orderNumber={orderModal.orderNumber}/>
        </Modal>
      }

      {errorModal.isOpen &&
        <Modal isOpen={errorModal.isOpen} onClose={onCloseModal} title={errorModal.title}>
          <ErrorPopup text={errorModal.text} />
        </Modal>
      }
    </>
  );
}

export default App;
