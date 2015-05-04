app.controller('MainController', ['$scope', 'shows', function($scope, shows) {
  shows.success(function(data) {
    $scope.shows = data;
  });
}]);
