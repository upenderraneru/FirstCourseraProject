(function() {

  var app = angular.module('LunchCheck',[]);
  app.controller('LunchCheckController',LunchCheckController);
  LunchCheckController.$injector = ['$scope'];

  function LunchCheckController($scope){

    $scope.splitString = function() {

      if(!($scope.dishesList)){
      $scope.message = "Please enter data first";
    }
      else{
      var dishescount = $scope.dishesList.split(',');
      $scope.message  = (dishescount.length > 3) ?  "Too much!" : "Enjoy!";
    }
    }

  }


})();
