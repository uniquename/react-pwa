const path = require('path');

const distFolder = __dirname + '/../build'

const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './public/index.html',
  filename: 'index.html',
  inject: 'body'
})

const WebpackPwaManifest = require('webpack-pwa-manifest')
const WebpackPwaManifestConfig = new WebpackPwaManifest({
  name: 'My Progressive Web App',
  short_name: 'MyPWA',
  start_url: '/index.html',
  description: 'My awesome Progressive Web App!',
  background_color: '#ffffff',
  theme_color: '#000000',
  gcm_sender_id: '103953800507',
  fingerprints: false,
  icons: [
    {
      src: path.resolve('public/assets/logo.png'),
      sizes: [96, 128, 152, 192, 384, 512], // multiple sizes
      destination: path.join( 'icons' ),
      ios: true
    }
  ]
})

const CopyWebpackPlugin = require('copy-webpack-plugin')
const CopyWebpackPluginConfig = new CopyWebpackPlugin([
  { from: require.resolve('workbox-sw'), to: 'js/workbox-sw.prod.js' },
  { from: require.resolve('workbox-google-analytics'), to: 'js/workbox-google-analytics.prod.js' },
  { from: require.resolve('firebase/firebase-app.js'), to: 'js/firebase-app.js' },
  { from: require.resolve('firebase/firebase-messaging.js'), to: 'js/firebase-messaging.js' },
  { from: 'src/firebase-messaging-sw.js', to: 'firebase-messaging-sw.js' },
  { from: 'public/assets/badge.png', to: 'images/' },
  { from: 'public/assets/icon.png', to: 'images/' },
])

const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const FaviconsWebpackPluginConfig = new FaviconsWebpackPlugin({
  // Your source logo
  logo: './public/assets/logo.png',
  // The prefix for all image files (might be a folder or a name)
  prefix: 'icons/',
  // Emit all stats of the generated icons
  emitStats: false,
  // The name of the json containing all favicon information
  statsFilename: 'iconstats-[hash].json',
  // Generate a cache file with control hashes and
  // don't rebuild the favicons until those hashes change
  persistentCache: false,
  // Inject the html into the html-webpack-plugin
  inject: true,
  // favicon background color (see https://github.com/haydenbleasel/favicons#usage)
  background: '#fff',
  // favicon app title (see https://github.com/haydenbleasel/favicons#usage)
  title: 'Webpack App',

  // which icons should be generated (see https://github.com/haydenbleasel/favicons#usage)
  icons: {
    android: true,
    appleIcon: true,
    appleStartup: true,
    coast: false,
    favicons: true,
    firefox: true,
    opengraph: false,
    twitter: false,
    yandex: false,
    windows: true
  }
})

const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const UglifyJSPluginConfig = new UglifyJSPlugin()

module.exports = {
  //entry: './src/index.js',
  entry: {
    vendor: ["react", "react-dom"],
    app: './src/index.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  },
  plugins: [
    FaviconsWebpackPluginConfig,
    HtmlWebpackPluginConfig,
    WebpackPwaManifestConfig,
    CopyWebpackPluginConfig,
    //UglifyJSPluginConfig
  ]
}
