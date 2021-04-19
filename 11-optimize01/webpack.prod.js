const { merge } = require('webpack-merge')
const common = require('./webpack.config')
const uglyWebpackPlugin = require('uglifyjs-webpack-plugin')
const path = require('path')
// const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin')

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimizer: [
      new uglyWebpackPlugin({
        cache: true,
        test: /\.js(\?.*)?$/i,
        include: [path.resolve(__dirname, './dist')],
        parallel: true,
        uglifyOptions: {
          compress: {
            drop_console: true,
            warnnings: false
          },
          output: {
            beautify: false,
            comments: false
          }
        }
      })
    ]
  }
})