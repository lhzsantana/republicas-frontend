angular.module("myApp").controller("RepublicaController", [
    '$scope', '$location',
    function ($scope, $location) {

        $scope.center = {
            lat: -27.595377,
            lng: -48.548049899,
            zoom: 4
        };
				

        window.navigator.geolocation.getCurrentPosition(function(position) {
            $scope.$apply(function() {
                $scope.center.lat = position.coords.latitude;
                $scope.center.lng = position.coords.longitude;
                $scope.center.zoom = 12;

                console.log(position);
            });
        }, function(error) {
            alert(error);
        });
		
	map = new L.Map('map');

	// create the tile layer with correct attribution
	var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
	var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
	var osm = new L.TileLayer(osmUrl, {minZoom: 3, maxZoom: 20, attribution: osmAttrib});		

	// start the map in South-East England
	map.setView(new L.LatLng(-27.595377, -48.548049899), 3);
	map.addLayer(osm);
				
		var marker = L.marker([-27.595377, -48.548049899]).addTo(map);
		
		var marker2 = L.marker([-23.579681, -46.751683]).addTo(map);

		


        /*
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
        */

        $scope.newRepublica = function () {

            //$scope.republicas.unshift({name: $scope.republica.name, description: $scope.republica.description});

            $location.path("main");

        };

        $scope.loadRepublicas = function () {

            // Simple GET request example:
            $http({
                method: 'GET',
                url: '/republicas'
            }).then(function successCallback(response) {

                return $scope.republicas;

            }, function errorCallback(response) {

                $scope.message='Erro ao carregar Repúblicas';
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });

        };

    }
]);