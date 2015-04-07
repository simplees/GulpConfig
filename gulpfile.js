// 引入 gulp
var gulp = require('gulp');

// 引入组件
var imagemin = require('gulp-imagemin');
var minifycss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var less = require('gulp-less');
var minifyHTML =require('gulp-minify-html');
var borwserSync = require('browser-sync');
var livereload = require('gulp-livereload');
var watch = require('gulp-watch');

//设置源目录
var source = './src';

// 压缩图片
gulp.task('images', function() {
  return gulp.src([source + '/images/**/*'])
    .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
    .pipe(gulp.dest('./dist/images'))
});

// 合并、压缩、重命名css
gulp.task('minifycss', function() {
  return gulp.src([source + '/css/*.css'])
    .pipe(minifycss())
    .pipe(concat('all.min.css'))
    .pipe(gulp.dest('./dist/css'));
});

// 检查js
gulp.task('lint', function() {
  return gulp.src([source + '/js/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// 合并，压缩js文件
gulp.task('javascripts', function() {
  return gulp.src([source + '/js/*.js'])
    .pipe(uglify())
    .pipe(concat('all.min.js'))
    .pipe(gulp.dest('./dist/js'));
});

//HTML压缩
gulp.task('minify-html', function() {
  var opts = {
    conditionals: true,
    spare:true
  };
  return gulp.src([source + '/*.html'])
    .pipe(minifyHTML(opts))
    .pipe(gulp.dest('./dist'));
})

//Less编译
gulp.task('build-less', function(){
  return gulp.src([source + '/less/simpleeui.less'])
  .pipe(less())
  .pipe(gulp.dest('./dist/css'))
  .pipe(livereload());
});

//监控
gulp.task('watch', function() {
  livereload.listen();
  gulp.watch([source + '/less/*.less'], ['build-less']);
});

//实时预览
gulp.task('browser-sync', function() {
  var file = [
    'dist/**/*.html',
    'dist/css/**/*.css',
    'dist/img/**/*',
    'dist/js/**/*.js',
  ];
  borwserSync.init(file, {
    options: {
      host: '192.168.10.110'
    },
    server: {
      baseDir: './dist'
    }
  })
});

// 默认任务
gulp.task('default', function(){
  gulp.run('build-less', 'watch', 'browser-sync');
});
