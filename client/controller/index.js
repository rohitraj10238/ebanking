var app = angular.module('app',['ui.router']);

app.config(function($stateProvider)
{
	$stateProvider
	.state('contact',{
      url:'contact',
      templateUrl:'contact.html'
	})
	.state('home',{
		url:'home',
		templateUrl:'home.html',
		controller:'home'
		})
	.state('index',{
		url:'index',
		templateUrl:'index.html'
		})
	.state('signup',{
		url:'signup',
		templateUrl:'signup.html',
		controller:'signup'
		})
	.state('login',{
		url:'login',
		templateUrl:'login.html',
		controller:'login'
		})
	.state('change',{
     url:'change',
     templateUrl:'change.html',
     controller:'change'


	})
});