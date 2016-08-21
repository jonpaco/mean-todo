var express = require('express');
var router = express.Router();
var Todo = require('../models/todos');


router.get('/todos', function (req, res) {
    Todo.find({}, function(err, data){
        res.json({todos: data});
    });
});

module.exports = router;