const { merge } = require('webpack-merge')
const common = require('./webpack.config')
const path = require('path')
const DefinePlugin = require('webpack/lib/DefinePlugin')

module.exports = merge(common, {
  mode: 'development',
  watch: true,
  watchOptions: {
    ignored: /node_modules/,
    // 多次聚合成一次打包
    aggregateTimeout: 300,
    // 轮训频率
    poll: 1000
  },
  devtool: 'source-map',
  plugins: [
    new DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ]
  // devServer: {
  //   hot: true,
  //   contentBase: path.resolve(__dirname, './dist')
  // }
})