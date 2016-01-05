angular.module("myApp").controller("FeedController", [
    '$scope', '$location','searchService',
    function ($scope, $location, searchService) {

        $scope.logged=false;

        $scope.$on('searchEvent', function(event, args) {

            console.log("search");

        });
		


        $scope.republicas = [
            {
                id: 1,
                name: 'Republica com nome curto',
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
            },
            {
                id: 2,
                name: 'Republica com nome looooooooooooooooooooooongo',
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
            }
        ];


        $scope.news = [
            {
                id: 1,
                title: 'Nova republica',
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
            },
            {
                id: 2,
                title: 'Novo estudante da sua univeridade',
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
            }
        ];

        $scope.loadNews = function () {
            return $scope.news;
        };

        $scope.like = function () {
            console.log("Like");
        }

        $scope.share = function () {
            $scope.news.unshift({title: "Nova ideia", description: $scope.user.idea});
            console.log($scope.user.idea);
        }

        $scope.showModalNewRepublica = function () {
            console.log("show modal");

        }

    }
]);