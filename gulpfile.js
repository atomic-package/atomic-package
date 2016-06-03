var gulp = require("gulp"),
    path = require('path'),
    compass = require('gulp-compass'),
    cssmin = require('gulp-cssmin'),
    connect = require('gulp-connect'),
    watch = require('gulp-watch'),
    clean = require('gulp-clean'),
    rename = require("gulp-rename"),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    typescript = require('gulp-tsc'),
    tsd = require('gulp-tsd'),
    server = require('gulp-express'),
    plumber = require('gulp-plumber'),
    del = require('del'),
    runSequence = require('run-sequence');

var SOURCE_DIR = '.',
    RELEASE_DIR = 'docs/static',
    DIST_DIR = 'dist';

var tsFiles = [ SOURCE_DIR + '/ts/**/*.ts' ];
var scssFiles = [ SOURCE_DIR + '/scss/**/*.scss' ];
var cssFiles = [
      RELEASE_DIR + '/css/**/*.css',
      DIST_DIR + '/css/**/*.css'
    ];

var jsFiles = [
      SOURCE_DIR + '/js/**/*.js',
      '!data/js/contrib/**/*.js'
    ];


// Clean File
gulp.task('clean-dir', function() {
    del([RELEASE_DIR + '/*'], {force: true});
});

gulp.task('clean-ts', function(cb) {
    del([RELEASE_DIR + '/**/*.ts'], {force: true}, cb);
});


// compass
gulp.task('compass', function() {
    return gulp.src(scssFiles)
        .pipe(plumber())
        .pipe(compass({
            style: 'expanded',
            specify: SOURCE_DIR + '/scss/atomic-pack.scss',
            css: RELEASE_DIR + '/css',
            sass: SOURCE_DIR + '/scss',
            imagesDir: ''
        }));
});

gulp.task('copy-js', function () {
    gulp.src([
            SOURCE_DIR + '/js/' + '**/*.js',
            '!' + SOURCE_DIR + '/js/' + '**/contrib/*.js'
    ]).pipe(gulp.dest( RELEASE_DIR + '/js/' ));
});


// JavaScript uglify
gulp.task('uglify-contrib', function () {
    gulp.src([])
        .pipe(uglify())
        .pipe(concat('contrib.js'))
        .pipe(gulp.dest(RELEASE_DIR + '/js/'));
});


gulp.task('cssmin', function () {
    gulp.src(RELEASE_DIR + '/css/**/*.css')
        .pipe(cssmin())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(RELEASE_DIR + '/css/'));
});

// typescript
gulp.task('typescript', function () {
    gulp.src([
            SOURCE_DIR + '/ts/**/*.ts'
    ])
        .pipe(plumber())
        .pipe(typescript({ removeComments: true, module: 'commonjs' }))
        .pipe(gulp.dest(RELEASE_DIR + '/js/'));
});


gulp.task('tsd', function () {
    tsd({
        command: 'reinstall',
        config: './tsd.json'
    }, callback);
});

// ファイル更新監視
gulp.task('watch', function() {
    // compass
    gulp.watch([scssFiles],['compass']);
    // css min
    gulp.watch([cssFiles],['cssmin']);
    // js
    gulp.watch([jsFiles],['copy-js']);
    // typescript
    gulp.watch([tsFiles],['build-typescript']);
});


/**
 * Gulp Server
 **/
gulp.task('server', ['connect'], function() {
    gulp.watch([
            SOURCE_DIR + '/scss/**/*.*',
            SOURCE_DIR + '/ts/**/*.*',
            SOURCE_DIR + '/js/**/*.*'
    ]).on('change', function(changedFile) {
        gulp.src(changedFile.path).pipe(connect.reload());
    });
});

gulp.task('connect', function() {
    connect.server({
        root: [__dirname + '/docs/public/'],
        port: 8088,
        livereload: true
    });
    console.log('Server started: http://localhost:8088');
});


// Build Task
gulp.task('build-ui', ['compass']);
gulp.task('build-typescript', ['typescript']);
gulp.task('build-javascript', ['copy-js', 'uglify-contrib']);


// All task
gulp.task('default', function(callback) {
    runSequence(
        'clean-dir',
        'compass',
        'build-ui',
        'build-typescript',
        'build-javascript',
        'watch',
        callback
    );
});


