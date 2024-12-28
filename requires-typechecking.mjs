// @ts-check

import tseslint from 'typescript-eslint'

export default tseslint.config(...tseslint.configs.recommendedTypeCheckedOnly, {
	files: ['**/*.ts?(x)', '**/*.mts'],
	rules: {
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-unsafe-assignment': 'off',
		'@typescript-eslint/no-unsafe-call': 'off',
		'@typescript-eslint/no-unsafe-member-access': 'off',
		'@typescript-eslint/prefer-optional-chain': 'warn',
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
})
