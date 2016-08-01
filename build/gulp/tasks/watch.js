"use strict";

let gulp = require('gulp');
let browsersync = require('browser-sync').create();
let sass = require('gulp-sass');


// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browsersync.init({
        proxy: "doeshomeopathywork.dev"  
    });

    gulp.watch("build/sass/*.scss", ['sass']);
    gulp.watch("*.html").on('change', browsersync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("build/sass/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("static/css"))
        .pipe(browsersync.stream());
});

