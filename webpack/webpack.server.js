const path = require('path');
const webpack = require('webpack')

const constants = new webpack.DefinePlugin({
  BASENAME: JSON.stringify('/my-aletta'),
  PRODUCTION: JSON.stringify(true),
  'process.env': {
    NODE_ENV: JSON.stringify('production')
  }
})

const CopyWebpackPlugin = require('copy-webpack-plugin')
const CopyWebpackPluginConfig = new CopyWebpackPlugin([
  { from: 'src/server/server.crt', to: '' },
  { from: 'src/server/server.key', to: '' },
//  { from: 'src/server/key.pem', to: '' },
//  { from: 'src/server/cert.pem', to: '' },
])

const assetsPath = path.join(__dirname, "public", "assets");
const publicPath = "assets/";

const distFolder = __dirname + '/../build/server'

module.exports = {
  // The configuration for the server-side rendering
  name: "server-side rendering",
  entry: {
    app: './src/server/server.js'
  },
  target: "node",
  output: {
    path: distFolder,
    filename: "server.js",
    //publicPath: publicPath,
    libraryTarget: "commonjs2"
  },
  externals: /^[a-z\-0-9]+$/,
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  },
  plugins: [
    constants,
    CopyWebpackPluginConfig
  ]
}
