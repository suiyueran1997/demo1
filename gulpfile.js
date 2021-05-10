var gulp = require('gulp'),
    sass = require('gulp-sass'),
    minifyCSS = require('gulp-minify-css'),
    stripDebug = require('gulp-strip-debug'),
    uglify = require('gulp-uglify'),
    del = require('del');
    Vinyl = require('vinyl');
    gulpif = require('gulp-if');


var condition = function (f) {
    console.log(f.path.endsWith('.min.js'));
    if (f.path.endsWith('.min.js')) {
        return false;
    }
    return true;
};
gulp.task('scss', function() {
    return gulp.src('public/static/css/**/*.scss')
        .pipe(sass())
        .pipe(minifyCSS())
        .pipe(gulp.dest('public/static/css'));
});
gulp.task('js', function() {
    return gulp.src('public/static/js/**/*.js')
        .pipe(stripDebug())
        .pipe(gulpif(condition, uglify({mangle: {reserved: ['require' ,'exports' ,'module' ,'$']}})))
        .pipe(gulp.dest('public/static/js'));
});
gulp.task('clean:js', async() => {
    await del([
        'public/static/css/**/*.scss',
        '!public/static/js/**/*.js',
        '!public/static/js/**/*.min.js'
    ]);

})
gulp.task('default', gulp.series(gulp.parallel('scss', 'js'), 'clean:js'));

// gulp.task('watch', function() {
//     gulp.watch('static/**/*.{js,scss}').on('change', function(e) {
//         console.log(e);
//         exec('ifconfig', function(err, stdout, stderr) {
//             console.log(stdout);
//             console.logs(stderr);
//             console.error(err);
//         });
//     });
// });
