import React, { useReducer } from 'react'
import { RouterApp } from './router/RouterApp'
import { BrowserRouter } from 'react-router-dom'
import { authReducer } from './auth/authReducer';
import { AuthContext } from './auth/AuthContext';

export const App = () => {

  // const init = { logged: false }

  const [auth, dispatch] = useReducer(authReducer, { logged: false })

  return (
    <AuthContext.Provider value={{ auth, dispatch }}>
      <BrowserRouter>
        <RouterApp />
      </BrowserRouter>
    </AuthContext.Provider>
  )
}
