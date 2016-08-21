angular.module('meanTodoApp')
.service('TodoService', function ($http) {
    this.getTodos = function(callback) {
        $http.get('http://localhost:3000/api/todos').then(callback);
    };
});