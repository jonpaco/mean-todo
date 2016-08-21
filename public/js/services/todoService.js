angular.module('meanTodoApp')
.service('TodoService', function ($http, $q) {
    this.getTodos = function(callback) {
        $http.get('http://localhost:3000/api/todos').then(callback);
    };

    this.deleteTodo = function (todo) {
        if (todo._id) {
            $http.delete('http://localhost:3000/api/todos/'+ todo._id);
        }
    }

    this.saveTodos = function (todos) {
        var queue = [];
        todos.forEach(function(todo, index) {
            var request;
            if (!todo._id) {
                request = $http.post('http://localhost:3000/api/todos', todo)
            } else {
                request = $http.put('http://localhost:3000/api/todos/' + todo._id, todo)
            }
            queue.push(request);
        });
        return $q.all(queue).then(function(results){
            console.log("Saved the todos");
        });
    };
});