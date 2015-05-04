app.controller('EventController', ['$scope', 'events', '$routeParams', function($scope, events, $routeParams) {
  events.success(function(data) {
    $scope.event = data.events[$routeParams.id];
  })
}]);
