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


router.put('/todos/:id', function (req, res) {
    var reqTodo = req.body;
    var id = req.params.id;
    if (reqTodo && reqTodo._id != id) {
        res.status(500).json({error: "Id missing"});
    } else {
        Todo.findByIdAndUpdate(reqTodo._id, reqTodo, {new: true}, function(err, data){
            if (err){
                res.status(500).json({error: err.message});
            } else {
                res.json({todo: data, message:"update successful"});
            }
        });
    }
});

router.delete('/todos/:id', function (req, res) {
    var id = req.params.id;
    if (!id) {
        res.status(500).json({error: "Id missing"});
    } else {
        Todo.findByIdAndRemove(id, function(err, data){
            if (err){
                res.status(500).json({error: err.message});
            } else if (!data) {
                res.status(500).json({error: "No object found"});
            } else {
                res.json({todo: data, message:"delete successful"});
            }
        });
    }
});

module.exports = router;