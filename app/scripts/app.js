'use strict';
angular.module("confusionApp",[])
    .controller("MenuController",['$scope',function($scope){
        $scope.tab = 1;
		$scope.showDetails = false;
       var dishes=
                                                [
                         {
                           name:'Uthapizza',
                           image: 'images/uthapizza.png',
                           category: 'mains',
                           label:'Hot',
                           price:'4.99',
                           description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
                           comment: ''
                        },
                        {
                           name:'Zucchipakoda',
                           image: 'images/zucchipakoda.png',
                           category: 'appetizer',
                           label:'',
                           price:'1.99',
                           description:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce',
                           comment: ''
                        },
                        {
                           name:'Vadonut',
                           image: 'images/vadonut.png',
                           category: 'appetizer',
                           label:'New',
                           price:'1.99',
                           description:'A quintessential ConFusion experience, is it a vada or is it a donut?',
                           comment: ''
                        },
                        {
                           name:'ElaiCheese Cake',
                           image: 'images/elaicheesecake.png',
                           category: 'desserts',
                           label:'',
                           price:'2.99',
                           description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms',
                           comment: ''
                        }
                        ];
    $scope.dishes = dishes; 
    
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