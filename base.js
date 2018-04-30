"use strict";

module.exports = {
	parser: "babel-eslint",
	extends: [
		"standard",
		"plugin:promise/recommended",
		"plugin:import/recommended"
	],
	plugins: ["import"],
	env: {
		browser: true,
		node: true,
		es6: true,
		mocha: true,
		jest: true
	},
	rules: {
		"import/no-absolute-path": 2,
		"import/no-extraneous-dependencies": 2,
		"import/no-mutable-exports": 2,
		"import/newline-after-import": 1,
		"import/unambiguous": 0,

		"promise/avoid-new": 0,
		"promise/no-callback-in-promise": 0,
		"promise/always-return": 0,

		"arrow-parens": [1, "always"],
		"brace-style": [
			1,
			"stroustrup",
			{
				allowSingleLine: true
			}
		],
		camelcase: 0,
		"comma-dangle": [
			1,
			{
				arrays: "always-multiline",
				objects: "always-multiline",
				imports: "always-multiline",
				exports: "always-multiline",
				functions: "always-multiline"
			}
		],
		indent: [
			2,
			"tab",
			{
				SwitchCase: 1
			}
		],
		"lines-around-comment": [
			1,
			{
				beforeBlockComment: true,
				beforeLineComment: true
			}
		],
		"max-len": [
			1,
			{
				code: 80,
				tabWidth: 2,
				ignoreComments: true,
				ignoreStrings: true,
				ignoreUrls: true,
				ignoreRegExpLiterals: true
			}
		],
		"no-multiple-empty-lines": [
			1,
			{
				max: 2
			}
		],
		"no-unused-vars": [
			1,
			{
				vars: "all",
				args: "after-used",
				caughtErrors: "none",
				ignoreRestSiblings: true
			}
		],
		"no-tabs": 0,
		"operator-linebreak": [1, "after"],
		"padded-blocks": 0,
		quotes: [1, "single"],
		semi: [1, "always"],
		"space-before-function-paren": [
			1,
			{
				anonymous: "always",
				named: "never"
			}
		],
		"spaced-comment": [
			1,
			"always",
			{
				markers: ["*"],
				exceptions: ["/", "+", "-"]
			}
		]
	}
};
