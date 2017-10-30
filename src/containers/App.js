import React, { Component } from 'react'

import { Router } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { green, red } from 'material-ui/colors';

import AppShell from './AppShell'

import ReactGA from 'react-ga'
ReactGA.initialize('UA-59148422-3')

const history = createBrowserHistory();

history.listen((location, action) => {
  console.log(location)
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);
});

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: green,
    accent: red,
    type: 'light',
  },
});

function logPageView() {
  console.log(window.location);
  ReactGA.set({ page: window.location.pathname + window.location.search });
  ReactGA.pageview(window.location.pathname + window.location.search);
}

class App extends Component {
  render (){
    return (
      <MuiThemeProvider theme={theme}>
        <Router history={history} onUpdate={logPageView}>
          <AppShell/>
        </Router>
      </MuiThemeProvider>
    )
  }
}

export default App
