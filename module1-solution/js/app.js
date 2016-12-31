(function() {

  var app = angular.module('LunchCheck',[]);
  app.controller('LunchCheckController',LunchCheckController);
  LunchCheckController.$injector = ['$scope'];

  function LunchCheckController($scope){

    $scope.splitString = function() {
      var dishescount = $scope.dishesList.split(',');
      $scope.message  = (dishescount.length > 3) ?  "Too much!" : "Enjoy!";
    }

  }


})();
