	app.controller('change',function($scope,$state,$http)
	{	
	$scope.change=function()
{
	$http
	({
		method:'GET',
		url:'/login',
		params:
		{
			email : $scope.email,
			password : $scope.password,
			setpassword : $scope.setpassword
		}
	})
.then(function(response)
	{
		console.log(">>>>>>. response data",response.data);
		$state.go('login');
	})
}
});