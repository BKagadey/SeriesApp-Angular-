app.controller('MainController', ['$scope', function($scope) {
  
  $scope.programs = [
    {
  series: "Sherlock",
  series_img: "img/sherlock.jpg",
  genre: "Crime drama",
  season: 3,
  episode: "The Empty Hearse",
  description: "Two years after his reported Reichenbach Fall demise, Sherlock, who has been cleared of all fraud charges against him, returns with Mycroft's help to a London under threat of terrorist attack. John has moved on and has a girlfriend, Mary Morstan. Sherlock enlists Molly to assist him, but when John is kidnapped by unknown assailants and is rescued by Sherlock and Mary, John returns to help find the terrorists and an underground plot to blow up the Houses of Parliament during an all night sitting on Guy Fawkes Night.",
  datetime: new Date(2014, 11, 31, 21, 00, 00, 00)
   },
       {
  series: "Game of Thrones",
  series_img: "img/game.jpg",
  genre: "Fantastic drama",
  season: 3,
  episode: "The Winds of Winter",
  description: "While a civil war brews between several noble families in Westeros, the children of the former rulers of the land attempt to rise up to power. Meanwhile a forgotten race, bent on destruction, plans to return after thousands of years in the North.",
  datetime: new Date(2016, 05, 30, 21, 00, 00, 00)
   },
    
  
  ];
  
  
}]);