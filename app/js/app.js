define([
		//此处define()加载文件也会按requirejs.config的paths加载
		'angular',
		//myCon.js 文件不是整个项目的依赖包
		//所以在需要的js里加载就可以了无需在requirejs.config配置(AMD按需动态加载)
		//此处的加载路径是按 baseUrl配置的路径 ./js/controller/myCon.js
		'controller/myCon'
		], function (angular) {

	//angular.module()通过第二个参数 加载其他文件的 angular.module
	var myApp = angular.module('myApp', ['myCon']);
	return myApp;
});