'use strict';

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { merge } = require('webpack-merge')
const common = require('./config/webpack.common')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  entry: path.resolve(__dirname, './index.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.js',
  },
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'source-map',
  devServer: {
    host: 'localhost',
    port: 3000,
    contentBase: path.resolve(__dirname, './dist'),
    open: true
  },
  plugins: [
    // 插件和webpack兼容问题
    // new HtmlWebpackPlugin({
    //   template: path.resolve(__dirname, './src/template.html'),
    //   filename: 'index.html',
    //   open: true
    // }),
    // new MiniCssExtractPlugin({
    //   filename: '[name]_[contenthash:8].css'
    // }),
  ]
});
