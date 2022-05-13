import React, { useReducer, createContext } from 'react'
import { useReducerEcommerce, initialState } from '../reducers/reducer.js'

export const AppEcommerceContext = createContext({
  state: initialState,
  dispatch: () => null,
})

const AppEcommerce = ({ children }) => {
  const [state, dispatch] = useReducer(useReducerEcommerce, initialState)

  return (
    <AppEcommerceContext.Provider value={{ state, dispatch }}>
      {children}
    </AppEcommerceContext.Provider>
  )
}

export default AppEcommerce