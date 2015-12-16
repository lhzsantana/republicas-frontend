'use strict';

angular.module('myApp.login', ['ngRoute'])

.controller("LoginController", [
	'$scope','$location',
    function($scope, $location){

        $scope.login = function(){
           console.log("Usuário logado");
        }
    }
]);