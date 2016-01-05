'use strict';

angular.module('myApp.main', ['ngRoute'])
.controller("MainController", [
	'$scope','$location',
    function($scope, $location){

        $scope.login = function(){
           console.log("Usuário logado");
        }
    }
]);