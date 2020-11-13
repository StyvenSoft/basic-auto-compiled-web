const gulp = require('gulp')
const sass = require('gulp-sass')
const pug = require('gulp-pug')
const browserSync = require('browser-sync').create()

gulp.task('sass', () => {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest('./public/css'))
});

gulp.task('pug', () => {
    return gulp.src('src/**/*.pug')
        .pipe(pug({ pretty: true }))
        .pipe(gulp.dest('./public'))
});
