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
		// 'prettier/prettier': 0,
		semi: ["error", "never"],
		// "react/no-unescaped-entities": "off",
		// "@next/next/no-page-custom-font": "off",

	},
}