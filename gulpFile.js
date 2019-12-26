var gulp = require("gulp");
var less = require("gulp-less");
var uglify = require("gulp-uglifycss");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var minify = require("gulp-minify");
var notify = require("gulp-notify");
var csslint = require("gulp-csslint");
var eslint = require("gulp-eslint");
var stylelint = require("gulp-stylelint");
var sortAlphabetically = require("postcss-sort-alphabetically");
var cssSorter = require("css-declaration-sorter");

gulp.task("css", function() {
  var plugins = [autoprefixer(), cssSorter()];
  gulp
    .src("./less/index.less")
    .pipe(less())
    .pipe(gulp.dest("./css"))
    .pipe(postcss(plugins))
    .pipe(gulp.dest("./dest"));
  //.pipe(notify("Less compilation done"));
});

//  Script task
gulp.task("all-js", function() {
  return gulp
    .src("./index.js")
    .pipe(minify())
    .pipe(gulp.dest("./js"));
  //.pipe(notify("Js compilation done"));
});
//Csslint Task
gulp.task("csslint", function() {
  return gulp
    .src("./less/index.less")
    .pipe(less())
    .pipe(csslint())
    .pipe(csslint.formatter()); // Display errors
  //.pipe(notify("Csslint compilation done"));
});

// EsLint task
gulp.task("eslint", function() {
  return gulp
    .src("./index.js")
    .pipe(
      eslint({
        rules: {
          quotes: [1, "single"],
          semi: [1, "always"]
        }
      })
    )
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

// Stylelint tasks
gulp.task("stylelint", function() {
  return gulp.src("./less/*.less").pipe(
    stylelint({
      reporters: [
        {
          formatter: "string",
          console: true
        }
      ]
    })
  );
  // .pipe(notify("Stylelint Compilation done"));
});

// watch tasks
gulp.task("watch", function() {
  gulp.watch("./less/*.less", ["css"]);
  gulp.watch("./index.js", ["all-js"]);
  gulp.watch("./less/*.less", ["stylelint"]);
});

// default task
gulp.task("default", [
  "watch",
  "css",
  "all-js",
  "eslint",
  "stylelint",
  "csslint"
]);
