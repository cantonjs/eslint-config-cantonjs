'use strict';

module.exports = {
	'extends': [
		'./base.js',
		'plugin:react/recommended',
	],
	'plugins': [
		'react',
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
