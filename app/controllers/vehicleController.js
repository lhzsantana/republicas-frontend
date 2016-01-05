angular.module("myApp").controller("VehicleController", [
    '$scope', '$http',
    function ($scope, $http) {


		    
		
			$http.get("http://localhost:8080/vehicle/list")
			.then(function(response) {$scope.names = response.data;});
		
		
    }
]);