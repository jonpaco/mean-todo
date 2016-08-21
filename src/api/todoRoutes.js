var express = require('express');
var router = express.Router();
var Todo = require('../models/todos');

router.get('/todos', function (req, res) {
    Todo.find({}, function(err, data){
        if (err) {
            res.status(500).json({error: err.message});
        } else {
            res.json({todos: data});
        }
    });
});

router.post('/todos', function (req, res) {
    var requestTodo = req.body;
    var todo = Todo({
        header: requestTodo.header,
        text: requestTodo.text,
        dateAdded: new Date(),
        completed: requestTodo.completed
    });

    todo.save(function(err, data){
        if (err) {
            res.status(500).json({error: err.message});
        } else {
            res.json({ todo: data, message: 'Todo Created' });
        }
    });
});

module.exports = router;