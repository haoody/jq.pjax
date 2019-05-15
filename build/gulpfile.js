var gulp = require('gulp');
var uglify = require('gulp-uglify')
var clean = require('gulp-clean')
var pump = require('pump')

/**
 * 清除目录下的文件
 */
gulp.task('clean:dist', function (cb) {
    pump([
        gulp.src('../dist'),
        clean({force: true})
    ], cb)
});

/**
 * 压缩文件
 */
gulp.task('uglify', async () => {
    await gulp.src('../jquery.pjax.js')
        .pipe(uglify())
        .pipe(gulp.dest('../dist'))
});