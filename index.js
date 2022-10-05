module.exports = {
	extends: [
		'eslint:recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:unicorn/recommended',
		'prettier',
	],
	plugins: ['import'],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 'latest',
	},
	env: {
		es6: true,
		jest: true,
		node: true,
	},
	rules: {
		'no-console': 'warn',
		'import/order': [
			'warn',
			{ 'alphabetize': { order: 'asc' }, 'newlines-between': 'always' },
		],
		// doesn't work with "exports" field in package.json
		'import/no-unresolved': 'off',
		'import/newline-after-import': 'warn',

		'unicorn/filename-case': 'off',
		'unicorn/prevent-abbreviations': 'off',
		'unicorn/no-array-callback-reference': 'off',
		'unicorn/catch-error-name': 'off',
		'unicorn/no-nested-ternary': 'off',
		'unicorn/no-null': 'off',
		'unicorn/prefer-module': 'off',
	},
	overrides: [
		{
			files: ['*.ts?(x)'],
			extends: ['plugin:import/typescript', 'plugin:@typescript-eslint/recommended'],
			plugins: ['@typescript-eslint'],
			parser: '@typescript-eslint/parser',
			parserOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module',
				ecmaFeatures: { jsx: true },
				warnOnUnsupportedTypeScriptVersion: true,
			},
			rules: {
				'@typescript-eslint/no-explicit-any': 'off',
				'@typescript-eslint/prefer-optional-chain': 'warn',
				'@typescript-eslint/explicit-module-boundary-types': [
					'warn',
					{ allowArgumentsExplicitlyTypedAsAny: true },
				],
				'@typescript-eslint/no-non-null-assertion': 'off',
				'@typescript-eslint/no-unsafe-assignment': 'off',
			},
		},
		{
			files: ['*.mjs', '*.mts'],
			...require('./esm'),
		},
		{
			files: ['*.tsx'],
			rules: {
				'@typescript-eslint/explicit-module-boundary-types': 'off',
			},
		},
	],
}
