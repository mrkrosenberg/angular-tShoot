angular.module("moarAngular", ["ngRoute"])
	.config(routeStuff)
	.controller("StretchController", StretchController);

routeStuff.$inject = ["$routeProvider"];
function routeStuff($routeProvider) {
	$routeProvider
	        .when('/', {
	          template: 'Home!'
	        })
	        .when('/about', {
	        	template: 'About!'
	        });
}

function StretchController() {
	var vm = this;
	vm.heyThere = "Well, hello!";
}