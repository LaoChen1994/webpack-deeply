const { merge } = require('webpack-merge')
const common = require('./webpack.config')

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
  devtool: 'source-map'
})