
angular.module('meanTodoApp')
.directive('todoTemplate', function (){
    return {
        templateUrl: './js/templates/todo.html',
        controller: 'MainCtrl'
    };
});