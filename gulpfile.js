var gulp = require("gulp"),
    path = require('path'),
    foreach = require('gulp-foreach'),
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
    DOCS_DIR = 'docs',
    RELEASE_DIR = 'docs/dist',
    DIST_DIR = 'dist';

var tsFiles = [ SOURCE_DIR + '/ts/**/*.ts' ];
var scssFiles = [ SOURCE_DIR + '/scss/**/*.scss' ];

var cssFiles = [
      RELEASE_DIR + '/css/atomic-package/*.css',
      RELEASE_DIR + '/css/atomic-package-theme/*.css'
    ];

var jsFiles = [
      RELEASE_DIR + '/js/*.js'
    ];

var docsFiles = [
      DOCS_DIR + '/static/css/*.css',
      DOCS_DIR + '/static/js/*.js'
    ];

// Clean Task
gulp.task('clean.release', function() {
  return del([RELEASE_DIR + '/*'], {force: true});
});

gulp.task('clean.dist', function() {
  return del([DIST_DIR + '/*'], {force: true});
});

gulp.task('ts.clean', function(cb) {
  return del([RELEASE_DIR + '/**/*.ts'], {force: true}, cb);
});


// compass
gulp.task('compass', function() {
  return gulp.src(scssFiles)
    .pipe(plumber())
    .pipe(compass({
        style: 'expanded',
        css: RELEASE_DIR + '/css/',
        sass: SOURCE_DIR + '/scss/',
        imagesDir: ''
    }));
});

gulp.task('css.copy', function() {
  return gulp.src(cssFiles)
    .pipe(gulp.dest( DOCS_DIR + '/static/css/' ));
});

gulp.task('css.copy.dist', function() {
  return gulp.src(cssFiles)
    .pipe(gulp.dest( DIST_DIR + '/css/' ));
});

gulp.task('css.min', function () {
    return gulp.src(RELEASE_DIR + '/css/**/*.css')
        .pipe(cssmin())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(RELEASE_DIR + '/css/'));
});

// JavaScript uglify
gulp.task('uglify-contrib', function () {
    gulp.src([])
        .pipe(uglify())
        .pipe(concat('contrib.js'))
        .pipe(gulp.dest(RELEASE_DIR + '/js/'));
});

// typescript
gulp.task('ts', function () {
  return gulp.src(tsFiles)
      .pipe(plumber())
      .pipe(typescript({
        removeComments: true,
        module: 'commonjs',
        out: 'atomic-package.js'
      }))
      .pipe(gulp.dest(RELEASE_DIR + '/js/'));
});


gulp.task('tsd', function () {
    tsd({
        command: 'reinstall',
        config: './tsd.json'
    }, callback);
});

//gulp.task('js.concat', function() {
//  gulp.src(jsFiles)
//    .pipe(plumber())
//    .pipe(concat('atomic-package.js'))
//    .pipe(gulp.dest( RELEASE_DIR + '/js/'));
//});

gulp.task('js.min', function() {
  return gulp.src(RELEASE_DIR + '/js/**/*.js')
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(RELEASE_DIR + '/js/'));
});

gulp.task('js.copy', function() {
  return gulp.src(jsFiles)
    .pipe(gulp.dest( DOCS_DIR + '/static/js/' ));
});

gulp.task('js.copy.dist', function() {
  return gulp.src(jsFiles)
    .pipe(gulp.dest( DIST_DIR + '/js/' ));
});

// ファイル更新監視
gulp.task('watch', function() {
  // SCSS
  gulp.watch([scssFiles],['build.css']);

  // typescript
  gulp.watch([tsFiles],['build.js']);

  // docs files
  gulp.watch([docsFiles],['docs.copy']);
});


gulp.task('docs.copy', function() {
  return gulp.src(docsFiles)
    .pipe(gulp.dest( DOCS_DIR + '/public/' ));
});

/**
 * Gulp Server
 **/
gulp.task('server', ['connect'], function() {
    gulp.watch([
            SOURCE_DIR + '/scss/**/*.*',
            SOURCE_DIR + '/ts/**/*.*'
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


/**
 * Build Task
 **/
gulp.task('build.ui', function(callback) {
  return runSequence(
    ['build.css', 'build.js'],
    callback
  );
});

gulp.task('build.css', function(callback) {
  return runSequence(
    'compass',
    'css.min',
    'css.copy',
    callback
  );
});

gulp.task('build.js', function(callback) {
  return runSequence(
    'ts',
    'js.min',
    'js.copy',
    callback
  );
});

/**
 * Output Task
 **/
gulp.task('dist', function(callback) {
  return runSequence(
    'clean.release',
    'clean.dist',
    ['css.dist', 'js.dist'],
    callback
  );
});

gulp.task('css.dist', function(callback) {
  return runSequence(
    'build.css',
    'css.copy.dist',
    callback
  );
});

gulp.task('js.dist', function(callback) {
  return runSequence(
    'build.js',
    'js.copy.dist',
    callback
  );
});

/**
 * All Task
 **/
gulp.task('default', function(callback) {
    runSequence(
        'clean.release',
        'build.ui',
        'watch',
        callback
    );
});


