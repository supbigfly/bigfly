var gulp = require('gulp');
//事先在终端安装了包
var sass = require('gulp-sass');
//事先在终端安装了包
var prefix = require('gulp-autoprefixer');
//事先在终端安装了包
var wrap = require('gulp-wrap');
//布局文件包
gulp.task('build',function(){
  gulp.src('pages/*.html')
  .pipe(wrap({src:"layout/default.html"}))
  .pipe(gulp.dest(".."));
});
function handleError(err){
  console.log(err.toString());
  this.emit('end');
}
gulp.task('sass', function () {
  gulp.src('styles/main.scss')
  //在当前级别创建styles文件夹，下面创建了scss
    .pipe(sass()).on('error',handleError)
    .pipe(prefix())
    .pipe(gulp.dest('../styles'));
    //执行命令后在上一级建立文件夹
});
gulp.task('cp',function(){
  gulp.src('index.html')
      .pipe(gulp.dest('..'));
});
gulp.task('watch',function(){
  gulp.watch(['*.html'],['cp']);
  //当改变当前文件夹下的html文件时，终端自动执行cp任务
  gulp.watch(['styles/*.scss'],['sass']);
  //当改变当前文件夹下的scss文件时，终端自动执行sass任务
})
gulp.task('default',['sass','cp','watch']);
