define(['angular'], function (angular) {

	angular.module('mySer', [])
		.factory('mySerSer',  function () {
			return {
				name : 'world!'
			}
		});
})