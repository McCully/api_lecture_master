var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider' , function($routeProvider){
  $routeProvider
  .when('/home', {
      templateUrl: '/views/partials/home.html',
      controller: "homeController"
    })
    .when('/cats', {
      templateUrl: '/views/partials/cats.html',
      controller: "catController"
    })
    .when('/dogs' ,{
      templateUrl: '/views/partials/dogs.html',
      controller: "dogController"
    })
    .when('/reptiles',{
      templateUrl: "/views/partials/reptiles.html",
      controller: "reptileController"
    })
    .otherwise({
      redirectTo: 'home'
    })


}]);
