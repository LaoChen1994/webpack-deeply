const { merge } = require('webpack-merge')
const common = require('./webpack.config')
const uglyWebpackPlugin = require('uglifyjs-webpack-plugin')

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimizer: [
      new uglyWebpackPlugin({
        cache: true
      })
    ]
  }
})