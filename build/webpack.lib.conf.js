'use strict'
const path = require('path')
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')

const env = require('../config/prod.env')

const webpackConfig = merge(baseWebpackConfig, {
	module: {
		rules: utils.styleLoaders({
			sourceMap: false,
			usePostCSS: true
		})
	},
	entry: {
		UiAlert: ['./src/components/Alert.vue'],
		UiSelect: ['./src/components/Select.vue']
	},

	output: {
		path: config.build.assetsLib,
		filename: '[name].min.js',
		library: ['UiLibrary', '[name]'],
		libraryTarget: 'umd'
	},

	plugins: [
		new webpack.LoaderOptionsPlugin({
			minimize: true
		}),

		// http://vuejs.github.io/vue-loader/en/workflow/production.html
		new webpack.DefinePlugin({
			'process.env': env
		}),

		// UglifyJs do not support ES6+, you can also use babel-minify for better treeshaking: https://github.com/babel/minify
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			},
			parallel: true
		})
	]
})

module.exports = webpackConfig
