const initialState = {
  menu: [],
  constructor: [],
  ingDetails: {},
  currentOrder: {}
}

export const ingredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TEST": {
      return 'Hi';
    }
    default: {
      return state;
    }
  }
}
