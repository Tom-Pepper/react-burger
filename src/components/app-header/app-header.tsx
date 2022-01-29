/**
 * Application header component
 */

import React from "react";
import headerStyles from './app-header.module.css';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'

function AppHeader() {
  return(
    <header className={
      `${headerStyles.header__background}`
    }>
      <div className={headerStyles.header__inner}>
        <ul className={headerStyles.header__list}
        >
          <li className={headerStyles.list__elem}>
            <BurgerIcon type="primary" />
            <p className={headerStyles.elem__text}>
              Конструктор
            </p>
          </li>
          <li className={`
            ${headerStyles.list__elem}
            text_color_inactive`}
          >
            <ListIcon type="secondary" />
            <p className={headerStyles.elem__text}>
              Лента заказов
            </p>
          </li>
        </ul>
        <Logo />
        <nav className={'text text_type_main-default'}>
          <ul className={headerStyles.header__list}>
            <li className={`
              ${headerStyles.list__elem}
              text_color_inactive`}
            >
              <ProfileIcon type="secondary" />
              <p className={headerStyles.elem__text}>
                Личный кабинет
              </p>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default AppHeader;
