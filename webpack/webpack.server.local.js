const path = require('path');
const webpack = require('webpack')
const merge = require('webpack-merge')

const baseConfig = require('./webpack.server.js')

const constants = new webpack.DefinePlugin({
  BASENAME: JSON.stringify('/'),
  PRODUCTION: JSON.stringify(true),
  'process.env': {
    NODE_ENV: JSON.stringify('production')
  },
  PATH_CERT: JSON.stringify('build/server/localhost.cert'),
  PATH_KEY: JSON.stringify('build/server/localhost.key'),
  DOMAIN: JSON.stringify('localhost')
})

module.exports = merge(baseConfig, {
  plugins: [
    //new DashboardPlugin(),
    constants
  ]
})
