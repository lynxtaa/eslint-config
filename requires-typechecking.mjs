import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all,
})

export default [
	...compat
		.extends('plugin:@typescript-eslint/recommended-requiring-type-checking')
		.map(config => ({
			...config,
			files: ['**/*.ts?(x)'],
		})),
	{
		files: ['**/*.ts?(x)'],
		rules: {
			'@typescript-eslint/no-explicit-any': 'off',
			'@typescript-eslint/no-unsafe-assignment': 'off',
			'@typescript-eslint/no-unsafe-call': 'off',
			'@typescript-eslint/no-unsafe-member-access': 'off',
			'@typescript-eslint/promise-function-async': 'warn',
			'@typescript-eslint/require-await': 'off',

			'@typescript-eslint/strict-boolean-expressions': [
				'warn',
				{
					allowString: false,
					allowNumber: false,
					allowNullableObject: true,
					allowNullableBoolean: false,
					allowNullableString: false,
					allowNullableNumber: false,
					allowAny: false,
					allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
				},
			],
		},
	},
]
