import React from "react";
import burgerConstructor from './burger-constructor.module.css';
import {Button, ConstructorElement, CurrencyIcon, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";

function BurgerConstructor(props: any) {

  return (
    <section className={burgerConstructor.wrapper}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'end' }}>

        <ul className={burgerConstructor.constructor__list}>
          <li className={burgerConstructor.lockedItem}>
            <ConstructorElement
              type="top"
              isLocked={true}
              text="Краторная булка N-200i (верх)"
              price={200}
              thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
            />
          </li>
          <div className={burgerConstructor.inner__list}>
            <li className={burgerConstructor.constructor__item}>
              <DragIcon type="primary" />
              <ConstructorElement
                text="Краторная булка N-200i (верх)"
                price={50}
                thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
              />
            </li>
            <li className={burgerConstructor.constructor__item}>
              <DragIcon type="primary" />
              <ConstructorElement
                text="Краторная булка N-200i (верх)"
                price={50}
                thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
              />
            </li>
            <li className={burgerConstructor.constructor__item}>
              <DragIcon type="primary" />
              <ConstructorElement
                text="Краторная булка N-200i (верх)"
                price={50}
                thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
              />
            </li>
            <li className={burgerConstructor.constructor__item}>
              <DragIcon type="primary" />
              <ConstructorElement
                text="Краторная булка N-200i (верх)"
                price={50}
                thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
              />
            </li>
            <li className={burgerConstructor.constructor__item}>
              <DragIcon type="primary" />
              <ConstructorElement
                text="Краторная булка N-200i (верх)"
                price={50}
                thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
              />
            </li>
            <li className={burgerConstructor.constructor__item}>
              <DragIcon type="primary" />
              <ConstructorElement
                text="Краторная булка N-200i (верх)"
                price={50}
                thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
              />
            </li>
          </div>
          <li className={burgerConstructor.lockedItem}>
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text="Краторная булка N-200i (низ)"
              price={200}
              thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
            />
          </li>
        </ul>

        <form className={burgerConstructor.constructor__form}>
          <div className={burgerConstructor.summ__wrapper}>
            <p className={burgerConstructor.summ__price}>
              24(сто)
            </p>
            <CurrencyIcon type={"primary"} />
          </div>

          <Button type="primary" size="medium">
            Оформить заказ
          </Button>
        </form>
      </div>
    </section>
  )
}

export default BurgerConstructor;
