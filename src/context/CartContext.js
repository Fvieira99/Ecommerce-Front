import React, { useReducer, createContext, useEffect } from 'react'
import { useReducerEcommerce, initialState } from '../reducers/reducer.js'

export const AppEcommerceContext = createContext({
  state: initialState,
  dispatch: () => null,
})

const AppEcommerce = ({ children }) => {

  const localState = JSON.parse(localStorage.getItem('cart'));

  const [state, dispatch] = useReducer(useReducerEcommerce, localState || initialState)

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state));
}, [state]);

  return (
    <AppEcommerceContext.Provider value={{ state, dispatch }}>
      {children}
    </AppEcommerceContext.Provider>
  )
}

export default AppEcommerce