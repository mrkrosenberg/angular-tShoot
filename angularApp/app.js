angular.module('troubleShoot', []);
	.controller('TroubleController', TroubleController);

TroubleController.$inject = ["$scope"];
function TroubleController($scope) {
	$scope.celebration = "You did it!";
}