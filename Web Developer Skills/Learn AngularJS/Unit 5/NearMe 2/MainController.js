app.controller('MainController', ['$scope', 'places', function($scope, places) {
	places.success(function(data) {
		$scope.geodata = data;
		$scope.mapMarkers = geodataToMarkers($scope.geodata);
	});
	$scope.mapCenter = {
		lat: 40.741934,
		lng: -74.004897,
		zoom: 17
	}
}]);
