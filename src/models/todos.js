'use strict';
var mongoose = require('mongoose');

var todoSchema = new mongoose.Schema({
    header: String,
    text: String,
    dateAdded: Date,
    completed: Boolean
});

var todoModel = mongoose.model('Todo', todoSchema);

module.exports = todoModel;