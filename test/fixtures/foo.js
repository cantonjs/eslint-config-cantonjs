import eslint from 'eslint';
import assert from 'assert';
import base from '../../base';
import react from '../../react';

const repoFiles = [
	'./test/fixtures/foo.js',
];

const test = function test(name, conf) {
	// Use the rules defined in this repo to test against.
	const eslintOpts = Object.assign({}, { useEslintrc: false }, conf);

	// Runs the linter on the repo files and asserts no errors were found.
	const report = new eslint.CLIEngine(eslintOpts).executeOnFiles(repoFiles);

	report.results.forEach((res) => {
		res.messages.length && console.log(res.messages);
	});

	assert.equal(report.errorCount, 0);
	assert.equal(report.warningCount, 0);

	repoFiles.forEach((file, index) => {
		assert(report.results[index].filePath.endsWith(file.slice(1)));
	});

	console.log('✅ ', name);
};

test('base', base);
test('react', react);

console.log('done');
