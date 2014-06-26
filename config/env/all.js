'use strict';

module.exports = {
	app: {
		title: 'eKart',
		description: 'Full-Stack JavaScript with MongoDB, Express, AngularJS, and Node.js',
		keywords: 'MongoDB, Express, AngularJS, Node.js'
	},
	port: process.env.PORT || 3000,
	templateEngine: 'swig',
	sessionSecret: 'MEAN',
	sessionCollection: 'sessions',
	assets: {
		lib: {
			css: [
				'public/lib/bootstrap/dist/css/bootstrap.css',
				'public/lib/angular-loading-bar/src/loading-bar.css',
				'http://fonts.googleapis.com/css?family=Source+Sans+Pro|Droid+Sans|Open+Sans+Condensed:300',
				'public/lib/font-awesome/css/font-awesome.min.css',
				'public/lib/angular-carousel/dist/angular-carousel.css'
			],
			js: [
				'public/lib/jquery/dist/jquery.js',
				'public/lib/angular/angular.js',
				'public/lib/angular-resource/angular-resource.js',
				'public/lib/angular-cookies/angular-cookies.js',
				'public/lib/angular-animate/angular-animate.js',
				'public/lib/angular-touch/angular-touch.js',
				'public/lib/angular-sanitize/angular-sanitize.js',
				'public/lib/angular-ui-router/release/angular-ui-router.js',
				'public/lib/angular-ui-utils/ui-utils.js',
				'public/lib/angular-bootstrap/ui-bootstrap-tpls.js',
				'public/lib/slick-carousel/slick/slick.js',
				'public/lib/angular-slick/dist/slick.js',
				'public/lib/bootstrap/dist/js/bootstrap.min.js',
				'public/lib/angular-loading-bar/src/loading-bar.js',
				'public/lib/angular-carousel/dist/angular-carousel.js',
			]
		},
		css: [
			'public/modules/**/css/*.css',
		],
		js: [
			'public/config.js',
			'public/application.js',
			'public/modules/*/*.js',
			'public/modules/*/*[!tests]*/*.js'
		],
		tests: [
			'public/lib/angular-mocks/angular-mocks.js',
			'public/modules/*/tests/*.js'
		]
	}
};