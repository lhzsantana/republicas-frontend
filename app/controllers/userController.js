angular.module("myApp").controller("UserController", [
    '$scope', '$location',
    function ($scope, $location) {

        $scope.currentUser = {
            name:'Luiz',
            university:'UNESP',
            role:'Administrador',
            degree:'Ciência da Computação',
            city:'São José do Rio Preto'
        }

        $scope.users = [

        ];

        $scope.newStudent = function () {

            $scope.users.unshift(
                {
                    name: $scope.currentUser.name,
                    role: $scope.currentUser.role,
                    university: $scope.currentUser.university,
                    degree: $scope.currentUser.degree,
                    city: $scope.currentUser.city
                }
            );

        };

        $scope.loadStudents = function () {

            return $scope.users;
        };

        $scope.logout = function () {
            $location.path("login");
        };

        $scope.newRepublica = function(){

            console.log("New republica");

            $location.path("newRepublica");
        }
    }
]);