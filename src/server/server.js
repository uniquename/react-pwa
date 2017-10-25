import express from 'express'
import spdy from 'spdy'
import fs from 'fs'
import path from 'path'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import AppShell from '../containers/AppShell'
import { StaticRouter } from 'react-router-dom'

const port = 3000
const domain = 'pwa.12deg.de'

function handleRender(req, res) {

  const context = {};

  // Renders our Hello component into an HTML string
  const html = ReactDOMServer.renderToString(
      <StaticRouter location={ req.url } context={ context }>
        <AppShell />
      </StaticRouter>
  );
  // Load contents of index.html
  fs.readFile('./build/index.html', 'utf8', function (err, data) {
    if (err) throw err;
    // Inserts the rendered React HTML into our main div
    const document = data.replace(/<div id="root"><\/div>/, `<div id="root">${html}</div>`);
    // Sends the response back to the client
    res.send(document);
  });
}

const app = express();

// Serve built files with static files middleware
app.use('/my-aletta', express.static(path.join('build')));

app.use('/service-worker.js', express.static(path.join('build/service-worker.js')));

// Serve requests with our handleRender function
app.get('*', handleRender);

/*
// Start server
app.listen(port, function () {
  console.log('App started on port 3000');
});
*/

const options = {
  key: fs.readFileSync('build/server/server.key'),
  cert: fs.readFileSync('build/server/server.crt')
}

spdy
  .createServer(options, app)
  .listen(443, domain, ()=>{
    console.log(`Server is listening on https://localhost:8080. You can open the URL in the browser.`)
  }
)

// set up plain http server
const http = express();

// set up a route to redirect http to https
http.get('*',function(req,res){
    res.redirect(domain+req.url)
})

// have it listen on 8080
http.listen(80, domain);
