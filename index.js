const esmOverrides = require('./internal/esm-overrides')

module.exports = {
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:import/typescript',
		'prettier',
	],
	plugins: ['@typescript-eslint', 'import'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 'latest',
	},
	settings: {
		'import/parsers': {
			[require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts'],
		},
		'import/resolver': {
			[require.resolve('eslint-import-resolver-node')]: {
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
			},
			[require.resolve('eslint-import-resolver-typescript')]: {
				alwaysTryTypes: true,
			},
		},
	},
	env: {
		es6: true,
		jest: true,
		node: true,
	},
	rules: {
		'no-console': 'warn',

		// Plugin import
		'import/order': [
			'warn',
			{ 'alphabetize': { order: 'asc' }, 'newlines-between': 'always' },
		],
		// doesn't work with "exports" field in package.json
		'import/no-unresolved': 'off',
		'import/newline-after-import': 'warn',

		// Plugin Typescript
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/prefer-optional-chain': 'warn',
		'@typescript-eslint/explicit-module-boundary-types': [
			'warn',
			{ allowArgumentsExplicitlyTypedAsAny: true },
		],
		'@typescript-eslint/no-non-null-assertion': 'off',
		'@typescript-eslint/no-unsafe-assignment': 'off',
	},
	overrides: [
		{
			files: ['*.mjs', '*.mts'],
			...esmOverrides,
		},
		{
			files: ['*.js'],
			rules: {
				'@typescript-eslint/no-var-requires': 'off',
			},
		},
		{
			files: ['*.tsx'],
			rules: {
				'@typescript-eslint/explicit-module-boundary-types': 'off',
			},
		},
	],
}
