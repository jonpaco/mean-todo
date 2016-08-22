angular.module('meanTodoApp')
.controller('NavCtrl', function($scope){
    $scope.isCollapsed = true;

    $scope.toggle = function () {
        $scope.isCollapsed = !$scope.isCollapsed;
    };
});