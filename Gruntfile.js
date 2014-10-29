module.exports = function(grunt){
    //grunt的配置我就不叨叨了 自己看官网就ok了
    //我就介绍下grunt的依赖插件grunt-contrib-requirejs
    //专门打包requeirjs项目的
    grunt.initConfig({

        //此处的requirejs的配置和requeirjs.config要区分开，那个是requeirjs项目加载配置
        //这个是 grunt-contrib-requirejs打包配置
        requirejs: {
            build: {
                options: {
                    //此处是文件Gruntfile的相对位置
                    appDir: './app',
                    //设置默认路径 ./app/js
                    baseUrl : 'js',
                    //设置压缩后的路径 ./build
                    dir: './build',

                    //这里paths 是被打包文件所需要的依赖文件以及被打包的文件
                    /*
                        ./app/js/main.js下的代码
                        requirejs([
                                'angular',
                                'jquery',
                                'app'
                            ], function (angular, $, app) {
                                ......
                        })
                    */
                    //需要三个angular jquery app
                    //那么 其他的呢？ 其他的模块会按照依赖关系也被打包进去
                    //比如 app需要 ./app/js/controller/myCon.js grunt就自动把他打包进去了
                    //我们只管 被打包的文件和此文件requirejs()函数加载的依赖 ....楼主好啰嗦
                    paths: {
                        'jquery': 'lib/jquery',
                        'angular': 'lib/angular',
                        'app' : 'app',
                        'main' : 'main',
                    },

                    //requiejs.config里面配置了依赖关系和全局变量那为什么这还需要配置
                    //因为 打包后代码的变量将被替换只有a b c d类似简单的变量了
                    //那 angularjs自定义模块(比如myCon.js)就报undefined了
                    //此处配置了，打包后就不报错了，grunt-contrib-requirejs给在中间转了一下
                    shim: {
                        angular : {
                            deps : ['jquery'],
                            exports : 'angular'
                        },
                        jquery : {
                            exports : '$'
                        }
                    },

                    //此处的modules就是要打包的文件(模块)
                    //我们例子项目因为通过main.js就把整个项目模块 关联了起来
                    //main ->angular+jquery+app ->myCon->mySer
                    //所以我只打包main.js grunt就自动把其他依赖文件按依赖关系(顺序)打包进去
                    modules: [{
                        name: 'main'
                    }]
                }
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.registerTask('merge', ['requirejs']);
}
