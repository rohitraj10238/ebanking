app.controller('signup',function($scope,$state,$http)
{
$scope.signup=function()
{
	$http
	({
		method:'POST',
		url:'/signup',
		params:
		{
			username : $scope.uname,
			password : $scope.password,
			address	:$scope.address,
			email:$scope.email,
			phone:$scope.phoneno,
			pan:$scope.pan
		}
	})
	.then(function(response)
	{
     console.log("data sent in ",response);
     $state.go('login');
	})
}
})
