const gulp = require('gulp'),
	  browserSync = require('browser-sync'),
	  concat = require('gulp-concat'),
	  rename = require('gulp-rename'),
	  uglify = require('gulp-uglify');


gulp.task('serve', function() {
	browserSync.init({
		server: {
			baseDir: './',
			index: 'index.html'
		}
	});

});

gulp.task('build.vendor', function() {
	return gulp.src([
			'bower_components/jquery/dist.jquery.min.js',
			'bower_components/angular/angular.min.js',
			'bower_components/angular-ui-router/release/angular-ui-router.min.js',
			'vendor/embed-codepen.min.js',
			'bower_components/ngdropover/dist/ngdropover.min.js'
		])
	.pipe(concat('vendor.js'))
	.pipe(gulp.dest('js'));
});
