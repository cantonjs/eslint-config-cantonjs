'use strict';

module.exports = {
	'extends': [
		'./base.js',
	],
	'settings': {
		'import/resolver': {
			'webpack': {
				'config': 'webpack.config.babel.js',
			},
			'babel-module': {},
		},
	},
};
