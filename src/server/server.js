import express from 'express'
import spdy from 'spdy'
import logger from 'morgan'
import fs from 'fs'
import path from 'path'
import compression from 'compression'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'

import { SheetsRegistry } from 'react-jss/lib/jss'
import JssProvider from 'react-jss/lib/JssProvider'
import { create } from 'jss'
import preset from 'jss-preset-default'
// import rtl from 'jss-rtl'; // in-case you're supporting rtl
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import createGenerateClassName from 'material-ui/styles/createGenerateClassName'
import { green, red } from 'material-ui/colors'

import WithStylesContext from '../isomorphic/components/WithStylesContext';

import AppShell from '../isomorphic/containers/AppShell'

const httpPort = 80
const httpsPort = 443
const domain = DOMAIN

function handleRender(request, response) {

  const sheetsRegistry = new SheetsRegistry();

  // Create a theme instance.
  const theme = createMuiTheme({
    palette: {
      primary: green,
      accent: red,
      type: 'light',
    },
  });

  // Configure JSS
  const jss = create(preset());
  jss.options.createGenerateClassName = createGenerateClassName;

  const css = [];
  const context = {};

  console.log(css);
  console.log(context);

  // Renders our Hello component into an HTML string
  const html = renderToString(
    <JssProvider registry={sheetsRegistry} jss={jss}>
      <MuiThemeProvider theme={theme} sheetsManager={new Map()}>
        <WithStylesContext onInsertCss={styles => css.push(styles._getCss())}>
          <StaticRouter location={ request.url } context={ context }>
            <AppShell />
          </StaticRouter>
        </WithStylesContext>
      </MuiThemeProvider>
    </JssProvider>
  );

  // Grab the CSS from our sheetsRegistry.
  const materialCss = sheetsRegistry.toString()

  // Load contents of index.html
  fs.readFile('./build/index.html', 'utf8', function (err, data) {
    if (err) throw err;
    // Inserts the rendered React HTML into our main div
    var doc = data.replace(/<div id="root"><\/div>/, `<div id="root">${html}</div>`).
              replace(/<style id="jss-server-side"><\/style>/, `<style id="jss-server-side">${materialCss}<\/style>`).
              replace(/<style id="css-server-side"><\/style>/, `<style id="css-server-side">${css.join('')}<\/style>`)

    //pushStream('app.js', response)
    //pushStream('vendor.js', response)

    response.send(doc)

  });
}

function pushStream(name, response){
  var jsFile = fs.readFileSync('./build/js/' + name)
  var stream = response.push('/js/' + name, {
    status: 200, // optional
    method: 'GET', // optional
    request: {
      accept: '*/*'
    },
    response: {
      'content-type': 'application/javascript'
    }
  })
  stream.on('error', function() {
  })
  stream.end(jsFile)
}

const app = express()

app.use(logger('dev'))
app.use(compression())

// Serve built files with static files middleware
app.use('/js', express.static(path.join('build/js')))
app.use('/icons', express.static(path.join('build/icons')))
app.use('/images', express.static(path.join('build/images')))
app.use('/service-worker.js', express.static(path.join('build/service-worker.js')))
app.use('/firebase-messaging-sw.js', express.static(path.join('build/firebase-messaging-sw.js')))
app.use('/manifest.json', express.static(path.join('build/manifest.json')))

// Serve requests with handleRender function
app.get('*', handleRender)

const options = {
  key: fs.readFileSync( PATH_KEY ),
  cert: fs.readFileSync( PATH_CERT ),
  requestCert: false,
  rejectUnauthorized: false
}

spdy
  .createServer(options, app)
  .listen(httpsPort, domain, ()=>{
    console.log('Server is listening on https://' + domain + ':' + httpsPort + '.')
  }
)

// Allways redirect to https
// Set up plain http server
const http = express();
// Set up a route to redirect http to https
http.get('*',function(request, result){
    result.redirect('https://' + domain + request.url)
})
http.listen(httpPort, domain);

