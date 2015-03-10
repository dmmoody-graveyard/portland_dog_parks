var dogParks = angular.module('dogParks', ['ui.router']);

dogParks.config(function($stateProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html"
  });

  $stateProvider.state('park', {
    url: "/:parkID",
    templateUrl: "partials/park.html",
    controller: "ParksCtrl"
  });
});