const gulp = require('gulp'),
    scss = require('gulp-sass'),
    del = require('del'),  //новое!  https://www.npmjs.com/package/del
    // cleanCss = require('gulp-clean-css'), //вместо него брать: postcss + cssnano
    postcss = require('gulp-postcss'), //новое! использовать вместо gulp-clean-css
    concat = require('gulp-concat'),
    // uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    babel = require('gulp-babel'),
    replace = require('gulp-replace'),
    rename = require('gulp-rename'),  //https://www.npmjs.com/package/gulp-rename#usage
    browserSync = require('browser-sync').create();  //https://browsersync.io/docs/api

scss.compiler = require('node-sass');

const path = {
    src: {
        html: "./src/html/**/*",
        fonts: "./src/fonts/**/*",
        img: "./src/img/**/*",
        scss: "./src/scss/**/*.scss",
        js: "./src/*.js"
    },
    dist: {
        self: "./assets/",
        html: "./assets/templates/",
        fonts: "./assets/fonts/",
        img: "./assets/img/",
        css: "./assets/css/",
        js: "./assets/js/",
        cssDel: "./assets/css/*.css", //указание путей удаляемых файлов при чистке dist
        jsDel: "./assets/js/*.js",
        htmlDel: "./assets/templates/*.ftl"
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

const buildHtml = () => (
    gulp.src(path.src.html)
        .pipe(rename(function (path) {
            path.extname = ".ftl";
        }))
        .pipe(replace('href="../../', 'href="../'))
        .pipe(replace('src="../../', 'src="../'))
        .pipe(gulp.dest(path.dist.html))
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
    const deletedFiles = await del([path.dist.cssDel, path.dist.jsDel, path.dist.htmlDel]);
    console.log(`удалены файлы: ${deletedFiles}`);
};

const build = gulp.series(clean, gulp.parallel(buildJs, buildCss, buildHtml));

const _build = async () => {
    await clean();
    buildJs();
    buildCss();
    buildHtml();
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

const watch = () => {
    gulp.watch(path.src.js, buildJs).on("change", browserSync.reload);
    gulp.watch(path.src.scss, buildCss).on("change", browserSync.reload);
    gulp.watch(path.src.html).on("change", browserSync.reload);
};

gulp.task("clean", clean);
gulp.task("default", build);
gulp.task("watch", watch);
gulp.task("js", buildJs);
gulp.task("css", buildCss);
gulp.task("img", buildImg);
gulp.task("fonts", buildFonts);
gulp.task("html", buildHtml);
gulp.task("dev", dev);


