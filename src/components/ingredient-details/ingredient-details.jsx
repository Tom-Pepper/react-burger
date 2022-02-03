import React from "react";
import PropTypes from 'prop-types';
import ingDetailsStyle from './ingredient-details.module.css';

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

IngredientDetails.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    proteins: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    image_large: PropTypes.string.isRequired,
  }).isRequired
}

export default IngredientDetails;
