app.directive("tvShow", function() {
  return {
    restrict: "E",
    scope: {
      info: "="
    },
    templateUrl: "js/directives/tvShow.html"
  }
});
