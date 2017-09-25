const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: './app/index.js',
    // 第三方 libraries 打包成 vender.js
    vendor: [
      'babel-polyfill',
      'es6-promise',
      'immutable',
      'isomorphic-fetch',
      'react-dom',
      'react-redux',
      'react-router',
      'react',
      'redux-actions',
      'redux-thunk',
      'redux'
    ]
  },
  /**
   * 輸出檔案的預設路徑
   * 
   * filename: 以 js 檔案為主，輸出的名稱
   * path: 輸出路徑檔案的路徑，包含其他 css, images 等等的輸出路徑
   * public: 靜態檔案的路徑
   */
  output: {
    filename: 'js/bundle-[hash:5].js',
    path: path.join(__dirname, 'server/public'),
    publicPath: '/'
  },

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
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader',
        options: {
          localIdentName: '[name]__[local]__[hash:base64:5]',
          modules: true
        }
      }]
    }, {
      test: /\.s[ac]ss$/,
      exclude: /node_module/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader',
        options: {
          localIdentName: '[sha512:hash:base32]-[name]-[local]',
          modules: true
        }
      }, {
        loader: 'postcss-loader'
      }, {
        loader: 'sass-loader'
      }]
    }, {
      test: /\.(png|gif|jpg|svg)$/,
      exclude: /node_module/,
      loader: 'url-loader?limit=25000&name=img/[name]-[hash:5].[ext]'
    }]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    // 刪除 server 底下的 public 資料夾
    new CleanWebpackPlugin(['server/public'], {
      verbose: true
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      chunks: ['app'],
      minChunks: Infinity,
      filename: 'js/vendor-[hash:5].js'
    }),
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false
      }
    })
  ]
};
