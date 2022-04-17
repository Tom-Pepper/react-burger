import {
  GET_ORDER_NUMBER,
  ADD_DATA_FOR_INGREDIENT_MODAL,
  DELETE_DATA_FROM_MODAL,
  GET_INGREDIENTS_FOR_CONSTRUCTOR,
  GET_MENU_REQUEST,
  GET_MENU_SUCCESS,
  GET_MENU_FAILED
} from "../actions/ingredients";

const initialState = {
  menu: [],
  constructorIngs: [],
  ingDetails: {},
  currentOrder: {},
  orderNumber: null,
  menuRequest: false,
  menuFailed: false
}

export const ingredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MENU_REQUEST: {
      return {
        ...state,
        menuRequest: true,
      };
    }
    case GET_MENU_SUCCESS: {
      return {
        ...state,
        menu: action.menu,
        menuRequest: false,
        menuFailed: false,
      };
    }
    case GET_MENU_FAILED: {
      return {
        ...state,
        menuRequest: false,
        menuFailed: true,
      };
    }
    case GET_INGREDIENTS_FOR_CONSTRUCTOR: {
      return {
        ...state,
        constructorIngs: action.constructorIngs,
      };
    }
    case ADD_DATA_FOR_INGREDIENT_MODAL: {
      return {
        ...state,
        ingDetails: action.ingDetails,
      }
    }
    case DELETE_DATA_FROM_MODAL: {
      return {
        ...state,
        ingDetails: {},
      };
    }
    case GET_ORDER_NUMBER: {
      return {
        ...state,
        orderNumber: state.currentOrder.number,
      };
    }
    default: {
      return state;
    }
  }
}
