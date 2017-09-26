/* eslint-disable import/no-extraneous-dependencies */

const webpack = require('webpack');
const config = require('../webpack.config.dev');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const compiler = webpack(config);

module.exports = (app) => {
  app.use(webpackDevMiddleware(compiler, {
    noInfo: false,
    publicPath: config.output.publicPath
  }));

  app.use(webpackHotMiddleware(compiler));
};
