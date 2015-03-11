dogParks.controller('ParkCtrl', ['$scope', '$http', '$state', function($scope, $http, $state) {
  var url = '/parks/' + $state.params.parkID
  var park;
  $http.get(url).success (function(data){
    $scope.park = data;
  });
}]);
