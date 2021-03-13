const webpack = require('webpack');
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.RUN_ENV': JSON.stringify('production')
    })
  ]
});