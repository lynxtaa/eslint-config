export default [
	{
		files: ['**/*.ts?(x)', '**/*.js?(x)'],
		rules: {
			'import/extensions': ['error', 'ignorePackages'],
			'import/no-useless-path-segments': ['warn', { noUselessIndex: false }],
			'unicorn/prefer-module': 'error',
			'unicorn/prefer-top-level-await': 'warn',
		},
	},
]
