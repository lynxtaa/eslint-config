export default [
	{
		files: ['*.ts?(x)', '*.js?(x)', '*.mjs', '*.mts'],
		rules: {
			'import/extensions': ['error', 'ignorePackages'],
			'import/no-useless-path-segments': ['warn', { noUselessIndex: false }],
			'unicorn/prefer-module': 'error',
			'unicorn/prefer-top-level-await': 'warn',
		},
	},
]
