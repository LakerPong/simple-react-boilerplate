const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

module.exports = {
  devtool: 'cheap-module-eval-source-map',

  entry: [
    'eventsource-polyfill',
    'webpack-hot-middleware/client?reload=true',
    './client/index.js'
  ],

  module: {
    loaders: [{
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react', 'stage-0']
      },
      test: /\.js?$/,
      exclude: /node_module/
    }, {
      test: /\.css$/,
      exclude: /node_module/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader',
        options: {
          localIdentName: '[name]__[local]__[hash:base64:5]',
          modules: true
        }
      }, {
        loader: 'postcss-loader',
        options: {
          plugins: () => [autoprefixer]
        }
      }]
    }, {
      test: /\.(png|gif|jpg|svg)$/,
      exclude: /node_module/,
      loader: 'url-loader?limit=20000'
    }]
  },

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'server/public/js'),
    publicPath: '/js/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
