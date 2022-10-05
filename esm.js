module.exports = {
	overrides: [
		{
			files: ['!*.cts', '!*.cjs'],
			rules: {
				'import/extensions': ['error', 'ignorePackages'],
				'import/no-useless-path-segments': ['warn', { noUselessIndex: false }],
				'unicorn/prefer-module': 'error',
			},
		},
	],
}
