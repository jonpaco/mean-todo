angular.module('meanTodoApp')
.controller('MainCtrl', ['$scope', function ($scope) {
    $scope.todos = [{
        "heading":"List group item heading",
        "text":"Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit."
    },
    {
        "heading":"List group item heading",
        "text":"Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit."
    },
    {
        "heading":"List group item heading",
        "text":"Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit."
    }];
}]);