const gulp = require('gulp'),
    scss = require('gulp-sass'),
    clean = require('gulp-clean'),
    del =   require('del'),  //новое!  https://www.npmjs.com/package/del
    // cleanCss = require('gulp-clean-css'), //вместо него брать cssnano
    cssnano = require('cssnano'), //новое!
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    babel = require('gulp-babel'),
    browserSync = require('browser-sync').create();

sass.compiler = require('node-sass');

const path = {
    html: "./index.html",
    src: {
        fonts: "./src/fonts/**/*",
        img: "./src/img/*",
        scss: "./src/scss/**/*.scss",
        js: "./src/*.js"
    },
    dist: {
        self: "./dist/",
        fonts: "./dist/fonts/",
        img: "./dist/img/",
        css: "./dist/",
        js: "./dist/",
        cssDel: "./dist/*.css", //указание путей удаляемых файлов при чистке dist
        jsDel: "./dist/*.js"    //указание путей удаляемых файлов при чистке dist
    }
};

const finalJsfileName = "main.js";
const finalCssFilename = 'styles.css';

const buildCss = () => (
    gulp.src(path.src.scss)
        .pipe(scss().on("error", scss.logError))
        .pipe(autoprefixer({cascade: false}))
        .pipe(cssnano({compatibility: 'ie8'}))
        .pipe(concat(finalCssFilename))
        .pipe(gulp.dest(path.dist.css))
        .pipe(browserSync.stream({stream: true}))
);

const buildJs = ()=> (
    gulp.src(path.src.js)
        .pipe(concat(finalJsfileName))
        .pipe(babel({presets: ['@babel/env']}))
        // .pipe(uglify({toplevel: true}))
        .pipe(gulp.dest(path.dist.js))
        .pipe(browserSync.stream({stream: true}))
);

const cleanDist = async ()=> {
    const deletedFiles = await del([path.dist.cssDel, path.dist.jsDel]);
    console.log(`удалены файлы: ${deletedFiles}`);
};

