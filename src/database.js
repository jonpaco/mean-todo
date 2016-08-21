'use string';
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/todo-mean', function(err){
    if (err) {
        console.log('Failed to connect to server.');
    } else {
        console.log('Successfully connected to database.');
    }
});