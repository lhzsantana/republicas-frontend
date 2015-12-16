'use strict';

angular.module('myApp.republica', ['ngRoute'])

.controller("RepublicaController", [
	'$scope','$location',
    function($scope, $location){

        $scope.login = function(){
           console.log("Usuário logado");
        }
    }
]);