import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../auth/AuthContext'
import { types } from '../auth/authReducer'

export const Navbar = () => {

  const { dispatch } = useContext(AuthContext)

  const handleLogout = () => {
    const action = {
      type: types.LOGOUT
    }
    dispatch(action)
  }

  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/?page=about">About</Link>
      </li>
      <li>
        <button onClick={ handleLogout }>
          Logout
        </button>
      </li>
    </ul>
  )
}
