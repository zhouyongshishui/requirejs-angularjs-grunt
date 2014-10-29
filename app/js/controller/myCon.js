define([
		//加载同app类似了
		'angular',
		'service/mySer'
	], function (angular) {

	angular.module('myCon', ['mySer'])

		//此处 'mySerSer'只有在上面创建module时 传了参数['mySer'](加载此module)才可用
		.controller('myConCon', ['$scope', 'mySerSer', function ($scope, mySerSer) {
			$scope.login = mySerSer.name;
		}])

	//想用别的module的自定义服务 'mySerSer' 需要4步
	//1 require([]) 中括号内先加载此文件
	//2 angular.module('xxx', ['mySer']) 加载含有mySerSer自定义服务的angular.module
	//3 在controller('xx', [])第二个参数(数组)内 传入需要的自定义服务名称 mySerSer
	//4 []数组的回调函数内 写入mySerSer的形参，顺序一一对应
})