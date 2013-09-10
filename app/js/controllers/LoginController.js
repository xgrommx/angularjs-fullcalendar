myCalendar.controller('LoginController', ['$scope', 'AuthenticationService',  function($scope, AuthenticationService) {
    $scope.credentials = {username: "", password: ""};

    $scope.login = function() {
    	AuthenticationService.login($scope.credentials);
    };
}]);