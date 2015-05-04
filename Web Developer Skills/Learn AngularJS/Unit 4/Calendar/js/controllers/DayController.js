app.controller('DayController', ['$scope', 'events', function($scope, events) {
  events.success(function(data) {
    $scope.day = data;
  });
}]);
