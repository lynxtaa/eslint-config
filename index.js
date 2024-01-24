const esmConfig = require('./esm.js')

module.exports = {
	reportUnusedDisableDirectives: true,
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
		'dot-notation': 'warn',
		'eqeqeq': ['warn', 'smart'],
		'func-names': ['warn', 'never'],
		'global-require': 'warn',
		'guard-for-in': 'error',
		'import/newline-after-import': 'warn',
		'import/no-extraneous-dependencies': 'error',
		'import/no-unresolved': 'off',
		'import/order': [
			'warn',
			{
				'alphabetize': { order: 'asc' },
				'newlines-between': 'always',
			},
		],
		'max-statements-per-line': ['warn', { max: 1 }],
		'no-array-constructor': 'error',
		'no-async-promise-executor': 'error',
		'no-console': ['warn', { allow: ['warn', 'error'] }],
		'no-constant-binary-expression': 'error',
		'no-constant-condition': 'off',
		'no-div-regex': 'error',
		'no-duplicate-imports': 'error',
		'no-else-return': 'warn',
		'no-extend-native': 'error',
		'no-extra-bind': 'error',
		'no-implicit-coercion': 'warn',
		'no-implied-eval': 'error',
		'no-lonely-if': 'error',
		'no-loop-func': 'error',
		'no-multi-assign': 'error',
		'no-new-object': 'error',
		'no-octal-escape': 'error',
		'no-param-reassign': ['warn'],
		'no-prototype-builtins': ['off'],
		'no-return-assign': 'error',
		'no-self-compare': 'error',
		'no-sequences': 'error',
		'no-throw-literal': 'error',
		'no-unmodified-loop-condition': 'error',
		'no-unneeded-ternary': 'error',
		'no-unused-expressions': 'error',
		'no-unused-private-class-members': 'warn',
		'no-unused-vars': ['error', { ignoreRestSiblings: true }],
		'no-useless-call': 'error',
		'no-useless-computed-key': 'error',
		'no-useless-concat': 'error',
		'no-useless-constructor': 'off',
		'no-useless-rename': 'error',
		'no-useless-return': 'warn',
		'no-var': 'error',
		'no-void': ['error', { allowAsStatement: true }],
		'no-with': 'error',
		'object-shorthand': 'error',
		'one-var': ['error', 'never'],
		'prefer-arrow-callback': 'error',
		'prefer-const': ['error', { destructuring: 'all' }],
		'prefer-destructuring': 'warn',
		'prefer-exponentiation-operator': 'warn',
		'prefer-numeric-literals': 'warn',
		'prefer-object-has-own': 'warn',
		'prefer-object-spread': 'warn',
		'prefer-promise-reject-errors': 'error',
		'prefer-regex-literals': 'error',
		'prefer-rest-params': 'error',
		'prefer-spread': 'error',
		'prefer-template': 'error',
		'radix': 'error',
		'require-atomic-updates': 'warn',
		'space-before-function-paren': ['off'],
		'strict': ['error', 'never'],
		'symbol-description': 'warn',
		'unicorn/catch-error-name': 'off',
		'unicorn/filename-case': 'off',
		'unicorn/no-array-callback-reference': 'off',
		'unicorn/no-await-expression-member': 'off',
		'unicorn/no-negated-condition': 'off',
		'unicorn/no-nested-ternary': 'off',
		'unicorn/no-null': 'off',
		'unicorn/no-process-exit': 'off',
		'unicorn/no-useless-undefined': 'off',
		'unicorn/numeric-separators-style': 'off',
		'unicorn/prefer-module': 'off',
		'unicorn/prefer-top-level-await': 'off',
		'unicorn/prefer-type-error': 'off',
		'unicorn/prevent-abbreviations': 'off',
		'unicorn/switch-case-braces': 'off',
		'unicorn/template-indent': 'off',
		'yoda': 'error',
	},
	overrides: [
		{
			files: ['*.ts?(x)'],
			extends: [
				'plugin:import/typescript',
				'plugin:@typescript-eslint/recommended',
				'prettier', // again, to disable @typescript-eslint/recommended formatting rules
			],
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
				'@typescript-eslint/no-extra-semi': 'off',
				'@typescript-eslint/no-useless-constructor': 'warn',
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
			...esmConfig,
		},
		{
			files: ['*.tsx'],
			rules: {
				'@typescript-eslint/explicit-module-boundary-types': 'off',
			},
		},
	],
}
