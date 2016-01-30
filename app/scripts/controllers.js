'use strict';
angular.module("confusionApp")
	 .controller("MenuController",['$scope','menuFactory',function($scope,menuFactory){	
        $scope.tab = 1;
		$scope.showDetails = false;
       
    $scope.dishes = menuFactory.getDishes(); 
    
    $scope.filtText = "";
    $scope.select = function(selectTab){
        $scope.tab = selectTab;
         if (selectTab === 2){
            $scope.filtText = "appetizer";
        }
        else if (selectTab === 3){
            $scope.filtText = "mains";
        }
        else if (selectTab === 4){
            $scope.filtText = "desserts";
        }else {
            $scope.filtText = "";
        }
    };
    $scope.isSelected = function(checkedTab){
        return ($scope.tab === checkedTab);
    };
	$scope.toggleDetails = function(){
		$scope.showDetails  = !$scope.showDetails;
	};
    }]);
	