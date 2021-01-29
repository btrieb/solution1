(function () {
    'use strict';
    
    angular.module('LunchChecker', [])
    
    .controller('LunchCheckerController', LunchCheckerController);
    
    LunchCheckerController.$inject=['$scope'];

    function LunchCheckerController($scope) {
        $scope.response = "";
        $scope.input = "";
        $scope.CheckIfTooMuch = function () { 
            var items = $scope.input.toString().split(',');
            var itemsFiltered = [];
            var i;
            for(i=0; i<items.length; i++){
                if(items[i] != ""){
                    itemsFiltered[i]= items[i];
                }
            }

            if(itemsFiltered.length > 3){
                $scope.response = "Too much!";
            }else if(itemsFiltered == "") {
                $scope.response = "Please enter data first";
            }else {
                $scope.response = "Enjoy!";
            }
        }
    
   
    };

  

    })();