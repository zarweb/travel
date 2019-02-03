var gulp           = require('gulp'),
    gutil          = require('gulp-util' ),
    sass           = require('gulp-sass'),
    browserSync    = require('browser-sync'),
    concat         = require('gulp-concat'),
    uglify         = require('gulp-uglify'),
    cleanCSS       = require('gulp-clean-css'),
    rename         = require('gulp-rename'),
    del            = require('del'),
    imagemin       = require('gulp-imagemin'),
    cache          = require('gulp-cache'),
    autoprefixer   = require('gulp-autoprefixer'),
    ftp            = require('vinyl-ftp'),
    notify         = require("gulp-notify"),
    rsync          = require('gulp-rsync');

// Пользовательские скрипты проекта



gulp.task('js', function() {
    return gulp.src('app/js/**/*.js')
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false,
    });
});

gulp.task('sass', function() {
    return gulp.src('app/sass/**/*.scss')
        .pipe(sass({outputStyle: 'expanded'}).on("error", notify.onError()))
        // .pipe(rename({suffix: '.min', prefix : ''}))
        .pipe(autoprefixer(['last 15 versions']))
        .pipe(cleanCSS()) // Опционально, закомментировать при отладке
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('watch', ['sass', 'js', 'browser-sync'], function() {
    gulp.watch('app/sass/**/*.scss', ['sass']);
    gulp.watch(['libs/**/*.js', 'app/js/common.js'], ['js']);
    gulp.watch('app/*.html', browserSync.reload);
});

gulp.task('imagemin', function() {
    return gulp.src('app/img/**/*')
        .pipe(cache(imagemin())) // Cache Images
        .pipe(gulp.dest('dist/img'));
});



gulp.task('default', ['watch']);
