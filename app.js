const express = require('express');
const cors = require('cors');
const route = require('./server/routes');

const argv = require('./client/webpack-server/util/argv');
const port = require('./client/webpack-server/util//port');
const setup = require('./client/webpack-server/middlewares/frontendMiddleware');
const { resolve } = require('path');

const app = express();
app.use(cors());

// If you need a backend, e.g. an API, add your custom backend-specific middleware here
app.use('/api', route);

// In production we need to pass these values in instead of relying on webpack
setup(app, {
  outputPath: resolve(process.cwd(), 'client/build'),
  publicPath: '/',
});

// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = argv.host || process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost';

// Start your app.
app.listen(port, host, (err) => {
  if (!err) {
    console.log('Server Listening at :', port );
  }
});
