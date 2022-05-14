export const initialState = {
 cart: []
}

export const useReducerEcommerce = (state = initialState, action) => {
  switch (action.type) {
    case 'addProduct':
     return {...state, cart: [...state.cart, action.payload.product] }
    case 'deleted':
      return {...state, cart: action.payload.products }
    default:
     return state
  }
}
