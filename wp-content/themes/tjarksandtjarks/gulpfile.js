var gulp = require('gulp');
var concat = require('gulp-concat');
var concatCss = require('gulp-concat-css');
var minify = require('gulp-minify');
var uglify = require("gulp-uglify");


gulp.task('scripts', function() {
    return gulp.src(['assets/js/jquery-1.12.4.min.js', 'assets/js/jquery-ui.js', 'assets/js/jquery-migrate-1.2.1.min.js', 'assets/js/bootstrap.min.js', 'assets/js/isotope.pkgd.min.js', 'assets/js/jquery.ScrollMagic.js', 'assets/js/velocity.js', 'assets/js/velocity.ui.js', 'assets/js/slick.min.js', 'assets/js/typed.min.js', 'assets/js/script.js'])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./assets/js/'));
});

gulp.task('compress', function() {
    gulp.src('./assets/js/*.js')
        .pipe(minify({
            ext: {
                src: '-live.js',
                min: '.js',
            },
            exclude: ['tasks'],
            ignoreFiles: ['jquery.easings.min.js', 'jquery.aniview.js', 'animation.velocity.js', 'animation.velocity.min.js', 'bootstrap.js', 'bootstrap.min.js', 'isotope.pkgd.min.js', 'jquery-1.12.4.min.js', 'jquery-migrate-1.2.1.min.js', 'jquery-ui.js', 'jquery.ScrollMagic.js', 'modernizr.js', 'npm.js', 'script.js', 'slick.min.js', 'typed.min.js', 'velocity.js', 'velocity.ui.js']

        }))
        .pipe(gulp.dest('./assets/js'))
});

gulp.task('css', function() {
    return gulp.src(['assets/css/bootstrap.css', 'assets/css/outdatedbrowser', 'assets/css/slick.css', 'assets/css/editable.css'])
        .pipe(concatCss('app.css'))
        .pipe(gulp.dest('./assets/css'));
});

gulp.task('minify-js', function() {
    gulp.src('./assets/js/app-live.js') // path to your files
        .pipe(uglify())
        .pipe(gulp.dest('./assets/js/'));
});


gulp.task('watch', function() {
    gulp.watch('assets/js/*.js', ['scripts']);
    gulp.watch('assets/css/*.css', ['css']);
});

gulp.task('default', ['scripts', 'css', 'compress', 'watch']);