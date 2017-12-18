import React, { Component } from 'react'

import { Router } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { green, red } from 'material-ui/colors';

import AppShell from '../isomorphic/AppShell'

import ReactGA from 'react-ga'
ReactGA.initialize('UA-59148422-3')
//ReactGA.initialize('UA-59148422-3', { debug: true })

const history = createBrowserHistory();

history.listen((location, action) => {
  ReactGA.set({ page: location.pathname + location.search });
  ReactGA.pageview(location.pathname + location.search);
});

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
        <Router history={history}>
          <AppShell/>
        </Router>
      </MuiThemeProvider>
    )
  }
}

export default App
