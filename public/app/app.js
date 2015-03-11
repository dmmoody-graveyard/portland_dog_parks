var dogParks = angular.module('dogParks', ['ui.router']);

dogParks.config(function($stateProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html",
  });

  $stateProvider.state('parks', {
    url: "/parks",
    templateUrl: 'partials/parks.html',
    controller: "dogParksCtrl"
  })

  $stateProvider.state('park', {
    url: "parks/:parkID",
    templateUrl: "partials/park.html",
    controller: "ParkCtrl"
  });
});