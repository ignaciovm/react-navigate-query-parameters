import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { AboutScreen } from './../components/AboutScreen';
import { HomeScreen } from './../components/HomeScreen';
import { Navbar } from './../components/Navbar';

export const AdminRoutes = ({location}) => {
  return (
    <>
      <Navbar/>
      <Switch location={ location }>
        <Route exact path="/about" component={ AboutScreen } />
        <Route exact path="/" component={ HomeScreen } />
        <Redirect to="/" />
      </Switch>
    </>
  )
}
