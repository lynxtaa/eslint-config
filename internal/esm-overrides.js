module.exports = {
	'import/extensions': ['error', 'ignorePackages'],
	'no-restricted-globals': [
		'error',
		'require',
		'module',
		'exports',
		'__dirname',
		'__filename',
	],
	'import/no-useless-path-segments': ['warn', { noUselessIndex: false }],
}
