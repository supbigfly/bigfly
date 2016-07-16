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
})
