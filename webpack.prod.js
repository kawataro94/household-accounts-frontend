const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
	mode: 'production',
	plugins: [
		new webpack.DefinePlugin({
			'process.env.RUN_ENV': JSON.stringify('production'),
		}),
		new HtmlWebpackPlugin({
			title: 'Household-Accounts Prod',
			template: path.resolve(__dirname, 'template.ejs'),
			hash: true,
		}),
	],
});
