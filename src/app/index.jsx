import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Home from '../components/home'
import UsersGridPanel from '../components/users-grid-panel'
import UserPanel from '../components/user-panel'
import ComputersGridPanel from '../components/computers-grid-panel'
import ComputerPanel from '../components/computer-panel'

export default appProps => {
  return <Router>
      <div className='application-container'>
        <Route exact path="/" render={(props) => {
          const allProps = Object.assign(appProps, props)
          return <Home {...allProps} />
        }}/>
        <Route exact path="/users" render={(props) => {
          const allProps = Object.assign(appProps, props)
          return <UsersGridPanel {...allProps} />
        }}/>
        <Route exact path="/users/:id" render={(props) => {
          const allProps = Object.assign(appProps, props)
          return <UserPanel {...allProps} />
        }}/>
        <Route exact path="/computers" render={(props) => {
          const allProps = Object.assign(appProps, props)
          return <ComputersGridPanel {...allProps} />
        }}/>
        <Route exact path="/computers/:id" render={(props) => {
          const allProps = Object.assign(appProps, props)
          return <ComputerPanel {...allProps} />
        }}/>
      </div>
  </Router>
}
