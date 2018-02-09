// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
	plugins: {
		// to edit target browsers: use "browserslist" field in package.json
		'postcss-import': {},
		autoprefixer: {},
		'postcss-simple-vars': {},
		'postcss-nested': {},
		'postcss-color-function': {},
		'postcss-svg': {},
		'postcss-pxtorem': {
			rootValue: 14,
			unitPrecision: 5,
			propList: ['*']
		}
	}
}
