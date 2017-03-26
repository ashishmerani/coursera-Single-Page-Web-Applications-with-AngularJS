( function () { 

	'use strict';
	angular.module('LunchChecker',[]) 

	.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject = ['$scope'];

	function LunchCheckController ($scope) {
		var arr = [];
		$scope.name="";	

		$scope.giveMessage = function(){
			

		if($scope.name==="") {
			$scope.printMessage= "Please enter data first";
			console.log($scope.name);

		}

		else {
			arr= $scope.name.split(',');
			console.log(arr);
			console.log(arr.length);

		
		if(arr.length<=3) {

			$scope.printMessage= "Enjoy!";
		}
		else {

			$scope.printMessage= "Too much!";
		}
	}

		
		

		};

	}

}) ();