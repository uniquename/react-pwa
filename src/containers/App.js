import React, { Component } from 'react'

import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

//import { useRouterHistory } from 'react-router'
import { createHistory } from 'history'

import AppShell from './AppShell'

import ReactGA from 'react-ga'
ReactGA.initialize('UA-59148422-2')

const history = createBrowserHistory({ basename: BASENAME });

class App extends Component {

  render (){
    return (
      <Router history={history} >
        <AppShell/>
      </Router>
    )
  }
}

export default App
