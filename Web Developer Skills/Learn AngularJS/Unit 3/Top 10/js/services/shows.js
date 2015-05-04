app.factory("shows", ['$http', function($http) {
  return $http.get("https://s3.amazonaws.com/codecademy-content/courses/ltp4/shows-api/shows.json")
  .success(function(data) {
    return data;
  })

  .error(function(err) {
    return err;
  });

}]);
