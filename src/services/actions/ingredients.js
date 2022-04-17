import api from "../../utils/api";

export const GET_INGREDIENTS_FOR_CONSTRUCTOR = 'GET_INGREDIENTS_FOR_CONSTRUCTOR';
export const ADD_DATA_FOR_INGREDIENT_MODAL = 'ADD_DATA_FOR_INGREDIENT_MODAL';
export const DELETE_DATA_FROM_MODAL = 'DELETE_DATA_FROM_MODAL';
export const GET_ORDER_NUMBER = 'GET_ORDER_NUMBER';

export const GET_MENU_REQUEST = 'GET_MENU_REQUEST';
export const GET_MENU_SUCCESS = 'GET_MENU_SUCCESS';
export const GET_MENU_FAILED = 'GET_MENU_FAILED';

export function getMenu() {
  return function (dispatch) {
    dispatch({
      type: GET_MENU_REQUEST
    })
    api.getMenu()
      .then(res => {
        dispatch({
          type: GET_MENU_SUCCESS,
          menu: res.data
        })
      })
      .catch(err => {
        dispatch({
          type: GET_MENU_FAILED
        })
      })
  }
}
