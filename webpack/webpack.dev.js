const path = require('path')
const merge = require('webpack-merge')
const Webpack = require('webpack')

const baseConfig = require('./webpack.config.js')

const constants = new Webpack.DefinePlugin({
  BASENAME: JSON.stringify('/'),
  PRODUCTION: JSON.stringify(false)
})

// Webpack uses `publicPath` to determine where the app is being served from.
// In development, we always serve from the root. This makes config easier.
const publicPath = '/'
const distFolder = __dirname + '/../build'

module.exports = merge(baseConfig, {
  entry: {
    app: './src/client/index.js'
  },
  output: {
    // Next line is not used in dev but WebpackDevServer crashes without it:
    path: distFolder,
    // Add /* filename */ comments to generated require()s in the output.
    pathinfo: true,
    // This does not produce a real file. It's just the virtual path that is
    // served by WebpackDevServer in development. This is the JS bundle
    // containing code from all our entry points, and the Webpack runtime.
    filename: 'js/[name].js',
    // There are also additional JS chunk files if you use code splitting.
    chunkFilename: 'js/[name].chunk.js',
    // This is the URL that app is served from. We use "/" in development.
    publicPath: publicPath,
    // Point sourcemap entries to original disk location (format as URL on Windows)
    devtoolModuleFilenameTemplate: info =>
      path.resolve(info.absoluteResourcePath).replace(/\\/g, '/'),
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    //new DashboardPlugin(),
    constants
  ]
});
