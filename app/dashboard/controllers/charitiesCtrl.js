angular.module('app.dashboard')
  .controller('CharitiesCtrl', ['$scope', function($scope) {
    $scope.charities = [
      {
        name: 'Against Malaria Foundation',
        color: 'red'
      },
      {
        name: 'Give Directly',
        color: 'blue'
      },
      {
        name: 'Deworm the World Initiative',
        color: 'red'
      },
      {
        name: 'Environmental Working Group',
        color: 'green'
      },
      {
        name: 'ALS Association',
        color: 'blue'
      },
      {
        name: 'American Humane Association',
        color: 'orange'
      }
    ];
  }]);
