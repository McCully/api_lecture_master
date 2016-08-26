myApp.controller("dogController", ["$scope", "$http", function($scope, $http) {
  var key = '84d039c7cf924d5cf5f14cb5c2c1e57b';
  var baseURL = 'http://api.petfinder.com/';
  console.log('dogs controller up!');

  $scope.getRandomPet = function() {
    var query = baseURL + 'pet.getRandom';
    query += '?key=' + key;
    query += '&animal=dog';
    query += '&output=basic';
    query += '&format=json';

    console.log('query: ', query);

    var request = encodeURI(query) + '&callback=JSON_CALLBACK';

    $http.jsonp(request).then(function(response) {
      $scope.animal = response.data.petfinder.pet;
      $scope.breed = $scope.animal.animal.$t;

      // $scope.getBreeds();

    });
  };


  // $scope.getBreeds = function(){
  //   var query = 'breed.list';
  //   query += '?key=' + key;
  //   query += '&animal=' + $scope.breed.toLowerCase();
  //   query += '&format=json';
  //
  //   var request  = baseURL + encodeURI(query) + '&callback=JSON_CALLBACK';
  //   console.log(request);
  //
  //   $http.jsonp(request).then(
  //     function(response) {
  //       console.log('breeds: ' , response.data);
  //       $scope.breeds = response.data.petfinder.breeds.breed;
  //   });
  // };
    angular.element(document).ready($scope.getRandomPet);
}]);
