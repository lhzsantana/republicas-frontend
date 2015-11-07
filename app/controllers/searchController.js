angular.module("myApp").controller("SearchController", [
    '$scope', '$location','searchService',
    function ($scope, $location, searchService) {

        $scope.search = function () {

            console.log("search1");

            $scope.$emit('searchEvent', '');
        };
    }
]);