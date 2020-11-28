const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', ()=> {
  return gulp.src('static/scss/puzzle.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/'))
})
