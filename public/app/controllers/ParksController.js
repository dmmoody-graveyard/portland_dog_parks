dogParks.controller('ParksCtrl', function ParksCtrl($scope, $stateParams, UtilityFactory) {
  $scope.park = UtilityFactory.findById($scope.parks, $stateParams.parkID);
});
