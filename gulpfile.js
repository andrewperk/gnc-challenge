const gulp = require('gulp');
const sass = require('gulp-sass');
const minifyCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const changed = require('gulp-changed');

const files = {
    scssSrc: './src/Assets/scss/**/*.scss',
    scssDest: './src/Assets/css'
}

function scssTask() {
    return gulp.src(files.scssSrc)
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCSS())
    .pipe(rename({ suffix: '.min'}))
    .pipe(changed(files.scssDest))
    .pipe(gulp.dest(files.scssDest));
}

function watchTask() {
    gulp.watch(files.scssSrc, gulp.series(scssTask));
}

exports.default = gulp.series(watchTask);
