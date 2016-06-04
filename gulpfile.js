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

gulp.task('ts.clean', function(cb) {
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


// JavaScript uglify
gulp.task('uglify-contrib', function () {
    gulp.src([])
        .pipe(uglify())
        .pipe(concat('contrib.js'))
        .pipe(gulp.dest(RELEASE_DIR + '/js/'));
});


gulp.task('css.min', function () {
    gulp.src(RELEASE_DIR + '/css/**/*.css')
        .pipe(cssmin())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(RELEASE_DIR + '/css/'));
});

// typescript
gulp.task('ts', function () {
    gulp.src(tsFiles)
        .pipe(plumber())
        .pipe(typescript({ removeComments: true, module: 'commonjs' }))
        .pipe(gulp.dest(SOURCE_DIR + '/js/'));
});


gulp.task('tsd', function () {
    tsd({
        command: 'reinstall',
        config: './tsd.json'
    }, callback);
});


gulp.task('css.dist', function() {
    gulp.src(scssFiles)
        .pipe(plumber())
        .pipe(compass({
            style: 'expanded',
            specify: DIST_DIR + '/scss/atomic-pack.scss',
            css: RELEASE_DIR + '/css',
            sass: SOURCE_DIR + '/scss',
            imagesDir: ''
        }));
});

gulp.task('js.copy', function() {
    gulp.src([
            SOURCE_DIR + '/js/' + '**/*.js',
            '!' + SOURCE_DIR + '/js/' + '**/contrib/*.js'
    ]).pipe(gulp.dest( RELEASE_DIR + '/js/' ));
});

gulp.task('js.concat', function() {
    gulp.src(jsFiles)
        .pipe(plumber())
        .pipe(concat('atomic-package.js'))
        .pipe(gulp.dest( RELEASE_DIR + '/js/'));
});

gulp.task('js.dist', function() {
    gulp.src(jsFiles)
        .pipe(plumber())
        .pipe(concat('atomic-package.js'))
        .pipe(gulp.dest(DIST_DIR));

    gulp.src(DIST_DIR + 'atomic-package.js')
        .pipe(plumber())
        .pipe(uglify({
            preserveComments: 'some' // ! から始まるコメントを残すオプションを追加
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(DIST_DIR));
});

// ファイル更新監視
gulp.task('watch', function() {
    // compass
    gulp.watch([scssFiles],['compass']);
    // css min
    gulp.watch([cssFiles],['css.min']);
    // js
    gulp.watch([jsFiles],['js.copy']);
    // typescript
    gulp.watch([tsFiles],['build.ts']);
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
gulp.task('build.ui', ['compass']);
gulp.task('build.ts', ['ts']);
gulp.task('build.js', ['js.copy', 'uglify-contrib']);

gulp.task('dist', ['css.dist', 'js.dist']);

// All task
gulp.task('default', function(callback) {
    runSequence(
        'clean-dir',
        'compass',
        'build.ui',
        'build.ts',
        'build.js',
        'watch',
        callback
    );
});


