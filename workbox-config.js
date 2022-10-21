module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{png,xml,ico,html,json,md,js,svg,css}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};