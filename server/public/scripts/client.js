var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/dogs', {
    templateUrl: '/views/templates/dogs.html',
    controller: 'DogController',
    controllerAs: 'dogs'
  })
  .when('/cats', {
    templateUrl: '/views/templates/cats.html',
    controller: 'CatController',
    controllerAs: 'cats'
  })
  .when('/reptiles', {
    templateUrl: '/views/templates/reptiles.html',
    controller: 'ReptileController',
    controllerAs: 'reptiles'
  })
  .otherwise({
    redirectTo: 'dogs'
  });
}]);


app.controller("DogController", ["$http", function($http){
  console.log("DogController running")
  var key = 'f230df256593d54848510971977b51f5';
  var self = this;

  self.animal = {};

  self.getRandomPet = function(){
    var query = 'http://api.petfinder.com/'; // baseURL for API
    query += 'pet.getRandom'; // selecting the method we would like to return
    query += '?key=' + key; // Giving petfinder our key
    query += '&format=json'; // Telling petfinder we want our response to be JSON
    query += '&animal=dog';
    query += '&output=basic'; // Telling petfinder what data we want (more than just id)
    var request = encodeURI(query) + '&callback=JSON_CALLBACK'; // removing spaces and special characters from response as well as making jsonp work with the callback

    console.log('Request:', request);

    $http.jsonp(request).then(function(response){
      console.log(response);
      self.animal = response.data.petfinder.pet;
    });

  }

  self.getRandomPet();

  self.message = "Welcome!"
  }]);

app.controller("CatController", ["$http", function($http){
  console.log("CatController running")
  var self = this;
  var key = 'f230df256593d54848510971977b51f5';

  self.animal = {};

  self.getRandomPet = function(){
    var query = 'http://api.petfinder.com/'; // baseURL for API
    query += 'pet.getRandom'; // selecting the method we would like to return
    query += '?key=' + key; // Giving petfinder our key
    query += '&format=json'; // Telling petfinder we want our response to be JSON
    query += '&animal=cat';
    query += '&output=basic'; // Telling petfinder what data we want (more than just id)
    var request = encodeURI(query) + '&callback=JSON_CALLBACK'; // removing spaces and special characters from response as well as making jsonp work with the callback

    console.log('Request:', request);

    $http.jsonp(request).then(function(response){
      console.log(response);
      self.animal = response.data.petfinder.pet;
    });

  }

  self.getRandomPet();

  self.message = "Welcome!"
  }]);

app.controller("ReptileController", ["$http", function($http){
  console.log("ReptileController running")
  var self = this;
  var key = 'f230df256593d54848510971977b51f5';

  self.animal = {};

  self.getRandomPet = function(){
    var query = 'http://api.petfinder.com/'; // baseURL for API
    query += 'pet.getRandom'; // selecting the method we would like to return
    query += '?key=' + key; // Giving petfinder our key
    query += '&format=json'; // Telling petfinder we want our response to be JSON
    query += '&animal=reptile';
    query += '&output=basic'; // Telling petfinder what data we want (more than just id)
    var request = encodeURI(query) + '&callback=JSON_CALLBACK'; // removing spaces and special characters from response as well as making jsonp work with the callback

    console.log('Request:', request);

    $http.jsonp(request).then(function(response){
      console.log(response);
      self.animal = response.data.petfinder.pet;
    });

  }

  self.getRandomPet();

  self.message = "Welcome!"
  }]);
