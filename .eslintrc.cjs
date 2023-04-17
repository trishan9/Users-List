module.exports = {
	env: {
		es2021: true,
		node: true,
	},
	extends: ["plugin:react/recommended"],
	overrides: [],
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["react"],
	rules: {
		"react/react-in-jsx-scope": "off",
		quotes: [ "error", "double" ],
		indent: [ "error", "tab" ],
		semi: [ "error", "always" ],
		"no-alert": ["error"],
		"no-console": ["error"],
		"max-len": [ "error",
			{
				"code": 175,
				"ignoreUrls": true,
				"ignoreStrings": true
			}],
		"no-multi-spaces": "error",
		"key-spacing": ["error"],
		"no-trailing-spaces": [ "error",{
			"ignoreComments": true
		}],
		"object-curly-newline": [ "error", {
			"ObjectExpression": "always",
			"ImportDeclaration": "never",
			"ExportDeclaration": "never"
		}],
		"object-curly-spacing": [ "error", "always" ],
		"array-bracket-spacing": [ "error", "always", {
			"singleValue": false,
			"objectsInArrays": false,
			"arraysInArrays": false
		}],
		"space-in-parens": [ "error", "never" ],
		"no-multiple-empty-lines": [ "error", {
			"max": 1, "maxBOF": 0, "maxEOF": 0
		}],
		camelcase: ["error"],
		"no-inline-comments": "error",
		// "no-magic-numbers": [ "error",{
		// 	"ignoreArrayIndexes": true,
		// 	"ignoreDefaultValues": true,
		// 	"ignoreClassFieldInitialValues": true,
		// }],
		"no-negated-condition": "error",
		"no-nested-ternary": "error",
		"no-var": "error",
		"require-await": "error",
		"no-unused-vars": "error",
		"no-useless-catch": "error",
	},
};