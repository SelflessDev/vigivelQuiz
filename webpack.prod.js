const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = merge(common, {
	module: {
		rules: [
			// {
			// 	test: /\.js?$/,
			// 	use: [
			// 		{
			// 			loader: 'babel-loader',
			// 			options: {
			// 				presets: ['env', 'stage-0', 'react']
			// 			}
			// 		},
			// 		'react-classname-prefix-loader?prefix=quiz'
			// 	],
			// 	exclude: path.resolve(__dirname, 'node_modules')
			// },
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader',
							options: {
								minimize: true,
								sourceMap: true
							}
						},
						// 'postcss-loader'
					]
				})
			},
			{
				test: /\.(gif|png|jpe?g|svg)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '/footage/[name].[ext]'
						}
					},
					{
						loader: 'image-webpack-loader'
					}
				]
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		}),
		new UglifyJsPlugin({
			sourceMap: true
		})
	]
})