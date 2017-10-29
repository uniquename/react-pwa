import React, { Component } from 'react'

import { Router, Route, Link, Switch } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

//import { useRouterHistory } from 'react-router'
import { createHistory } from 'history'

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { green, red } from 'material-ui/colors';


import AppShell from './AppShell'

import ReactGA from 'react-ga'
ReactGA.initialize('UA-59148422-2')

const history = createBrowserHistory();

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: green,
    accent: red,
    type: 'light',
  },
});

class App extends Component {

  render (){
    return (
      <MuiThemeProvider theme={theme}>
        <Router history={history} >
          <AppShell/>
        </Router>
      </MuiThemeProvider>
    )
  }
}

export default App
