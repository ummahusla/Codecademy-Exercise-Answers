app.controller('MainController', ['$scope', function($scope) {
  $scope.exercises = [
    {
      icon: 'img/pushup.jpg',
      name: 'Pushups',
      count: 20
    },
    {
      icon: 'img/squat.jpg',
      name: 'Squats',
      count: 15
    },
    {
      icon: 'img/pullup.jpg',
      name: 'Pullups',
      count: 10
    },
    {
      icon: 'img/row.jpg',
      name: 'Rows',
      count: 10
    },
    {
      icon: 'img/lunge.jpg',
      name: 'Lunges',
      count: 10
    },
    {
      icon: 'img/stepup.jpg',
      name: 'Step Ups',
      count: 10
    },
    {
      icon: 'img/situp.jpg',
      name: 'Sit Ups',
      count: 15
    }
  ];

  $scope.increase = function(index) {
    $scope.exercises[index].count+=1;
  };

  $scope.decrease = function(index) {
    $scope.exercises[index].count-=1;
  };

}]);
