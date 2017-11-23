const path = require('path')
const merge = require('webpack-merge')
const webpack = require('webpack')
const PreloadWebpackPlugin = require('preload-webpack-plugin');

const baseConfig = require('./webpack.config.js')

const publicPath = '/'
const distFolder = __dirname + '/../build'

const constants = new webpack.DefinePlugin({
  BASENAME: JSON.stringify('/'),
  PRODUCTION: JSON.stringify(true),
  'process.env': {
    NODE_ENV: JSON.stringify('production')
  }
})

const workboxPlugin = require('workbox-webpack-plugin')
const workboxPluginConfig = new workboxPlugin({
  directoryIndex: '/test',
  globDirectory: './build/',
  globPatterns: ['**/*.{html,js}'],
  swSrc: './src/client/service-worker.js',
  swDest: './build/service-worker.js',
  //modifyUrlPrefix: {
  //  '': '/'
  //},
})

const CleanWebpackPlugin = require('clean-webpack-plugin')
const CleanWebpackPluginConfig = new CleanWebpackPlugin(
  [ distFolder ],
  {
    root:     __dirname + '/..',
    verbose:  true,
    dry:      false
  }
)

const UglifyJsPluginConfig = new webpack.optimize.UglifyJsPlugin({
  minimize: true,
  output: {
    comments: false
  }
})

const CommonsChunkPluginA = new webpack.optimize.CommonsChunkPlugin({
  // the commons chunk name
  name: "vendor",
  // the filename of the commons chunk
  filename: "vendor.js",
  //async: true,
  //minChunks: Infinity,
  minChunks: ({ resource }) => /node_modules/.test(resource),
})

const CommonsChunkPluginB = new webpack.optimize.CommonsChunkPlugin({
  // the commons chunk name
  name: "vendor.firebase",
  // the filename of the commons chunk
  filename: "vendor.firebase.js",
  //async: true,
  //minChunks: Infinity,
  minChunks: ({ resource }) => /node_modules/.test(resource),
})

const PreloadWebpackPluginConfig = new PreloadWebpackPlugin({
  rel: 'preload',
  as(entry) {
    if (/\.css$/.test(entry)) return 'style';
    if (/\.woff$/.test(entry)) return 'font';
    if (/\.png$/.test(entry)) return 'image';
    return 'script';
  }
})

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const BundleAnalyzerPluginConfig = new BundleAnalyzerPlugin();


const clientConfig = merge(baseConfig, {
  entry: {
    app: './src/client/index.js',
    'vendor': ['react'],
    'vendor.firebase': ['firebase']
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
  plugins: [
    //CleanWebpackPluginConfig,
    workboxPluginConfig,
    constants,
    CommonsChunkPluginA,
    CommonsChunkPluginB,
    PreloadWebpackPluginConfig,
    UglifyJsPluginConfig,
    //BundleAnalyzerPluginConfig
  ]
});


module.exports = [ clientConfig ];
