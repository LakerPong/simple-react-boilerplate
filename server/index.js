/* eslint-disable import/no-extraneous-dependencies */

const path = require('path');
const express = require('express');

const setupDevMiddleware = require('./devMiddleware');

const app = express();

const isDev = process.env.NODE_ENV !== 'production';

if (isDev) {
  setupDevMiddleware(app);
}

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
  if (isDev) res.sendFile(path.join(__dirname, 'views/index.dev.html'));
  else res.sendFile(path.join(__dirname, 'views/index.prod.html'));
});

app.listen(3000, (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:3000');
});
