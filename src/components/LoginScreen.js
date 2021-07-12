import React, { useContext } from 'react'
import { AuthContext } from '../auth/AuthContext'
import { types } from '../auth/authReducer'

export const LoginScreen = () => {
  console.log('login')

  const { dispatch } = useContext(AuthContext)

  const handleLogin = () => {
    const action = {
      type: types.LOGIN
    }
    dispatch(action)
  }

  return (
    <div>
      <h1>Login Screen</h1>
      <button onClick={handleLogin}>
        Login
      </button>
    </div>
  )
}
