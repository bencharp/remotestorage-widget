var webpack = require('webpack');
var isProd = (process.env.NODE_ENV === 'production');

// minimize only in production 
var plugins = isProd ? [new webpack.optimize.UglifyJsPlugin({minimize: true})] : [];

module.exports = {
  entry: "./src/widget.js",
  output: {
    path:'build',
    publicPath: __dirname + '/build/',
    filename: 'widget.js',
    libraryTarget: "umd"
  },
  devtool: isProd ? 'source-map' : '',
  externals: {
      // require("remotestoragejs") is external and available
      // on the global var RemoteStorage
      // this is how peer dependencies are specified 
      // in webpack (we need RemoteStorage but we do not include in bundle)
      "remotestoragejs": {
          root: "RemoteStorage", // in browser <script> this will resolve in this.RemoteStorage
          commonjs2: "remotestoragejs", // require('remotestoragejs')
          commonjs: "remotestoragejs", // require('remotestoragejs')
          amd: "remotestoragejs" // define(['remotestoragejs'], ...)
      }
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel?presets=es2015' },
      { test: /\.(jpe?g|png|gif|svg)$/i, loader: 'url-loader?limit=10000000' }
    ]
  },
  plugins: plugins
}

