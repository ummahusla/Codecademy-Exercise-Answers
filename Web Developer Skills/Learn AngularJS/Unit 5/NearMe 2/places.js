app.factory('places', ['$http', function($http) {
  return $http.jsonp('https://en.wikipedia.org/w/api.php?action=query&list=geosearch&gsradius=5000&gscoord=40.741934%7C-74.004897&gslimit=30&format=json&callback=JSON_CALLBACK')
    .success(function(data) {
    return data;
    })
        .error(function(err) {
    return err;
    });
}]);
