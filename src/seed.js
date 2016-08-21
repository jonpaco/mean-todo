'use strict';
var Todo = require('./models/todos');

var theseTodos = [{
        header:"List group item heading",
        text:"Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit."
    },
    {
        header:"List group item heading",
        text:"Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit."
    },
    {
        header:"List group item heading",
        text:"Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit."
}];

theseTodos.forEach(function(item, index){
    Todo.find({header: item.header}, function(err, todo){
        if (!err && !todo.length) {
            var newTodo = Todo({
                   header: item.header,
                   text: item.text,
                   dateAdded: new Date(),
                   completed: false 
            });
            
            newTodo.save(function(err, todo) {
                if (err) {
                    console.log('Error is ${err.message}');
                } else {
                    console.log('Successfully saved');
                }
            });
        }
    });
});