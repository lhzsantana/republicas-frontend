angular.module("myApp").controller("StudentController", [
    '$scope', '$location',
    function ($scope, $location) {

        $scope.currentStudent = {
            name:'Luiz',
            university:'UNESP',
            degree:'Ciência da Computação',
            city:'São José do Rio Preto'
        }

        $scope.students = [

        ];

        $scope.newStudent = function () {

            $scope.students.unshift(
                {
                    name: $scope.student.name,
                    university: $scope.student.university,
                    degree: $scope.student.degree,
                    city: $scope.student.city
                }
            );

        };

        $scope.loadStudents = function () {

            return $scope.students;
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