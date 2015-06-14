var app = angular.module('headApp', [], function($interpolateProvider) {
    $interpolateProvider.startSymbol('<%');
    $interpolateProvider.endSymbol('%>');
});

console.log(app);
app.controller('headerController', function($scope, $http) {
    console.log('its work:');
    $scope.user_info = [];

    $scope.init = function() {
        $scope.loading = true;
        $http.get('/api/todos').
            success(function(data, status, headers, config) {
                $scope.todos = data;
                $scope.loading = false;

            });
    };

});
