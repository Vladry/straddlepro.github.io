const gulp = require('gulp'),
    scss = require('gulp-sass'),
    del = require('del'),  //новое!  https://www.npmjs.com/package/del
    // cleanCss = require('gulp-clean-css'), //вместо него брать: postcss + cssnano
    postcss = require('gulp-postcss'), //новое! использовать вместо gulp-clean-css
    concat = require('gulp-concat'),
    // uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    babel = require('gulp-babel'),
    browserSync = require('browser-sync').create();  //https://browsersync.io/docs/api

scss.compiler = require('node-sass');

const path = {
    html: "./index.html",
    src: {
        fonts: "./src/fonts/**/*",
        img: "./src/img/**/*",
        scss: "./src/scss/**/*.scss",
        js: "./src/*.js"
    },
    dist: {
        self: "./assets/",
        fonts: "./assets/fonts/",
        img: "./assets/img/",
        css: "./assets/",
        js: "./assets/",
        cssDel: "./assets/*.css", //указание путей удаляемых файлов при чистке dist
        jsDel: "./assets/*.js"    //указание путей удаляемых файлов при чистке dist
    }
};

const finalJsfileName = "main.js";
const finalCssFilename = 'styles.css';

const buildImg = () => (
    gulp.src(path.src.img)
        .pipe(imagemin())
        .pipe(gulp.dest(path.dist.img))
        .pipe(browserSync.reload({stream: true}))
);

const buildFonts = () => (
    gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.dist.fonts))
);

const buildCss = () => (
    gulp.src(path.src.scss)
        .pipe(scss().on("error", scss.logError))
        // .pipe(cleanCss({ compatibility: 'ie8' }))
        .pipe(postcss()) //новое!  https://github.com/postcss/gulp-postcss
        .pipe(concat(finalCssFilename))
        .pipe(gulp.dest(path.dist.css))
        .pipe(browserSync.reload({stream: true}))
);

const buildJs = () => (
    gulp.src(path.src.js)
        .pipe(concat(finalJsfileName))
        .pipe(babel({presets: ['@babel/env']}))
        // .pipe(uglify({toplevel: true}))
        .pipe(gulp.dest(path.dist.js))
        .pipe(browserSync.reload({stream: true}))
);

const clean = async () => {
    const deletedFiles = await del([path.dist.cssDel, path.dist.jsDel]);
    console.log(`удалены файлы: ${deletedFiles}`);
};

const build = async () => {
    await clean();
    buildJs();
    buildCss();
    buildFonts();
    buildImg();
};

const dev = () => {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    })
};

const watch = ()=>
{
    // gulp.watch(path.src.js, buildJs).on("change", browserSync.reload);
    gulp.watch(path.src.scss, buildCss).on("change", browserSync.reload);
    gulp.watch(path.html).on("change", browserSync.reload);
};

gulp.task("watch", watch);
gulp.task("buildJs", buildJs);
gulp.task("buildCss", buildCss);
gulp.task("default", build);
gulp.task("clean", clean);
gulp.task("buildImg", buildImg);
gulp.task("buildFonts", buildFonts);
gulp.task("build", build);
gulp.task("dev", dev);


