dogParks.controller('dogParksCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/parks.json').success (function(data){
    $scope.parks = data;
  })
}])