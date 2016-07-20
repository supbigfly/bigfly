var gulp = require('gulp');
var sass = require('gulp-sass');
//添加兼容名称
var prefix = require('gulp-autoprefixer');

gulp.task('sass',function(){
  gulp.src('styles/main.scss')
  //在当前级别创建styles文件夹，下面创建scss
    .pipe(sass())
    .pipe(prefix())
    .pipe(gulp.dest('../styles'));
    //执行命令后在上一级建立文件夹
});
//部署任务将index.html部署到source外面
gulp.task('cp',function(){
  //第一步，创建任务名称为cp
  gulp.src('index.html')
  //第二步，找到原始文件
  .pipe(gulp.dest('..'));
  //第三步，部署到当前目录上一级
});
//创建自动执行任务,需要先加载房在这里
gulp.task('watch',function(){
  gulp.watch(["*.html"],["cp"]);
  //当改变当前文件夹下的html文件时，终端自动执行cp任务
  gulp.watch(["styles/*.scss"],["sass"]);
  //当改变当前文件夹下的scss文件时，终端自动执行sass任务
})
//因cp与sass两个任务，建立合并执行任务
gulp.task("default",["sass","cp","watch"]);
//由于default是关键字默认，所以在终端输入gulp就可以了
