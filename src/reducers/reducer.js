export const initialState = {
 cart: [],
 price: 0
}

export const useReducerEcommerce = (state = initialState, action) => {
  switch (action.type) {
    case 'addProduct':
     return {...state, cart: [...state.cart, action.payload.product] }
    case 'deleted':
      return {...state, cart: action.payload.products }
    case 'addPrice':
      return { ...state, price: action.payload.price }
    default:
     return state
  }
}
