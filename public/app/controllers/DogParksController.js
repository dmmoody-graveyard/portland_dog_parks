dogParks.controller('dogParksCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/parks').success (function(data){
    $scope.parks = data;
  });
}]);