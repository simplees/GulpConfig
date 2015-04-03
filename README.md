##Gulp配置
Gulp是最近很火的开源项目，是一个基于任务的设计模式的自动化前端构建工具。同类工具中有比它成名更早更为流行的是Grunt，国内也有百度出品的FIS。
Grunt很强大，有很完善的社区和设计模式，但是学习成本很高。FIS是互联网公司的产物，更多的是匹配适应自己的项目流程。虽然有亮点有创新，但是社区实在有些混乱，人员变动也是其中很大的变数之一。Gulp相比起来就简单可靠的多。
这里主要是用来存放常用的gulp配置。
####安装gulp - Windows系统
1、安装Nodejs：
[下载对应版本Nodejs](https://nodejs.org/download/)(Windows下载.msi安装包)


2、安装NPM模块管理：
参考[Windows Install or Upgrade](https://github.com/npm/npm#windows-install-or-upgrade)


3、将npm源代码解压到D:\npmjs目录，在命令提示符窗口执行下面操作，完成npm的安装：

    $cd npmjs
    $node cli.js install -gf

 另外：
 

    node cli.js install npm -gf //安装最新版的NPM
    node cli.js install npm@1.0.104 -gf //安装指定版本的NPM


4、安装gulp及gulp插件

全局安装

    $npm install gulp -g


安装到项目，在项目目录中增加gulp.js依赖

    $npm install gulp --save-dev gulp


可以将gulp及常用的gulp插件进行全局安装，再通过下面的方法将它们引入到项目目录中。

    $npm link gulp


####常用插件
+ gulp-imagemin //图片压缩
+ gulp-minify-html //HTML压缩
+ gulp-minify-css //CSS压缩
+ gulp-uglify //JS压缩
+ gulp-concat //文件合并
+ gulp-jshint //JS代码验证
+ gulp-less //Less编译
+ gulp-livereload //页面自动刷新
+ gulp-watch //文件监控
+ browser-sync //多浏览器测试工具

####使用方法
将配置好的gulpfile.js放入项目根目录中，配置gulpfile.js中的文件路径。
