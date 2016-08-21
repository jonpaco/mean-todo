'use strict';
var express = require('express');
var parser = require('body-parser');
var app = express();
var router = require('./api/todoRoutes');
require('./database');
require('./seed');
app.use('/', express.static('public'));
app.use(parser.json());
//handle parsing errors gracefully
app.use(function (error, req, res, next) {
  if (error instanceof SyntaxError) {
    res.status(500).json({err: error.message});
  } else {
    next();
  }
});

app.use('/api', router);

app.listen(3000, function () {
    console.log('Frontend server is running');
});