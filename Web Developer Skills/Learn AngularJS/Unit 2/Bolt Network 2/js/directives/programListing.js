app.directive("programListing", function() {
  return {
    restrict: 'E',
    scope: {
      listing: '='
    },
    templateUrl: 'js/directives/programListing.html'
  }
});
