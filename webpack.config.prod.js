const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: {
    app: './client/index.js',
    // 第三方 libraries 打包成 vender.js
    vendor: [
      'babel-polyfill',
      'es6-promise',
      'immutable',
      'isomorphic-fetch',
      'react-dom',
      'react-redux',
      'react-router-dom',
      'react',
      'redux-actions',
      'react-tap-event-plugin',
      'redux-thunk',
      'redux'
    ]
  },
  /**
   * 輸出檔案的預設路徑
   * 
   * filename: 以 js 檔案為主，輸出的名稱
   * path: 輸出路徑檔案的路徑，包含其他 css, images 等等的輸出路徑
   * publicPath: 取得輸出檔案的路徑
   */
  output: {
    filename: 'js/bundle.js',
    path: path.join(__dirname, 'server/public/build'),
    publicPath: '/build/'
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
      // 讀取順序為 postcss-loader -> css-loader -> style-loader
      test: /\.css$/,
      exclude: /node_module/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader',
        options: {
          localIdentName: '[name]-[local]-[hash:base64:5]',
          modules: true
        }
      }, {
        loader: 'postcss-loader',
        options: {
          // 自動追加 -webkit / -moz / -ms 等前綴詞
          plugins: () => [autoprefixer]
        }
      }]
    }, {
      test: /\.(png|gif|jpg|svg)$/,
      exclude: /node_module/,
      // 若是圖片檔案容量小於 25000 bits，則轉成 base64，否則轉成圖片至 public/build 底下
      loader: 'url-loader?limit=25000&name=img/[name]-[hash:5].[ext]'
    }]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    // 刪除 build 出檔案之資料夾
    new CleanWebpackPlugin(['server/public/build'], {
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
      filename: 'js/vendor.js'
    }),
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false
      }
    })
  ]
};
