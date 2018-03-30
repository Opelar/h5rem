var gulp = require("gulp");
var rollup = require("rollup");
var json = require("rollup-plugin-json");
var babel = require("rollup-plugin-babel");

var watch = require("gulp-watch");
var gulpLess = require("gulp-less");
var gulpMinifyCss = require("gulp-minify-css");
var gulpSourcemaps = require("gulp-sourcemaps");
var postcss = require("gulp-postcss");
var px2rem = require("postcss-px2rem");
var cssBase64 = require("gulp-css-base64");

// var px2rem = require("gulp-px2rem");
// var babel = require("gulp-babel"); // ES6转化ES5
// var concat = require("gulp-concat");
// var uglify = require("gulp-uglify"); // 压缩 JS

// 编译 less && 压缩 css
gulp.task("allLess", function() {
  var processors = [px2rem({ remUnit: 75 })];

  return (gulp
      .src("public/less/index.less")
      .pipe(gulpSourcemaps.init()) //sourcemaps
      .pipe(gulpLess()) //编译less
      // .pipe(gulpMinifyCss())//压缩css
      .pipe(postcss(processors))
      .pipe(
        cssBase64(/* {
          baseDir: "../../images",
          maxWeightResource: 100,
          extensionsAllowed: [".gif", ".jpg"]
        } */)
      )
      .pipe(gulp.dest("public/dist/"))
      .pipe(gulpSourcemaps.write()) );
});

// es6 转 es5 rollup 打包
gulp.task("build", async function() {
  const bundle = await rollup.rollup({
    input: "./public/javascript/index.js",
    plugins: [
      json(),
      babel({
        exclude: "node_modules/**"
      })
    ],
    external: ["jquery"]
  });

  await bundle.write({
    file: "./public/dist/index.js",
    globals: {
      jquery: "jQuery"
    },
    format: "umd",
    name: "index",
    sourcemap: true
  });
});

gulp.watch("public/less/**/*.less", ["allLess"]);
gulp.watch("public/javscript/**/*.js", ["build"]);
// gulp.watch('public/dist/css/index.css', ['miniCss']);

gulp.task("default", ["allLess", "build"]);
