var gulp = require("gulp");
var shell = require("gulp-shell");
var uglifyJS = require("uglify-js");
var runSequence = require('run-sequence');

gulp.task("minify", shell.task(["uglifyjs dist/app.js --compress --mangle --screw-ie8 -o dist/app.js"]));

gulp.task("ngc", shell.task("node_modules\\.bin\\ngc.cmd"));

gulp.task("bundle", shell.task(["node builder.js"]));

gulp.task("build", function(done) {
    runSequence("ngc", "bundle", "minify", done);
});

gulp.task("serve", function() {
    
});