import imagemin from 'gulp-imagemin';
import gulp from 'gulp';

export const image = () => {
	return app.gulp.src(app.path.src.img)
		.pipe(imagemin())
		.pipe(gulp.dest(app.path.build.img))
        .pipe(app.plugins.browsersync.stream())
}