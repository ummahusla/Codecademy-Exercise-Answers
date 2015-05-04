app.controller('MainController', ['$scope', function($scope) {
  $scope.today = new Date();

  $scope.appetizers = [
    {
      name: 'Caprese',
      description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
      price: 4.95
    },
    {
      name: 'Mozzarella Sticks',
      description: 'Served with marinara sauce.',
      price: 3.95
    },
    {
      name: 'Bruschetta',
      description: 'Grilled bread garlic',
      price: 4.95
    }
  ];

  $scope.mains = [
    {
      name: 'Pizza',
      description: 'Best thing ever',
      price: 8.99
    },
    {
      name: 'Pizza',
      description: 'Best thing ever',
      price: 8.99
    },
    {
      name: 'Pizza',
      description: 'Best thing ever',
      price: 8.99
    }
  ];

  $scope.extras = [
    {
      name: 'Pizza',
      description: 'Best thing ever',
      price: 8.99
    },
    {
      name: 'Pizza',
      description: 'Best thing ever',
      price: 8.99
    },
    {
      name: 'Pizza',
      description: 'Best thing ever',
      price: 8.99
    }
  ];

}]);
