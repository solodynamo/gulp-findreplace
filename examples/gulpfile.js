var gulp = require('gulp');
var sreplace = require('gulp-findreplace');


gulp.task('replaceIt', function() {
  return gulp.src('example.txt')
             .pipe(sreplace('love', 'code'))
             .pipe(gulp.dest('build'));
});

gulp.task('default', ['replaceIt']);
