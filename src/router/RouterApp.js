import React, { useContext } from 'react'
import {
  Switch,
  useLocation
} from 'react-router-dom'
import { AuthContext } from '../auth/AuthContext';
import { LoginScreen } from '../components/LoginScreen';
import { AdminRoutes } from './AdminRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

// import { RouterQuery } from './RouterQuery';

export const RouterApp = () => {

  const { auth } = useContext(AuthContext)

  let query = useQuery()
  
  return (
    
      <div>

        {/* <RouterQuery page={ query.get('page') } /> */}
        <Switch location={ { pathname: `/${query.get('page') || ''}` } }>
          <PublicRoute path="/login" exact isAuthenticated={ auth.logged } component={ LoginScreen } />
          <PrivateRoute path="/" isAuthenticated={ auth.logged } component={ AdminRoutes } />
        </Switch>
        
      </div>
    
  )
}

const useQuery = () => {
  return new URLSearchParams(useLocation().search)
}

