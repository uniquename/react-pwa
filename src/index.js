import React from 'react'
import ReactDOM, { render } from 'react-dom'

import App from './isomorphic/containers/App'

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import createPalette from 'material-ui/styles/createPalette'
import { green, red } from 'material-ui/colors'

// Create a theme instance.
const theme = createMuiTheme({
  palette: createPalette({
    primary: green,
    accent: red,
    type: 'light',
  }),
})

class Main extends React.Component {
  // Remove the server-side injected CSS.
  componentDidMount() {
    const jssStyles = document.getElementById('jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    return <App {...this.props} />
  }
}

const rootEl = document.getElementById('root')

render(
  <MuiThemeProvider theme={theme}>
    <Main />
  </MuiThemeProvider>,
  rootEl,
);

if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
  // Delay registration until after the page has loaded, to ensure that
  // our precaching requests don't degrade the first visit experience.
  // See https://developers.google.com/web/fundamentals/instant-and-offline/service-worker/registration
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('service-worker.js');
  })
}

