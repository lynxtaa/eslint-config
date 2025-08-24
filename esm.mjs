// @ts-check

import tseslint from 'typescript-eslint'

export default tseslint.config({
	files: ['**/*.ts?(x)', '**/*.js?(x)'],
	rules: {
		'import-x/no-useless-path-segments': ['warn', { noUselessIndex: false }],
		'unicorn/prefer-module': 'error',
		'unicorn/prefer-top-level-await': 'warn',
	},
})
