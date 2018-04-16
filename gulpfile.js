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
    .pipe(gulp.dest('build/'))
})
