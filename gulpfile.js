/* globals require */

'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

var paths = {
  src: 'src/behave.js'
};

gulp.task('default', function() {
  return gulp.src(paths.src)
    .pipe(concat('behave.js'))
    .pipe(gulp.dest('./dist/'))
    .pipe(concat('behave.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest("./dist/"));
});
