var gulp = require('gulp'),
    sass = require('gulp-sass');
gulp.task('scss', function() {
    return gulp.src('*.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'));
});
gulp.task('watch', function() {
    gulp.watch('*.scss', gulp.series(['scss']));
})