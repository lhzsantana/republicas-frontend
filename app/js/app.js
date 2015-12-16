'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'myApp.main',
    'myApp.version',
    'leaflet-directive'
]).
factory('searchService', function () {

    var search = function () {

        console.log("search 2");

        return ;
    };

    return {
        search: search
    };
}).
config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/nav', {
            templateUrl: 'nav.html'
        })
        .when('/newRepublica', {
            templateUrl: 'republica/newRepublica.html',
            controller: 'RepublicaController'
        })
        .when('/login', {
            templateUrl: 'login/login.html',
            controller: 'LoginController'
        })
        .when('/main', {
            templateUrl: 'main/main.html',
            controller: 'MainController'
        }).
        otherwise({
            redirectTo: '/main'
        });
}]);
