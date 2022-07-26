const presets = [
	[
		"@babel/env",
		{
			targets: {
				ie: "10",
				edge: "17",
				firefox: "60",
				chrome: "67",
				safari: "11.1",
			},
		},
	],
	[
		"@babel/preset-modules"
	]
];
const plugins = [
	'@babel/plugin-transform-template-literals',
	'@babel/plugin-transform-arrow-functions'
]
module.exports = { presets, plugins };