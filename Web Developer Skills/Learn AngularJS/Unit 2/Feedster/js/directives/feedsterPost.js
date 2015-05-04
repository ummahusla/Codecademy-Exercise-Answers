app.directive("feedsterPost", function() {
  return {
    restrict: "E",
    scope: {
      post: "="
    },
    templateUrl: "js/directives/feedsterPost.html"
  }
});
