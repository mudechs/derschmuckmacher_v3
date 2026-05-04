let mix = require('laravel-mix');

/*~
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.sass('sass/app.scss', 'sass/app.css')
	.combine([
		'sass/app.css'
	], '../public/css/app.css');
mix.copyDirectory(
	'fonts/Inter', '../public/fonts/Inter'
);
mix.scripts([
	'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
	'scripts/app.js',
	'scripts/navigation.js',
	'scripts/viewport-toggle.js',
], '../public/js/app.js');
