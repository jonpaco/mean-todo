angular.module('meanTodoApp')
.controller('MainCtrl', function ($scope, TodoService) {
    // Runs everytime the main controller gets called.
    TodoService.getTodos(function(response){
        var todos = response.data.todos;
        $scope.todos = todos;
    });
});