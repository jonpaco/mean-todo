angular.module('meanTodoApp')
.controller('MainCtrl', function ($scope, TodoService) {
    // Runs everytime the main controller gets called.
   $scope.getData = function() {
            TodoService.getTodos(function(response){
            var todos = response.data.todos;
            $scope.todos = todos;
        });
    };

    $scope.getData();

    $scope.addTodo = function () {
        var todo = {header:"New Headline", text:"New Task", edited: true};
        $scope.todos.unshift(todo); 
    }

    $scope.postTodo = function() {
        var filteredTodos = $scope.todos.filter(function(todo){
            if (todo.edited) {
                return todo
            }
        });
        TodoService.saveTodos(filteredTodos).finally($scope.reset);
    };

    $scope.deleteTodo = function (todo) {
        TodoService.deleteTodo(todo);
    }

    $scope.reset = function() {
        $scope.todos.forEach(function(todo, index){
            todo.edited = false;
        });
    };
});