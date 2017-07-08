angular.module('app')

.controller('login' , function($scope,$http,$state){

//$scope.showLoader = false;


$scope.login = function(){
	//$scope.showLoader = true;
	$http({
		method:'GET',
		url:'/loginIn',
		params:{
			username : $scope.username,
			password : $scope.password
		}
	})
	.then(function(response){
		console.log(">>>>>>. response data",response.data)
		$state.go('home');
	
	})
}





})