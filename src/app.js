'use strict';
var express = require('express');
var parser = require('body-parser');
var app = express();
app.use('/', express.static('public'));
app.use(parser.json());

app.get('/todos', function (req, res) {
    res.json({message: 'GET todos'});
});

app.listen(3000, function () {
    console.log('Frontend server is running');
});