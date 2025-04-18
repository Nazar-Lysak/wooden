const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const rename = require('gulp-rename');

// Шлях до SCSS
const scssPath = './styles/**/*.scss';  // Watch all SCSS files
const mainScssPath = './styles/main.scss';  // Only compile this SCSS file
const jsPath = './scripts/**/*.js';

// SCSS → CSS
function scssTask() {
  return src(mainScssPath)  // Only compile main.scss
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(rename({ suffix: '.min' }))
    .pipe(dest('dist/styles'));
}

// JS → Мінімізація
function jsTask() {
  return src(jsPath)
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(dest('dist/scripts'));
}

// Спостерігач
function watchTask() {
  watch(scssPath, scssTask);  // Watch all SCSS files, but only compile main.scss
  watch(jsPath, jsTask);  // Watch JS files
}

// Експортуємо
exports.default = series(scssTask, jsTask, watchTask);
exports.watch = watchTask; // Export the watch task separately
