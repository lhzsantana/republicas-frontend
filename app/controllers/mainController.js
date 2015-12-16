
angular.module("myApp").controller("MainController", [
	'$scope','$location',
    function($scope, $location){

        $scope.login = function(){
            $location.path("main");
        }
    }
]);