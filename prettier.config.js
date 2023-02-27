module.exports = {
	tabWidth: 4,
	printWidth: 120,
	proseWrap: 'preserve',
	semi: false,
	trailingComma: 'es5',
	singleQuote: true,
	arrowParens: 'avoid',
	overrides: [
		{
			files: '{*.js?(on),*.js,*.y?(a)ml,.*.js?(on),.*.y?(a)ml,*.md,.prettierrc,.stylelintrc,.babelrc,.html,.sh,*.vue}',
			options: {
				tabWidth: 2,
			},
		},
		{
			files: '{**/.vscode/*.json,**/tsconfig.json,**/tsconfig.*.json}',
			options: {
				parser: 'json5',
				quoteProps: 'preserve',
				singleQuote: false,
				trailingComma: 'all',
			},
		},
	],
}
