module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
		es6: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:@next/next/recommended',
		'plugin:jsx-a11y/recommended',
		'next',
		'next/core-web-vitals',
		// "pwa:recommended",
	],
	rules: {
		semi: ["error", "never"],
		"css-semicolonexpected": 0,
		"quote-props": ["error", "as-needed"],
		"react/prop-types": 0,
		"declaration-block-trailing-semicolon": 0,
		// 'prettier/prettier': 0,
		// "react/no-unescaped-entities": "off",
		// "@next/next/no-page-custom-font": "off",

		
	},

	// plugins: [
	// 	"jsx-a11y/click-events-have-key-events",
	// 	"jsx-a11y/no-static-element-interactions",
		
	// ]

}