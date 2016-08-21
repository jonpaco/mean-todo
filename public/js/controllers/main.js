angular.module('meanTodoApp')
.controller('MainCtrl', function ($scope, TodoService) {
    TodoService.getTodos(function(response){
        var todos = response.data.todos;
        $scope.todos = todos;
    });
});