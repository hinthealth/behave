var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

var paths = {
  vendor: [
       'bower_components/lodash/dist/lodash.min.js',
       'bower_components/jQuery/dist/jquery.min.js'
      ],
  src: 'src/behave.js'
};

gulp.task('default', function() {
  var build_files = paths.vendor.concat(paths.src)
  return gulp.src(build_files)
    .pipe(concat('behave.js'))
    .pipe(gulp.dest('./dist/'))
    .pipe(concat('behave.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest("./dist/"));
});
