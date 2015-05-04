app.controller('EmailController', ['$scope', 'emails', '$routeParams', function($scope, emails, $routeParams) {
  emails.success(function(data) {
    $scope.email = data[$routeParams.id];
  });
}]);
