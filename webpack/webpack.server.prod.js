
const path = require('path');
const webpack = require('webpack')
const merge = require('webpack-merge')

const baseConfig = require('./webpack.server.js')

const sslPath = "/etc/letsencrypt/live/pwa.12deg.de/"

const constants = new webpack.DefinePlugin({
  BASENAME: JSON.stringify('/'),
  PRODUCTION: JSON.stringify(true),
  'process.env': {
    NODE_ENV: JSON.stringify('production')
  },
  PATH_CERT: JSON.stringify( sslPath + 'privkey.pem' ),
  PATH_KEY: JSON.stringify( sslPath + 'fullchain.pem'),
  DOMAIN: JSON.stringify('pwa.12deg.de')
})

module.exports = merge(baseConfig, {
  plugins: [
    //new DashboardPlugin(),
    constants
  ]
})

