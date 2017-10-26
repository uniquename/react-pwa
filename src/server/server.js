import express from 'express'
import spdy from 'spdy'
import fs from 'fs'
import path from 'path'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'

import { SheetsRegistry } from 'react-jss/lib/jss';
import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';
import preset from 'jss-preset-default';
// import rtl from 'jss-rtl'; // in-case you're supporting rtl
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import createGenerateClassName from 'material-ui/styles/createGenerateClassName';
import { green, red } from 'material-ui/colors';

import AppShell from '../containers/AppShell'

/*
const domain = 'pwa.12deg.de'
const httpPort = 80
const httpsPort = 443
*/

const httpPort = 80
const httpsPort = 443
const domain = 'localhost'

/*
const httpPort = 8080
const httpsPort = 8081
*/
function handleRender(req, res) {

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
  // const jss = create({ plugins: [...preset().plugins, rtl()] }); // in-case you're supporting rtl

  jss.options.createGenerateClassName = createGenerateClassName;

  const context = {};

  // Renders our Hello component into an HTML string
  const html = renderToString(
    <JssProvider registry={sheetsRegistry} jss={jss}>
      <MuiThemeProvider theme={theme} sheetsManager={new Map()}>
        <StaticRouter location={ req.url } context={ context }>
          <AppShell />
        </StaticRouter>
      </MuiThemeProvider>
    </JssProvider>
  );

  // Grab the CSS from our sheetsRegistry.
  const css = sheetsRegistry.toString()

  // Load contents of index.html
  fs.readFile('./build/index.html', 'utf8', function (err, data) {
    if (err) throw err;
    // Inserts the rendered React HTML into our main div
    var doc = data.replace(/<div id="root"><\/div>/, `<div id="root">${html}</div>`).
              replace(/<style id="jss-server-side"><\/style>/, `<style id="jss-server-side">${css}<\/style>`)

    console.log('rendered');
    //const document = renderFullPage(html, css)
    // Sends the response back to the client
    //sleep(0).then(() => {
      res.send(doc)
    //});
  });
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const app = express();

// Serve built files with static files middleware
app.use('/react-pwa', express.static(path.join('build')));
app.use('/service-worker.js', express.static(path.join('build/service-worker.js')));
// Serve requests with our handleRender function
app.get('*', handleRender);

const sslPath = "/etc/letsencrypt/live/pwa.12deg.de/"

const options = {
  key: fs.readFileSync( 'build/server/localhost.key' ),
  cert: fs.readFileSync( 'build/server/localhost.cert' ),
//  key: fs.readFileSync( sslPath + 'privkey.pem'),
//  cert: fs.readFileSync( sslPath + 'fullchain.pem'),
  requestCert: false,
  rejectUnauthorized: false
}

spdy
  .createServer(options, app)
  .listen(httpsPort, domain, ()=>{
    console.log('Server is listening on https://' + domain + ':' + httpsPort + '.')
  }
)

// set up plain http server
const http = express();

// set up a route to redirect http to https
http.get('*',function(req,res){
    res.redirect('https://localhost'+req.url)
})

// have it listen on 8080
http.listen(httpPort, domain);
