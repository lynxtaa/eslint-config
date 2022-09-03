module.exports = {
	overrides: [
		{
			files: ['*.ts?(x)'],
			extends: ['plugin:@typescript-eslint/recommended-requiring-type-checking'],
			rules: {
				'@typescript-eslint/no-unsafe-assignment': 'off',
				'@typescript-eslint/no-unsafe-call': 'off',
				'@typescript-eslint/no-unsafe-member-access': 'off',
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
	],
}
