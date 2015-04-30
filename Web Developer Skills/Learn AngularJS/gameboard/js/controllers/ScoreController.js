app.controller('ScoreController', ['$scope', function($scope) {
  $scope.scores = [
    {
      datetime: 1420848000000,
      visitor_team: {
        city: "Charlotte",
        name: "Hornets"
      },
      home_team: {
        city: "New York",
        name: "Knicks"
      },
      period: "Final",
      visitor_score: 110,
      home_score: 82
    },
    {
      datetime: 1420848000000,
      visitor_team: {
        city: "Dallas",
        name: "Mavericks"
      },
      home_team: {
        city: "Los Angeles",
        name: "Clippers"
      },
      period: "Final",
      visitor_score: 100,
      home_score: 120
    },
    {
      datetime: 1420848000000,
      visitor_team: {
        city: "Brooklyn",
        name: "Nets"
      },
      home_team: {
        city: "Detroit",
        name: "Pistons"
      },
      period: "Third Quarter",
      visitor_score: 69,
      home_score: 74
    },
    {
      datetime: 1420848000000,
      visitor_team: {
        city: "Indiana",
        name: "Pacers"
      },
      home_team: {
        city: "Philadelphia",
        name: "76ers"
      },
      period: "Third Quarter",
      visitor_score: 70,
      home_score: 72
    },
    {
      datetime: 1420848000000,
      visitor_team: {
        city: "San Antonio",
        name: "Spurs"
      },
      home_team: {
        city: "Minnesota",
        name: "Timberwolves"
      },
      period: "Halftime",
      visitor_score: 58,
      home_score: 43
    },
    {
      datetime: 1420848000000,
      visitor_team: {
        city: "Orlando",
        name: "Magic"
      },
      home_team: {
        city: "Portland",
        name: "Trail Blazers"
      },
      period: "First Quarter",
      visitor_score: 13,
      home_score: 26
    }
  ]
}]);
