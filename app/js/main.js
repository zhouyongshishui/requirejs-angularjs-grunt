requirejs.config({

	//baseUrl 为加载文件的默认路径 
	//不写默认路径用grunt打包的时候很容易报错找不到文件
	baseUrl : './js',
	'paths' : {

		//此处一般加载项目依赖包(js)
		//有了baseUrl 所以此地方的路径就代表 项目根路径下的js/lib/jquery.js
		//同为js文件的话.js可以省略
		jquery : 'lib/jquery',
		angular : 'lib/angular'
	},
	shim : {

		//此位置只为不支持AMD写法的js文件
		angular : {

			//表示加载angularjs的依赖，会先加载jquery
			deps : ['jquery'],

			//全局输出变量其他文件引用angularjs后就引入了此全局变量
			//比如下面的 requeirjs([],function(){})方法内
			exports : 'angular'
		},
		jq : {
			exports : '$'
		}
	}
});

//上面为 配置requirjs 是个config,真正加载文件从这requiejs()函数开始
//main.js 内一般都是放的 整个项目的依赖包比如 jquery angular等
//app.js文件 为项目的 根 ng-app(..好难表达 00 !)
requirejs([

		//此处会按照 requirejs.config的paths路径和deps依赖关系加载
		'angular',
		'jquery',
		'app'
	], function (angular, $, app) {

		//jquery方法 dom ready
		$(function () {

			//通过angularjs的内置方法给 html加上ng-app="myApp"指令
			//angularjs 通过ng-app设置作用边界
			angular.bootstrap(document,['myApp']);
		})
})