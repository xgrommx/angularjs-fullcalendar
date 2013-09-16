myCalendar.controller('LoginController', ['$scope', 'AuthenticationService',  function($scope, AuthenticationService) {
	$scope.loginTitle = "Login";
	$scope.loginBtn = "Login";
    $scope.credentials = {username: "", password: ""};

    $scope.login = function() {
    	AuthenticationService.login($scope.credentials);
    };
}]);