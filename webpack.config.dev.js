const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',

  entry: [
    'eventsource-polyfill',
    'webpack-hot-middleware/client?reload=true',
    './app/index.js'
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
      loader: 'style-loader!css-loader'
    }, {
      test: /.\s[ac]ss$/,
      exclude: /node_module/,
      loader: 'style-loader!css-loader!postcss-loader!sass-loader'
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
