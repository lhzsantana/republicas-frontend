'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'myApp.main',
    'myApp.version'
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
    $routeProvider.otherwise({redirectTo: '/main'});
}]);
