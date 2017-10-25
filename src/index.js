import React from 'react'
import ReactDOM, { render } from 'react-dom'

import App from './containers/App'

const rootEl = document.getElementById('root')

render(
  <App />
  ,rootEl
)

console.log(process.env);

if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
  navigator.serviceWorker.register('service-worker.js');
}
