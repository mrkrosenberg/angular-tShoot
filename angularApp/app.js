angular.module('troubleShoot', [])
	.controller('TroubleController', TroubleController);

TroubleController.$inject = ["$scope"];
function TroubleController($scope) {
	var vm = this;
	vm.celebration = "You did it!";
}