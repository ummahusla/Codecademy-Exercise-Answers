app.factory("forecast", ["$http", function($http) {
  return $http.get("http://s3.amazonaws.com/codecademy-content/courses/ltp4/forecast-api/forecast.json")
    .success(function(data) {
      return data;
    })

    .error(function(err) {
      return err;
    });
}]);
