let gulp = require('gulp');
let rimraf = require('rimraf');
gulp.task('clean', function(callback){
    rimraf('./build', callback);
});
gulp.task('clearDir', function(callback){
    rimraf('./build/src/localtest', callback);
})
gulp.task('default', ['clearDir'], function(){
    gulp.src(['package.json','process.*.json'])
    .pipe(gulp.dest('build/'));
    gulp.src('public/**/*')
    .pipe(gulp.dest('build/public/'));
    gulp.src('config/**/*')
    .pipe(gulp.dest('build/config/'))
})
