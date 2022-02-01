import React from "react";
import ingDetailsStyle from './ingredient-details.module.css';
import Modal from "../modal/modal";

// @ts-ignore
const IngredientDetails = ({ item }) => {
  return(
    <>
      {item &&
        <div className={ingDetailsStyle.info_wrapper}>
          <img src={item.image_large} alt={item.name}/>
          <h4 className={ingDetailsStyle.details__item_name}>
            {item.name}
          </h4>
          <ul className={ingDetailsStyle.items__list}>
            <li className={ingDetailsStyle.items__item}>
              <p className={ingDetailsStyle.element_text}>Калории</p>
              <p className={ingDetailsStyle.element_quantity}>
                {item.calories}
              </p>
            </li>
            <li className={ingDetailsStyle.items__item}>
              <p className={ingDetailsStyle.element_text}>Белки</p>
              <p className={ingDetailsStyle.element_quantity}>
                {item.proteins}
              </p>
            </li>
            <li className={ingDetailsStyle.items__item}>
              <p className={ingDetailsStyle.element_text}>Жиры</p>
              <p className={ingDetailsStyle.element_quantity}>
                {item.fat}
              </p>
            </li>
            <li className={ingDetailsStyle.items__item}>
              <p className={ingDetailsStyle.element_text}>Углеводы</p>
              <p className={ingDetailsStyle.element_quantity}>
                {item.carbohydrates}
              </p>
            </li>
          </ul>
        </div>
      }
    </>
  );
}

export default IngredientDetails;
